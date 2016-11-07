
validateIsExist = function() {
	var result = jQuery.pg.callDataschemeSync("DSPNY_MD_PRODUCT_TYPE","",$_OCT("#idProductCode").val(),"","","","");
	if (result.length > 0) return false;
	else return true;
}

