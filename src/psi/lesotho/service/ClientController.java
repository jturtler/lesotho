package psi.lesotho.service;

import java.io.IOException;
import java.io.UnsupportedEncodingException;
import java.net.URLEncoder;
import java.util.ArrayList;
import java.util.Arrays;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.json.JSONArray;
import org.json.JSONObject;

public class ClientController
    extends HttpServlet
{

    private static final long serialVersionUID = -8009460801270486913L;

    private static String TRACKED_ENTITY = "MCPQUTHX1Ze";
    
    private static ArrayList<String> searchVariables = new ArrayList<>(Arrays.asList( "mW2l3T2zL0N", "mUxDHgywnn2", "wSp6Q7QDMsk", "u57uh7lHwF8", "vTPYC9BXPNn" ));
    
    protected void doPost( HttpServletRequest request, HttpServletResponse response )
        throws ServletException, IOException
    {
        try
        {         
            // STEP 1. Get loginUsername from session

            HttpSession session = request.getSession( true );
            String loginUsername = (String) session.getAttribute( Util.KEY_LOGIN_USERNAME );

            // STEP 2. Check loginUsername/password
            ResponseInfo responseInfo = null;
            
            if ( request.getPathInfo() != null && request.getPathInfo().split( "/" ).length >= 2 )
            {
                String[] queryPathList = request.getPathInfo().split( "/" );
                String key = queryPathList[1];

                // STEP 3.1. Search client
                if ( key.equals( Util.KEY_SEARCH_CASES ) )
                {
                    JSONObject receivedData = Util.getJsonFromInputStream( request.getInputStream() );
                    responseInfo = ClientController.searchClients( request, receivedData );
                }
                // STEP 3.2. Get All events of an client
                else if ( key.equals( Util.KEY_CLIENT_DETAILS ) )
                {
                    String outputData = "";
                    String clientId = request.getParameter( "clientId" );
                    responseInfo = ClientController.getClientDetails( clientId );
                    if ( responseInfo.responseCode == 200 )
                    {
                        outputData = "\"client\":" + responseInfo.output;
                        responseInfo = EventController.getEventsByClient( clientId );
                        if ( responseInfo.responseCode == 200 )
                        {
                            outputData += ",\"events\":" + responseInfo.output;
                            outputData = "{" + outputData + "}";
                            responseInfo.output = outputData;
                        }
                    }
                }
                // STEP 3.3. Add / Update Client
                else if ( key.equals( Util.KEY_SAVE_CLIENT ) )
                {
                    String clientId = request.getParameter( Util.PAMAM_CLIENT_ID );
                    String ouId = request.getParameter( Util.PAMAM_ORGUNIT_ID );
                    JSONObject receivedData = Util.getJsonFromInputStream( request.getInputStream() );

                    // Update client
                    if( clientId != null )
                    {
                        responseInfo = ClientController.updateClient( clientId, receivedData );
                    }
                    // Add client
                    else
                    {
                        responseInfo = ClientController.createClient( receivedData, ouId );

                        StringBuffer output = new StringBuffer();
                        output.append( responseInfo.output );

                        if ( responseInfo.responseCode == 200 )
                        {
                            // STEP 5. Enroll Client
                            clientId = responseInfo.referenceId;
                            responseInfo = ClientController.enrollClient( clientId, ouId );
                           
                            if ( responseInfo.responseCode == 200 )
                            {
                                responseInfo = EventController.createEvent( new JSONObject(), clientId, ouId, loginUsername );
                            }
                        }
                        
                        responseInfo.output = output.toString();
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
    // Supportive methods
    // ===============================================================================================================

    private static ResponseInfo searchClients( HttpServletRequest request, JSONObject jsonData )
        throws UnsupportedEncodingException, ServletException, IOException, Exception
    {
        ResponseInfo responseInfo = null;
        try
        {
            String condition = ClientController.createSearchClientCondition( jsonData.getJSONArray( "attributes" ) );
            String url = Util.LOCATION_DHIS_SERVER + "/api/sqlViews/zPJW0n6mymH/data.json?" + condition;
            responseInfo = Util.sendRequest( Util.REQUEST_TYPE_GET, url, null, null );
        }
        catch ( Exception ex )
        {
            ex.printStackTrace();
        }

        return responseInfo;
    }

    private static ResponseInfo createClient( JSONObject receivedData, String ouId )
        throws IOException, Exception
    {
        ResponseInfo responseInfo = null;

        try
        {
            receivedData.put( "trackedEntity", TRACKED_ENTITY );
            receivedData.put( "orgUnit", ouId );
            
            String requestUrl = Util.LOCATION_DHIS_SERVER + "/api/trackedEntityInstances";
            responseInfo = Util.sendRequest( Util.REQUEST_TYPE_POST, requestUrl, receivedData, null );

            Util.processResponseMsg( responseInfo, "" );
            String clientId = responseInfo.referenceId;
            receivedData.put( "trackedEntityInstance", clientId );
            responseInfo.output = receivedData.toString();

        }
        catch ( Exception ex )
        {
            System.out.println( "Exception: " + ex.toString() );
        }

        return responseInfo;
    }

    private static ResponseInfo updateClient( String clientId, JSONObject receivedData )
        throws IOException, Exception
    {
        ResponseInfo responseInfo = null;

        try
        {
            String requestUrl = Util.LOCATION_DHIS_SERVER + "/api/trackedEntityInstances/" + clientId;
            responseInfo = Util.sendRequest( Util.REQUEST_TYPE_PUT, requestUrl, receivedData, null );

            responseInfo.output = receivedData.toString();
            Util.processResponseMsg( responseInfo, "" );
        }
        catch ( Exception ex )
        {
            System.out.println( "Exception: " + ex.toString() );
        }

        return responseInfo;
    }

    private static ResponseInfo enrollClient( String clientId, String ouId )
        throws IOException, Exception
    {
        ResponseInfo responseInfo = new ResponseInfo();

        try
        {
            JSONObject enrollmentJson = ClientController.getEnrollmentJson( clientId, Util.PROGRAM_ID, ouId );

            String requestUrl = Util.LOCATION_DHIS_SERVER + "/api/enrollments";
            responseInfo = Util.sendRequest( Util.REQUEST_TYPE_POST, requestUrl, enrollmentJson, null );
        }
        catch ( Exception ex )
        {
            ex.printStackTrace();
        }

        return responseInfo;
    }

    private static ResponseInfo getClientDetails( String clientId )
    {
        ResponseInfo responseInfo = null;
        try
        {
            String url = Util.LOCATION_DHIS_SERVER + "/api/trackedEntityInstances/" + clientId + ".json";
            responseInfo = Util.sendRequest( Util.REQUEST_TYPE_GET, url, null, null );
        }
        catch ( Exception ex )
        {
            ex.printStackTrace();
        }

        return responseInfo;
    }
    
    
    // -----------------------------------------------------------------------------------------------------
    // Create JSON data
    // -----------------------------------------------------------------------------------------------------

    private static JSONObject getEnrollmentJson( String clientId, String programId, String orgUnitId )
    {
        String today = Util.getCurrentDate();

        JSONObject jsonData = new JSONObject();
        jsonData.put( "trackedEntityInstance", clientId );
        jsonData.put( "orgUnit", orgUnitId );
        jsonData.put( "program", programId );
        jsonData.put( "enrollmentDate", today );
        jsonData.put( "incidentDate", today );

        return jsonData;
    }
    
    private static String createSearchClientCondition( JSONArray attributeList )
    {
        ArrayList<String> searchVariableCopy = (ArrayList<String>)ClientController.searchVariables.clone();
        
        String condition = "";
        for( int i=0; i<attributeList.length(); i++ ) 
        {
            String attributeId = attributeList.getJSONObject( i ).getString( "attribute" );
            String value = attributeList.getJSONObject( i ).getString( "value" );
            condition += "var=" + attributeId + ":" + value + "&";
            
            if ( searchVariableCopy.indexOf( attributeId ) >= 0 )
            {
                searchVariableCopy.remove( attributeId );
            }
        }
        
        for( int i=0; i<searchVariableCopy.size(); i++ )
        {
            condition += "var=" + searchVariableCopy.get( i ) + ":%20&";
        }
        
        return condition;
    }

}
