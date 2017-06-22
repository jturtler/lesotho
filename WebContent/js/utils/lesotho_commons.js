
function Commons() {}

Commons.VERSION = "v0.31";
Commons.VERSION_DATE = "Jun 22 2017";

Commons.dateFormat = "DD MMM YYYY";
Commons.dateTimeFormat = "YYYY-MM-DD HH:mm";
Commons.monthYearFormat = "MMM YYYY";

Commons.APPPAGE_COORDINATOR = "coordinator";
Commons.APPPAGE_COUNSELLOR = "counsellor";

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
	
