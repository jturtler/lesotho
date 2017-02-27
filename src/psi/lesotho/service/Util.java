package psi.lesotho.service;

import java.io.BufferedReader;
import java.io.DataOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.PrintWriter;
import java.net.HttpURLConnection;
import java.net.URL;
import java.net.URLEncoder;
import java.util.Calendar;
import java.util.Date;
import java.util.Map;

import javax.net.ssl.HttpsURLConnection;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.apache.tomcat.util.codec.binary.Base64;
import org.json.JSONArray;
import org.json.JSONObject;

public final class Util
{

    //public static String LOCATION_DHIS_SERVER = "http://localhost:8080/dhis";
    public static String LOCATION_DHIS_SERVER = "https://sandbox.psi-mis.org";
    //public static String LOCATION_DHIS_SERVER = "https://james.psi-mis.org";
    
    
    public static String REQUEST_PARAM_USERNAME = "usr";
    public static String REQUEST_PARAM_PASSWORD = "pwd";

    public static String KEY_FULLNAME = "fullName";
    public static String KEY_USER_NAME = "username";
    public static String KEY_DHIS_SERVER = "dhisServer";
    public static String KEY_USER_ACTIVE = "active";
    public static String KEY_USER_ORGUNITS = "userOrgUnits";
    public static String KEY_ACCESS_SERVER_USERNAME = "username";
    public static String KEY_ACCESS_SERVER_PASSWORD = "password";
    public static String KEY_LOGIN_USERNAME = "loginUsername";
    public static String KEY_LOGIN_PASSWORD = "loginPassword";


    public static String REQUEST_TYPE_GET = "GET";
    public static String REQUEST_TYPE_POST = "POST";
    public static String REQUEST_TYPE_PUT = "PUT";


    public static String PAMAM_ORGUNIT_ID = "ouId";
    public static String PAMAM_CLIENT_ID = "clientId";
    public static String PAMAM_EVENT_ID = "eventId";
    
    
    public static String ACCESS_SERVER_USERNAME = "tranc";
    public static String ACCESS_SERVER_PASSWORD = "Tran@10121984";
    
    
    public static final String ROOT_ORGTUNIT = "FvUGp8I75zV";    
    public static final String ROOT_ORGTUNIT_LESOTHO = "vJNI6blhosr";  
    public static final String REGISTER_ORGUNIT_LEVEL = "5";
    public static final String PROGRAM_ID = "KDgzpKX3h2S";
    public static final String STAGE_ID = "lVglvBnE3TY";
    public static final String USER_CATEGORY_ID = "qVl8p3w3fI5";
    

    public static final String KEY_TODAY_CASES = "todayCases";
    public static final String KEY_PREVIOUS_CASES = "previousCases";
    public static final String KEY_POSITIVE_CASES = "positiveCases";
    public static final String KEY_SEARCH_CASES = "search";  
    public static final String KEY_SAVE_CLIENT = "save";    
    public static final String KEY_CLIENT_DETAILS = "details";
    public static final String KEY_METADATA_ALL = "all";
    public static final String KEY_METADATA_OULIST = "ouList";
    public static final String KEY_SAVE_EVENT = "save";  
    

    public static String KEY_TRANSLATION_KEYWORDS_PROJECT_ID = "98319";
    public static String KEY_TRANSLATION_VERSION_PROJECT_ID = "95765";
    public static String KEY_TRANSLATION_LIST = "keywordList";
    public static String KEY_TRANSLATION_VERSION = "version";

    // --------------------------------------------------------------------------------------------------------------
    // HTTPS GET/POST/PUT request
    // --------------------------------------------------------------------------------------------------------------

    // Convert InputStream to String
    public static JSONObject getJsonFromInputStream( InputStream is )
    {
        BufferedReader br = null;
        StringBuilder sb = new StringBuilder();

        String line;
        try
        {
            br = new BufferedReader( new InputStreamReader( is ) );
            while ( (line = br.readLine()) != null )
            {
                byte [] b = line.getBytes();
                sb.append( line );
            }
        }
        catch ( IOException e )
        {
            e.printStackTrace();
        }
        finally
        {
            if ( br != null )
            {
                try
                {
                    br.close();
                }
                catch ( IOException e )
                {
                    e.printStackTrace();
                }
            }
        }

        JSONObject jsonData = new JSONObject( sb.toString() );
        return jsonData;
    }

    public static ResponseInfo sendRequest( String requestType, String url, JSONObject jsonData,
        Map<String, Object> params, String username, String password )
        throws Exception, IOException
    {

        System.out.println( "\n\n ====== \n requestUrl : " + url );

        ResponseInfo responseInfo = new ResponseInfo();
        StringBuffer responseMsg = new StringBuffer();

        // 2. Open HttpsURLConnection and Set Request Type.
        URL obj = new URL( url );

        try
        {
            if ( obj.getProtocol().equals( "https" ) )
                responseInfo = Util.sendRequestHTTPS( responseInfo, responseMsg, requestType, url, jsonData, params,
                    username, password );
            else
                responseInfo = Util.sendRequestHTTP( responseInfo, responseMsg, requestType, url, jsonData, params,
                    username, password );
        }
        catch ( Exception ex )
        {
            System.out.println( "Exception - responseCode: " + responseInfo.responseCode + ", bodyMessage: "
                + responseMsg.toString() );

            // ex.printStackTrace();
            responseMsg.append( "{ \"Msg\": \"DHIS reponse code: " + responseInfo.responseCode
                + ", No Message - Error occurred during DHIS response processing: " + responseMsg.toString() + "\" }" );
        }

        responseInfo.output = responseMsg.toString();

        return responseInfo;
    }

    private static ResponseInfo sendRequestHTTP( ResponseInfo responseInfo, StringBuffer responseMsg,
        String requestType, String url, JSONObject jsonData, Map<String, Object> params, String username,
        String password )
        throws Exception, IOException
    {
        // responseInfo.sendStr = bodyMessage;
        responseInfo.data = jsonData;

        // 2. Open HttpsURLConnection and Set Request Type.
        URL obj = new URL( url );
        // Since HttpsURLConnection extends HttpURLConnection, we can use this
        // for both HTTP & HTTPS?
        // HttpsURLConnection con = (HttpsURLConnection) obj.openConnection();
        HttpURLConnection con = (HttpURLConnection) obj.openConnection();

        // add Request header
        con.setRequestMethod( requestType );

        con.setRequestProperty( "User-Agent",
            "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.11 (KHTML, like Gecko) Chrome/23.0.1271.95 Safari/537.11" );
        con.setRequestProperty( "Accept", "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8" );
        con.setRequestProperty( "Accept-Language", "en-US,en;q=0.5" );

        con.setRequestProperty( "Content-Type", "application/json; charset=utf-8" );

        String userpass = username + ":" + password;
        String basicAuth = "Basic " + new String( new Base64().encode( userpass.getBytes() ) );
        con.setRequestProperty( "Authorization", basicAuth );

        // 3. Body Message Received Handle
        if ( jsonData != null && jsonData.length() > 0 )
        {
            // Send post request
            con.setDoOutput( true );
            DataOutputStream wr = new DataOutputStream( con.getOutputStream() );
            wr.writeBytes( jsonData.toString() );
            wr.flush();
            wr.close();
        }

        if ( params != null && !params.isEmpty() )
        {
            StringBuilder postData = new StringBuilder();
            for ( Map.Entry<String, Object> param : params.entrySet() )
            {
                if ( postData.length() != 0 )
                    postData.append( '&' );

                postData.append( URLEncoder.encode( param.getKey(), "UTF-8" ) );
                postData.append( '=' );
                postData.append( URLEncoder.encode( String.valueOf( param.getValue() ), "UTF-8" ) );
            }

            byte[] postDataBytes = postData.toString().getBytes( "UTF-8" );

            // con.setRequestProperty("Content-Length",
            // String.valueOf(postDataBytes.length));
            con.setDoOutput( true );

            DataOutputStream wr = new DataOutputStream( con.getOutputStream() );
            wr.write( postDataBytes );
            wr.flush();
            wr.close();
        }

        // 4. Send and get Response
        responseInfo.responseCode = con.getResponseCode();

        // 5. Other response info
        // TODO: 409 Message Throws IO Exception at here. Don't know why..
        BufferedReader in = new BufferedReader( new InputStreamReader( con.getInputStream() ) );

        String inputLine;

        while ( (inputLine = in.readLine()) != null )
        {
            responseMsg.append( inputLine );
        }

        in.close();

        responseInfo.data = new JSONObject( responseMsg.toString() );

        return responseInfo;
    }

    private static ResponseInfo sendRequestHTTPS( ResponseInfo responseInfo, StringBuffer responseMsg,
        String requestType, String url, JSONObject jsonData, Map<String, Object> params, String username,
        String password )
        throws Exception, IOException
    {
        // responseInfo.sendStr = bodyMessage;
        responseInfo.data = jsonData;

        // 2. Open HttpsURLConnection and Set Request Type.
        URL obj = new URL( url );
        // Since HttpsURLConnection extends HttpURLConnection, we can use this
        // for both HTTP & HTTPS?
        // HttpsURLConnection con = (HttpsURLConnection) obj.openConnection();
        HttpsURLConnection con = (HttpsURLConnection) obj.openConnection();

        // add Request header
        con.setRequestMethod( requestType );

        con.setRequestProperty( "User-Agent",
            "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.11 (KHTML, like Gecko) Chrome/23.0.1271.95 Safari/537.11" );
        con.setRequestProperty( "Accept", "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8" );
        con.setRequestProperty( "Accept-Language", "en-US,en;q=0.5" );

        con.setRequestProperty( "Content-Type", "application/json; charset=utf-8" );

        String userpass = username + ":" + password;
        String basicAuth = "Basic " + new String( new Base64().encode( userpass.getBytes() ) );
        con.setRequestProperty( "Authorization", basicAuth );

        // 3. Body Message Received Handle
        if ( jsonData != null && jsonData.length() > 0 )
        {
            // Send post request
            con.setDoOutput( true );
            DataOutputStream wr = new DataOutputStream( con.getOutputStream() );
            wr.writeBytes( jsonData.toString() );
            wr.flush();
            wr.close();
        }

        if ( params != null && !params.isEmpty() )
        {
            StringBuilder postData = new StringBuilder();
            for ( Map.Entry<String, Object> param : params.entrySet() )
            {
                if ( postData.length() != 0 )
                    postData.append( '&' );

                postData.append( URLEncoder.encode( param.getKey(), "UTF-8" ) );
                postData.append( '=' );
                postData.append( URLEncoder.encode( String.valueOf( param.getValue() ), "UTF-8" ) );
            }

            byte[] postDataBytes = postData.toString().getBytes( "UTF-8" );

            // con.setRequestProperty("Content-Length",
            // String.valueOf(postDataBytes.length));
            con.setDoOutput( true );

            DataOutputStream wr = new DataOutputStream( con.getOutputStream() );
            wr.write( postDataBytes );
            wr.flush();
            wr.close();
        }

        // 4. Send and get Response
        responseInfo.responseCode = con.getResponseCode();

        // 5. Other response info
        // TODO: 409 Message Throws IO Exception at here. Don't know why..
        BufferedReader in = new BufferedReader( new InputStreamReader( con.getInputStream() ) );

        String inputLine;

        while ( (inputLine = in.readLine()) != null )
        {
            responseMsg.append( inputLine );
        }

        in.close();

        responseInfo.data = new JSONObject( responseMsg.toString() );

        return responseInfo;
    }

    public static void respondMsgOut( ResponseInfo responseInfo, HttpServletResponse response )
        throws IOException, Exception
    {
        response.setContentType( "application/json" );
        response.setStatus( responseInfo.responseCode );
        
        PrintWriter out = response.getWriter();
        out.print( responseInfo.outMessage );
        out.flush();
    }

    // --------------------------------------------------------------------------------------------------------------
    // Util Data
    // --------------------------------------------------------------------------------------------------------------

    public static String getCurrentDate()
    {
        Date date = new Date();
        return Util.formatDate( date );
    }

    public static String getCurrentDateTime()
    {
        Date date = new Date();
        return Util.formatDateTime( date );
    }

    public static String getXLastDate( int noDays )
    {
        Calendar cal = Calendar.getInstance();
        cal.add( Calendar.DATE, -noDays );
        Date date = cal.getTime();

        return formatDate( date );
    }

    public static String getXLastMonth( int noMonths )
    {
        Calendar cal = Calendar.getInstance();
        cal.add( Calendar.MONTH, -noMonths );
        Date date = cal.getTime();

        return formatDate( date );
    }

    public static String formatDate( Date date )
    {
        int year = date.getYear() + 1900;
        int month = date.getMonth() + 1;
        int day = date.getDate();

        String monthStr = (month < 10) ? "0" + month : "" + month;
        String dayStr = (day < 10) ? "0" + day : "" + day;

        return year + "-" + monthStr + "-" + dayStr;
    }

    public static String formatDateTime( Date date )
    {
        int hours = date.getHours();
        int minutes = date.getMinutes();
        int seconds = date.getSeconds();

        String hoursStr = (hours < 10) ? "0" + hours : "" + hours;
        String minutesStr = (minutes < 10) ? "0" + minutes : "" + minutes;
        String secondsStr = (seconds < 10) ? "0" + seconds : "" + seconds;
        
        return Util.formatDate( date ) + "T" + hoursStr + ":" + minutesStr + ":" + secondsStr;
    }

    // --------------------------------------------------------------------------------------------------------------
    // Utilitizes
    // --------------------------------------------------------------------------------------------------------------

    public static String outputImportResult( String output, String summaryType )
    {
        String referenceId = "";

        JSONObject rec = null;

        JSONObject recTemp = new JSONObject( output );

        if ( summaryType != null && summaryType.equals( "importSummaries" ) )
        {
            if ( recTemp.has( "response" ) )
            {
                JSONObject response = recTemp.getJSONObject( "response" );

                if ( response.has( "importSummaries" ) )
                {
                    JSONArray importSummaries = response.getJSONArray( "importSummaries" );
                    rec = importSummaries.getJSONObject( 0 );
                }
            }
        }
        else
        {
            if ( recTemp.has( "response" ) )
            {
                rec = recTemp.getJSONObject( "response" );
            }
        }

        if ( rec != null && rec.has( "status" ) && rec.getString( "status" ).equals( "SUCCESS" ) )
        {
            JSONObject importCount = rec.getJSONObject( "importCount" );

            // NOTE: In "importSummaries" case, it shows up as 0 for 'imported'
            if ( (importCount.getInt( "imported" ) >= 1 || importCount.getInt( "updated" ) >= 1)
                || summaryType.equals( "importSummaries" ) )
            {
                if ( rec.has( "reference" ) )
                {
                    referenceId = rec.getString( "reference" );
                }
            }
        }

        return referenceId;
    }

    public static void processResponseMsg( ResponseInfo responseInfo, String importSummaryCase )
    {
        if ( responseInfo.responseCode != 200 )
        {
            // If error occured, display the output as it is (received from
            // DHIS).
            // Set return Msg
            responseInfo.outMessage = responseInfo.output;
        }
        else
        {
            // Set return Msg
            responseInfo.referenceId = Util.outputImportResult( responseInfo.output, importSummaryCase );
            responseInfo.outMessage = "{ \"id\": \"" + responseInfo.referenceId + "\" }";
        }
    }
    
}
