package psi.lesotho.service;

import java.io.IOException;
import java.io.UnsupportedEncodingException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.json.JSONArray;
import org.json.JSONObject;

public class EventController
    extends HttpServlet
{
    /**
     * 
     */
    private static final long serialVersionUID = -8009460801270486913L;

    private static String PARAM_USERNAME = "@PARAM_USERNAME";
    private static String PARAM_START_DATE = "@PARAM_START_DATE";
    private static String PARAM_END_DATE = "@PARAM_END_DATE";
    private static String PARAM_EVENT_ID = "@PARAM_EVENT_ID";
    private static String PARAM_ORGUNIT_ID = "@PARAM_ORGUNIT_ID";

    private static String URL_QUERY_CASES_BY_TIME = Util.LOCATION_DHIS_SERVER
        + "/api/sqlViews/IdFgIYoRINL/data.json?var=startDate:" + EventController.PARAM_START_DATE + "&var=endDate:"
        + EventController.PARAM_END_DATE + "&var=username:" + PARAM_USERNAME + "&var=stageId:" + Util.STAGE_ID;

    private static String URL_QUERY_POSITIVE_CASES = Util.LOCATION_DHIS_SERVER
        + "/api/sqlViews/mayPuvHkJ7G/data.json?var=startDate:" + EventController.PARAM_START_DATE + "&var=endDate:"
        + EventController.PARAM_END_DATE + "&var=username:" + PARAM_USERNAME + "&var=stageId:" + Util.STAGE_ID;
    
    private static String URL_QUERY_EVENT_BY_ID = Util.LOCATION_DHIS_SERVER
        + "/api/events/" + EventController.PARAM_EVENT_ID + ".json";


    private static String URL_QUERY_METADATA = Util.LOCATION_DHIS_SERVER
        + "/api/programs/KDgzpKX3h2S.json?fields=programStages[programStageDataElements[dataElement[id,optionSet[options[code,name]]]]],programTrackedEntityAttributes[trackedEntityAttribute[id,optionSet[options[code,name]]]";
    private static String URL_QUERY_ORGUNIT = Util.LOCATION_DHIS_SERVER
        + "/api/organisationUnits/" + PARAM_ORGUNIT_ID + ".json?fields=name,parent[name]";
    

    protected void doPost( HttpServletRequest request, HttpServletResponse response )
        throws ServletException, IOException
    {
        try
        {
            // STEP 1. Get loginUsername/password from session

            HttpSession session = request.getSession( true );
            String loginUsername = (String) session.getAttribute( Util.KEY_LOGIN_USERNAME );

            // STEP 2. Check loginUsername/password

            ResponseInfo responseInfo = null;

            if ( request.getPathInfo() != null && request.getPathInfo().split( "/" ).length >= 2 )
            {
                String[] queryPathList = request.getPathInfo().split( "/" );

                String key = queryPathList[1];

                // Load Today's case
                if ( key.equals( Util.KEY_TODAY_CASES ) )
                {
                    responseInfo = EventController.getTodayCases( request, loginUsername );
                }

                // Load Previous case
                else if ( key.equals( Util.KEY_PREVIOUS_CASES ) )
                {
                    responseInfo = EventController.getPreviousCases( request, loginUsername );
                }
                // Load Previous case
                else if ( key.equals( Util.KEY_POSITIVE_CASES ) )
                {
                    responseInfo = EventController.getPositiveCases( request, loginUsername );
                }
                // Add / Update Event
                else if ( key.equals( Util.KEY_SAVE_EVENT ) )
                {
                    String ouId = request.getParameter( Util.PAMAM_ORGUNIT_ID );
                    String clientId = request.getParameter( Util.PAMAM_CLIENT_ID );
                    String eventId = request.getParameter( Util.PAMAM_EVENT_ID );
                    JSONObject receivedData = Util.getJsonFromInputStream( request.getInputStream() );

                    // Create Event
                    if ( eventId == null )
                    {
                        responseInfo = EventController.createEvent( receivedData, clientId, ouId, loginUsername );
                    }
                    // Update Event
                    else
                    {
                        responseInfo = EventController.updateEvent( eventId, receivedData, loginUsername );
                    }
                } 
                // Load event by ID
                else if ( key.equals( Util.KEY_GET_EVENT_DETAILS ) )
                {
                    String outputData = "";
                    String eventId = request.getParameter( Util.PAMAM_EVENT_ID );
                    responseInfo = EventController.getEventById( eventId );
                    
                    if( responseInfo.responseCode == 200 )
                    {
                        outputData +="\"eventDetails\":" + responseInfo.output;
                        
                        JSONObject jsonEvent = new JSONObject ( responseInfo.output );
                        String ouId = jsonEvent.getString("orgUnit");
                        String catOptionId = jsonEvent.getString("attributeCategoryOptions" );
                        responseInfo = EventController.getEventOrgUnit( ouId );
                        if( responseInfo.responseCode == 200 )
                        {
                            outputData += ",\"ouInfo\":" + responseInfo.output;
                            
                            responseInfo = EventController.getMetaData();
                            if( responseInfo.responseCode == 200 )
                            {
                                outputData += ",\"metaData\":" + responseInfo.output;
                                outputData += ",\"catOptCode\":\"" + EventController.getCatOptionComboCode( catOptionId ) + "\""; 
                                outputData = "{" + outputData + "}";
                                responseInfo.output = outputData;
                            }
                        }
                    }
                } 
                // Load report
                else if ( key.equals( Util.KEY_GET_REPORT ) )
                {
                    responseInfo = EventController.getReport( loginUsername );
                    String output = "\"report\":" + responseInfo.output + "";
                    
                    if( responseInfo.responseCode == 200 )
                    {
                        ResponseInfo responseInfo_AnalyticsTime = EventController.getAnalyticsTime();
                        if( responseInfo_AnalyticsTime.responseCode == 200 )
                        {
                                JSONObject analyticsTime = new JSONObject( responseInfo_AnalyticsTime.output );
                                String time = analyticsTime.getString( "intervalSinceLastAnalyticsTableSuccess" );
                                time = time.replace("s", "seconds");
                                time = time.replace("m", "minutes");
                                time = time.replace("h", "hours");                                                              
                                
                                output += ",\"analyticsTime\":\"" + time + "\"";
                        }
                    }
                    
                    responseInfo.output = "{" + output + "}";
                }
            }

            // STEP 4. Send back the messages
            responseInfo.outMessage = responseInfo.output;
            Util.respondMsgOut( responseInfo, response );

        }
        catch ( IOException ex )
        {
            System.out.println( "IO Excpetion: " + ex.toString() );
        }
        catch ( Exception ex )
        {
            System.out.println( "Exception: " + ex.toString() );
        }
    }

    // ===============================================================================================================
    // Suportive methods
    // ===============================================================================================================

    private static ResponseInfo getTodayCases( HttpServletRequest request, String loginUsername )
        throws UnsupportedEncodingException, ServletException, IOException, Exception
    {
        ResponseInfo responseInfo = null;

        try
        {
            String curDate = Util.getCurrentDate();
            String tomorrow = Util.getXLastDate( -1 );

            String requestUrl = EventController.URL_QUERY_CASES_BY_TIME;
            requestUrl = requestUrl.replace( PARAM_USERNAME, loginUsername );
            requestUrl = requestUrl.replace( PARAM_START_DATE, curDate );
            requestUrl = requestUrl.replace( PARAM_END_DATE, tomorrow );

            responseInfo = Util.sendRequest( Util.REQUEST_TYPE_GET, requestUrl, null, null );

        }
        catch ( Exception ex )
        {
            System.out.println( "Exception: " + ex.toString() );
        }

        return responseInfo;
    }

    private static ResponseInfo getPreviousCases( HttpServletRequest request, String loginUsername )
        throws UnsupportedEncodingException, ServletException, IOException, Exception
    {
        ResponseInfo responseInfo = null;

        try
        {
            String startDate = "1900-01-01";
            String endDate = Util.getCurrentDate();

            String requestUrl = EventController.URL_QUERY_CASES_BY_TIME;
            requestUrl = requestUrl.replace( PARAM_USERNAME, loginUsername );
            requestUrl = requestUrl.replace( PARAM_START_DATE, startDate );
            requestUrl = requestUrl.replace( PARAM_END_DATE, endDate );

            responseInfo = Util.sendRequest( Util.REQUEST_TYPE_GET, requestUrl, null, null );

        }
        catch ( Exception ex )
        {
            System.out.println( "Exception: " + ex.toString() );
        }

        return responseInfo;
    }

    private static ResponseInfo getPositiveCases( HttpServletRequest request, String loginUsername )
        throws UnsupportedEncodingException, ServletException, IOException, Exception
    {
        ResponseInfo responseInfo = null;

        try
        {
            String startDate = Util.getXLastMonth( 12 );
            String endDate = Util.getXLastDate( -1 );

            String requestUrl = EventController.URL_QUERY_POSITIVE_CASES;
            requestUrl = requestUrl.replace( PARAM_USERNAME, loginUsername );
            requestUrl = requestUrl.replace( PARAM_START_DATE, startDate );
            requestUrl = requestUrl.replace( PARAM_END_DATE, endDate );

            responseInfo = Util.sendRequest( Util.REQUEST_TYPE_GET, requestUrl, null, null );

        }
        catch ( Exception ex )
        {
            System.out.println( "Exception: " + ex.toString() );
        }

        return responseInfo;
    }

    private static String getCatOptionComboUid( String loginUsername )
    {
        String catOptionComboId = "";
        
        try
        {
            String url = Util.LOCATION_DHIS_SERVER + "/api/categoryOptions.json?fields=id,name,code&filter=code:eq:" + loginUsername;
            ResponseInfo responseInfo = Util.sendRequest( Util.REQUEST_TYPE_GET, url, null, null );
            
            if ( responseInfo.responseCode == 200 )
            {
                JSONObject catOptionCombo = new JSONObject( responseInfo.output );
                JSONArray catOptionComboList = catOptionCombo.getJSONArray( "categoryOptions" );
                catOptionComboId = catOptionComboList.getJSONObject( 0 ).getString( "id" );

            }
        }
        catch ( Exception ex )
        {
            ex.printStackTrace();
        }

        return catOptionComboId;
    }
    
    private static String getCatOptionComboCode( String id )
    {
        String code = "";
        
        try
        {
            String url = Util.LOCATION_DHIS_SERVER + "/api/categoryOptions/" + id + ".json?fields=code";
            ResponseInfo responseInfo = Util.sendRequest( Util.REQUEST_TYPE_GET, url, null, null );
            
            if ( responseInfo.responseCode == 200 )
            {
                JSONObject catOptionCombo = new JSONObject( responseInfo.output );
                code = catOptionCombo.getString( "code" );
            }
        }
        catch ( Exception ex )
        {
            ex.printStackTrace();
        }

        return code;
    }
    
    private static ResponseInfo getReport( String loginUsername )
    {
        ResponseInfo responseInfo = new ResponseInfo();
        
        String catOptionComboId = EventController.getCatOptionComboUid( loginUsername );
        if ( catOptionComboId != null )
        {
            try
            {
                String url = Util.LOCATION_DHIS_SERVER + "/api/25/analytics.json?dimension=dx:I2oytRXksKN;rcVLQsClLUa;sNS1PQ1YNXA&dimension=pe:LAST_4_WEEKS;LAST_WEEK;THIS_WEEK&dimension=" + Util.USER_CATEGORY_ID + ":" + catOptionComboId + "&filter=ou:" + Util.ROOT_ORGTUNIT + "&skipMeta=true";
                responseInfo = Util.sendRequest( Util.REQUEST_TYPE_GET, url, null, null );
            }
            catch ( Exception ex )
            {
                ex.printStackTrace();
            }
        }
        else
        {
            responseInfo.responseCode = 404;
        }
       

        return responseInfo;
    }
    
    public static ResponseInfo createEvent( JSONObject eventData, String clientId, String ouId, String loginUsername )
        throws IOException, Exception
    {
        ResponseInfo responseInfo = new ResponseInfo();

        try
        {
            String catOptionComboId = EventController.getCatOptionComboUid( loginUsername );

            if ( catOptionComboId != null )
            {
                JSONObject eventJson = EventController.composeJsonEvent( eventData, clientId, ouId, catOptionComboId );
                
                String requestUrl = Util.LOCATION_DHIS_SERVER + "/api/events";
                responseInfo = Util.sendRequest( Util.REQUEST_TYPE_POST, requestUrl, eventJson, null );

                if( responseInfo.responseCode == 200 )
                {
                    Util.processResponseMsg( responseInfo, "importSummaries" );

                    String eventId = responseInfo.referenceId;
                    eventJson.put( "event", eventId );
                    responseInfo.output = eventJson.toString();
                }
            }
            else
            {
                responseInfo.responseCode = 404;
            }

        }
        catch ( Exception ex )
        {
            ex.printStackTrace();
        }

        return responseInfo;
    }

    public static ResponseInfo updateEvent( String eventId, JSONObject eventData, String loginUsername )
        throws IOException, Exception
    {
        ResponseInfo responseInfo = new ResponseInfo();

        try
        {
            String requestUrl = Util.LOCATION_DHIS_SERVER + "/api/events/" + eventId;
            responseInfo = Util.sendRequest( Util.REQUEST_TYPE_PUT, requestUrl, eventData, null );

            if( responseInfo.responseCode == 200 )
            {
                Util.processResponseMsg( responseInfo, "importSummaries" );
                responseInfo.output = eventData.toString();
            }

        }
        catch ( Exception ex )
        {
            ex.printStackTrace();
        }

        return responseInfo;
    }

    public static ResponseInfo getEventsByClient( String clientId )
        throws UnsupportedEncodingException, ServletException, IOException, Exception
    {
        ResponseInfo responseInfo = null;

        try
        {
            String requestUrl = Util.LOCATION_DHIS_SERVER
                + "/api/events.json?ouMode=ACCESSIBLE&skipPaging=true&order=eventDate:DESC&trackedEntityInstance=" + clientId;
            responseInfo = Util.sendRequest( Util.REQUEST_TYPE_GET, requestUrl, null, null );
        }
        catch ( Exception ex )
        {
            System.out.println( "Exception: " + ex.toString() );
        }

        return responseInfo;
    }
    
    public static ResponseInfo getEventById( String eventId )
        throws UnsupportedEncodingException, ServletException, IOException, Exception
    {
        ResponseInfo responseInfo = null;

        try
        {
            String requestUrl = EventController.URL_QUERY_EVENT_BY_ID;
            requestUrl = requestUrl.replace( EventController.PARAM_EVENT_ID, eventId );
            responseInfo = Util.sendRequest( Util.REQUEST_TYPE_GET, requestUrl, null, null );
        }
        catch ( Exception ex )
        {
            System.out.println( "Exception: " + ex.toString() );
        }

        return responseInfo;
    }
    
    public static ResponseInfo getMetaData()
        throws UnsupportedEncodingException, ServletException, IOException, Exception
    {
        ResponseInfo responseInfo = null;

        try
        {
            String requestUrl = EventController.URL_QUERY_METADATA;
            responseInfo = Util.sendRequest( Util.REQUEST_TYPE_GET, requestUrl, null, null );
        }
        catch ( Exception ex )
        {
            System.out.println( "Exception: " + ex.toString() );
        }

        return responseInfo;
    }

    public static ResponseInfo getEventOrgUnit( String ouId )
        throws UnsupportedEncodingException, ServletException, IOException, Exception
    {
        ResponseInfo responseInfo = null;

        try
        {
            String requestUrl = EventController.URL_QUERY_ORGUNIT;
            requestUrl = requestUrl.replace( EventController.PARAM_ORGUNIT_ID, ouId );
            responseInfo = Util.sendRequest( Util.REQUEST_TYPE_GET, requestUrl, null, null );
        }
        catch ( Exception ex )
        {
            System.out.println( "Exception: " + ex.toString() );
        }

        return responseInfo;
    }
    
    public static ResponseInfo getAnalyticsTime() throws Exception, IOException
    {
        String requestUrl = Util.LOCATION_DHIS_SERVER + "/api/system/info.json";
        
        return Util.sendRequest( Util.REQUEST_TYPE_GET, requestUrl, null, null );
    }
    
    // CREATE JSON FOR THIS - add voucher Id, linking info.. etc..
    private static JSONObject composeJsonEvent( JSONObject eventData, String teiId, String orgUnitId,
        String catOptionComboId )
    {
        eventData.put( "program", Util.PROGRAM_ID );
        eventData.put( "programStage", Util.STAGE_ID );
        eventData.put( "orgUnit", orgUnitId );
        eventData.put( "trackedEntityInstance", teiId );
        eventData.put( "eventDate", Util.getCurrentDateTime() );
        eventData.put( "status", "ACTIVE" );
        eventData.put( "attributeCategoryOptions", catOptionComboId );

        if ( eventData.isNull( "dataValues" ) )
        {
            eventData.put( "dataValues", new JSONArray() );
        }
        
        System.out.println( "\n\n ***** \n eventData : " + eventData );
        return eventData;
    }

}
