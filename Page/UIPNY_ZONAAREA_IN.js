ReqKdPs = function(){
	var PostCodeValue = $_OCT("#idKodePos").val();
	var PostData = jQuery.pg.callDataschemeSync("T_LOSINITIATIONPOSTCODES","",PostCodeValue,"","","","");
	if (PostData.length > 0) return true;
	else return false;
}