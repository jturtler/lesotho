
function SessionTimeOutPicker( mainPage )
{
	var me = this;
	me.mainPage = mainPage;
	me.translationObj = mainPage.translationObj;

	me.sessionTimeOutTag = $("#sessionTimeOut");
	me.dialogFormTag = $("#extendSessionTimeout");
	
	me.init = function()
	{
		me.FormPopupSetup();
		
		Commons.checkSession( function( expiredSession ){
			me.updateSessionTimeout();
			
			// Monitor the session expired, run every 5 seconds
			setInterval(function() {
				
				me.updateSessionTimeout();
				
			}, 60000); // Update every 1 minute
			
			me.checkAndExtendSessionTimeOut();
		});
		
	};
	
	
	me.getTimeRemaining = function()
	{
		var t = Commons.sessionTimeOut;
		 
		var seconds = Math.floor( (t/1000) % 60 );
		seconds = ( seconds < 10) ? "0" + seconds : seconds;
		
		var minutes = Math.floor( (t/1000/60) % 60 );
		minutes = ( minutes < 10) ? "0" + minutes : minutes;
		
		var hours = Math.floor( (t/(1000*60*60)) % 24 );
		hours = ( hours < 10) ? "0" + hours : hours;
		
		return {
			'total': t,
			'hours': hours,
			'minutes': minutes,
			'seconds': seconds
		};
	};
	
	me.updateSessionTimeout = function()
	{
		var data = me.getTimeRemaining();
		me.sessionTimeOutTag.html( data.hours + ":" + data.minutes );
	};
	
	me.checkAndExtendSessionTimeOut = function()
	{
		// Monitor the session expired, run every 5 seconds
		setInterval(function() {
			
			Commons.checkSessionTimeOut( function( sessionExpired, sessionTimeOut ){
				if( sessionExpired )
				{
					var sessionExpiredText = me.translationObj.getTranslatedValueByKey( "session_msg_checkedSessionExpired" );
					var loginAgainText = me.translationObj.getTranslatedValueByKey( "session_msg_loginAgain" );
					me.mainPage.settingsManagement.showExpireSessionMessage();	
					alert( sessionExpiredText + ". " + loginAgainText );
				}
				else
				{
					var fiveMinutes = 5 * 60 * 1000;
					if( sessionTimeOut == fiveMinutes ) // 5 minute left
					{
						me.openForm();
					}
					
				}
			});			
		}, Commons.intervalCheckSession);
		
	};
	

	
	// -------------------------------------------------------------------------
	// Dialog for extending session
	// -------------------------------------------------------------------------
	
	me.FormPopupSetup = function()
	{
		// -- Set up the form -------------------
		me.dialogFormTag.dialog({
		  autoOpen: false
		  ,dialogClass: "noTitleStuff"
		  ,width: me.width
		  ,height: me.height				  
		  ,modal: true				
		  ,buttons: {
			"OK": function() {
				Commons.checkSession( function( valid ){
					me.dialogFormTag.dialog( "close" );
					me.updateSessionTimeout();
				});
			}
			,"Cancel": function()
			{
				$( this ).dialog( "close" );
			}
		  }				
		});		
	}


	me.openForm = function( status )
	{
		me.dialogFormTag.dialog( "open" );
	}
	
	// -------------------------------------------------------------------------
	// RUN init method
	// -------------------------------------------------------------------------
	
	me.init();
	
}