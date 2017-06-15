

function CounsellorListMaganement( _counsellorObj, storageObj, translationObj )
{
	var me = this;
	me.counsellorObj = _counsellorObj;
	me.storageObj = storageObj;
	me.translationObj = translationObj;
	
	// Today cases
	me.todayCaseListTag = $("#todayCaseList");
	me.todayCaseTblTag = $("#todayCaseTbl");
	me.listDateTag = $("#listDate");
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
	

	// ---------------------------------------------------------------------------------------------------------------------------
	// Load cases
	// ---------------------------------------------------------------------------------------------------------------------------
	
	me.listTodayCases = function( exeFunc )
	{
		me.counsellorObj.setCurrentPage( me.counsellorObj.PAGE_TODAY_LIST );
		me.storageObj.addItem( "page", me.counsellorObj.PAGE_TODAY_LIST );
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
		me.counsellorObj.setCurrentPage( me.counsellorObj.PAGE_PREVIOUS_LIST );
		me.storageObj.addItem("page", me.counsellorObj.PAGE_PREVIOUS_LIST);
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
		me.counsellorObj.setCurrentPage( me.counsellorObj.PAGE_POSITIVE_LIST );
		me.storageObj.addItem("page", me.counsellorObj.PAGE_POSITIVE_LIST);
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

	
	// ---------------------------------------------------------------------------------------------------------------------------
	// Load data from server
	// ---------------------------------------------------------------------------------------------------------------------------
	
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
				me.counsellorObj.showExpireSessionMessage();					
			}
		});	
		
	};

	
	// ---------------------------------------------------------------------------------------------------------------------------
	// Populate data to tables
	// ---------------------------------------------------------------------------------------------------------------------------
	
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
				var artStatus = event[7];
				artStatus = ( artStatus == "" ) ? "[None]" : artStatus;
				var numberOfTest = event[5];
				var openingFacility = event[8];
				
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
				rowTag.append( "<td>" + artStatus + "</td>" );
				rowTag.append( "<td>" + openingFacility + "</td>" );

				me.addEventForRowInList(rowTag);
				
				tbodyTag.append( rowTag );
			}
			
		}
		
		// Sortable

		me.sortTable( me.positiveCaseTblTag );
		
		me.positiveCaseNumberTag.html( me.positiveCaseTblTag.find("tbody tr").length );
	};

	// Sort table
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
	
	// Set up event for rows in table - Show Client Details when a row is clicked
	me.addEventForRowInList = function(rowTag)
	{
		rowTag.css("cursor", "pointer");
		rowTag.click( function(){
			me.counsellorObj.backToSearchClientResultBtnTag.hide();
			me.counsellorObj.backToCaseListBtnTag.show();
			var clientId = rowTag.attr("clientId");
			var eventId = rowTag.attr("eventId");
			
			Util.resetPageDisplay();
			me.counsellorObj.loadClientDetails( clientId, eventId, function(){
				me.counsellorObj.addClientFormDivTag.show();
			} );
		});
	};
	
}