function Counsellor( storageObj, translationObj )
{
	var me = this;
	me.storageObj = storageObj;
	me.translationObj = translationObj;
	me.validationObj;
	
	me.dateFormat = "dd M yy";
	
	me.todayCaseLinkTag = $("#todayCaseLink");
	me.previousCaseLinkTag = $("#previousCaseLink");
	me.positiveCaseLinkTag = $("#positiveCaseLink");
	me.searchClientLinkTag = $("#searchClientLink");
	me.aboutLinkTag = $("#aboutLink");
	me.settingsLinkTag = $("#settingsLink");
	me.consumablesLinkTag = $("#consumablesLink");
	me.statisticsLinkTag = $("#statisticsLink");
	
	me.userFullNameTag = $("[name='userFullName']");
	me.dhisServerTag = $("#dhisServer");
	me.clientListTag = $("#clientList");
	me.headerListTag = $("#headerList");
	me.contentListTag = $("#contentList");
	me.listDateTag = $("#listDate");
	me.registerClientBtnTag = $("#registerClientBtn");
	me.searchClientFormTag = $("#searchClientForm");
	me.searchClientBtnTag = $("#searchClientBtn");
	me.searchResultTag = $("#searchResult");
	me.searchResultTbTag = $("#searchResultTb");
	me.searchResultKeyTag = $("[name='searchResultKey']");
	me.searchResultOptionsTag = $("#searchResultOptions");
	me.addNewClientBtnTag = $("#addNewClientBtn");
	me.seachAddClientFormTag = $("#seachAddClientForm");
	me.backToSearchClientResultBtnTag = $("#backToSearchClientResultBtn");
	me.searchResultOptTag = $("[name='searchResultOpt']");
	me.searchResultNextBtnTag = $("#searchResultNextBtn");
	me.addClientFormTabTag = $("#addClientFormTab");
	me.addClientFormDivTag = $("#addClientFormDiv");
	me.clientAttributeDivTag = $("#clientAttributeDiv");
	me.addClientFormTag = $("#addClientForm");
	me.saveClientBtnTag = $("#saveClientBtn");
	me.saveEventBtnTag = $("#saveEventBtn");
	me.completedEventBtnTag = $("#completedEventBtn");
	me.addEventFormTag = $("#addEventForm");
	me.previousTestsTag = $("#previousTests");
	me.thisTestDivTag = $("#thisTestDiv");
	me.aboutDivTag = $("#aboutDiv");
	me.updateClientBtnTag = $("[name='updateClientBtn']");
	me.orgUnitListTag =  $("#orgUnitList");
	me.selectOrgUnitWarningMsgTag = $("#selectOrgUnitWarningMsg");
	me.settingsDivTag = $("#settingsDiv");
	me.moveToSettingLinkTag = $("#moveToSettingLink");
	me.divSessionExpireMsgTag =  $( "#divSessionExpireMsg" );
	me.menuIcon = $("button.hamburger");
	me.headerRightSideControlsTag = $("div.headerRightSideControls");
	me.mainContentTags = $("div.mainContent");
	me.consumablesDivTag = $("#consumablesDiv");
	me.statisticsDivTag = $("#statisticsDiv");
	me.hideHIVTestLogicActionTag = $("#hideHIVTestLogicAction");
	
	
	me.attr_FirstName = "mW2l3T2zL0N";
	me.attr_LastName = "mUxDHgywnn2";
	me.attr_DoB = "wSp6Q7QDMsk";
	me.attr_DistrictOB = "u57uh7lHwF8";
	me.attr_Twin = "kEDRehdPMKG";
	me.attr_ClientCUIC = "zRA08XEYiSF";
	me.attr_BirthOrder ="vTPYC9BXPNn";
	me.attr_Adquisition = "";
	me.attr_Last_TestNS = "";
	me.attr_LastContact = "";
	

	me.de_Testing_ResultTest1 = "choHDFxMCaU";
	me.de_Testing_ResultTest2 = "KDnhSz51HKS";
	me.de_Testing_ResultParallel1 = "rMh4ZGNzrh1";
	me.de_Testing_ResultParallel2 = "Bqff4skvt4d";
	me.de_Testing_ResultSDBioline = "M11JqgkJt2X";
	me.de_FinalResult_HIVStatus = "UuKat0HFjWS";
	
	me.TAB_NAME_PREVIOUS_TEST = "previousTestDiv";
	me.TAB_NAME_THIS_TEST = "thisTestDiv";
	
	me.userInfoLoaded = false;
	me.metadataLoaded = false;
	
	me.sectionList = [];
	me.attributeGroupList = [];
	
	me.searchClientAttributeIds = ["wSp6Q7QDMsk", "u57uh7lHwF8", "mW2l3T2zL0N", "mUxDHgywnn2", "vTPYC9BXPNn"];

	// -------------------------------------------------------------------
	// Init methods
	// -------------------------------------------------------------------
	
	me.init = function()
	{		
		MsgManager.initialSetup();		
		me.validationObj = new Validation( me.translationObj );
		
		me.hideHIVTestLogicActionTag.val( me.storageObj.getItem( me.storageObj.KEY_STORAGE_HIDE_HIV_TEST_LOGIC_ACTION_FIELDS ) );		
		me.loadInitData();
	};
	

	me.loadInitData = function()
	{
		Commons.checkSession( function( isInSession ) {
			if ( isInSession ) {
				var tranlatedText = me.translationObj.getTranslatedValueByKey( "common_msg_initializing" );
				MsgManager.appBlock( tranlatedText + " ... " );
				me.loadCurrentUserInfo();
				me.loadMetadata();
			} else {
				me.showExpireSessionMessage();					
			}
		});	
	};
	
	// ----------------------------------------------------------------------------
	// Set up Events
	// ----------------------------------------------------------------------------
	
	
	me.setUp_Events = function()
	{	
		window.addEventListener('resize', me.setUp_FloatButton);
		
		// ------------------------------------------------------------------
		// Events for menu
		// ------------------------------------------------------------------
		
		me.todayCaseLinkTag.click(function(){
			me.registerClientBtnTag.show();
			me.listTodayCases();
			$('.overlay').click();
		});
		
		me.previousCaseLinkTag.click(function(){
			me.registerClientBtnTag.hide();
			me.listPreviousCases();
			$('.overlay').click();
		});
		
		me.positiveCaseLinkTag.click(function(){
			me.registerClientBtnTag.hide();
			me.listPositiveCases();
			$('.overlay').click();
		});
		
		me.searchClientLinkTag.click(function(){
			me.resetPageDisplay();
			me.resetSearchClientForm();
			me.showSearchClientForm();
			$('.overlay').click();
		});
		
		me.settingsLinkTag.click(function(){
			me.resetPageDisplay();
			me.settingsDivTag.show("fast");
			$('.overlay').click();
		});
		
		me.aboutLinkTag.click(function(){
			me.resetPageDisplay();
			me.aboutDivTag.show("fast");
			$('.overlay').click();
		});
		
		me.moveToSettingLinkTag.click(function(){
			me.resetPageDisplay();
			me.settingsDivTag.show("fast");
			$('.overlay').click();
		});
		
		me.consumablesLinkTag.click(function(){
			me.resetPageDisplay();
			me.consumablesDivTag.show("fast");
			$('.overlay').click();
		});
		
		me.statisticsLinkTag .click(function(){
			me.resetPageDisplay();
			me.statisticsDivTag.show("fast");
			$('.overlay').click();
		});
		
		// ------------------------------------------------------------------
		// Events for input tags
		// ------------------------------------------------------------------
		
		me.seachAddClientFormTag.find("[isDate='true']").each(function(){
			Util.datePicker($(this), me.dateFormat );
		});
		
		me.addClientFormTag.find("[isDate='true']").each(function(){
			Util.datePicker($(this), me.dateFormat );
		});

		
		me.searchResultOptTag.change( function(){
			me.searchResultTag.find("span.labelOpt").css("font-size","");
			
			var optionTag = me.searchResultTag.find("input:radio:checked");
			optionTag.closest("li").find("span.labelOpt").css("font-size","18px");
		});
		
		me.searchResultNextBtnTag.click(function(){
			var optionVal = me.searchResultTag.find("input:radio:checked").val();
			if( optionVal === "backToSearchClientForm" ) {
				me.resetPageDisplay();
				me.showSearchClientForm();
			}
			else if( optionVal === "addNewClient" ) {
				me.showAddClientForm();
			}
			else if( optionVal === "showTodayCase" ) {
				me.registerClientBtnTag.show();
				me.listTodayCases();
			}
		});
		
		me.seachAddClientFormTag.find("input,select").change(function(){
			
			if( $(this).val() !== "" ){
				MsgManager.msgAreaHide();
			}
			else {
				var tranlatedText = me.translationObj.getTranslatedValueByKey( "searchClient_validation_requiredValueInOneField" );
				MsgManager.msgAreaShow( tranlatedText, "ERROR" );
			}
		});
		
		
		// Orgunit selector in 'Settings'

		me.orgUnitListTag.change(function(){
			var tranlatedText = me.translationObj.getTranslatedValueByKey( "common_msg_orgUnitSaved" );
			me.storageObj.addItem( me.storageObj.KEY_STORAGE_ORGUNIT, me.orgUnitListTag.val() );			
			MsgManager.msgAreaShow( tranlatedText, "SUCCESS");
		});

		// ------------------------------------------------------------------
		// Events for Buttons
		// ------------------------------------------------------------------
		
		me.searchClientBtnTag.click(function(event){
			me.searchClients(event);
		});
		
		me.registerClientBtnTag.click(function(){
			me.resetPageDisplay();
			me.resetSearchClientForm();
			me.showSearchClientForm();
		});
		
		me.backToSearchClientResultBtnTag.click(function(){
			me.addClientFormDivTag.hide();
			MsgManager.msgAreaHide();
			me.selectOrgUnitWarningMsgTag.hide();
			me.searchResultTbTag.show();
			me.searchResultTag.show();
		});
		
		
		me.saveClientBtnTag.click(function(){
			me.saveClient();
		});
		
		
		me.completedEventBtnTag.click(function(){
			var tranlatedText = me.translationObj.getTranslatedValueByKey( "clientEntryForm_msg_aksForCompletingEvent" );
			var result = confirm(tranlatedText);
			if(result)
			{
				var tranlatedText = me.translationObj.getTranslatedValueByKey( "clientEntryForm_msg_creatingEvent" );
				MsgManager.appBlock( tranlatedText + " ..." );
				
				me.addEventClickHandle(function(){
					me.addClientFormTabTag.removeAttr( "eventId" );
					me.addClientFormTabTag.removeAttr( "event" );
				});
			}
		});
		
		me.saveEventBtnTag.click( function(){
			var clientId = me.addClientFormTabTag.attr("clientId");
			var eventId = me.addClientFormTabTag.attr("eventId");
			var event = me.addClientFormTabTag.attr("event");
			
			if( event !== undefined ){
				event = JSON.parse( event );
			}
			else{
				event = {};
			}
			me.saveEvent(event, clientId, eventId );
		});
		
		me.hideHIVTestLogicActionTag.change( function(){
			me.storageObj.addItem( me.storageObj.KEY_STORAGE_HIDE_HIV_TEST_LOGIC_ACTION_FIELDS, me.hideHIVTestLogicActionTag.val() );

			var translatedText = me.translationObj.getTranslatedValueByKey( "common_msg_settingsHideLogicActionFieldsSaved" );
			MsgManager.msgAreaShow( translatedText, "SUCCESS" );
		});
		
		// --------------------------------------------------------------------------
		// Events and Validation for fields in [Search Client], [Add/Update Form] form
		// --------------------------------------------------------------------------
		
		me.seachAddClientFormTag.find("input,select").keyup(function(e){
			if ( e.keyCode === 13 ) {
				me.searchClients(e);
			}
		});
		
		me.addClientFormTag.find("input,select").change(function(e){
			me.generateClientCUIC();
			
			// Add event for "Birth Order" , just accept value in range [0, 20]
			var attrId = $(this).attr("attribute");
			if( attrId === me.attr_BirthOrder )
			{
				$(this).attr( "maxvalue", 20 );
			}
		});
		
		me.thisTestDivTag.find("input,select").change(function(e){
			me.setUp_clientEntryFormLogic( $(this) );			
		});
		
		me.setUp_validationCheck( me.addClientFormTag.find( 'input,select' ) );
		me.setUp_validationCheck( me.thisTestDivTag.find( 'input,select' ) );
		
		
	};
	
	me.setUp_validationCheck = function( tags )
	{
		tags.change( function() {
			me.validationObj.checkValidations( $(this) );
		});
	};

	me.setUp_FloatButton = function()
	{
		var width = $(window).width() - 80;
		var height = $(window).height() - 80;
		
		
		me.registerClientBtnTag.css({top: height, left: width, position:'fixed'});
	};
	
	me.setUp_clientEntryFormLogic = function( item )
	{
		if( eval( me.addClientFormTabTag.attr("addedLogic") ) )
		{
			var resultTest1Tag = me.getDeField( me.de_Testing_ResultTest1 );
			var resultTest2Tag = me.getDeField( me.de_Testing_ResultTest2 );
			var resultTestParallel1Tag = me.getDeField( me.de_Testing_ResultParallel1 );
			var resultTestParallel2Tag = me.getDeField( me.de_Testing_ResultParallel2 );
			var resultTestResultSDBiolineTag = me.getDeField( me.de_Testing_ResultSDBioline );
			var resultFinalHIVStatusTag = me.getDeField( me.de_FinalResult_HIVStatus );
			
			var attrId = item.attr("dataelement");
			
			// If "Result Test 1" value is "Positive", enable "Result Test 2"
			if( attrId === me.de_Testing_ResultTest1 )
			{
				if( resultTest1Tag.val() === "Positive" )
				{
					resultFinalHIVStatusTag.val( resultTest1Tag.val() );
					
					resultTest2Tag.val( "" );
					resultTestParallel1Tag.val( "" );
					resultTestParallel2Tag.val( "" );
					resultTestResultSDBiolineTag.val( "" );
					resultFinalHIVStatusTag.val( "" );
					
					Util.disableTag( resultTest2Tag, false );
					Util.disableTag( resultTestParallel1Tag, true );
					Util.disableTag( resultTestParallel2Tag, true );
					Util.disableTag( resultTestResultSDBiolineTag, true );
					
					me.addMandatoryForField( resultTest2Tag );
				}
				else
				{
					resultTest2Tag.val( "" );
					resultTestParallel1Tag.val( "" );
					resultTestParallel2Tag.val( "" );
					resultTestResultSDBiolineTag.val( "" );
					resultFinalHIVStatusTag.val( resultTest1Tag.val() );
					
					Util.disableTag( resultTest2Tag, true );
					Util.disableTag( resultTestParallel1Tag, true );
					Util.disableTag( resultTestParallel2Tag, true );
					Util.disableTag( resultTestResultSDBiolineTag, true );
					
					me.removeMandatoryForField( resultTest2Tag );
					me.removeMandatoryForField( resultTestParallel1Tag );
					me.removeMandatoryForField( resultTestParallel2Tag );
					me.removeMandatoryForField( resultTestResultSDBiolineTag );
				}
			}
			// If "Result Test 2" value is "Positive", enable "Result Parallel 2" 
			else if( attrId === me.de_Testing_ResultTest2 )
			{
				if( resultTest2Tag.val() !== "Positive" )
				{
					resultTestParallel1Tag.val( "" );
					resultTestParallel2Tag.val( "" );
					resultTestResultSDBiolineTag.val( "" );
					resultFinalHIVStatusTag.val( resultTest2Tag.val() );
					
					Util.disableTag( resultTestParallel1Tag, false );
					Util.disableTag( resultTestParallel2Tag, false );
					Util.disableTag( resultTestResultSDBiolineTag, true );
					
					me.addMandatoryForField( resultTestParallel1Tag );
					me.addMandatoryForField( resultTestParallel2Tag );
				}
				else
				{
					resultTestParallel1Tag.val( "" );
					resultTestParallel2Tag.val( "" );
					resultTestResultSDBiolineTag.val( "" );
					resultFinalHIVStatusTag.val( resultTest2Tag.val() );
					
					Util.disableTag( resultTestParallel1Tag, true );
					Util.disableTag( resultTestParallel2Tag, true );
					Util.disableTag( resultTestResultSDBiolineTag, true );
					
					
					me.removeMandatoryForField( resultTestParallel1Tag );
					me.removeMandatoryForField( resultTestParallel2Tag );
					me.removeMandatoryForField( resultTestResultSDBiolineTag );
				}
			}
			// If the value of "Parallel 1" and "Parallel 2" are the same, "FinalResult" has value as "Parallel"
			// If not, enable "SD Bioline" field
			else if( attrId === me.de_Testing_ResultParallel1 || attrId === me.de_Testing_ResultParallel2 )
			{
				
				if( resultTestParallel1Tag.val() != "" && resultTestParallel2Tag.val() != "" )
				{
					if( resultTestParallel1Tag.val() != resultTestParallel2Tag.val() )
					{
						resultFinalHIVStatusTag.val( "" );
						Util.disableTag( resultTestResultSDBiolineTag, false );
						me.addMandatoryForField( resultTestResultSDBiolineTag );
						
					}
					else
					{
						resultTestResultSDBiolineTag.val( "" );
						resultFinalHIVStatusTag.val( resultTestParallel1Tag.val() );
						
						Util.disableTag( resultTestResultSDBiolineTag, true );
						me.removeMandatoryForField( resultTestResultSDBiolineTag );
					}
				}
				else
				{
					resultTestResultSDBiolineTag.val( "" );
					resultFinalHIVStatusTag.val( "" );
					Util.disableTag( resultTestResultSDBiolineTag, true );
					me.removeMandatoryForField( resultTestResultSDBiolineTag );
				}
			}
			// Fill "SD Bioline" value for "Final Result"
			else if( attrId === me.de_Testing_ResultSDBioline )
			{
				resultFinalHIVStatusTag.val( resultTestResultSDBiolineTag.val() );
			}
		}		
	};
	

	// ----------------------------------------------------------------------------
	// Create Search Client form, Registration form and Entry form
	// ----------------------------------------------------------------------------
	
	me.createClientForm = function()
	{
		me.createAddClientForm();
		me.createSearchClientForm();
		me.createClientEntryForm();
		
		// Remove the 'mandatory' SPAN from the Search table
		me.seachAddClientFormTag.find("span.required").remove();
	};
	
	
	// ----------------------------------------------------------------------------
	// Create 'Search Client' form with attribute-groups and program-attributes from server
	
	me.createAddClientForm = function()
	{
		// STEP 1. Create the table
		
		var table = $("<table class='table table-hover table-striped previousTestTb'></table>");
		me.addClientFormTag.append( table );
		
		for( var i in me.attributeGroupList )
		{
			var group = me.attributeGroupList[i];
			
			// STEP 2. Populate attribute-group name
			
			rowTag = $("<tr></tr>");
			rowTag.append("<th colspan='2' style='font-weight:bold'>" + group.name + "</th>");
			table.append( rowTag );
			
			// STEP 3. Populate attributes in group
			
			var list = me.attributeGroupList[i].list;
			for( var j in list)
			{
				var attribute = list[j];
				rowTag = $("<tr></tr>");
				
				// STEP 3.1. Populate the name of attribute
				
				if( !attribute.mandatory )
				{
					rowTag.append("<td>" + attribute.name + "</td>");
				}
				else
				{
					rowTag.append("<td>" + attribute.name + " <span class='required'>*</span></td>");
				}
				
				// STEP 3.2. Generate the input/select tag based on the valueType of attribute
				
				var inputTag = "<input class='form-control' attribute='" + attribute.id + "' mandatory='" + attribute.mandatory + "'>";
				if( attribute.optionSet !== undefined )
				{
					var options = attribute.optionSet.options;
					inputTag = "<select class='form-control' attribute='" + attribute.id + "' mandatory='" + attribute.mandatory + "'>";
					inputTag += "<option value=''>[Please select]</option>";
					for( var k in options )
					{
						var code = options[k].code;
						var name = options[k].name;
						inputTag += "<option value='" + code + "'>" + name + "</option>";
					}
					inputTag += "</select>";
				}
				else if( attribute.valueType === "NUMBER" || attribute.valueType === "INTEGER_ZERO_OR_POSITIVE" )
				{
					inputTag = "<input number='true' class='form-control' attribute='" + attribute.id + "' mandatory='" + attribute.mandatory + "'>";
				}
				else if( attribute.valueType === "BOOLEAN" )
				{
					inputTag = "<select class='form-control' attribute='" + attribute.id + "' mandatory='" + attribute.mandatory + "'>";
					inputTag += "<option value=''>[Please select]</option>";
					inputTag += "<option value='true'>Yes</option>";
					inputTag += "<option value='false'>No</option>";
					inputTag += "</select>";
				}
				else if( attribute.valueType === "DATE" )
				{
					inputTag = "<input class='form-control' isDate='true' attribute='" + attribute.id + "' mandatory='" + attribute.mandatory + "'>"
				}
				
				rowTag.append("<td>" + inputTag + "</td>");
				table.append( rowTag );
				
			} // END Attribute List
			
		}// END Attribute Groups
		
		// Disable 'Client CUIC' field. The value of this attribute will be generated from another attribute value
		
		Util.disableTag( me.addClientFormTag.find("input[attribute='" + me.attr_ClientCUIC + "']"), true );
		
	};
	
	
	// ----------------------------------------------------------------------------
	// Create 'Add Client' form with attribute-groups and program-attributes from server
	
	me.createSearchClientForm = function()
	{
		for( var i in me.searchClientAttributeIds )
		{
			var attrId = me.searchClientAttributeIds[i];
			var inputTag = me.addClientFormTag.find("input[attribute='" + attrId + "'],select[attribute='" + attrId + "']" );
			var text = inputTag.closest("tr").find("td:first").html();
			
			var fieldTag = $("<div class='form-group'></div>");
			fieldTag.append("<label for='" + attrId + "' class='col-sm-2 control-label' style='font-weight:300'>" + text + "</label>");
			fieldTag.append( "<div class='col-sm-10'>" + inputTag.closest("td").html() + "</div>" );
			me.seachAddClientFormTag.append( fieldTag );
		}
		
	};	

	
	// ----------------------------------------------------------------------------
	// Create 'Event Entry Form'
	
	me.createClientEntryForm = function()
	{
		// STEP 1. Create the table
		
		var table = $("<table class='table table-hover table-striped previousTestTb'></table>");
		
		for( var i in me.sectionList )
		{
			
			// STEP 2. Populate section name
			
			var rowTag = $("<tr></tr>");
			rowTag.append("<th colspan='2' style='font-weight:bold'>" + me.sectionList[i].displayName + "</th>");
			table.append( rowTag );
			
			// STEP 3. Populate dataElements in section
			
			var deList = me.sectionList[i].programStageDataElements;
			for( var l in deList)
			{
				
				var de = deList[l].dataElement;
				rowTag = $("<tr></tr>");
				
				// STEP 3.1. Populate the name of attribute
				
				rowTag.append("<td>" + de.formName + "</td>");
				
				// STEP 3.2. Generate the input/select tag based on the valueType of attribute
				
				var inputTag = "<input class='form-control' dataelement='" + de.id + "'>";
				if( de.optionSet !== undefined )
				{
					var options = de.optionSet.options;
					inputTag = "<select class='form-control' dataelement='" + de.id + "'>";
					inputTag += "<option value=''>[Please select]</option>";
					for( var k in options )
					{
						inputTag += "<option value='" + options[k].code + "'>" + options[k].name + "</option>";
					}
					inputTag += "</select>";
				}
				else if( de.valueType === "BOOLEAN" )
				{
					inputTag = "<select class='form-control' dataelement='" + de.id + "'>";
					inputTag += "<option value=''>[Please select]</option>";
					inputTag += "<option value='true'>Yes</option>";
					inputTag += "<option value='false'>No</option>";
					inputTag += "</select>";
				}
				else if( de.valueType === "NUMBER")
				{
					inputTag = "<input number='true' class='form-control' dataelement='" + de.id + "'>"
				}
				rowTag.append("<td>" + inputTag + "</td>");
				
				
				table.append( rowTag );
				
			} // END DE List
			
		}// END Sections
		
		me.addEventFormTag.append( table );
		
		
		// Disable some DEs in form. Will add login for these DE in 'change' event
		
		var resultTest2Tag = me.getDeField( me.de_Testing_ResultTest2 );
		var resultTestParallel1Tag = me.getDeField( me.de_Testing_ResultParallel1 );
		var resultTestParallel2Tag = me.getDeField( me.de_Testing_ResultParallel2 );
		var resultTestResultSDBiolineTag = me.getDeField( me.de_Testing_ResultSDBioline );
		var resultFinalHIVStatusTag = me.getDeField( me.de_FinalResult_HIVStatus );
		
		if( resultTest2Tag.length > 0 && resultTestParallel1Tag.length > 0 && resultTestParallel2Tag.length > 0 
				&& resultTestResultSDBiolineTag.length > 0 && resultFinalHIVStatusTag.length > 0 )
		{
			 me.addClientFormTabTag.attr("addedLogic", true );

			 // Add "mandatory" validation for "Test 1" field
			 
			 var resultTest1Tag = me.getDeField( me.de_Testing_ResultTest1 );
			 me.addMandatoryForField( resultTest1Tag );
			 
			 // Reset client entry form
			 
			 me.resetClientEntryForm();
		}
		else
		{
			me.addClientFormTabTag.attr("addedLogic", false );
		}
	};
	
	me.resetClientEntryForm = function()
	{
		var resultTest2Tag = me.getDeField( me.de_Testing_ResultTest2 );
		var resultTestParallel1Tag = me.getDeField( me.de_Testing_ResultParallel1 );
		var resultTestParallel2Tag = me.getDeField( me.de_Testing_ResultParallel2 );
		var resultTestResultSDBiolineTag = me.getDeField( me.de_Testing_ResultSDBioline );
		var resultFinalHIVStatusTag = me.getDeField( me.de_FinalResult_HIVStatus );
		
		me.removeMandatoryForField( resultTest2Tag );
		me.removeMandatoryForField( resultTestParallel1Tag );
		me.removeMandatoryForField( resultTestParallel2Tag );
		me.removeMandatoryForField( resultTestResultSDBiolineTag );
		
		Util.disableTag(resultTest2Tag, true);
		Util.disableTag(resultTestParallel1Tag, true);
		Util.disableTag(resultTestParallel2Tag, true);
		Util.disableTag(resultTestResultSDBiolineTag, true);
		Util.disableTag(resultFinalHIVStatusTag, true);
	}
	
	me.addMandatoryForField = function( tag )
	{
		var inputRowTag = tag.closest("tr");
		
		me.removeMandatoryForField( tag );
		tag.attr( "mandatory", true );
		inputRowTag.find("td:first").append("<span class='required'> *</span>");
		inputRowTag.show();
	}
	
	me.removeMandatoryForField = function( tag )
	{
		var inputRowTag = tag.closest("tr");
		
		tag.removeAttr( "mandatory" );
		inputRowTag.find("td:first").find("span.required").remove();
		tag.closest("td").find("span.errorMsg").remove();
		
		// Show/Hide the logic action field 
		if( eval( me.hideHIVTestLogicActionTag.val() ) )
		{
			inputRowTag.hide();
		}
		else
		{
			inputRowTag.show();
		}
	}
	
	// ----------------------------------------------------------------------------
	// Initialize data for the HTML page
	// ----------------------------------------------------------------------------
	
	// Load user information
	
	me.loadCurrentUserInfo = function()
	{
		$.ajax({
			type: "GET"
			,url: "../login"
			,dataType: "json"
            ,contentType: "application/json;charset=utf-8"
			,success: function( jsonData ) 
			{
				me.userFullNameTag.html( jsonData.fullName );
				me.dhisServerTag.html( jsonData.dhisServer );
				me.userInfoLoaded = true;
				me.checkAndLoadDataAfterInit();
			},
			error: function(a,b,c)
			{
				console.log("ERROR");
			}
		});
	}
	
	
	// Load sections of program, program-attributes, attribute-groups and orgUnit List
	
	me.loadMetadata = function()
	{
		$.ajax({
			type: "POST"
			,url: "../metaData/all"
			,dataType: "json"
            ,contentType: "application/json;charset=utf-8"
			,success: function( jsonData ) 
			{
				// STEP 1. Save the sectionList in memory
				
				me.sectionList = jsonData.sections.programStageSections;
				
				// STEP 2. Structure attGroups with attributes in memory
				
				me.attributeGroupList = [];
				
				var attrGroups = jsonData.attGroups.trackedEntityAttributeGroups;
				var prgAttributes = jsonData.programAttributes.programTrackedEntityAttributes;
				for( var i in attrGroups )
				{
					me.attributeGroupList[i] = {};
					me.attributeGroupList[i].name = attrGroups[i].name;
					me.attributeGroupList[i].list = [];
					
					var attrGroupList = attrGroups[i].trackedEntityAttributes;
					for( var j in attrGroupList )
					{
						for( var k in prgAttributes )
						{
							var prgAttribute = prgAttributes[k];
							
							// STEP 2.1. Check if attribute in the groups exists in program-attribute
							
							if( prgAttribute.trackedEntityAttribute.id === attrGroupList[j].id )
							{
								var attribute = attrGroupList[j];
								attribute.mandatory = prgAttribute.mandatory;
								
								// STEP 2.2. Add the attribute in attribute list of result
								
								me.attributeGroupList[i].list.push(attribute);
							}
						}
					}
				}
				
				// STEP 3. Populate orgunit list in 'Settings'
				
				me.orgUnitListTag.append("<option value=''>[Please select]</option>");
				for( var i in jsonData.ouList.organisationUnits )
				{
					var orgUnit = jsonData.ouList.organisationUnits[i];
					me.orgUnitListTag.append("<option value='" + orgUnit.id + "'>" + orgUnit.name + "</option>");
				}

				me.orgUnitListTag.val( me.storageObj.getItem( me.storageObj.KEY_STORAGE_ORGUNIT ) );
				
				
				me.metadataLoaded = true;
				me.checkAndLoadDataAfterInit();
			},
			error: function(a,b,c)
			{
				console.log("ERROR");
			}
		});
	};
	
	// Set up data/events for components in HTML page
	
	me.checkAndLoadDataAfterInit = function()
	{
		if( me.userInfoLoaded && me.metadataLoaded )
		{
			me.createClientForm();
			me.searchDoBTag = me.seachAddClientFormTag.find("[attribute='wSp6Q7QDMsk']");
			me.searchDistrictOBTag = me.seachAddClientFormTag.find("[attribute='u57uh7lHwF8']");
			me.searchLastNameTag = me.seachAddClientFormTag.find("[attribute='mUxDHgywnn2']");
			me.searchFirstNameTag = me.seachAddClientFormTag.find("[attribute='mW2l3T2zL0N']");
			me.searchTwinTag = me.seachAddClientFormTag.find("[attribute='kEDRehdPMKG']");
			me.addDoBTag = me.addClientFormTag.find("[attribute='wSp6Q7QDMsk']");
			
			me.setUp_Events();		
			me.setUp_FloatButton();		
			me.addClientFormTabTag.tabs();
			
			me.listTodayCases();
		}
	};
	
	// -------------------------------------------------------------------
	// Load list of cases
	// -------------------------------------------------------------------
	
	me.listTodayCases = function()
	{
		var tranlatedHeaderText = me.translationObj.getTranslatedValueByKey( "todayCases_headerTitle" );
		
		me.listDateTag.html( Util.getLastNDate(0) );
		var headerList = ["Time", "Name", "Result", "What else?", "Indexed?"];
		me.listCases( "../event/todayCases", headerList, "#cfe2f3", tranlatedHeaderText + " - ", true, false, true );
	}
		
	me.listPreviousCases = function()
	{
		var tranlatedHeaderText = me.translationObj.getTranslatedValueByKey( "previousCases_headerTitle" );
	
		me.listDateTag.html( "" );
		var headerList = ["Date", "Name", "Result", "What else?", "Indexed?"];
		me.listCases( "../event/previousCases", headerList, "#cfe2f3", tranlatedHeaderText, false, false, false );
	}
	
	me.listPositiveCases = function()
	{
		var tranlatedHeaderText = me.translationObj.getTranslatedValueByKey( "positiveCases_headerTitle" );
		
		me.listDateTag.html( "" );
		var headerList = ["Date", "Name", "What else?", "???", "Referral ART closed?"];
		me.listCases( "../event/positiveCases", headerList, "#cfe2f3", tranlatedHeaderText, false, true, false );
	}
	
	me.listCases = function( url, headerList, headerColor, headerText, isTime, isSpecialCase, showOrgUnitSelector )
	{
		var tranlatedText = me.translationObj.getTranslatedValueByKey( "common_msg_loadingData" );
		
		me.resetPageDisplay();
		MsgManager.appBlock( tranlatedText + " ..." );
		
		// STEP 0. Show the 'Add' button which can move to 'Search/Create Client' function
		
		if( showOrgUnitSelector ) 
		{
			me.registerClientBtnTag.show();
		}
		
		Commons.checkSession( function( isInSession ) 
		{
			if( isInSession ) 
			{
				$.ajax(
					{
						type: "POST"
						,url: url
						,dataType: "json"
			            ,contentType: "application/json;charset=utf-8"
						,success: function( response ) 
						{
							var tableTag = $("<table class='table table-hover table-striped listTable tablesorter'></table>");
							me.contentListTag.append(tableTag);
							
							// STEP 1. Display div header
							
							me.headerListTag.html( headerText );						
							
							// STEP 2. Generate headers
							
							// TODO : Need to translate header
							var rowTag = $("<tr style='background-color:" + headerColor + "'></tr>" );	
							for( var i=0; i<headerList.length; i++ )
							{
								rowTag.append( "<th>" + headerList[i] + "</th>" );
							}
							
							var theadTag = $("<thead></thead>");
							theadTag.append(rowTag);
							tableTag.append( theadTag );
							

							// STEP 3. Populate data

							if( !isSpecialCase ){
								me.populateAllCaseData( response.rows, tableTag, isTime );
							}
							else {
								me.populatePositiveCaseData( response.rows, tableTag, isTime );
							}

							// STEP 4. Show table
							
							MsgManager.appUnblock();
							me.contentListTag.show();
							me.clientListTag.show("fast");
						}
						,error: function(response)
						{
							console.log(response);
						}
					});
			} 
			else {
				me.showExpireSessionMessage();					
			}
		});	
		
	};
	
	me.populateAllCaseData = function( list, tableTag, isTime )
	{
		if( list.length > 0 )
		{
			var tbodyTag = $("<tbody></tbody>");
			for( var i in list )
			{
				var event = list[i];	
				var eventDate = event[0];
				var fullName = event[1] + " " + event[2];
				var deResult1 = event[3];
				
				eventDate = ( eventDate !== undefined ) ? eventDate : "";
				if( isTime && eventDate !== "" )
				{
					eventDate = Util.formatTimeInDateTime( eventDate );
				}
				else if( !isTime && eventDate !== "" )
				{
					eventDate = Util.formatDate_DisplayDate( eventDate );
				}
			
				
				var rowTag = $("<tr></tr>");							
				rowTag.append( "<td>" + eventDate + "</td>" );
				rowTag.append( "<td>" + fullName + "</td>" );
				rowTag.append( "<td>" + deResult1 + "</td>" );
				rowTag.append( "<td></td>" );
				rowTag.append( "<td></td>" );
				
				tbodyTag.append( rowTag );
			}
			
			tableTag.append( tbodyTag );
		}
	}
	
	me.populatePositiveCaseData = function( list, tableTag, isTime )
	{
		if( list.length > 0 )
		{
			var tbodyTag = $("<tbody></tbody>");
			for( var i in list )
			{
				var event = list[i];	
				var eventDate = event[0];
				var fullName = event[1] + " " + event[2];
				var deARTVal = event[3];
				deARTVal = ( deARTVal !== "" ) ? "[None]" : deARTVal;
				
				
				eventDate = ( eventDate !== undefined ) ? eventDate : "";
				if( isTime && eventDate !== "" )
				{
					eventDate = Util.formatTimeInDateTime( eventDate );
				}
				else if( !isTime && eventDate !== "" )
				{
					eventDate = Util.formatDate_DisplayDate( eventDate );
				}
			
				
				var rowTag = $("<tr></tr>");							
				rowTag.append( "<td>" + eventDate + "</td>" );
				rowTag.append( "<td>" + fullName + "</td>" );
				rowTag.append( "<td></td>" );
				rowTag.append( "<td></td>" );
				rowTag.append( "<td></td>" );
				
				tbodyTag.append( rowTag );
			}
			tableTag.append( tbodyTag );
			
		}
	};
	
	// -------------------------------------------------------------------
	// Search Client
	// -------------------------------------------------------------------
	
	me.searchClients = function(event)
	{
		event.preventDefault();
		
		Commons.checkSession( function( isInSession ) {
			if ( isInSession ) {
				var clientData = me.getArrayJsonData( "attribute",  me.searchClientFormTag );
				var requestData = {
						"attributes": clientData
				};
				
				if( requestData.attributes.length > 0 )
				{
					MsgManager.appBlock( "Searching ..." );
					me.searchResultTbTag.find("tbody").html("");
					$.ajax(
						{
							type: "POST"
							,url: "../client/search"
							,dataType: "json"
							,data: JSON.stringify( requestData )
				            ,contentType: "application/json;charset=utf-8"
							,success: function( response ) 
							{
								var searchCriteria = me.getSearchCriteria( me.searchClientFormTag );
								me.searchResultKeyTag.html( searchCriteria );
								
								var clientList = response.trackedEntityInstances;
								
								if( clientList.length > 0 )
								{
									me.populateSearchClientData( clientList );
									me.showSearchClientTableResult();
								}
								else
								{
									me.showSearchClientNoResult();
								}
								MsgManager.appUnblock();
							}
							,error: function(response)
							{
								alert(response);
								console.log(response);
							}
						});
					
				}
				else if( requestData.attributes.length == 0 )
				{
					var tranlatedText = me.translationObj.getTranslatedValueByKey( "searchClient_validation_requiredValueInOneField" );
					
					MsgManager.msgAreaShow( tranlatedText, "ERROR" );
				}
			} else {
				me.showExpireSessionMessage();					
			}
		});
		
		
	};
	
	me.populateSearchClientData = function( clientList )
	{
		var tranlatedText = me.translationObj.getTranslatedValueByKey( "searchClient_result_rowTooltip" );
		
		for( var i in clientList )
		{
			var firstName = "";
			var lastName = "";
			var dob = "";
			var district = "";
			var twin = "";
			var adquisition = "";
			var lastTestNS = "";
			var lastContact = "";
			
			var attrValues = clientList[i].attributes;
			for( var j in attrValues )
			{
				var attrValue = attrValues[j];
				
				if( attrValue.attribute === me.attr_FirstName ){
					firstName = attrValue.value;
				}
				else if( attrValue.attribute === me.attr_LastName ){
					lastName = attrValue.value;
				}
				else if( attrValue.attribute === me.attr_DoB ){
					dob = attrValue.value;
					if( dob !== "" )
					{
						dob = Util.formatDate_DisplayDate(dob);
					}
				}
				else if( attrValue.attribute === me.attr_DistrictOB ){
					district = attrValue.value;
				}
				else if( attrValue.attribute === me.attr_Twin ){
					twin = attrValue.value;
					if( twin !== "" )
					{
						twin = ( twin === "true" ) ? "Yes" : "No";
					}
				}
				else if( attrValue.attribute === me.attr_Adquisition ){
					adquisition = attrValue.value;
				}
				else if( attrValue.attribute === me.attr_Last_TestNS ){
					lastTestNS = attrValue.value;
				}
				else if( attrValue.attribute === me.attr_LastContact ){
					lastContact = attrValue.value;
				}
			}
			
			var rowTag = $("<tr title='" + tranlatedText + "' clientId='" + clientList[i].trackedEntityInstance + "'></tr>");
			rowTag.append( "<td>" + firstName + "</td>" );
			rowTag.append( "<td>" + lastName + "</td>" );
			rowTag.append( "<td>" + dob + "</td>" );
			rowTag.append( "<td>" + district + "</td>" );
			rowTag.append( "<td>" + twin + "</td>" );
			rowTag.append( "<td>" + adquisition + "</td>" );
			rowTag.append( "<td>" + lastTestNS + "</td>" );
			rowTag.append( "<td>" + lastContact + "</td>" );
			
			
			// -------------------------------------------------------------------
			// Add Click-event for row
			// -------------------------------------------------------------------

			me.addEventForSearchResultRow( rowTag );
			
			me.searchResultTbTag.find("tbody").append( rowTag );
		}
		
	};
	
	// Add 'Click' event for each row in search result
	
	me.addEventForSearchResultRow = function( rowTag )
	{
		rowTag.click(function(){
			me.loadClientDetails( rowTag.attr("clientId") );
		});	
	};
	
	
	// Load Client details when a row in search result is clicked
	
	me.loadClientDetails = function( clientId ){

		Commons.checkSession( function( isInSession ) {
			if ( isInSession ) {

				var tranlatedText = me.translationObj.getTranslatedValueByKey( "searchClient_result_loadingClientDetails" );
				
				MsgManager.appBlock( tranlatedText + " ..." );
				
				$.ajax(
					{
						type: "POST"
						,url: "../client/details?clientId=" + clientId
			            ,contentType: "application/json;charset=utf-8"
						,success: function( response ) 
						{
							var eventJson = response.events;					
							me.showUpdateClientForm( response );
							MsgManager.appUnblock();
						}
						,error: function(response)
						{
							console.log(response);
						}
					});
			} else {
				me.showExpireSessionMessage();					
			}
		});
		
	};
	
	
	// -------------------------------------------------------------------
	// Add/Update Client
	// -------------------------------------------------------------------

	me.saveClient = function()
	{
		Commons.checkSession( function( isInSession ) {
			if ( isInSession ) {
				MsgManager.msgAreaHide();
				
				if( me.validationObj.checkFormEntryTagsData(me.addClientFormTabTag) )
				{
					var tranlatedText = me.translationObj.getTranslatedValueByKey( "clientEntryForm_msg_savingClient" );
					
					MsgManager.appBlock( tranlatedText + " ..." );
					
					// STEP 1. Get client & event JSON data from attribute of the tab
					
					var attributeData = me.getArrayJsonData( "attribute", me.addClientFormTag );
					
					var clientData = me.addClientFormTabTag.attr( "client" );
					if( clientData !== undefined ) {
						clientData = JSON.parse( clientData );
						clientData.attributes = attributeData;			
					}
					else
					{
						clientData = { "attributes": attributeData };
					}
					
					// STEP 2. Add client
					var clientId = me.addClientFormTabTag.attr("clientId");
					
					var url ="../client/save?ouId=" + me.orgUnitListTag.val();
					if( clientId !== undefined )
					{
						url += "&clientId=" + clientId;
					}
					
					$.ajax(
						{
							type: "POST"
							,url: url
							,dataType: "json"
							,data: JSON.stringify( clientData )
				            ,contentType: "application/json;charset=utf-8"
							,success: function( response ) 
							{
								// STEP 3. Set the clientId as attribute for the form. 
								
								var clientId = response.trackedEntityInstance;
								me.addClientFormTabTag.attr( "clientId", clientId );
								me.addClientFormTabTag.attr( "client", JSON.stringify( response ) );
								
								// STEP 4. Change the header of the form && and show the 'Add Event' button
								
								var tranlatedText = me.translationObj.getTranslatedValueByKey( "clientEntryForm_editForm_headerTitle" );
								me.addClientFormDivTag.find(".headerList").html(tranlatedText);
								
								Util.disableTag( me.completedEventBtnTag, true );
								
								// STEP 5. Create an empty event
								
								me.addEventClickHandle(function(){
									
									// STEP 6. Unblock form
									
									tranlatedText = me.translationObj.getTranslatedValueByKey( "clientEntryForm_msg_clientSaved" );
									MsgManager.msgAreaShow( tranlatedText, "SUCCESS" );						
									MsgManager.appUnblock();
								});
								
								
							}
							,error: function(response)
							{
								var tranlatedText = me.translationObj.getTranslatedValueByKey( "clientEntryForm_msg_saveDataFail" );
								MsgManager.msgAreaShow( tranlatedText, "ERROR" );
								MsgManager.appUnblock();
							}
						});
				}
				else
				{
					var tranlatedText = me.translationObj.getTranslatedValueByKey( "clientEntryForm_validation_checkErrorFields" );
					
					MsgManager.msgAreaShow( tranlatedText, "ERROR" );	
					MsgManager.appUnblock();
				}
			} else {
				me.showExpireSessionMessage();					
			}
		});
		
	};
	
	me.saveEvent = function( jsonData, clientId, eventId, exeFunc )
	{
		Commons.checkSession( function( isInSession ) {
			if ( isInSession ) {
				
				if( me.validationObj.checkFormEntryTagsData(me.thisTestDivTag) )
				{
					
					var tranlatedText = me.translationObj.getTranslatedValueByKey( "clientEntryForm_msg_savingEvent" );
					
					MsgManager.appBlock( tranlatedText + " ..." );
					
					var url = "../event/save?ouId=" + me.orgUnitListTag.val();
					
					if( clientId !== undefined )
					{
						url += "&clientId=" + clientId;
					}
					
					if( eventId !== undefined )
					{
						url += "&eventId=" + eventId;
					}
					
					jsonData.dataValues = me.getArrayJsonData( "dataElement", me.thisTestDivTag )
					
					$.ajax(
						{
							type: "POST"
							,url: url
							,dataType: "json"
							,data: JSON.stringify( jsonData )
				            ,contentType: "application/json;charset=utf-8"
							,success: function( response ) 
							{
								var eventId = response.event;
								me.addClientFormTabTag.attr( "eventId", eventId );
								me.addClientFormTabTag.attr( "event", JSON.stringify( response ) );
	
								Util.disableTag( me.completedEventBtnTag, false );
								
								if( exeFunc !== undefined ) exeFunc();
								
								// STEP 4. Unblock form
								tranlatedText = me.translationObj.getTranslatedValueByKey( "clientEntryForm_msg_eventSaved" );
								
								MsgManager.msgAreaShow( tranlatedText, "SUCCESS" );
								MsgManager.appUnblock();
							}
							,error: function( response )
							{
								var tranlatedText = me.translationObj.getTranslatedValueByKey( "clientEntryForm_msg_saveDataFail" );
								MsgManager.msgAreaShow( tranlatedText, "ERROR" );
								MsgManager.appUnblock();
							}
						});
				} else {
					me.showExpireSessionMessage();					
				}
			}
		});
		
	}
	
	me.addEventClickHandle = function( exeFunc )
	{
		// STEP 1. Check if the form has any event which existed
		
		var eventId = me.addClientFormTabTag.attr( "eventId" );
		
		// STEP 2. If there is existing event, Update the status of editing event and move the event to "Previous test" tab
		if( eventId !== undefined )
		{
			var event = JSON.parse( me.addClientFormTabTag.attr( "event" ) );
			
			// -------------------------------------------------------------------
			// STEP 2. Add the event data to "Previous test" tab
			// -------------------------------------------------------------------
			
			tranlatedText = me.translationObj.getTranslatedValueByKey( "dataEntryForm_tab_previousTests_msg_headerTitle" );			
			var headerTag = $("<tr header='true' eventId='" + eventId + "' style='cursor:pointer;'></tr>");
			headerTag.append("<th colspan='2' ><img style='float:left' class='arrowRightImg' src='../images/tab_right.png'> " + tranlatedText + " " + Util.formatDate_DisplayDateTine( event.eventDate ) + "</th>");
			
			
			// STEP 2.1. Create tbody to display data values of an event
			
			var tbody = me.createSectionEmtyTable( eventId );
			// tbody.append( "<tr><td style='border:0px;'></td></tr>" );
			tbody.prepend( headerTag );
			me.previousTestsTag.find("table").prepend( tbody );
			
			// STEP 2.2. Populate data in tbody
			
			var dataValues = event.dataValues;
			for( var j in dataValues )
			{
				var dataValue = dataValues[j];
				var value = dataValue.value;
				if( value === "true" )
				{
					value = "Yes";
				}
				else if( value === "false" )
				{
					value = "No";
				}
				tbody.find("td[dataElement='" + dataValue.dataElement + "']").html( value );
			}
			
			// STEP 2.3. Add event for Header row
			
			me.setUp_PreviousTestHeaderEvent( headerTag, me.previousTestsTag.find("table") );
			
			
			// -------------------------------------------------------------------
			// STEP 3. Update status of event from "ACTIVE" to "COMPLETED"
			// -------------------------------------------------------------------
			
			// Update status of event
			
			event.status = "COMPLETED";		
			me.saveEvent( event, undefined, eventId, function(){
				Util.disableTag( me.completedEventBtnTag, true );
				
				// Empty fields from "This Test" tab
				me.thisTestDivTag.find("input,select").val("");
				
				if( exeFunc !== undefined ) exeFunc();
			} );
			
		}
		else
		{
			MsgManager.appUnblock();
		}
		

		// Show 'Save' event button AND show "This test" form
		me.saveEventBtnTag.show();
		me.showTabInClientForm( me.TAB_NAME_PREVIOUS_TEST );
		me.showTabInClientForm( me.TAB_NAME_THIS_TEST );
	};
	
	
	// -------------------------------------------------------------------
	// Show / Hide forms
	// -------------------------------------------------------------------
	
	me.showOrgUnitWarningMsg = function()
	{
		if( me.orgUnitListTag.val() === "" )
		{
			me.selectOrgUnitWarningMsgTag.show();
			Util.disableTag( me.saveClientBtnTag, true );
			Util.disableTag( me.updateClientBtnTag, true );
			Util.disableTag( me.saveEventBtnTag, true );
			Util.disableTag( me.completedEventBtnTag, true );
		}
		else
		{
			me.selectOrgUnitWarningMsgTag.hide();
			Util.disableTag( me.saveClientBtnTag, false );
			Util.disableTag( me.updateClientBtnTag, false );
			Util.disableTag( me.saveEventBtnTag, false );
			Util.disableTag( me.completedEventBtnTag, false );
		}
	};
	
	me.resetPageDisplay = function()
	{
		me.contentListTag.html("");
		me.mainContentTags.hide();
	};
	
	me.showSearchClientForm = function()
	{	
		me.searchResultTag.find("span.labelOpt").css("font-size","");		
		me.searchClientFormTag.show("fast");
	};
	
	me.resetSearchClientForm = function()
	{
		me.searchResultTag.find("span.labelOpt").css("font-size","");
		me.searchResultTag.find("input:radio:checked").attr("checked", false );
		me.searchClientFormTag.find("input,select").val("");
	};
	
	me.showSearchClientTableResult = function()
	{
		me.searchClientFormTag.hide();
		
		me.searchResultTbTag.css( "cursor", "pointer" );
		me.searchResultOptionsTag.html("Select a client from from above or");

		me.searchResultTbTag.show();
		me.searchResultTag.show("fast");
	};
	
	me.showAddClientForm = function()
	{
		me.resetPageDisplay();
		me.showOrgUnitWarningMsg();
		me.addClientFormTabTag.removeAttr( "clientId" );
		me.addClientFormTabTag.removeAttr( "client" );
		me.addClientFormTabTag.removeAttr( "eventId" );
		me.addClientFormTabTag.removeAttr( "event" );
		me.previousTestsTag.find("table").html("");
		me.resetClientEntryForm();

		var tranlatedText = me.translationObj.getTranslatedValueByKey( "dataEntryForm_headerTitle_addClient" );
		me.addClientFormDivTag.find(".headerList").html(tranlatedText);
		
		me.addEventFormTag.find("input,select").val("");
		me.addClientFormDivTag.find( "span.errorMsg" ).remove();
		
		me.seachAddClientFormTag.find("input[attribute],select[attribute]").each(function(){
			var attrId = $(this).attr("attribute");
			var value = $(this).val();
			me.addClientFormTag.find("input[attribute='" + attrId + "'],select[attribute='" + attrId + "']").val( value );
		});
		
		me.addClientFormTabTag.tabs("option", "selected", 0);
		
		me.hideTabInClientForm( me.TAB_NAME_PREVIOUS_TEST );
		me.hideTabInClientForm( me.TAB_NAME_THIS_TEST );
		me.addClientFormDivTag.show("fast");
		
	};
	
	me.showUpdateClientForm = function( data )
	{
		var tranlatedText = me.translationObj.getTranslatedValueByKey( "dataEntryForm_headerTitle_editClient" );		

		me.addClientFormDivTag.find(".headerList").html( tranlatedText );
		me.addClientFormDivTag.find( "span.errorMsg" ).remove();
		
		me.showOrgUnitWarningMsg();	
		me.addClientFormTabTag.removeAttr( "clientId" );
		me.addClientFormTabTag.removeAttr( "client" );
		me.addClientFormTabTag.removeAttr( "eventId" );
		me.addClientFormTabTag.removeAttr( "event" );
		me.resetClientEntryForm();

		me.contentListTag.hide();
		me.searchResultTbTag.hide();
		me.searchResultTag.hide();

		me.searchClientFormTag.hide();
	
		// ---------------------------------------------------------------------------------------
		// STEP 1. Populate Client data
		// ---------------------------------------------------------------------------------------
		
		var clientDetails = data.client.attributes;
		me.addClientFormTag.find("input[attribute],select[attribute]").each(function(){
			var attrId = $(this).attr("attribute");
			var value = "";
			for( var i in clientDetails )
			{
				var dataId = clientDetails[i].attribute;
				if( dataId == attrId )
				{
					value = clientDetails[i].value;
				}
			}
			
			var inputTag = me.addClientFormTag.find("input[attribute='" + attrId + "'],select[attribute='" + attrId + "']");
			if( inputTag.attr("isDate") === "true" && value != "" )
			{
				value = Util.formatDate_DisplayDate( value );
			}
			
			me.addClientFormTag.find("input[attribute='" + attrId + "'],select[attribute='" + attrId + "']").val( value );
		});
		
		// ---------------------------------------------------------------------------------------
		// STEP 2. Populate Event data in "Previous Test" and find out the activeEvent if any
		// ---------------------------------------------------------------------------------------
		
		var activeEvent;
		
		var events = data.events.events;
		var report = me.previousTestsTag.find("table")
		report.html("");
		me.addEventFormTag.find("input,select").val("");
		
		
		for( var i=0; i<events.length; i++ )
		{
			var event = events[i];
			if( event.status == "ACTIVE" )
			{
				activeEvent = event;
			}
			
			else
			{
				var dataValues = event.dataValues;
				var eventId = event.event;
				
				// STEP 2.1. Create header for one event
				
				tranlatedText = me.translationObj.getTranslatedValueByKey( "dataEntryForm_tab_previousTests_msg_headerTitle" );				
				var headerTag = $("<tr header='true' eventId='" + eventId + "' style='cursor:pointer;'></tr>");
				headerTag.append("<th colspan='2' ><img style='float:left' class='arrowRightImg' src='../images/tab_right.png'> " + tranlatedText + " " + Util.formatDate_DisplayDateTine( event.eventDate ) + "</th>");
				
				
				// STEP 2.2. Create tbody to display data values of an event
	
				
				var tbody = me.createSectionEmtyTable( eventId );
				tbody.prepend( headerTag );
				report.append( tbody );
				
				// STEP 2.3. Populate data in tbody
				
				for( var j in dataValues )
				{
					var dataValue = dataValues[j];
					var value = dataValue.value;
					if( value == "true" ) {
						value = "Yes";
					}
					else if( value == "false" )
					{
						value = "No";
					}
					tbody.find("td[dataElement='" + dataValue.dataElement + "']").html( value );
				}
				
				// STEP 2.4. Add event for Header row
				
				me.setUp_PreviousTestHeaderEvent( headerTag, report );
			}
		}
	

		// STEP 3. Show the first table in report if any

//		me.previousTestsTag.append( report );
		if( report.find("tbody").length > 0 )
		{
			report.find('tbody:first tr[eventId]').click();
			me.showTabInClientForm( me.TAB_NAME_PREVIOUS_TEST );
		}
		else
		{
			me.hideTabInClientForm( me.TAB_NAME_PREVIOUS_TEST );
		}
		
		
		
		// ---------------------------------------------------------------------------------------
		// STEP 4. Populate activeEvent as attribute for the 'This test' form
		// ---------------------------------------------------------------------------------------
		
		if( activeEvent !== undefined )
		{
			me.showTabInClientForm( me.TAB_NAME_THIS_TEST );
			var eventId = activeEvent.event;
			me.addClientFormTabTag.attr( "eventId", eventId );			
			me.addClientFormTabTag.attr( "event", JSON.stringify( activeEvent ) );
			
			me.addEventFormTag.find("input,select").val("");
			
			for( var i in activeEvent.dataValues )
			{
				var dataValue = activeEvent.dataValues[i];
				me.addEventFormTag.find("[dataElement='" + dataValue.dataElement + "']").val( dataValue.value );
			}
			
			if( activeEvent.dataValues.length == 0 ){
				Util.disableTag( me.completedEventBtnTag, true );
			}
			else{
				Util.disableTag( me.completedEventBtnTag, false );
			}
				
		}
		else
		{
			Util.disableTag( me.completedEventBtnTag, true );
		}

		

		// ---------------------------------------------------------------------------------------
		// STEP 4. Populate clientId as attribute for the form
		// ---------------------------------------------------------------------------------------
		
		var clientId = data.client.trackedEntityInstance;
		me.addClientFormTabTag.attr( "clientId", clientId );
		me.addClientFormTabTag.attr( "client", JSON.stringify( data.client ) );

		// ---------------------------------------------------------------------------------------
		// STEP 5. Show form
		// ---------------------------------------------------------------------------------------

		me.showTabInClientForm( me.TAB_NAME_THIS_TEST );
		me.addClientFormTabTag.tabs("option", "selected", 0);
		me.addClientFormDivTag.show("fast");
		
	};

	
	// Create a tbody with sections of programs. This one is used for generating history of events of a client
	
	me.createSectionEmtyTable = function( eventId )
	{
		var tbody = $("<tbody eventId='" + eventId + "'></tbody>");
		
		for( var i in me.sectionList )
		{
			rowTag = $("<tr style='display:none;'></tr>");
			rowTag.append("<td colspan='2' style='font-weight:bold'>" + me.sectionList[i].displayName + "</td>");
			tbody.append( rowTag );
			
			var deList = me.sectionList[i].programStageDataElements;
			for( var l in deList)
			{
				var de = deList[l].dataElement;
				rowTag = $("<tr style='display:none;'></tr>");
				rowTag.append("<td>" + de.formName + "</td>");
				rowTag.append("<td dataElement='" + de.id +"'></td>");
				tbody.append( rowTag );
				
			} // END DE List
			
		}// END Sections
		
		return tbody;
	}
	
	// Show / Hide an event in history of a client
	
	me.setUp_PreviousTestHeaderEvent = function( headerTag, report )
	{
		headerTag.click(function(){
			
			// STEP 1. Display table of selected header
			
			var imgTag = $(this).find("img");
			var eventId = $(this).attr("eventId");
			var tbodyTag = report.find("tbody[eventId='" + eventId + "']");
			var closed = imgTag.hasClass("arrowRightImg");
			
			// STEP 2. Hide all event data, not hide headers
			
			report.find("tr:not([header])").hide();
			
			var allHeaderTags = report.find("tbody tr[header]");
			allHeaderTags.find("img").attr( "src", "../images/tab_right.png" );
			imgTag.removeClass('arrowDownImg');
			imgTag.addClass('arrowRightImg');
			
			// STEP 3. Open the selected event
			
			if( closed )
			{
				imgTag.removeClass('arrowRightImg');
				imgTag.addClass('arrowDownImg');
				imgTag.attr( "src", "../images/down.gif" );
				tbodyTag.find("tr").show("fast");
			}
			else
			{
				tbodyTag.find("tr:not([header])").hide("fast");
			}
			
		});

	};
	
	// Show the result after searching clients
	
	me.showSearchClientNoResult = function()
	{
		me.searchClientFormTag.hide();
		me.searchResultTbTag.hide();
		
		var tranlatedText = me.translationObj.getTranslatedValueByKey( "searchClient_result_noClientFound" );		
		me.searchResultOptionsTag.html( tranlatedText );
		
		me.searchResultTag.show("fast");
	};
	
	// Generate JSON data in client form / event form
	
	me.getArrayJsonData = function( key, formTag )
	{
		var jsonData = [];
		formTag.find("input,select").each(function(){
			var item = $(this);
			var attrId = item.attr(key);
			var value = item.val();
			if( value !== "" )
			{
				if( item.attr("isDate") !== undefined && item.attr("isDate") == "true" )
				{
					value = Util.formatDate_DbDate( value );
				}

				var data = {};
				data[key] = attrId;
				data["value"] = value;
				
				jsonData.push(data);
			}		
		});
		
		return jsonData;
	};
	
	// Generate a message based on Client search criteria
	
	me.getSearchCriteria = function( formTag )
	{
		var searchCriteria = "";
		
		formTag.find("input,select").each( function(){
			var item = $(this);
			if( item.val() != "" )
			{
				var text = $(this).closest("div.form-group").find("label").html();
				searchCriteria += "'" + text + "' as '" + item.val() + "', ";
			}
		});
		
		var translatedText = me.translationObj.getTranslatedValueByKey( "searchResult_msg_searchCriteriaClientWith" );
		
		return ( searchCriteria.length > 0 ) ? translatedText + " " + searchCriteria.substring( 0, searchCriteria.length - 2 ) : "";
	}
	

	me.getDeField = function( deId )
	{
		return me.thisTestDivTag.find("[dataelement='" + deId + "']");
	};
	
	me.getAttrField = function( attrId )
	{
		return me.addClientFormTabTag.find("[attribute='" + attrId + "']");
	};
	
	// Generate 'Client CUIC' value
	
	me.generateClientCUIC = function()
	{
		var clientCUIC = "";
		
		// Year(YY) Month(MM) DistrictOfBirth(DB) FirstName(2 Chars) LastName(2 Chars) BirthOrder(2 Chars)
		
		var dateOfBirth = me.addClientFormTabTag.find("[attribute='wSp6Q7QDMsk']").val();
		var districtOfBirth = me.addClientFormTabTag.find("[attribute='u57uh7lHwF8']").val();
		var firstName = me.addClientFormTabTag.find("[attribute='mW2l3T2zL0N']").val();
		var lastName = me.addClientFormTabTag.find("[attribute='mUxDHgywnn2']").val();
		var birthOrder = me.addClientFormTabTag.find("[attribute='vTPYC9BXPNn']").val();
		
		if( dateOfBirth != "" && districtOfBirth != "" &&  firstName != "" && lastName != "" && birthOrder != "" )
		{
			var birthOrder = ( eval(birthOrder) < 10 ) ? "0" + birthOrder : birthOrder;
			clientCUIC = dateOfBirth.substring(9, 12) + Util.MONTH_INDEXES[dateOfBirth.substring(3, 6)] + firstName.substring(0, 2).toUpperCase() + lastName.substring(0, 2).toUpperCase() + birthOrder;
		}
		
		me.addClientFormTag.find("input[attribute='" + me.attr_ClientCUIC + "']").val( clientCUIC );
	};
	
	// Show/Hide a tab in Add/Update Client form
	
	me.hideTabInClientForm = function( tabName )
	{
		me.addClientFormTabTag.find("a[href='#" + tabName + "']").closest("li").hide();
		me.addClientFormTabTag.find('#' + tabName).hide();
	}
	
	me.showTabInClientForm = function( tabName )
	{
		var tabHeader = me.addClientFormTabTag.find("a[href='#" + tabName + "']").closest("li");
		tabHeader.show();
		me.addClientFormTabTag.find('#' + tabName).show();
		
		var index = tabHeader.index();
		me.addClientFormTabTag.tabs('select', index);
	}
	

	me.showExpireSessionMessage = function()
	{
		me.menuIcon.hide(); 
		me.headerRightSideControlsTag.hide();
		MsgManager.appUnblock();
		
		var sessionExpiredText = me.translationObj.getTranslatedValueByKey( "session_msg_expired" );
		var loginAgainText = me.translationObj.getTranslatedValueByKey( "session_msg_loginAgain" );
		var hereText = me.translationObj.getTranslatedValueByKey( "session_msg_here" ); 
		var sessionExpiredText = me.divSessionExpireMsgTag.show().html( sessionExpiredText + ". " + loginAgainText + " <a style=\"cursor:pointer;\" onclick='window.location.href=\"../index.html\"'>" + hereText + "</a>.");
	};
	
	// -------------------------------------------------------------------
	// RUN Init method
	// -------------------------------------------------------------------
	
	me.init();
	
}

