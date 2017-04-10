
function EventReport()
{
	var me = this;
	
	me.eventReportTag = $("#eventReport");
	
	me.attr_CUIC = "zRA08XEYiSF";
	me.attr_lastName = "mUxDHgywnn2";
	me.attr_lastName = "mUxDHgywnn2";
	me.attr_firstName = "mW2l3T2zL0N";
	me.attr_dateOfBirth = "wSp6Q7QDMsk";
	me.attr_districtOfBirth = "u57uh7lHwF8";
	me.attr_birthOrder = "vTPYC9BXPNn";
	me.attr_dateRecentHIVTest = "PyfoYtwNGrI";
	

	me.birthOrder = {};
	me.birthDistrict = {};
	
	
	me.init = function()
	{
		me.eventReportTag.find("[attribute]").html("");
		me.eventReportTag.find("[dataelement]").html("");
		me.eventReportTag.find("[eventDate]").html("");
		me.eventId = Util.getURLParameterByName( location.href, "eventid" );
		me.loadAndPopulateEventData();
	};
	

	// -------------------------------------------------------------------------
	// Load client list by cuic
	// -------------------------------------------------------------------------
	
	me.loadAndPopulateEventData = function()
	{		
		$.ajax(
		{
			type: "POST"
			,url: "../event/details?eventId=" + me.eventId  
			,beforeSend: function( xhr ) {
				MsgManager.appBlock("Loading ..." );
            }
			,success: function( response ) 
			{
				// Get birthDistrict Option set
				var options = response.birthDistrict.options;
				for( var i in options )
				{
					var option = options[i];
					me.birthDistrict[option.code] = option.name;
				}
				
				// Get birthDistrict Option set
				options = response.birthOrder.options;
				for( var i in options )
				{
					var option = options[i];
					me.birthOrder[option.code] = option.name;
				}
				
				// Populate OrgUnit Information
				var ouData = response.ouInfo;
				me.eventReportTag.find("[attribute='districtName']").html( ouData.parent.name );
				me.eventReportTag.find("[attribute='ouName']").html( ouData.name );
				
				// Populate Category Option Code
				var catOptCode = response.catOptCode;
				for( var i in catOptCode )
				{
					me.eventReportTag.find("[attribute='catOptCode'][idx='" + i + "']").html( catOptCode.charAt(i) );
				}
				
				// Populate event date
				var eventDate = response.eventDetails.eventDate;
				me.eventReportTag.find("[eventDate][idx='0']").html( eventDate.charAt(8) );
				me.eventReportTag.find("[eventDate][idx='1']").html( eventDate.charAt(9) );
				me.eventReportTag.find("[eventDate][idx='2']").html( eventDate.charAt(5) );
				me.eventReportTag.find("[eventDate][idx='3']").html( eventDate.charAt(6) );
				me.eventReportTag.find("[eventDate][idx='4']").html( eventDate.charAt(0) );
				me.eventReportTag.find("[eventDate][idx='5']").html( eventDate.charAt(1) );
				me.eventReportTag.find("[eventDate][idx='6']").html( eventDate.charAt(2) );
				me.eventReportTag.find("[eventDate][idx='7']").html( eventDate.charAt(3) );
				
				
				// Populate event data
				var dataValues = response.eventDetails.dataValues;
				for( var i in dataValues )
				{
					var deId = dataValues[i].dataElement;
					var value = dataValues[i].value;
					if( value == "true"){
						value = "Yes";
					}
					else if( value == "false"){
						value = "No";
					}
					
					me.eventReportTag.find( "[dataelement='" + deId+ "']").html( value );
				}
				
				// Populate client data
				me.loadAndPopulateClientData( response.eventDetails.trackedEntityInstance );
			}
			,error: function(response)
			{
				console.log(response);
			}
		});
	};
	
	me.loadAndPopulateClientData = function( clientId )
	{		
		$.ajax(
		{
			type: "POST"
			,url: "../client/details?clientId=" + clientId
			,success: function( response ) 
			{
				var attributes = response.client.attributes;
				
				var firstName = me.getClientFirstName( attributes );
				var lastName = me.getClientLastName( attributes );
				var dateOfBirth = me.getClientDateOfBirth( attributes );
				
				var districtOfBirth = me.getClientDistrictOfBirth( attributes );
				districtOfBirth = ( me.birthDistrict[districtOfBirth] == undefined ) ? districtOfBirth : me.birthDistrict[districtOfBirth];
				
				var orderOfBirth = me.getClientBirthOrder( attributes );
				orderOfBirth = ( me.birthOrder[orderOfBirth] == undefined ) ? orderOfBirth : me.birthOrder[orderOfBirth];
	
				
				// STEP 2. Populate client data
				me.eventReportTag.find("[attribute='" + me.attr_districtOfBirth + "']").html( districtOfBirth );
				me.eventReportTag.find("[attribute='" + me.attr_birthOrder + "']").html( orderOfBirth );

				// CUIC
				var cuic = me.getClientUIC( attributes );
				for( var i=0; i<cuic.length; i++ )
				{
					me.eventReportTag.find("[attribute='" + me.attr_CUIC + "'][idx='" + i + "']").html( cuic.charAt(i) );
				}
				
				// BirthOfDistrict
				me.eventReportTag.find("[attribute='" + me.attr_districtOfBirth + "']").html( districtOfBirth );
				
				// BirthOrder
				me.eventReportTag.find("[attribute='" + me.attr_birthOrder + "']").html( orderOfBirth );
				
				// dateOfBirth
				me.eventReportTag.find("[attribute='" + me.attr_dateOfBirth + "'][idx='0']").html( dateOfBirth.charAt(8) );
				me.eventReportTag.find("[attribute='" + me.attr_dateOfBirth + "'][idx='1']").html( dateOfBirth.charAt(9) );
				me.eventReportTag.find("[attribute='" + me.attr_dateOfBirth + "'][idx='2']").html( dateOfBirth.charAt(5) );
				me.eventReportTag.find("[attribute='" + me.attr_dateOfBirth + "'][idx='3']").html( dateOfBirth.charAt(6) );
				me.eventReportTag.find("[attribute='" + me.attr_dateOfBirth + "'][idx='4']").html( dateOfBirth.charAt(2) );
				me.eventReportTag.find("[attribute='" + me.attr_dateOfBirth + "'][idx='5']").html( dateOfBirth.charAt(3) );	
				
				// dateRecentHIVTest
				var dateRecentHIVTest = me.getClientDateRecentHIVTest( attributes );
				me.eventReportTag.find("[attribute='" + me.attr_dateRecentHIVTest + "'][idx='0']").html( dateRecentHIVTest.charAt(5) );
				me.eventReportTag.find("[attribute='" + me.attr_dateRecentHIVTest + "'][idx='1']").html( dateRecentHIVTest.charAt(6) );
				me.eventReportTag.find("[attribute='" + me.attr_dateRecentHIVTest + "'][idx='2']").html( dateRecentHIVTest.charAt(0) );
				me.eventReportTag.find("[attribute='" + me.attr_dateRecentHIVTest + "'][idx='3']").html( dateRecentHIVTest.charAt(1) );
				me.eventReportTag.find("[attribute='" + me.attr_dateRecentHIVTest + "'][idx='4']").html( dateRecentHIVTest.charAt(2) );
				me.eventReportTag.find("[attribute='" + me.attr_dateRecentHIVTest + "'][idx='5']").html( dateRecentHIVTest.charAt(3) );	
				
				// Another attribute values
				for( var i in attributes )
				{
					var attrValue = attributes[i];
					if( attrValue.attribute != me.attr_CUIC 
							&& attrValue.attribute != me.attr_dateOfBirth
							&& attrValue.attribute != me.attr_dateRecentHIVTest
							&& attrValue.attribute != me.attr_districtOfBirth
							&& attrValue.attribute != me.attr_birthOrder ) {
						var value = attrValue.value;
						if( value == "true"){
							value = "Yes";
						}
						else if( value == "false"){
							value = "No";
						}
						me.eventReportTag.find("[attribute='" + attrValue.attribute + "']").html( value );
					} 
				}
				
			}
			,error: function(response)
			{
				console.log(response);
			}
		}).always( function( data ) {
			MsgManager.appUnblock();
		});
	};
	
	
	// ------------------------------------------------------------------------------------------
	// Get client attribute values
	// ------------------------------------------------------------------------------------------
	

	me.getClientUIC = function( attributes )
	{
		for( var j in attributes )
		{
			var attrValue = attributes[j];
			if( attrValue.attribute == me.attr_CUIC ) {
				return attrValue.value;
			}
		}
		
		return "";
	};
	
	me.getClientLastName = function( attributes )
	{
		for( var j in attributes )
		{
			var attrValue = attributes[j];
			if( attrValue.attribute == me.attr_lastName ) {
				return attrValue.value;
			}
		}
		
		return "";
	};
		
	me.getClientFirstName = function( attributes )
	{
		for( var j in attributes )
		{
			var attrValue = attributes[j];
			if( attrValue.attribute == me.attr_firstName ) {
				return attrValue.value;
			}
		}
		
		return "";
	};
	
	me.getClientDateOfBirth = function( attributes )
	{
		for( var j in attributes )
		{
			var attrValue = attributes[j];
			if( attrValue.attribute == me.attr_dateOfBirth ) {
				return attrValue.value;
			}
		}
		
		return "";
	};
	
	me.getClientDistrictOfBirth = function( attributes )
	{
		for( var j in attributes )
		{
			var attrValue = attributes[j];
			if( attrValue.attribute == me.attr_districtOfBirth ) {
				return attrValue.value;
			}
		}
		
		return "";
	};
	
	me.getClientBirthOrder = function( attributes )
	{
		for( var j in attributes )
		{
			var attrValue = attributes[j];
			if( attrValue.attribute == me.attr_birthOrder ) {
				return attrValue.value;
			}
		}
		
		return "";
	};

	me.getClientDateRecentHIVTest = function( attributes )
	{
		for( var j in attributes )
		{
			var attrValue = attributes[j];
			if( attrValue.attribute == me.attr_dateRecentHIVTest ) {
				return attrValue.value;
			}
		}
		
		return "";
	};

	

	// ------------------------------------------------------------------------------------------
	// RUN init method
	// ------------------------------------------------------------------------------------------
	
	me.init();
}