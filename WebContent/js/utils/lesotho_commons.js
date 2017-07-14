
function Commons() {}

Commons.VERSION = "v0.37";
Commons.VERSION_DATE = "Jul 13 2017";
Util.SITE_INFO = "This is developement site";

Commons.wsUrl = "lesotho";

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
	
