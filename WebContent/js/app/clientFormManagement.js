

function ClientFormManagement( _mainPage, _metaData )
{
	var me = this;
	me.mainPage = _mainPage;
	me.metaData = _metaData;
	me.storageObj = me.mainPage.storageObj;
	me.translationObj = me.mainPage.translationObj;
	me.validationObj = me.mainPage.validationObj;
	me.inputTagGeneration;
	
	
	// [Client Registration] form	
	me.addNewClientBtnTag = $("#addNewClientBtn");
	me.addClientFormTabTag = $("#addClientFormTab");
	me.addClientFormDivTag = $("#addClientFormDiv");
	me.clientAttributeDivTag = $("#clientAttributeDiv");
	me.addClientFormTag = $("#addClientForm");
	me.saveClientRegBtnTag = $("#saveClientRegBtn");
	me.discardClientRegFormBtnTag = $("#discardClientRegFormBtn");
	me.selectOrgUnitWarningMsgTag = $("#selectOrgUnitWarningMsg");

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
	me.cancelEventBtnTag = $("#cancelEventBtn");
	me.updateClientBtnTag = $("[name='updateClientBtn']");
	me.hideHIVTestLogicActionTag = $("#hideHIVTestLogicAction");

	me.showEventSaveOptionDiaglogBtnTag = $("#showEventSaveOptionDiaglogBtn");
	me.saveEventDialogFormTag = $("#saveEventDialogForm");
	
	
	// [Settings]
	me.orgUnitListTag =  $("#orgUnitList");

	
	// [About]
	me.userFullNameTag = $("[name='userFullName']");
	
	
	// [Common]
	me.divSessionExpireMsgTag =  $( "#divSessionExpireMsg" );
	me.menuIcon = $("button.hamburger");
	me.headerRightSideControlsTag = $("div.headerRightSideControls");
	
	
	// --------------------------------------------------------------------------------------------
	// -- Ids
	
	// [Program Stage] Ids
	me.stage_HIVTesting = "lVglvBnE3TY";
	me.stage_ContactLog = "gmBozy0KAMC";
	me.stage_ARTReferralOpenning = "OSpZnLBMVhr";
	me.stage_ARTReferralClosure = "usEIFQODMxf";

	me.section_TestingMaterial_Id = "SM7CTqPBbCX";

	
	// [Register Attribute] Ids
	me.attrGroup_ClientDetailsAndCUIC = "KgeLi7PFYxe";
	
	me.attr_FirstName = "R9Lw1uNtRuj";
	me.attr_LastName = "TBt2a4Bq0Lx";
	me.attr_DoB = "BvsJfkddTgZ";
	me.attr_DistrictOB = "u57uh7lHwF8";
	me.attr_ClientCUIC = "rw3W9pDCPb2";
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
	me.de_LinkageStatusDropReason = "ZRfojTCqVhc";
	
	me.attrGroupARTLinkageSuccess = "";
	
	// [Data Element Ids]
	
	me.de_Testing_ResultTest1 = "choHDFxMCaU";
	me.de_Testing_ResultTest2 = "KDnhSz51HKS";
	me.de_Testing_ResultParallel1 = "rMh4ZGNzrh1";
	me.de_Testing_ResultParallel2 = "Bqff4skvt4d";
	me.de_Testing_ResultSDBioline = "M11JqgkJt2X";
	me.de_FinalResult_HIVStatus = "UuKat0HFjWS";
	
	me.de_Age = "e4XZKCNJjlc";
	me.de_TimeSinceLastTest = "nrYd6E6BmSP";
	
	me.de_ClientType = "RvYugZqBKoN";
	me.de_CoupleStatus = "Umu8i2QXCZk";
	me.de_partnerCUICOpt = "csHM60DUGkG";
	me.de_partnerCUIC = "UYyCL2xz8Wz";
	me.de_PartnerEventId = "UV2AsoZJ7fw";
	
	me.de_EQCPPTPassed = "H61nmZKhACr";
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
	

	me.de_HIVTestChannel = "quOYwc0SOqD";
	me.de_HIVTestChannel_OtherReason = "Tjw4iDAjyy6";
	me.de_WhatMotivatedHIVTest = "vOrRzjpdQC6";
	me.de_WhatMotivatedHIVTest_OtherReason = "GCl3ORKj1jC";
	me.de_Layer = "fGSXGuPIEOy";
	me.de_Layer_OtherReason = "omugvBULuf0";
	
	
	me.de_Referral_Offered = "r8AftzZCjWP";
	me.de_ReferralGiven_STI  = "hv1oAJf18cE";
	me.de_ReferralGiven_TB  = "a9x8qqtTs0J";
	me.de_ReferralGiven_FP = "BqyBHC6eEFr";
	me.de_ReferralGiven_VMMC = "DbfyDJ04SjL";
	me.de_ReferralGiven_ART = "tUIkmIFMEDS";
	me.de_ReferralGiven_DNAPCR = "ZKWK5UIO9wp";
	
	// [Contact Log] event
	me.de_TypeOfContact = "wzM3bUiPowS";
	me.de_Outcome = "hjpNXAyZ0cm";
	me.de_NextAction = "mcgzEFh5IV8";
	me.de_DueDate = "HcBFZsCt8Sy";
	me.de_Comments = "HaauwE6JkEs";

	// [ART Opening] form
	me.de_ARTOpen_ReferralFacilityName = "E1KAxdya3y5";
	me.de_ARTOpen_OtherSpecialFacilityName = "CLclHLxzl9e";

	// [ART Closure] form
	me.attr_ARTClosure_ReferralFacilityName = "LCLiPzJWVAb";
	me.attr_ARTClosure_OtherSpecialFacilityName = "Ra1Deyvyrbm";
	
	
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
	
	
	me.sectionList = [];
	me.attributeGroupList = [];
	
	
	// ---------------------------------------------------------------------------------------------------------------------------
	// Init methods - Populate data and Setup events for components in HTML page
	// ---------------------------------------------------------------------------------------------------------------------------
	
	me.init = function()
	{
		me.inputTagGeneration = new InputTagGeneration();
		
		// STEP 1. Save the sectionList in memory
		
		me.sectionList = me.metaData.sections.programStages;
		me.catOptionComboList = me.metaData.catOptions.categoryOptions;	
		
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

		var attrGroups = me.metaData.attGroups.trackedEntityAttributeGroups;
		var prgAttributes = me.metaData.programAttributes.programTrackedEntityAttributes;
		me.attributeGroupList = me.generateAttributeGroupList( attrGroups, prgAttributes );
		
		// STEP 3. Generate forms
		
		me.createClientForm();
		
		me.clientDoBTag = me.addClientFormTag.find("[attribute='" + me.attr_DoB + "']");
		me.clientDistrictOBTag = me.addClientFormTag.find("[attribute='" + me.attr_DistrictOB + "']");
		me.clientLastNameTag = me.addClientFormTag.find("[attribute='" + me.attr_LastName + "']");
		me.clientFirstNameTag = me.addClientFormTag.find("[attribute='" + me.attr_FirstName + "']");
		me.clientBirthOrderTag = me.addClientFormTag.find("[attribute='" + me.attr_BirthOrder + "']");
		

		me.resultTest1Tag = me.getDataElementField( me.de_Testing_ResultTest1 );
		me.resultTest2Tag = me.getDataElementField( me.de_Testing_ResultTest2 );
		me.resultTestParallel1Tag = me.getDataElementField( me.de_Testing_ResultParallel1 );
		me.resultTestParallel2Tag = me.getDataElementField( me.de_Testing_ResultParallel2 );
		me.resultTestResultSDBiolineTag = me.getDataElementField( me.de_Testing_ResultSDBioline );
		me.resultFinalHIVStatusTag = me.getDataElementField( me.de_FinalResult_HIVStatus );
	
		
		me.setUp_Events();		
		me.addClientFormTabTag.tabs();
	};
	

	// ----------------------------------------------------------------------------
	// Set up Events
	// ----------------------------------------------------------------------------
	
	me.setUp_Events = function()
	{	
		me.setUp_Events_AddClientForm();

		me.setUp_Events_ContactLogTab();	
		
		me.setUp_Events_ARTReferTab();
			
		me.setUp_Events_DataEntryForm();
		
	};
	
	
	// Add Events for [Add/Edit Client Form]
	
	me.setUp_Events_AddClientForm = function()
	{
		
		// -----------------------------------------------------------------------------------------
		// [Client Details] tab 		

		// Validation for fields in [Add/Update Form] form
		
		me.addClientFormTag.find("input,select").change(function(e){
			me.generateClientCUIC();
		});
		
		// Add [District] of [Contact Log] change event
		var districtTag = me.getAttributeField( me.attr_Address3 );
		districtTag.change( function(){
			me.filterCouncilsByDistrict();
		});
		
		
		// Add [Date picker] for date field
		
		me.addClientFormTag.find("[isDate='true']").each(function(){
			var attrId = $(this).attr("attribute");
			if( attrId == me.attr_DateLastHIVTest )
			{
				Util.monthYearPicker( $(this) );
				$(this).attr( "isMonthYear", true );
			}
			else
			{
				Util.datePicker( $(this) );
			}
			
		});

			
		me.saveClientRegBtnTag.click(function(){
			me.saveClient( me.addClientFormTag, undefined, undefined, true );
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
				
				var changesDiscardedMsg = me.translationObj.getTranslatedValueByKey( "dataEntryForm_tab_clientRegForm_changesDiscarded" );
				MsgManager.msgAreaShow( changesDiscardedMsg, "SUCCESS" );
				
			}
			
			return false;
		});
		
		
		// -----------------------------------------------------------------------------------------
		// Add validation
		me.setUp_validationCheck( me.addClientFormTag.find( 'input,select' ) );
		
	};
	
	me.setUp_Events_ContactLogTab = function()
	{
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
					me.setARTLinkageStatusAttrValue();
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
			jsonEvent.dataValues = Util.getArrayJsonData( "dataElement", me.contactLogEventFormTag );
			
			me.execSaveEvent( jsonEvent, jsonClient.trackedEntityInstance, undefined, function( jsonData ){
				me.contactLogEventFormTag.hide();
				me.populateContactLogEventHistory( jsonData );
				Util.disableTag( me.addContactLogEventBtnTag, false );
			});
			return false;
		});


		// Validation for INPUT fields
		
		me.setUp_validationCheck( me.contactLogFormTag.find( 'input,select,textarea' ) );
		
	};
	
	me.setUp_Events_ARTReferTab = function()
	{
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
						
			jsonEvent.dataValues = Util.getArrayJsonData( "dataElement", me.artReferOpenFormTag );
			
			me.execSaveEvent( jsonEvent, jsonClient.trackedEntityInstance, eventId, function( response ){
				
				// Set [event] attribute for [ART Refer Opening] Tab
				me.artReferOpenFormTag.attr( "event", JSON.stringify( response ) );
				
				me.setAndSaveARTLinkageStatusAttrValue( function(){
					
					var artClosureEvent = me.artReferCloseFormTag.attr("event");
					if( artClosureEvent !== undefined )
					{
						artClosureEvent = JSON.parse( artClosureEvent );
					}
					
					// Generate [Time Elapsed] attribute value for [ART Closure] form
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

				me.artReferCloseFormTag.attr("event", "");
			}
			
			me.setARTLinkageStatusAttrValue();
			if( artClosureEvent === undefined )
			{
				me.artReferCloseFormTag.removeAttr("event");
			}
			
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
		// -----------------------------------------------------------------------------------------
		// Set up events INPUT tags in [New test] form
		
		// Set up events for HIV Test input tags
		me.getDataElementField( me.de_Testing_ResultTest1 ).change( function(){
			var deId = $(this).attr("dataelement");
			me.setUp_DataEntryHIVTestInputTagEvent( deId );	
		});
		
		me.getDataElementField( me.de_Testing_ResultTest2 ).change( function(){
			var deId = $(this).attr("dataelement");
			me.setUp_DataEntryHIVTestInputTagEvent( deId );	
		});
		
		me.getDataElementField( me.de_Testing_ResultParallel1 ).change( function(){
			var deId = $(this).attr("dataelement");
			me.setUp_DataEntryHIVTestInputTagEvent( deId );	
		});
		
		me.getDataElementField( me.de_Testing_ResultParallel2 ).change( function(){
			var deId = $(this).attr("dataelement");
			me.setUp_DataEntryHIVTestInputTagEvent( deId );	
		});
		
		me.getDataElementField( me.de_Testing_ResultSDBioline ).change( function(){
			var deId = $(this).attr("dataelement");
			me.setUp_DataEntryHIVTestInputTagEvent( deId );	
		});
		
		// Client Type
		me.getDataElementField( me.de_ClientType ).change( function(){
			me.setUp_ClientTypeTagLogic();
		});

		// Partner CUIC option
		var partnerCUICOptTag = me.getDataElementField( me.de_partnerCUICOpt );
		partnerCUICOptTag.change( function(){
			me.setUp_PartnerCUICOption();
		});
		
		// Partner Knows HIV Status
		me.getDataElementField( me.de_PartnerKnowsHIVStatus ).change( function(){
			me.setUp_DataElementPartnerKnowHIVStatusLogic();
		});
		
		// Test results given
		me.getDataElementField( me.de_TestResultsGiven ).change( function(){
			me.setUp_logicEntryFormWithData();
			me.setUp_ReferralOfferedLogic();
		});
		
		// Referral offered
		me.getDataElementField( me.de_Referral_Offered ).change( function(){
			me.setUp_logicEntryFormWithData();
			me.setUp_ReferralOfferedLogic();
		});
		
		// TB Screening Conducted
		me.getDataElementField( me.de_TBScreeningConducted ).change( function(){
			me.setUp_DataElementTBScreeningConductedLogic();
		});
		
		// Hide other reson fields for INPUT tags
		me.getDataElementField( me.de_HIVTestChannel ).change( me.setUp_OtherReasonTagLogic );
		me.getDataElementField( me.de_WhatMotivatedHIVTest ).change( me.setUp_OtherReasonTagLogic );
		me.getDataElementField( me.de_Layer ).change( me.setUp_OtherReasonTagLogic );
		
		// BMI
		me.getDataElementField( me.de_Height ).change( me.setUp_DataElementBMI );
		me.getDataElementField( me.de_Weight ).change( me.setUp_DataElementBMI );
		
		// -----------------------------------------------------------------------------------------
		// Set up events for buttons
		
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
					if( jsonEvent.status == "ACTIVE" )
					{
						me.populateDataValuesInEntryForm( me.addEventFormTag, jsonEvent );
						
						// Set data values based on client attribute values
						me.setUp_InitDataValues();
						
						me.checkAndShowCheckedIconForPartnerCUICTag();
						var partnerData = me.addEventFormTag.attr("partnerData");
						if( partnerData != undefined )
						{
							me.setUp_PartnerInfor( JSON.parse( partnerData ) );
						}
					}
				}
				
				var changesDiscardedMsg = me.translationObj.getTranslatedValueByKey( "dataEntryForm_tab_ARTEventForm_changesDiscarded" );
				MsgManager.msgAreaShow( changesDiscardedMsg, "SUCCESS" );
			}
			
			return false;
		});
		

		// Show Dialog to ask users if they want to save or complete the event
		me.showEventSaveOptionDiaglogBtnTag.click( function(){
			if( me.validationObj.checkFormEntryTagsData(me.thisTestDivTag) )
			{
				me.showDialogForSaveEvent();
			}
			else
			{
				Util.disableTag( me.showEventSaveOptionDiaglogBtnTag, false );
				MsgManager.appUnblock();
				var tranlatedText = me.translationObj.getTranslatedValueByKey( "datatEntryForm_validation_checkErrorFields" );
				alert( tranlatedText );
			}
			return false;
		});
		
		
		// Save an event
		me.saveEventBtnTag.click( function(){
			
			me.saveEventDialogFormTag.dialog( "close" );
			
			Util.disableTag( me.showEventSaveOptionDiaglogBtnTag, true );
					
			// Get Json Event data
			
			var client = JSON.parse( me.addClientFormTabTag.attr("client") );
			var event = me.addEventFormTag.attr("event");
			
			if( event !== undefined ){
				event = JSON.parse( event );
			}
			else{
				event = { "programStage": me.stage_HIVTesting };
			}
			
			event.dataValues = Util.getArrayJsonData( "dataElement", me.thisTestDivTag );
			
			// Save Event
			me.execSaveEvent(event, client.trackedEntityInstance, event.event, function( eventJson ){
				
				var partnerCUICOptTag = me.getDataElementField( me.de_partnerCUICOpt );
				var partnerCUICTag = me.getDataElementField( me.de_partnerCUIC );
				var partnerEventId = me.getDataElementField( me.de_PartnerEventId ).val();
				if( partnerCUICOptTag.val() == "2" && partnerCUICTag.val() != "" && partnerEventId != undefined )
				{
					me.savePartnerCUIC();
				}
				
				me.addEventFormTag.attr("event", JSON.stringify( eventJson ));
				me.disableClientDetailsAndCUICAttrGroup( true );
				
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
			me.saveEventDialogFormTag.dialog( "close" );
			var tranlatedText = me.translationObj.getTranslatedValueByKey( "clientEntryForm_msg_aksForCompletingEvent" );
			var result = confirm(tranlatedText);
			if(result)
			{
				var tranlatedText = me.translationObj.getTranslatedValueByKey( "clientEntryForm_msg_completingEvent" );
				MsgManager.appBlock( tranlatedText + " ..." );
				
				me.completeEvent(function(){
					me.addEventFormTag.removeAttr( "eventId" );
					me.addEventFormTag.removeAttr( "event" );
				});
				
				return false;
			}
			
		});
		
		me.cancelEventBtnTag.click(function(){
			me.saveEventDialogFormTag.dialog("close");
		});

		me.setUp_validationCheck( me.thisTestDivTag.find( 'input,select' ) );
		
		me.activeEventHeaderTag = $("#activeEventHeader");
		
	};
	
	me.disableClientDetailsAndCUICAttrGroup = function( disabled )
	{
		Util.disableForm( me.addClientFormTag.find("tbody[groupid=" + me.attrGroup_ClientDetailsAndCUIC + "]" ), disabled );
	};
	
	me.setUp_validationCheck = function( tags )
	{
		tags.change( function() {
			me.validationObj.checkValidations( $(this) );
		});
		
		tags.on('dp.change', function(e){ 
			me.validationObj.checkValidations( $(this) );
		});
		
	};

	
	// ----------------------------------------------------------------------------
	// Add logic for data elements in [This Test] form
	// ----------------------------------------------------------------------------
	
	me.setUp_DataEntryFormInputTagEvent = function()
	{		

		// STEP 1. Hide all tbody and input in [New Test]
		me.addEventFormTag.find("tbody[sectionid]").show();
		me.addEventFormTag.find("tbody[sectionid]").find("input,select").each(function(){
			me.setHideLogicTag( $(this), false );
		});
		
		// STEP 2. Setup logic fields in form
		me.setUp_ClientTypeTagLogic();
		me.setUp_DataElementPartnerKnowHIVStatusLogic();
		me.setUp_DataElementFinalHIVStatusLogic();
		me.setUp_ReferralOfferedLogic();
		me.setUp_DataElementTBScreeningConductedLogic();
		me.setUp_OtherReasonTagLogic();
		me.setUp_DataElementBMI();
		
	}; 
	
	
	me.setUp_DataEntryHIVTestInputTagEvent = function( attrId )
	{
		var clientTypeTag = me.getDataElementField( me.de_ClientType );
		
		if( attrId != undefined && eval( me.addClientFormTabTag.attr("addedLogic") )  )
		{
			if(  clientTypeTag.val() !== "LS_SER3" )
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
				
				// Generate [Couple Status] data value
				me.generateCoupleStatusIfAny();
				
				// Show [If positive, did client disclose knowledge of previous HIV+ status] if final HIV test is Positive
				me.setUp_DataElementFinalHIVStatusLogic();
			}
			else
			{
				me.populateEQCPPTPassedVal();
			}
			
			me.setUp_ReferralOfferedLogic();
		}
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
			me.resultFinalHIVStatusTag.closest("td").find(".errorMsg").remove();
			
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
			me.resultFinalHIVStatusTag.closest("td").find(".errorMsg").remove();
			
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
				me.resultFinalHIVStatusTag.closest("td").find(".errorMsg").remove();
				
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
			// Add mandatory for [Previous knowledge of HIV+ status]
			me.addMandatoryForField( previousKnowledgeHIVPositiveStatusTag );
			me.setHideLogicTag( previousKnowledgeHIVPositiveStatusTag.closest("tr"), false );
		}
		
	};
		
	// Generate [Couple Status] data value
	me.generateCoupleStatusIfAny = function()
	{
		var clientTypeTag = me.getDataElementField( me.de_ClientType );
		var partnerCUICOptTag = me.getDataElementField( me.de_partnerCUICOpt );
		var partnerHIVTest = me.getDataElementField( me.de_partnerCUIC ).attr( "lastHIVTest" );
		var clientHIVTest = me.getDataElementField( me.de_FinalResult_HIVStatus ).val();
		var coupleStatusTag = me.getDataElementField( me.de_CoupleStatus );
		if( clientTypeTag.val() == "LS_SER2" && partnerCUICOptTag.val() == "2" && partnerHIVTest != undefined && clientHIVTest != "" )
		{
			if( clientHIVTest == "Indeterminate" || clientHIVTest == "Indeterminate out of stock" ||
				 partnerHIVTest == "Indeterminate" || partnerHIVTest == "Indeterminate out of stock" )
			{
				coupleStatusTag.val( "IND" );
			}
			else if( partnerHIVTest == clientHIVTest )
			{
				if( clientHIVTest == "Positive" )
				{
					coupleStatusTag.val( "CON" );
				}
				else if( clientHIVTest == "Negative" )
				{
					coupleStatusTag.val( "NEG" );
				}
			}
			else
			{
				coupleStatusTag.val( "DIS" );
			}
		}
		else
		{
			coupleStatusTag.val( "" );
		}
	};
	

	me.setUp_ReferralOfferedLogic = function()
	{
		var jsonClient = me.addClientFormTabTag.attr("client");
		var gender = "";
		if( jsonClient != undefined )
		{
			jsonClient = JSON.parse( jsonClient );
			gender = me.getAttributeValue( jsonClient, me.attr_Sex );
		}
		
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
			me.setHideLogicTag( referralGivenSTITag.closest("tr"), false );
			me.setHideLogicTag( referralGivenTBTag.closest("tr"), false );
			me.setHideLogicTag( referralGivenFPTag.closest("tr"), false );
			me.setHideLogicTag( referralGivenDNAPCRTag.closest("tr"), false );
			

			if( resultFinalHIVStatusTag.val() == "Positive" && testResultsGivenTag.val() == "true" )
			{
				me.setHideLogicTag( referralGivenARTTag.closest("tr"), false );
			}
			else if( resultFinalHIVStatusTag.val() == "Negative" )
			{
				me.setHideLogicTag( referralGivenPRePNegativeTag.closest("tr"), false );
			}
			
			if( gender == "Male" )
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
		var coupleStatusTag = me.getDataElementField( me.de_CoupleStatus );
		var EQCPPTPassedTag = me.getDataElementField( me.de_EQCPPTPassed );
		var resultTest1Tag = me.getDataElementField( me.de_Testing_ResultTest1 );
		var resultTest2Tag = me.getDataElementField( me.de_Testing_ResultTest2 );
		
		// Hide [Client partner's CUIC - Option] && [Client partner's CUIC] fields
		me.setHideLogicTag( partnerCUICOptTag, true );
		me.setHideLogicTag( partnerCUICTag, true );
		me.setHideLogicTag( coupleStatusTag, true );
		me.setHideLogicTag( EQCPPTPassedTag, true );
		
		
		// Individual
		if( clientTypeTag.val() == "LS_SER1" )
		{
			partnerCUICOptTag.val("");
			partnerCUICTag.val("");
			partnerCUICTag.closest( "td" ).find("span.partnerInfo").html("");
			partnerCUICTag.closest( "td" ).find("span.partnerInfo").hide();
		}
		// Couple test
		else if( clientTypeTag.val() == "LS_SER2" )
		{
			
			me.setHideLogicTag( partnerCUICOptTag, false );
			me.setHideLogicTag( coupleStatusTag, false );
			if( partnerCUICOptTag.val() == "" )
			{
				me.setHideLogicTag( partnerCUICTag, true ); 
			}
			else
			{
				me.setHideLogicTag( partnerCUICTag, false ); 
			}
		}
		// EQC / PPT
		else if( clientTypeTag.val() == "LS_SER3" )
		{
			partnerCUICOptTag.val("");
			partnerCUICTag.val("");
		
			Util.disableTag( resultTest1Tag, false ); 
			Util.disableTag( resultTest2Tag, false );
			
			// STEP 1. Hide all tbody and input in [New Test]
			me.addEventFormTag.find("tbody[sectionid]").hide();
			me.addEventFormTag.find("tbody[sectionid]").find("input,select").each(function(){
				me.setHideLogicTag( $(this), true );
			});
			
			// Show [Testing Material] section in [New Test]
			me.addEventFormTag.find("tbody[sectionid='" + me.section_TestingMaterial_Id + "']").show();
			me.addEventFormTag.find("tbody[sectionid='" + me.section_TestingMaterial_Id + "']").find("input,select").each(function(){
				me.setHideLogicTag( $(this), false );
			});
						
			
			// STEP 2. Show [Client Type] field
			var clientInfoTb = clientTypeTag.closest("tbody");
			clientInfoTb.show();
			me.setHideLogicTag( clientTypeTag, false );
			
			// STEP 2. Show [EQC / PPT Passed] field
			clientInfoTb = EQCPPTPassedTag.closest("tbody");
			clientInfoTb.show();
			me.setHideLogicTag( EQCPPTPassedTag, false );
			
			// STEP 3. Hide all fields in [Today] section
			var todayTestTb = resultTest1Tag.closest("tbody");
			todayTestTb.show();
			me.setHideLogicTag( resultTest1Tag, false );
			me.setHideLogicTag( resultTest2Tag, false );
			
			me.addEventFormTag.find("tbody[sectionid].hideHeader").find("tr:not([header])").hide();
			
			me.addEventFormTag.find("tbody[sectionid]").find("input,select").each(function(){
				if( $(this).attr("dataelement") != me.de_ClientType 
						&&  $(this).attr("dataelement") != me.de_EQCPPTPassed 
						&& $(this).attr("dataelement") != me.de_Testing_ResultTest1 
						&& $(this).attr("dataelement") != me.de_Testing_ResultTest2 )
				{
					 $(this).val("");
				}
			});
			
			// Reset data of [Testing Material] section in [New Test]
			me.addEventFormTag.find("tbody[sectionid='" + me.section_TestingMaterial_Id + "']").find("input,select").each(function(){
				$(this).val("");
			});
			// Show header [Testing Material]
			me.addEventFormTag.find("tbody[sectionid='" + me.section_TestingMaterial_Id + "']").find("tr[header]").show();
		}
		
	};
	

	// Set value for data element field [EQC/PPT Passed]
	me.populateEQCPPTPassedVal = function()
	{
		var jsonClient = JSON.parse( me.addClientFormTabTag.attr("client") );
		var lastName = me.getAttributeValue( jsonClient, me.attr_LastName );
		
		var EQCPPTPassedTag = me.getDataElementField( me.de_EQCPPTPassed );
		if( me.resultTest1Tag.val() != "" && me.resultTest2Tag.val() != "" )
		{
			if( ( lastName == "POS" && me.resultTest1Tag.val() == "Positive" && me.resultTest1Tag.val() ==  me.resultTest2Tag.val() )
				 || ( lastName == "NEG" && me.resultTest1Tag.val() == "Negative" && me.resultTest1Tag.val() ==  me.resultTest2Tag.val() ) )
			{
				EQCPPTPassedTag.val("true");
			}
			else
			{
				EQCPPTPassedTag.val("false");
			}
		}
		else
		{
			EQCPPTPassedTag.val("");
		}
	}
	
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
	
	me.setUp_PartnerCUICOption = function()
	{
		var partnerCUICOptTag = me.getDataElementField( me.de_partnerCUICOpt );
		var partnerCUICTag = me.getDataElementField( me.de_partnerCUIC );
		
		if( partnerCUICOptTag.val() != "" )
		{
			if( partnerCUICOptTag.val() == "2" )
			{
				// Generate data for [Partner CUIC]
				me.populateParterCUIC();
			}
			else
			{
				me.checkAndShowCheckedIconForPartnerCUICTag();
			}
			me.setHideLogicTag( partnerCUICTag, false );
		}
		else
		{
			partnerCUICTag.val("");
			me.setHideLogicTag( partnerCUICTag, true );
		}
	};
	
	me.setUp_ARTClosureForm = function()
	{
		var closureLinkageOutcomeTag = me.getDataElementField( me.de_ARTClosureLinkageOutcome );
		var droppedReasonTag = me.getDataElementField( me.de_LinkageStatusDropReason );
		
		if( closureLinkageOutcomeTag.val() == "" )
		{
			me.artReferCloseFormTag.find("input,select").each(function(){
				me.setHideLogicTag( $(this), true);
			});
		}
		else if( closureLinkageOutcomeTag.val() == "SUCCESS" )
		{
			me.artReferCloseFormTag.find("input,select").each(function(){
				me.setHideLogicTag( $(this), false);
			});
			
			me.setHideLogicTag( droppedReasonTag, true);
		}
		else if( closureLinkageOutcomeTag.val() == "DROPPED" )
		{
			me.artReferCloseFormTag.find("input,select").each(function(){
				me.setHideLogicTag( $(this), true);
			});
			
			me.setHideLogicTag( droppedReasonTag, false);
		}

		me.setHideLogicTag( closureLinkageOutcomeTag, false);
		

		// Show/Hide [Other facility name]
		var closeReferFacilityNameTag = me.getAttributeField( me.attr_ARTClosure_ReferralFacilityName );
		var specialOtherFacilityNameTag = me.getAttributeField( me.attr_ARTClosure_OtherSpecialFacilityName );
		me.setHideLogicTag( specialOtherFacilityNameTag, !( closeReferFacilityNameTag.val() == "Other" ) );
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
		me.createDataEntryForm();
		
		// Remove header of [ART Attribute] form
		me.artAttributeFormTag.find("tr[header]").remove();
		
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
		
		// Hide Councils list in [Contact Log] attribute form
		me.filterCouncilsByDistrict();
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
					
					var inputTag = me.inputTagGeneration.generateInputTag( attribute, "attribute" );
					
					var inputColTag = $("<td colspan='2'></td>");
					inputColTag.append( inputTag );
					rowTag.append( inputColTag );
					tbody.append( rowTag );
					
				} // END Attribute List
				
				if( addHistoryDiv )
				{
					// Add Action bar for each section
					var actionTag = $("<tr class='actionBar' style='display:none;'></tr>");
					actionTag.append("<th style='width:20px;' class='actionCell'><button class='discardBtn imgBtn'><span class='glyphicon glyphicon-ban-circle'></span></button></th>");
					actionTag.append("<th colspan='2'><span style='float:left;'>" + translatedDiscardChanges + "</span><span style='float:right;'>" + translatedSaveChanges + "</span></th>");
					actionTag.append("<th style='width:20px;' class='actionCell'><button class='saveBtn imgBtn'><span class='glyphicon glyphicon-floppy-disk'></span></button></th>");	
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
	
	
	// Create [Data Entry form]
	
	me.createDataEntryForm = function()
	{
		// ---------------------------------------------------------------------
		// STEP 0. Create the [Created by] message for active event
		// ---------------------------------------------------------------------
		
		var translatedByText = me.translationObj.getTranslatedValueByKey( "dataEntryForm_tab_thisTest_msg_createdBy" );	
		me.addEventFormTag.closest("form").prepend( "<div id='activeEventHeader' class='testMsg'>" + translatedByText + " '<span>" + me.userFullNameTag.html() + "</span>'</div>" );
		
		
		// ---------------------------------------------------------------------
		// STEP 1. Create the [Entry form] tables
		// ---------------------------------------------------------------------
		
		me.generateDataEntryFormTable( me.addEventFormTag, me.stage_HIVTesting );
		me.generateDataEntryFormTable( me.artReferOpenFormTag, me.stage_ARTReferralOpenning );
		me.generateDataEntryFormTable( me.artReferCloseFormTag, me.stage_ARTReferralClosure );
		
		
		// ---------------------------------------------------------------------
		// [New Test] Tab
		// ---------------------------------------------------------------------
		
		// Set readonly for [auto-fill-data] fields
		Util.readonlyTag( me.getDataElementField( me.de_partnerCUIC ) );
		Util.readonlyTag( me.getDataElementField( me.de_CoupleStatus ) );
		Util.readonlyTag( me.getDataElementField( me.de_Age ) );
		Util.readonlyTag( me.getDataElementField( me.de_BMI ) );
		Util.readonlyTag( me.getDataElementField( me.de_TimeSinceLastTest ) );
		
		
		// Disable some DEs in form. Will add logic for these DE by using 'change' event		
		var resultTest1Tag = me.getDataElementField( me.de_Testing_ResultTest1 );
		var resultTest2Tag = me.getDataElementField( me.de_Testing_ResultTest2 );
		var resultTestParallel1Tag = me.getDataElementField( me.de_Testing_ResultParallel1 );
		var resultTestParallel2Tag = me.getDataElementField( me.de_Testing_ResultParallel2 );
		var resultTestResultSDBiolineTag = me.getDataElementField( me.de_Testing_ResultSDBioline );
		var resultFinalHIVStatusTag = me.getDataElementField( me.de_FinalResult_HIVStatus );
		
		if( resultTest1Tag.length > 0 && resultTest2Tag.length > 0 && resultTestParallel1Tag.length > 0 
				&& resultTestParallel2Tag.length > 0 && resultTestResultSDBiolineTag.length > 0 
				&& resultFinalHIVStatusTag.length > 0 )
		{
			 me.addClientFormTabTag.attr( "addedLogic", true );

			 // Add "mandatory" validation for "Test 1" field
			 
			 me.addMandatoryForField( resultTest1Tag );

			 Util.disableTag( resultFinalHIVStatusTag, true ); 
			 me.addMandatoryForField( resultFinalHIVStatusTag );
		}
		else
		{
			me.addClientFormTabTag.attr("addedLogic", false );
		}
		
		// ---------------------------------------------------------------------
		// Partner information
		
		// Add details icon for Partner CUIC tag
		var imgTag = $( "<span class='glyphicon glyphicon-ok form-control-feedback partnerDetails' style='color:green;padding-top: 8px;padding-right: 10px;'></span>"  );
		var partnerCUICTag = me.getDataElementField( me.de_partnerCUIC );
		partnerCUICTag.closest( "td" ).append( imgTag );
		partnerCUICTag.closest( "td" ).css( "position", "relative" );
		partnerCUICTag.closest( "td" ).append("<span style='display:none;' class='partnerInfo'></span>");
		
		// Set [Partner Event UID] field hidden
		var partnerEventIdTag = me.getDataElementField( me.de_PartnerEventId );
		partnerEventIdTag.attr( "type", "hidden" );
		partnerEventIdTag.closest("tr").find("td").hide();
		
		
		// ---------------------------------------------------------------------
		// [Contact Log] tab
		// ---------------------------------------------------------------------
		
		// Generate data elements for [Contact Log] event form
		for( var i in me.contactLogDeList )
		{
			var psDE = me.contactLogDeList[i];
			var deId = psDE.dataElement.id;
			
			var colTag = me.contactLogEventFormTag.find("[dataelementtag='" + deId + "']");
			var inputTag = me.inputTagGeneration.generateInputTag( psDE.dataElement, "dataelement" );
			colTag.append( inputTag );
			
			if( psDE.compulsory == "true" )
			{
				me.addMandatoryForField( inputTag );
			}
		}
		
		
		// Add "DATE" picker for "Date" field
		me.addContactLogEventFormTag.find("input[isDate='true']").each(function(){
			if( $(this).attr("dataelement") == me.de_DueDate )
			{
				Util.dateFutureOnlyPicker( $(this) );
			}
			else
			{
				Util.datePicker( $(this) );
			}
		});
		
		
		// ---------------------------------------------------------------------
		// [ART Opening] form
		// ---------------------------------------------------------------------
		
		// Set autocompleted for [Referral facility name]
		var referralFacilityNameTag = me.getDataElementField( me.de_ARTOpen_ReferralFacilityName );
		Util.setAutoCompleteTag( referralFacilityNameTag );
		
		// Add event for [Referral facility name]
		var specialOtherFacilityNameTag = me.getDataElementField( me.de_ARTOpen_OtherSpecialFacilityName );
		referralFacilityNameTag.change(function(){
			if( referralFacilityNameTag.val() == "Other" )
			{
				me.setHideLogicTag( specialOtherFacilityNameTag, false ); 
			}
			else
			{
				me.setHideLogicTag( specialOtherFacilityNameTag, true ); 
			}
		});

		//Add "DATE" picker for "Date" field
		me.artReferOpenFormTag.find("input[isDate='true']").each(function(){
			Util.datePicker( $(this) );
		});
		
		// Set mandatory for attributes in form
		me.artReferOpenFormTag.find("input[attribute],select[attribute]").each(function(){
			me.addMandatoryForField( $(this) );
		});
		
		
		// ---------------------------------------------------------------------
		// [ART Closure] form
		// ---------------------------------------------------------------------
		
		// Resolve [ART Closure] entry forms
		me.mergeARTAttributeFormAndEntryForm( me.artReferCloseFormTag );
		
		// Set autocompleted for [Referral facility name] in [ART Closure] form
		var closeReferFacilityNameTag = me.getAttributeField( me.attr_ARTClosure_ReferralFacilityName );
		Util.setAutoCompleteTag( closeReferFacilityNameTag );
		
		//  Set mandatory for attributes in form
		me.artReferCloseFormTag.find("input[attribute],select[attribute]").each(function(){
			me.addMandatoryForField( $(this) );
		});
		
		// Remove mandatory for attribute [Referral Facility Name] field
		me.removeMandatoryForField( me.getAttributeField( me.attr_ARTClosure_ReferralFacilityName ) );
		
		//Add "DATE" picker for "Date" field
		me.artReferCloseFormTag.find("input[isDate='true']").each(function(){
			Util.datePicker( $(this) );
		});
		
		// Linkage Status event
		var closureLinkageOutcomeTag = me.getDataElementField( me.de_ARTClosureLinkageOutcome );
		closureLinkageOutcomeTag.change( function(){
			me.setUp_ARTClosureForm();
			
		});

		// Add event for [Referral facility name]
		var closeReferralFacilityNameTag = me.getAttributeField( me.attr_ARTClosure_ReferralFacilityName );
		var closeSpecialOtherFacilityNameTag = me.getAttributeField( me.attr_ARTClosure_OtherSpecialFacilityName );
		closeReferralFacilityNameTag.change(function(){
			if( closeReferralFacilityNameTag.val() == "Other" )
			{
				me.setHideLogicTag( closeSpecialOtherFacilityNameTag, false ); 
			}
			else
			{
				me.setHideLogicTag( closeSpecialOtherFacilityNameTag, true ); 
			}
		});
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
				tbodyTag.removeClass( "hideHeader" );
				
				tbodyTag.find("tr.actionBar").show();
			}
			// Hide the selected event
			else
			{
				imgTag.attr( "src", "../images/tab_right.png" );
				imgTag.removeClass('arrowDownImg');
				imgTag.addClass('arrowRightImg');
				tbodyTag.find("tr:not([header])").hide("fast");
				tbodyTag.addClass( "hideHeader" );
				
				tbodyTag.addClass("separateTb");
				tbodyTag.find("tr.actionBar").hide();
			}
			
		});

	};
	
	me.setUp_ClientRegistrationFormValidation = function()
	{
		// Disable [Client CUIC] field. The value of this attribute will be generated from another attribute values		
		Util.disableTag( me.getAttributeField( me.attr_ClientCUIC ), true );
		
		// Add [Delete] button for [Date Of Birth] field
		var dobTag = me.getAttributeField( me.attr_DoB );
		dobTag.attr( "readonly", true );
		
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
			keyPopulationTag.val("");
			
			// Only when data of client is saved, the data values of [New Test] get changed
			var jsonClient = me.addClientFormTabTag.attr("client");
			var gender = "";
			if( jsonClient != undefined )
			{
				jsonClient = JSON.parse( jsonClient );
				var gender = me.getAttributeValue( jsonClient, me.attr_Sex  );
				if( gender == sexTag.val() )
				{
					var circumcisedTag = me.getDataElementField( me.de_circumcisedTag );
					circumcisedTag.val("");
				}
			}
			
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
		var referralGivenVMMCTag = me.getDataElementField( me.de_ReferralGiven_VMMC );
		var referralOfferedTag = me.getDataElementField( me.de_Referral_Offered );
		
		// Reset option values for attribute [Key Population]
		keyPopulationTag.find("option[value='MSMSW']").hide();
		keyPopulationTag.find("option[value='MSMNONSW']").hide();
		keyPopulationTag.find("option[value='FSW']").hide();

		// Only when data of client is saved, the data values of [New Test] get changed
		var jsonClient = me.addClientFormTabTag.attr("client");
		var dataSaved = false;
		if( jsonClient != undefined )
		{
			jsonClient = JSON.parse( jsonClient );
			var gender = me.getAttributeValue( jsonClient, me.attr_Sex  );
			if( gender == sexTag.val() )
			{
				dataSaved == true;
			}
		}
		
		if( dataSaved )
		{
			// Reset data element [Circumcised]
			me.setHideLogicTag( circumcisedTag.closest("tr"), false );
		}
		
		if( sexTag.val() == "Female" ) // If Sex = Female, 		
		{
			// Show option values [FSW] of attribute [Key Population]
			keyPopulationTag.find("option[value='FSW']").show();
			
			if( dataSaved )
			{
				// Hide data element [Circumcised]
				me.setHideLogicTag( circumcisedTag.closest("tr"), true );
				// Hide [Referral to VMMC]
				me.setHideLogicTag( referralGivenVMMCTag.closest("tr"), true );
			}
			
		}
		else if( sexTag.val() == "Male" && dataSaved ) // If Sex = Male, HIDE FSW
		{
			// Show option values [MSM] of attribute [Key Population]
			keyPopulationTag.find("option[value='MSMSW']").show();
			keyPopulationTag.find("option[value='MSMNONSW']").show();
			
			if( referralOfferedTag.val() == "true" )
			{
				// Hide [Referral to VMMC]
				me.setHideLogicTag( referralGivenVMMCTag.closest("tr"), false );
			}
			
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
			age = Util.calculateAge( birthDateStr );
		}
				
		// If [age > 17], HIDE attribute [PP OVC]
		var ppocvTag = me.getAttributeField( me.attr_PPOVC );
		if( age > 17 )
		{
			me.setHideLogicTag( ppocvTag.closest("tr"), true );
		}
		else
		{
			me.setHideLogicTag( ppocvTag.closest("tr"), false );
		}
	};
	
	me.getAttributeField = function( attrId )
	{
		return me.addClientFormTabTag.find( "input[attribute='" + attrId + "'],select[attribute='" + attrId + "']" );
	}
	
	
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
				tbodyTag.removeClass( "hideHeader" );
			}
			else
			{
				imgTag.attr( "src", "../images/tab_right.png" );
				imgTag.removeClass('arrowDownImg');
				imgTag.addClass('arrowRightImg');
				tbodyTag.find("tr:not([header])").hide("fast");
				tbodyTag.addClass("separateTb");
				tbodyTag.addClass( "hideHeader" );
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
				
				inputTag = me.inputTagGeneration.generateInputTag( de, "dataelement" );
				
				var inputColTag = $("<td colspan='2'></td>");
				inputColTag.append( inputTag );
				rowTag.append( inputColTag );
				
				// Add "DATE" picker for "Date" field
//				if( de == me.de_DueDate )
//				{
					Util.dateFuturePicker( rowTag.find("input[isDate='true']") );
//				}
//				else
//				{
//					Util.datePicker( rowTag.find("input[isDate='true']") );
//				}
				
				
				
				tbody.append( rowTag );
				
			} // END DE List
			
			table.prepend( tbody );
			
		}// END Sections
		
	};
	
	me.resetDataEntryForm = function()
	{
		// ---------------------------------------------------------------------
		// [New Test] Tab
		
		me.setUp_DataEntryFormInputTagEvent();
		
		// Show all tbody and input in [New Test]
		me.addEventFormTag.closest("tbody[sectionid]").show();
		me.addEventFormTag.find("tbody[sectionid]").find("input,select").each(function(){
			me.setHideLogicTag( $(this), false );
		});
		
		me.activeEventHeaderTag.hide();
		
		// Enable the form for entering data
		me.disableDataEtryForm( false );
		
		// Add logic for [Data Entry form]
		var resultTest1Tag = me.getDataElementField( me.de_Testing_ResultTest1 );
		var resultTest2Tag = me.getDataElementField( me.de_Testing_ResultTest2 );
		var resultTestParallel1Tag = me.getDataElementField( me.de_Testing_ResultParallel1 );
		var resultTestParallel2Tag = me.getDataElementField( me.de_Testing_ResultParallel2 );
		var resultTestResultSDBiolineTag = me.getDataElementField( me.de_Testing_ResultSDBioline );
		var resultFinalHIVStatusTag = me.getDataElementField( me.de_FinalResult_HIVStatus );
		
		me.removeMandatoryForField( resultTest2Tag );
		me.removeMandatoryForField( resultTestParallel1Tag );
		me.removeMandatoryForField( resultTestParallel2Tag );
		me.removeMandatoryForField( resultTestResultSDBiolineTag );
		me.hideHIVTestLogicActionFields();
		
		
		// Disable some data element fields which data values are filled from client attribute values
		
		Util.disableTag( resultTest1Tag, false );
		Util.disableTag( resultTest2Tag, true );
		Util.disableTag( resultTestParallel1Tag, true );
		Util.disableTag( resultTestParallel2Tag, true );
		Util.disableTag( resultTestResultSDBiolineTag, true );
		Util.disableTag( resultFinalHIVStatusTag, true );
		
		resultTest1Tag.val("");
		resultTest2Tag.val("");
		resultTestParallel1Tag.val("");
		resultTestParallel2Tag.val("");
		resultTestResultSDBiolineTag.val("");
		resultFinalHIVStatusTag.val("");
		me.getDataElementField( me.de_partnerCUIC ).val("");
		me.getDataElementField( me.de_TimeSinceLastTest ).val("");
		
				
		// Reset values in the form
		
		Util.resetForm( me.thisTestDivTag );
		Util.resetForm( me.contactLogEventFormTag );
		Util.resetForm( me.artReferOpenFormTag );
		Util.resetForm( me.artReferCloseFormTag );
		
		
		// ---------------------------------------------------------------------
		// [Contat Log] tab
		
		// -- [Contact Log Attribute] form
		me.contactLogFormTag.find("input[type='text'],select").val("");
		me.contactLogFormTag.find("input[type='checkbox']").prop("checked", false);
		me.contactLogFormTag.find( "span.errorMsg" ).remove();
		me.contactLogFormTag.find("tbody[historyGroupId]").hide();
		me.contactLogFormTag.find("tbody[historyGroupId]").find("td.historyInfo").html("");
		me.contactLogFormTag.find("tbody[groupId]").show();
		me.contactLogFormTag.find("tbody:last").show();
		
		// Hide [Next Contact Log] infor
		me.nextContactLogActionTbTag.hide();
		
		// Show the [Contact Log Event] form 
		me.contactLogEventFormTag.find("tbody:last").show();
		// Reset [Contact Log] history table
		me.contactLogEventHistoryTbTag.html("");
		
		// Reset [Contact Log Event] form
		me.contactLogEventFormTag.find("input[type='text'],select").val("");
		me.contactLogEventFormTag.find("input[type='checkbox']").prop("checked", false);
		me.contactLogEventFormTag.find( "span.errorMsg" ).remove();
		
		// Check if there is any orgunit which is set
		me.showOrgUnitWarningMsg();	

		// Hide [Partner HIV Status]
		me.setHideLogicTag( me.getDataElementField( me.de_PartnerHIVStatus ).closest("tr"), true );
		
		// Set init data values
		me.showOpeningTag = false;
		
		
		// ---------------------------------------------------------------------
		// [Opening ART Refer] Tab
		
		var noneStatusStr = me.translationObj.getTranslatedValueByKey( "artRefer_tab_msg_statusNone" );
    	me.linkageStatusLableTag.html( "[" + noneStatusStr + "]" );
		
		// Reset values for fields
		me.artReferOpenFormTag.find("input,select").each(function(){
			$(this).val("");
		});
		
		// Hide [If other, specify] facility name
		var specialOtherFacilityNameTag = me.getDataElementField( me.de_ARTOpen_OtherSpecialFacilityName );
		me.setHideLogicTag( specialOtherFacilityNameTag, true );
		
		
		// ---------------------------------------------------------------------
		// [Closure ART Refer] Tab
		
		// Hide fields in [AR Closure] form, except [Linkage outcome] field
		me.artReferCloseFormTag.find("input,select").each(function(){
			if( $(this).attr("dataelement") != me.de_ARTClosureLinkageOutcome )
			{
				me.setHideLogicTag( $(this), true);
			}
			$(this).val("");
		});

		// Hide [If other, specify] facility name
		var closeSpecialOtherFacilityNameTag = me.getAttributeField( me.attr_ARTClosure_OtherSpecialFacilityName );
		me.setHideLogicTag( closeSpecialOtherFacilityNameTag, true );
		
	};
	
	me.resetClientForm = function()
	{
		me.disableClientDetailsAndCUICAttrGroup( false );
		
		// Disable [Client CUIC] field. The value of this attribute will be generated from another attribute values		
		Util.disableTag( me.getAttributeField( me.attr_ClientCUIC ), true );
		
		me.addClientFormTabTag.removeAttr( "client" );
		me.addClientFormTabTag.removeAttr( "artHIVTestingEvent" );
		
		me.addEventFormTag.removeAttr( "event" );
		me.addEventFormTag.removeAttr( "partnerData" );
		
		var partnerCUICTag = me.getDataElementField( me.de_partnerCUIC );
		partnerCUICTag.removeAttr("title" );
		partnerCUICTag.removeAttr("lastHIVTest" );
		partnerCUICTag.closest( "td" ).find( "span.partnerDetails" ).hide();
		partnerCUICTag.closest( "td" ).find("span.partnerInfo").html("");
		partnerCUICTag.closest( "td" ).find("span.partnerInfo").hide();
		
		me.artReferOpenFormTag.removeAttr( "event" );
		me.artReferCloseFormTag.removeAttr( "event" );
		
		me.previousTestsTag.find("table").html("");
		
		// Empty fields from "This Test" tab
		me.clientAttributeDivTag.find("input[type='text'],select").val("");
		me.clientAttributeDivTag.find("input[type='checkbox']").prop("checked", false);
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
				me.mainPage.settingsManagement.showExpireSessionMessage();				
			}
		});
		
	};

	
	// ---------------------------------------------------------------------------------------------------------------
	// Client Registration
	// ---------------------------------------------------------------------------------------------------------------
	
	// Get client JSON data from FORM
	
	me.getClientJsonData = function( formTag )
	{
		var attributeData = Util.getArrayJsonData( "attribute", formTag );
		
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
		
		var attributeData = Util.getArrayJsonData( "attribute", me.addClientFormTag );
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
				me.mainPage.settingsManagement.showExpireSessionMessage();					
			}
		});
		
	};
	
	me.savePartnerCUIC = function()
	{
		Commons.checkSession( function( isInSession ) 
		{
			if( isInSession ) 
			{
				var partnerCUIC = me.getAttributeField( me.attr_ClientCUIC ).val();
				var partnerEventId = me.getDataElementField( me.de_PartnerEventId ).val();
				var clientEventId = JSON.parse( me.addEventFormTag.attr( "event" ) ).event;
				var coupleStatus = me.getDataElementField( me.de_CoupleStatus ).val();
				
				$.ajax(
					{
						type: "POST"
						,url: "../event/savePartnerCUIC?partnerEventId=" + partnerEventId + "&partnerCUIC=" + partnerCUIC + "&eventId=" + clientEventId + "&coupleStatus=" + coupleStatus
						,dataType: "json"
			            ,contentType: "application/json;charset=utf-8"
			            ,beforeSend: function()
			            {
			            	var translatedText = me.translationObj.getTranslatedValueByKey( "clientEntryForm_msg_updatingPartnerCUIC" );
			            	MsgManager.appBlock( translatedText );
			            }
						,success: function( response ) 
						{
							tranlatedText = me.translationObj.getTranslatedValueByKey( "clientEntryForm_msg_updatedPartnerCUIC" );
							MsgManager.msgAreaShow( tranlatedText, "SUCCESS" );	
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
				me.mainPage.settingsManagement.showExpireSessionMessage();					
			}
		});	
	}
	
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
						
			jsonEvent.dataValues = Util.getArrayJsonData( "dataElement", formTag );
			
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
		
		var noneStatusStr = me.translationObj.getTranslatedValueByKey( "artRefer_tab_msg_statusNone" );
		value = ( value != "" ) ? linkageStatusFieldTag.find("option:selected").text() : "[" + noneStatusStr + "]";
		me.linkageStatusLableTag.html( value );
	};
	
	me.saveClientAfter = function( response, exeFunc, groupId, showSuccessMsg )
	{
		// STEP 1. Set the client as attribute for the form. 
		
		me.addClientFormTabTag.attr( "client", JSON.stringify( response ) );
		
		// STEP 2. Set the header of the [Client Form] Tab
		
		me.generateAddClientFormHeader();

		
		// STEP 3. Display [This Test] Tab if the "status" mode is "Add Client"
		
		var firstName = me.getAttributeValue( response, me.attr_FirstName );
		var surName = me.getAttributeValue( response, me.attr_LastName );
		if( me.saveClientRegBtnTag.attr("status") == "add"  )
		{
			if( firstName != "EQC" && ( surName != "POS" || surName != "NEG" ) )
			{
				me.showTabInClientForm( me.TAB_NAME_CONTACT_LOG );
			}
			else
			{
				// Set client Type as [EQC / PPT]
				me.checkAndSetClientTypeValue( response );
			}
			
			me.showTabInClientForm( me.TAB_NAME_THIS_TEST );
		}
		
		// STEP 4. Set the status "Update" for [Client Form]
		
		me.saveClientRegBtnTag.attr("status", "update");
		
		
		// STEP 5. Set data values based on client attribute values
		me.setUp_InitDataValues();
		
		
		if( exeFunc !== undefined ) exeFunc(groupId);
		
		// STEP 6. Unblock form
		
		if( showSuccessMsg == undefined || showSuccessMsg )
		{
			tranlatedText = me.translationObj.getTranslatedValueByKey( "clientEntryForm_msg_clientSaved" );
			MsgManager.msgAreaShow( tranlatedText, "SUCCESS" );						
			MsgManager.appUnblock();
			alert( tranlatedText );
		}
	};
	
	me.checkAndSetClientTypeValue = function( jsonClient )
	{
		var clientTypeTag = me.getDataElementField( me.de_ClientType );
		var EQCPPTPassedTag = me.getDataElementField( me.de_EQCPPTPassed );
		
		
		var firstName = me.getAttributeValue( jsonClient, me.attr_FirstName );
		var surName = me.getAttributeValue( jsonClient, me.attr_LastName );
		
		if( firstName == "EQC" && ( surName == "POS" || surName == "NEG" ) )
		{
			clientTypeTag.find("option").show()
			clientTypeTag.val("LS_SER3");
			Util.disableTag( clientTypeTag, true );
			Util.disableTag( EQCPPTPassedTag, true );
			
			me.hideTabInClientForm( me.TAB_NAME_CONTACT_LOG );
			me.hideTabInClientForm( me.TAB_NAME_ART_REFER );
		}
		else
		{
			clientTypeTag.find("option[value='LS_SER3']").hide();
			
			Util.disableTag( EQCPPTPassedTag, false );
			
			var dob = me.getAttributeValue( jsonClient, me.attr_DoB );
			if( dob != "" ){
				var age = Util.calculateAge( dob );
				if( age < 8 )
				{
					// ASSIGN [Individual Test] value for data element [Client type]
					clientTypeTag.val( "LS_SER1" );
					Util.disableTag( clientTypeTag, true );
				}
				else
				{
					Util.disableTag( clientTypeTag, false );
				}
			}
			else
			{
				Util.disableTag( clientTypeTag, false );
			}
		}
	};
	
	me.getAttributeValue = function( jsonClient, attrId )
	{
		var attributes = jsonClient.attributes;
		var found = Util.findItemFromList( attributes, "attribute", attrId );
		return ( found !== undefined ) ? found.value : "";
	};
	
	
	me.setUp_InitDataValues = function()
	{
		me.setUp_ClientRegistrationFormDataLogic();
		
		// Set [EQC] type
		var jsonClient = me.addClientFormTabTag.attr( "client" );
		if( jsonClient!= undefined )
		{
			jsonClient = JSON.parse( jsonClient );
			me.checkAndSetClientTypeValue( jsonClient );
		}
		
		var dobTag = me.getAttributeField( me.attr_DoB );
		var age = "";
		if( dobTag.val() != "" ){
			var birthDateStr = Util.formatDate_DbDate( dobTag.val() );
			age = Util.calculateAge( birthDateStr );
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
			if( clientTypeTag.val() == "" )
			{
				Util.disableTag( clientTypeTag, false );
			}
			
			// Show [Partner knows HIV status]
			me.setHideLogicTag( partnerKnowsHIVStatusTag.closest("tr"), false );
			
			// Show [Number of sexual partners last 6 months]
			me.setHideLogicTag( numberSexualPartnersLast6MonthTag.closest("tr"), false );
		}
		
		
		// --------------------------------------------------------------------------
		// Init [Time since last test in months]
		
		var timeSinceLastTestTag = me.getDataElementField( me.de_TimeSinceLastTest );
		
		var prevHIVTestDate = "";
		var latestHIVTestEvent = me.previousTestsTag.find("table").find("tbody[eventid]:first");
		var jsonClient = JSON.parse( me.addClientFormTabTag.attr("client") );
		if( latestHIVTestEvent.length > 0 )
		{
			prevHIVTestDate = latestHIVTestEvent.find("tr[header]").attr("eventDate");
			prevHIVTestDate = ( prevHIVTestDate != undefined ) ? prevHIVTestDate : "";
		}
		else if( jsonClient != undefined )
		{
			prevHIVTestDate = me.getAttributeValue( jsonClient, me.attr_DateLastHIVTest );
			prevHIVTestDate = ( prevHIVTestDate != undefined ) ? prevHIVTestDate : "";
		}
		
		if( prevHIVTestDate != "" )
		{
			var noMonth = Util.getMonthsBetweenDates( Util.convertDateStrToObject( prevHIVTestDate ), new Date() );
			timeSinceLastTestTag.val( noMonth );
		}
		else
		{
			timeSinceLastTestTag.val( "" );
		}

		
		// --------------------------------------------------------------------------
		
		me.setUp_DataEntryFormInputTagEvent();
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
	
	me.showDialogForSaveEvent = function()
	{
		var titleTranslated = me.translationObj.getTranslatedValueByKey( "clientEntryForm_msg_saveEventDialogTitle" );
		var cancelTranslated = me.translationObj.getTranslatedValueByKey( "clientEntryForm_btn_cancel" );
		
		me.saveEventDialogFormTag.dialog({
			title: titleTranslated
			,maximize: true
			,closable: true
			,modal: true
			,resizable: false
			,width: 555
			,height: 170
		}).show('fast' );
	};
	
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
					Util.disableTag( me.showEventSaveOptionDiaglogBtnTag, false );
					MsgManager.appUnblock();
					var tranlatedText = me.translationObj.getTranslatedValueByKey( "datatEntryForm_validation_checkErrorFields" );
					alert( tranlatedText );
				}
			}
			else {
				me.mainPage.settingsManagement.showExpireSessionMessage();					
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
					
					me.disableClientDetailsAndCUICAttrGroup( true );

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
				Util.disableTag( me.showEventSaveOptionDiaglogBtnTag, false );
			});
		
	};
	
	me.completeEvent = function( exeFunc )
	{
		var event = JSON.parse( me.addEventFormTag.attr( "event" ) );
		var eventId = event.event;
		
		
		// Update status of event
		
		event.status = "COMPLETED";	
		event.dataValues = Util.getArrayJsonData( "dataElement", me.thisTestDivTag );
		
		me.execSaveEvent( event, undefined, eventId, function(){

			// Create empty table and populate data for this event
			
			var tbody = me.createAndPopulateDataInEntryForm( event, me.stage_HIVTesting );
			me.previousTestsTag.find("table").prepend( tbody );
			
			// Reset data entry form
			me.resetDataEntryForm();
			
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
			
			me.populateDataValueForContactLogAndARTRefTab( event, [] );
			
			me.saveClientAfter( JSON.parse( me.addClientFormTabTag.attr("client") ), exeFunc, undefined, false );
			
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
			Util.disableTag( me.showEventSaveOptionDiaglogBtnTag, true );
		}
		else
		{
			me.selectOrgUnitWarningMsgTag.hide();
			Util.disableTag( me.saveClientRegBtnTag, false );
			Util.disableTag( me.updateClientBtnTag, false );
			Util.disableTag( me.showEventSaveOptionDiaglogBtnTag, false );
		}
	};
	
	
	
	// -------------------------------------------------------------------------------------------------
	// Client details form TAB
	// -------------------------------------------------------------------------------------------------
	
	
	// -------------------------------------------------------------------------------------------------
	// Add new [Client details] form TAB
	
	me.showAddClientForm = function()
	{
		me.storageObj.addItem("subPage", me.mainPage.settingsManagement.PAGE_SEARCH_ADD_CLIENT );
		
		Util.resetPageDisplay();
		me.saveClientRegBtnTag.attr("status", "add" );
		me.resetClientForm();
		me.resetDataEntryForm();
		
		// Init attribute fields
		me.setUp_ClientRegistrationFormDataLogic();
		
		
		// Change the Header title && 'Save' buton display name
		var tranlatedText = me.translationObj.getTranslatedValueByKey( "dataEntryForm_headerTitle_addClient" );
		me.addClientFormDivTag.find(".headerList").html(tranlatedText);
		
		// Populate values from Search form to Add client form
		me.mainPage.searchClientManagement.seachAddClientFormTag.find("input[attribute],select[attribute]").each(function(){
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
		me.storageObj.addItem( "subPage", me.mainPage.settingsManagement.PAGE_SEARCH_EDIT_CLIENT );

		// STEP 1. Update the status of client ( "add"/ "update" )
		me.saveClientRegBtnTag.attr("status", "update" );

		// STEP 2. Reset te TAB
		me.resetClientForm();
		me.resetDataEntryForm();
		me.mainPage.searchClientManagement.searchResultTbTag.hide();
		me.mainPage.searchClientManagement.searchResultTag.hide();
		me.mainPage.searchClientManagement.searchClientFormTag.hide();
		
		
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
		me.filterCouncilsByDistrict();
		
		// STEP 5. Init logic for attribute fields based on attribute values
		me.setUp_ClientRegistrationFormDataLogic();

		// STEP 6. Create header for [Update client] form
		me.generateAddClientFormHeader();
		
		// STEP 7. Lock for if there is any HIV Testing event existed
		if( events.length > 0 )
		{
			me.disableClientDetailsAndCUICAttrGroup( true );
		}
		
		
		// ---------------------------------------------------------------------------------------
		// Set up HIV Testing event data
		
		// STEP 8. Set up data in "Previous Test" tab
		me.setUp_DataInPreviousTestTab( completedHIVTestingEvents, selectedEventId );

		// STEP 9. Set up data in "This Test" tab
		me.setUp_DataInThisTestTab( activeHIVTestingEvent, data.partner );
		
		
		// ---------------------------------------------------------------------------------------
		// STEP 10. Set up data in "Contact Log" tab and "ART Refer" tab
		
		// Set up data in "Contact Log" tab and "ART Refer" tab
		me.populateDataValueForContactLogAndARTRefTab( artHIVTestingEvent, contactLogEvents, artOpeningEvent, artClosureEvent );
		me.checkAndShowARTReferTab( artHIVTestingEvent );
		
		
		// ---------------------------------------------------------------------------------------
		// STEP 11. Show [This Test] / [Previous Test] tab if there is a "seleted event id"
		
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
		// STEP 12. Show form
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
		formTag.find("input[attribute],select[attribute]").each(function(){
			var attrId = $(this).attr("attribute");
			var value = me.getAttributeValue( client, attrId );
			me.setValueForInputTag( $(this), value );
		});
		
		// [Closure ART Refer] - Show/Hide [Other facility name]
		var closeReferralFacilityNameTag = me.getDataElementField( me.attr_ARTClosure_ReferralFacilityName );
		var closeSpecialOtherFacilityNameTag = me.getAttributeField( me.attr_ARTClosure_OtherSpecialFacilityName );
		me.setHideLogicTag( closeSpecialOtherFacilityNameTag, !( closeReferralFacilityNameTag.val() == "Other" ) );
	};

	me.checkAndShowCheckedIconForPartnerCUICTag = function()
	{
		var partnerCUICTag = me.getDataElementField( me.de_partnerCUIC );
		if( partnerCUICTag.val() != "" ){
			partnerCUICTag.closest( "td" ).find( "span.partnerDetails" ).show();
			
			if( partnerCUICTag.val() == "1" )
			{
				partnerCUICTag.closest( "td" ).find( "span.partnerInfo" ).hide();
				partnerCUICTag.closest( "td" ).find( "span.partnerInfo" ).html("");
			}
		}
		else {
			partnerCUICTag.closest( "td" ).find( "span.partnerDetails" ).hide();
			partnerCUICTag.closest( "td" ).find( "span.partnerInfo" ).hide();
			partnerCUICTag.closest( "td" ).find( "span.partnerInfo" ).html("");
		}
	};
	
	me.setValueForInputTag = function( inputTag, value )
	{
		if( inputTag.attr("isDate") === "true" && value != "" )
		{
			if( inputTag.attr("isMonthYear") === "true" )
			{
				value = Util.formatDate_LocalDisplayMonthYear( value );
			}
			else
			{
				value = Util.formatDate_LocalDisplayDate( value );
			}
			
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
	
	
	// -------------------------------------------------------------------------
	// Setup "Contact Log" TAB
	
	me.populateDataValueForContactLogAndARTRefTab = function( artHIVTestingEvent, contactLogEvents, artOpeningEvent, artClosureEvent )
	{		
		// ---------------------------------------------------------------------
		// [Contact log]
		
		// History form
		var consentToContactTag = me.getAttributeField( me.attr_ConsentToContact );
		if( consentToContactTag.val() != "" )
		{
			me.showAttrContactLogHistory();
		}
		
	 	// Populate [Contact Log Event] history data
		me.populateContactLogEventListHistory( contactLogEvents );
		
		
		// ---------------------------------------------------------------------
		// [ART Refer] Tab
		
		// [Client referred to ART]
		if( artHIVTestingEvent != undefined )
		{
			var eventDateStr = Util.formatDate_DisplayDate( artHIVTestingEvent.eventDate );
	 		me.artEventInfoTbTag.find("span.dateClientReferredARTOn").html( eventDateStr );
		}
 		
 		// Generate [Time elapse] in header of [ART Ref.] form AND in [ART Closure] form
 		me.populateTimeElapsed( artOpeningEvent, artClosureEvent );
 		
 		// Set [Linkage Status] info
 		me.setARTLinkageStatusAttrValue();
 		
		
 		// ---------------------------------------------------------------------
		// [Opening ART Refer]
 		
		// Populate data
		if( artOpeningEvent !== undefined )
		{
			me.artReferOpenFormTag.attr("event", JSON.stringify( artOpeningEvent ) );
			me.populateDataValuesInEntryForm( me.artReferOpenFormTag, artOpeningEvent );
		}
		
		// Set value for autocomple input tag
		var referralFacilityNameTag = me.getDataElementField( me.de_ARTOpen_ReferralFacilityName );
		referralFacilityNameTag.closest( "td" ).find("input").val( referralFacilityNameTag.find("option:selected").text() );
		
		// Show/Hide [Other facility name]
		var openReferFacilityNameTag = me.getDataElementField( me.de_ARTOpen_ReferralFacilityName);
		var specialOtherFacilityNameTag = me.getDataElementField( me.de_ARTOpen_OtherSpecialFacilityName );
		me.setHideLogicTag( specialOtherFacilityNameTag, !( openReferFacilityNameTag.val() == "Other" ) );
		
		
		// ---------------------------------------------------------------------
		// [Closure ART Refer]
 		
		// Populate data
		if( artClosureEvent !== undefined )
		{
			me.artReferCloseFormTag.attr("event", JSON.stringify( artClosureEvent ) );
			me.populateDataValuesInEntryForm( me.artReferCloseFormTag, artClosureEvent );
		}

		// Set value for autocomple input tag
		var closeReferFacilityNameTag = me.getAttributeField( me.attr_ARTClosure_ReferralFacilityName );
		closeReferFacilityNameTag.closest( "td" ).find("input").val( closeReferFacilityNameTag.find("option:selected").text() );
		
		// Set up [ART Closure] form
		me.setUp_ARTClosureForm();
		
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
 	 		var timeElapsed = Util.getDaysElapsed( openingEventDate, closureEventDate );
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
		
		var jsonClient = JSON.parse( me.addClientFormTabTag.attr( "client" ) );
		var firstName = me.getAttributeValue( jsonClient, me.attr_FirstName );
		var surName = me.getAttributeValue( jsonClient, me.attr_LastName );
		if( firstName == "EQC" && ( surName == "POS" || surName == "NEG" ) )
		{
			me.hideTabInClientForm( me.TAB_NAME_CONTACT_LOG );
			me.hideTabInClientForm( me.TAB_NAME_ART_REFER );
		}
		else if( eventData != undefined )
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
				var consentToContactTag = me.getAttributeField( me.attr_ConsentToContact );
				
				// STEP 2. For [Coordinator] 
				if( consentToContactTag.val() != "" )
				{
					me.showTabInClientForm( me.TAB_NAME_CONTACT_LOG );
					me.showTabInClientForm( me.TAB_NAME_ART_REFER );
				}
				else
				{
					me.showTabInClientForm( me.TAB_NAME_ART_REFER );
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
			var contactPhoneNumber = me.getAttributeField( me.attr_ContactPhoneNumber ).val();
		
			var restrictionsContacting  = me.getAttributeField( me.attr_RestrictionsContacting ).val();
			restrictionsContacting = ( restrictionsContacting != "" ) ? " - Restrictions: " +  restrictionsContacting : "";
			
			var address1 = me.getAttributeField( me.attr_Address1 ).val();
			address1 = me.getDisplayNameByAttributeValue( me.attr_Address1, address1 );
			
			var address2 = me.getAttributeField( me.attr_Address2 ).val();
			address2 = me.getDisplayNameByAttributeValue( me.attr_Address2, address2 );
			
			var address3 = me.getAttributeField( me.attr_Address3 ).val();
			address3 = me.getDisplayNameByAttributeValue( me.attr_Address3, address3 );
			
			var address4 = me.getAttributeField( me.attr_Address4 ).val();
			address4 = me.getDisplayNameByAttributeValue( me.attr_Address4, address4 );
			
			var address5 = me.getAttributeField( me.attr_Address5 ).val();
			address5 = me.getDisplayNameByAttributeValue( me.attr_Address5, address5 );
						
			historyTag.append("<p><span class='glyphicon glyphicon-earphone'></span> " + contactPhoneNumber + restrictionsContacting + "</p>");
			historyTag.append("<p><span class='glyphicon glyphicon-list-alt'></span> " + address1 + "<br>Landmark: " + address2 + "<br>" + address3 + ", " + address4 + ", " + address5 + "</p>");
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

	me.getDisplayNameByAttributeValue = function( attrId, value )
	{
		var tag = me.getAttributeField( attrId );
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
	
	me.setUp_DataInThisTestTab = function( activeEvent, partnerData )
	{	
		me.addEventFormTag.attr( "event", JSON.stringify( activeEvent ) );
		if( partnerData!= undefined )
		{
			me.addEventFormTag.attr( "partnerData", JSON.stringify( partnerData ) );
		}
		
		me.showTabInClientForm( me.TAB_NAME_THIS_TEST );
		
		
		if( activeEvent !== undefined )
		{	
			me.activeEventHeaderTag.show();
			
			// Populate event data
			me.populateDataValuesInEntryForm( me.addClientFormTabTag, activeEvent );
		}
		else
		{			
			me.activeEventHeaderTag.hide();
		}
		
		// Set up if Data Entry Form can be editable
		me.setUp_IfDataEntryFormEditable( activeEvent );
		
		// Set data values based on client attribute values
		me.setUp_InitDataValues();
		
		
		me.checkAndShowCheckedIconForPartnerCUICTag();
		me.setUp_PartnerInfor( partnerData );

	};
	
	me.setUp_PartnerInfor = function( partnerData )
	{
		if( partnerData != undefined )
		{
			var partnerCUICTag = me.getDataElementField( me.de_partnerCUIC );
			var rows = partnerData.rows;
			if( rows.length == 1 )
			{
				var partnerCUICVal = rows[0][3];
				partnerCUICTag.val( partnerCUICVal );
				partnerCUICTag.attr("lastHIVTest", rows[0][6] );

				var partnerEventId = rows[0][0];
				me.getDataElementField( me.de_PartnerEventId ).val( partnerEventId );
				
				var partnerDetails = rows[0][4] + " " + rows[0][5] + " (" + rows[0][6] + ")";
				partnerCUICTag.attr( "title", partnerDetails );
				partnerCUICTag.closest( "td" ).find("span.partnerInfo").html( partnerDetails );
				partnerCUICTag.closest( "td" ).find("span.partnerInfo").show();
			}
		}
	}
	
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
				
				if( me.mainPage.settingsManagement.loginUsername === searchLoggedCounsellor.code )
				{
					me.disableDataEtryForm( false );
					me.activeEventHeaderTag.css( "color","gray" );
				}
				else
				{
					me.disableDataEtryForm( true );
					
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
				deId != me.de_FinalResult_HIVStatus &&
				$(this).attr( 'isReadOnly' ) == undefined )
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
		
		var headerTag = $("<tr header='true' eventId='" + eventId + "' style='cursor:pointer;' eventDate='" + eventDate + "'></tr>");

		var orgUnitName = event.orgUnitName;
		if( orgUnitName == undefined )
		{
			orgUnitName = me.orgUnitListTag.find("option:selected").text();
		}
		
		var url = 'event.html?eventid=' + eventId;
		var onclickEvent="window.open(\"" + url + "\",\"Event Report\",\"width=400,height=500\");"
		headerTag.append("<th colspan='2'>"
				+ "<span class='headerInfor'> <img style='float:left' class='arrowRightImg showHide' src='../images/tab_right.png'> " 
				+ Util.formatDate_DisplayDateTime( eventDate ) 
				+ "<font class='saperate'> | </font>" + orgUnitName 
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
	
	me.populateParterCUIC = function()
	{
		var partnerCUICTag = me.getDataElementField( me.de_partnerCUIC );
		if( partnerCUICTag.val() == "" )
		{
			Commons.checkSession( function( isInSession ) 
					{
						if( isInSession ) 
						{
							$.ajax(
								{
									type: "POST"
									,url: "../event/findPartner?ouId=" + me.orgUnitListTag.val()
									,dataType: "json"
						            ,contentType: "application/json;charset=utf-8"
						            ,beforeSend: function()
						            {
						            	var translatedText = me.translationObj.getTranslatedValueByKey( "clientEntryForm_msg_findingPartnerCUIC" );
						            	MsgManager.appBlock( translatedText );
						            }
									,success: function( response ) 
									{
										var rows = response.rows;
										me.setUp_PartnerInfor( response );
										me.checkAndShowCheckedIconForPartnerCUICTag();
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
							me.mainPage.settingsManagement.showExpireSessionMessage();					
						}
					});	
		}
		
		
	}
	
	// Filter councils by selected district
	me.filterCouncilsByDistrict = function()
	{
		var districtTag = me.getAttributeField( me.attr_Address3 );
		var councilTag = me.getAttributeField( me.attr_Address4 );
		var councilOptionsTag = councilTag.find("option");
		councilOptionsTag.hide();
		
		if( districtTag.val() != "" )
		{
			if( districtTag.val() == "11" || districtTag.val() == "12" )
			{
				councilTag.find("option[value='NA']").show();
			}
			else
			{
				councilOptionsTag.each( function(){
					var optionTag = $(this);
					var key = "LS" + districtTag.val();
					if( optionTag.val().indexOf( key ) == 0 )
					{
						optionTag.show();
					}
				});
			}
		}
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
	
	
	// ---------------------------------------------------------------------------------------------------------------------------
	// RUN Init methods
	// ---------------------------------------------------------------------------------------------------------------------------
	
	me.init();
}

