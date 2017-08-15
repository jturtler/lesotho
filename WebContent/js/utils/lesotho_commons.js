
function Commons() {}

Commons.VERSION = "v0.43";
Commons.VERSION_DATE = "Aug 16 2017";
Util.SITE_INFO = "This is developement site";

Commons.wsUrl = "lesotho";

Commons.dateFormat = "DD MMM YYYY";
Commons.dateTimeFormat = "YYYY-MM-DD HH:mm";
Commons.monthYearFormat = "MMM YYYY";

Commons.APPPAGE_COORDINATOR = "coordinator";
Commons.APPPAGE_COUNSELLOR = "counsellor";

Commons.sessionTimeOut = 60 * 60 * 1000;; // Get from [web.xml] configuration file
Commons.intervalCheckSession = 5000; // 5 seconds;

Commons.checkSession = function( returnFunc )
{		
	$.ajax( {
		type: "GET"
		,url: "../checkSession"
		,dataType: "json"
        ,contentType: "application/json;charset=utf-8"
		,success: function( response ) 
		{	
			var valid = Commons.checkForSessionExpired( response );
			if( valid )
			{
				Commons.sessionTimeOut = eval( response.sessionTimeOut ) * 60 * 1000; // convert minutes to miliseconds
			}
			
			returnFunc( !valid );
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


/* Commons.ping = function( returnFunc )
{
	$.ajax({
	    url: "https://www.google.com"
	    ,success: function() {
	    	returnFunc(true);//Online
	    }
	    ,error: function(jqXHR, exception) {
	    	returnFunc(false);//Offline
	    }
	});
	
}; */

Commons.ping = function( returnFunc )
{
	returnFunc( navigator.onLine );
}; 