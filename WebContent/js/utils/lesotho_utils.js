
function Util() {}

Util.CONTROL_VALUE = "WebApp v 0.3";

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

Util.disableForm = function( tag, isDisable )
{
	var inputTags = tag.find("input,select,button");
	inputTags.each( function(){
		Util.disableTag( $(this), isDisable);
	});
}


Util.resetForm = function( formTag )
{
	formTag.find("input[type=text],select,textarea").val("");
	formTag.find("input[type=checkbox]").prop( "checked", false );
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


Util.RemoveFromArray = function( list, propertyName, value )
{
	var index;

	$.each( list, function( i, item )
	{
		if ( item[ propertyName ] == value ) 
		{
			index = i;
			return false;
		}
	});

	if ( index !== undefined ) 
	{
		list.splice( index, 1 );
	}

	return index;
}


//-------------------------------------------------------------------
// URL Utils
//-------------------------------------------------------------------

Util.getURLParameterByName = function( url, name )
{
	name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
	var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
		results = regex.exec(url);
	return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
};


Util.addUrlParam = function( key, val )
{
	var search = document.location.search;
	
	var newParam = key + '=' + val,
	params = '?' + newParam;

	// If the "search" string exists, then build params from it
	if (search) {
		// Try to replace an existance instance
		params = search.replace(new RegExp('([?&])' + key + '[^&]*'), '$1' + newParam);

		// If nothing was replaced, then add the new param to the end
		if (params === search) {
			params += '&' + newParam;
		}
	}
	
	document.location.pathname + params;
};

Util.highlightWords = function( data, search )
{
	var searchExp = (search + '').replace(/([\\\.\+\*\?\[\^\]\$\(\)\{\}\=\!\<\>\|\:])/g, "\\$1");	
	return data.replace( new RegExp( "(" + searchExp + ")" , 'gi' ), "<span style=\"background-color:yellow\">$1</span>" );
};

//-------------------------------------------------------------------
// Date Utils
//-------------------------------------------------------------------

Util.MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
Util.DAYS = ["Sunday", "Monday", "Tueday", "Webnesday", "Thursday", "Friday", "Saturday"];
Util.MONTH_INDEXES = {"Jan" : "01", "Feb" : "02", "Mar" : "03", "Apr" : "04", "May" : "05", "Jun" : "06", "Jul" : "07", "Aug" : "08", "Sep" : "09", "Oct" : "10", "Nov" : "11", "Dec" : "12"};


Util.getLastNDate = function( noDays )
{
	var date = new Date();
    date.setDate( date.getDate() - noDays );
    
    return Util.convertLocalTimeToUTM( date );
};


Util.formatDate_LastNDate = function( noDays )
{
	var date = new Date();
    date.setDate(date.getDate() - noDays);
    
    return Util.formatDate_DisplayDateInWeek( Util.convertLocalTimeToUTM(date) );
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
 * dateStr : 2017-01-02, convert date from UTC time to local time
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
 * dateStr : 2017-01-02
 * Result : 02 Jan 2017
 * **/
Util.formatDate_LocalDisplayDate = function( localDateStr )
{
	var year = localDateStr.substring( 0, 4 );
	var month = eval( localDateStr.substring( 5,7 ) ) - 1;
	var day = localDateStr.substring( 8, 10 );
	
	return day + " " + Util.MONTHS[month] + " " + year;
};


/** 
 * dateStr : "2017-02-07T09:56:10.298"
 * Result : 07 Feb 2017 09:56
 * **/
Util.formatDate_DisplayDateTime = function( dateStr )
{
	var date = Util.convertUTCDateToLocalDate( dateStr );
	
	var year = date.getFullYear();
	var month = date.getMonth();
	
	var dayInMonth = date.getDate();
	dayInMonth = ( dayInMonth < 10 ) ? "0" + dayInMonth : dayInMonth;
	
	var hours = date.getHours();
	hours = ( hours < 10 ) ? "0" + hours : "" + hours;
	
	var minutes = date.getMinutes();
	minutes = ( minutes < 10 ) ? "0" + minutes : "" + minutes;
	
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
		subfix = "pm";
	}
	else if( hours == 12 && minutes > 0 )
	{
		subfix = "pm";
	}
	else
	{
		subfix = "am";
	}

	hours = ( hours < 10 ) ? "0" + hours : "" + hours;
	minutes = ( minutes < 10 ) ? "0" + minutes : "" + minutes;
	
	return hours + ":" + minutes + " " + subfix;
};

Util.convertUTCDateToLocalDate = function( serverdate ) {
	var year = serverdate.substring( 0, 4 );
	var month = eval( serverdate.substring( 5,7 ) ) - 1;
	var day = eval( serverdate.substring( 8, 10 ) );
	var hour = serverdate.substring( 11, 13);
	var minute = serverdate.substring( 14, 16 );
	var second = serverdate.substring( 17, 19 );
	var date = new Date( year, month, day, hour, minute, second );
	
	var newDate = new Date(date);
    newDate.setMinutes(date.getMinutes() - date.getTimezoneOffset());
    
    return newDate;
};


Util.convertLocalTimeToUTM = function( localDate )
{
	var newDate = new Date(localDate);
    newDate.setMinutes(localDate.getMinutes() + localDate.getTimezoneOffset());
    return newDate;
}  

Util.getTimeElapsed = function( date1, date2 )
{
	var diff = date2.valueOf() - date1.valueOf();
	var diffInHours = Math.floor( diff/1000/60/60 ); // Convert milliseconds to hours
	
	var noDays = Math.floor( diffInHours/24 );
	noDays = ( noDays < 10 ) ? "0" + noDays : noDays;
	
	var noHours = diffInHours - ( 24 * noDays ); 
	noHours = ( noHours < 10 ) ? "0" + noHours : noHours;
	
	return noDays + "d " + noHours + "h";
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
        maxDate: new Date()
	});
		  
};


Util.dateTimePicker = function( dateTag, dateFormat )
{
	dateTag.appendDtpicker({
		dateFormat: dateFormat
	});
};


// Week Periods

Util.getCurrentWeekPeriod = function() {
	return Util.getWeekIdx( new Date() );
};

Util.getYesterdayPeriod = function() {
	var date = Util.getLastNDate( 1 );
	return Util.getWeekIdx( date );
};


Util.getWeekIdx = function( date ) {
	var onejan = new Date(date.getFullYear(), 0, 1);
    var weekIdx =  Math.ceil((((date - onejan) / 86400000) + onejan.getDay() + 1) / 7);
    
    return date.getFullYear() + "W" + weekIdx;
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
MsgManager.dialogFormTag;

MsgManager.initialSetup = function()
{
	MsgManager.divMsgAreaTag = $( '#divMsgArea' );
	MsgManager.spanMsgAreaCloseTag = $( '#spanMsgAreaClose' );
	MsgManager.btnMsgAreaCloseTag = $( '#btnMsgAreaClose' );
	MsgManager.spanMsgAreaTextTag = $( '#spanMsgAreaText' );
	MsgManager.dialogFormTag = $( '#dialogForm' );
	


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


MsgManager.showDialogForm = function( msg ){
	MsgManager.dialogFormTag.html( msg );
	MsgManager.dialogFormTag.dialog({
		title: 'Setting Form',
		maximize: true,
		closable: true,
		modal: true,
		width: 400,
		height: 200,
		buttons: [ 
          { 
              text: "Ok",
              class: 'btn btn-default', 
              click: function() {
            	  $(this).dialog("close"); 
              } 
          }
      ]
	}).show();
};
	

	