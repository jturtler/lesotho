
function Validation( translationObj )
{
	var me = this;
	me.translationObj = translationObj;
	
	// ================================
	// == Tag Validations
	
	me.checkFormEntryTagsData = function( formTag )
	{	
		var allValid = true;

		// If any of the tag is not valid, mark it as invalid.
		formTag.find( "input,select" ).each( function() {
			if ( !me.checkValidations( $(this) ) )
			{
				allValid = false;
			}
		});
				
		return allValid;
	};
	

	me.checkValidations = function( tag )
	{	
		// Validation Initial Setting Clear
		tag.attr( 'valid', 'true' );
		var divTag = tag.closest( "td" );
		if( divTag.length == 0 ) divTag = tag.closest( "div.col-sm-10" );
		divTag.find( "span.errorMsg" ).remove();
		
		if ( tag.is( ':visible' ) )
		{		
			me.performValidationCheck( tag, 'mandatory', divTag );
			me.performValidationCheck( tag, 'minlength', divTag );
			me.performValidationCheck( tag, 'exactlength', divTag );
			me.performValidationCheck( tag, 'maxlength', divTag );
			me.performValidationCheck( tag, 'maxvalue', divTag );
			me.performValidationCheck( tag, 'minvalue', divTag );
			me.performValidationCheck( tag, 'number', divTag );
		}

		var valid = ( tag.attr( 'valid' ) == 'true' );
		
		// If not valid, set the background color.
		tag.attr( 'background-color', ( valid ) ? '' : me.COLOR_WARNING );
		
		return valid;
	};
	
	me.performValidationCheck = function( tag, type, divTag )
	{		
		// check the type of validation (if exists in the tag attribute)
		// , and if not valid, set the tag as '"valid"=false' in the attribute
		var valid = true;
		var validationAttr = tag.attr( type );
		
		// If the validation attribute is present in the tag
		if ( validationAttr )
		{						
			if ( type == 'mandatory' ) valid = me.checkRequiredValue( tag, divTag );
			else if ( type == 'minlength' ) valid = me.checkValueLen( tag, divTag, 'min', Number( validationAttr ) );
			else if ( type == 'maxlength' ) valid = me.checkValueLen( tag, divTag, 'max', Number( validationAttr ) );
			else if ( type == 'exactlength' ) valid = me.checkValueLen( tag, divTag, 'exactlength', Number( validationAttr ) );
			else if ( type == 'maxvalue' ) valid = me.checkValueRange( tag, divTag, 0, Number( validationAttr ) );
			else if ( type == 'number' ) valid = me.checkValueNumber( tag, divTag );
			else if ( type == 'phoneNumValidate' ) valid = me.checkPhoneNumberValue( tag, divTag );
			
			if ( !valid ) tag.attr( 'valid', false );
		}		
	};
	
	
	// ------------------------------
	// -- Each type validation
	
	me.checkRequiredValue = function( inputTag, divTag )
	{
		var valid = true;
		var value = inputTag.val();

		if( value === "" && inputTag.attr('mandatory') === 'true' )
		{
			divTag.append( me.getErrorSpanTag( 'Enter data in this field' ) );
			valid = false;
		}
		
		return valid;
	};
	
	me.checkValueLen = function( inputTag, divTag, type, length )
	{		
		var valid = true;
		var value = inputTag.val();
		
		if ( value && type == 'min' && value.length < length )
		{
			divTag.append( me.getErrorSpanTag( 'common_validation_minLength' ) );
			valid = false;
		}
		else if ( value && type == 'max' && value.length > length )
		{
			divTag.append( me.getErrorSpanTag( 'common_validation_maxLength' ) );
			valid = false;
		}
		else if ( value && type == 'exactlength' && value.length != length )
		{
			divTag.append( me.getErrorSpanTag( 'common_validation_exactLength' ) );
			divTag.append( me.getErrorSpanTag( length ) );
			divTag.append( me.getErrorSpanTag( 'common_validation_exactCharacter' ) );
			valid = false;
		}
		
		
		return valid;
	};


	me.checkValueRange = function( inputTag, divTag, valFrom, valTo )
	{
		var valid = true;
		var value = inputTag.val();
		
		if ( value && ( valFrom > value || valTo < value ) )
		{
			divTag.append( me.getErrorSpanTag( 'common_validation_valueMax' ) );
			divTag.append( me.getErrorSpanTag( value ) );
			valid = false;
		}
		
		return valid;		
	};
	
	me.checkValueNumber = function( inputTag, divTag )
	{
		var valid = true;
		var value = inputTag.val();
		
		if ( value && !( !isNaN(parseFloat(value)) && isFinite(value) ) )
		{
			divTag.append( me.getErrorSpanTag( 'common_validation_valueNumber' ) );
			valid = false;
		}
		
		return valid;	
	};

	me.checkPhoneNumberValue = function( inputTag, divTag )
	{
		var valid = true;
		
		// Check if Phone number is in [ 12, 15 ]
		inputTag.attr( 'altval', '' );

		var validationInfo = Commons.phoneNumberValidation( inputTag.val() );		
		if ( !validationInfo.success ) 
		{
			divTag.append( me.getErrorSpanTag( validationInfo.msg ) );
			valid = false;			
		}
		else
		{
			// If valid phone number, put the converted phone number as attribute to be used later.
			inputTag.attr( 'altval', validationInfo.phoneNumber );
		}
		
		return valid;
	};
	
	// -----------------------------
	// -- Others
	
	me.getErrorSpanTag = function( keyword )
	{
		var text = me.translationObj.getTranslatedValueByKey( keyword );
		return  $( "<span class='errorMsg' keyword='" + keyword + "'>" + text + "</span>" );		
	};
	
	me.clearTagValidations = function( tags )
	{
		tags.css( "background-color", "" ).val( "" ).attr( "altval", "" );
		
		tags.each( function() {
			$( this ).closest( "div" ).find( "span.errorMsg" ).remove();
		});		
	};	
}