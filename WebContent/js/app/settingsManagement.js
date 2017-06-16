
function SettingsManagement( _counsellorObj, _storageObj, _translationObj, _afterLoadedMetaDataFunc )
{
	var me = this;
	
	me.counsellorObj = _counsellorObj;
	me.storageObj = _storageObj;
	me.translationObj = _translationObj;
	me.afterLoadedMetaDataFunc = _afterLoadedMetaDataFunc;

	// [APP Header]
	me.headerOrgUnitTag = $("#headerOrgUnit");
	me.headerSettingsLinkTag = $("#headerSettingsLink");
	
	// [Settings]
	me.settingsDivTag = $("#settingsDiv");
	me.districtListTag =  $("#districtList");
	me.orgUnitListTag =  $("#orgUnitList");
	me.loadingOuListImgTag = $("#loadingOuListImg");
	me.updateTransBtnTag = $("#updateTransBtn");
	me.hideHIVTestLogicActionTag = $("#hideHIVTestLogicAction");
	
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
	
	me.metaData;
	
	me.userInfoLoaded = false;
	me.metadataLoaded = false;
	me.orgUnitListLoaded = false;

	// ---------------------------------------------------------------------------------------------------------------------------
	// Init methods
	// ---------------------------------------------------------------------------------------------------------------------------
	
	me.init = function()
	{
		me.hideHIVTestLogicActionTag.val( me.storageObj.getItem( me.storageObj.KEY_STORAGE_HIDE_HIV_TEST_LOGIC_ACTION_FIELDS ) );	
		me.setupVersion();
		me.setUp_Events();
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
	
	// ---------------------------------------------------------------------------------------------------------------------------
	// Set up Events
	// ---------------------------------------------------------------------------------------------------------------------------
	
	me.setupVersion = function()
	{
		me.versionTag.text( Commons.VERSION );
		me.versionDateTag.text( Commons.VERSION_DATE );
	};	
	
	me.setUp_Events = function()
	{	
		// ------------------------------------------------------------------
		// Show [Settings] form from Header
		// ------------------------------------------------------------------
		
		me.headerSettingsLinkTag.click(function(){
			me.storageObj.addItem("page", me.PAGE_SETTINGS);
			Util.resetPageDisplay();
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
				var district = me.districtListTag.val();
				if( district !== "" )
				{
					me.loadOrgUnitList();
				}
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
		
		// Add Logic for "HIV Test" in entry form
		me.hideHIVTestLogicActionTag.change( function(){
			me.storageObj.addItem( me.storageObj.KEY_STORAGE_HIDE_HIV_TEST_LOGIC_ACTION_FIELDS, me.hideHIVTestLogicActionTag.val() );

			var translatedText = me.translationObj.getTranslatedValueByKey( "common_msg_settingsHideLogicActionFieldsSaved" );
			MsgManager.msgAreaShow( translatedText, "SUCCESS" );
		});
		
	};
	
	
	// ---------------------------------------------------------------------------------------------------------------------------
	// Load data from server
	// ---------------------------------------------------------------------------------------------------------------------------
	
	// Load OrgUnit list
	
	me.loadOrgUnitList = function( exeFunc )
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
				me.metaData = jsonData;
				
				// Populate orgunit list in 'Settings'
				
				me.districtListTag.append("<option value=''>[Please select]</option>");
				for( var i in jsonData.districts.organisationUnits )
				{
					var orgUnit = jsonData.districts.organisationUnits[i];
					me.districtListTag.append("<option value='" + orgUnit.id + "'>" + orgUnit.name + "</option>");
				}

				me.districtListTag.val( me.storageObj.getItem( me.storageObj.KEY_STORAGE_DISTRICT ) );
				me.populateOrgUnitList();
				
				me.metadataLoaded = true;
				me.checkAndLoadDataAfterInit();
			},
			error: function(a,b,c)
			{
				console.log("ERROR");
			}
		});
	};
	
	
	// ----------------------------------------------------------------------------
	// Populate data
	// ----------------------------------------------------------------------------

	
	me.populateOrgUnitList = function()
	{
		me.loadOrgUnitList( function(){
			me.orgUnitListLoaded = true;
			me.checkAndLoadDataAfterInit();
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
	
	me.checkAndLoadDataAfterInit = function()
	{
		if( me.userInfoLoaded && me.metadataLoaded && me.orgUnitListLoaded )
		{
			me.afterLoadedMetaDataFunc( me.metaData );
		}
	};
	
	
	// ---------------------------------------------------------------------------------------------------------------------------
	// Show expire session message
	// ---------------------------------------------------------------------------------------------------------------------------
	
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
		
	};
	
	// ===========================================================================================================================
	// RUN Init methods
	// ===========================================================================================================================
	
	me.init();
}