afterLoadInitiation = function(){
	var surveyTYpe = $_OCT('#txtSURVEY_TYPE').val();		
	
	if (surveyTYpe == "RK"){
		$_OCT(".clsRumah").show();
		$_OCT(".clsKantor").show();
	} else if (surveyTYpe == "R"){
			$_OCT(".clsRumah").show();
			$_OCT(".clsKantor").hide();
	}else if (surveyTYpe == "K"){
			$_OCT(".clsRumah").hide();
			$_OCT(".clsKantor").show();
		}else if (surveyTYpe == ""){
			$_OCT(".clsRumah").hide();
			$_OCT(".clsKantor").hide();
		}
}


beforeRejected = function(){
	if (!$_OCT.trim($_OCT("#txtNOTE_FOR_SUPERVISOR").val())) {
		$_OCT.oct.callModalDialog({
					message: "Note for Supervisor is Empty!",
					true_button_name: "Ok",
					_width: 320,
					_height: 160,
					callback_true_button: function(){
							return false;
					}
			});
            return false;
        }
}

ReqKdPs = function(){
	var PostCodeValue = $_OCT("#idKodePos").val();
	var PostData = jQuery.pg.callDataschemeSync("T_LOSINITIATIONPOSTCODES","",PostCodeValue,"","","","");
	if (PostData.length > 0) return true;
	else return false;
}

$_OCT('#txtSURVEY_TYPE').on('change', function() {
		var surveyTYpe = $_OCT('#txtSURVEY_TYPE').val();		
		
		if (surveyTYpe == "RK"){
			$_OCT(".clsRumah").show();
			$_OCT(".clsKantor").show();
		} else if (surveyTYpe == "R"){
				$_OCT(".clsRumah").show();
				$_OCT(".clsKantor").hide();
		}else if (surveyTYpe == "K"){
				$_OCT(".clsRumah").hide();
				$_OCT(".clsKantor").show();
			}else if (surveyTYpe == ""){
				$_OCT(".clsRumah").hide();
				$_OCT(".clsKantor").hide();
			}
});

ReqtxtSURVEY_METHOD = function(){
	var vtxtSURVEY_TYPE  = $_OCT('#txtSURVEY_TYPE').val();
	var vtxtSURVEY_METHOD  = $_OCT('#txtSURVEY_METHOD').val();
	if ((vtxtSURVEY_TYPE == "R" || vtxtSURVEY_TYPE == "RK") && vtxtSURVEY_METHOD == "" ){
		return false;
	} else{
		return true;
	}
}

ReqidKdPs = function(){
	var vtxtSURVEY_TYPE  = $_OCT('#txtSURVEY_TYPE').val();
	var vidKdPs  = $_OCT('#idKdPs').val();
	if ((vtxtSURVEY_TYPE == "R" || vtxtSURVEY_TYPE == "RK") && vidKdPs == "" ){
		return false;
	} else{
		return true;
	}
}

ReqtxtADDRESS1 = function(){
	var vtxtSURVEY_TYPE  = $_OCT('#txtSURVEY_TYPE').val();
	var vtxtADDRESS1  = $_OCT('#txtADDRESS1').val();
	if ((vtxtSURVEY_TYPE == "R" || vtxtSURVEY_TYPE == "RK") && vtxtADDRESS1 == "" ){
		return false;
	} else{
		return true;
	}
}

ReqidTelpNo = function(){
	var vtxtSURVEY_TYPE  = $_OCT('#txtSURVEY_TYPE').val();
	var vidTelpNo  = $_OCT('#idTelpNo').val();
	if ((vtxtSURVEY_TYPE == "R" || vtxtSURVEY_TYPE == "RK") && vidTelpNo == "" ){
		return false;
	} else{
		return true;
	}
}