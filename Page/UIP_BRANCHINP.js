//UIP_BRANCHINP

replaceTitikDua = function(huruf) {
	if (huruf == "" || huruf == undefined) return 0;
	else return parseInt(huruf.replace(/\:/g,''));
}

validateMondayStart = function() {
	var jamMasuk = replaceTitikDua($_OCT("#idMondayStart").val());
	var jamKeluar = replaceTitikDua($_OCT("#idMondayEnd").val());

	if(jamMasuk != 0 && jamKeluar != 0){
		if (jamMasuk > jamKeluar) return false;
		else return true;
	} else return true;
}

validateMondayEnd = function() {
	var jamMasuk = replaceTitikDua($_OCT("#idMondayStart").val());
	var jamKeluar = replaceTitikDua($_OCT("#idMondayEnd").val());

	if(jamMasuk != 0 && jamKeluar != 0){
		if (jamKeluar < jamMasuk) return false;
		else return true;
	} else return true;
}

validateTuesdayStart = function() {
	var jamMasuk = replaceTitikDua($_OCT("#idTuesdayStart").val());
	var jamKeluar = replaceTitikDua($_OCT("#idTuesdayEnd").val());

	if(jamMasuk != 0 && jamKeluar != 0){
		if (jamMasuk > jamKeluar) return false;
		else return true;
	} else return true;
}

validateTuesdayEnd = function() {
	var jamMasuk = replaceTitikDua($_OCT("#idTuesdayStart").val());
	var jamKeluar = replaceTitikDua($_OCT("#idTuesdayEnd").val());

	if(jamMasuk != 0 && jamKeluar != 0){
		if (jamKeluar < jamMasuk) return false;
		else return true;
	} else return true;
}

validateWednesdayStart = function() {
	var jamMasuk = replaceTitikDua($_OCT("#idWednesdayStart").val());
	var jamKeluar = replaceTitikDua($_OCT("#idWednesdayEnd").val());

	if(jamMasuk != 0 && jamKeluar != 0){
		if (jamMasuk > jamKeluar) return false;
		else return true;
	} else return true;
}

validateWednesdayEnd = function() {
	var jamMasuk = replaceTitikDua($_OCT("#idWednesdayStart").val());
	var jamKeluar = replaceTitikDua($_OCT("#idWednesdayEnd").val());

	if(jamMasuk != 0 && jamKeluar != 0){
		if (jamKeluar < jamMasuk) return false;
		else return true;
	} else return true;
}

validateThursdayStart = function() {
	var jamMasuk = replaceTitikDua($_OCT("#idThursdayStart").val());
	var jamKeluar = replaceTitikDua($_OCT("#idThursdayEnd").val());

	if(jamMasuk != 0 && jamKeluar != 0){
		if (jamMasuk > jamKeluar) return false;
		else return true;
	} else return true;
}

validateThursdayEnd = function() {
	var jamMasuk = replaceTitikDua($_OCT("#idThursdayStart").val());
	var jamKeluar = replaceTitikDua($_OCT("#idThursdayEnd").val());

	if(jamMasuk != 0 && jamKeluar != 0){
		if (jamKeluar < jamMasuk) return false;
		else return true;
	} else return true;
}

validateFridayStart = function() {
	var jamMasuk = replaceTitikDua($_OCT("#idFridayStart").val());
	var jamKeluar = replaceTitikDua($_OCT("#idFridayEnd").val());

	if(jamMasuk != 0 && jamKeluar != 0){
		if (jamMasuk > jamKeluar) return false;
		else return true;
	} else return true;
}

validateFridayEnd = function() {
	var jamMasuk = replaceTitikDua($_OCT("#idFridayStart").val());
	var jamKeluar = replaceTitikDua($_OCT("#idFridayEnd").val());

	if(jamMasuk != 0 && jamKeluar != 0){
		if (jamKeluar < jamMasuk) return false;
		else return true;
	} else return true;
}

validateSaturdayStart = function() {
	var jamMasuk = replaceTitikDua($_OCT("#idSaturdayStart").val());
	var jamKeluar = replaceTitikDua($_OCT("#idSaturdayEnd").val());

	if(jamMasuk != 0 && jamKeluar != 0){
		if (jamMasuk > jamKeluar) return false;
		else return true;
	} else return true;
}

validateSaturdayEnd = function() {
	var jamMasuk = replaceTitikDua($_OCT("#idSaturdayStart").val());
	var jamKeluar = replaceTitikDua($_OCT("#idSaturdayEnd").val());

	if(jamMasuk != 0 && jamKeluar != 0){
		if (jamKeluar < jamMasuk) return false;
		else return true;
	} else return true;
}

validateSundayStart = function() {
	var jamMasuk = replaceTitikDua($_OCT("#idSundayStart").val());
	var jamKeluar = replaceTitikDua($_OCT("#idSundayEnd").val());

	if(jamMasuk != 0 && jamKeluar != 0){
		if (jamMasuk > jamKeluar) return false;
		else return true;
	} else return true;
}

validateSundayEnd = function() {
	var jamMasuk = replaceTitikDua($_OCT("#idSundayStart").val());
	var jamKeluar = replaceTitikDua($_OCT("#idSundayEnd").val());

	if(jamMasuk != 0 && jamKeluar != 0){
		if (jamKeluar < jamMasuk) return false;
		else return true;
	} else return true;
}


var compValueBranchId;
var hasilDataBranch;
validateBranchID = function() {
	compValueBranchId = $_OCT("#idBranchID").val();
	hasilDataBranch = jQuery.pg.callDataschemeSync("P_OPRPRM_COMPANY","",compValueBranchId,"","","","");
	if ($__MODE == "ADD"){	
		if (hasilDataBranch.length > 0) return false;
			else return true;
	} else if ($__MODE == "VIEW" || $__MODE == "EDIT"){
		if (hasilDataBranch.length > 0 && hasilDataBranch[0].BRANCH_ID != compValueBranchId) return false;
			else return true;
	}
}
ReqKdPs = function(){

	var PostCodeValue = $_OCT("#idKodePos").val();
	var PostData = jQuery.pg.callDataschemeSync("T_LOSINITIATIONPOSTCODES","",PostCodeValue,"","","","");
	if (PostData.length > 0) return true;
	else return false;
}
afterLoadBranch = function(){
	$_OCT('#region').show();
	$_OCT('#other').show();
	$_OCT('#Calendar').show();
	$_OCT('#jamKerja').show();
	$_OCT("#idPhoneArea,#idPhoneNumber,#idFaxArea,#idFaxNumber,#idNPWP").keypress(function(e) {
		if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57) && e.which != 45) {
				return false;
		}
	});

	$_OCT("#idMondayStart,#idTuesdayStart,#idWednesdayStart,#idThursdayStart,#idFridayStart,#idSaturdayStart,#idSundayStart,#idMondayEnd,#idTuesdayEnd,#idWednesdayEnd,#idThursdayEnd,#idFridayEnd,#idSaturdayEnd,#idSundayEnd").mask("99:99");
	// $_OCT.pg.helper.setRequiredField("#idMondayStart,#idTuesdayStart,#idWednesdayStart,#idThursdayStart,#idFridayStart,#idSaturdayStart,#idSundayStart,#idMondayEnd,#idTuesdayEnd,#idWednesdayEnd,#idThursdayEnd,#idFridayEnd,#idSaturdayEnd,#idSundayEnd");
	$_OCT("#idMondayStart,#idTuesdayStart,#idWednesdayStart,#idThursdayStart,#idFridayStart,#idSaturdayStart,#idSundayStart,#idMondayEnd,#idTuesdayEnd,#idWednesdayEnd,#idThursdayEnd,#idFridayEnd,#idSaturdayEnd,#idSundayEnd").keypress(function(e) {
		if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57) && e.which != 45) {
				return false;
		}
	});

	var d = new Date();
	var fulldate = d.getMonth() + "-" + d.getDate() + "-" + d.getFullYear();
	$_OCT("#idBranchDate").val(fulldate);
	$_OCT("#idCreateDate").val(fulldate);
	$_OCT("#idLastUpdate").val(fulldate);
	$_OCT("#idCreatorId").val($_OCT.cookies.get("UID"));
	$_OCT("#idLastUser").val($_OCT.cookies.get("UID"));
	$_OCT("#idStatus").val($_OCT("#ActiveStat").val());
}