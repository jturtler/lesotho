package psi.lesotho.service;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

public class MetaDataController
    extends HttpServlet
{
    private static final long serialVersionUID = 3387895500337476082L;

    /**
     * 
     */

    protected void doPost( HttpServletRequest request, HttpServletResponse response )
        throws ServletException, IOException
    {
        try
        {
            ResponseInfo responseInfo = null;
            
            // STEP 1. Get username/password from session

            HttpSession session = request.getSession( true );
            String username = Util.ACCESS_SERVER_USERNAME;
            String password = Util.ACCESS_SERVER_PASSWORD;
            
            if ( request.getPathInfo() != null && request.getPathInfo().split( "/" ).length >= 2 )
            {

                String[] queryPathList = request.getPathInfo().split( "/" );
                String key = queryPathList[1];
                
                // Load All meta data
                if ( key.equals( Util.KEY_METADATA_ALL ) )
                {
                    StringBuffer outputData = new StringBuffer();
                    
                    responseInfo = MetaDataController.getAttributeGroups( username, password );
                    
                    if( responseInfo.responseCode == 200 )
                    {
                        outputData.append( "\"attGroups\":" + responseInfo.output );

                        responseInfo = MetaDataController.getProgramAttributes( username, password ); 
                        if( responseInfo.responseCode == 200 )
                        {                       
                            outputData.append( ",\"programAttributes\":" + responseInfo.output );
                            
                            responseInfo = MetaDataController.getSections( username, password );
                            if( responseInfo.responseCode == 200 )
                            {
                                outputData.append( ",\"sections\":" + responseInfo.output );
                                
                                responseInfo = MetaDataController.getOrgUnitList( username, password );
                                if( responseInfo.responseCode == 200 )
                                {
                                    outputData.append( ",\"ouList\":" + responseInfo.output );
                                }
                            }
                           
                        }
                    }
                    
                    responseInfo.output = "{" + outputData.toString() + "}";
                }
                // Load orgUnit List only
                else if ( key.equals( Util.KEY_METADATA_OULIST ) )
                {
                    responseInfo = MetaDataController.getOrgUnitList( username, password );
                }
            }

            // STEP 3. Send back the messages
            
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

    private static ResponseInfo getSections( String username, String password )
    {
        ResponseInfo responseInfo = null;
        try
        {
            String url = Util.LOCATION_DHIS_SERVER + "/api/programStages/" + Util.STAGE_ID
                + ".json?fields=programStageSections[id,displayName,programStageDataElements[dataElement[id,name,valueType,optionSet[options[code,name]]]";
            responseInfo = Util.sendRequest( Util.REQUEST_TYPE_GET, url, null, null, username, password );
        }
        catch ( Exception ex )
        {
            ex.printStackTrace();
        }

        return responseInfo;
    }
    

    private static ResponseInfo getAttributeGroups( String username, String password )
    {
        ResponseInfo responseInfo = null;
        try
        {
            String url = Util.LOCATION_DHIS_SERVER + "/api/trackedEntityAttributeGroups.json?filter=code:like:LSHTC&paging=false&fields=name,trackedEntityAttributes[id,name,valueType,optionSet[options[code,name]]";
            responseInfo = Util.sendRequest( Util.REQUEST_TYPE_GET, url, null, null, username, password );
        }
        catch ( Exception ex )
        {
            ex.printStackTrace();
        }

        return responseInfo;
    }
    

    private static ResponseInfo getProgramAttributes( String username, String password )
    {
        ResponseInfo responseInfo = null;
        try
        {
            String url = Util.LOCATION_DHIS_SERVER + "/api/programs/" + Util.PROGRAM_ID + ".json?fields=programTrackedEntityAttributes[mandatory,trackedEntityAttribute[id,name]]";
            responseInfo = Util.sendRequest( Util.REQUEST_TYPE_GET, url, null, null, username, password );
        }
        catch ( Exception ex )
        {
            ex.printStackTrace();
        }

        return responseInfo;
    }
    

    private static ResponseInfo getOrgUnitList( String username, String password )
    {
        ResponseInfo responseInfo = null;
        try
        {
            String url = Util.LOCATION_DHIS_SERVER + "/api/organisationUnits/" + Util.ROOT_ORGTUNIT_LESOTHO + ".json?includeDescendants=true&fields=id,name,level&filter=level:eq:" + Util.REGISTER_ORGUNIT_LEVEL;
           System.out.println("\n\n URL : " + url);
            responseInfo = Util.sendRequest( Util.REQUEST_TYPE_GET, url, null, null, username, password );
        }
        catch ( Exception ex )
        {
            ex.printStackTrace();
        }
        
        return responseInfo;
    }
    
}
