
// ---------------------------------------------------------------------------------------- 
// CLEARABLE INPUT
// ----------------------------------------------------------------------------------------

/**
 * @param storageObj
 * @param translationObj
 */

function Counsellor( storageObj, translationObj )
{
	var me = this;
	me.storageObj = storageObj;
	me.translationObj = translationObj;
	me.validationObj;
	
	me.dateFormat = "dd M yy";
	me.dateTimeFormat = "YYYY-MM-DD HH:mm";
	
	me.todayCaseLinkTag = $("#todayCaseLink");
	me.previousCaseLinkTag = $("#previousCaseLink");
	me.positiveCaseLinkTag = $("#positiveCaseLink");
	me.searchClientLinkTag = $("#searchClientLink");
	me.aboutLinkTag = $("#aboutLink");
	me.settingsLinkTag = $("#settingsLink");
	me.consumablesLinkTag = $("#consumablesLink");
	me.reportLinkTag = $("#reportLink");
	
	
	// [APP Header]
	me.headerOrgUnitTag = $("#headerOrgUnit");
	me.headerSettingsLinkTag = $("#headerSettingsLink");
	
	
	// Today cases
	me.todayCaseListTag = $("#todayCaseList");
	me.todayCaseTblTag = $("#todayCaseTbl");
	me.listDateTag = $("#listDate");
	me.registerClientBtnTag = $("#registerClientBtn");
	me.todayCaseFooterTag = $("#todayCaseFooter");
	me.todayCaseNumberTag = $("#todayCaseNumber");
	
	
	// Previous cases
	me.previousCaseListTag = $("#previousCaseList");
	me.previousCaseTblTag = $("#previousCaseTbl");
	me.previousCaseFooterTag = $("#previousCaseFooter");
	me.previousCaseNumberTag = $("#previousCaseNumber");
	
	
	// Positive cases
	me.positiveCaseListTag = $("#positiveCaseList");
	me.positiveCaseTblTag = $("#positiveCaseTbl");
	me.positiveCaseFooterTag = $("#positiveCaseFooter");
	me.positiveCaseNumberTag = $("#positiveCaseNumber");
	
	
	// Search Form	
	me.searchClientFormTag = $("#searchClientForm");
	me.searchClientBtnTag = $("#searchClientBtn");
	me.searchResultTag = $("#searchResult");
	me.searchResultTbTag = $("#searchResultTb");
	me.searchResultKeyTag = $("#searchResultKey");
	me.searchMatchResultKeyTag = $("#searchMatchResultKey");
	me.searchResultOptionsTag = $("#searchResultOptions");
	me.seachAddClientFormTag = $("#seachAddClientForm");
	me.backToSearchClientResultBtnTag = $("[name=backToSearchClientResultBtn]");
	me.searchResultHeaderTag = $("#searchResultHeader");
	me.showAddNewClientFormTag = $("#showAddNewClientForm");
	me.backToSearchClientFormTag = $("#backToSearchClientForm");
	me.showTodayCaseTag = $("#showTodayCase");
	
	
	// [Add/Update Client] form	
	me.addNewClientBtnTag = $("#addNewClientBtn");
	me.addClientFormTabTag = $("#addClientFormTab");
	me.addClientFormDivTag = $("#addClientFormDiv");
	me.clientAttributeDivTag = $("#clientAttributeDiv");
	me.addClientFormTag = $("#addClientForm");
	me.saveClientBtnTag = $("#saveClientBtn");
	me.selectOrgUnitWarningMsgTag = $("#selectOrgUnitWarningMsg");
	me.moveToSettingLinkTag = $("#moveToSettingLink");
	me.backToCaseListBtnTag = $("[name='backToCaseListBtn']");

	
	// [Data Entry] form
	me.addEventFormTag = $("#addEventForm");
	me.previousTestsTag = $("#previousTests");
	me.thisTestDivTag = $("#thisTestDiv");
	me.saveEventBtnTag = $("#saveEventBtn");
	me.completedEventBtnTag = $("#completedEventBtn");	
	me.updateClientBtnTag = $("[name='updateClientBtn']");
	me.hideHIVTestLogicActionTag = $("#hideHIVTestLogicAction");
	
	
	// [Consumables]
	me.consumablesDivTag = $("#consumablesDiv");
	
	
	// [Report]
	me.reportParamDivTag = $("#reportParamDiv");
	me.reportTblTag = $("#reportTbl");
	me.analyticTimeTag = $("#analyticTime");
	
	
	// [Settings]
	me.settingsDivTag = $("#settingsDiv");
	me.districtListTag =  $("#districtList");
	me.orgUnitListTag =  $("#orgUnitList");
	me.loadingOuListImgTag = $("#loadingOuListImg");
	me.updateTransBtnTag = $("#updateTransBtn");

	
	// [About]
	me.userFullNameTag = $("[name='userFullName']");
	me.dhisServerTag = $("#dhisServer");
	me.aboutDivTag = $("#aboutDiv");
	me.versionTag = $("#version");
	me.versionTag = $("#version");
	me.versionDateTag = $("#versionDate");
	
	// [Common]
	me.divSessionExpireMsgTag =  $( "#divSessionExpireMsg" );
	me.menuIcon = $("button.hamburger");
	me.headerRightSideControlsTag = $("div.headerRightSideControls");
	me.mainContentTags = $("div.mainContent");
	
	
	// [Attribute Ids]
	me.attr_FirstName = "mW2l3T2zL0N";
	me.attr_LastName = "mUxDHgywnn2";
	me.attr_DoB = "wSp6Q7QDMsk";
	me.attr_DistrictOB = "u57uh7lHwF8";
	me.attr_ClientCUIC = "zRA08XEYiSF";
	me.attr_BirthOrder ="vTPYC9BXPNn";
	me.attr_Adquisition = "";
	me.attr_Last_TestNS = "";
	me.attr_LastContact = "";
	
	
	// [Data Element Ids]
	me.de_Testing_ResultTest1 = "choHDFxMCaU";
	me.de_Testing_ResultTest2 = "KDnhSz51HKS";
	me.de_Testing_ResultParallel1 = "rMh4ZGNzrh1";
	me.de_Testing_ResultParallel2 = "Bqff4skvt4d";
	me.de_Testing_ResultSDBioline = "M11JqgkJt2X";
	me.de_FinalResult_HIVStatus = "UuKat0HFjWS";
	
	
	//[Report]
	me.de_Tested = "I2oytRXksKN";
	me.de_Target = "rcVLQsClLUa";
	me.de_achieved = "sNS1PQ1YNXA";
	
	
	// Search INPUT fields
	me.searchDoBTag;
	me.searchDistrictOBTag;
	me.searchLastNameTag;
	me.searchFirstNameTag;
	
	
	// Data Element Logic fields
	me.resultTest1Tag;
	me.resultTest2Tag;
	me.resultTestParallel1Tag;
	me.resultTestParallel2Tag;
	me.resultTestResultSDBiolineTag;
	me.resultFinalHIVStatusTag;
	

	// [Client Form] Tab name
	me.TAB_NAME_CLIENT_ATTRIBUTE = "clientAttributeDiv";
	me.TAB_NAME_PREVIOUS_TEST = "previousTestDiv";
	me.TAB_NAME_THIS_TEST = "thisTestDiv";
	
	
	me.currentList = "";
	me.PAGE_TODAY_LIST = "todayList";
	me.PAGE_PREVIOUS_LIST = "previousList";
	me.PAGE_POSITIVE_LIST = "positiveList";
	me.PAGE_SEARCH_PARAM = "searchParam";
	me.PAGE_SEARCH_CLIENT_RESULT = "searchClientResult";
	me.PAGE_SEARCH_ADD_CLIENT = "searchAddClient";
	me.PAGE_SEARCH_EDIT_CLIENT = "searchEditClient";
	me.PAGE_COMSUMABLES = "Consumables";
	me.PAGE_REPORT_PARAM = "reportParam";
	me.PAGE_SETTINGS = "settings";
	me.PAGE_ABOUT = "about";
	
	
	me.userInfoLoaded = false;
	me.metadataLoaded = false;
	me.orgUnitListLoaded = false;
	
	
	me.sectionList = [];
	me.attributeGroupList = [];
	
	
	me.searchClientAttributeIds = [me.attr_DoB, me.attr_DistrictOB, me.attr_FirstName, me.attr_LastName, me.attr_BirthOrder];

	
	// -------------------------------------------------------------------
	// Init methods
	// -------------------------------------------------------------------
	
	me.init = function()
	{		
		MsgManager.initialSetup();		
		me.validationObj = new Validation( me.translationObj );
		
		me.setup_ButtonsOnBrowser();
		me.setupVersion();
		me.hideHIVTestLogicActionTag.val( me.storageObj.getItem( me.storageObj.KEY_STORAGE_HIDE_HIV_TEST_LOGIC_ACTION_FIELDS ) );		
		me.loadInitData();
	};
	

	// ----------------------------------------------------------------------------
	// Load init data
	// ----------------------------------------------------------------------------
	
	me.setup_ButtonsOnBrowser = function()
	{
		window.onbeforeunload = function (e) {
		    var e = e || window.event;

		    var msg = me.translationObj.getTranslatedValueByKey( "common_msg_leavePage" );
			
		    // For IE and Firefox
		    if (e) {
		        e.returnValue = msg;
		    }

		    // For Safari / chrome
		    return msg;
		 };
	};
	
	me.setupVersion = function()
	{
		me.versionTag.text( Commons.VERSION );
		me.versionDateTag.text( Commons.VERSION_DATE );
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
	
	me.loadPageWithParam = function()
	{
		MsgManager.appUnblock();
		
		var page = me.storageObj.getItem( "page" );
		if( page == me.PAGE_TODAY_LIST )
		{
			me.listTodayCases(function(){
				me.loadSearchSubPage( me.todayCaseTblTag );
			});
		}
		else if( page == me.PAGE_PREVIOUS_LIST )
		{
			me.listPreviousCases(function(){
				me.loadSearchSubPage( me.previousCaseTblTag );
			});
		}
		else if( page == me.PAGE_POSITIVE_LIST )
		{
			me.listPositiveCases(function(){
				me.loadSearchSubPage( me.positiveCaseTblTag );
			});
		}
		else if( page == me.PAGE_SEARCH_PARAM )
		{
			me.showSearchClientForm();
		}
		else if( page == me.PAGE_SEARCH_CLIENT_RESULT )
		{
			me.loadSearchSubPage( me.searchResultTbTag );			
		}
		else if( page == me.PAGE_COMSUMABLES )
		{
			me.consumablesDivTag.show("fast");
		}
		else if( page == me.PAGE_REPORT_PARAM )
		{
			me.getReport();
		}
		else if( page == me.PAGE_SETTINGS )
		{
			me.settingsDivTag.show("fast");
		}
		else if( page == me.PAGE_ABOUT )
		{
			me.aboutDivTag.show("fast");
		}
		
	};
	
	me.loadSearchSubPage = function( tableTag )
	{
		var subPage = me.storageObj.getItem( "subPage" );
		if( subPage ==  me.PAGE_SEARCH_ADD_CLIENT || subPage == me.PAGE_SEARCH_EDIT_CLIENT )
		{
			// If [Client Form] was called from a list ( Today list, Previous list, Positive list ),
			// look for the row in table list with the clientId and eventId to call [Click] event of the row
			if( me.storageObj.getItem("param" ) == "" )
			{
				var clientId = me.storageObj.getItem( "clientId" );
				var eventId = me.storageObj.getItem( "eventId" );
				
				var rowTag = tableTag.find("table").find("tr[clientId='" + clientId + "'][eventId='" + eventId + "']");
				rowTag.click();
			}
			else
			{
				var clientSearch = JSON.parse( me.storageObj.getItem("param" ) ).attributes;
				
				// STEP 1. Populate data in "Search" form
				
				for( var i in clientSearch )
				{
					var attributeId = clientSearch[i].attribute;
					var value = clientSearch[i].value;
					var field = me.searchClientFormTag.find("[attribute='" + attributeId + "']");
	
					if( field.attr("isDate") == "true" )
					{
						value = Util.formatDate_LocalDisplayDate( value );
					}
					field.val(value);
				}
				
				// STEP 2. Search clients by criteria
				
				me.runSearchClients( function(){
	
					if( subPage ==  me.PAGE_SEARCH_EDIT_CLIENT )
					{
						var clientId = me.storageObj.getItem( "clientId" );
						var eventId = me.storageObj.getItem( "eventId" );
						
						// STEP 3.1. Show "Edit Client" form
						me.loadClientDetails( clientId, eventId );
					}
					else if( subPage ==  me.PAGE_SEARCH_ADD_CLIENT )
					{
						// STEP 3.2. Show "Add Client" form
						me.showAddClientForm();
					}
					
				});
			}
		}
	};
	
	
	// ----------------------------------------------------------------------------
	// Check if any Org Unit is selected. If no any Org Unit is selected, 
	// the show dialog to ask user go to Settings to select an orgunit
	// ----------------------------------------------------------------------------
	
	me.checkOrgunitSetting = function( exeFunc )
	{
		var orgUnit = me.orgUnitListTag.val();
		if( orgUnit == "" || orgUnit === null )
		{
			var translatedText = me.translationObj.getTranslatedValueByKey( "settings_msg_selectOrgUnit" );
			MsgManager.showDialogForm( translatedText );
		}
		else
		{
			exeFunc();
		}
		
	}
	
	// ----------------------------------------------------------------------------
	// Set up Events
	// ----------------------------------------------------------------------------
	
	me.setUp_Events = function()
	{	
		window.addEventListener('resize', me.setUp_FloatButton);
		
		me.setUp_Events_Menus();
		
		me.setUp_Events_SearchClientForm();
		
		me.setUp_Events_AddClientForm();

		me.setUp_Events_DataEntryForm();
		
		
		// ------------------------------------------------------------------
		// App Header event
		// ------------------------------------------------------------------
		
		me.headerSettingsLinkTag.click(function(){
			me.storageObj.addItem("page", me.PAGE_SETTINGS);
			me.resetPageDisplay();
			me.settingsDivTag.show("fast");
		});
		
		// ------------------------------------------------------------------
		// Settings form
		// ------------------------------------------------------------------
		
		me.districtListTag.change(function(){
			me.storageObj.addItem( me.storageObj.KEY_STORAGE_DISTRICT, me.districtListTag.val() );
			me.storageObj.removeItem( me.storageObj.KEY_STORAGE_ORGUNIT );
			if( me.districtListTag.val() != "" )
			{
				me.orgUnitSelectorChange();
			}
			else
			{
				me.orgUnitListTag.find("option").remove();
				me.storageObj.removeItem( me.storageObj.KEY_STORAGE_ORGUNIT );
			}
			
			me.populateOrgUnitNameInHeader();
		});
		
		me.orgUnitListTag.change(function(){
			var tranlatedText = me.translationObj.getTranslatedValueByKey( "common_msg_orgUnitSaved" );
			me.storageObj.addItem( me.storageObj.KEY_STORAGE_ORGUNIT, me.orgUnitListTag.val() );	
			me.populateOrgUnitNameInHeader();
			MsgManager.msgAreaShow( tranlatedText, "SUCCESS");
		});
		
		me.updateTransBtnTag.click( function(){
			var message = me.translationObj.getTranslatedValueByKey( "settings_translation_msg_loading" );
			MsgManager.appBlock( message );
			me.translationObj.loadKeywords( function(){
				me.translationObj.translatePage( function(){
					MsgManager.appUnblock();
				});
			});
		});
		
	};
	
	
	// Add Events for [Menu]
	
	me.setUp_Events_Menus = function()
	{
		me.todayCaseLinkTag.click(function(e){
			console.log("todayCaseLinkTag");
			$('.overlay').click();
			
			me.checkOrgunitSetting( function(){
				me.registerClientBtnTag.show();
				me.listTodayCases();
			});
		});
		
		me.previousCaseLinkTag.click(function(){
			$('.overlay').click();
			
			me.checkOrgunitSetting( function(){
				me.registerClientBtnTag.hide();
				me.listPreviousCases();
			});
		});
		
		me.positiveCaseLinkTag.click(function(){
			$('.overlay').click();
			
			me.checkOrgunitSetting( function(){
				me.registerClientBtnTag.hide();
				me.listPositiveCases();
			});
		});
		
		me.searchClientLinkTag.click(function(){
			$('.overlay').click();
			
			me.checkOrgunitSetting( function(){
				me.resetPageDisplay();
				me.resetSearchClientForm();
				me.showSearchClientForm();
			});
		});
		
		me.settingsLinkTag.click(function(){
			me.storageObj.addItem("page", me.PAGE_SETTINGS);
			me.resetPageDisplay();
			me.settingsDivTag.show("fast");
			$('.overlay').click();
		});
		
		me.aboutLinkTag.click(function(){
			$('.overlay').click();
			
			me.checkOrgunitSetting( function(){
				me.storageObj.addItem("page", me.PAGE_ABOUT);
				me.resetPageDisplay();
				me.aboutDivTag.show("fast");
			});
		});
		
		me.moveToSettingLinkTag.click(function(){
			me.resetPageDisplay();
			me.settingsDivTag.show("fast");
			$('.overlay').click();
		});
		
		me.consumablesLinkTag.click(function(){
			$('.overlay').click();
			
			me.checkOrgunitSetting( function(){
				me.storageObj.addItem("page", me.PAGE_COMSUMABLES);
				me.resetPageDisplay();
				me.consumablesDivTag.show("fast");
			});
		});
		
		me.reportLinkTag .click(function(){
			$('.overlay').click();
			
			me.checkOrgunitSetting( function(){
				me.storageObj.addItem("page", me.PAGE_REPORT_PARAM);
				me.resetPageDisplay();
				me.getReport();
			});
		});
		
	};
	
	
	// Add Events for [Search Client Form]
	
	me.setUp_Events_SearchClientForm = function()
	{
		// Open "Search/Add client" form from "Today Cases" list
		
		me.registerClientBtnTag.click(function(){
			me.resetPageDisplay();
			me.resetSearchClientForm();
			me.showSearchClientForm();
		});
		
		// Add Datepicker to date fields
		
		me.seachAddClientFormTag.find("[isDate='true']").each(function(){
			Util.datePicker($(this), me.dateFormat );
		});
		
		// Search Result buttons
				
		me.showAddNewClientFormTag.click( function(){
			me.showAddClientForm();
		});

		me.backToSearchClientFormTag.click( function(){
			me.resetPageDisplay();
			me.showSearchClientForm();
		});
		
		me.showTodayCaseTag.click( function(){
			me.registerClientBtnTag.show();
			me.listTodayCases();
		});
				
		// Call [Search clients] function
		
		me.searchClientBtnTag.click(function(e){
			e.preventDefault();
			
			var tranlatedMsg = me.translationObj.getTranslatedValueByKey( "searchClient_msg_checkingData" );
			MsgManager.appBlock( tranlatedMsg );
			
			var clientData = me.getArrayJsonData( "attribute", me.searchClientFormTag );
			var requestData = { "attributes": clientData };
			
			if( requestData.attributes.length == 0 )
			{
				var tranlatedText = me.translationObj.getTranslatedValueByKey( "searchClient_validation_requiredValueInOneField" );
				MsgManager.msgAreaShow( tranlatedText, "ERROR" );
				alert( tranlatedText );
				MsgManager.appUnblock();
			}
			else
			{
				MsgManager.msgAreaHide();
				me.runSearchClients();
			}
			
		});

		me.seachAddClientFormTag.find("input,select").keyup(function(e){
			if ( e.keyCode === 13 ) {
				e.preventDefault();
				me.runSearchClients();
			}
		});
		
		
		// Validation for fields in [Search Client] form
		
		me.seachAddClientFormTag.find("input,select").change(function(){
			
			if( $(this).val() != "" )
			{
				MsgManager.msgAreaHide();
			}
		});
		

		// Validation for fields in [Add/Update Form] form
		
		me.addClientFormTag.find("input,select").change(function(e){
			me.generateClientCUIC();
		});
		
		me.setUp_validationCheck( me.seachAddClientFormTag.find( 'input,select' ) );
		
	};
	
	
	// Add Events for [Add/Edit Client Form]
	
	me.setUp_Events_AddClientForm = function()
	{
		// Add [Date picker] for date field
		
		me.addClientFormTag.find("[isDate='true']").each(function(){
			Util.datePicker($(this), me.dateFormat );
		});

		// Back to [Search Client Result]
		
		me.backToSearchClientResultBtnTag.click(function(){
			me.addClientFormDivTag.hide();
			MsgManager.msgAreaHide();
			me.selectOrgUnitWarningMsgTag.hide();
			me.searchResultTbTag.show();
			me.searchResultTag.show();
		});
		
		// Back to [Current Cases]
		
		me.backToCaseListBtnTag.click(function(){
			if( me.currentList == me.PAGE_TODAY_LIST )
			{
				me.registerClientBtnTag.show();
				me.listTodayCases();
			}
			else if( me.currentList == me.PAGE_PREVIOUS_LIST )
			{
				me.registerClientBtnTag.hide();
				me.listPreviousCases();
			}
			else if( me.currentList == me.PAGE_POSITIVE_LIST )
			{
				me.registerClientBtnTag.hide();
				me.listPositiveCases();
			}
		});
		
		me.saveClientBtnTag.click(function(){
			me.saveClient();
		});
		

		// Validation for INPUT fields
		
		me.thisTestDivTag.find("input,select").change(function(e){
			me.setUp_DataEntryFormLogic( $(this) );			
		});

		me.setUp_validationCheck( me.addClientFormTag.find( 'input,select' ) );
	};
	
	
	// Add Events for [Event Data Entry] form
	
	me.setUp_Events_DataEntryForm = function()
	{
		// Save an event
		me.saveEventBtnTag.click( function(){
			
			Util.disableTag( me.saveEventBtnTag, true );
						
			var client = JSON.parse( me.addClientFormTabTag.attr("client") );
			var event = me.addClientFormTabTag.attr("event");
			
			if( event !== undefined ){
				event = JSON.parse( event );
			}
			else{
				event = {};
			}
			
			me.execSaveEvent(event, client.trackedEntityInstance, event.event, function(){
				tranlatedText = me.translationObj.getTranslatedValueByKey( "dataEntryForm_tab_btn_editEvent" );
				me.saveEventBtnTag.html( tranlatedText );
			} );
		});
				
		// Complete an event
		me.completedEventBtnTag.click(function(){
			me.saveEventBtnTag.attr("status", "complete");
			var tranlatedText = me.translationObj.getTranslatedValueByKey( "clientEntryForm_msg_aksForCompletingEvent" );
			var result = confirm(tranlatedText);
			if(result)
			{
				var tranlatedText = me.translationObj.getTranslatedValueByKey( "clientEntryForm_msg_completingEvent" );
				MsgManager.appBlock( tranlatedText + " ..." );
				
				me.completeEvent(function(){
					me.addClientFormTabTag.removeAttr( "eventId" );
					me.addClientFormTabTag.removeAttr( "event" );
				});
			}
		});
		
		// Add Logic for "HIV Test" in entry form
		me.hideHIVTestLogicActionTag.change( function(){
			me.storageObj.addItem( me.storageObj.KEY_STORAGE_HIDE_HIV_TEST_LOGIC_ACTION_FIELDS, me.hideHIVTestLogicActionTag.val() );

			var translatedText = me.translationObj.getTranslatedValueByKey( "common_msg_settingsHideLogicActionFieldsSaved" );
			MsgManager.msgAreaShow( translatedText, "SUCCESS" );
		});

		me.setUp_validationCheck( me.thisTestDivTag.find( 'input,select' ) );
		
		me.activeEventHeaderTag = $("#activeEventHeader");
		
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
		var height = $(window).height() - 120;
		
		
		me.registerClientBtnTag.css({top: height, left: width, position:'fixed'});
	};
	
	
	// ----------------------------------------------------------------------------
	// Add logic for data elements in [Data Entry form]
	// ----------------------------------------------------------------------------
	
	me.setUp_DataEntryFormLogic = function( item )
	{
		if( eval( me.addClientFormTabTag.attr("addedLogic") ) )
		{
			var attrId = item.attr("dataelement");
			
			// If "Result Test 1" value is "Positive", enable "Result Test 2"
			if( attrId === me.de_Testing_ResultTest1 )
			{
				me.setUp_DataElementResultTest1Logic();
			}
			// If "Result Test 2" value is "Positive", enable "Result Parallel 2" 
			else if( attrId === me.de_Testing_ResultTest2 )
			{
				me.setUp_DataElementResultTest2Logic();
			}
			// If the value of "Parallel 1" and "Parallel 2" are the same, "FinalResult" has value as "Parallel"
			// If not, enable "SD Bioline" field
			else if( attrId === me.de_Testing_ResultParallel1 || attrId === me.de_Testing_ResultParallel2 )
			{
				me.setUp_DataElementResultParallelLogic();				
			}
			// Fill "SD Bioline" value for "Final Result"
			else if( attrId === me.de_Testing_ResultSDBioline )
			{
				me.resultFinalHIVStatusTag.val( me.resultTestResultSDBiolineTag.val() );
			}
		}		
	}; 
	
	
	me.setUp_DataElementResultTest1Logic = function()
	{
		if( me.resultTest1Tag.val() === "Positive" )
		{
			me.resultFinalHIVStatusTag.val( me.resultTest1Tag.val() );
			
			me.resultTest2Tag.val( "" );
			me.resultTestParallel1Tag.val( "" );
			me.resultTestParallel2Tag.val( "" );
			me.resultTestResultSDBiolineTag.val( "" );
			me.resultFinalHIVStatusTag.val( "" );
			
			Util.disableTag( me.resultTest2Tag, false );
			Util.disableTag( me.resultTestParallel1Tag, true );
			Util.disableTag( me.resultTestParallel2Tag, true );
			Util.disableTag( me.resultTestResultSDBiolineTag, true );
			
			me.addMandatoryForField( me.resultTest2Tag );
		}
		else
		{
			me.resultTest2Tag.val( "" );
			me.resultTestParallel1Tag.val( "" );
			me.resultTestParallel2Tag.val( "" );
			me.resultTestResultSDBiolineTag.val( "" );
			me.resultFinalHIVStatusTag.val( me.resultTest1Tag.val() );
			
			Util.disableTag( me.resultTest2Tag, true );
			Util.disableTag( me.resultTestParallel1Tag, true );
			Util.disableTag( me.resultTestParallel2Tag, true );
			Util.disableTag( me.resultTestResultSDBiolineTag, true );
			
			me.removeMandatoryForField( me.resultTest2Tag );
			me.removeMandatoryForField( me.resultTestParallel1Tag );
			me.removeMandatoryForField( me.resultTestParallel2Tag );
			me.removeMandatoryForField( me.resultTestResultSDBiolineTag );
		}
	};
	
	me.setUp_DataElementResultTest2Logic = function()
	{
		if( me.resultTest2Tag.val() !== "Positive" )
		{
			me.resultTestParallel1Tag.val( "" );
			me.resultTestParallel2Tag.val( "" );
			me.resultTestResultSDBiolineTag.val( "" );
			me.resultFinalHIVStatusTag.val( "" );
			
			Util.disableTag( me.resultTestParallel1Tag, false );
			Util.disableTag( me.resultTestParallel2Tag, false );
			Util.disableTag( me.resultTestResultSDBiolineTag, true );
			
			me.addMandatoryForField( me.resultTestParallel1Tag );
			me.addMandatoryForField( me.resultTestParallel2Tag );
		}
		else
		{
			me.resultTestParallel1Tag.val( "" );
			me.resultTestParallel2Tag.val( "" );
			me.resultTestResultSDBiolineTag.val( "" );
			me.resultFinalHIVStatusTag.val( me.resultTest2Tag.val() );
			
			Util.disableTag( me.resultTestParallel1Tag, true );
			Util.disableTag( me.resultTestParallel2Tag, true );
			Util.disableTag( me.resultTestResultSDBiolineTag, true );
			
			
			me.removeMandatoryForField( me.resultTestParallel1Tag );
			me.removeMandatoryForField( me.resultTestParallel2Tag );
			me.removeMandatoryForField( me.resultTestResultSDBiolineTag );
		}
	};
	
	me.setUp_DataElementResultParallelLogic = function()
	{
		if( me.resultTestParallel1Tag.val() != "" && me.resultTestParallel2Tag.val() != "" )
		{
			if( me.resultTestParallel1Tag.val() != me.resultTestParallel2Tag.val() )
			{
				me.resultFinalHIVStatusTag.val( "" );
				Util.disableTag( me.resultTestResultSDBiolineTag, false );
				me.addMandatoryForField( me.resultTestResultSDBiolineTag );
				
			}
			else
			{
				me.resultTestResultSDBiolineTag.val( "" );
				me.resultFinalHIVStatusTag.val( me.resultTestParallel1Tag.val() );
				
				Util.disableTag( me.resultTestResultSDBiolineTag, true );
				me.removeMandatoryForField( me.resultTestResultSDBiolineTag );
			}
		}
		else
		{
			me.resultTestResultSDBiolineTag.val( "" );
			me.resultFinalHIVStatusTag.val( "" );
			Util.disableTag( me.resultTestResultSDBiolineTag, true );
			me.removeMandatoryForField( me.resultTestResultSDBiolineTag );
		}
	};
	
	// ----------------------------------------------------------------------------
	// Create Search Client form, Registration form and Entry form
	// ----------------------------------------------------------------------------
	
	me.createClientForm = function()
	{
		me.createAddClientForm();
		me.createSearchClientForm();
		me.createDataEntryForm();
		
		
		// Remove the 'mandatory' SPAN from the Search table
		me.seachAddClientFormTag.find("span.required").remove();
	};
	
	
	// Create [Search Client] form with attribute-groups and program-attributes from server
	
	me.createAddClientForm = function()
	{
		// STEP 1. Create the table
		
		var table = $("<table class='table table-hover table-striped previousTestTb'></table>");
		me.addClientFormTag.append( table );
		
		for( var i in me.attributeGroupList )
		{
			var group = me.attributeGroupList[i];
			
			// STEP 2. Populate attribute-group name
			
			var tbody = $("<tbody groupId='" + group.id + "'></tbody>");
			
			// Create header with group name
			var headerTag = $("<tr header='true'></tr>");
			headerTag.append("<th colspan='2'><img style='float:left' class='arrowDownImg showHide' src='../images/down.gif'> " + group.name + "</th>" );
			tbody.append( headerTag );		
			
			// Add event for header to collapse the fields inside
			me.setUp_AddClientFormHeaderEvent( headerTag, table );
			
			
			// STEP 3. Populate attributes in group
			
			var list = me.attributeGroupList[i].list;
			for( var j in list)
			{
				var attribute = list[j];
				var rowTag = $("<tr></tr>");
				
				// STEP 3.1. Populate the name of attribute
				
				if( !attribute.mandatory )
				{
					rowTag.append("<td>" + attribute.shortName + "</td>");
				}
				else
				{
					rowTag.append("<td>" + attribute.shortName + " <span class='required'>*</span></td>");
				}
				
				// STEP 3.2. Generate the input/select tag based on the valueType of attribute
				
				var inputTag = me.generateInputTag( attribute, "attribute" );
				
				var inputColTag = $("<td></td>");
				inputColTag.append( inputTag );
				rowTag.append( inputColTag );
				tbody.append( rowTag );
				
			} // END Attribute List
			
			table.append( tbody );
			
			
		}// END Attribute Groups
		
		
		// Add logic for [Add Client form]
		me.setUp_AddClientFormLogic();
	};
	
	// Create [Add Client] form with attribute-groups and program-attributes from server
	
	me.createSearchClientForm = function()
	{
		for( var i in me.searchClientAttributeIds )
		{
			var attrId = me.searchClientAttributeIds[i];
			var inputTag = me.addClientFormTag.find("input[attribute='" + attrId + "'],select[attribute='" + attrId + "']" );
			var text = inputTag.closest("tr").find("td:first").html();
			
			var fieldTag = $("<div class='form-group'></div>");
			fieldTag.append("<label for='" + attrId + "' class='col-sm-2 control-label' style='font-weight:300'>" + text + "</label>");
			fieldTag.append( "<div class='col-sm-10'>" + inputTag.prop('outerHTML') + "</div>" );
			me.seachAddClientFormTag.append( fieldTag );
		}
		
		// Remove all of mandatory attribute for all fields
		me.seachAddClientFormTag.find("input,select").removeAttr("mandatory");
		me.validationObj.setUp_isNumberOnly_OlderBrowserSupport( me.seachAddClientFormTag );
		
		var dobTag = me.seachAddClientFormTag.find( "input[attribute='" + me.attr_DoB + "']" );
		me.addDeleteBtnForDoBField( dobTag );
			  
	};	

	me.tog = function(v)
	{
		return v?'addClass':'removeClass';
	}; 
	
	
	// Create [Data Entry form]
	
	me.createDataEntryForm = function()
	{
		// STEP 0. Create the header for active event
		
		var translatedByText = me.translationObj.getTranslatedValueByKey( "dataEntryForm_tab_thisTest_msg_createdBy" );	
		me.addEventFormTag.prepend( "<div id='activeEventHeader' class='testMsg'>" + translatedByText + " '<span></span>'</div>" );
		
		// STEP 1. Create the table
		
		me.generateDataEntryFormTable();
		
		
		// Disable some DEs in form. Will add login for these DE in 'change' event
		
		var resultTest1Tag = me.getDeField( me.de_Testing_ResultTest1 );
		var resultTest2Tag = me.getDeField( me.de_Testing_ResultTest2 );
		var resultTestParallel1Tag = me.getDeField( me.de_Testing_ResultParallel1 );
		var resultTestParallel2Tag = me.getDeField( me.de_Testing_ResultParallel2 );
		var resultTestResultSDBiolineTag = me.getDeField( me.de_Testing_ResultSDBioline );
		var resultFinalHIVStatusTag = me.getDeField( me.de_FinalResult_HIVStatus );
		
		if( resultTest1Tag.length > 0 && resultTest2Tag.length > 0 && resultTestParallel1Tag.length > 0 
				&& resultTestParallel2Tag.length > 0 && resultTestResultSDBiolineTag.length > 0 
				&& resultFinalHIVStatusTag.length > 0 )
		{
			 me.addClientFormTabTag.attr("addedLogic", true );

			 // Add "mandatory" validation for "Test 1" field
			 
			 me.addMandatoryForField( resultTest1Tag );

			 Util.disableTag( resultFinalHIVStatusTag, true ); 
			 me.addMandatoryForField( resultFinalHIVStatusTag );
		}
		else
		{
			me.addClientFormTabTag.attr("addedLogic", false );
		}
	};


	// ----------------------------------------------------------------------------
	// Add logic in [Add Client] Form
	// ----------------------------------------------------------------------------
	
	me.setUp_AddClientFormHeaderEvent = function( headerTag, tableTag )
	{
		// --------------------------------------------------------------
		// Set up to Show/Hide event data in "Previous" TAB
		// --------------------------------------------------------------
		
		
		headerTag.click(function(){

			var imgTag = $(this).find("img.showHide");
			
			// STEP 1. Display table of selected header
			
			var groupId = $(this).closest('tbody[groupId]').attr("groupId");
			var tbodyTag = tableTag.find("tbody[groupId='" + groupId + "']");
			var closed = imgTag.hasClass("arrowRightImg");
			
			// STEP 2. Show/Hide the selected event
			
			if( closed )
			{
				imgTag.attr( "src", "../images/down.gif" );
				imgTag.addClass('arrowDownImg');
				imgTag.removeClass('arrowRightImg');
				tbodyTag.find("tr:not([header])").show("fast");
			}
			else
			{
				imgTag.attr( "src", "../images/tab_right.png" );
				imgTag.removeClass('arrowDownImg');
				imgTag.addClass('arrowRightImg');
				tbodyTag.find("tr:not([header])").hide("fast");
			}
		});

	};
	
	me.setUp_AddClientFormLogic = function()
	{
		// Disable [Client CUIC] field. The value of this attribute will be generated from another attribute values		
		Util.disableTag( me.addClientFormTag.find("input[attribute='" + me.attr_ClientCUIC + "']"), true );
		
		// Add [Delete] button for [Date Of Birth] field
		var dobTag = me.addClientFormTag.find( "input[attribute='" + me.attr_DoB + "']" );
		me.addDeleteBtnForDoBField( dobTag );
		
		// Add [Min-Len] for [First name] and [Last name]
		me.addClientFormTag.find( "input[attribute='" + me.attr_FirstName + "']" ).attr( "minlength", 2 );
		me.addClientFormTag.find( "input[attribute='" + me.attr_LastName + "']" ).attr( "minlength", 2 );		
	};

	// Add [Delete] button for [Date Of Birth] field
	
	me.addDeleteBtnForDoBField = function( dobTag )
	{	
		dobTag.addClass( "clearable x onX" );
		dobTag.attr("readonly", true);
	    dobTag.mousemove( function( e ){
		    $(this)[me.tog(this.offsetWidth-25 < e.clientX-this.getBoundingClientRect().left)]('onX');   
	    });
	    
	    dobTag.click( function( ev ){
	    	if( $(this).hasClass("onX"))
			{
	    		ev.preventDefault();
			    $(this).removeClass("onX").val('').change();
			}
	    	
	    });
	};
	
	
	// ----------------------------------------------------------------------------
	// Add logic in [Data Entry form]
	
	
	me.addMandatoryForField = function( tag )
	{
		var inputRowTag = tag.closest("tr");
		
		me.removeMandatoryForField( tag );
		tag.attr( "mandatory", true );
		inputRowTag.find("td:first").append("<span class='required'> *</span>");
		inputRowTag.show();
	};
	
	
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
	};
	

	me.setUp_DataEntryFormHeaderEvent = function( headerTag, tableTag )
	{
		// --------------------------------------------------------------
		// Set up to Show/Hide event data in "Previous" TAB
		// --------------------------------------------------------------
		
		
		headerTag.click(function(){

			var imgTag = $(this).find("img.showHide");
			
			// STEP 1. Display table of selected header
			
			var sectionId = $(this).closest('tbody[sectionId]').attr("sectionId");
			var tbodyTag = tableTag.find("tbody[sectionId='" + sectionId + "']");
			var closed = imgTag.hasClass("arrowRightImg");
			
			// STEP 2. Show/Hide the selected event
			
			if( closed )
			{
				imgTag.attr( "src", "../images/down.gif" );
				imgTag.addClass('arrowDownImg');
				imgTag.removeClass('arrowRightImg');
				tbodyTag.find("tr:not([header])").show("fast");
			}
			else
			{
				imgTag.attr( "src", "../images/tab_right.png" );
				imgTag.removeClass('arrowDownImg');
				imgTag.addClass('arrowRightImg');
				tbodyTag.find("tr:not([header])").hide("fast");
			}
		});

	};
	
	
	// ----------------------------------------------------------------------------
	// Generate [Add Client Form] with section
	
	me.generateAttributeGroupList = function( attrGroups, prgAttributes )
	{
		var attributeGroupList = [];
		
		for( var i in attrGroups )
		{
			attributeGroupList[i] = {};
			attributeGroupList[i].name = attrGroups[i].name;
			attributeGroupList[i].id = attrGroups[i].id;
			attributeGroupList[i].list = [];
			
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
						
						attributeGroupList[i].list.push(attribute);
					}
				}
			}
		}
		
		return attributeGroupList;
	};
	
	// ----------------------------------------------------------------------------
	// Generate [Data Entry Form] with section
	
	me.generateDataEntryFormTable = function()
	{
		var table = me.addEventFormTag.find("table");
		
		for( var i in me.sectionList )
		{
			// STEP 2. Populate section name
			
			var tbody = $("<tbody sectionId='" + me.sectionList[i].id + "'></tbody>");
			
			// Add event for header to collapse the fields inside
			
			var headerTag = $("<tr header='true' style='cursor:pointer;'></tr>");
			headerTag.append("<th colspan='2'><img style='float:left' class='arrowDownImg showHide' src='../images/down.gif'> " + me.sectionList[i].displayName + "</th>" );
			tbody.append( headerTag );
			
			me.setUp_DataEntryFormHeaderEvent( headerTag, table );
			
			
			// STEP 3. Populate dataElements in section
			
			var deList = me.sectionList[i].programStageDataElements;
			for( var l in deList)
			{
				var de = deList[l].dataElement;
				de.mandatory = eval( deList[l].compulsory );
				
				rowTag = $("<tr></tr>");
				
				// STEP 3.1. Populate the name of attribute
				
				if( !de.mandatory )
				{
					rowTag.append("<td>" + de.formName + "</td>");
				}
				else
				{
					rowTag.append("<td>" + de.formName + " <span class='required'>*</span></td>");
				}
				
				// STEP 3.2. Generate the input/select tag based on the valueType of attribute
				
				inputTag = me.generateInputTag( de, "dataelement" );
				
				var inputColTag = $("<td></td>");
				inputColTag.append( inputTag );
				rowTag.append( inputColTag );
				
				// Add "DATE" picker for "Date" field
				Util.datePicker( rowTag.find("input[isDate='true']"), me.dateFormat );
				
				tbody.append( rowTag );
				
			} // END DE List
			
			table.append( tbody );
			
		}// END Sections
		
	};
	
	me.resetDataEntryForm = function()
	{
		me.activeEventHeaderTag.hide();
		
		// Enable the form for entering data
		me.disableDataEtryForm( false );
		
		// Add logic for [Data Entry form]
		me.resultTest2Tag = me.getDeField( me.de_Testing_ResultTest2 );
		me.resultTestParallel1Tag = me.getDeField( me.de_Testing_ResultParallel1 );
		me.resultTestParallel2Tag = me.getDeField( me.de_Testing_ResultParallel2 );
		me.resultTestResultSDBiolineTag = me.getDeField( me.de_Testing_ResultSDBioline );
		me.resultFinalHIVStatusTag = me.getDeField( me.de_FinalResult_HIVStatus );
		
		me.removeMandatoryForField( me.resultTest2Tag );
		me.removeMandatoryForField( me.resultTestParallel1Tag );
		me.removeMandatoryForField( me.resultTestParallel2Tag );
		me.removeMandatoryForField( me.resultTestResultSDBiolineTag );
		
		Util.disableTag( me.resultTest2Tag, true);
		Util.disableTag( me.resultTestParallel1Tag, true);
		Util.disableTag( me.resultTestParallel2Tag, true);
		Util.disableTag( me.resultTestResultSDBiolineTag, true);
		Util.disableTag( me.resultFinalHIVStatusTag, true);
		
		
		// Reset values in the form
		// Empty fields from "This Test" tab
		me.thisTestDivTag.find("input[type='text'],select").val("");
		me.thisTestDivTag.find("input[type='checkbox']").prop("checked", false);
		me.thisTestDivTag.find("input[type='radio']").prop("checked", false);
		me.addClientFormDivTag.find( "span.errorMsg" ).remove();

		
		// check if there is any orgunit which is set
		me.showOrgUnitWarningMsg();	
	};
	
	me.resetClientForm = function()
	{
		me.addClientFormTabTag.removeAttr( "client" );
		me.addClientFormTabTag.removeAttr( "event" );
		me.previousTestsTag.find("table").html("");
		
		// Empty fields from "This Test" tab
		me.clientAttributeDivTag.find("input[type='text'],select").val("");
		me.clientAttributeDivTag.find("input[type='checkbox']").prop("checked", false);
		me.clientAttributeDivTag.find("input[type='radio']").prop("checked", false);
	}
	
	// ----------------------------------------------------------------------------
	// Generate Input Tags
	
	me.generateInputTag = function( attribute, inputKey )
	{
		var inputTag = $( "<input type='text' class='form-control' " + inputKey + "='" + attribute.id + "' mandatory='" + attribute.mandatory + "' >" );
		
		if( attribute.optionSet !== undefined )
		{
			inputTag = me.generateOptionInputTag( attribute, inputKey );
		}
		else if( attribute.valueType === "BOOLEAN" )
		{
			inputTag = me.generateBoolInputTag( attribute, inputKey );
		}
		else if( attribute.valueType === "TRUE_ONLY" )
		{
			inputTag = "<input type='checkbox' class='form-control checkBox'  " + inputKey + "='" + attribute.id + "' mandatory='" + attribute.mandatory + "' >";
		}
		else if( attribute.valueType === "NUMBER" || attribute.valueType === "INTEGER" 
			|| attribute.valueType === "INTEGER_POSITIVE" || attribute.valueType === "INTEGER_NEGATIVE" 
			|| attribute.valueType === "INTEGER_ZERO_OR_POSITIVE" )
		{
			inputTag = me.generateNumberInputTag( attribute, inputKey );
		}
//		else if( attribute.valueType === "LONG_TEXT" )
//		{
//			inputTag = "<textarea class='form-control' " + inputKey + "='" + attribute.id + "' mandatory='" + attribute.mandatory + "' ></textarea>";
//		}
		else if( attribute.valueType === "LETTER" )
		{
			inputTag = "<input type='text' letter='true' class='form-control' " + inputKey + "='" + attribute.id + "' mandatory='" + attribute.mandatory + "' >";
		}
		else if( attribute.valueType === "DATE" )
		{
			inputTag = "<input type='text' isDate='true' class='form-control' " + inputKey + "='" + attribute.id + "' mandatory='" + attribute.mandatory + "' >";
		}
		
		return inputTag;
		
	};
	
	
	me.generateOptionInputTag = function( attribute, inputKey )
	{
		var options = attribute.optionSet.options;
		inputTag = $("<select class='form-control' " + inputKey + "='" + attribute.id + "' mandatory='" + attribute.mandatory + "'>");
		inputTag.append( "<option value=''>[Please select]</option>" );
		for( var k in options )
		{
			var code = options[k].code;
			var name = options[k].name;
			inputTag.append( "<option value='" + code + "'>" + name + "</option>" );
		}
		
		return inputTag;
	};
	
	me.generateNumberInputTag = function( attribute, inputKey )
	{
		var inputTag;
		
		var type = "";
		if( attribute.valueType === "NUMBER" )
		{
			type = "number='true'";
		}	
		else if( attribute.valueType === "INTEGER" )
		{
			type = "integer='true'";
		}
		else if( attribute.valueType === "INTEGER_POSITIVE" )
		{
			type = "integerPositive='true'";
		}
		else if( attribute.valueType === "INTEGER_NEGATIVE")
		{
			type = "integerNegative='true'";
		}
		else if( attribute.valueType === "INTEGER_ZERO_OR_POSITIVE"  )
		{
			type = "integerZeroPositive='true'";
		}
		
		return $( "<input type='text' " + type + " class='form-control' " + inputKey + "='" + attribute.id + "'>" );;
	};
	
	me.generateBoolInputTag = function( attribute, inputKey )
	{
		var inputTag = $( "<select class='form-control' " + inputKey + "='" + attribute.id + "' mandatory='" + attribute.mandatory + "'>" );
		inputTag.append( "<option value=''>[Please select]</option>" );
		inputTag.append( "<option value='true'>Yes</option>" );
		inputTag.append( "<option value='false'>No</option>" );
		
		return inputTag;
	};
	
	
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
				me.loginUsername = jsonData.loginUsername;
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
				me.catOptionComboList = jsonData.catOptions.categoryOptions;				
				
				
				// STEP 2. Structure attGroups with attributes in memory

				var attrGroups = jsonData.attGroups.trackedEntityAttributeGroups;
				var prgAttributes = jsonData.programAttributes.programTrackedEntityAttributes;
				me.attributeGroupList = me.generateAttributeGroupList( attrGroups, prgAttributes );
				
				
				// STEP 3. Populate orgunit list in 'Settings'
				
				me.districtListTag.append("<option value=''>[Please select]</option>");
				for( var i in jsonData.districts.organisationUnits )
				{
					var orgUnit = jsonData.districts.organisationUnits[i];
					me.districtListTag.append("<option value='" + orgUnit.id + "'>" + orgUnit.name + "</option>");
				}

				me.districtListTag.val( me.storageObj.getItem( me.storageObj.KEY_STORAGE_DISTRICT ) );
				me.loadOrgUnitList();
				
				me.metadataLoaded = true;
				me.checkAndLoadDataAfterInit();
			},
			error: function(a,b,c)
			{
				console.log("ERROR");
			}
		});
	};
	
	me.loadOrgUnitList = function()
	{
		me.populateOrgUnitList( function(){
			me.orgUnitListLoaded = true;
			me.checkAndLoadDataAfterInit();
		});
	};
	
	me.orgUnitSelectorChange = function()
	{
		var district = me.districtListTag.val();
		
		if( district !== "" )
		{
			me.populateOrgUnitList();
		}
		
	};
	
	me.populateOrgUnitList = function( exeFunc )
	{
		var district = me.districtListTag.val();
		$.ajax({
			type: "POST"
			,url: "../metaData/ouList?districtId=" + district
			,dataType: "json"
            ,contentType: "application/json;charset=utf-8" 
            ,beforeSend: function( xhr ) 
            {
            	me.orgUnitListTag.find("option").remove();
            	me.loadingOuListImgTag.show();
            }
			,success: function( jsonData ) 
			{
				me.orgUnitListTag.append("<option value=''>[Please select]</option>");
				for( var i in jsonData.organisationUnits )
				{
					var orgUnit = jsonData.organisationUnits[i];
					me.orgUnitListTag.append("<option value='" + orgUnit.id + "'>" + orgUnit.name + "</option>");
				}

				me.orgUnitListTag.val( me.storageObj.getItem( me.storageObj.KEY_STORAGE_ORGUNIT ) );
				me.populateOrgUnitNameInHeader();
				
				if( exeFunc ) exeFunc();
			}
		}).always( function( data ) {
			me.loadingOuListImgTag.hide();
			MsgManager.appUnblock();
		});
		
	};
	
	me.populateOrgUnitNameInHeader = function()
	{
		var ouId = me.orgUnitListTag.val();
		if( ouId == "" || ouId === null )
		{
			var translatedText = me.translationObj.getTranslatedValueByKey( "app_headerNoOrguit" );
			me.headerOrgUnitTag.html( "[" + translatedText + "]" );
			me.headerOrgUnitTag.css( "color", "red" );
		}
		else
		{
			me.headerOrgUnitTag.html( me.orgUnitListTag.find("option:selected").text() );
			me.headerOrgUnitTag.css( "color", "" );
		}
	};
	
	// Populate data and Setup events for components in HTML page
	
	me.checkAndLoadDataAfterInit = function()
	{
		if( me.userInfoLoaded && me.metadataLoaded && me.orgUnitListLoaded )
		{
			me.createClientForm();
			me.searchDoBTag = me.seachAddClientFormTag.find("[attribute='" + me.attr_DoB + "']");
			me.searchDistrictOBTag = me.seachAddClientFormTag.find("[attribute='" + me.attr_DistrictOB + "']");
			me.searchLastNameTag = me.seachAddClientFormTag.find("[attribute='" + me.attr_LastName + "']");
			me.searchFirstNameTag = me.seachAddClientFormTag.find("[attribute='" + me.attr_FirstName + "']");
			me.searchBirthOrderTag = me.seachAddClientFormTag.find("[attribute='" + me.attr_BirthOrder + "']");
			
			me.clientDoBTag = me.addClientFormTag.find("[attribute='" + me.attr_DoB + "']");
			me.clientDistrictOBTag = me.addClientFormTag.find("[attribute='" + me.attr_DistrictOB + "']");
			me.clientLastNameTag = me.addClientFormTag.find("[attribute='" + me.attr_LastName + "']");
			me.clientFirstNameTag = me.addClientFormTag.find("[attribute='" + me.attr_FirstName + "']");
			me.clientBirthOrderTag = me.addClientFormTag.find("[attribute='" + me.attr_BirthOrder + "']");
			

			me.resultTest1Tag = me.getDeField( me.de_Testing_ResultTest1 );
			me.resultTest2Tag = me.getDeField( me.de_Testing_ResultTest2 );
			me.resultTestParallel1Tag = me.getDeField( me.de_Testing_ResultParallel1 );
			me.resultTestParallel2Tag = me.getDeField( me.de_Testing_ResultParallel2 );
			me.resultTestResultSDBiolineTag = me.getDeField( me.de_Testing_ResultSDBioline );
			me.resultFinalHIVStatusTag = me.getDeField( me.de_FinalResult_HIVStatus );
		
			
			me.setUp_Events();		
			me.setUp_FloatButton();		
			me.addClientFormTabTag.tabs();
			
			var page = me.storageObj.getItem( "page" );
			if( page == "" )
			{
				me.listTodayCases();
			}
			else
			{
				me.loadPageWithParam();
			}	
		}
	};
	
	// -------------------------------------------------------------------
	// Load list of cases
	// -------------------------------------------------------------------
	
	me.listTodayCases = function( exeFunc )
	{
		me.currentList = me.PAGE_TODAY_LIST;
		me.storageObj.addItem( "page", me.PAGE_TODAY_LIST );
		me.storageObj.removeItem( "subPage" );		
		
		me.listDateTag.html( Util.formatDate_LastNDate(0) );
		me.listCases( "../event/todayCases", function( list )
		{
			me.populateTodayCaseData( list );
			if( exeFunc !== undefined ) exeFunc();

			// Show table			
			MsgManager.appUnblock();
			me.todayCaseTblTag.show();
			me.todayCaseListTag.show("fast");
		} );
	}
		
	me.listPreviousCases = function( exeFunc )
	{
		me.currentList = me.PAGE_PREVIOUS_LIST;
		me.storageObj.addItem("page", me.PAGE_PREVIOUS_LIST);
		me.storageObj.removeItem( "subPage" );
		
		me.listCases( "../event/previousCases", function( list ){
			me.populatePreviousCaseData( list )
			
			if( exeFunc !== undefined ) exeFunc();

			// Show table	
			MsgManager.appUnblock();
			me.previousCaseTblTag.show();
			me.previousCaseListTag.show("fast");
		} );
	}
	
	me.listPositiveCases = function( exeFunc )
	{
		me.currentList = me.PAGE_POSITIVE_LIST;
		me.storageObj.addItem("page", me.PAGE_POSITIVE_LIST);
		me.storageObj.removeItem( "subPage" );
		
		me.listCases( "../event/positiveCases", function( list ){
			me.populatePositiveCaseData( list );
			
			if( exeFunc !== undefined ) exeFunc();
			
			// Show table	
			MsgManager.appUnblock();
			me.positiveCaseTblTag.show();
			me.positiveCaseListTag.show("fast");
		} );
	}
	
	me.listCases = function( url, exeFunc )
	{
		me.storageObj.removeItem("param" );
		
		var tranlatedText = me.translationObj.getTranslatedValueByKey( "common_msg_loadingData" );
		
		me.resetPageDisplay();
		
		MsgManager.appBlock( tranlatedText + " ..." );
		
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
							exeFunc( response.rows );
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
	
	me.populateTodayCaseData = function( list )
	{		
		var tbodyTag = me.todayCaseTblTag.find("tbody");
		tbodyTag.find("tr").remove();
		
		if( list.length > 0 )
		{
			for( var i in list )
			{
				var event = list[i];
				var clientId = event[0];
				var eventId = event[1];
				var eventDate = event[2];
				var fullName = event[3] + " " + event[4];
				var deResult1 = event[5];
				var ouName = event[6];
				
				eventDate = ( eventDate !== undefined ) ? eventDate : "";
				var eventDateStr = eventDate;
				if( eventDate !== "" )
				{
					eventDateStr = Util.formatTimeInDateTime( eventDate );
				}

				var eventKey = eventDate.substring(11, 19).split(":").join("");
				
				var tranlatedText = me.translationObj.getTranslatedValueByKey( "allCaseList_msg_clickToOpenEditForm" );
				var rowTag = $("<tr clientId='" + clientId + "' title='" + tranlatedText + "' eventId='" + eventId + "' ></tr>");							
				rowTag.append( "<td><span style='display:none;'>" + eventKey + "</span><span>" + eventDateStr + "</span></td>" );
				rowTag.append( "<td>" + fullName + "</td>" );
				rowTag.append( "<td>" + deResult1 + "</td>" );
				rowTag.append( "<td>" + ouName + "</td>" );
				
				me.addEventForRowInList(rowTag);
				
				tbodyTag.append( rowTag );
			}
			
		}
		
		// Sortable		
		me.sortTable( me.todayCaseTblTag );
		
		me.todayCaseNumberTag.html( me.todayCaseTblTag.find("tbody tr").length );
	}

	me.populatePreviousCaseData = function( list )
	{	
		var tbodyTag = me.previousCaseTblTag.find("tbody");
		tbodyTag.find("tr").remove();
		
		if( list.length > 0 )
		{
			
			for( var i in list )
			{
				var event = list[i];
				var clientId = event[0];
				var eventId = event[1];
				var eventDate = event[2];
				var fullName = event[3] + " " + event[4];
				var deResult1 = event[5];
				var ouName = event[6];
				var noTest = event[7];
				
				eventDate = ( eventDate !== undefined ) ? eventDate : "";
				var eventDateStr = eventDate;
				if( eventDate !== "" )
				{
					eventDateStr = Util.formatDate_DisplayDate( eventDate );
				}
				
				var eventKey = eventDate.substring(0, 10).split("-").join("");
			
				var tranlatedText = me.translationObj.getTranslatedValueByKey( "allCaseList_msg_clickToOpenEditForm" );
				var rowTag = $("<tr clientId='" + clientId + "' title='" + tranlatedText + "' eventId='" + eventId + "' ></tr>");							
				rowTag.append( "<td><span style='display:none;'>" + eventKey + "</span><span>" + eventDateStr + "</span></td>" );
				rowTag.append( "<td>" + fullName + "</td>" );
				rowTag.append( "<td>" + deResult1 + "</td>" );
				rowTag.append( "<td>" + ouName + "</td>" );
				rowTag.append( "<td>" + noTest + "</td>" );
				
				me.addEventForRowInList(rowTag);
				
				tbodyTag.append( rowTag );
			}
			
		}
		
		// Sortable
		me.sortTable( me.previousCaseTblTag );
		
		me.previousCaseNumberTag.html( me.previousCaseTblTag.find("tbody tr").length );
	}
	
	me.populatePositiveCaseData = function( list )
	{
		var tbodyTag = me.positiveCaseTblTag.find("tbody");
		tbodyTag.find("tr").remove();
		
		if( list.length > 0 )
		{
			for( var i in list )
			{
				var event = list[i];
				var clientId = event[0];
				var eventId = event[1];	
				var eventDate = event[2];
				var fullName = event[3] + " " + event[4];
				var deARTVal = event[5];
				deARTVal = ( deARTVal !== "" ) ? "[None]" : deARTVal;
				var ouName = event[6];
				var numberOfTest = event[7];
				
				eventDate = ( eventDate !== undefined ) ? eventDate : "";
				var eventDateStr = eventDate;
				if( eventDate !== "" )
				{
					eventDateStr = Util.formatDate_DisplayDate( eventDate );
				}
				
				var eventKey = eventDate.substring(0, 10).split("-").join("");
				
				var tranlatedText = me.translationObj.getTranslatedValueByKey( "positiveCaseList_msg_clickToOpenEditForm" );
				var rowTag = $("<tr clientId='" + clientId + "' title='" + tranlatedText + "' eventId='" + eventId + "'></tr>");										
				rowTag.append( "<td><span style='display:none;'>" + eventKey + "</span><span>" + eventDateStr + "</span></td>" );
				rowTag.append( "<td>" + fullName + "</td>" );
				rowTag.append( "<td>" + ouName + "</td>" );
				rowTag.append( "<td>" + numberOfTest + "</td>" );
				rowTag.append( "<td></td>" );

				me.addEventForRowInList(rowTag);
				
				tbodyTag.append( rowTag );
			}
			
		}
		
		// Sortable

		me.sortTable( me.positiveCaseTblTag );
		
		me.positiveCaseNumberTag.html( me.positiveCaseTblTag.find("tbody tr").length );
	};

	me.sortTable = function( tableTag )
	{
		// Sortable
		var sorted = eval( tableTag.attr("sorted") );
		if( tableTag.find("tbody tr").length > 0  )
		{
			var sortingList = { 'sortList': [[0,1]] };
				
			( sorted ) ? tableTag.trigger( "updateAll", [ sortingList, function() {} ] ) : tableTag.tablesorter( sortingList );

			tableTag.attr( "sorted", "true" );
		}
	};
	
	
	me.addEventForRowInList = function(rowTag)
	{
		rowTag.css("cursor", "pointer");
		rowTag.click( function(){
			me.backToSearchClientResultBtnTag.hide();
			me.backToCaseListBtnTag.show();
			var clientId = rowTag.attr("clientId");
			var eventId = rowTag.attr("eventId");
			
			me.resetPageDisplay();
			me.loadClientDetails( clientId, eventId, function(){
				me.addClientFormDivTag.show();
			} );
		});
	};
	
	
	// -------------------------------------------------------------------
	// Search Client
	// -------------------------------------------------------------------
	
	me.runSearchClients = function( exeFunc )
	{
		if( me.validationObj.checkFormEntryTagsData( me.searchClientFormTag ) )
		{
			Commons.checkSession( function( isInSession ) {
				if ( isInSession ) {
					var clientData = me.getArrayJsonData( "attribute",  me.searchClientFormTag );
					var requestData = {
						"attributes": clientData
					};
					
					if( requestData.attributes.length > 0 )
					{
						me.searchResultTbTag.find("tbody").html("");
						me.backToSearchClientResultBtnTag.show();
						me.backToCaseListBtnTag.hide();
						
						me.searchClients( requestData, event, function( searchResult ){
							var searchCriteria = me.getSearchCriteria( me.searchClientFormTag );
							me.searchMatchResultKeyTag.html( searchCriteria );
							
							var tranlatedText = me.translationObj.getTranslatedValueByKey( "searchResult_msg_add" );
							me.searchResultKeyTag.html( tranlatedText + " " + searchCriteria );
							
							var clientList = searchResult.rows;
							if( clientList.length > 0 )
							{
								me.populateSearchClientData( searchResult );
								me.highlightSearchMatches();
								me.showSearchClientTableResult();
							}
							else
							{
								me.showSearchClientNoResult();
							}
							
							if( exeFunc !== undefined ) exeFunc();
						} );
						
					}
					else if( requestData.attributes.length == 0 )
					{
						var tranlatedText = me.translationObj.getTranslatedValueByKey( "searchClient_validation_requiredValueInOneField" );
						alert( tranlatedText );
					}
				} else {
					me.showExpireSessionMessage();					
				}
			});
		}
		
	};
	
	
	me.populateSearchClientData = function( searchResult )
	{
		var clientList = searchResult.rows;		
		var tranlatedText = me.translationObj.getTranslatedValueByKey( "searchClient_result_rowTooltip" );
		
		for( var i in clientList )
		{
			var client = clientList[i];
			var clientId = client[0];
			var firstName = client[1].trim();
			var lastName = client[2].trim();
			
			var dob = client[3].trim();
			dob = ( dob != "" ) ? Util.formatDate_LocalDisplayDate( dob ) : "";
			
			var district = client[4].trim();
			if( district != "" ) {
				var optionText = me.searchClientFormTag.find("[attribute='" + me.attr_DistrictOB + "'] option[value='" + district + "']").text();
				district = ( optionText == "" ) ? district :  optionText;
			}
			
			var birthOrder = client[5].trim();
			if( birthOrder != "" ) {
				var optionText = me.searchClientFormTag.find("[attribute='" + me.attr_BirthOrder + "'] option[value='" + birthOrder + "']").text();
				birthOrder = ( optionText == "" ) ? birthOrder :  optionText;
			}
			
			var adquisition = client[6].trim();
			adquisition = ( adquisition != "" ) ? Util.formatDate_DisplayDate( adquisition ) : "";
			var lastTestNS = client[7].trim();
			lastTestNS = ( lastTestNS != "" ) ? Util.formatDate_DisplayDate( lastTestNS ) : "";
			
			var rowTag = $("<tr title='" + tranlatedText + "' clientId='" + clientId + "'></tr>");
			rowTag.append( "<td>" + firstName + "</td>" );
			rowTag.append( "<td>" + lastName + "</td>" );
			rowTag.append( "<td>" + dob + "</td>" );
			rowTag.append( "<td>" + district + "</td>" );
			rowTag.append( "<td>" + birthOrder + "</td>" );
			rowTag.append( "<td>" + adquisition + "</td>" ); // The create date is the enrollement date
			rowTag.append( "<td>" + lastTestNS + "</td>" ); // The latest event date
			
			
			// -------------------------------------------------------------------
			// Add [Click] event for row
			// -------------------------------------------------------------------

			me.addEventForSearchResultRow( rowTag );
			
			me.searchResultTbTag.find("tbody").append( rowTag );
		}
		
	};
	
	me.highlightSearchMatches = function()
	{
		me.searchClientFormTag.find("input,select").each( function(){
			var value = $(this).val().toLowerCase();
			var colIdx = 0;
			if( value != "" )
			{
				var attributeId = $(this).attr( "attribute" );
				
				if( attributeId === me.attr_FirstName ){
					colIdx = 1;
				}
				else if( attributeId === me.attr_LastName ){
					colIdx = 2;
				}
				else if( attributeId === me.attr_DoB ){
					colIdx = 3;
				}
				else if( attributeId === me.attr_DistrictOB ){
					colIdx = 4;
					value = $(this).find("option:selected").text().toLowerCase();
				}
				else if( attributeId === me.attr_BirthOrder ){
					colIdx = 5;
					value = $(this).find("option:selected").text().toLowerCase();
				}
				
				me.searchResultTbTag.find('td:nth-child(' + colIdx + ')').each( function(){
					var colTag = $(this);
					if( colTag.html().toLowerCase().indexOf( value ) >= 0 )
					{
						var html = Util.highlightWords( colTag.html(), value );
						colTag.html( html );
					}
				});
			}
		});
	};
	
	// Add [Click] event for each row in search result
	
	me.addEventForSearchResultRow = function( rowTag )
	{
		rowTag.click(function(){
			me.loadClientDetails( rowTag.attr("clientId") );
		});	
	};
	
	
	// Load [Client details] when a row in search result is clicked
	
	me.loadClientDetails = function( clientId, eventId, exeFunc ){

		Commons.checkSession( function( isInSession ) {
			if ( isInSession ) {
				$.ajax(
					{
						type: "POST"
						,url: "../client/details?clientId=" + clientId
			            ,contentType: "application/json;charset=utf-8"
			            ,beforeSend: function( xhr ) 
			            {
			            	var tranlatedText = me.translationObj.getTranslatedValueByKey( "searchClient_result_loadingClientDetails" );				
							MsgManager.appBlock( tranlatedText + " ..." );
			            }
						,success: function( response ) 
						{		
							me.storageObj.addItem( "clientId", clientId );
							me.storageObj.addItem( "eventId", eventId );
							me.showUpdateClientForm( response, eventId );
							if( exeFunc !== undefined ) exeFunc();
						}
						,error: function(response)
						{
							console.log(response);
						}
					}).always( function( data ) {
						MsgManager.appUnblock();
					});
			} else {
				me.showExpireSessionMessage();					
			}
		});
		
	};
	

	me.searchClients = function( jsonQuery, event, exeFunc )
	{
		$.ajax(
			{
				type: "POST"
				,url: "../client/search"
				,dataType: "json"
				,data: JSON.stringify( jsonQuery )
	            ,contentType: "application/json;charset=utf-8"
	            ,beforeSend: function( xhr ) {
	        		var tranlatedText = me.translationObj.getTranslatedValueByKey( "searchClient_msg_searching" );
					MsgManager.appBlock( tranlatedText + " ..." );
	            }
				,success: function( response ) 
				{
					me.storageObj.addItem("page", me.PAGE_SEARCH_CLIENT_RESULT);
					me.storageObj.addItem("param", JSON.stringify( jsonQuery ) );
					exeFunc( response );
				}
				,error: function(response)
				{
					alert(response);
					console.log(response);
				}
			}).always( function( data ) {
				MsgManager.appUnblock();
			});
	};
	
	
	// -------------------------------------------------------------------
	// Add/Update Client
	// -------------------------------------------------------------------
	
	// Get client JSON data from attribute of the tab
	me.getClientJsonData = function()
	{
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
		
		return clientData;
	};
	
	me.getSaveClientURL = function()
	{
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
		
		var url ="../client/save?ouId=" + me.orgUnitListTag.val();
		
		var client = me.addClientFormTabTag.attr("client");
		if( client !== undefined )
		{
			client = JSON.parse( client );
			url += "&clientId=" + client.trackedEntityInstance;
		}
		
		return url;
	};
	
	me.saveClient = function()
	{
		// Disable the button as soon as the button is clicked
		Util.disableTag( me.saveClientBtnTag, true );
		
		Commons.checkSession( function( isInSession ) {
			if ( isInSession ) {
				
				var tranlatedMsg = me.translationObj.getTranslatedValueByKey( "clientEntryForm_msg_checkingData" );
				MsgManager.appBlock( tranlatedMsg );
				
				if( me.validationObj.checkFormEntryTagsData(me.addClientFormTabTag) )
				{
					$.ajax(
						{
							type: "POST"
							,url: me.getSaveClientURL()
							,dataType: "json"
							,data: JSON.stringify( me.getClientJsonData() )
				            ,contentType: "application/json;charset=utf-8"
			            	,beforeSend: function( xhr ) {
				        		var tranlatedText = me.translationObj.getTranslatedValueByKey( "clientEntryForm_msg_savingClient" );
								MsgManager.appBlock( tranlatedText + " ..." );
				            }
							,success: function( response ) 
							{
								// STEP 1. Set the client as attribute for the form. 
								
								me.addClientFormTabTag.attr( "client", JSON.stringify( response ) );
								
								// STEP 2. Set the header of the [Client Form] Tab
								
								me.generateAddClientFormHeader();

								// STEP 3. Set the value of the [Save Client] button
								
								tranlatedText = me.translationObj.getTranslatedValueByKey( "dataEntryForm_tab_btn_editClient" );
								me.saveClientBtnTag.html( tranlatedText );
								
								// STEP 4. Set the value of the [Save Event] button
								
								tranlatedText = me.translationObj.getTranslatedValueByKey( "dataEntryForm_tab_btn_createEvent" );
								me.saveEventBtnTag.html( tranlatedText );
								
								// STEP 5. Disable [Complete Event] button
								
								Util.disableTag( me.completedEventBtnTag, true );
								
								// STEP 6.1 Display [Client Attribute] Tab if the "status" mode is "Edit Client"
								
								if( me.saveClientBtnTag.attr("status") == "update" )
								{
									me.showTabInClientForm( me.TAB_NAME_CLIENT_ATTRIBUTE );
								}
								// STEP 6.1 Display [This Test] Tab if the "status" mode is "Add Client"
								else if( me.saveClientBtnTag.attr("status") == "add" )
								{
									me.showTabInClientForm( me.TAB_NAME_THIS_TEST );
								}
								
								// STEP 7. Set the status "Update" for [Client Form]
								
								me.saveClientBtnTag.attr("status", "update");
								
								
								// STEP 8. Unblock form
								
								tranlatedText = me.translationObj.getTranslatedValueByKey( "clientEntryForm_msg_clientSaved" );
								MsgManager.msgAreaShow( tranlatedText, "SUCCESS" );						
								MsgManager.appUnblock();
								alert( tranlatedText );
								
							}
							,error: function( response )
							{
								var conflicts = response.responseJSON.response.conflicts;
								var errorMsg = "";
								for( var i in conflicts )
								{
									errorMsg += " - " + conflicts[i].value + "\n";
								}
								
								for( var t in conflicts )
								{
									var msg = conflicts[t].value;
									for( var i in me.attributeGroupList )
									{
										var list = me.attributeGroupList[i].list;
										for( var j in list )
										{
											var attribute = list[j];
											var attrId = attribute.id;
											var attrText = attribute.shortName;
											
											if( errorMsg.indexOf( attrId ) >= 0 )
											{
												errorMsg = errorMsg.split( attrId ).join( attrText );
												msg = msg.split( attrId ).join( attrText );
												if( attribute.optionSet != undefined )
												{
													var optionSet = attribute.optionSet;
													errorMsg = errorMsg.split( optionSet.id ).join( optionSet.name );
													msg = msg.split( optionSet.id ).join( optionSet.name );
												}
												
												me.addErrorSpanToField( me.addClientFormTag.find("[attribute='" + attrId + "']"), msg );
											}
											
										}
									}
								}
								
								MsgManager.appUnblock();
								var errorMsgText = me.translationObj.getTranslatedValueByKey( "clientEntryForm_msg_saveDataFail" );
								var errorDetailsText = me.translationObj.getTranslatedValueByKey( "clientEntryForm_msg_errorDetails" );
								var message = errorMsgText + "\n" + errorDetailsText + ": \n" + errorMsg;
								MsgManager.msgAreaShow( message, "ERROR" );
								alert( message );
							}
						}).always( function( data ) {
							// Enable the button
							Util.disableTag( me.saveClientBtnTag, false );
						});
				}
				else
				{
					// Enable the button
					Util.disableTag( me.saveClientBtnTag, false );
					
					MsgManager.appUnblock();
					var tranlatedText = me.translationObj.getTranslatedValueByKey( "clientEntryForm_validation_checkErrorFields" );
					alert( tranlatedText );
				}
			} else {
				me.showExpireSessionMessage();					
			}
		});
		
	};
	
	me.addErrorSpanToField = function( inputTag, errorMsg )
	{
		inputTag.closest("td").append( "<span class='errorMsg'>" + errorMsg + "</span>" );
	};
	
	me.generateAddClientFormHeader = function()
	{
		var headerText = "";
		
		var firstName = me.clientFirstNameTag.val();
		var lastName = me.clientLastNameTag.val();
		var districtOfBirth = me.clientDistrictOBTag.val();
		var dob = me.clientDoBTag.val();
		
		if( firstName != "" || lastName != "" ) {
			headerText += $.trim( firstName + " " + lastName ) + ", ";
		}
		
		if( districtOfBirth != "" && districtOfBirth !== null ) {
			districtOfBirth = me.clientDistrictOBTag.find("option:selected").text();
			headerText += districtOfBirth + ", ";
		}
		
		if( dob != "" )
		{
			headerText += dob + ", ";
		}
		
		headerText = headerText.substring( 0, headerText.length - 2 );
		
		me.addClientFormDivTag.find(".headerList").html( headerText );
	};
	
	// -------------------------------------------------------------------
	// Add/Update Event
	// -------------------------------------------------------------------
	
	me.getSaveEventURL = function( clientId, eventId )
	{
		var url = "../event/save?ouId=" + me.orgUnitListTag.val();
		
		if( clientId !== undefined )
		{
			url += "&clientId=" + clientId;
		}
		
		if( eventId !== undefined )
		{
			url += "&eventId=" + eventId;
		}
		
		return url;
	};
	
	me.execSaveEvent = function( jsonData, clientId, eventId, exeFunc )
	{
		if( me.saveEventBtnTag.attr("status") == "add" )
		{
			var tranlatedMsg = me.translationObj.getTranslatedValueByKey( "clientEntryForm_msg_gettingCurrentGPSCoordinates" );
			MsgManager.appBlock( tranlatedMsg );
						
			me.getGPSCoordinates( function( lat, lng ){
				jsonData.coordinate = {
					"latitude" :  lat
					,"longitude" : lng
				}
				
				me.saveEvent( jsonData, clientId, eventId, exeFunc );
			} ) 
		}
		else
		{
			me.saveEvent( jsonData, clientId, eventId, exeFunc );	
		}
	};
	
	me.saveEvent = function( jsonData, clientId, eventId, exeFunc )
	{
		Commons.checkSession( function( isInSession ) {
			if ( isInSession ) {
				var tranlatedMsg = me.translationObj.getTranslatedValueByKey( "clientEntryForm_msg_checkingData" );
				MsgManager.appBlock( tranlatedMsg );
				
				if( me.validationObj.checkFormEntryTagsData(me.thisTestDivTag) )
				{
					var url = me.getSaveEventURL( clientId, eventId );
					jsonData.dataValues = me.getArrayJsonData( "dataElement", me.thisTestDivTag );
					
					$.ajax(
						{
							type: "POST"
							,url: url
							,dataType: "json"
							,data: JSON.stringify( jsonData )
				            ,contentType: "application/json;charset=utf-8"
				            ,beforeSend: function()
				            {
				            	var tranlatedText = "";
				            	if( me.saveEventBtnTag.attr("status") == "update" )
			            		{
				            		tranlatedText = me.translationObj.getTranslatedValueByKey( "clientEntryForm_msg_editingEvent" );
			            		}
				            	else if( me.saveEventBtnTag.attr("status") == "add" )
			            		{
				            		tranlatedText = me.translationObj.getTranslatedValueByKey( "clientEntryForm_msg_creatingEvent" );
			            		}
				            	else if( me.saveEventBtnTag.attr("status") == "complete" )
			            		{
				            		tranlatedText = me.translationObj.getTranslatedValueByKey( "clientEntryForm_msg_completingEvent" );
			            		}

								MsgManager.appBlock( tranlatedText + " ..." );
				            }
							,success: function( response ) 
							{
								me.activeEventHeaderTag.show();
								
								me.addClientFormTabTag.attr( "event", JSON.stringify( response ) );
	
								Util.disableTag( me.completedEventBtnTag, false );

								// STEP 4. Unblock form
								var translateMsg = "";
								if( me.saveEventBtnTag.attr("status") == "complete" )
			            		{
									translateMsg = me.translationObj.getTranslatedValueByKey( "clientEntryForm_msg_eventCompleted" );
			            		}
								else
								{
									translateMsg = me.translationObj.getTranslatedValueByKey( "clientEntryForm_msg_eventSaved" );		
								}
								
								var tranlatedText = me.translationObj.getTranslatedValueByKey( "dataEntryForm_tab_btn_editEvent" );
								me.saveEventBtnTag.html( tranlatedText );
								me.saveEventBtnTag.attr("status", "update");

								if( exeFunc !== undefined ) exeFunc();
								
								MsgManager.msgAreaShow( translateMsg, "SUCCESS" );
								MsgManager.appUnblock();
								alert( translateMsg );
							}
							,error: function( response )
							{
								var conflicts = response.responseJSON.response.conflicts;
								var errorMsg = "";
								for( var i in conflicts )
								{
									errorMsg += " - " + conflicts[i].value + "\n";
								}
								
								for( var t in conflicts )
								{
									var msg = conflicts[t].value;
									for( var i in me.sectionList )
									{
										var list = me.sectionList[i].programStageDataElements;
										for( var j in list )
										{
											var de = list[j].dataElement;
											var attrId = de.id;
											var attrText = de.formName;
											
											if( errorMsg.indexOf( attrId ) >= 0 )
											{
												errorMsg = errorMsg.split( attrId ).join( attrText );
												msg = msg.split( attrId ).join( attrText );
												if( de.optionSet != undefined )
												{
													var optionSet = de.optionSet;
													errorMsg = errorMsg.split( optionSet.id ).join( optionSet.name );
													msg = msg.split( optionSet.id ).join( optionSet.name );
												}
												
												me.addErrorSpanToField( me.addClientFormTag.find("[attribute='" + attrId + "']"), msg );
											}
											
										}
									}
								}
								
								MsgManager.appUnblock();
								var errorMsgText = me.translationObj.getTranslatedValueByKey( "clientEntryForm_msg_saveDataFail" );
								var errorDetailsText = me.translationObj.getTranslatedValueByKey( "clientEntryForm_msg_errorDetails" );
								var message = errorMsgText + "\n" + errorDetailsText + ": \n" + errorMsg;
								MsgManager.msgAreaShow( message, "ERROR" );
								alert( message );
								
							}
						}).always( function( data ) {
							Util.disableTag( me.saveEventBtnTag, false );
						});
				}
				else
				{
					Util.disableTag( me.saveEventBtnTag, false );
					MsgManager.appUnblock();
					var tranlatedText = me.translationObj.getTranslatedValueByKey( "datatEntryForm_validation_checkErrorFields" );
					alert( tranlatedText );
				}
			}
			else {
				me.showExpireSessionMessage();					
			}
		});
		
	};
	
	me.getGPSCoordinates = function( exeFunc ) 
	{
		if (navigator.geolocation) {
		    var location_timeout = setTimeout( 10000 );

		    navigator.geolocation.getCurrentPosition(function(position) {
		        clearTimeout(location_timeout);

		        var lat = position.coords.latitude;
		        var lng = position.coords.longitude;

		        exeFunc( lat, lng );
		    }, function(error) {
		        clearTimeout(location_timeout);
		        exeFunc( "", "" );
		    });
		} else {
			 exeFunc( "", "" );
		}
		 
	}

	function showPosition(position) {
	   
	};
		
	me.completeEvent = function( exeFunc )
	{
		var event = JSON.parse( me.addClientFormTabTag.attr( "event" ) );
		var eventId = event.event;
		
		
		// Update status of event
		
		event.status = "COMPLETED";		
		me.execSaveEvent( event, undefined, eventId, function(){

			// Create empty table and populate data for this event
			
			var tbody = me.createAndPopulateDataForEntryForm( event );
			me.previousTestsTag.find("table").prepend( tbody );
			
			// Reset data entry form
			me.resetDataEntryForm();
			
			Util.disableTag( me.completedEventBtnTag, true );

			// Show 'Save' event button AND show "This test" form
			me.showTabInClientForm( me.TAB_NAME_PREVIOUS_TEST );
			me.showTabInClientForm( me.TAB_NAME_THIS_TEST );

			var tranlatedText = me.translationObj.getTranslatedValueByKey( "dataEntryForm_tab_btn_createEvent" );
			me.saveEventBtnTag.html( tranlatedText );
			me.saveEventBtnTag.attr("status", "add");
			
			if( exeFunc !== undefined ) exeFunc();
			
			
		} );
	
	};
	
	
	// -------------------------------------------------------------------
	// Show / Hide forms
	// -------------------------------------------------------------------
	
	me.showOrgUnitWarningMsg = function()
	{
		if( me.orgUnitListTag.val() === "" || me.orgUnitListTag.val() === null )
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
		me.mainContentTags.hide();
		$("span.errorMsg").remove();
	};
	
	me.showSearchClientForm = function()
	{	
		me.storageObj.addItem("page", me.PAGE_SEARCH_PARAM);
		
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
		var tranlatedText = me.translationObj.getTranslatedValueByKey( "searchClient_result_optionTitle" );
		me.searchResultHeaderTag.html( tranlatedText );

		me.searchResultTbTag.show();
		me.searchResultTag.show("fast");
	};
	
	me.showAddClientForm = function()
	{
		me.storageObj.addItem("subPage", me.PAGE_SEARCH_ADD_CLIENT);
		
		me.resetPageDisplay();
		me.saveClientBtnTag.attr("status", "add" );
		me.saveEventBtnTag.attr("status", "add" );
		me.resetClientForm();
		me.resetDataEntryForm();
		

		// Change the Header title && 'Save' buton display name
		var tranlatedText = me.translationObj.getTranslatedValueByKey( "dataEntryForm_headerTitle_addClient" );
		me.addClientFormDivTag.find(".headerList").html(tranlatedText);
		
		tranlatedText = me.translationObj.getTranslatedValueByKey( "dataEntryForm_tab_btn_createClient" );
		me.saveClientBtnTag.html( tranlatedText );
		
		// Populate values from Search form to Add client form
		me.seachAddClientFormTag.find("input[attribute],select[attribute]").each(function(){
			var attrId = $(this).attr("attribute");
			var value = $(this).val();
			var field = me.addClientFormTag.find("input[attribute='" + attrId + "'],select[attribute='" + attrId + "']");
			
			if( field.attr("type") == "radio" || field.attr("type") == "checkbox" )
			{
				field.closest("td").find("[value='" + value + "']").prop("checked", true);
			}
			else
			{
				field.val( value );
			}
		});
		
		// Generate Client CUIC if any
		me.generateClientCUIC();
		
		// Select the "Client Attributes" tab
		me.addClientFormTabTag.tabs("option", "selected", 0);
		
		// Hide "Previous Test" and "This Test" Tabs
		me.hideTabInClientForm( me.TAB_NAME_PREVIOUS_TEST );
		me.hideTabInClientForm( me.TAB_NAME_THIS_TEST );
		
		// Show "Add Client" form
		me.addClientFormDivTag.show("fast");
		
	};
	
	me.showUpdateClientForm = function( data, selectedEventId )
	{
		me.storageObj.addItem("subPage", me.PAGE_SEARCH_EDIT_CLIENT);

		// Update the status of client
		me.saveClientBtnTag.attr("status", "update" );

		me.resetClientForm();
		me.resetDataEntryForm();
		me.searchResultTbTag.hide();
		me.searchResultTag.hide();
		me.searchClientFormTag.hide();
		
		
		// Set 'Save' buton display name
		tranlatedText = me.translationObj.getTranslatedValueByKey( "dataEntryForm_tab_btn_editClient" );
		me.saveClientBtnTag.html( tranlatedText );
			
		// Populate Client data		
		me.populateClientDataInForm( data.client );		
		
		// Create header for client form
		me.generateAddClientFormHeader();
		
		// Get activeEvent and completedEvent list
		
		var events = data.events.events;
		var activeEvent;
		var completedEvents = [];
		
		for( var i=0; i<events.length; i++ )
		{
			var event = events[i];
			var dataValues = event.dataValues;
			var eventId = event.event;
			
			if( event.status == "ACTIVE" && activeEvent === undefined )
			{
				activeEvent = event;
			}
			else
			{
				completedEvents.push( event );
			}
		}
			
		// Set up data in "Previous Test" tab
		me.setUp_DataInPreviousTestTab( completedEvents, selectedEventId );
				
		// Set up data in "This Test" tab

		me.setUp_DataInThisTestTab( activeEvent );
		
		// ---------------------------------------------------------------------------------------
		// STEP 5. Show "This Test" / "Previous Test" tab if there is a "seleted event id"
		// ---------------------------------------------------------------------------------------
		
		if( selectedEventId !== undefined  )
		{
			if( activeEvent !== undefined && activeEvent.event == selectedEventId )
			{
				me.addClientFormTabTag.tabs("option", "selected", 2);
			}
			else
			{
				me.addClientFormTabTag.tabs("option", "selected", 1);
			}
		}
		else
		{
			me.addClientFormTabTag.tabs("option", "selected", 0);
		}
		
		
		// ---------------------------------------------------------------------------------------
		// STEP 5. Show form
		// ---------------------------------------------------------------------------------------
		
		me.addClientFormDivTag.show("fast");
		
	};
	
	me.populateClientDataInForm = function( client )
	{
		me.addClientFormTabTag.attr( "client", JSON.stringify( client ) );
		var clientDetails = client.attributes;
		
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
				value = Util.formatDate_LocalDisplayDate( value );
				inputTag.val( value );
			}
			else if( inputTag.attr("type") == "checkbox" )
			{
				inputTag.prop("checked", value );
			}
			else if( inputTag.attr("type") == "radio" )
			{
				inputTag.closest("td").find("[value='" + value + "']").prop("checked", true);
			}
			else
			{
				inputTag.val( value );
			}	
				
		});
	};
	

	// ---------------------------------------------------------------------------------------
	// Setup data in "This Test" TAB
	// ---------------------------------------------------------------------------------------
	
	me.setUp_DataInPreviousTestTab = function( events, selectedEventId )
	{
		for( var i=0; i<events.length; i++ )
		{
			var event = events[i];
			
			// STEP 2.2. Create tbody for the event and populate data values of an event				
			var tbody = me.createAndPopulateDataForEntryForm( event );
			me.previousTestsTag.find("table").append( tbody );
		}
		
		me.checkAndDisplayPreviousTestTab( selectedEventId );
	};
	
	
	me.populateHistoryEventData = function( dataValues, tag )
	{
		for( var j in dataValues )
		{
			var dataValue = dataValues[j];
			var deId = dataValue.dataElement;
			var value = dataValue.value;
			
			var inputTag = me.thisTestDivTag.find("input[dataElement='" + deId + "'],select[dataElement='" + deId + "']");
			if( inputTag.prop("tagName") == "SELECT" )
			{
				value = inputTag.find("option[value='" + value + "']").text();
			}
			else if( inputTag.attr("isDate") === "true" && value != "" )
			{
				value = Util.formatDate_LocalDisplayDate( value );
			}
			else if( inputTag.attr("type") == "checkbox" )
			{
				value = "Yes";
			}
			
			tag.find("td[dataElement='" + deId + "']").html( value );
		}
	};

	
	me.checkAndDisplayPreviousTestTab = function( selectedEventId )
	{
		report = me.previousTestsTag.find("table");
		if( report.find("tbody").length > 0 )
		{
			// Show selectedEvent in PreviousTest if any
			if( selectedEventId !== undefined )
			{
				report.find('tbody tr[eventId="' + selectedEventId + '"]').find("img.showHide").click();
			}
			else
			{
				report.find('tbody:first tr[eventId]').find("img.showHide").click();
			}
			
			me.showTabInClientForm( me.TAB_NAME_PREVIOUS_TEST );
		}
		else
		{
			me.hideTabInClientForm( me.TAB_NAME_PREVIOUS_TEST );
		}
	}
	

	// ---------------------------------------------------------------------------------------
	// Setup data in "This Test" TAB
	// ---------------------------------------------------------------------------------------
	
	me.setUp_DataInThisTestTab = function( activeEvent )
	{	
		me.showTabInClientForm( me.TAB_NAME_THIS_TEST );
		
		// Always show [Complete] button
		me.completedEventBtnTag.show();
		
		me.resetDataEntryForm();
		
		if( activeEvent !== undefined )
		{	
			me.activeEventHeaderTag.show();
			
			// when a client is just created, an empty event will be created which is used for retrieving client in a certain list
			if( activeEvent.dataValues.length == 0 ){
				Util.disableTag( me.completedEventBtnTag, true );
			}
			else{
				Util.disableTag( me.completedEventBtnTag, false );
			}
			
			// Set "UPDATE" status for [Save Event] button
			me.saveEventBtnTag.attr("status", "update" );

			// Set 'Edit Event' buton display name
			tranlatedText = me.translationObj.getTranslatedValueByKey( "dataEntryForm_tab_btn_editEvent" );
			me.saveEventBtnTag.html( tranlatedText );
			
			// Populate event data
			me.populateActiveEventData( activeEvent );
			
		}
		else
		{
			Util.disableTag( me.completedEventBtnTag, true );
			
			// Set "ADD" status for [Save Event] button
			me.saveEventBtnTag.attr("status", "add" );

			// Set 'Edit Event' buton display name
			tranlatedText = me.translationObj.getTranslatedValueByKey( "dataEntryForm_tab_btn_createEvent" );
			me.saveEventBtnTag.html( tranlatedText );
			
			
			me.resetDataEntryForm();
			
			me.activeEventHeaderTag.hide();
		}
		
		// Set up if Data Entry Form can be editable
		me.setUp_IfDataEntryFormEditable( activeEvent );
		
	};
	
	// Check if the logged counsellor if this counsellor is the person who created the active event
	// If logged counsellor is a person who create the active event, then allow to edit data event
	
	me.setUp_IfDataEntryFormEditable = function( activeEvent )
	{
		var catOptionName = me.userFullNameTag.html();
		
		if( activeEvent !== undefined )
		{
			me.activeEventHeaderTag.show();
			var attributeOptionCombo = activeEvent.attributeCategoryOptions;
			
			var searchLoggedCounsellor = Util.findItemFromList( me.catOptionComboList, "id", attributeOptionCombo );
								
			if( searchLoggedCounsellor !== undefined )
			{
				catOptionName = searchLoggedCounsellor.name;
				
				if( me.loginUsername === searchLoggedCounsellor.code )
				{
					me.disableDataEtryForm( false );
					me.saveEventBtnTag.show();
					me.completedEventBtnTag.show();
					me.activeEventHeaderTag.css( "color","gray" );
				}
				else
				{
					me.disableDataEtryForm( true );
					me.saveEventBtnTag.hide();
					me.completedEventBtnTag.hide();
					
					me.activeEventHeaderTag.css( "color","tomato" );
				}
			}
			else
			{
				catOptionName = attributeOptionCombo;
			}
			
			me.setUp_logicEntryFormWithData();
		}
		else
		{
			me.activeEventHeaderTag.hide();
			me.saveEventBtnTag.show();
			me.completedEventBtnTag.show();
			Util.disableTag( me.completedEventBtnTag, true );
		}
		
		me.activeEventHeaderTag.find("span").html( catOptionName );
	}

	me.populateActiveEventData = function( event )
	{
		me.addClientFormTabTag.attr( "event", JSON.stringify( event ) );
		
		var dataValues = event.dataValues;
		for( var i in dataValues )
		{
			var dataValue = dataValues[i];
			var value = dataValue.value;
			
			var inputTag = me.addEventFormTag.find("[dataElement='" + dataValue.dataElement + "']");
			if( inputTag.attr("type") == "checkbox" )
			{
				inputTag.prop("checked", dataValue.value );
			}
			else 
			{
				if( inputTag.attr("isDate") == "true" )
				{
					value = Util.formatDate_LocalDisplayDate( value );
				}
				
				inputTag.val( value );
			}			
		}
	};
	
	me.disableDataEtryForm = function( disabled )
	{
		me.addEventFormTag.find("input,select").each( function(){
			var deId = $(this).attr("dataelement");
			
			if( deId != me.de_Testing_ResultTest1 &&
				deId != me.de_Testing_ResultTest2 && 
				deId != me.de_Testing_ResultParallel1 && 
				deId != me.de_Testing_ResultParallel2 && 
				deId != me.de_Testing_ResultSDBioline &&
				deId != me.de_FinalResult_HIVStatus )
			{
				Util.disableTag( $(this), disabled );
			}
		});
	};
	
	me.setUp_logicEntryFormWithData = function()
	{
		if( eval( me.addClientFormTabTag.attr("addedLogic") ) )
		{
			if( me.resultTestResultSDBiolineTag.val() != "" )
			{
				me.resultFinalHIVStatusTag.val( me.resultTestResultSDBiolineTag.val() );
				Util.disableTag( me.resultTest2Tag, false );
				Util.disableTag( me.resultTestParallel1Tag, false );
				Util.disableTag( me.resultTestParallel2Tag, false );
				Util.disableTag( me.resultTestResultSDBiolineTag, false );
			}
			else if( me.resultTestParallel1Tag.val() != "" && me.resultTestParallel2Tag.val() != "" )
			{
				Util.disableTag( me.resultTest2Tag, false );
				Util.disableTag( me.resultTestParallel1Tag, false );
				Util.disableTag( me.resultTestParallel2Tag, false );
				me.setUp_DataElementResultParallelLogic();
			}
			else if( me.resultTest2Tag.val() != "" )
			{
				Util.disableTag( me.resultTest2Tag, false );
				me.setUp_DataElementResultTest2Logic();
			}
			else
			{
				me.setUp_DataElementResultTest1Logic();
			}
			
		}	
	};
	
	// Create a tbody with sections of programs. This one is used for generating history of events of a client
		
	me.createAndPopulateDataForEntryForm = function( event )
	{
		var eventId = event.event;
		var eventDate = event.eventDate;
		var counsellor = me.findCounsellorByEventCatOptComboId( event.attributeCategoryOptions );
		var testResult = me.getEventResult( event );
		
		var tbody = $("<tbody eventId='" + eventId + "'></tbody>");
		
		// STEP 1. Create header
		
		var headerTag = $("<tr header='true' eventId='" + eventId + "' style='cursor:pointer;'></tr>");

		var url = 'event.html?eventid=' + eventId;
		var onclickEvent="window.open(\"" + url + "\",\"Event Report\",\"width=400,height=500\");"
		headerTag.append("<th colspan='2'>"
				+ "<span class='headerInfor'> <img style='float:left' class='arrowRightImg showHide' src='../images/tab_right.png'> " 
				+ Util.formatDate_DisplayDateTime( eventDate ) 
				+ "<font class='saperate'> | </font>" + event.orgUnitName 
				+ "<font class='saperate'> | </font>" + counsellor 
				+ "<font class='saperate'> | </font>" + testResult + "</span>"
				+ " <span style='float:right;'><a onclick='" + onclickEvent + "' href='#' > <img src='../images/print.png'></a></span></th>");
		
		tbody.append( headerTag );
		
		// STEP 2. Create row data
		
		for( var i in me.sectionList )
		{
			rowTag = $("<tr style='display:none;'></tr>");
			rowTag.append("<td colspan='2' style='font-weight:bold;background-color:#dde2e6;'>" + me.sectionList[i].displayName + "</td>");
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
		

		// STEP 3. Add event for Header row
		
		me.setUp_PreviousTestHeaderEvent( headerTag, me.previousTestsTag.find("table") );
		
		// STEP 4. Populate event data
		me.populateHistoryEventData( event.dataValues, tbody );
		
		return tbody;
	}
	
	me.getEventResult = function( event )
	{
		var result = "";
		for( var i in event.dataValues )
		{
			var dataValue = event.dataValues[i];
			if( dataValue.dataElement == me.de_FinalResult_HIVStatus )
			{
				result = dataValue.value;
			}
		}
		
		return result;
	};
	
	me.findCounsellorByEventCatOptComboId = function( eventCatOptComboId )
	{
		var catOptionName = eventCatOptComboId;
		
		var searchCounsellor = Util.findItemFromList( me.catOptionComboList, "id", eventCatOptComboId );
		if( searchCounsellor !== undefined )
		{
			catOptionName = searchCounsellor.name;
		}
		
		return catOptionName;
	};
	
	// Show / Hide an event in history of a client
	
	me.setUp_PreviousTestHeaderEvent = function( headerTag, report )
	{
		// --------------------------------------------------------------
		// Set up to Show/Hide event data in "Previous" TAB
		// --------------------------------------------------------------
		
		var imgTag = headerTag.find("img.showHide");
		
		headerTag.find("span.headerInfor").click(function(){
			
			// STEP 1. Display table of selected header
			
			var eventId = headerTag.attr("eventId");
			var tbodyTag = report.find("tbody[eventId='" + eventId + "']");
			var closed = imgTag.hasClass("arrowRightImg");
			
			// STEP 2. Hide all event data, not hide headers
			
			report.find("tr:not([header])").hide();
			
			var allHeaderTags = report.find("tbody tr[header]");
			allHeaderTags.find("img.showHide").attr( "src", "../images/tab_right.png" );
			allHeaderTags.find("img.showHide").addClass('arrowRightImg');
			allHeaderTags.find("img.showHide").removeClass('arrowDownImg');
			
			// STEP 3. Open the selected event
			
			if( closed )
			{
				imgTag.attr( "src", "../images/down.gif" );
				imgTag.addClass('arrowDownImg');
				imgTag.removeClass('arrowRightImg');
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
		me.searchResultHeaderTag.html( tranlatedText );
		
		me.searchResultTag.show("fast");
	};
	
	// Generate JSON data in client form / event form
	
	me.getArrayJsonData = function( key, formTag, isGetEmptyValue )
	{
		var jsonData = [];
		formTag.find("input,select").each(function(){
			var item = $(this);
			var attrId = item.attr(key);
			var value = item.val();
			if( item.attr("type") == "checkbox" )
			{
				if( item.prop("checked") )
				{
					value = "true";
				}
				else
				{
					value = "";
				}
			}
			else if( item.attr("type") == "radio" )
			{
				if( !item.prop("checked") )
				{
					value = "";
				}
			}
			
			if( value !== "" )
			{
				if( item.attr("isDate") !== undefined && item.attr("isDate") == "true" && value != "" )
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
	// Matches for [Med Rod, Measer, 10 Jan 2014, 01]
	me.getSearchCriteria = function( formTag )
	{
		var searchCriteria = "";
				
		var firstName = me.searchFirstNameTag.val();
		var lastName = me.searchLastNameTag.val();
		var districtOfBirth = me.searchDistrictOBTag.find("option:selected").val();
		var dob = me.searchDoBTag.val();
		var birthOrder = me.searchBirthOrderTag.val();
		
		if( firstName != "" || lastName != "" ) {
			searchCriteria += $.trim( firstName + " " + lastName ) + " ";
		}
		else
		{
			var translatedText = me.translationObj.getTranslatedValueByKey( "searchResult_msg_client" );
			searchCriteria += translatedText;
		}
		
		
		if( districtOfBirth != "" ) {
			var translatedText = me.translationObj.getTranslatedValueByKey( "searchResult_msg_bornAt" );
			districtOfBirth = me.searchDistrictOBTag.find("option:selected").text();
			searchCriteria +=  " " + translatedText + " " + districtOfBirth + " ";
		}
		
		
		if( dob != "" )
		{
			var translatedText = me.translationObj.getTranslatedValueByKey( "searchResult_msg_on" );
			searchCriteria += translatedText + " " + dob + " ";
		}
		

		if( birthOrder != "" )
		{
			searchCriteria += " [" + birthOrder + "] ";
		}
		
		return searchCriteria.substring( 0, searchCriteria.length - 1 );
	};
	

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
		
		var dateOfBirth = me.addClientFormTabTag.find("[attribute='" + me.attr_DoB + "']").val();
		var districtOfBirth = me.addClientFormTabTag.find("[attribute='" + me.attr_DistrictOB + "']").val();
		var firstName = me.addClientFormTabTag.find("[attribute='" + me.attr_FirstName + "']").val();
		var lastName = me.addClientFormTabTag.find("[attribute='" + me.attr_LastName + "']").val();
		var birthOrder = me.addClientFormTabTag.find("[attribute='" + me.attr_BirthOrder + "']").val();
		
		if( dateOfBirth != "" && districtOfBirth != "" &&  firstName != "" && lastName != "" && birthOrder != "" )
		{
			clientCUIC = dateOfBirth.substring(9, 12) + Util.MONTH_INDEXES[dateOfBirth.substring(3, 6)] + districtOfBirth.substring(0, 2).toUpperCase() + firstName.substring(0, 2).toUpperCase() + lastName.substring(0, 2).toUpperCase() + birthOrder;
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
	// [Report]
	// -------------------------------------------------------------------
	
	me.getReport = function()
	{
		Commons.checkSession( function( isInSession ) 
		{
			if( isInSession ) 
			{
				$.ajax(
					{
						type: "POST"
						,url: "../event/report"
						,dataType: "json"
			            ,contentType: "application/json;charset=utf-8"
			            ,beforeSend: function()
			            {
			            	var translatedText = me.translationObj.getTranslatedValueByKey( "report_msg_loadingReport" );
			            	MsgManager.appBlock( translatedText );
			            	
			            	me.reportTblTag.hide();
			            	me.reportTblTag.find("tbody td[dataelement]").html("");
			            	me.reportParamDivTag.show();
			            }
						,success: function( response ) 
						{
							// STEP 1. Add analytic time
							me.analyticTimeTag.html(response.analyticsTime);
							
							// --------------------------------------------------------------------
							// Generate report
							// --------------------------------------------------------------------
							
							// STEP 2. Get the currentPeriod and period which Yesterday is winthin
							var curPeriod = Util.getCurrentWeekPeriod();
							var yesterdayPeriod = Util.getYesterdayPeriod();
							
							var last4WeeksData = [];
							
							var data = response.report.rows;
							for( var i in data )
							{
								var deId = data[i][0];
								var value = eval( data[i][3] );
								var peId = data[i][1];
								
								// STEP 3. Set "This Week" data
								if( peId == curPeriod ) {
									me.setDataInReportCell( deId, "thisWeek", value );
								}

								
								// STEP 4. Set "Yesterday" data
								// In some cases, yesterday and current date have the same period
								if( peId == yesterdayPeriod ) {
									// Check the Yesterday period and calculate value
									if( value != "" ){
										value = value / 5;
										value = value.toFixed( 2 );

										me.setDataInReportCell( deId, "yesterday", value );
									}
								}
									
								// STEP 5. Calculate "Last 4 Week" data
								if( peId != curPeriod && peId != yesterdayPeriod )	// Get last4Weeks values
								{
									var last4WeekData = last4WeeksData[deId];
									if( last4WeekData !== undefined )
									{
										last4WeekData = eval( last4WeekData ) + value;
										last4WeeksData[deId] = last4WeekData;
									}
									else
									{
										last4WeeksData[deId] = value;
									}
								}
								
							}
							
							// STEP 6. Set values for "Last 4 weeks" column							
							me.setDataInReportCell( me.de_Tested, "last4weeks", last4WeeksData[me.de_Tested] );
							me.setDataInReportCell( me.de_Target, "last4weeks", last4WeeksData[me.de_Target] );
							me.setDataInReportCell( me.de_achieved, "last4weeks", last4WeeksData[me.de_achieved] );
							
							me.reportTblTag.show();
						}
						,error: function(response)
						{
							console.log(response);
						}
					}).always( function( data ) {
						MsgManager.appUnblock();
					});
			} 
			else {
				me.showExpireSessionMessage();					
			}
		});	
	};

	me.setDataInReportCell = function( deId, peId, value )
	{
		var colTag = me.reportTblTag.find("td[dataelement='" + deId + "'][period='" + peId + "']");
		colTag.html( value );
		
		if( deId == me.de_achieved )
		{
			if( value >= 80 ){ // Green
				colTag.append( " <img src='../images/green.png'>");
			}
			else if( value >= 80 ){ // Yellow
				colTag.append( " <img src='../images/yellow.png'>");
			}
			else { // Red
				colTag.append( " <img src='../images/red.png'>");
			}
		}
	};
	
	// -------------------------------------------------------------------
	// RUN Init method
	// -------------------------------------------------------------------
	
	me.init();
	
}

