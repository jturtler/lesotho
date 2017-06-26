
function CoordinatorListManagement( _mainPage )
{
	var me = this;
	me.mainPage = _mainPage;
	me.storageObj = me.mainPage.storageObj;
	me.translationObj = me.mainPage.translationObj;

	me.clientFormManagement = me.mainPage.clientFormManagement;

	me.filterDistricts = me.mainPage.settingsManagement.filterDistricts;
	me.filterCouncils = me.mainPage.settingsManagement.filterCouncils;
	
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
	
	// Filter
	
	me.filterCurUserCasesChkTag = $("#filterCurUserCasesChk");
	me.filterClosedCasesChkTag = $("#filterClosedCasesChk");
	me.placeOfResidenceChkTag = $("#placeOfResidenceChk");

	me.ouFilterTbTag = $("#ouFilterTb");
	me.ouFilterInforTag = $("#ouFilterInfor");
	me.ouFilterHeaderTrTag = $("#ouFilterHeaderTr");
	me.districtFilterTbTag = $("#districtFilterTb");
	me.councilFilterTbTag = $("#councilFilterTb");
	me.districtFilterInfoTag = $("#districtFilterInfo");
	me.councilFilterInfoTag = $("#councilFilterInfo");
	
	

	me.backToCaseListBtnTag = $("[name='backToCaseListBtn']");
	
	
	// ---------------------------------------------------------------------------------------------------------------------------
	// Init method
	// ---------------------------------------------------------------------------------------------------------------------------
	
	me.init = function()
	{
		me.createDistrictFilter();
		me.createCouncilFilter();
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
			if( me.mainPage.currentList == me.mainPage.PAGE_TODAY_FU_LIST )
			{
				me.registerClientBtnTag.show();
				me.listTodayCases();
			}
			else if( me.mainPage.currentList == me.mainPage.PAGE_ALL_FU_LIST )
			{
				me.registerClientBtnTag.hide();
				me.listAllCase();
			}
		});
		

		// Open "Search/Add client" form from "Today Cases" list
		
		me.registerClientBtnTag.click(function(){
			Util.resetPageDisplay();
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
			me.filterEvents();
		});
		
		me.councilFilterTbTag.find("input").click( me.filterEvents );
		me.filterCurUserCasesChkTag.click( me.filterEvents );
		me.filterClosedCasesChkTag.click( me.filterEvents );
		me.placeOfResidenceChkTag.click( me.filterEvents );
		
		
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
			rowTag.append( "<td>" + name + "</td>" );
			rowTag.append( "<td><input type='checkbox' value='" + code + "'</td>" );
			me.districtFilterTbTag.append( rowTag );
		}
	};
	
	me.createCouncilFilter = function()
	{
		var noneFilter = me.translationObj.getTranslatedValueByKey( "allFU_filterBy_ouNone" );
    	
		var emptyRowTag = $( "<tr filter='none'></tr>" );
		emptyRowTag.append( "<td style='font-style:italic;'>[" + noneFilter + "]</td>" );
		emptyRowTag.append( "<td></td>" );
		me.councilFilterTbTag.append( emptyRowTag );
		
		for( var i in me.filterCouncils )
		{
			var name = me.filterCouncils[i].name;
			var code = me.filterCouncils[i].code;
			
			var rowTag = $( "<tr filter='" + code + "' isChecked='false'></tr>" );
			rowTag.append( "<td>" + name + "</td>" );
			rowTag.append( "<td><input type='checkbox' value='" + code + "'</td>" );
			me.councilFilterTbTag.append( rowTag );
		}
		
		me.showCouncilNoFilter();
	}
	
	// -------------------------------------------------------------------------
	// Load list of cases
	// -------------------------------------------------------------------------
	
	me.listTodayCases = function( exeFunc )
	{
		me.mainPage.setCurrentPage( me.mainPage.PAGE_TODAY_FU_LIST );
		me.storageObj.addItem( "page", me.PAGE_TODAY_FU_LIST );
		me.storageObj.removeItem( "subPage" );		
		
		me.todayFUDateTag.html( Util.formatDate_LastNDate(0) );
		me.listCases( "../event/todayFU", function( list )
		{
			me.populateTodayFU( list );
			if( exeFunc !== undefined ) exeFunc();

			// Show table			
			MsgManager.appUnblock();
			me.todayCaseTblTag.show();
			me.todayFUListTag.show("fast");
		} );
	}
		
	me.listAllCase = function( exeFunc )
	{
		me.mainPage.setCurrentPage( me.mainPage.PAGE_ALL_FU_LIST );
		me.storageObj.addItem("page", me.PAGE_ALL_FU_LIST);
		me.storageObj.removeItem( "subPage" );
		
		me.resetOrgUnitFilter();
		
		me.listCases( "../event/allFU", function( list ){
			me.populateAllFUData( list )
			
			if( exeFunc !== undefined ) exeFunc();

			// Show table	
			MsgManager.appUnblock();
			me.allFUTblTag.show();
			me.allFUListTag.show("fast");
		} );
	};
		
	me.listCases = function( url, exeFunc )
	{
		me.storageObj.removeItem("param" );
		
		var tranlatedText = me.translationObj.getTranslatedValueByKey( "common_msg_loadingData" );
		
		Util.resetPageDisplay();
		
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
		var tbodyTag = me.allFUTblTag.find("tbody");
		tbodyTag.find("tr").remove();
		
		if( list.length > 0 )
		{
			for( var i in list )
			{
				var event = list[i];
				
				var clientId = event[0];
				var eventId = event[1];
				var eventDate = event[2];
				var isClosureEvent = ( event[12] != "" ) ? "closed" : "opened";
				var closureARTEventUsername = event[13];
				var contactLogEventUsername = event[14];
				var username = "[" + closureARTEventUsername + "]-[" + closureARTEventUsername + "]";
				
				var councilNameAndCode = event[5];
				var councilName = ( councilNameAndCode != "" ) ? councilNameAndCode.split("***")[0] : "";
				var councilCode = ( councilNameAndCode != "" ) ? councilNameAndCode.split("***")[1] : "";
				var facilityRefer = event[6];
				var cuic = event[3];
				var daySinceDiagnosis = event[11];
				var nextAction = event[7];
				var lastActionDate = ( event[8] !== "" ) ? Util.formatDate_DisplayDate( event[8] ): "";
				var nextAction = event[9];
				var nextActionDate =( event[10] !== "" ) ? Util.formatDate_DisplayDate( event[10] ): "";
				
				eventDate = ( eventDate !== undefined ) ? eventDate : "";
				var eventDateStr = eventDate;
				if( eventDate !== "" )
				{
					eventDateStr = Util.formatDate_DisplayDate( eventDate );
				}

				var eventKey = eventDate.substring(11, 19).split(":").join("");
				
				var tranlatedText = me.translationObj.getTranslatedValueByKey( "allCaseList_msg_clickToOpenEditForm" );
				var rowTag = $("<tr clientId='" + clientId + "' title='" + tranlatedText + "' eventId='" + eventId + "' ></tr>");							
				rowTag.append( "<td style='display:none;'><span style='display:none;'>" + eventKey + "</span><span>" + eventDateStr + "</span></td>" );
				rowTag.append( "<td style='display:none;' filter='" + username + "' >" + username + "</td>" );
				rowTag.append( "<td style='display:none;' filter='" + isClosureEvent + "'></td>" );
				rowTag.append( "<td filter='" + councilCode + "'>" + councilName + "</td>" );
				rowTag.append( "<td>" + facilityRefer + "</td>" );
				rowTag.append( "<td>" + cuic + "</td>" );
				rowTag.append( "<td>" + daySinceDiagnosis + "</td>" );
				rowTag.append( "<td>" + nextAction + "<br> " + lastActionDate + "</td>" );
				rowTag.append( "<td>" + nextAction + "<br>" + nextActionDate + "</td>" );
				
				me.addEventForRowInList(rowTag);
				
				tbodyTag.append( rowTag );
			}
			
		}
		
		// Sortable
		me.sortTable( me.allFUTblTag );
		
		me.allFUNumberTag.html( me.allFUTblTag.find("tbody tr").length );
	}
	
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
			var currentUsername = me.mainPage.settingsManagement.loginUsername;
			me.filterByColumnValues( 2, [currentUsername] );
		}
		
		if( me.filterClosedCasesChkTag.prop("checked") )
		{
			me.filterByColumnValues( 3, ["closed"] );
		}
		

		// STEP 3. Filter by District/Council
		var councils = Util.getCheckedInputValues( me.councilFilterTbTag );
		if( councils.length > 0 )
		{
			me.filterByColumnValues( 4, councils );
		}
		else
		{
			var districts = Util.getCheckedInputValues( me.districtFilterTbTag );
			me.filterByColumnValues( 4, districts );
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

	me.showCouncilNoFilter = function()
	{
		me.councilFilterTbTag.find("tr").hide();
		me.councilFilterTbTag.find("tr[filter='none']").show();
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
	
	me.resetOrgUnitFilter = function()
	{
		me.filterCurUserCasesChkTag.prop("checked", false );
		me.filterClosedCasesChkTag.prop("checked", false );
		me.placeOfResidenceChkTag.prop("checked", false );
		me.districtFilterTbTag.find('input:checkbox:checked').prop("checked", false );
		me.councilFilterTbTag.find('input:checkbox:checked').prop("checked", false );
		
		// Collapse OU filter table
		var imgTag = me.ouFilterHeaderTrTag.find("img");
		imgTag.attr( "src", "../images/tab_right.png" );
		imgTag.removeClass('arrowDownImg');
		imgTag.addClass('arrowRightImg');
		me.ouFilterTbTag.hide();
		me.setFilterDataInfo();
		me.ouFilterInforTag.show("fast");
	};
	
	
	// -------------------------------------------------------------------------
	// RUN init method
	// -------------------------------------------------------------------------
	
	me.init();
	
}