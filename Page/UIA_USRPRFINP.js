//UIA_USRPRFINP

afterLoad = function(page_id){
	var privVal = 0;
	$_OCT.each($_JSON_DATA["A_USPRIN"], function(idx, data){
		privVal = data.PRIVILEGE;
	});
	if(privVal == 1){
		$_OCT('#checkAdmin').prop('checked',true);
	} else if(privVal == 2){
		$_OCT('#checkUser').prop('checked',true);
	} else if(privVal == 3){
		$_OCT('#checkAdmin').prop('checked',true);
		$_OCT('#checkUser').prop('checked',true);
	}
  
	if($_OCT('#idNvrExp').prop('checked')==true){
		$_OCT('#idExp').hide();
		$_OCT('#labelExpired').hide();
	} else {
		$_OCT('#idExp').show();
		$_OCT('#labelExpired').show();
	}
	$_OCT('#idNvrExp').click(function() {
		check();
	});
	
	$_OCT("#idPass").change(function(){
		getPassword();
	}); 
        getPassword();
	$_OCT("#idBranch").val('0000');
		var valueJabatan = $_OCT('#idJabatan').val();
	if (valueJabatan == "SURVEYOR") {
		$_OCT(".groupSurveyor").show();
	} else {
		$_OCT(".groupSurveyor").hide();
	}
}			 
function check(){
  	if($_OCT('#idNvrExp').prop('checked')==true){
    	$_OCT('#idExp').val('01/01/4999');
    }
  
	if($_OCT('#idNvrExp').prop('checked')==true){
			$_OCT('#idExp').hide();
			$_OCT('#labelExpired').hide();
	 } else {
			$_OCT('#idExp').show();
			$_OCT('#labelExpired').show();
     }
}

function getPassword() {
        var userId = $_OCT("#idUser").val();
        var newPassword = $_OCT("#idPass").val();
        var bgp_parameter = userId + ";" + newPassword;
        
        if (newPassword.length > 0) {
        	var bgpEncryptPass = jQuery.pg.callBGPSync("ADM_ENCRYPTPASS", bgp_parameter);
        	//alert("bgpEncryptPass : " + bgpEncryptPass);
        	$_OCT("#idPassNew").val(bgpEncryptPass);
        }
}

function before_save(){
	if($_OCT('#checkAdmin').prop('checked')==true && $_OCT('#checkUser').prop('checked')==true){
		$_OCT('#privilege').val(3);
	} else if($_OCT('#checkUser').prop('checked')==true && $_OCT('#checkAdmin').prop('checked')==false){
		$_OCT('#privilege').val(2);
	} else if($_OCT('#checkAdmin').prop('checked')==true && $_OCT('#checkUser').prop('checked')==false){
		$_OCT('#privilege').val(1);
	}
	if($_OCT('#checkAdmin').prop('checked')==true){
		$_OCT('#invalidpwdcount').val(0);
	}
}

$_OCT('#idJabatan').change(function() {
	var valueJabatan = $_OCT('#idJabatan').val();
	if (valueJabatan == "SURVEYOR") {
		$_OCT(".groupSurveyor").show();
	} else {
		$_OCT(".groupSurveyor").hide();
	}
});