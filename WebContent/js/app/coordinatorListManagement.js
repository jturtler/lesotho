
function CoordinatorListManagement( _mainPage )
{
	var me = this;
	me.mainPage = _mainPage;
	me.storageObj = me.mainPage.storageObj;
	me.translationObj = me.mainPage.translationObj;


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
	
	
	// ---------------------------------------------------------------------------------------------------------------------------
	// Init method
	// ---------------------------------------------------------------------------------------------------------------------------
	
	me.init = function()
	{
		me.setUp_Events();
	};
	
	
	// ---------------------------------------------------------------------------------------------------------------------------
	// Set up events
	// ---------------------------------------------------------------------------------------------------------------------------
	
	me.setUp_Events = function()
	{
		me.setUp_FloatButton();
		window.addEventListener( "resize", me.setUp_FloatButton );
		
		me.todayFULinkTag.click(function(e){
			console.log("todayFULinkTag");
			$('.overlay').click();
			
			me.settingsManagement.checkOrgunitSetting( function(){
				me.registerClientBtnTag.show();
				me.listTodayCases();
			});
		});
		
		me.allFULinkTag.click(function(){
			$('.overlay').click();
			
			me.settingsManagement.checkOrgunitSetting( function(){
				me.registerClientBtnTag.hide();
				me.listAllCase();
			});
		});
		
		// Back to [Current Cases]
		
		me.backToCaseListBtnTag.click(function(){
//			if( me.mainPage.currentList == me.mainPage.PAGE_TODAY_LIST )
//			{
//				me.registerClientBtnTag.show();
//				me.listTodayCases();
//			}
//			else if( me.mainPage.currentList == me.mainPage.PAGE_PREVIOUS_LIST )
//			{
//				me.registerClientBtnTag.hide();
//				me.listPreviousCases();
//			}
//			else if( me.mainPage.currentList == me.mainPage.PAGE_POSITIVE_LIST )
//			{
//				me.registerClientBtnTag.hide();
//				me.listPositiveCases();
//			}
		});
		
		

		// Open "Search/Add client" form from "Today Cases" list
		
		me.registerClientBtnTag.click(function(){
			Util.resetPageDisplay();
			me.clientManagement.resetSearchClientForm();
			me.clientManagement.showSearchClientForm();
		});
	};
	
	
	// -------------------------------------------------------------------
	// Load list of cases
	// -------------------------------------------------------------------
	
	me.listTodayCases = function( exeFunc )
	{
		me.currentList = me.PAGE_TODAY_LIST;
		me.storageObj.addItem( "page", me.PAGE_TODAY_LIST );
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
		me.currentList = me.PAGE_ALL_LIST;
		me.storageObj.addItem("page", me.PAGE_ALL_LIST);
		me.storageObj.removeItem( "subPage" );
		
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
				var lastAction = event[7];
				var referStatus = event[4];
				
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
				rowTag.append( "<td>" + lastAction + "</td>" );
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
				
				var council = event[5];
				var facilityRefer = event[6];
				var cuic = event[3];
				var daySinceDiagnosis = event[11];
				var lastAction = event[7];
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
				rowTag.append( "<td><span style='display:none;'>" + eventKey + "</span><span>" + eventDateStr + "</span></td>" );
				rowTag.append( "<td>" + council + "</td>" );
				rowTag.append( "<td>" + facilityRefer + "</td>" );
				rowTag.append( "<td>" + cuic + "</td>" );
				rowTag.append( "<td>" + daySinceDiagnosis + "</td>" );
				rowTag.append( "<td>" + lastAction + "<br> " + lastActionDate + "</td>" );
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
			clientManagement.backToSearchClientResultBtnTag.hide();
			me.backToCaseListBtnTag.show();
			var clientId = rowTag.attr("clientId");
			var eventId = rowTag.attr("eventId");
			
			Util.resetPageDisplay();
			me.loadClientDetails( clientId, eventId, function(){
				me.addClientFormDivTag.show();
			} );
		});
	};
	
	
}