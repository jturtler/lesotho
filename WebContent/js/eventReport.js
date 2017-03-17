
function EventReport()
{
	var me = this;
	
	me.eventReportTag = $("#eventReport");
	
	me.attr_FirstName = "mW2l3T2zL0N";
	me.attr_LastName = "mUxDHgywnn2";
	me.attr_DistrictOB = "u57uh7lHwF8";
	me.attr_dateOfBirth = "wSp6Q7QDMsk";
	me.attr_CUIC = "zRA08XEYiSF";
	
	
	me.init = function()
	{
		me.eventId = Util.getURLParameterByName( location.href, "eventid" );
		me.loadAndPopulateEventData();
	};
	
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
				var dataValues = response.dataValues;
				for( var i in dataValues )
				{
					var deId = dataValues[i].dataElement;
					var value = dataValues[i].value;
					
					// Populate data into the form
					
					me.eventReportTag.find( "[dataelement='" + deId+ "'][value='" + value + "']").html( "X" );
				}

				me.loadAndPopulateClientData( response.trackedEntityInstance );
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
				var firstName = "";
				var lastName = "";
				var dateOfBirth = "";
				var districtOfBirth = "";
				var birthOrder = "";
				var educationalLevel = "";
				var keyPopulation = "";
				var gender = "";
				
				var attrValues = response.client.attributes;
				for( var i in attrValues )
				{
					var attributeId = attrValues[i].attribute;
					var value = attrValues[i].value;
					if( attributeId == me.attr_FirstName )
					{
						me.eventReportTag.find("[id='firstName']").html( value );
					}
					else if( attributeId == me.attr_LastName )
					{
						me.eventReportTag.find("[id='surName']").html( value );
					}
//					else if( attributeId == me.attr_DistrictOB )
//					{
//						me.eventReportTag.find("[attribute='" + attributeId + "']").html( value );
//					}
					else if( attributeId == me.attr_dateOfBirth )
					{
						me.eventReportTag.find("[attribute='" + attributeId + "'][idx='0']").html( value.charAt(8) );
						me.eventReportTag.find("[attribute='" + attributeId + "'][idx='1']").html( value.charAt(9) );
						me.eventReportTag.find("[attribute='" + attributeId + "'][idx='2']").html( value.charAt(5) );
						me.eventReportTag.find("[attribute='" + attributeId + "'][idx='3']").html( value.charAt(6) );
						me.eventReportTag.find("[attribute='" + attributeId + "'][idx='4']").html( value.charAt(2) );
						me.eventReportTag.find("[attribute='" + attributeId + "'][idx='5']").html( value.charAt(3) );
					}
					else if( attributeId == me.attr_CUIC )
					{
						var cuic = value;
						me.eventReportTag.find("[attribute='" + attributeId + "'][idx='0']").html( cuic.charAt(0) );
						me.eventReportTag.find("[attribute='" + attributeId + "'][idx='1']").html( cuic.charAt(1) );
						me.eventReportTag.find("[attribute='" + attributeId + "'][idx='2']").html( cuic.charAt(2) );
						me.eventReportTag.find("[attribute='" + attributeId + "'][idx='3']").html( cuic.charAt(3) );
						me.eventReportTag.find("[attribute='" + attributeId + "'][idx='4']").html( cuic.charAt(4) );
						me.eventReportTag.find("[attribute='" + attributeId + "'][idx='5']").html( cuic.charAt(5) );
						me.eventReportTag.find("[attribute='" + attributeId + "'][idx='6']").html( cuic.charAt(6) );
						me.eventReportTag.find("[attribute='" + attributeId + "'][idx='7']").html( cuic.charAt(7) );
						me.eventReportTag.find("[attribute='" + attributeId + "'][idx='8']").html( cuic.charAt(8) );
						me.eventReportTag.find("[attribute='" + attributeId + "'][idx='9']").html( cuic.charAt(9) );
						me.eventReportTag.find("[attribute='" + attributeId + "'][idx='10']").html( cuic.charAt(10) );
						me.eventReportTag.find("[attribute='" + attributeId + "'][idx='11']").html( cuic.charAt(11) );
					}
					else
					{
						me.eventReportTag.find("[attribute='" + attributeId + "'][value='" + value + "']").html( "X" );
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
	
	
	me.init();
}