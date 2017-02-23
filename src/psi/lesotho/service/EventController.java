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

    private static String URL_QUERY_CASES_BY_TIME = Util.LOCATION_DHIS_SERVER
        + "/api/sqlViews/IdFgIYoRINL/data.json?var=startDate:" + EventController.PARAM_START_DATE + "&var=endDate:"
        + EventController.PARAM_END_DATE + "&var=username:" + PARAM_USERNAME + "&var=stageId:" + Util.STAGE_ID;

    private static String URL_QUERY_POSITIVE_CASES = Util.LOCATION_DHIS_SERVER
        + "/api/sqlViews/mayPuvHkJ7G/data.json?var=startDate:" + EventController.PARAM_START_DATE + "&var=endDate:"
        + EventController.PARAM_END_DATE + "&var=username:" + PARAM_USERNAME + "&var=stageId:" + Util.STAGE_ID;

    protected void doPost( HttpServletRequest request, HttpServletResponse response )
        throws ServletException, IOException
    {
        try
        {
            // STEP 1. Get username/password from session

            HttpSession session = request.getSession( true );
            String username = (String) session.getAttribute( Util.KEY_ACCESS_SERVER_USERNAME );
            String password = (String) session.getAttribute( Util.KEY_ACCESS_SERVER_PASSWORD );

            // STEP 2. Check username/password

            ResponseInfo responseInfo = null;

            if ( request.getPathInfo() != null && request.getPathInfo().split( "/" ).length >= 2 )
            {
                String[] queryPathList = request.getPathInfo().split( "/" );

                String key = queryPathList[1];

                // Load Today's case
                if ( key.equals( Util.KEY_TODAY_CASES ) )
                {
                    responseInfo = EventController.getTodayCases( request, username, password );
                }

                // Load Previous case
                else if ( key.equals( Util.KEY_PREVIOUS_CASES ) )
                {
                    responseInfo = EventController.getPreviousCases( request, username, password );
                }

                // Load Previous case
                else if ( key.equals( Util.KEY_POSITIVE_CASES ) )
                {
                    responseInfo = EventController.getPositiveCases( request, username, password );
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
                        responseInfo = EventController.createEvent( receivedData, clientId, ouId, username, password );
                    }
                    // Update Event
                    else
                    {
                        responseInfo = EventController.updateEvent( eventId, receivedData, username, password );
                    }
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

    private static ResponseInfo getTodayCases( HttpServletRequest request, String username, String password )
        throws UnsupportedEncodingException, ServletException, IOException, Exception
    {
        ResponseInfo responseInfo = null;

        try
        {
            String curDate = Util.getCurrentDate();
            String tomorrow = Util.getXLastDate( -1 );

            String requestUrl = EventController.URL_QUERY_CASES_BY_TIME;
            requestUrl = requestUrl.replace( PARAM_USERNAME, username );
            requestUrl = requestUrl.replace( PARAM_START_DATE, curDate );
            requestUrl = requestUrl.replace( PARAM_END_DATE, tomorrow );

            responseInfo = Util.sendRequest( Util.REQUEST_TYPE_GET, requestUrl, null, null, username, password );

        }
        catch ( Exception ex )
        {
            System.out.println( "Exception: " + ex.toString() );
        }

        return responseInfo;
    }

    private static ResponseInfo getPreviousCases( HttpServletRequest request, String username, String password )
        throws UnsupportedEncodingException, ServletException, IOException, Exception
    {
        ResponseInfo responseInfo = null;

        try
        {
            String startDate = "1900-01-01";
            String endDate = Util.getCurrentDate();

            String requestUrl = EventController.URL_QUERY_CASES_BY_TIME;
            requestUrl = requestUrl.replace( PARAM_USERNAME, username );
            requestUrl = requestUrl.replace( PARAM_START_DATE, startDate );
            requestUrl = requestUrl.replace( PARAM_END_DATE, endDate );

            responseInfo = Util.sendRequest( Util.REQUEST_TYPE_GET, requestUrl, null, null, username, password );

        }
        catch ( Exception ex )
        {
            System.out.println( "Exception: " + ex.toString() );
        }

        return responseInfo;
    }

    private static ResponseInfo getPositiveCases( HttpServletRequest request, String username, String password )
        throws UnsupportedEncodingException, ServletException, IOException, Exception
    {
        ResponseInfo responseInfo = null;

        try
        {
            String startDate = Util.getXLastMonth( 12 );
            String endDate = Util.getXLastDate( -1 );

            String requestUrl = EventController.URL_QUERY_POSITIVE_CASES;
            requestUrl = requestUrl.replace( PARAM_USERNAME, username );
            requestUrl = requestUrl.replace( PARAM_START_DATE, startDate );
            requestUrl = requestUrl.replace( PARAM_END_DATE, endDate );

            responseInfo = Util.sendRequest( Util.REQUEST_TYPE_GET, requestUrl, null, null, username, password );

        }
        catch ( Exception ex )
        {
            System.out.println( "Exception: " + ex.toString() );
        }

        return responseInfo;
    }

    private static ResponseInfo getCatOptionComboUid( String username, String password )
    {
        ResponseInfo responseInfo = null;
        try
        {
            String url = Util.LOCATION_DHIS_SERVER + "/api/categoryOptions.json?fields=id,name,code&filter=code:eq:"
                + username;
            responseInfo = Util.sendRequest( Util.REQUEST_TYPE_GET, url, null, null, username, password );
        }
        catch ( Exception ex )
        {
            ex.printStackTrace();
        }

        return responseInfo;
    }

    public static ResponseInfo createEvent( JSONObject eventData, String clientId, String ouId, String username,
        String password )
        throws IOException, Exception
    {
        ResponseInfo responseInfo = new ResponseInfo();

        try
        {
            responseInfo = EventController.getCatOptionComboUid( username, password );

            if ( responseInfo.responseCode == 200 )
            {
                JSONObject catOptionCombo = new JSONObject( responseInfo.output );
                JSONArray catOptionComboList = catOptionCombo.getJSONArray( "categoryOptions" );
                String catOptionComboId = catOptionComboList.getJSONObject( 0 ).getString( "id" );

                JSONObject eventJson = EventController.composeJsonEvent( eventData, clientId, ouId, catOptionComboId );

                String requestUrl = Util.LOCATION_DHIS_SERVER + "/api/events";
                responseInfo = Util.sendRequest( Util.REQUEST_TYPE_POST, requestUrl, eventJson, null, username,
                    password );

                Util.processResponseMsg( responseInfo, "importSummaries" );

                String eventId = responseInfo.referenceId;
                eventJson.put( "event", eventId );
                responseInfo.output = eventJson.toString();
            }

        }
        catch ( Exception ex )
        {
            ex.printStackTrace();
        }

        return responseInfo;
    }

    public static ResponseInfo updateEvent( String eventId, JSONObject eventData, String username, String password )
        throws IOException, Exception
    {
        ResponseInfo responseInfo = new ResponseInfo();

        try
        {
            responseInfo = EventController.getCatOptionComboUid( username, password );

            if ( responseInfo.responseCode == 200 )
            {
                eventData.remove( "status" );
                eventData.put( "status", "COMPLETED" );
                
                String requestUrl = Util.LOCATION_DHIS_SERVER + "/api/events/" + eventId;
                responseInfo = Util
                    .sendRequest( Util.REQUEST_TYPE_PUT, requestUrl, eventData, null, username, password );

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

    public static ResponseInfo getEventsByClient( String clientId, String username, String password )
        throws UnsupportedEncodingException, ServletException, IOException, Exception
    {
        ResponseInfo responseInfo = null;

        try
        {
            String requestUrl = Util.LOCATION_DHIS_SERVER
                + "/api/events.json?ouMode=ACCESSIBLE&skipPaging=true&trackedEntityInstance=" + clientId;
            responseInfo = Util.sendRequest( Util.REQUEST_TYPE_GET, requestUrl, null, null, username, password );
        }
        catch ( Exception ex )
        {
            System.out.println( "Exception: " + ex.toString() );
        }

        return responseInfo;
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
        System.out.println( "\n\n eventData : " + eventData );
        return eventData;
    }

}
