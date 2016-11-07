//UIA_USRPRFADD

afterLoad = function(page_id){			
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

if ($__MODE == "ADD") {
  $_OCT("#idPass").val("");
}
  
$_OCT("#idPass").change(function(){
	var userId = $_OCT("#idUser").val();
	var newPassword = $_OCT("#idPass").val();
	var bgp_parameter = userId + ";" + newPassword;
	
	var bgpEncryptPass = jQuery.pg.callBGPSync("ADM_ENCRYPTPASS", bgp_parameter);
	//alert("bgpEncryptPass : " + bgpEncryptPass);
	$_OCT("#idPassNew").val(bgpEncryptPass);
});
  	var valueJabatan = $_OCT('#idJabatan').val();
	if (valueJabatan == "SURVEYOR") {
		$_OCT(".groupSurveyor").show();
	} else {
		$_OCT(".groupSurveyor").hide();
	}
}			 
  function check(){
    if($_OCT('#idNvrExp').prop('checked')==true){
        $_OCT('#idExp').hide();
	    $_OCT('#labelExpired').hide();
    } else {
        $_OCT('#idExp').show();
        $_OCT('#labelExpired').show();
    }
  }


function before_save(){
  	if($_OCT('#idNvrExp').prop('checked')==true){
    	$_OCT('#idExp').val('01/01/4999');
    }
  
	if($_OCT('#checkAdmin').prop('checked')==true && $_OCT('#checkUser').prop('checked')==true){
		$_OCT('#privilege').val(3);
	} else if($_OCT('#checkUser').prop('checked')==true && $_OCT('#checkAdmin').prop('checked')==false){
		$_OCT('#privilege').val(2);
	} else if($_OCT('#checkAdmin').prop('checked')==true && $_OCT('#checkUser').prop('checked')==false){
		$_OCT('#privilege').val(1);
	}
        $_OCT("#idUser").val($_OCT("#idUser").val().toUpperCase());
}

validateUserId = function() {

  compValidateUserId = $_OCT("#idUser").val();
  hasilUserIdDs = jQuery.pg.callDataschemeSync("A_USPRIN",compValidateUserId,"","","","","");
  if ($__MODE == "ADD") {
    if (hasilUserIdDs.length > 0) return false;
      return true;
  }
  // else if ($__MODE == "EDIT") {
  //   if (hasilUserIdDs.length > 0 && hasilUserIdDs[0].PRODUCT_ID != $_OCT("#idProductId").val()) return false;
  //     else return true;
  // } 
  else return true;

}

$_OCT('#idJabatan').change(function() {
	var valueJabatan = $_OCT('#idJabatan').val();
	if (valueJabatan == "SURVEYOR") {
		$_OCT(".groupSurveyor").show();
	} else {
		$_OCT(".groupSurveyor").hide();
	}
});