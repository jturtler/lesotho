
function SessionTimeOutPicker()
{
	var me = this;
	
	me.sessionTimeOutTag = $("#sessionTimeOut");
	
	me.init = function()
	{
		// Monitor the session expired, run every 5 seconds
		setInterval(function() {
			
			var data = me.getTimeRemaining();
			
			me.sessionTimeOutTag.html( data.hours + ":" + data.minutes );
			
		}, 60000); // Update every 1 minute
		
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
	}
	
	me.init();
	
}