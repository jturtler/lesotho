
function Commons() {}


Commons.VERSION = "v0.51";
Commons.VERSION_DATE = "Feb 28 2018";
Util.SITE_INFO = "";

Commons.wsUrl = "ls";

Commons.dateFormat = "DD MMM YYYY";
Commons.dateTimeFormat = "YYYY-MM-DD HH:mm";
Commons.monthYearFormat = "MMM YYYY";

Commons.APPPAGE_COORDINATOR = "coordinator";
Commons.APPPAGE_COUNSELLOR = "counsellor";


Commons.sessionTimeOut = 60 * 60 * 1000;; // Get from [web.xml] configuration file
Commons.intervalCheckSession = 60000; // 1 minute

Commons.checkSession = function( returnFunc )
{		
	$.ajax( {
		type: "GET"
		,url: "../checkSession"
		,dataType: "json"
        ,contentType: "application/json;charset=utf-8"
		,success: function( response ) 
		{	
			var expired = Commons.checkForSessionExpired( response );
			if( !expired )
			{
				Commons.sessionTimeOut = eval( response.sessionTimeOut ) * 1000; // convert seconds to miliseconds
				
				var sessionTimeOutPicker = new SessionTimeOutPicker();
				sessionTimeOutPicker.updateSessionTimeout();
			}
			
			returnFunc( !expired );
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

// -----------------------------------------------------------------------------
// Check session timeout
//------------------------------------------------------------------------------

Commons.checkSessionTimeOut = function( returnFunc )
{
	Commons.sessionTimeOut = Commons.sessionTimeOut - Commons.intervalCheckSession;
	var expired = ( Commons.sessionTimeOut <=0 );
	returnFunc( expired, Commons.sessionTimeOut );
};


Commons.ping = function( returnFunc )
{
	returnFunc( navigator.onLine );
}; 
