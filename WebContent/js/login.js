
function LoginForm( storageObj )
{
	var me = this;
	
	me.storageObj = storageObj;
	
	me.userNameTag = $("#username");
	me.passwordTag = $("#password");
	me.errorMessageTag = $("#errorMessage");
	me.orgUnitListTag =  $("#orgUnitList");
	
	me.init = function()
	{
		me.loadOuList();
		me.clear();
		me.setupEvents();
	},
	

	// -------------------------------------------------------------------------------
	// Set-up events
	// -------------------------------------------------------------------------------
	
	me.setupEvents = function()
	{
		// Orgunit selector in 'Settings'

		me.orgUnitListTag.change(function(){
			me.storageObj.addItem( me.storageObj.KEY_STORAGE_ORGUNIT, me.orgUnitListTag.val() );	
		});
		
		// 
		
		$( '.idpass_populate' ).click( function()
		{
			var idpassTag = $( this );
			
			// clear the data
			me.userNameTag.val( '' ).css( 'background-color', '#EBF4FA' );
			me.passwordTag.val( '' ).css( 'background-color', '#EBF4FA' );
			
			setTimeout( function() 
			{
				me.userNameTag.val( "TES001" ).css( 'background-color', '' );
				me.passwordTag.val( 'Test1234' ).css( 'background-color', '' );
			}
			, 300 );				
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
		MsgManager.appBlock("Login ...");
		
		me.errorMessageTag.html("");
		
		$.ajax(
		{
				type: "POST"
				,url: "login"
				,dataType: "json"
				,headers: {
			        'usr':me.userNameTag.val()
			        ,'pwd':me.passwordTag.val()
			    }
	            ,contentType: "application/json;charset=utf-8"
				,success: function( response ) 
				{
					window.location.href = "pages/counsellor.html";
				},
				error: function(a,b,c)
				{
					me.errorMessageTag.html("Wrong username/password!");
					MsgManager.appUnblock();
				}
		});
		
	}
	
	me.loadOuList = function()
	{
		MsgManager.appBlock("Initializing ...");
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