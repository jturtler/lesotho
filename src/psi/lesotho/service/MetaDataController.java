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
                                
                                responseInfo = MetaDataController.getOrgUnitListInL4();
                                if( responseInfo.responseCode == 200 )
                                {
                                    outputData.append( ",\"districts\":" + responseInfo.output );
                                    
                                    responseInfo = MetaDataController.getCatOptionCombos();
                                    if( responseInfo.responseCode == 200 )
                                    {
                                        outputData.append( ",\"catOptions\":" + responseInfo.output );
                                    }
                                }
                            }
                           
                        }
                    }
                    
                    responseInfo.output = "{" + outputData.toString() + "}";
                }
                // Load district List only
                else if ( key.equals( Util.KEY_METADATA_DISTRICTLIST ) )
                {
                     responseInfo = MetaDataController.getOrgUnitListInL4();
                }
                // Load orgUnit List only
                else if ( key.equals( Util.KEY_METADATA_OULIST ) )
                {
                    String districtId = request.getParameter( Util.PAMAM_DISTRICT_ID );
                    responseInfo = MetaDataController.getOrgUnitList( districtId );
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
                + ".json?fields=programStageSections[id,displayName,programStageDataElements[compulsory,dataElement[id,formName,valueType,optionSet[id,name,options[code,name]]]";
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
            String url = Util.LOCATION_DHIS_SERVER + "/api/trackedEntityAttributeGroups.json?filter=code:like:LSHTC&paging=false&fields=id,name,trackedEntityAttributes[id,shortName,valueType,optionSet[id,name,options[code,name]]";
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
    
    private static ResponseInfo getOrgUnitList( String districtId )
    {
        ResponseInfo responseInfo = MetaDataController.getOrgUnitListInL5( districtId );
        if( responseInfo.responseCode == 200 )
        {
            JSONArray l5OuList =  responseInfo.data.getJSONArray( "children" );
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
    
    private static ResponseInfo getOrgUnitListInL5( String districtId )
    {
        ResponseInfo responseInfo = null;
        try
        {
            String url = Util.LOCATION_DHIS_SERVER + "/api/organisationUnits/" + districtId + ".json?fields=children[id,name]";
            responseInfo = Util.sendRequest( Util.REQUEST_TYPE_GET, url, null, null );
        }
        catch ( Exception ex )
        {
            ex.printStackTrace();
        }
        
        return responseInfo;
    }
    

    private static ResponseInfo getOrgUnitListInL4()
    {
        ResponseInfo responseInfo = null;
        try
        {
            String url = Util.LOCATION_DHIS_SERVER + "/api/organisationUnits/" + Util.ROOT_ORGTUNIT_LESOTHO + ".json?includeDescendants=true&fields=id,name&filter=level:eq:" + Util.REGISTER_DISTRICT_LEVEL;
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
    
    private static ResponseInfo getCatOptionCombos()
    {
        ResponseInfo responseInfo = null;
        try
        {
            String url = Util.LOCATION_DHIS_SERVER + "/api/categories/qVl8p3w3fI5.json?fields=categoryOptions[id,name,code]";
            responseInfo = Util.sendRequest( Util.REQUEST_TYPE_GET, url, null, null );
        }
        catch ( Exception ex )
        {
            ex.printStackTrace();
        }

        return responseInfo;
    }
   
}
