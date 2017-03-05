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

public class LoginController
    extends HttpServlet
{

    /** 
	 * 
	 */
    private static final long serialVersionUID = -302963909853738077L;

    protected void doGet( HttpServletRequest request, HttpServletResponse response )
        throws ServletException, IOException
    {
        try
        {
            System.out.println( "getRequestURI: " + request.getRequestURI() );

            // STEP 1. Get username/password from request
            
            String accessServerUsername = Util.ACCESS_SERVER_USERNAME;
            String accessServerPassword = Util.ACCESS_SERVER_PASSWORD;

            HttpSession session = request.getSession( true );
            String loginUsername = (String) session.getAttribute( Util.KEY_LOGIN_USERNAME );
            String loginPassword = (String) session.getAttribute( Util.KEY_LOGIN_PASSWORD );
            
            // STEP 2. Check username/password
         
            ResponseInfo responseInfo = LoginController.processPostMsg( request, loginUsername, loginPassword, accessServerUsername, accessServerPassword );
            
            // STEP 3. Send back the messages
            
            Util.respondMsgOut( responseInfo, response);  
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

    
    protected void doPost( HttpServletRequest request, HttpServletResponse response )
        throws ServletException, IOException
    {
        try
        {
            System.out.println( "getRequestURI: " + request.getRequestURI() );

            // STEP 1. Get username/password from request
            
            String accessServerUsername = Util.ACCESS_SERVER_USERNAME;
            String accessServerPassword = Util.ACCESS_SERVER_PASSWORD;

            String loginUsername = request.getHeader( Util.REQUEST_PARAM_USERNAME );
            String loginPassword = request.getHeader( Util.REQUEST_PARAM_PASSWORD );
            
           
            // STEP 2. Check username/password
         
            ResponseInfo responseInfo = LoginController.processPostMsg( request, loginUsername, loginPassword, accessServerUsername, accessServerPassword );
            HttpSession session = request.getSession( true );                
            if ( responseInfo.responseCode == 200 )
            {
                if( responseInfo.data.getBoolean( Util.KEY_LOGGED_SUCCESS ) )
                {
                    session.setAttribute( Util.KEY_LOGIN_USERNAME, loginUsername );
                    session.setAttribute( Util.KEY_LOGIN_PASSWORD, loginPassword );
                    session.setAttribute( Util.KEY_LOGGED_SUCCESS, true );
                }
                else
                {
                    session.setAttribute( Util.KEY_LOGGED_SUCCESS, false );
                }
            }
            else
            {
                session.setAttribute( Util.KEY_LOGGED_SUCCESS, false );
            }

            // STEP 3. Send back the messages
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

    // -----------------------------------------------------------
    // ----- 'GET'/'POST' RELATED Methods -----------------------

    public static ResponseInfo processPostMsg( HttpServletRequest request, String loginUsername, String loginPassword, String accessServerUsername, String accessServerPassword )
        throws UnsupportedEncodingException, ServletException, IOException, Exception
    {
        ResponseInfo responseInfo = null;

        try
        {
           String requestUrl = Util.LOCATION_DHIS_SERVER
                + "/api/categoryOptions.json?pagging=false&filter=categories.id:eq:" + Util.USER_CATEGORY_ID + "&fields=displayName&filter=code:eq:" + loginUsername + "&fields=attributeValues[value,attribute[id]]";

            responseInfo = Util.sendRequest( Util.REQUEST_TYPE_GET, requestUrl, null, null );
            
            if ( responseInfo.responseCode == 200 )
            {
                System.out.println("\n\n ");
                JSONObject jsonData = new JSONObject( responseInfo.output );
                
                JSONArray categoryOptionList = jsonData.getJSONArray( "categoryOptions" );
                
                if( categoryOptionList.length() > 0 )
                {
                    // Check password if it is valid
                    
                    JSONObject categoryOption = categoryOptionList.getJSONObject( 0 );
                    JSONArray arrAttributes = categoryOption.getJSONArray( "attributeValues" );
                    boolean valid = false;
                    for( int i=0; i<arrAttributes.length(); i++ )
                    {
                        String attributeId = arrAttributes.getJSONObject( i ).getJSONObject( "attribute" ).getString( "id" );
                        String pin = arrAttributes.getJSONObject( i ).getString( "value" );
                        if( attributeId.equals( Util.USER_CATEGORY_PIN_ATRIBUTE_ID ) && pin.equals( loginPassword ) )
                        {
                            valid = true;
                            break;
                        }
                    }

                    
                    JSONObject responseJson = new JSONObject();
                    
                    if( valid )
                    {
                        responseJson.put( Util.KEY_FULLNAME, categoryOption.getString( "displayName" ) );
                        responseJson.put( Util.KEY_DHIS_SERVER, Util.LOCATION_DHIS_SERVER );
                        responseJson.put( Util.KEY_LOGGED_SUCCESS, true ); 
                        
                    }
                    else 
                    {
                        responseJson.put( Util.KEY_LOGGED_SUCCESS, false );
                        responseInfo.responseCode = 401;
                    }

                    responseInfo.data = responseJson;
                    responseInfo.outMessage = responseJson.toString();
                    
                }
                else
                {
                    JSONObject data = new JSONObject();
                    data.put( Util.KEY_LOGGED_SUCCESS, false );
                    
                    responseInfo.data = data;
                    responseInfo.responseCode = 401;
                }
            }
            else
            {
                responseInfo.outMessage = responseInfo.output;
            }

        }
        catch ( Exception ex )
        {
            System.out.println( "Exception: " + ex.toString() );
        }

        return responseInfo;
    }
}
