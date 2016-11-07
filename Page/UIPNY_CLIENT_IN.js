
	validateIsExist = function() {
		var result = jQuery.pg.callDataschemeSync("DSPNY_MD_CLIENT","",$_OCT("#idClientCode").val(),"","","","");
		if (result.length > 0) return false;
		else return true;
	}

