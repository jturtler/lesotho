
function LoginForm( storageObj, translationObj )
{
	var me = this;
	
	me.storageObj = storageObj;
	me.translationObj = translationObj;
	me.validationObj = new Validation( translationObj );
	
	me.userNameTag = $("#username");
	me.passwordTag = $("#password");
	me.errorMessageTag = $("#errorMessage");
	me.orgUnitListTag =  $("#orgUnitList");
	me.loginBtnTag =  $("#loginBtn");
	me.loginFormTag = $("#loginForm");
	
	me.init = function()
	{
		me.clearPageParamInStorage();
		me.loadOuList();
		me.clear();
		me.setupEvents();
	};
	
	me.clearPageParamInStorage = function()
	{
		me.storageObj.removeItem( "page" );
		me.storageObj.removeItem( "subPage" );
		me.storageObj.removeItem( "cuic" );
		me.storageObj.removeItem( "param" );
		me.storageObj.removeItem( "clientId" );
		me.storageObj.removeItem( "eventId" );
	};

	// -------------------------------------------------------------------------------
	// Set-up events
	// -------------------------------------------------------------------------------
	
	me.setupEvents = function()
	{
		// Orgunit selector in 'Settings'

		me.orgUnitListTag.change(function(){
			me.storageObj.addItem( me.storageObj.KEY_STORAGE_ORGUNIT, me.orgUnitListTag.val() );	
		});
		
		
		$( '.idpass_populate1' ).click( function()
		{
			var idpassTag = $( this );
			
			// clear the data
			me.userNameTag.val( '' ).css( 'background-color', '#EBF4FA' );
			me.passwordTag.val( '' ).css( 'background-color', '#EBF4FA' );
			
			setTimeout( function() 
			{
				me.userNameTag.val( "TES001" ).css( 'background-color', '' );
				me.passwordTag.val( '1234' ).css( 'background-color', '' );
			}
			, 300 );				
		});	
		
		
		$( '.idpass_populate2' ).click( function()
		{
			var idpassTag = $( this );
			
			// clear the data
			me.userNameTag.val( '' ).css( 'background-color', '#EBF4FA' );
			me.passwordTag.val( '' ).css( 'background-color', '#EBF4FA' );
			
			setTimeout( function() 
			{
				me.userNameTag.val( "TES002" ).css( 'background-color', '' );
				me.passwordTag.val( '1234' ).css( 'background-color', '' );
			}
			, 300 );				
		});	
			
	
		me.loginFormTag.submit(function(){
			return me.login();
		});
		
		me.loginFormTag.find("input,select").change( function() {
			me.errorMessageTag.html("");
			me.validationObj.checkValidations( $(this) );
		});
	},

	
	// -------------------------------------------------------------------------------
	// Ajax
	// -------------------------------------------------------------------------------
	
	me.clear = function()
	{
		$.get( "clearSession" );
	},
	
	me.login = function()
	{
		me.errorMessageTag.html("");
		
		if( me.userNameTag.val() == "" || me.passwordTag.val() == "" )
		{
			var tranlatedText = me.translationObj.getTranslatedValueByKey( "login_msg_enterUserNameOrPassword" );
			me.errorMessageTag.html( tranlatedText );
		}
		else
		{
			if( me.validationObj.checkFormEntryTagsData( me.loginFormTag ) )
			{	
				var tranlatedText = me.translationObj.getTranslatedValueByKey( "login_msg_logging" );
				MsgManager.appBlock( tranlatedText + " ..." );
			
				$.ajax(
					{
							type: "POST"
							,url: "login"
							,dataType: "json"
							,headers: {
						        'usr': me.userNameTag.val()
						        ,'pwd': me.passwordTag.val()
						    }
				            ,contentType: "application/json;charset=utf-8"
							,success: function( response ) 
							{
								window.location.href = "pages/counsellor.html";
							},
							error: function(a,b,c)
							{
								var tranlatedText = me.translationObj.getTranslatedValueByKey( "login_msg_wrongUsernamePassword" );
								me.errorMessageTag.html( tranlatedText + "!");
								MsgManager.appUnblock();
							}
					});
			}
		}
		
		return false;
	}
	
	me.loadOuList = function()
	{
		var tranlatedText = me.translationObj.getTranslatedValueByKey( "common_msg_initializing" );
		MsgManager.appBlock( tranlatedText + " ...");
		me.errorMessageTag.html("");
		
		$.ajax({
			type: "POST"
			,url: "metaData/ouList"
			,dataType: "json"
            ,contentType: "application/json;charset=utf-8"
			,success: function( jsonData ) 
			{
				me.orgUnitListTag.append("<option value=''>[Please select]</option>");
				for( var i in jsonData.organisationUnits )
				{
					var orgUnit = jsonData.organisationUnits[i];
					me.orgUnitListTag.append("<option value='" + orgUnit.id + "'>" + orgUnit.name + "</option>");
				}

				me.orgUnitListTag.val( me.storageObj.getItem( me.storageObj.KEY_STORAGE_ORGUNIT ) );
				

				MsgManager.appUnblock();
			}
		});
		
	}
	
	// -------------------------------------------------------------------------------------------------
	// Init
	// -------------------------------------------------------------------------------------------------
	
	me.init();
}