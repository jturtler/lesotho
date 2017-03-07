package psi.lesotho.service;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.json.JSONArray;
import org.json.JSONObject;

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
            
            if ( request.getPathInfo() != null && request.getPathInfo().split( "/" ).length >= 2 )
            {

                String[] queryPathList = request.getPathInfo().split( "/" );
                String key = queryPathList[1];
                
                // Load All meta data
                if ( key.equals( Util.KEY_METADATA_ALL ) )
                {
                    StringBuffer outputData = new StringBuffer();
                    
                    responseInfo = MetaDataController.getAttributeGroups( );
                    
                    if( responseInfo.responseCode == 200 )
                    {
                        outputData.append( "\"attGroups\":" + responseInfo.output );

                        responseInfo = MetaDataController.getProgramAttributes(); 
                        if( responseInfo.responseCode == 200 )
                        {                       
                            outputData.append( ",\"programAttributes\":" + responseInfo.output );
                            
                            responseInfo = MetaDataController.getSections();
                            if( responseInfo.responseCode == 200 )
                            {
                                outputData.append( ",\"sections\":" + responseInfo.output );
                                
                                responseInfo = MetaDataController.getOrgUnitList();
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
                    responseInfo = MetaDataController.getOrgUnitList();
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

    private static ResponseInfo getSections()
    {
        ResponseInfo responseInfo = null;
        try
        {
            String url = Util.LOCATION_DHIS_SERVER + "/api/programStages/" + Util.STAGE_ID
                + ".json?fields=programStageSections[id,displayName,programStageDataElements[dataElement[id,formName,valueType,optionSet[options[code,name]]]";
            responseInfo = Util.sendRequest( Util.REQUEST_TYPE_GET, url, null, null );
        }
        catch ( Exception ex )
        {
            ex.printStackTrace();
        }

        return responseInfo;
    }
    

    private static ResponseInfo getAttributeGroups()
    {
        ResponseInfo responseInfo = null;
        try
        {
            String url = Util.LOCATION_DHIS_SERVER + "/api/trackedEntityAttributeGroups.json?filter=code:like:LSHTC&paging=false&fields=name,trackedEntityAttributes[id,shortName,valueType,optionSet[options[code,name]]";
            responseInfo = Util.sendRequest( Util.REQUEST_TYPE_GET, url, null, null );
        }
        catch ( Exception ex )
        {
            ex.printStackTrace();
        }

        return responseInfo;
    }
    

    private static ResponseInfo getProgramAttributes()
    {
        ResponseInfo responseInfo = null;
        try
        {
            String url = Util.LOCATION_DHIS_SERVER + "/api/programs/" + Util.PROGRAM_ID + ".json?fields=programTrackedEntityAttributes[mandatory,trackedEntityAttribute[id,name]]";
            responseInfo = Util.sendRequest( Util.REQUEST_TYPE_GET, url, null, null );
        }
        catch ( Exception ex )
        {
            ex.printStackTrace();
        }

        return responseInfo;
    }
    
    private static ResponseInfo getOrgUnitList()
    {
        ResponseInfo responseInfo = MetaDataController.getOrgUnitListInL5();
        if( responseInfo.responseCode == 200 )
        {
            JSONArray l5OuList =  responseInfo.data.getJSONArray( "organisationUnits" );
            responseInfo = MetaDataController.getOrgUnitListInProgram();
            if( responseInfo.responseCode == 200 )
            {
                JSONArray programOuList = responseInfo.data.getJSONArray( "organisationUnits" );
                JSONArray ouList = new JSONArray();
                
                for( int i = 0; i< l5OuList.length(); i++ )
                {
                    JSONObject ou = l5OuList.getJSONObject( i );
                    for( int j = 0; j< programOuList.length(); j++ )
                    {
                        String checkedId = programOuList.getJSONObject( j ).getString( "id" );
                        if( ou.getString( "id" ).equals( checkedId ) )
                        {
                            ouList.put( ou );
                        }
                    }
                }
                
                JSONObject result = new JSONObject();
                result.put( "organisationUnits", ouList );
                
                responseInfo.data = result;
                responseInfo.output = result.toString();
            }
        }
        
        return responseInfo;
    }
    
    private static ResponseInfo getOrgUnitListInL5()
    {
        ResponseInfo responseInfo = null;
        try
        {
            String url = Util.LOCATION_DHIS_SERVER + "/api/organisationUnits/" + Util.ROOT_ORGTUNIT_LESOTHO + ".json?includeDescendants=true&fields=id,name&filter=level:eq:" + Util.REGISTER_ORGUNIT_LEVEL;
            responseInfo = Util.sendRequest( Util.REQUEST_TYPE_GET, url, null, null );
        }
        catch ( Exception ex )
        {
            ex.printStackTrace();
        }
        
        return responseInfo;
    }
    
    private static ResponseInfo getOrgUnitListInProgram()
    {
        ResponseInfo responseInfo = null;
        try
        {
            String url = Util.LOCATION_DHIS_SERVER + "/api/programs/" + Util.PROGRAM_ID + ".json?fields=organisationUnits[id]";
            responseInfo = Util.sendRequest( Util.REQUEST_TYPE_GET, url, null, null );
        }
        catch ( Exception ex )
        {
            ex.printStackTrace();
        }
        
        return responseInfo;
    }
   
}
