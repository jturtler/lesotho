
function Commons() {}

Commons.VERSION = "v0.28";
Commons.VERSION_DATE = "Jun 13 2017";

Commons.checkSession = function( returnFunc )
{		
	$.ajax( {
		type: "GET"
		,url: "../checkSession"
		,dataType: "json"
        ,contentType: "application/json;charset=utf-8"
        ,data: '{}'
		,success: function( response ) 
		{					
			returnFunc( !Commons.checkForSessionExpired( response ) );
		}
		,error: function(response)
		{
			returnFunc( false );					
		}
	});
};


Commons.checkForSessionExpired = function( response )
{
	return ( response && response.msg && response.msg == 'session_expired' );
};
	
