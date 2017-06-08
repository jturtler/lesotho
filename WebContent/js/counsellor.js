
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
	
	
	// [Client Registration] form	
	me.addNewClientBtnTag = $("#addNewClientBtn");
	me.addClientFormTabTag = $("#addClientFormTab");
	me.addClientFormDivTag = $("#addClientFormDiv");
	me.clientAttributeDivTag = $("#clientAttributeDiv");
	me.addClientFormTag = $("#addClientForm");
	me.saveClientRegBtnTag = $("#saveClientRegBtn");
	me.discardClientRegFormBtnTag = $("#discardClientRegFormBtn");
	me.selectOrgUnitWarningMsgTag = $("#selectOrgUnitWarningMsg");
	me.moveToSettingLinkTag = $("#moveToSettingLink");
	me.backToCaseListBtnTag = $("[name='backToCaseListBtn']");

	
	// [Contact Log] data Entry form
	me.addContactLogEventDivTag = $("#addContactLogEventDiv");
	me.addContactLogEventFormTag = $("#addContactLogEventForm");
	me.contactLogFormTag  = $("#contactLogForm");
	me.discardContactLogBtnTag = $("#discardContactLogBtn");
	me.saveContactLogBtnTag = $("#saveContactLogBtn");
	
	me.nextContactLogActionTbTag = $("#nextContactLogActionTb");
	
	me.addContactLogEventBtnTag = $("#addContactLogEventBtn");
	me.discardContactLogEventBtnTag = $("#discardContactLogEventBtn");
	me.saveContactLogEventBtnTag = $("#saveContactLogEventBtn");
	me.contactLogEventFormTag = $("#contactLogEventForm");
	me.contactLogEventHistoryTbTag = $("#contactLogEventHistoryTb");
	
	

	// [ART Refer. Open] Data entry form
	
	
	me.linkageStatusLableTag = $("#linkageStatus");
	
	
	me.artReferOpenFormTag = $("#artReferOpenForm");
	me.discardARTOpenEventBtnTag = $("#discardARTOpenEventBtn");
	me.saveARTOpenEventBtnTag = $("#saveARTOpenEventBtn");

	
	// [ART Refer. Close] Data entry form
	me.artReferCloseFormTag = $("#artReferCloseForm");
	me.discardARTCloseEventBtnTag = $("#discardARTCloseEventBtn");
	me.saveARTCloseEventBtnTag = $("#saveARTCloseEventBtn");
	me.artEventInfoTbTag = $("#artEventInfoTb");
	me.artAttributeFormTag = $("#artAttributeForm");
	
	
	// [This Test] form
	me.addEventFormTag = $("#addEventForm");
	me.previousTestsTag = $("#previousTests");
	me.thisTestDivTag = $("#thisTestDiv");
	
	me.discardEventFormBtnTag = $("#discardEventFormBtn");
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
	
	
	// --------------------------------------------------------------------------------------------
	// -- Ids
	
	// [Program Stage] Ids
	me.stage_HIVTesting = "lVglvBnE3TY";
	me.stage_ContactLog = "gmBozy0KAMC";
	me.stage_ARTReferralOpenning = "OSpZnLBMVhr";
	me.stage_ARTReferralClosure = "usEIFQODMxf";

	
	// [Register Attribute] Ids
	me.attr_FirstName = "mW2l3T2zL0N";
	me.attr_LastName = "mUxDHgywnn2";
	me.attr_DoB = "wSp6Q7QDMsk";
	me.attr_DistrictOB = "u57uh7lHwF8";
	me.attr_ClientCUIC = "zRA08XEYiSF";
	me.attr_BirthOrder ="vTPYC9BXPNn";
	me.attr_Adquisition = "";
	me.attr_Last_TestNS = "";
	me.attr_LastContact = "";
	
	me.attr_Sex = "CCVO6BZMrnp";
	me.attr_KeyPopulation = "Y35TizULMzg";
	me.attr_PPOVC  = "vD0qayOxs64";
	me.attr_EverTested  = "PWy9kmp4Pmb";
	me.attr_LastHIVTestResult = "XTWSNIlxkEj";
	me.attr_DateLastHIVTest = "PyfoYtwNGrI";
	

	me.attr_ARTReferral_LinkageStatus = "mYdfuRItatP";
	me.attr_ARTClosure_TimeElapsed = "Mgxk7anSX8g";
	
	
	// [Contact Log] Ids
	me.attr_ConsentToContact = "ZQiKIaeOKv4"; // Set this one mandatory for Contact Log
	me.attr_ConsentToVisit = "W8Odb9UqA15";
	
	me.attr_ContactPhoneNumber = "C1twCsH0rjI";
	me.attr_RestrictionsContacting  = "z78Y1qdewNQ";
	me.attr_Address1 = "gY1FrhX5UTn";
	me.attr_Address2 = "gn35714pj4p";
	me.attr_Address3 = "qynN2cqRe71";
	me.attr_Address4 = "NLNTtpbT3c5";
	me.attr_Address5 = "jQilj6Wjweq";
	me.attr_VillageChiefName = "Wea8fAtYVwx";
	
	me.attr_KinName = "Kn6E1pGJzFR";
	me.attr_KinRelation = "zZRKJdqskbC";
	me.attr_NextKinPhoneNumber = "HtQU1Bfhc9m";
	
	
	me.attr_LinkageStatus = "mYdfuRItatP";
	me.de_ARTClosureLinkageOutcome  = "nOK8JcDWT9X";
	
	
	
	// [Data Element Ids]
	me.de_Testing_ResultTest1 = "choHDFxMCaU";
	me.de_Testing_ResultTest2 = "KDnhSz51HKS";
	me.de_Testing_ResultParallel1 = "rMh4ZGNzrh1";
	me.de_Testing_ResultParallel2 = "Bqff4skvt4d";
	me.de_Testing_ResultSDBioline = "M11JqgkJt2X";
	me.de_FinalResult_HIVStatus = "UuKat0HFjWS";
	
	me.de_ClientPartnerCUIC = "UYyCL2xz8Wz";
	me.de_Age = "e4XZKCNJjlc";
	me.de_ClientType = "RvYugZqBKoN";
	me.de_partnerCUICOpt = "csHM60DUGkG";
	me.de_partnerCUIC= "UYyCL2xz8Wz";
	me.de_PartnerKnowsHIVStatus = "TSqDjQSS2Qi";
	me.de_PartnerHIVStatus = "C4Zu5mKJQ9y";
	me.de_NumberSexualPartnersLast6Month = "drqngyyqyP3";
	me.de_circumcisedTag = "Ml9lBSv0iCC";
	me.de_TestResultsGiven = "QLMo6Kh3eVP";
	me.de_PreviousKnowledgeHIVPositiveStatus = "esWS3Y9LDi6";
	me.de_TBScreeningConducted = "mkVl2wjztaz";
	me.de_TBSuspected = "aK3LtjgJwUH";
	me.de_ReferralGivenPRePNegative  = "sTmbmjnUhrA";
	me.de_Height = "aIplfQPaJH7";
	me.de_Weight = "PazJ9tnjGhS";
	me.de_BMI = "r0Lh3dEecPF";
	

	me.de_Referral_Offered = "r8AftzZCjWP";
	me.de_ReferralGiven_STI  = "hv1oAJf18cE";
	me.de_ReferralGiven_TB  = "a9x8qqtTs0J";
	me.de_ReferralGiven_FP = "BqyBHC6eEFr";
	me.de_ReferralGiven_VMMC = "DbfyDJ04SjL";
	me.de_ReferralGiven_ART = "tUIkmIFMEDS";
	me.de_ReferralGiven_DNAPCR = "ZKWK5UIO9wp";
	
	
	me.de_TypeOfContact = "wzM3bUiPowS";
	me.de_Outcome = "hjpNXAyZ0cm";
	me.de_NextAction = "mcgzEFh5IV8";
	me.de_DueDate = "HcBFZsCt8Sy";
	me.de_Comments = "HaauwE6JkEs";

	me.de_HIVTestChannel = "quOYwc0SOqD";
	me.de_HIVTestChannel_OtherReason = "Tjw4iDAjyy6";
	me.de_WhatMotivatedHIVTest = "vOrRzjpdQC6";
	me.de_WhatMotivatedHIVTest_OtherReason = "GCl3ORKj1jC";
	
	me.de_Layer = "fGSXGuPIEOy";
	me.de_Layer_OtherReason = "omugvBULuf0";
	
	
	//[Report]
	me.de_Tested = "I2oytRXksKN";
	me.de_Target = "rcVLQsClLUa";
	me.de_achieved = "sNS1PQ1YNXA";
	
	me.reportName_AllClient = "reportAllClients";
	me.reportName_PositiveClient = "reportPostitiveClients";
	me.reportName_ARTClient = "reportARTReferrals";
	
	
	
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
	me.TAB_NAME_CONTACT_LOG = "contactLogDiv";
	me.TAB_NAME_ART_REFER = "artReferDiv";
	
	
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

	
	// ---------------------------------------------------------------------------------------------------------------------------
	// Init methods
	// ---------------------------------------------------------------------------------------------------------------------------
	
	me.init = function()
	{		
		MsgManager.initialSetup();		
		me.validationObj = new Validation( me.translationObj );
		
		me.setup_ButtonsOnBrowser();
		me.setupVersion();
		me.hideHIVTestLogicActionTag.val( me.storageObj.getItem( me.storageObj.KEY_STORAGE_HIDE_HIV_TEST_LOGIC_ACTION_FIELDS ) );		
		me.loadInitData();
	};
	

	// ---------------------------------------------------------------------------------------------------------------------------
	// Load init data
	// ---------------------------------------------------------------------------------------------------------------------------
	
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
		
		/* window.onload = function () {
		    if (typeof history.pushState === "function") {
		        history.pushState("jibberish", null, null);
		        window.onpopstate = function () {
		            history.pushState('newjibberish', null, null);
		            // Handle the back (or forward) buttons here
		            // Will NOT handle refresh, use onbeforeunload for this.
		        };
		    }
		    else {
		        var ignoreHashChange = true;
		        window.onhashchange = function () {
		            if (!ignoreHashChange) {
		                ignoreHashChange = true;
		                window.location.hash = Math.random();
		                // Detect and redirect change here
		                // Works in older FF and IE9
		                // * it does mess with your hash symbol (anchor?) pound sign
		                // delimiter on the end of the URL
		            }
		            else {
		                ignoreHashChange = false;   
		            }
		        };
		    } 
		}*/
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
		// -----------------------------------------------------------------------------------------
		// [This Test] tab events
		
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
		
		me.saveClientRegBtnTag.click(function(){
			me.saveClient( me.addClientFormTag );
		});
		
		me.discardClientRegFormBtnTag.click(function(){
			var translatedText = me.translationObj.getTranslatedValueByKey( "dataEntryForm_tab_clientRegForm_discardChanges" );
			var result = confirm( translatedText );
			if( result )
			{
				Util.resetForm( me.addClientFormTag );
				
				if( me.addClientFormTabTag.attr("client") != undefined )
				{
					var jsonClient = JSON.parse( me.addClientFormTabTag.attr("client") );
					me.populateClientAttrValues( me.addClientFormTag, jsonClient );	
					me.setUp_ClientRegistrationFormDataLogic();
					me.validationObj.checkFormEntryTagsData( me.addClientFormTag );
				}
				
				translatedText = me.translationObj.getTranslatedValueByKey( "dataEntryForm_tab_clientRegForm_changesDiscarded" );
				MsgManager.msgAreaShow( translatedText, "SUCCESS" );
				
			}
			
			return false;
		});
		
		// Validation for INPUT fields
		
		me.thisTestDivTag.find("input,select").change(function(e){
			me.setUp_DataEntryFormLogic( $(this).attr("dataelement") );			
		});

		me.setUp_validationCheck( me.addClientFormTag.find( 'input,select' ) );
		
		
		// -----------------------------------------------------------------------------------------
		// [Register Contact Log] button events
		
		me.discardContactLogBtnTag.click(function(){
			var translatedText = me.translationObj.getTranslatedValueByKey( "dataEntryForm_tab_contactLogForm_discardChanges" );
			var result = confirm( translatedText );			
			if( result )
			{
				Util.resetForm( me.contactLogFormTag );
				var jsonClient = JSON.parse( me.addClientFormTabTag.attr("client") );
				me.populateClientAttrValues( me.contactLogFormTag, jsonClient );				
				
				translatedText = me.translationObj.getTranslatedValueByKey( "dataEntryForm_tab_contactLogForm_changesDiscarded" );
				MsgManager.msgAreaShow( translatedText, "SUCCESS" );
			}
			
			return false;
		});
		
		me.saveContactLogBtnTag.click(function(){
			me.saveClient( me.contactLogFormTag, function(){
				me.showAttrContactLogHistory();

				if( me.showOpeningTag )
				{
					me.showTabInClientForm( me.TAB_NAME_ART_REFER );
				}
			} );
			
			return false;
		});
		
		
		// -----------------------------------------------------------------------------------------
		// [Event Contact Log] button events
		
		me.addContactLogEventBtnTag.click( function(){
			Util.resetForm( me.contactLogEventFormTag );
			me.contactLogEventFormTag.show();
			Util.disableTag( $(this), true );
		});
		
		me.discardContactLogEventBtnTag.click(function(){
			var translatedText = me.translationObj.getTranslatedValueByKey( "dataEntryForm_tab_contactLogForm_discardChanges" );
			var result = confirm( translatedText );			
			if( result )
			{
				Util.resetForm( me.contactLogEventFormTag );
				me.contactLogEventFormTag.hide();
				Util.disableTag( me.addContactLogEventBtnTag, false );
			}
			return false;
		});
		
		me.saveContactLogEventBtnTag.click(function(){
			
			var jsonClient = JSON.parse( me.addClientFormTabTag.attr("client") );
			
			var jsonEvent = { 
				"programStage": me.stage_ContactLog 
				,"status": "COMPLETED"
			};
			jsonEvent.dataValues = me.getArrayJsonData( "dataElement", me.contactLogEventFormTag );
			
			me.execSaveEvent( jsonEvent, jsonClient.trackedEntityInstance, undefined, function( jsonData ){
				me.contactLogEventFormTag.hide();
				me.populateContactLogEventHistory( jsonData );
				Util.disableTag( me.addContactLogEventBtnTag, false );
			});
			return false;
		});


		// Validation for INPUT fields
		
		me.setUp_validationCheck( me.contactLogFormTag.find( 'input,select,textarea' ) );
		
		
		// -----------------------------------------------------------------------------------------
		// [ART Refer Open] button events
		

		me.discardARTOpenEventBtnTag.click( function(){
			var translatedText = me.translationObj.getTranslatedValueByKey( "dataEntryForm_tab_ARTEventForm_discardChanges" );
			var result = confirm( translatedText );
			if( result )
			{
				Util.resetForm( me.artReferOpenFormTag );
				
				if( me.artReferOpenFormTag.attr("event") != undefined )
				{
					// Reset data
//					var jsonClient = JSON.parse( me.addClientFormTabTag.attr("client") );
//					me.populateClientAttrValues( me.artReferOpenFormTag, jsonClient );
					var jsonEvent = JSON.parse( me.artReferOpenFormTag.attr("event") );
					me.populateDataValuesInEntryForm( me.artReferOpenFormTag, jsonEvent );
				}
				
				// Check validation
				me.validationObj.checkFormEntryTagsData( me.artReferOpenFormTag );
				
				translatedText = me.translationObj.getTranslatedValueByKey( "dataEntryForm_tab_ARTEventForm_changesDiscarded" );
				MsgManager.msgAreaShow( translatedText, "SUCCESS" );
			}
			
			
			return false;
		});
		
		me.saveARTOpenEventBtnTag.click( function(){
			
			var jsonClient = JSON.parse( me.addClientFormTabTag.attr("client") );
			
			var jsonEvent = me.artReferOpenFormTag.attr("event");
			var eventId;
			if( jsonEvent !== undefined )
			{
				jsonEvent = JSON.parse( jsonEvent );
				eventId = jsonEvent.event;
			}
			else
			{
				jsonEvent = { 
					"programStage": me.stage_ARTReferralOpenning
					,"status": "COMPLETED"
				};
			}
						
			jsonEvent.dataValues = me.getArrayJsonData( "dataElement", me.artReferOpenFormTag );
			
			me.execSaveEvent( jsonEvent, jsonClient.trackedEntityInstance, eventId, function( response ){
				
				me.setAndSaveARTLinkageStatusAttrValue( function(){
					// Set [event] attribute for [ART Refer Opening] Tab
					me.artReferOpenFormTag.attr( "event", JSON.stringify( response ) );
					
					// Generate [Time Elapsed] attribute value for [ART Closure] form
					me.getAttributeField( me.attr_ARTClosure_TimeElapsed ).val( "00:00" );
					
					var artClosureEvent = me.artReferCloseFormTag.attr("event");
					if( artClosureEvent !== undefined )
					{
						artClosureEvent = JSON.parse( artClosureEvent );
					}
					me.populateTimeElapsed( response, artClosureEvent );
					
					me.artReferCloseFormTag.show();
					
					Util.disableForm( me.artReferOpenFormTag, true );
				});
				
			});
		

			return false;
		});
		

		// -----------------------------------------------------------------------------------------
		// [ART Refer Close] button events
		
		me.discardARTCloseEventBtnTag.click( function(){
			Util.resetForm( me.artReferCloseFormTag );
			var translatedText = me.translationObj.getTranslatedValueByKey( "dataEntryForm_tab_ARTEventForm_discardChanges" );
			var result = confirm( translatedText );
			if( result )
			{
				Util.resetForm( me.artReferCloseFormTag );
				
				
				// Reset data
				var jsonClient = JSON.parse( me.addClientFormTabTag.attr("client") );
				me.populateClientAttrValues( me.artReferCloseFormTag, jsonClient );
							
				if( me.artReferCloseFormTag.attr("event") != undefined )
				{
					var jsonEvent = JSON.parse( me.artReferCloseFormTag.attr("event") );
					me.populateDataValuesInEntryForm( me.artReferCloseFormTag, jsonEvent );	
				}

				// Check validation
				me.validationObj.checkFormEntryTagsData( me.artReferCloseFormTag );
				
				translatedText = me.translationObj.getTranslatedValueByKey( "dataEntryForm_tab_ARTEventForm_changesDiscarded" );
				MsgManager.msgAreaShow( translatedText, "SUCCESS" );
			}
			
			
			return false;
		});
		
		me.saveARTCloseEventBtnTag.click( function(){	

			var artClosureEvent = me.artReferCloseFormTag.attr("event");
			if( artClosureEvent === undefined )
			{
				// Generate [Time Elapsed] attribute value for [ART Closure] form
				var artOpeningEvent = JSON.parse( me.artReferOpenFormTag.attr("event") );
				var openEventDate = Util.convertUTCDateToLocalDate( artOpeningEvent.eventDate );
				var closureEventDate = new Date();
				
				var timeElapsed = Util.getTimeElapsed( openEventDate, closureEventDate );
				me.getAttributeField( me.attr_ARTClosure_TimeElapsed ).val( timeElapsed );
			}
			
			
			me.setARTLinkageStatusAttrValue();
			var jsonClient = me.getClientJsonData( me.artAttributeFormTag );
			var clientData = me.addClientFormTabTag.attr( "client", JSON.stringify( jsonClient ) );
			
			me.saveClientAndEvent( me.artReferCloseFormTag, me.stage_ARTReferralClosure, function( response ){
				Util.disableForm( me.thisTestDivTag, true );				
				me.showTabInClientForm( me.TAB_NAME_ART_REFER );
			} );
			
			return false;
			
		});
		
	};
	
	
	// Add Events for [Event Data Entry] form
	
	me.setUp_Events_DataEntryForm = function()
	{
		// Discard data
		me.discardEventFormBtnTag.click( function(){
			var translatedText = me.translationObj.getTranslatedValueByKey( "dataEntryForm_tab_contactLogForm_discardChanges" );
			var result = confirm( translatedText );			
			if( result )
			{
				Util.resetForm( me.addEventFormTag );
				
				if( me.addEventFormTag.attr("event") != undefined )
				{
					var jsonEvent = JSON.parse( me.addEventFormTag.attr("event") );
					me.populateDataValuesInEntryForm( me.addEventFormTag, jsonEvent );
				}
				
				translatedText = me.translationObj.getTranslatedValueByKey( "dataEntryForm_tab_ARTEventForm_changesDiscarded" );
				MsgManager.msgAreaShow( translatedText, "SUCCESS" );
			}
			
			return false;
		});
		
		// Save an event
		me.saveEventBtnTag.click( function(){
			
			Util.disableTag( me.saveEventBtnTag, true );
						
			var client = JSON.parse( me.addClientFormTabTag.attr("client") );
			var event = me.addEventFormTag.attr("event");
			
			if( event !== undefined ){
				event = JSON.parse( event );
			}
			else{
				event = { "programStage": me.stage_HIVTesting };
			}
			
			event.dataValues = me.getArrayJsonData( "dataElement", me.thisTestDivTag );
			
			me.execSaveEvent(event, client.trackedEntityInstance, event.event, function( eventJson ){
				
				me.addEventFormTag.attr("event", JSON.stringify( eventJson ));
				Util.disableForm( me.addClientFormTag, true );
				
				if( me.checkIfARTEvent( eventJson ) )
				{
					me.addClientFormTabTag.attr("artHIVTestingEvent", JSON.stringify( eventJson ));
					me.showOpeningTag = false;
				}
				me.checkAndShowARTReferTab( eventJson );
			} );
		});
				
		// Complete an event
		me.completedEventBtnTag.click(function(){
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
				
				return false;
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
	// Add logic for data elements in [This Test] form
	// ----------------------------------------------------------------------------
	
	me.setUp_DataEntryFormLogic = function( attrId )
	{
		if( attrId != undefined && eval( me.addClientFormTabTag.attr("addedLogic") ) )
		{
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
				var result = me.resultTestResultSDBiolineTag.val();
				if( me.resultTestResultSDBiolineTag.val() == "Indeterminate out of stock" )
				{
					result = "Indeterminate";
				}
				me.resultFinalHIVStatusTag.val( result );
				me.resultFinalHIVStatusTag.closest("td").find("errorMsg").remove();
			}
		}
				
		me.setUp_DataElementPartnerKnowHIVStatusLogic();
		me.setUp_DataElementFinalHIVStatusLogic();
		me.setUp_ReferralOfferedLogic();
		me.setUp_DataElementTBScreeningConductedLogic();
		me.setUp_OtherReasonTagLogic();
		me.setUp_ClientTypeTagLogic();
		me.setUp_DataElementBMI();
	}; 
	
	
	me.setUp_DataElementResultTest1Logic = function()
	{
		if( me.resultTest1Tag.val() === "Positive" )
		{
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
			me.resultFinalHIVStatusTag.closest("td").find("errorMsg").remove();
			
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
			me.resultFinalHIVStatusTag.closest("td").find("errorMsg").remove();
			
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
				me.resultFinalHIVStatusTag.closest("td").find("errorMsg").remove();
				
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
	
	me.setUp_DataElementPartnerKnowHIVStatusLogic = function()
	{
		var partnerKnowsHIVStatusTag = me.getDataElementField( me.de_PartnerKnowsHIVStatus );
		var partnerHIVStatusTag = me.getDataElementField( me.de_PartnerHIVStatus );
		
		if( partnerKnowsHIVStatusTag.val() == "true" )
		{
			me.addMandatoryForField( partnerHIVStatusTag );
			me.setHideLogicTag( partnerHIVStatusTag.closest("tr"), false );
		}
		else
		{
			me.removeMandatoryForField( partnerHIVStatusTag );
			partnerHIVStatusTag.val("");
			me.setHideLogicTag( partnerHIVStatusTag.closest("tr"), true );
		}
	};
	
	me.setUp_DataElementFinalHIVStatusLogic = function()
	{
		var resultFinalHIVStatusTag = me.getDataElementField( me.de_FinalResult_HIVStatus );
		var testResultsGivenTag = me.getDataElementField( me.de_TestResultsGiven );
		var previousKnowledgeHIVPositiveStatusTag = me.getDataElementField( me.de_PreviousKnowledgeHIVPositiveStatus );
		
		// Reset field [Previous knowledge of HIV+ status]
		me.setHideLogicTag( previousKnowledgeHIVPositiveStatusTag.closest("tr"), true );
		me.removeMandatoryForField( previousKnowledgeHIVPositiveStatusTag );
		
		// Reset field [testResultsGivenTag]
		Util.disableTag( testResultsGivenTag, false );	
		
		if( resultFinalHIVStatusTag.val() === "Indeterminate" )
		{
			// ASSIGN [No] value for [testResultsGiven]
			testResultsGivenTag.val("false");
			Util.disableTag( testResultsGivenTag, true );
		}
		else if( resultFinalHIVStatusTag.val() === "Positive" )
		{
			if( testResultsGivenTag.val() == "true" )
			{
				// Add mandatory for [Previous knowledge of HIV+ status]
				me.addMandatoryForField( previousKnowledgeHIVPositiveStatusTag );
				me.setHideLogicTag( previousKnowledgeHIVPositiveStatusTag.closest("tr"), false );
			}
			
		}
		
	};
	
	me.setUp_ReferralOfferedLogic = function()
	{
		var referralOfferedTag = me.getDataElementField( me.de_Referral_Offered );
		var testResultsGivenTag = me.getDataElementField( me.de_TestResultsGiven );
		var referralGivenSTITag = me.getDataElementField( me.de_ReferralGiven_STI );
		var referralGivenTBTag = me.getDataElementField( me.de_ReferralGiven_TB );
		var referralGivenFPTag = me.getDataElementField( me.de_ReferralGiven_FP );
		var referralGivenVMMCTag = me.getDataElementField( me.de_ReferralGiven_VMMC );
		var referralGivenARTTag = me.getDataElementField( me.de_ReferralGiven_ART );
		var referralGivenDNAPCRTag = me.getDataElementField( me.de_ReferralGiven_DNAPCR ); 
		var referralGivenPRePNegativeTag = me.getDataElementField( me.de_ReferralGivenPRePNegative );
		
		var resultFinalHIVStatusTag = me.getDataElementField( me.de_FinalResult_HIVStatus );
		var genderTag = me.getAttributeField( me.attr_Sex );
		
		// Hidden all [Referral Given xxx]
		me.setHideLogicTag( referralGivenSTITag.closest("tr"), true );
		me.setHideLogicTag( referralGivenTBTag.closest("tr"), true );
		me.setHideLogicTag( referralGivenFPTag.closest("tr"), true );
		me.setHideLogicTag( referralGivenVMMCTag.closest("tr"), true );
		me.setHideLogicTag( referralGivenARTTag.closest("tr"), true );
		me.setHideLogicTag( referralGivenPRePNegativeTag.closest("tr"), true );
		me.setHideLogicTag( referralGivenDNAPCRTag.closest("tr"), true );
		
		
		if( referralOfferedTag.val() == "true" )
		{

			if( resultFinalHIVStatusTag.val() == "Positive" )
			{
				me.setHideLogicTag( referralGivenSTITag.closest("tr"), false );
				me.setHideLogicTag( referralGivenTBTag.closest("tr"), false );
				me.setHideLogicTag( referralGivenFPTag.closest("tr"), false );
				me.setHideLogicTag( referralGivenDNAPCRTag.closest("tr"), false );
				
				if( testResultsGivenTag.val() == "true" )
				{
					me.setHideLogicTag( referralGivenARTTag.closest("tr"), false );
				}
			}
			else
			{
				me.setHideLogicTag( referralGivenPRePNegativeTag.closest("tr"), false );
			}
			
			if( genderTag.val() == "Male" )
			{
				me.setHideLogicTag( referralGivenVMMCTag.closest("tr"), false );
			}
			
		}
		else
		{
			referralGivenSTITag.prop("checked", false);
			referralGivenTBTag.prop("checked", false);
			referralGivenFPTag.prop("checked", false);
			referralGivenVMMCTag.prop("checked", false);
			referralGivenARTTag.prop("checked", false);
			referralGivenDNAPCRTag.prop("checked", false);
		}
	};
	
	me.setUp_DataElementTBScreeningConductedLogic = function()
	{
		var screeningConductedTag = me.getDataElementField( me.de_TBScreeningConducted );
		var suspectedTag = me.getDataElementField( me.de_TBSuspected );

		if( screeningConductedTag.prop("checked") )
		{
			suspectedTag.prop("checked", true);
			Util.disableTag( suspectedTag, true );
		}
		else
		{
			Util.disableTag( suspectedTag, false );
		}
	};

	me.setUp_OtherReasonTagLogic = function()
	{
		// HIVTestChannel
		var testChannelTag = me.getDataElementField( me.de_HIVTestChannel );
		otherReasonTag = me.getDataElementField( me.de_HIVTestChannel_OtherReason );
		if( testChannelTag.val() == "LS_CHA7" ) // [Other testing channel] Option
		{
			me.setHideLogicTag( otherReasonTag.closest("tr"), false );
		}
		else
		{
			me.setHideLogicTag( otherReasonTag.closest("tr"), true );
			otherReasonTag.val("");
		}
		
		// whatMotivatedHIVTest
		var whatMotivatedHIVTestTag = me.getDataElementField( me.de_WhatMotivatedHIVTest );
		otherReasonTag = me.getDataElementField( me.de_WhatMotivatedHIVTest_OtherReason );
		if( whatMotivatedHIVTestTag.val() == "OTHER" ) // Other (specifiy)
		{
			me.setHideLogicTag( otherReasonTag.closest("tr"), false );
		}
		else
		{
			me.setHideLogicTag( otherReasonTag.closest("tr"), true );
			otherReasonTag.val("");
		}
		
		// Layger
		var layerTag = me.getDataElementField( me.de_Layer );
		otherReasonTag = me.getDataElementField( me.de_Layer_OtherReason );
		if( layerTag.val() == "LAY08" ) // Other (specifiy)
		{
			me.setHideLogicTag( otherReasonTag.closest("tr"), false );
		}
		else
		{
			me.setHideLogicTag( otherReasonTag.closest("tr"), true );
			otherReasonTag.val("");
		}
	};
		
	me.setUp_ClientTypeTagLogic = function()
	{
		var clientTypeTag = me.getDataElementField( me.de_ClientType );
		var partnerCUICOptTag = me.getDataElementField( me.de_partnerCUICOpt );
		var partnerCUICTag = me.getDataElementField( me.de_partnerCUIC );
		if( clientTypeTag.val() == "LS_SER1" )
		{
			partnerCUICOptTag.val("");
			partnerCUICTag.val("");
			
			// Hide [Client partner's CUIC - Option] && [Client partner's CUIC] fields
			me.setHideLogicTag( partnerCUICOptTag, true );
			me.setHideLogicTag( partnerCUICTag, true );
		}
		else
		{
			// Show [Client partner's CUIC - Option] && [Client partner's CUIC] fields
			me.setHideLogicTag( partnerCUICOptTag, false );
			me.setHideLogicTag( partnerCUICTag, false );
		}
		
	};
	
	me.setUp_DataElementBMI = function()
	{
		var height = me.getDataElementField( me.de_Height ).val();
		var weight = me.getDataElementField( me.de_Weight ).val();
		var bmiTag = me.getDataElementField( me.de_BMI );
		var result = "";

		if( height != "" && weight != "" )
		{
			result = weight / ( height * height );
			result = result.toFixed( 2 );
		}
		
		bmiTag.val( result );
	};	
	
	me.getDataElementField = function( deId )
	{
		return me.addClientFormTabTag.find( "input[dataElement='" + deId + "'],select[dataElement='" + deId + "']" );
	}
	
	me.setHideLogicTag = function( tab, hidden )
	{
		var rowTag = tab.closest("tr");
		if( hidden )
		{
			rowTag.addClass("logicHide");
			rowTag.hide();
		}
		else
		{
			rowTag.removeClass("logicHide");
			rowTag.show();
		}
	};
	
	// ----------------------------------------------------------------------------
	// Create Search Client form, Registration form and Entry form
	// ----------------------------------------------------------------------------
	
	me.createClientForm = function()
	{
		me.createRegisterClientForm();
		me.createSearchClientForm();
		me.createDataEntryForm();
		
		// Remove the 'mandatory' SPAN from the Search table
		me.seachAddClientFormTag.find("span.required").remove();
		
		// Remove header of [ART Attribute] form
		me.artAttributeFormTag.find("tr[header]").remove();
		
		// Resolve [ART Closure] entry forms
		me.mergeARTAttributeFormAndEntryForm( me.artReferCloseFormTag );
		
		// [ART Closure] form - Disable "Time elapse" attribute field
		Util.disableTag( me.getAttributeField( me.attr_ARTClosure_TimeElapsed ), true );
	};
	
	// [ART Opening && Closure] form - Keep only tbodies of program section ( entry form )
	// ,remove all headers of attribute groups and merge input fields into the last program section tbody
	me.mergeARTAttributeFormAndEntryForm = function( formTag )
	{
		var programTb = me.artReferOpenFormTag.find("tbody[sectionid]:last");
		formTag.find("tbody[groupid]").each(function(){
			$(this).find("tr[header]").remove();
			formTag.append( $(this).html() );
		});
		formTag.find("tbody[groupid]").remove();
	};
	
	// Create [Search Client] form with attribute-groups and program-attributes from server
	me.createRegisterClientForm = function()
	{
		me.createAttributeClientForm( me.addClientFormTag, "LSHTC_Register_", false );
		me.createAttributeClientForm( me.contactLogFormTag, "LSHTC_LOG_", true );
		me.createAttributeClientForm( me.artAttributeFormTag, "LSHTC_ART_", false );
		me.createAttributeClientForm( me.artReferCloseFormTag, "LSHTC_ARTClosure_G1", false );
		
		// Set Mandatory for [Consent to contact] field
		var consentToContactTag = me.getAttributeField( me.attr_ConsentToContact );
		me.addMandatoryForField( consentToContactTag );
	};

	me.createAttributeClientForm = function( table, preFixGroupName, addHistoryDiv )
	{
		// STEP 1. Generate fields into the table
				
		for( var i = me.attributeGroupList.length - 1; i >= 0; i-- )
		{
			var group = me.attributeGroupList[i];
			
			if( group.code.indexOf( preFixGroupName ) == 0 )
			{
				// STEP 2. Populate attribute-group name
				
				var tbody = $("<tbody groupId='" + group.id + "'></tbody>");
				
				// Create header with group name
				var headerTag = $("<tr header='true'></tr>");
				headerTag.append("<th colspan='4' style='border-right:0px;'><img style='float:left' class='arrowDownImg showHide' src='../images/down.gif'> " + group.name + " <span style='display:none;float:right' class='saveMsg'>Save</span></th>" );
				tbody.append( headerTag );
				
				// Create header with group name
				var translatedDiscardChanges = me.translationObj.getTranslatedValueByKey( "contactLogForm_tab_discardChanges" );
				var translatedSaveChanges = me.translationObj.getTranslatedValueByKey( "contactLogForm_tab_saveChanges" );
				
				
				// Add event for header to collapse the fields inside
				me.setUp_ClientRegistrationFormHeaderEvent( headerTag, table, "groupId" );
				
				
				// STEP 3. Populate attributes in group
				
				var list = me.attributeGroupList[i].list;
				for( var j in list)
				{
					var attribute = list[j];
					var rowTag = $("<tr></tr>");
					
					// STEP 3.1. Populate the name of attribute
					
					if( !attribute.mandatory )
					{
						rowTag.append("<td colspan='2'>" + attribute.shortName + "</td>");
					}
					else
					{						
						rowTag.append("<td colspan='2'>" + attribute.shortName + " <span class='required'>*</span></td>");
					}
					
					// STEP 3.2. Generate the input/select tag based on the valueType of attribute
					
					var inputTag = me.generateInputTag( attribute, "attribute" );
					
					var inputColTag = $("<td colspan='2'></td>");
					inputColTag.append( inputTag );
					rowTag.append( inputColTag );
					tbody.append( rowTag );
					
				} // END Attribute List
				
				if( addHistoryDiv )
				{
					// Add Action bar for each section
					var actionTag = $("<tr class='actionBar' style='display:none;'></tr>");
					actionTag.append("<th style='width:20px;'><button class='discardBtn imgBtn'><span class='glyphicon glyphicon-ban-circle'></span></button></th>");
					actionTag.append("<th colspan='2'><span style='float:left;'>" + translatedDiscardChanges + "</span><span style='float:right;'>" + translatedSaveChanges + "</span></th>");
					actionTag.append("<th style='width:20px;'><button class='saveBtn imgBtn'><span class='glyphicon glyphicon-floppy-disk'></span></button></th>");	
					tbody.append( actionTag );
				}
				
				table.prepend( tbody );
				
				
				if( addHistoryDiv )
				{
					var historyGroupTb = $( "<tbody historyGroupId='" + group.id + "' style='display:none;'></tbody>" );
					var historyHeaderTag = $("<tr header='true'></tr>");					
					historyHeaderTag.append("<th colspan='3'><img style='float:left' class='arrowDownImg showHide' src='../images/down.gif'> " + group.name + "<span style='float:right;'>Edit</span></th>" );
					historyHeaderTag.append("<th style='width:20px;'><span style='cursor:pointer;' class='editBtn glyphicon glyphicon-pencil'></th>");
					historyGroupTb.append( historyHeaderTag );		

					historyGroupTb.append( "<tr><td colspan='4' class='historyInfo'></td></tr>" );
					
					// Add event for header to collapse the fields inside
					me.setUp_ClientRegistrationFormHeaderEvent( historyHeaderTag, table, "historyGroupId" );
					
					// Add event for Edit form and Save data
					me.setUp_Events_EditSectionContactLogForm( table, historyHeaderTag );
					
					table.prepend( historyGroupTb );
				}
			}// END Attribute Groups
			
			// Add logic for [Add Client form]
			me.setUp_ClientRegistrationFormValidation();
			
			// Add logic for [Add Client form]
			me.setUp_Events_ClientRegistrationFormDataLogic();
		}
	};
	
	me.setUp_Events_EditSectionContactLogForm = function( formTag, historyHeaderTag )
	{
		var editBtnTag = historyHeaderTag.find("span.editBtn");
		var historyGroupTbTag = historyHeaderTag.closest("tbody[historyGroupId]");
		var groupId = historyGroupTbTag.attr("historyGroupId");
		
		var editForm= formTag.find("tbody[groupId='" + groupId + "']");
		var headerTag = editForm.find("tr[header='true']");
		var saveBtnTag = editForm.find("button.saveBtn");
		var discardBtnTag = editForm.find("button.discardBtn");
		
		editBtnTag.click( function(){
			historyGroupTbTag.hide();
			editForm.show();
			editForm.find("tr.actionBar").show();
			editForm.addClass("separateTb");
			return false;
		});
		
		saveBtnTag.click( function(){
			me.saveClient( me.contactLogFormTag, function( id ){
				me.showHistoryContactLogDetails( id );
				editForm.removeClass("separateTb");
			}, groupId );
			return false;
		});
		
		discardBtnTag.click( function(){
			var translatedText = me.translationObj.getTranslatedValueByKey( "dataEntryForm_tab_contactLogForm_discardChanges" );
			var result = confirm( translatedText );			
			if( result )
			{
				// Reset data
				Util.resetForm( me.contactLogFormTag );
				var jsonClient = JSON.parse( me.addClientFormTabTag.attr("client") );
				me.populateClientAttrValues( me.contactLogFormTag, jsonClient );
				
				// Show history form
				editForm.hide();
				historyGroupTbTag.show();
				editForm.removeClass("separateTb");

				translatedText = me.translationObj.getTranslatedValueByKey( "dataEntryForm_tab_contactLogForm_changesDiscarded" );
				MsgManager.msgAreaShow( translatedText, "SUCCESS" );
			}
			return false;
		});
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
		dobTag.css( "background-color", "white" );
		dobTag.css( "border", "1px solid #ccc;" );
	};	

	
	// Create [Data Entry form]
	
	me.createDataEntryForm = function()
	{
		// STEP 0. Create the header for active event
		
		var translatedByText = me.translationObj.getTranslatedValueByKey( "dataEntryForm_tab_thisTest_msg_createdBy" );	
		me.addEventFormTag.closest("form").prepend( "<div id='activeEventHeader' class='testMsg'>" + translatedByText + " '<span>" + me.userFullNameTag.html() + "</span>'</div>" );
		
		
		// STEP 1. Create the [Entry form] table
		
		me.generateDataEntryFormTable( me.addEventFormTag, me.stage_HIVTesting );
		me.generateDataEntryFormTable( me.artReferOpenFormTag, me.stage_ARTReferralOpenning );
		me.generateDataEntryFormTable( me.artReferCloseFormTag, me.stage_ARTReferralClosure );
		
		// Generate data elements for [Contact Log] event form
		for( var i in me.contactLogDeList )
		{
			var psDE = me.contactLogDeList[i];
			var deId = psDE.dataElement.id;
			
			var colTag = me.contactLogEventFormTag.find("[dataelementtag='" + deId + "']");
			var inputTag = me.generateInputTag( psDE.dataElement, "dataelement" );
			colTag.append( inputTag );
			
			if( psDE.compulsory == "true" )
			{
				me.addMandatoryForField( inputTag );
			}
		}
		
		
		// [Contact Log] event form - Add "DATE" picker for "Date" field
		me.addContactLogEventFormTag.find("input[isDate='true']").each(function(){
			Util.datePicker( $(this), me.dateFormat );
		});
		
		
		// [ART Opening] and [ART Closure] event form -  Set mandatory for attributes in form
		
		me.artReferOpenFormTag.find("input[attribute],select[attribute]").each(function(){
			me.addMandatoryForField( $(this) );
		});
		
		me.artReferCloseFormTag.find("input[attribute],select[attribute]").each(function(){
			me.addMandatoryForField( $(this) );
		});
		
		
		// STEP 2. Disable some DEs in form. Will add login for these DE in 'change' event
		
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
		
		// Disable some data element fields which data values are filled from client attribute values
		Util.disableTag( me.getDataElementField( me.de_Age ), true );
		Util.disableTag( me.getDataElementField( me.de_BMI ), true );
		
		// Add logic validation for input fields
		me.setUp_DataEntryFormLogic();
	};


	// ----------------------------------------------------------------------------
	// Add logic in [Add Client] Form
	// ----------------------------------------------------------------------------
	
	me.setUp_ClientRegistrationFormHeaderEvent = function( headerTag, tableTag, attrName )
	{
		// --------------------------------------------------------------
		// Set up to Show/Hide event data in "Previous" TAB
		// --------------------------------------------------------------

		headerTag.find("th:first").click(function(){

			var imgTag = $(this).find("img.showHide");
			
			// STEP 1. Display table of selected header
			
			var groupId = $(this).closest('tbody[' + attrName + ']').attr( attrName );
			var tbodyTag = tableTag.find("tbody[" + attrName + "='" + groupId + "']");
			var closed = imgTag.hasClass("arrowRightImg");
			tbodyTag.removeClass("separateTb");
			
			// STEP 2. Show the selected event
			
			if( closed )
			{
				imgTag.attr( "src", "../images/down.gif" );
				imgTag.addClass('arrowDownImg');
				imgTag.removeClass('arrowRightImg');
				tbodyTag.find("tr:not([header])").show("fast");
				
				tableTag.find("tr.actionBar").show();
			}
			// Hide the selected event
			else
			{
				imgTag.attr( "src", "../images/tab_right.png" );
				imgTag.removeClass('arrowDownImg');
				imgTag.addClass('arrowRightImg');
				tbodyTag.find("tr:not([header])").hide("fast");
				
				tbodyTag.addClass("separateTb");
				tableTag.find("tr.actionBar").hide();
			}
			
		});

	};
	
	me.setUp_ClientRegistrationFormValidation = function()
	{
		// Disable [Client CUIC] field. The value of this attribute will be generated from another attribute values		
		Util.disableTag( me.getAttributeField( me.attr_ClientCUIC ), true );
		
		// Add [Delete] button for [Date Of Birth] field
		var dobTag = me.getAttributeField( me.attr_DoB );
		me.addDeleteBtnForDoBField( dobTag );
		
		// Add [Min-Len] for [First name] and [Last name]
		me.getAttributeField( me.attr_FirstName ).attr( "minlength", 2 );
		me.getAttributeField( me.attr_LastName ).attr( "minlength", 2 );
		
	};
	
	me.setUp_ClientRegistrationFormDataLogic = function()
	{
		me.setUp_ClientRegistrationFormLogic_sexField();
		me.setUp_ClientRegistrationFormLogic_everTested();
		me.setUp_ClientRegistrationFormLogic_Age();
	}
	
	me.setUp_Events_ClientRegistrationFormDataLogic = function()
	{
		var sexTag = me.getAttributeField( me.attr_Sex );
		sexTag.change( function(){
			var keyPopulationTag = me.getAttributeField( me.attr_KeyPopulation );
			var circumcisedTag = me.getDataElementField( me.de_circumcisedTag );
			
			keyPopulationTag.val("");
			circumcisedTag.val("");
			
			me.setUp_ClientRegistrationFormLogic_sexField();
		});
		
		var everTestedTag = me.getAttributeField( me.attr_EverTested );
		everTestedTag.change( function(){
			me.setUp_ClientRegistrationFormLogic_everTested();
		});
		
		var dobTag = me.getAttributeField( me.attr_DoB );
		dobTag.change( function(){
			var ppocvTag = me.getAttributeField( me.attr_PPOVC );
			ppocvTag.val("");
			
			me.setUp_ClientRegistrationFormLogic_Age();
		});
	};
	
	
	// Add logic for [keyPopulation] fields
	me.setUp_ClientRegistrationFormLogic_sexField = function()
	{
		var sexTag = me.getAttributeField( me.attr_Sex );
		var keyPopulationTag = me.getAttributeField( me.attr_KeyPopulation );
		var circumcisedTag = me.getDataElementField( me.de_circumcisedTag );
		
		// Reset option values for attribute [Key Population]
		keyPopulationTag.find("option[value='MSMSW']").hide();
		keyPopulationTag.find("option[value='MSMNONSW']").hide();
		keyPopulationTag.find("option[value='FSW']").hide();

		// Reset data element [Circumcised]
		me.setHideLogicTag( circumcisedTag.closest("tr"), circumcisedTag );
		
		
		if( sexTag.val() == "Female" ) // If Sex = Female, 		
		{
			// Show option values [FSW] of attribute [Key Population]
			keyPopulationTag.find("option[value='FSW']").show();
			
			// Hide data element [Circumcised]
			me.setHideLogicTag( circumcisedTag.closest("tr"), true );
		}
		else if( sexTag.val() == "Male" ) // If Sex = Male, HIDE FSW
		{
			// Show option values [MSM] of attribute [Key Population]
			keyPopulationTag.find("option[value='MSMSW']").show();
			keyPopulationTag.find("option[value='MSMNONSW']").show();
		}
	}
	
	// Add Logic for [LastHIVTestResult] and [Date of last HIV test]
	me.setUp_ClientRegistrationFormLogic_everTested = function()
	{
		var everTestedTag = me.getAttributeField( me.attr_EverTested );
		var lastHIVTestResultTag = me.getAttributeField( me.attr_LastHIVTestResult );
		var dateLastHIVTestTag = me.getAttributeField( me.attr_DateLastHIVTest );
		
		if( everTestedTag.val() == "true" )
		{
			me.addMandatoryForField( lastHIVTestResultTag );
			me.setHideLogicTag( lastHIVTestResultTag.closest("tr"), false );
			
			me.addMandatoryForField( dateLastHIVTestTag );
			me.setHideLogicTag( dateLastHIVTestTag.closest("tr"), false );
		}
		else
		{
			me.removeMandatoryForField( lastHIVTestResultTag );
			lastHIVTestResultTag.val("");
			me.setHideLogicTag( lastHIVTestResultTag.closest("tr"), true );
			
			me.removeMandatoryForField( dateLastHIVTestTag );
			dateLastHIVTestTag.val("");
			me.setHideLogicTag( dateLastHIVTestTag.closest("tr"), true );
		}
	};
	
	me.setUp_ClientRegistrationFormLogic_Age = function()
	{
		var dobTag = me.getAttributeField( me.attr_DoB );
		var age = "";
		if( dobTag.val() != "" ){
			var birthDateStr = Util.formatDate_DbDate( dobTag.val() );
			age = me.calculateAge( birthDateStr );
		}
				
		// If [age > 17], HIDE attribute [PP OVC]
		var ppocvTag = me.getAttributeField( me.attr_PPOVC );
		if( dobTag.val() != "" && age > 17 )
		{
			me.setHideLogicTag( ppocvTag.closest("tr"), true );
		}
		else
		{
			me.setHideLogicTag( ppocvTag.closest("tr"), false );
		}
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
		
	me.tog = function(v)
	{
		return v ? 'addClass' : 'removeClass';
	};
	
	
	me.getAttributeField = function( attrId )
	{
		return me.addClientFormTabTag.find( "input[attribute='" + attrId + "'],select[attribute='" + attrId + "']" );
	}
	
	me.calculateAge = function( birthDateStr )
	{
		var today = new Date();
	    var birthDate = new Date( birthDateStr );
	    var age = today.getFullYear() - birthDate.getFullYear();
	    var m = today.getMonth() - birthDate.getMonth();
	    if ( m < 0 || ( m === 0 && today.getDate() < birthDate.getDate() ) ) 
	    {
	        age--;
	    }
	    return age;
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
	};
	
	me.hideHIVTestLogicActionFields = function()
	{
		// Show/Hide the logic action field 
		if( eval( me.hideHIVTestLogicActionTag.val() ) )
		{
			me.resultTest2Tag.hide();
			me.resultTestParallel1Tag.hide();
			me.resultTestParallel2Tag.hide();
			me.resultTestResultSDBiolineTag.hide();
		}
		else
		{
			me.resultTest2Tag.show();
			me.resultTestParallel1Tag.show();
			me.resultTestParallel2Tag.show();
			me.resultTestResultSDBiolineTag.show();
		}
	}
	
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
			tbodyTag.removeClass("separateTb");
			
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
				tbodyTag.addClass("separateTb");
			}
			
			// Hide all hideLogic fields
			tbodyTag.find("tr.logicHide").hide();
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
			attributeGroupList[i].code = attrGroups[i].code;
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
	
	me.generateDataEntryFormTable = function( table, stageId )
	{
		var sections = Util.findItemFromList( me.sectionList, "id", stageId ).programStageSections;
		
		for( var i = sections.length - 1; i>=0; i-- )
		{
			// STEP 2. Populate section name
			
			var tbody = $("<tbody sectionId='" + sections[i].id + "' stageId='" + stageId + "'></tbody>");
			
			// Add event for header to collapse the fields inside
			
			var headerTag = $("<tr header='true' style='cursor:pointer;'></tr>");
			headerTag.append("<th colspan='4'><img style='float:left' class='arrowDownImg showHide' src='../images/down.gif'> " + sections[i].displayName + "</th>" );
			tbody.append( headerTag );
			
			me.setUp_DataEntryFormHeaderEvent( headerTag, table );
			
			
			// STEP 3. Populate dataElements in section
			
			var deList = sections[i].programStageDataElements;
			for( var l in deList)
			{
				var de = deList[l].dataElement;
				de.mandatory = eval( deList[l].compulsory );
				
				rowTag = $("<tr></tr>");
				
				// STEP 3.1. Populate the name of attribute
				
				if( !de.mandatory )
				{
					rowTag.append("<td colspan='2'>" + de.formName + "</td>");
				}
				else
				{
					rowTag.append("<td colspan='2'>" + de.formName + " <span class='required'>*</span></td>");
				}
				
				// STEP 3.2. Generate the input/select tag based on the valueType of attribute
				
				inputTag = me.generateInputTag( de, "dataelement" );
				
				var inputColTag = $("<td colspan='2'></td>");
				inputColTag.append( inputTag );
				rowTag.append( inputColTag );
				
				// Add "DATE" picker for "Date" field
				if( de == me.de_DueDate )
				{
					Util.dateFuturePicker( rowTag.find("input[isDate='true']"), me.dateFormat );
				}
				else
				{
					Util.datePicker( rowTag.find("input[isDate='true']"), me.dateFormat );
				}
				
				
				
				tbody.append( rowTag );
				
			} // END DE List
			
			table.prepend( tbody );
			
		}// END Sections
		
	};
	
	me.resetDataEntryForm = function()
	{
		me.activeEventHeaderTag.hide();
		
		// Enable the form for entering data
		me.disableDataEtryForm( false );
		
		// Add logic for [Data Entry form]
		me.resultTest1Tag = me.getDeField( me.de_Testing_ResultTest1 );
		me.resultTest2Tag = me.getDeField( me.de_Testing_ResultTest2 );
		me.resultTestParallel1Tag = me.getDeField( me.de_Testing_ResultParallel1 );
		me.resultTestParallel2Tag = me.getDeField( me.de_Testing_ResultParallel2 );
		me.resultTestResultSDBiolineTag = me.getDeField( me.de_Testing_ResultSDBioline );
		me.resultFinalHIVStatusTag = me.getDeField( me.de_FinalResult_HIVStatus );
		
		me.removeMandatoryForField( me.resultTest2Tag );
		me.removeMandatoryForField( me.resultTestParallel1Tag );
		me.removeMandatoryForField( me.resultTestParallel2Tag );
		me.removeMandatoryForField( me.resultTestResultSDBiolineTag );
		me.hideHIVTestLogicActionFields();

		Util.disableTag( me.resultTest1Tag, false );
		Util.disableTag( me.resultTest2Tag, true );
		Util.disableTag( me.resultTestParallel1Tag, true );
		Util.disableTag( me.resultTestParallel2Tag, true );
		Util.disableTag( me.resultTestResultSDBiolineTag, true );
		Util.disableTag( me.resultFinalHIVStatusTag, true );
		
		
		me.resultTest1Tag.val("");
		me.resultTest2Tag.val("");
		me.resultTestParallel1Tag.val("");
		me.resultTestParallel2Tag.val("");
		me.resultTestResultSDBiolineTag.val("");
		me.resultFinalHIVStatusTag.val("");
		
		// Reset values in the form
		Util.resetForm( me.thisTestDivTag );
		Util.resetForm( me.contactLogEventFormTag );
		Util.resetForm( me.artReferOpenFormTag );
		Util.resetForm( me.artReferCloseFormTag );
		
		
		// Empty fields from "Contat Log" tab
		// -- [Contact Log Attribute] form
		me.contactLogFormTag.find("input[type='text'],select").val("");
		me.contactLogFormTag.find("input[type='checkbox']").prop("checked", false);
		me.contactLogFormTag.find( "span.errorMsg" ).remove();
		me.contactLogFormTag.find("tbody[historyGroupId]").hide();
		me.contactLogFormTag.find("tbody[historyGroupId]").find("td.historyInfo").html("");
		me.contactLogFormTag.find("tbody[groupId]").show();
		me.contactLogFormTag.find("tbody:last").show();
		
		
		me.nextContactLogActionTbTag.hide();
		me.contactLogEventFormTag.find("tbody:last").show();
		me.contactLogEventHistoryTbTag.html("");
		
		
		
		// -- [Contact Log] event form
		me.contactLogEventFormTag.find("input[type='text'],select").val("");
		me.contactLogEventFormTag.find("input[type='checkbox']").prop("checked", false);
		me.contactLogEventFormTag.find( "span.errorMsg" ).remove();
		
		// check if there is any orgunit which is set
		me.showOrgUnitWarningMsg();	

		// Disable some data element fields which data values are filled from client attribute values
		Util.disableTag( me.getDataElementField( me.de_Age ), true );
		Util.disableTag( me.getDataElementField( me.de_BMI ), true );
		me.setHideLogicTag( me.getDataElementField( me.de_PartnerHIVStatus ).closest("tr"), true );
		me.setUp_InitDataValues();
		me.showOpeningTag = false;
	};
	
	me.resetClientForm = function()
	{
		me.addClientFormTabTag.removeAttr( "client" );
		me.addClientFormTabTag.removeAttr( "artHIVTestingEvent" );
		me.addEventFormTag.removeAttr( "event" );
		me.artReferOpenFormTag.removeAttr( "event" );
		me.artReferCloseFormTag.removeAttr( "event" );
		me.previousTestsTag.find("table").html("");
		
		// Empty fields from "This Test" tab
		me.clientAttributeDivTag.find("input[type='text'],select").val("");
		me.clientAttributeDivTag.find("input[type='checkbox']").prop("checked", false);
	};
	
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
		else if( attribute.valueType === "LETTER" )
		{
			inputTag = "<input type='text' letter='true' class='form-control' " + inputKey + "='" + attribute.id + "' mandatory='" + attribute.mandatory + "' >";
		}
		else if( attribute.valueType === "DATE" )
		{
			inputTag = "<input type='text' isDate='true' class='form-control' " + inputKey + "='" + attribute.id + "' mandatory='" + attribute.mandatory + "' >";
		}
		else if( attribute.valueType === "PHONE_NUMBER" )
		{
			inputTag = "<input type='text' phonenumber='true' class='form-control' " + inputKey + "='" + attribute.id + "' mandatory='" + attribute.mandatory + "' >";
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
				
				me.sectionList = jsonData.sections.programStages;
				me.catOptionComboList = jsonData.catOptions.categoryOptions;	
				
				// Get [Contact Log] data elements configuration
				for( var i in me.sectionList )
				{
					var stage = me.sectionList[i];
					if( stage.id == me.stage_ContactLog )
					{
						me.contactLogDeList = stage.programStageDataElements;
					}
				}
				
				
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
				var deResult1 = event[3];
				var cuic = event[4];
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
				rowTag.append( "<td>" + cuic + "</td>" );
				rowTag.append( "<td>" + ouName + "</td>" );
				rowTag.append( "<td>" + deResult1 + "</td>" );
				
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
				var deResult1 = event[3];
				var cuic = event[4];
				var noTest = event[5];
				var ouName = event[6];
				
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
				rowTag.append( "<td>" + cuic + "</td>" );
				rowTag.append( "<td>" + ouName + "</td>" );
				rowTag.append( "<td>" + noTest + "</td>" );
				rowTag.append( "<td>" + deResult1 + "</td>" );
				
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
				var cuic = event[4];
				var ouName = event[6];
				var artVal = event[7];
				artVal = ( artVal == "" ) ? "[None]" : artVal;
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
				rowTag.append( "<td>" + cuic + "</td>" );
				rowTag.append( "<td>" + ouName + "</td>" );
				rowTag.append( "<td>" + artVal + "</td>" );
				rowTag.append( "<td>??</td>" );

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
	
	
	// ---------------------------------------------------------------------------------------------------------------
	// Search Client
	// ---------------------------------------------------------------------------------------------------------------
	
	me.runSearchClients = function( exeFunc )
	{
		if( me.validationObj.checkFormEntryTagsData( me.searchClientFormTag ) )
		{
			Commons.checkSession( function( isInSession ) {
				if ( isInSession ) {
					var clientData = me.getArrayJsonData( "attribute", me.searchClientFormTag );
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
	
	
	// ---------------------------------------------------------------------------------------------------------------
	// Client Registration
	// ---------------------------------------------------------------------------------------------------------------
	
	// Get client JSON data from FORM
	
	me.getClientJsonData = function( formTag )
	{
		var attributeData = me.getArrayJsonData( "attribute", formTag );
		
		var clientData = me.addClientFormTabTag.attr( "client" );
		if( clientData !== undefined ) 
		{
			clientData = JSON.parse( clientData );
			
			// Remove the old attribute values
			me.getRemoveOldAttrValueFromJson( clientData.attributes, formTag );
			
			// Add new attribute values
			clientData.attributes = clientData.attributes.concat( attributeData );
		}
		else
		{
			clientData = { "attributes": attributeData };
		}
		
		return clientData;
	};
	
	me.getRemoveOldAttrValueFromJson = function( jsonData, formTag )
	{
		formTag.find("input,select").each(function(){
			var attrId = $(this).attr("attribute");
			Util.RemoveFromArray( jsonData, "attribute", attrId );
		});
	};
	
	me.getSaveClientURL = function()
	{
		// STEP 1. Get client & event JSON data from attribute of the tab
		
		var attributeData = me.getArrayJsonData( "attribute", me.addClientFormTag );
		var clientId = "";
		
		var clientData = me.addClientFormTabTag.attr( "client" );
		if( clientData !== undefined ) {
			clientData = JSON.parse( clientData );
			clientData.attributes = attributeData;	
			
			clientId = clientData.trackedEntityInstance;
		}
		else
		{
			clientData = { "attributes": attributeData };
		}
		
		var url ="../client/save?ouId=" + me.orgUnitListTag.val();
		
		if( clientId !== "" )
		{
			url += "&clientId=" + clientId;
		}
		
		return url;
	};
	
	me.saveClient = function( formTag, exeFunc, groupId, showSuccessMsg )
	{
		// Disable the button as soon as the button is clicked
		Util.disableTag( me.saveClientRegBtnTag, true );
		
		Commons.checkSession( function( isInSession ) {
			if ( isInSession ) {
				
				var tranlatedMsg = me.translationObj.getTranslatedValueByKey( "clientEntryForm_msg_checkingData" );
				MsgManager.appBlock( tranlatedMsg );
				
				if( me.validationObj.checkFormEntryTagsData( formTag ) )
				{
					$.ajax(
						{
							type: "POST"
							,url: me.getSaveClientURL()
							,dataType: "json"
							,data: JSON.stringify( me.getClientJsonData( formTag ) )
				            ,contentType: "application/json;charset=utf-8"
			            	,beforeSend: function( xhr ) {
			            		if( showSuccessMsg )
		            			{
			            			var tranlatedText = me.translationObj.getTranslatedValueByKey( "clientEntryForm_msg_savingClient" );
									MsgManager.appBlock( tranlatedText + " ..." );
		            			}
				        		
				            }
							,success: function( response ) 
							{
								me.saveClientAfter( response, exeFunc, groupId, showSuccessMsg );								
							}
							,error: function( response )
							{
								if( response.responseJSON == undefined && response.status == 0 )
								{
									if( showSuccessMsg == undefined || showSuccessMsg )
									{
										tranlatedText = me.translationObj.getTranslatedValueByKey( "clientEntryForm_msg_clientSaved" );
										MsgManager.msgAreaShow( tranlatedText, "SUCCESS" );						
										MsgManager.appUnblock();
										alert( tranlatedText );
									}
								}
								else if( response.responseJSON.trackedEntityInstance != undefined )
								{
									me.saveClientAfter( response, exeFunc, groupId, showSuccessMsg );
								}
								else if( response.responseJSON.response != undefined )
								{	
									var conflicts = response.responseJSON.response.conflicts;
									var errorMsg = "";
									for( var i in conflicts )
									{
										errorMsg += " - " + conflicts[i].value + "\n";
									}
									
									for( var t in conflicts )
									{
										var objectId = conflicts[t].object;
										var msg = conflicts[t].value;
										
										for( var t in conflicts )
										{
											var objectId = conflicts[t].object;
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
									}
									
									// Alert error message
									var tranlatedText = me.translationObj.getTranslatedValueByKey( "clientEntryForm_validation_checkErrorFields" );
									alert( tranlatedText );
								}
								else
								{
									var errorMsg = response.responseJSON.message;
									alert( errorMsg );
								}
								// Enable the button
								Util.disableTag( me.saveClientRegBtnTag, false );
								
								// Unblock the form
								MsgManager.appUnblock();
								
								
							}
						}).always( function( data ) {
							// Enable the button
							Util.disableTag( me.saveClientRegBtnTag, false );
						});
				}
				else
				{
					// Enable the button
					Util.disableTag( me.saveClientRegBtnTag, false );
					
					MsgManager.appUnblock();
					var tranlatedText = me.translationObj.getTranslatedValueByKey( "clientEntryForm_validation_checkErrorFields" );
					alert( tranlatedText );
				}
			} else {
				me.showExpireSessionMessage();					
			}
		});
		
	};
	
	me.saveClientAndEvent = function( formTag, stageId, exeFunc )
	{
		// Save [ART Referral status] attributes
		me.saveClient( formTag, function(){
			var jsonClient = JSON.parse( me.addClientFormTabTag.attr("client") );
			
			var jsonEvent = formTag.attr("event");
			var eventId;
			if( jsonEvent !== undefined )
			{
				jsonEvent = JSON.parse( jsonEvent );
				eventId = jsonEvent.event;
			}
			else
			{
				jsonEvent = { 
					"programStage": stageId
					,"status": "COMPLETED"
				};
			}
						
			jsonEvent.dataValues = me.getArrayJsonData( "dataElement", formTag );
			
			me.execSaveEvent( jsonEvent, jsonClient.trackedEntityInstance, eventId, function( response ){
				
				// Set [event] attribute for [ART Refer Opening] Tab
				formTag.attr( "event", JSON.stringify( response ) );
				
				if( exeFunc != undefined ) exeFunc( response );
				
			});
		}, undefined, false );
	};
	
	me.setAndSaveARTLinkageStatusAttrValue = function( exeFunc )
	{
		me.setARTLinkageStatusAttrValue();
		
		me.saveClient( me.artAttributeFormTag, function(){
			var linkageStatusFieldTag = me.getAttributeField( me.attr_LinkageStatus );
			me.linkageStatusLableTag.html( linkageStatusFieldTag.find("option:selected").text() );
			if( exeFunc != undefined ) exeFunc();
		}, undefined, true );
	};
	
	me.setARTLinkageStatusAttrValue = function()
	{
		var artOpeningEvent = me.artReferOpenFormTag.attr("event");
		var artClosureEvent = me.artReferCloseFormTag.attr("event");
		

		var linkageStatusFieldTag = me.getAttributeField( me.attr_LinkageStatus );
		
		var closureLinkageOutcomeTag = me.getDataElementField( me.de_ARTClosureLinkageOutcome );
		
		if( artOpeningEvent != undefined && artClosureEvent == undefined )
		{
			linkageStatusFieldTag.val( "PENDING" );
		}
		else if( artClosureEvent != undefined )
		{
			linkageStatusFieldTag.val( closureLinkageOutcomeTag.val() );
		}
		
		var value = linkageStatusFieldTag.find("option:selected").val();
		value = ( value != "" ) ? linkageStatusFieldTag.find("option:selected").text() : "[none]";
		me.linkageStatusLableTag.html( value );
	};
	
	me.saveClientAfter = function( response, exeFunc, groupId, showSuccessMsg )
	{
		// STEP 1. Set the client as attribute for the form. 
		
		me.addClientFormTabTag.attr( "client", JSON.stringify( response ) );
		
		// STEP 2. Set the header of the [Client Form] Tab
		
		me.generateAddClientFormHeader();

		
		// STEP 3. Disable [Complete Event] button
		
		Util.disableTag( me.completedEventBtnTag, true );
		
		// STEP 3. Display [This Test] Tab if the "status" mode is "Add Client"
		
		if( me.saveClientRegBtnTag.attr("status") == "add" )
		{
			me.showTabInClientForm( me.TAB_NAME_CONTACT_LOG );
			me.showTabInClientForm( me.TAB_NAME_THIS_TEST );
		}
		
		// STEP 3. Set the status "Update" for [Client Form]
		
		me.saveClientRegBtnTag.attr("status", "update");
		
		
		// STEP 3. Set data values based on client attribute values
		me.setUp_InitDataValues();
		
		if( exeFunc !== undefined ) exeFunc(groupId);
		
		// STEP 8. Unblock form
		
		if( showSuccessMsg == undefined || showSuccessMsg )
		{
			tranlatedText = me.translationObj.getTranslatedValueByKey( "clientEntryForm_msg_clientSaved" );
			MsgManager.msgAreaShow( tranlatedText, "SUCCESS" );						
			MsgManager.appUnblock();
			alert( tranlatedText );
		}
	};
	
	
	me.setUp_InitDataValues = function()
	{
		var dobTag = me.getAttributeField( me.attr_DoB );
		var age = "";
		if( dobTag.val() != "" ){
			var birthDateStr = Util.formatDate_DbDate( dobTag.val() );
			age = me.calculateAge( birthDateStr );
		}
		
		// --------------------------------------------------------------------------
		// Add logic for data elements
		
		// Set age value for data element [Age]
		var deAgeTag = me.getDataElementField( me.de_Age );
		deAgeTag.val( age );
		
		// If Age < 8
		var clientTypeTag = me.getDataElementField( me.de_ClientType );
		var partnerKnowsHIVStatusTag = me.getDataElementField( me.de_PartnerKnowsHIVStatus );
		var numberSexualPartnersLast6MonthTag = me.getDataElementField( me.de_NumberSexualPartnersLast6Month );
		if( dobTag.val() != "" && age < 8 )
		{
			// ASSIGN [Individual Test] value for data element [Client type]
			clientTypeTag.val( "LS_SER1" );
			Util.disableTag( clientTypeTag, true );
			
			// Hide [Client partner's CUIC - Option] && [Client partner's CUIC] fields
			me.setHideLogicTag( me.getDataElementField( me.de_partnerCUICOpt ), true );
			me.setHideLogicTag( me.getDataElementField( me.de_partnerCUIC ), true );
			
			// Hide [Partner knows HIV status]
			partnerKnowsHIVStatusTag.val("");
			me.setHideLogicTag( partnerKnowsHIVStatusTag.closest("tr"), true );
			
			// Hide [Number of sexual partners last 6 months]
			numberSexualPartnersLast6MonthTag.val("");
			me.setHideLogicTag( numberSexualPartnersLast6MonthTag.closest("tr"), true );
		}
		else
		{
			// Enable data element [Client type]
			Util.disableTag( clientTypeTag, false );
			
			// Show [Partner knows HIV status]
			me.setHideLogicTag( partnerKnowsHIVStatusTag.closest("tr"), false );
			
			// Show [Number of sexual partners last 6 months]
			me.setHideLogicTag( numberSexualPartnersLast6MonthTag.closest("tr"), false );
		}
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
	
	
	// ---------------------------------------------------------------------------------------------------------------
	// Actions for event ( Create/Update, Complete events )
	// ---------------------------------------------------------------------------------------------------------------
	
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
		 
	};
	
	me.execSaveEvent = function( jsonData, clientId, eventId, exeFunc )
	{
		Commons.checkSession( function( isInSession ) {
			if ( isInSession ) {
				var tranlatedMsg = me.translationObj.getTranslatedValueByKey( "clientEntryForm_msg_checkingData" );
				MsgManager.appBlock( tranlatedMsg );
				
				if( me.validationObj.checkFormEntryTagsData(me.thisTestDivTag) )
				{
					if( eventId == undefined )
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
	
	me.saveEvent = function( jsonData, clientId, eventId, exeFunc )
	{
		var url = me.getSaveEventURL( clientId, eventId );
		
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
	            	if( jsonData.status == "complete" )
            		{
	            		tranlatedText = me.translationObj.getTranslatedValueByKey( "clientEntryForm_msg_completingEvent" );
            		}
	            	else if( eventId != undefined )
            		{
	            		tranlatedText = me.translationObj.getTranslatedValueByKey( "clientEntryForm_msg_editingEvent" );
            		}
	            	else if( eventId == undefined )
            		{
	            		tranlatedText = me.translationObj.getTranslatedValueByKey( "clientEntryForm_msg_creatingEvent" );
            		}

					MsgManager.appBlock( tranlatedText + " ..." );
	            }
				,success: function( response ) 
				{
					me.activeEventHeaderTag.show();
					
					Util.disableTag( me.completedEventBtnTag, false );

					// STEP 4. Unblock form
					var translateMsg = "";
					if( jsonData.status == "complete" )
            		{
						translateMsg = me.translationObj.getTranslatedValueByKey( "clientEntryForm_msg_eventCompleted" );
            		}
					else
					{
						translateMsg = me.translationObj.getTranslatedValueByKey( "clientEntryForm_msg_eventSaved" );		
					}
										
					if( exeFunc !== undefined ) exeFunc( response );
					
					MsgManager.msgAreaShow( translateMsg, "SUCCESS" );
					MsgManager.appUnblock();
					alert( translateMsg );
				}
				,error: function( response )
				{
					if(  response.responseJSON.response !== undefined )
					{	
						var conflicts = response.responseJSON.response.conflicts;
						
						for( var i in conflicts )
						{
							var objectId = conflicts[i].object;
							var msg = conflicts[i].value;
							me.addErrorSpanToField( me.addEventFormTag.find("[dataelement='" + objectId + "']"), msg );
						}
						
						var errorMsgText = me.translationObj.getTranslatedValueByKey( "datatEntryForm_validation_checkErrorFields" );
						MsgManager.msgAreaShow( errorMsgText, "ERROR" );
						alert( errorMsgText );
					}
					else
					{
						var errorMsg = response.responseJSON.message;
						MsgManager.msgAreaShow( errorMsg, "ERROR" );
						alert( errorMsg );
					}
					
					MsgManager.appUnblock();
					
				}
			}).always( function( data ) {
				Util.disableTag( me.saveEventBtnTag, false );
			});
		
	};
	
	me.completeEvent = function( exeFunc )
	{
		var event = JSON.parse( me.addEventFormTag.attr( "event" ) );
		var eventId = event.event;
		
		
		// Update status of event
		
		event.status = "COMPLETED";	
		event.dataValues = me.getArrayJsonData( "dataElement", me.thisTestDivTag );
		
		me.execSaveEvent( event, undefined, eventId, function(){

			// Create empty table and populate data for this event
			
			var tbody = me.createAndPopulateDataInEntryForm( event, me.stage_HIVTesting );
			me.previousTestsTag.find("table").prepend( tbody );
			
			// Reset data entry form
			me.resetDataEntryForm();
			
			Util.disableTag( me.completedEventBtnTag, true );

			// Show 'Save' event button AND show "This test" form
			me.showTabInClientForm( me.TAB_NAME_PREVIOUS_TEST );
			me.showTabInClientForm( me.TAB_NAME_THIS_TEST );
			
			
			// Set [event] attribute for [This test] Tab
			me.addEventFormTag.attr( "event", JSON.stringify( event ) );
			me.addClientFormTabTag.attr( "artHIVTestingEvent", JSON.stringify( event ) );

			
			// Set up Event creating logic
			var artOpeningEvent = me.artReferOpenFormTag.attr("event");
			if( artOpeningEvent !== undefined )
			{
				artOpeningEvent = JSON.parse( artOpeningEvent );
			}
			
			var artClosureEvent = me.artReferCloseFormTag.attr("event");
			if( artClosureEvent !== undefined )
			{
				artClosureEvent = JSON.parse( artClosureEvent );
			}
			
			me.setUp_ContactLogAndARTRefTab( event, [] );
			
			if( exeFunc !== undefined ) exeFunc();
			
		} );
	
	};
	
	
	// -------------------------------------------------------------------------------------------------
	// Show/Hide modules
	// -------------------------------------------------------------------------------------------------
	
	me.showOrgUnitWarningMsg = function()
	{
		if( me.orgUnitListTag.val() === "" || me.orgUnitListTag.val() === null )
		{
			me.selectOrgUnitWarningMsgTag.show();
			Util.disableTag( me.saveClientRegBtnTag, true );
			Util.disableTag( me.updateClientBtnTag, true );
			Util.disableTag( me.saveEventBtnTag, true );
			Util.disableTag( me.completedEventBtnTag, true );
		}
		else
		{
			me.selectOrgUnitWarningMsgTag.hide();
			Util.disableTag( me.saveClientRegBtnTag, false );
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
	
	
	// -------------------------------------------------------------------------------------------------
	// Client details form TAB
	// -------------------------------------------------------------------------------------------------
	
	
	// -------------------------------------------------------------------------------------------------
	// Add new [Client details] form TAB
	
	me.showAddClientForm = function()
	{
		me.storageObj.addItem("subPage", me.PAGE_SEARCH_ADD_CLIENT);
		
		me.resetPageDisplay();
		me.saveClientRegBtnTag.attr("status", "add" );
		me.resetClientForm();
		me.resetDataEntryForm();
		
		// Init attribute fields
		me.setUp_ClientRegistrationFormDataLogic();
		
		
		// Change the Header title && 'Save' buton display name
		var tranlatedText = me.translationObj.getTranslatedValueByKey( "dataEntryForm_headerTitle_addClient" );
		me.addClientFormDivTag.find(".headerList").html(tranlatedText);
		
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
		me.hideTabInClientForm( me.TAB_NAME_CONTACT_LOG );
		me.hideTabInClientForm( me.TAB_NAME_ART_REFER );
		
		// Show "Add Client" form
		me.addClientFormDivTag.show("fast");
		
	};
	
	
	// -------------------------------------------------------------------------------------------------
	// Update new [Client details] form TAB
	
	me.showUpdateClientForm = function( data, selectedEventId )
	{
		me.storageObj.addItem( "subPage", me.PAGE_SEARCH_EDIT_CLIENT );

		// STEP 1. Update the status of client ( "add"/ "update" )
		me.saveClientRegBtnTag.attr("status", "update" );

		// STEP 2. Reset te TAB
		me.resetClientForm();
		me.resetDataEntryForm();
		me.searchResultTbTag.hide();
		me.searchResultTag.hide();
		me.searchClientFormTag.hide();
		
		
		// ------------------------------------------------------------------------------------------------
		// STEP 3. Get events
		
		var events = data.events.events;
		var activeHIVTestingEvent;
		var artHIVTestingEvent;
		var completedHIVTestingEvents = [];
		
		var contactLogEvents = [];
		var artOpeningEvent;
		var artClosureEvent;
		
		for( var i=0; i<events.length; i++ )
		{
			var event = events[i];
			
			// Get [HIV Testing] events
			if( event.programStage == me.stage_HIVTesting )
			{	
				var dataValues = event.dataValues;
				var eventId = event.event;
				
				// Get active event if any
				if( event.status == "ACTIVE" ) // && activeHIVTestingEvent === undefined )
				{
					activeHIVTestingEvent = event;
				}
				// Get completed event list
				else
				{
					completedHIVTestingEvents.push( event );
				}
				
				// Get ART HIV Testing event
				if( artHIVTestingEvent == undefined && me.checkIfARTEvent( event ) )
				{
					artHIVTestingEvent = event;
				}
			}
			// Get [Contact Log] event
			else if( event.programStage == me.stage_ContactLog )
			{
				contactLogEvents.push( event );
			}
			// Get [ART Refer. Opening] event
			else if( event.programStage == me.stage_ARTReferralOpenning )
			{
				artOpeningEvent = event;
			}
			// Get [ART Refer. Closure] event
			else if( event.programStage == me.stage_ARTReferralClosure )
			{
				artClosureEvent = event;
			}
		}

		if( artHIVTestingEvent != undefined ){
			me.addClientFormTabTag.attr( "artHIVTestingEvent", JSON.stringify( artHIVTestingEvent ) );
		}
		

		// ------------------------------------------------------------------------------------------------
		// [Client Attribute] TAB
		
		// STEP 4. Populate Client Registration data		
		me.addClientFormTabTag.attr( "client", JSON.stringify( data.client ) );
		me.populateClientAttrValues( me.addClientFormTabTag, data.client );	

		var lockClientForm = ( completedHIVTestingEvents.lenght > 0 || activeHIVTestingEvent != undefined );
		if( lockClientForm )
		{
			Util.disableForm( me.addClientFormTag, true );
		}
		else
		{
			// STEP 5. Init logic for attribute fields based on attribute values
			me.setUp_ClientRegistrationFormDataLogic();

			// STEP 6. Create header for [Update client] form
			me.generateAddClientFormHeader();
		}
		
		
		// ---------------------------------------------------------------------------------------
		// Set up HIV Testing event data
		
		// STEP 7. Set up data in "Previous Test" tab
		me.setUp_DataInPreviousTestTab( completedHIVTestingEvents, selectedEventId );

		// STEP 8. Set up data in "This Test" tab
		me.setUp_DataInThisTestTab( activeHIVTestingEvent );

		// ---------------------------------------------------------------------------------------
		// STEP 9. Set up data in "Contact Log" tab and "ART Refer" tab
		
		// Set up data in "Contact Log" tab and "ART Refer" tab
		me.setUp_ContactLogAndARTRefTab( artHIVTestingEvent, contactLogEvents, artOpeningEvent, artClosureEvent );
		me.checkAndShowARTReferTab( artHIVTestingEvent );
		
		// ---------------------------------------------------------------------------------------
		// STEP 10. Show [This Test] / [Previous Test] tab if there is a "seleted event id"
		
		if( selectedEventId !== undefined )
		{
			if( activeHIVTestingEvent !== undefined && activeHIVTestingEvent.event == selectedEventId )
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
		// STEP 11. Show form
		// ---------------------------------------------------------------------------------------
				
		me.addClientFormDivTag.show("fast");
		
	};
	
	me.checkIfARTEvent = function( event )
	{
		var artValue = me.getEventDataValue( event, me.de_ReferralGiven_ART );
		return( artValue == "true" );
	};
	
	me.populateClientAttrValues = function( formTag, client )
	{
		var clientDetails = client.attributes;
		
		formTag.find("input[attribute],select[attribute]").each(function(){
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

			me.setValueForInputTag( $(this), value );
				
		});
		
	};
	
	
	me.setValueForInputTag = function( inputTag, value )
	{
		if( inputTag.attr("isDate") === "true" && value != "" )
		{
			value = Util.formatDate_LocalDisplayDate( value );
			inputTag.val( value );
		}
		else if( inputTag.attr("type") == "checkbox" )
		{
			inputTag.prop("checked", value );
		}
		else
		{
			inputTag.val( value );
		}	
	};
	
	// ---------------------------------------------------------------------------------------
	// Setup "Contact Log" TAB
	
	me.setUp_ContactLogAndARTRefTab = function( artHIVTestingEvent, contactLogEvents, artOpeningEvent, artClosureEvent )
	{		
		// STEP 0. Show/Hide history of [Contact log] attribute form
		var consentToContactTag = me.getAttributeField( me.attr_ConsentToContact );
		if( consentToContactTag.val() != "" )
		{
			me.showAttrContactLogHistory();
		}
		
	 	// STEP 1. Populate [Contact Log Event] data( history data )
		me.populateContactLogEventListHistory( contactLogEvents );
			
		// STEP 2. Populate data for [Client referred to ART]
		if( artHIVTestingEvent != undefined )
		{
			var eventDateStr = Util.formatDate_DisplayDate( artHIVTestingEvent.eventDate );
	 		me.artEventInfoTbTag.find("span.dateClientReferredARTOn").html( eventDateStr );
		}
 		
 		// Generate [Time elapse] in header of [ART Ref.] form AND in [ART Closure] form
 		me.populateTimeElapsed( artOpeningEvent, artClosureEvent );
 		
 		// Set [inkageStatus] info
 		me.setARTLinkageStatusAttrValue();
 		
		// STEP 3. Populate data for [ART Refer. Opening] form
		if( artOpeningEvent !== undefined )
		{
			me.artReferOpenFormTag.attr("event", JSON.stringify( artOpeningEvent ) );
			
			// Populate event data
			me.populateDataValuesInEntryForm( me.artReferOpenFormTag, artOpeningEvent );
		}
		
		// STEP 4. Set event data for [ART Refer. Closure] form
		if( artClosureEvent !== undefined )
		{
			me.artReferCloseFormTag.attr("event", JSON.stringify( artClosureEvent ) );
			
			// Populate event data
			me.populateDataValuesInEntryForm( me.artReferCloseFormTag, artClosureEvent );
		}
		
	};
	
	me.populateTimeElapsed = function( artOpeningEvent, artClosureEvent )
	{
 		if( artOpeningEvent != undefined )
 		{
 			var openingEventDate = Util.convertUTCDateToLocalDate( artOpeningEvent.eventDate );
 			
 			var closureEventDate = new Date();
 			if( artClosureEvent != undefined )
 			{
 				closureEventDate = Util.convertUTCDateToLocalDate( artClosureEvent.eventDate );
 			}
 			
 			// Generate [Time elapse] in header of [ART Ref.] form
 	 		var daysElapsed = Util.getDaysTimeElapsed( openingEventDate, closureEventDate );
 	 		me.artEventInfoTbTag.find("span.timeClientReferredARTOn").html( daysElapsed );
 	 		
 	 		// Generate [Time elapse] attribute value for [ART Closure] form
 	 		var timeElapsed = Util.getTimeElapsed( openingEventDate, closureEventDate );
 			me.getAttributeField( me.attr_ARTClosure_TimeElapsed ).val( timeElapsed );
 		}
 		else
 		{
 			me.artEventInfoTbTag.find("span.timeClientReferredARTOn").html( "" );
 			me.getAttributeField( me.attr_ARTClosure_TimeElapsed ).val( "" );
 		}
	};
	
	me.getEventDataValue = function( event, deId )
	{
		var dataValues = event.dataValues;
		var found = Util.findItemFromList( dataValues, "dataElement", deId );
		return ( found !== undefined ) ? found.value : "";
	}
	
	me.checkAndShowARTReferTab = function( eventData )
	{
		me.hideTabInClientForm( me.TAB_NAME_ART_REFER );
		
		if( eventData != undefined )
		{
			// STEP 1. Check IF Final status is positive 
			// 		AND results are received 
			//		AND Referral to ART is given, apply the logic the [Contact Log] and [ART Refer] Tabs
			// ( create ART referral opening event,
			//	 move to contact log tab to force user to complete data points 
			// 	 and move to ART referral tab )
			var artValue = me.getEventDataValue( eventData, me.de_ReferralGiven_ART );
			var finalHIVTestValue = me.getEventDataValue( eventData, me.de_FinalResult_HIVStatus );
			var testResultGivenValue = me.getEventDataValue( eventData, me.de_TestResultsGiven );

			if( finalHIVTestValue == "Positive" && artValue == "true" && testResultGivenValue == "true" )
			{
				// STEP 2. Force user to enter data for [Contact Log] attribute values
				var consentToContactTag = me.getAttributeField( me.attr_ConsentToContact );
				if( consentToContactTag.val() != "" )
				{
					me.showTabInClientForm( me.TAB_NAME_CONTACT_LOG );
					me.showTabInClientForm( me.TAB_NAME_ART_REFER );
				}
				else
				{
					me.showTabInClientForm( me.TAB_NAME_CONTACT_LOG );
				}
				
				// STEP 3. Show [ART Opening] tab
				me.showOpeningTag = true;
			}
		}
		
		// Show [ART Closure] form only when there is one [ART Opening] event
		if( me.artReferOpenFormTag.attr("event") != undefined )
		{
			me.artReferCloseFormTag.show();
			Util.disableForm( me.artReferOpenFormTag, true );
		}
		else
		{
			Util.disableForm( me.artReferOpenFormTag, false );
			me.artReferCloseFormTag.hide();
		}
	};
	
	me.showAttrContactLogHistory = function()
	{
		me.contactLogFormTag.find("tbody:last").hide();
		me.contactLogFormTag.find("tbody[groupId]").each(function(){
			var groupId = $(this).attr("groupId");
			me.showHistoryContactLogDetails( groupId );
		});
		
	};

	me.hideAttrContactLogHistory = function()
	{
		me.contactLogFormTag.find("tbody[historyGroupId]").hide();
		me.contactLogFormTag.find("tbody[groupId]").show();
	}
	
	me.showHistoryContactLogDetails = function( groupId )
	{
		// Hide [Edit Contact Log] form
		me.contactLogFormTag.find("tbody[groupId='" + groupId + "']").hide();
		
		// Show [History] form
		var historyTable = me.contactLogFormTag.find( "tbody[historyGroupId='" + groupId + "']" );
		var historyTag = historyTable.find("td.historyInfo");
		historyTag.html("");
		historyTable.show();
		
		if( groupId == "TTTT4Ll5TdV" ) // Attribute Group [LS LOG 2 - Contact Details]
		{
			var contactPhoneNumberTag = me.getAttributeField( me.attr_ContactPhoneNumber );
		
			var restrictionsContactingTag  = me.getAttributeField( me.attr_RestrictionsContacting );
			var address1Tag = me.getAttributeField( me.attr_Address1 );
			var address2Tag = me.getAttributeField( me.attr_Address2 );
			var address3Tag = me.getAttributeField( me.attr_Address3 );
			var address4Tag = me.getAttributeField( me.attr_Address4 );
			var address5Tag = me.getAttributeField( me.attr_Address5 );
			
			if( contactPhoneNumberTag.val() != "" )
			{
				var restrictionsVal = restrictionsContactingTag.val();
				restrictionsVal = ( restrictionsVal != "" ) ? " - Restrictions: " +  restrictionsVal : "";
				historyTag.append("<p><span class='glyphicon glyphicon-earphone'></span> " + contactPhoneNumberTag.val() + restrictionsVal + "</p>");
			}
			
			historyTag.append("<p><span class='glyphicon glyphicon-list-alt'></span> " + address1Tag.val() + "<br>Landmark: " + address2Tag.val() + "<br>" + address3Tag.val() + ", " + address4Tag.val() + ", " + address5Tag.val() + "</p>");
		}
		else if( groupId == "CqBvWGKEKLP" ) // Attribute Group [LS LOG 3 - Next of kin]
		{
			var kinName =  me.getAttributeField( me.attr_KinName ).val();
			var kinRelation =  me.getAttributeField( me.attr_KinRelation ).val();
			var nextKinPhoneNumberTag = me.getAttributeField( me.attr_NextKinPhoneNumber );
			historyTag.append("<p>" + kinName + " - " + kinRelation + "</p>");
			historyTag.append("<p><span class='glyphicon glyphicon-earphone'></span> " + nextKinPhoneNumberTag.val() + "</p>");
		}

	};
	
	me.populateContactLogEventListHistory = function( eventList )
	{
		me.contactLogEventHistoryTbTag.html( "" );
		
		for( var i in eventList )
		{
			me.populateContactLogEventHistory( eventList[i] );
		}
	};
	 
	me.populateContactLogEventHistory = function( eventJson )
	{
		var eventDate = "";
		if( eventJson.eventDate !== undefined ){
			eventDate = Util.formatDate_DisplayDate( eventJson.eventDate );
		}
		var typeOfContact = "";
		var outcome = "";
		var comments = "";
		var nextAction = "";
		var dueDate = "";
		
		var dataValues = eventJson.dataValues;
		for( var i in dataValues )
		{
			var deId = dataValues[i].dataElement;
			var value = dataValues[i].value;
			
			if( deId == me.de_TypeOfContact )
			{
				typeOfContact = me.getDisplayNameByDataValue( deId, value );
			}
			else if( deId == me.de_Outcome )
			{
				outcome = me.getDisplayNameByDataValue( deId, value );
			}
			else if( deId == me.de_NextAction )
			{
				nextAction = me.getDisplayNameByDataValue( deId, value );
			}
			else if( deId == me.de_DueDate )
			{
				dueDate = me.getDisplayNameByDataValue( deId, value );
			}
			else if( deId == me.de_Comments )
			{
				comments = me.getDisplayNameByDataValue( deId, value );
			}
		}
		
		
		// Add history
		var tbody = $("<tbody></tbody");
		
		var headerTag = $("<tr></tr>");
		headerTag.append("<th>Date: " + eventDate + "</th>");
		headerTag.append("<th>Type: " + typeOfContact + "</th>");
		headerTag.append("<th>Outcome: " + outcome + "</th>");
		
		var rowTag = $("<tr></tr>");
		rowTag.append("<td colspan='3'>" + comments + "</td>");
		
		tbody.append( headerTag );
		tbody.append( rowTag );
		me.contactLogEventHistoryTbTag.prepend( tbody );
		
		// Add Next contact log
		if( nextAction != "" )
		{
			me.nextContactLogActionTbTag.find("span.nextAction").html( nextAction );
			me.nextContactLogActionTbTag.find("span.dueDate").html( dueDate );
			
			me.nextContactLogActionTbTag.show();
		}
	};
	
	me.getDisplayNameByDataValue = function( deId, value )
	{
		var tag = me.getDataElementField( deId );
		if( tag.prop( "tagName" ) == 'SELECT'  )
		{
			value = tag.find("option[value='" + value + "']").text();
		}
		
		return value;
	}
	
	// ---------------------------------------------------------------------------------------
	// Setup data in "This Test" TAB
	// ---------------------------------------------------------------------------------------
	
	me.setUp_DataInPreviousTestTab = function( events, selectedEventId )
	{
		for( var i=0; i<events.length; i++ )
		{
			var event = events[i];
			
			// STEP 2.2. Create tbody for the event and populate data values of an event				
			var tbody = me.createAndPopulateDataInEntryForm( event, me.stage_HIVTesting );
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
		me.addEventFormTag.attr( "event", JSON.stringify( activeEvent ) );
		me.showTabInClientForm( me.TAB_NAME_THIS_TEST );
		
		// Always show [Complete] button
		me.completedEventBtnTag.show();
		
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
			
			// Populate event data
			me.populateDataValuesInEntryForm( me.addClientFormTabTag, activeEvent );
		}
		else
		{
			Util.disableTag( me.completedEventBtnTag, true );
						
			me.activeEventHeaderTag.hide();
		}
		
		// Set up if Data Entry Form can be editable
		me.setUp_IfDataEntryFormEditable( activeEvent );
		
		// Set data values based on client attribute values
		me.setUp_InitDataValues();
		
		Util.disableTag( me.getDataElementField( me.de_Age ), true );
		Util.disableTag( me.getDataElementField( me.de_BMI ), true );

		// Add logic validation for input fields
		me.setUp_DataEntryFormLogic();
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
//					me.saveEventBtnTag.show();
//					me.completedEventBtnTag.show();
					me.activeEventHeaderTag.css( "color","gray" );
				}
				else
				{
					me.disableDataEtryForm( true );
//					me.saveEventBtnTag.hide();
//					me.completedEventBtnTag.hide();
					
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

	me.populateDataValuesInEntryForm = function( tabTag, event )
	{
		tabTag.attr( "event", JSON.stringify( event ) );
		
		var dataValues = event.dataValues;
		for( var i in dataValues )
		{
			var dataValue = dataValues[i];
			var value = dataValue.value;
			
			var inputTag = me.getDataElementField( dataValue.dataElement );
			me.setValueForInputTag( inputTag, value );
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
				var result = me.resultTestResultSDBiolineTag.val();
				if( me.resultTestResultSDBiolineTag.val() == "Indeterminate out of stock" )
				{
					result = "Indeterminate";
				}
				me.resultFinalHIVStatusTag.val( result );
				me.resultFinalHIVStatusTag.closest("td").find("errorMsg").remove();
				
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
		
	me.createAndPopulateDataInEntryForm = function( event, stageId )
	{
		var eventId = event.event;
		var eventDate = event.eventDate;
		var counsellor = me.findCounsellorByEventCatOptComboId( event.attributeCategoryOptions );
		var testResult = me.getEventResult( event );
		
		var tbody = $("<tbody eventId='" + eventId + "' class='separateTb'></tbody>");
		
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
		
		var sections = Util.findItemFromList( me.sectionList, "id", stageId ).programStageSections;
		for( var i in sections )
		{
			rowTag = $("<tr style='display:none;'></tr>");
			rowTag.append("<td colspan='2' style='font-weight:bold;background-color:#dde2e6;'>" + sections[i].displayName + "</td>");
			tbody.append( rowTag );
			
			var deList = sections[i].programStageDataElements;
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
			tbodyTag.removeClass("separateTb");
			
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
				tbodyTag.addClass("separateTb");
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
		formTag.find("input[" + key + "],select[" + key + "],textarea[" + key + "]").each(function(){
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
			else if( item.tagName == "TEXTAREA" )
			{
				value = item.html();
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
		
		// Move to the top of form
		window.scrollTo(0, 0);
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
									me.setDataInReportCell( me.reportName_AllClient,deId, "thisWeek", value );
								}

								
								// STEP 4. Set "Yesterday" data
								// In some cases, yesterday and current date have the same period
								if( peId == yesterdayPeriod ) {
									// Check the Yesterday period and calculate value
									if( value != "" ){
										value = value / 5;
										value = value.toFixed( 2 );

										me.setDataInReportCell( me.reportName_AllClient, deId, "yesterday", value );
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
							me.setDataInReportCell( me.reportName_AllClient, me.de_Tested, "last4weeks", last4WeeksData[me.de_Tested] );
							me.setDataInReportCell( me.reportName_AllClient, me.de_Target, "last4weeks", last4WeeksData[me.de_Target] );
							me.setDataInReportCell( me.reportName_AllClient, me.de_achieved, "last4weeks", last4WeeksData[me.de_achieved] );
							
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

	me.setDataInReportCell = function( clazzTableName, deId, peId, value )
	{
		var colTag = me.reportTblTag.find("tbody." + clazzTableName ).find("td[dataelement='" + deId + "'][period='" + peId + "']");
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

