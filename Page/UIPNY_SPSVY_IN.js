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
	
	if ($_OCT("#txtAPPL_STATUS").val() == "SP"){
		$_OCT("#idbtnProceed").show();
	} else {
		$_OCT("#idbtnProceed").hide();
	}
}

beforeAssigment = function(callback_params){
			$_OCT.oct.callModalDialog({
				title : "Confirmation",
				message : "Are you sure want Assigment to Other Surveyor?",
				true_button_name : "Ok",
				false_button_name : "Cancel",
				_width : 320,
				_height : 160,
				callback_true_button : function () {
					if (!$_OCT.trim($_OCT("#idSurveyorName").val())) {
						$_OCT.oct.callModalDialog({
									message: "Surveryor is empty, Please Fill!",
									true_button_name: "Ok",
									_width: 320,
									_height: 160,
									callback_true_button: function(){
											return false;
									}
							});							
						}  else {
								__AFTER_APPROVEFLOW(callback_params);
						}
				}
			});
			
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