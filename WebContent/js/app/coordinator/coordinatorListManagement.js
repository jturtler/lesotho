
function CoordinatorListManagement( _mainPage )
{
	var me = this;
	me.mainPage = _mainPage;
	me.storageObj = me.mainPage.storageObj;
	me.translationObj = me.mainPage.translationObj;
	me.clientFormManagement = me.mainPage.clientFormManagement;
	me.settingsManagement = me.mainPage.settingsManagement;

	me.filterDistricts = me.settingsManagement.filterDistricts;
	me.filterCouncils = me.settingsManagement.filterCouncils;
	me.filterHealthFacilities = me.settingsManagement.filterHealthFacilities;
	me.closureARTStatus = me.settingsManagement.closureARTStatus;
	me.contactLogTypeName = me.settingsManagement.contactLogTypeName;
	
	// Today F/U
	me.todayFUListTag = $("#todayFUList");
	me.todayCaseTblTag = $("#todayFUTbl");
	me.todayFUDateTag = $("#todayFUDate");
	me.registerClientBtnTag = $("#registerClientBtn");
	me.todayFUNumberTag = $("#todayFUNumber");
	
	
	// All F/U
	me.allFUListTag = $("#allFUList");
	me.allFUTblTag = $("#allFUTbl");
	me.allFUFooterTag = $("#allFUFooter");
	me.allFUNumberTag = $("#allFUNumber");
	me.refreshAllFUListTag = $("#refreshAllFUList");
	me.loadingDivTag = $("#loadingDiv");
	
	// Filter
	
	me.filterCurUserCasesChkTag = $("#filterCurUserCasesChk");
	me.filterClosedCasesChkTag = $("#filterClosedCasesChk");
	me.placeOfResidenceChkTag = $("#placeOfResidenceChk");
	me.facilityReferredToChkTag = $("#facilityReferredToChk");

	me.ouFilterTbTag = $("#ouFilterTb");
	me.ouFilterInforTag = $("#ouFilterInfor");
	me.ouFilterHeaderTrTag = $("#ouFilterHeaderTr");
	me.districtFilterTbTag = $("#districtFilterTb");
	me.councilFilterTbTag = $("#councilFilterTb");
	me.healthFacilityFilterTbTag = $("#healthFacilityFilterTb");
	me.districtFilterInfoTag = $("#districtFilterInfo");
	me.councilFilterInfoTag = $("#councilFilterInfo");
	
	
	me.backToCaseListBtnTag = $("[name='backToCaseListBtn']");
	
	// -------------------------------------------------------------------------
	// IDs
	// -------------------------------------------------------------------------
	
	me.de_ARTOpening_ReferralFacilityName  = 'E1KAxdya3y5';
	me.de_ARTOpening_ReferralFacilityOther = 'CLclHLxzl9e';
		
	me.de_contactLog_lastActionName = "wzM3bUiPowS";
	me.de_contactLog_nextActionName = "mcgzEFh5IV8";
	me.de_contactLog_dueDate = "HcBFZsCt8Sy";
	
	
	// ---------------------------------------------------------------------------------------------------------------------------
	// Init method
	// ---------------------------------------------------------------------------------------------------------------------------
	
	me.init = function()
	{
		// Set title for Refresh icon in [All F/U] list
		var refreshTitle = me.translationObj.getTranslatedValueByKey( "allFU_refreshIconTitle" );
    	me.refreshAllFUListTag.attr( "title", refreshTitle );
		
		me.createDistrictFilter();
		me.createCouncilFilter();
		me.createHealthFacilitiesFilter();
		me.setFilterDataInfo();
		
		me.setUp_Events();
	};
	
	
	// ---------------------------------------------------------------------------------------------------------------------------
	// Set up events
	// ---------------------------------------------------------------------------------------------------------------------------
	
	me.setUp_Events = function()
	{
		me.setUp_FloatButton();
		window.addEventListener( "resize", me.setUp_FloatButton );
		
		// Back to [Current Cases]
		
		me.backToCaseListBtnTag.click(function(){
			if( me.mainPage.currentList == me.mainPage.settingsManagement.PAGE_TODAY_FU_LIST )
			{
				me.registerClientBtnTag.show();
				me.listTodayCases();
			}
			else if( me.mainPage.currentList == me.mainPage.settingsManagement.PAGE_ALL_FU_LIST )
			{
				me.registerClientBtnTag.hide();
				me.listAllCase();
			}
		});
		
		// Refresh all F/U list
		me.refreshAllFUListTag.click( function(){
			me.reloadAllCases();
		});
		
		// Open "Search/Add client" form from "Today Cases" list
		
		me.registerClientBtnTag.click(function(){
			Util.resetPageDisplay();
			
			me.storageObj.removeItem("clientId");
			me.storageObj.removeItem("eventId");
			
			me.mainPage.searchClientManagement.resetSearchClientForm();
			me.mainPage.searchClientManagement.showSearchClientForm();
		});
		
		me.setUp_Events_Filter();
	};

	me.setUp_FloatButton = function()
	{
		var width = $(window).width() - 80;
		var height = $(window).height() - 120;
		
		me.registerClientBtnTag.css({top: height, left: width, position:'fixed'});
	};
	
	me.setUp_Events_Filter = function()
	{
		me.districtFilterTbTag.find("input").click( function(){
			me.filterCouncilsByDistrict();
			me.filterHealthFacilitiesByDistrict();
			me.filterEvents();
		});
		
		me.councilFilterTbTag.find("input").click( me.filterEvents );
		me.healthFacilityFilterTbTag.find("input").click( me.filterEvents );
		me.filterCurUserCasesChkTag.click( me.filterEvents );
		me.filterClosedCasesChkTag.click( me.filterEvents );
		
		me.placeOfResidenceChkTag.click( function(){
			var checked = me.placeOfResidenceChkTag.prop("checked");
			if( checked )
			{
				me.healthFacilityFilterTbTag.find("input").prop("checked", false);
				me.healthFacilityFilterTbTag.hide();
				me.councilFilterTbTag.show();
				me.filterEvents();
				me.setFilterDataInfo();
				me.districtFilterTbTag.find("tr.otherDistrict").hide();
			}
		} );
		
		me.facilityReferredToChkTag.click( function(){
			var checked = me.facilityReferredToChkTag.prop("checked");
			if( checked )
			{
				me.councilFilterTbTag.find("input").prop("checked", false);
				me.councilFilterTbTag.hide();
				me.healthFacilityFilterTbTag.show();
				me.filterEvents();
				me.setFilterDataInfo();
				me.districtFilterTbTag.find("tr.otherDistrict").show();
			}
		} );
		
		me.ouFilterHeaderTrTag.click( function(){
			
			var imgTag = me.ouFilterHeaderTrTag.find("img");
			var closed = imgTag.hasClass("arrowRightImg");
			
			// Show the filter table
			if( closed )
			{
				imgTag.attr( "src", "../images/down.gif" );
				imgTag.addClass('arrowDownImg');
				imgTag.removeClass('arrowRightImg');
				me.ouFilterTbTag.show("fast");
				me.ouFilterInforTag.hide();
			}
			// Hide the filter table
			else
			{
				imgTag.attr( "src", "../images/tab_right.png" );
				imgTag.removeClass('arrowDownImg');
				imgTag.addClass('arrowRightImg');
				me.ouFilterTbTag.hide();
				me.setFilterDataInfo();
				me.ouFilterInforTag.show("fast");
			}
		})
	};
	
	
	// -------------------------------------------------------------------------
	// Create filter Districts/Councils filter
	// -------------------------------------------------------------------------
	
	me.createDistrictFilter = function()
	{
		for( var i in me.filterDistricts )
		{
			var name = me.filterDistricts[i].name;
			var code = "LS" + me.filterDistricts[i].code;
			
			var rowTag = $( "<tr></tr>" );
			rowTag.append( "<td><label style='font-weight:normal;'><input type='checkbox' value='" + code + "'> <span>" + name + "</span></label></td>" );
			me.districtFilterTbTag.append( rowTag );
		}
		
		// Add [Other] option for district
		var name = "Other";
		var code = "Other";
		var rowTag = $( "<tr class='otherDistrict' style='display:none;'></tr>" );
		rowTag.append( "<td><label style='font-weight:normal;'><input type='checkbox' value='" + code + "'> <span>" + name + "</span></label></td>" );
		me.districtFilterTbTag.append( rowTag );
	};
	
	me.createCouncilFilter = function()
	{
		var noneFilter = me.translationObj.getTranslatedValueByKey( "allFU_filterBy_ouNone" );
    	
		var emptyRowTag = $( "<tr filter='none'></tr>" );
		emptyRowTag.append( "<td style='font-style:italic;'>[" + noneFilter + "]</td>" );
		me.councilFilterTbTag.append( emptyRowTag );
		
		for( var i in me.filterCouncils )
		{
			var name = me.filterCouncils[i].name;
			var code = me.filterCouncils[i].code;
			
			var rowTag = $( "<tr filter='" + code + "' isChecked='false'></tr>" );
			rowTag.append( "<td><label style='font-weight:normal;'><input type='checkbox' value='" + code + "'> <span>" + name + "</span></label></td>" );
			me.councilFilterTbTag.append( rowTag );
		}
		
		me.showCouncilNoFilter();
	};

	me.createHealthFacilitiesFilter = function()
	{
		var noneFilter = me.translationObj.getTranslatedValueByKey( "allFU_filterBy_ouNone" );
    	
		var emptyRowTag = $( "<tr filter='none'></tr>" );
		emptyRowTag.append( "<td style='font-style:italic;'>[" + noneFilter + "]</td>" );
		me.healthFacilityFilterTbTag.append( emptyRowTag );
		
		for( var i in me.filterHealthFacilities )
		{
			var name = me.filterHealthFacilities[i].name;
			var code = me.filterHealthFacilities[i].code;
			
			var rowTag = $( "<tr filter='" + code + "' isChecked='false'></tr>" );
			rowTag.append( "<td><label style='font-weight:normal;'><input type='checkbox' value='" + code + "'> <span>" + name + "</span></label></td>" );
			rowTag.append( "<td></td>" );
			me.healthFacilityFilterTbTag.append( rowTag );
		}
		
		me.showHealthFacilityNoFilter();
	};
	
	
	// -------------------------------------------------------------------------
	// Load list of cases
	// -------------------------------------------------------------------------
	
	me.listTodayCases = function( exeFunc )
	{
		me.mainPage.setCurrentPage( me.settingsManagement.PAGE_TODAY_FU_LIST );
		me.storageObj.addItem( "page", me.mainPage.settingsManagement.PAGE_TODAY_FU_LIST );
		me.storageObj.removeItem( "subPage" );		
		
		var tranlatedText = me.translationObj.getTranslatedValueByKey( "common_msg_loadingData" );
		Util.resetPageDisplay();
		MsgManager.appBlock( tranlatedText + " ..." );
		
		me.todayFUDateTag.html( Util.formatDate_LastNDate(0) );
		me.listCases( "../event/todayFU", function( list )
		{
			me.populateTodayFU( list );
			me.todayCaseTblTag.show();
			me.todayFUListTag.show("fast");
			
			if( exeFunc !== undefined ) exeFunc();
			
			// Show table			
			MsgManager.appUnblock();
		} );
	}
		
	me.listAllCase = function( exeFunc )
	{
		me.mainPage.setCurrentPage( me.settingsManagement.PAGE_ALL_FU_LIST );
		me.storageObj.addItem( "page", me.mainPage.settingsManagement.PAGE_ALL_FU_LIST );
		me.storageObj.removeItem( "subPage" );		
		
		var tranlatedText = me.translationObj.getTranslatedValueByKey( "common_msg_loadingData" );
		Util.resetPageDisplay();
		MsgManager.appBlock( tranlatedText + " ..." );
		
		me.loadingDivTag.hide();
		me.reloadAllCases( function(){
			me.allFUTblTag.show();
			me.allFUListTag.show("fast");
			
			if( exeFunc !== undefined ) exeFunc();
			
			// Show table	
			MsgManager.appUnblock();
			
			me.allFUNumberTag.html( me.allFUTblTag.find("tbody").find("tr:visible").length );
		});
	};
		
	me.listCases = function( url, exeFunc )
	{
		me.storageObj.removeItem("param" );
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
				me.settingsManagement.showExpireSessionMessage();					
			}
		});	
		
	};
	
	me.reloadAllCases = function( exeFunc )
	{
		me.loadingDivTag.show();
		me.allFUTblTag.find("tbody tr").remove();
		
		me.listCases( "../event/allFU", function( list ){
			me.populateAllFUData( list );			
			me.filterEvents();
			me.loadingDivTag.hide();
			
			if( exeFunc !== undefined ) exeFunc();

		} );
	};
	
	me.populateTodayFU = function( list )
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
				var council = event[5];
				var facilityRefer = event[6];
				var cuic = event[3];
				var referStatus = event[4];
				var closureEventId = event[12];
				
				var nextAction = event[9];
				var contactLogEventId = event[7];
				if( contactLogEventId == "" && closureEventId == "" )
				{
					nextAction = me.translationObj.getTranslatedValueByKey( "allCaseList_msg_nextStatusFollowUp" );
				}
				else if( contactLogEventId != "" && closureEventId != "" )
				{
					nextAction = me.translationObj.getTranslatedValueByKey( "allCaseList_msg_nextStatusNone" );
				}
				
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
				rowTag.append( "<td>" + council + "</td>" );
				rowTag.append( "<td>" + facilityRefer + "</td>" );
				rowTag.append( "<td>" + cuic + "</td>" );
				rowTag.append( "<td>" + nextAction + "</td>" );
				rowTag.append( "<td>" + referStatus + "</td>" );
				
				me.addEventForRowInList(rowTag);
				
				tbodyTag.append( rowTag );
			}
			
		}
		
		// Sortable		
		me.sortTable( me.todayCaseTblTag );
		
		me.todayFUNumberTag.html( me.todayCaseTblTag.find("tbody tr").length );
	}

	me.populateAllFUData = function( list )
	{	
		me.allFUNumberTag.html( "0" );
		var tbodyTag = me.allFUTblTag.find("tbody");
		tbodyTag.find("tr").remove();
		
		if( list.length > 0 )
		{
			var currentUsername = me.settingsManagement.loginUsername;
			
			for( var i in list )
			{
				var clientData = list[i];
				
				var openingARTEvent = clientData[5];
				if( openingARTEvent != "" )
				{	
					var hasCurrentUserEvent = false;
					
					// ---------------------------------------------------------
					// [HIV Testing]
					// ---------------------------------------------------------
					
					// Event date
					var eventDate = clientData[0];
					eventDateStr = Util.formatDate_DisplayDate( eventDate );
					var eventKey = eventDate.substring(11, 19).split(":").join("");
					
					// Event Id && Day Since Diagnosis
					var HIVTestingEvent = JSON.parse( clientData[1] );
					var eventId = HIVTestingEvent.eventId;
					var daySinceDiagnosis = parseInt( HIVTestingEvent.daySinceDiagnosis );
					
					
					// ---------------------------------------------------------
					// Client Info
					// ---------------------------------------------------------
					
					var clientId = clientData[2];
					var cuic = clientData[3];
			if( clientId = 'y0LDz7bsJdU')
				{
				var dadf = 0;
				}
					
					// ---------------------------------------------------------
					// Council code and name
					// ---------------------------------------------------------
					
					var councilData = clientData[4];
					var councilName = "";
					var councilCode = "";
					if( councilData!= "" )
					{
						councilData = JSON.parse( councilData );
						councilName = councilData.name;
						councilCode = councilData.code;
					}
					else
					{
						councilName = "<span class='glyphicon glyphicon-user' style='color:red;'></span>"
					}
					
					// ---------------------------------------------------------
					// [ART Opening] event data
					// ---------------------------------------------------------
					
					var openingARTEvent = JSON.parse( "[" + openingARTEvent + "]" );
					var facilityName = "";
					var facilityCode = "";
					var latestEventId = openingARTEvent[0].eventId;
					openingARTEventDate = openingARTEvent[0].eventDate;
					var openingARTEventName = me.settingsManagement.ARTReferralOpeningStage_Name;
					
					for( var j in openingARTEvent )
					{
						var event = openingARTEvent[j];
						if( event.eventId == latestEventId )
						{
							if( event.deId == me.de_ARTOpening_ReferralFacilityName )
							{
								facilityCode = event.dataValue;
							}
							else if( event.deId == me.de_ARTOpening_ReferralFacilityOther )
							{
								facilityName = event.dataValue;
							}
						}
						
						// Check if current user has any event
						if( event.username == currentUsername && !hasCurrentUserEvent )
						{
							hasCurrentUserEvent = true;
						}
					}
					
					if( facilityName == "" )
					{
						var searched = Util.findItemFromList( me.filterHealthFacilities, "code", facilityCode );
						if( searched != undefined )
						{
							facilityName = searched.name;
						}
					}
					
					// ---------------------------------------------------------
					// [Contact log] event data
					// ---------------------------------------------------------
					
					var contactLogEvent = clientData[6];
					var contactLogEventDate = "";
					var contactLogEventContactType = "";
					var contactLogDueDate = "";
					var contactLogNextAction = "";
					
					if( contactLogEvent != "" )
					{
						contactLogEvent = JSON.parse( "[" + contactLogEvent + "]" );
						var latestEventId = contactLogEvent[0].eventId;
						contactLogEventDate = contactLogEvent[0].eventDate;
						for( var j in contactLogEvent )
						{
							var event = contactLogEvent[j];
							if( event.eventId == latestEventId )
							{
								if( event.deId == me.de_contactLog_lastActionName )
								{
									contactLogEventContactType = event.datavalue;
									var searched = Util.findItemFromList( me.contactLogTypeName, "code", contactLogEventContactType );
									if( searched )
									{
										contactLogEventContactType = searched.name;
									}
								}
								else if( event.deId == me.de_contactLog_nextActionName )
								{
									contactLogNextAction = event.datavalue;
									var searched = Util.findItemFromList( me.contactLogTypeName, "code", contactLogNextAction );
									if( searched )
									{
										contactLogNextAction = searched.name;
									}
								}
								else if( event.deId == me.de_contactLog_dueDate )
								{
									contactLogDueDate = event.datavalue;
								}	
							}
							
							// Check if current user has any event
							if( event.username == currentUsername && !hasCurrentUserEvent )
							{
								hasCurrentUserEvent = true;
							}
						}
						
					}
					
					
					// ---------------------------------------------------------
					// [ART Closure] event
					// ---------------------------------------------------------
					
					var closureARTEvent = clientData[7];
					var isClosureEvent = false;
					var closureARTEventDate = "";
					var closureEventLinkageOutcome = "";
					if( closureARTEvent != "" )
					{
						isClosureEvent = true;
						closureARTEvent = JSON.parse( closureARTEvent );
						closureARTEventDate = closureARTEvent.eventDate;
						closureEventLinkageOutcome = closureARTEvent.datavalue;
						var searched = Util.findItemFromList( me.closureARTStatus, "code", closureEventLinkageOutcome);
						if( searched )
						{
							closureEventLinkageOutcome = searched.name;
						}
						
						// Check if current user has any event
						if( closureARTEvent.username == currentUsername && !hasCurrentUserEvent )
						{
							hasCurrentUserEvent = true;
						}
					}
					
					
					// ---------------------------------------------------------
					// Get Last action && Next action
					// ---------------------------------------------------------
					
					var actions = me.getLastAction( contactLogEventDate, contactLogEventContactType
							, contactLogDueDate, contactLogNextAction
							, openingARTEventDate, openingARTEventName
							, closureARTEventDate, closureEventLinkageOutcome );
					
					var statusNextActionIcon = ""; 
					if( actions.nextAction.statusColor != "" )
					{
						statusNextActionIcon = "<span class='glyphicon glyphicon-time' style='color:" + actions.nextAction.statusColor + "'></span>";
					}
						
					// Populate data in table
					var tranlatedText = me.translationObj.getTranslatedValueByKey( "allCaseList_msg_clickToOpenEditForm" );
					
					var rowTag = $("<tr clientId='" + clientId + "' title='" + tranlatedText + "' eventId='" + eventId + "' ></tr>");							
					rowTag.append( "<td style='display:none;'><span style='display:none;'>" + eventKey + "</span><span>" + eventDateStr + "</span></td>" );
					rowTag.append( "<td style='display:none;' filter='" + hasCurrentUserEvent + "' >Has current user event</td>" );
					rowTag.append( "<td style='display:none;' filter='" + isClosureEvent + "'>Closure event</td>" );
					rowTag.append( "<td filter='" + councilCode + "'>" + councilName + "</td>" );
					rowTag.append( "<td filter='" + facilityCode + "'>" + facilityName + "</td>" );
					rowTag.append( "<td>" + cuic + "</td>" );
					rowTag.append( "<td>" + daySinceDiagnosis + "</td>" );
					rowTag.append( "<td>" + actions.lastAction.date + "<br> " + actions.lastAction.action + "</td>" );
					rowTag.append( "<td>" + actions.nextAction.date + " " + statusNextActionIcon + "<br>" + actions.nextAction.action + "</td>" );
					
					me.addEventForRowInList(rowTag);
					
					tbodyTag.append( rowTag );
				}
			}
			
		}
		
		// Sortable
		me.sortTable( me.allFUTblTag );
		
		me.allFUNumberTag.html( me.allFUTblTag.find("tbody").find("tr:visible").length );
	};
		
	me.getLastAction = function( contactLogEventDate, contactLogEventContactType
			, contactLogDueDate, contactLogNextAction
			, openingARTEventDate, openingARTEventName
			, closureARTEventDate, closureEventLinkageOutcome )
	{
		var lastActionDate = "";
		var lastActionName = "";
		var nextActionDate = "";
		var nextActionName = "";
		var isClosed = false;
		var dueDate = "";
		
		
		// If [ART Referral - Opening] event existed, no [Contact Log] event, no [ART Referral - Closure]
		// --> Last action : ART Referral - Opening event DATE, [ART Referral - Opening event NAME]
		// --> Next action : ART Referral - Opening event DATE+7 Days, "Start follow-up"
		if( openingARTEventDate != "" && contactLogEventDate == "" && closureARTEventDate == "" )
		{
			var dueDateObj = Util.getLastXDateFromDateStr( openingARTEventDate, -7 );
			dueDate = Util.convertDateObjToStr( dueDateObj );
			
			lastActionDate = Util.formatDate_DisplayDate( openingARTEventDate );
			lastActionName = openingARTEventName;
			nextActionDate = Util.formatDateObj_DisplayDate( dueDateObj );
			nextActionName = me.translationObj.getTranslatedValueByKey( "allFU_startFollowUpAction" );
		}
		// If [ART Referral - Opening] and ART Referral - Closure] events existed
		// --> Last action : ART Referral - Closure event DATE, ART Referral - Closure event LINKAGE OUTCOME
		// --> Next action : [none]
		else if( openingARTEventDate != "" && closureARTEventDate != "" )
		{
			var tranlatedText = me.translationObj.getTranslatedValueByKey( "allCaseList_msg_actionNoneStatus" );
		
			lastActionDate = Util.formatDate_DisplayDate( closureARTEventDate );
			lastActionName = closureEventLinkageOutcome;
			nextActionDate = "";
			nextActionName = "[" + tranlatedText + "]";
			isClosed = true;
		}
		// If [ART Referral - Opening] and [Contact Log] events existed, no [ART Referral - Closure]
		// --> Last action : Last Contact Log event DATE, Last Contact Log event TYPE OF CONTACT
		// --> Next action : Last Contact Log event DUE DATE, Last Contact Log event NEXT ACTION
		else if( openingARTEventDate != "" && contactLogEventDate != "" && closureARTEventDate == "" )
		{
			dueDate = contactLogDueDate;
			var notSpecifiedText = me.translationObj.getTranslatedValueByKey( "contactLogEvent_msg_noneDueDate" );
			var dueDateStr = "[" + notSpecifiedText + "]";
			if( contactLogDueDate != "" )
			{
				dueDateStr = Util.formatDate_DisplayDate( contactLogDueDate );
			}
			
			lastActionDate = Util.formatDate_DisplayDate( contactLogEventDate );
			lastActionName = contactLogEventContactType;
			nextActionDate = dueDateStr;
			nextActionName = contactLogNextAction;
		}

		// Get status color of next action
		var statusColor = me.generateDueDateIconStatusColor( dueDate );
		
		return {
			"lastAction": {
				"date" : lastActionDate
				,"action" : lastActionName
			},
			"nextAction": {
				"date" : nextActionDate
				,"action" : nextActionName
				,"statusColor" : statusColor
			}
		};
	};
	
	me.generateDueDateIconStatusColor = function( dueDateStr )
	{
		var statusColor = "";
		if( dueDateStr != "" )
		{
			var dueDate = dueDateStr.substring( 0, 10 );		
			var today = Util.convertDateObjToStr( new Date() );
			
			if( dueDate > today )
			{
				statusColor = "green";
			}
			else if( dueDate == today )
			{
				statusColor = "orange";
			}
			else
			{
				statusColor = "red";
			}
		}
		
		return statusColor;
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
			me.mainPage.searchClientManagement.backToSearchClientResultBtnTag.hide();
			me.backToCaseListBtnTag.show();
			var clientId = rowTag.attr("clientId");
			var eventId = rowTag.attr("eventId");
			
			Util.resetPageDisplay();
			me.mainPage.clientFormManagement.loadClientDetails( clientId, eventId, function(){
				me.mainPage.clientFormManagement.addClientFormDivTag.show();
				me.mainPage.clientFormManagement.showTabInClientForm( me.mainPage.clientFormManagement.TAB_NAME_CONTACT_LOG );
			} );
		});
	};

	
	// -------------------------------------------------------------------------
	// Filter events
	// -------------------------------------------------------------------------
	
	me.filterEvents = function()
	{
		// STEP 1. Hide contents
		me.allFUTblTag.find("tbody").hide();
		me.allFUTblTag.find( 'tbody > tr' ).show();
		
		// STEP 2. Filter by username
		
		if( me.filterCurUserCasesChkTag.prop("checked") )
		{
			me.filterByColumnValues( 2, ["true"] );
		}
		
		if( !me.filterClosedCasesChkTag.prop("checked") )
		{
			me.filterByColumnValues( 3, ["false"] );
		}
		

		// STEP 3. Filter by District/Council
		var councils = Util.getCheckedInputValues( me.councilFilterTbTag );
		var healthFacilities = Util.getCheckedInputValues( me.healthFacilityFilterTbTag );
		
		if( councils.length > 0 )
		{
			me.filterByColumnValues( 4, councils );
		}
		else if( healthFacilities.length > 0 )
		{
			me.filterByColumnValues( 5, healthFacilities );
		}
		else
		{
			var districts = Util.getCheckedInputValues( me.districtFilterTbTag );
			if( councils.length == 0 && me.placeOfResidenceChkTag.prop("checked") )
			{
				me.filterByColumnValues( 4, districts );
			}
			else if ( healthFacilities.length == 0 && me.facilityReferredToChkTag.prop("checked") )
			{
				me.filterByColumnValues( 5, districts );
			}
		}

		me.allFUTblTag.find("tbody").show();
		me.allFUNumberTag.html( me.allFUTblTag.find("tbody").find("tr:visible").length );
	};
	
	
	me.filterByColumnValues = function( colIdx, searchValues )
	{
		var trRows = me.allFUTblTag.find( 'tbody > tr' );
		
		if ( searchValues.length > 0 )
		{
			var unmatchedRows = trRows.find( 'td:nth-child(' + colIdx + ')' ).filter( function()
			{
				var unmatched = true;
				for( var i in searchValues )
				{
					if( $( this ).attr("filter").indexOf( searchValues[i] ) >= 0 )
					{
						unmatched = false;
					}
				}
				
				return unmatched;
			});

			// Show the ones the matched
			unmatchedRows.each(function(){
				$(this).closest("tr").hide();
			});
		}
		
	};
	

	// Filter councils by selected district
	me.filterCouncilsByDistrict = function()
	{
		var districts = Util.getCheckedInputValues( me.districtFilterTbTag );
		me.councilFilterTbTag.find("tr[filter]").hide();
		me.councilFilterTbTag.find("tr[filter]").attr( "isChecked", false );
		
		if( districts.length > 0 )
		{
			for( var i in districts )
			{	
				var district = districts[i];
				var key = "";
				if( district == "LS11" || district == "LS12" )
				{
					key = "NA";
				}
				else
				{
					key = district;
				}
				
				var councilTags = me.councilFilterTbTag.find("tr[filter^='" + key + "']")
				councilTags.show();
				councilTags.attr( "isChecked", true );
			}
		}
		else
		{
			me.showCouncilNoFilter();
		}
		
		me.councilFilterTbTag.find("tr[isChecked='false']").find("input").prop("checked", false);
	};

	me.filterHealthFacilitiesByDistrict = function()
	{
		var districts = Util.getCheckedInputValues( me.districtFilterTbTag );
		me.healthFacilityFilterTbTag.find("tr[filter]").hide();
		me.healthFacilityFilterTbTag.find("tr[filter]").attr( "isChecked", false );
		
		if( districts.length > 0 )
		{
			for( var i in districts )
			{	
				var district = districts[i];
				var key = "";
				if( district == "LS11" || district == "LS12" )
				{
					key = "NA";
				}
				else
				{
					key = district;
				}
				
				var healthFacilityTags = me.healthFacilityFilterTbTag.find("tr[filter^='" + key + "']")
				healthFacilityTags.show();
				healthFacilityTags.attr( "isChecked", true );
			}
		}
		else
		{
			me.showHealthFacilityNoFilter();
		}
		
		me.healthFacilityFilterTbTag.find("tr[isChecked='false']").find("input").prop("checked", false);
	};
	
	me.showCouncilNoFilter = function()
	{
		me.councilFilterTbTag.find("tr").hide();
		me.councilFilterTbTag.find("tr[filter='none']").show();
	};

	me.showHealthFacilityNoFilter = function()
	{
		me.healthFacilityFilterTbTag.find("tr").hide();
		me.healthFacilityFilterTbTag.find("tr[filter='none']").show();
	};

	me.setFilterDataInfo = function()
	{
		var districts = Util.getCheckedInputTexts( me.districtFilterTbTag );
		var councils = Util.getCheckedInputTexts( me.councilFilterTbTag );
		var noneFilter = "[" + me.translationObj.getTranslatedValueByKey( "allFU_filterBy_ouNone" ) + "]";
		
		me.districtFilterInfoTag.html( noneFilter );
		me.councilFilterInfoTag.html( noneFilter );
		
		if( districts.length > 0 ){
			me.districtFilterInfoTag.html( districts.join("; ") );
		}
		
		if( councils.length > 0 ){
			me.councilFilterInfoTag.html( councils.join("; ") );
		}
	};
	
	
	// -------------------------------------------------------------------------
	// RUN init method
	// -------------------------------------------------------------------------
	
	me.init();
	
}