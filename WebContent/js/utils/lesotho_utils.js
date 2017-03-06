
function Util() {}

Util.CONTROL_VALUE = "WebApp v 0.3";

Util.getURLParameterByName = function( url, name )
{
	name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
	var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
		results = regex.exec(url);
	return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
};

Util.getInputTag = function( attributeId )
{
	return $("[attributeId='" + attributeId + "']");
};


Util.disableTag = function( tag, isDisable )
{
	tag.prop( 'disabled', isDisable);
	
	for( var i=0; i<tag.length; i++ )
	{
		var element = $(tag[i]);
		if( element.prop( "tagName" ) == 'SELECT' || element.prop( "tagName" ) == 'INPUT' )
		{
			if( isDisable )
			{
				element.css( 'background-color', '#FAFAFA' ).css( 'cursor', 'auto' ).css( 'color', '#444' );
			}
			else
			{
				element.css( 'background-color', 'white' ).css( 'cursor', '' );
			}
		}
	}
};


Util.findItemFromList = function( listData, searchProperty, searchValue )
{
	var foundData;

	$.each( listData, function( i, item )
	{
		if ( item[ searchProperty ] == searchValue )
		{
			foundData = item;
			return false;
		}
	});

	return foundData;
};


//-------------------------------------------------------------------
//Date Utils
//-------------------------------------------------------------------

Util.MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
Util.DAYS = ["Sunday", "Monday", "Tueday", "Webnesday", "Thursday", "Friday", "Saturday"];
Util.MONTH_INDEXES = {"Jan" : "01", "Feb" : "02", "Mar" : "03", "Apr" : "04", "May" : "05", "Jun" : "06", "Jul" : "07", "Aug" : "08", "Sep" : "09", "Oct" : "10", "Nov" : "11", "Dec" : "12"};

Util.getLastNDate = function( noDays )
{
	var date = new Date();
    date.setDate(date.getDate() - noDays);
    
    return Util.formatDate_DisplayDateInWeek( Util.convertLocalTime(date) );
};


/** 
 * dateStr : Date Object
 * Result : Sunday, Jan 31
 * **/
Util.formatDate_DisplayDateInWeek = function( date )
{
	var month = date.getMonth();
	var dayInWeek = date.getDay();		
	var dayInMonth = date.getDate();
	dayInMonth = ( dayInMonth < 10 ) ? "0" + dayInMonth : dayInMonth;
	
	return Util.DAYS[dayInWeek] + ", " + Util.MONTHS[month] + " " + dayInMonth;
};


/** 
 * dateStr : 2017-01-02
 * Result : 02 Jan 2017
 * **/
Util.formatDate_DisplayDate = function( dateStr )
{
	var date = Util.convertUTCDateToLocalDate( dateStr );
	
	var year = date.getFullYear();
	var month = date.getMonth();
	var dayInMonth = date.getDate();
	dayInMonth = ( dayInMonth < 10 ) ? "0" + dayInMonth : dayInMonth;
	
	return dayInMonth + " " + Util.MONTHS[month] + " " + year;
};

/** 
 * dateStr : "2017-02-07T09:56:10.298"
 * Result : 07 Feb 2017 09:56
 * **/
Util.formatDate_DisplayDateTine = function( dateStr )
{
	var date = Util.convertUTCDateToLocalDate( dateStr );
	
	var year = date.getFullYear();
	var month = date.getMonth();
	var dayInMonth = date.getDate();
		
	var hours = date.getHours();
	var minutes = date.getMinutes();
	
	return dayInMonth + " " + Util.MONTHS[month] + " " + year + " " + hours + ":" + minutes;
};

/** 
 * dateStr : "2017 Jan 07"
 * Result : 2017-01-07
 * **/
Util.formatDate_DbDate = function( dateStr )
{
	var day = dateStr.substring(0,2);
	var month = Util.MONTH_INDEXES[dateStr.substring(3,6)];
	var year = dateStr.substring(7,12);
	
	return year + "-" + month + "-" + day;
};

/** 
 * dateStr : "2017-03-04 13:19:05.0"
 * Result : "13:19" ( local time )
 * **/
Util.formatTimeInDateTime = function( dateTimeStr )
{
	var date = Util.convertUTCDateToLocalDate( dateTimeStr );
	var hours = date.getHours();
	var minutes = date.getMinutes();

	var subfix = "";
	
	if( hours > 12 )
	{
		hours = ( hours - 12 );
		subfix = "pm"
	}
	else
	{
		subfix = "am";
	}

	hours = ( hours < 10 ) ? "0" + hours : "" + hours;
	minutes = ( minutes < 10 ) ? "0" + minutes : "" + minutes;
	
	return hours + ":" + minutes + subfix;
};

Util.convertUTCDateToLocalDate = function( serverdate ) {
	var date = new Date(serverdate);
    var newDate = new Date( date.getTime() + date.getTimezoneOffset()*60*1000 );

    var offset = date.getTimezoneOffset() / 60;
    var hours = date.getHours();

    newDate.setHours(hours - offset);

    return newDate;   
};

Util.convertLocalTime = function( date )
{
	var year = date.getUTCFullYear();
	var month = date.getUTCMonth();
	var dateInMonth = date.getUTCDate();

	var hours = date.getUTCHours();
	var minutes = date.getUTCMinutes();
	var seconds = date.getUTCSeconds()
	
	return new Date( year, month, dateInMonth, hours, minutes, seconds );
};


Util.datePicker = function( dateTag, dateFormat )
{
	dateTag.datepicker({
		dateFormat: dateFormat,
		changeMonth: true,
		changeYear: true,
		showOn: 'both',
		createButton: false,
		constrainInput: true,
        yearRange: '-100:+100',
        maxDate: new Date(),
    	"showButtonPanel":  false
	});
};


//=====================================================================================
//FormBlock Utils
//=====================================================================================

function FormBlock() {}

FormBlock.block = function( block, msg, cssSetting, tag )
{
	var msgAndStyle = { message: msg, css: cssSetting };

	if ( tag === undefined )
	{
		if ( block ) $.blockUI( msgAndStyle );
		else $.unblockUI();
	}
	else
	{
		if ( block ) tag.block( msgAndStyle );
		else tag.unblock();
	}
}


//=====================================================================================
//FormBlock Utils
//=====================================================================================

function MsgManager() {}

MsgManager.cssBlock_Body = { 
	border: 'none'
	,padding: '15px'
	,backgroundColor: '#000'
	,'-webkit-border-radius': '10px'
	,'-moz-border-radius': '10px'
	,opacity: .5
	,color: '#fff'
	,width: '200px'
};


// --- Messaging ---
MsgManager.divMsgAreaTag;
MsgManager.spanMsgAreaCloseTag;
MsgManager.btnMsgAreaCloseTag;
MsgManager.spanMsgAreaTextTag;

MsgManager.initialSetup = function()
{
	MsgManager.divMsgAreaTag = $( '#divMsgArea' );
	MsgManager.spanMsgAreaCloseTag = $( '#spanMsgAreaClose' );
	MsgManager.btnMsgAreaCloseTag = $( '#btnMsgAreaClose' );
	MsgManager.spanMsgAreaTextTag = $( '#spanMsgAreaText' );


	MsgManager.btnMsgAreaCloseTag.click( function()
	{
		MsgManager.divMsgAreaTag.hide( 'fast' );
	});
};

MsgManager.appBlock = function( msg )
{
	if (  msg === undefined ) msg = "Processing..";

	FormBlock.block( true, msg, MsgManager.cssBlock_Body );
};

MsgManager.appUnblock = function()
{
	FormBlock.block( false );
};

MsgManager.msgAreaShow = function( msg, status )
{
	MsgManager.divMsgAreaTag.hide( 'fast' );
	MsgManager.spanMsgAreaTextTag.text( '' );

	MsgManager.spanMsgAreaTextTag.text( msg );
	MsgManager.divMsgAreaTag.show( 'medium' );
	
	if( status === undefined )
	{
		MsgManager.divMsgAreaTag.css("background-color", "#eee" );
	}
	else if( status === "ERROR" )
	{
		MsgManager.divMsgAreaTag.css("background-color", "#f2dede" );
	}
	else if( status === "SUCCESS" )
	{
		MsgManager.divMsgAreaTag.css("background-color", "#dff0d8" );
	}
};

MsgManager.msgAreaHide = function()
{
	MsgManager.divMsgAreaTag.hide( 'fast' );
};

		