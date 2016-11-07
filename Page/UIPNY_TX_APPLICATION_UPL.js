
afterLoad_UIPNY_TX_APPLICATION_UPL = function(){
	// Validate upload format is exist
	var data = jQuery.pg.callDataschemeSync("DSPNY_MD_UPL_FILE_FORMAT","","UPL_APPLICATION","","","","");
	 if(data.length == 0) {
		$_OCT.oct.callModalDialog({
			title: "Warning Information",
			message: "File Format Upload Belum Tersedia",
		    true_button_name: "Ok",
			_width: 320,
			_height: 160,
			callback_true_button: function () {
				jQuery('#idUploadFile').prop( "disabled", true );
				return false;
			}
		});
	} 
	
	// Validate File
	/* jQuery('#idUploadFile').change(function() {
		checkFileStatus(data[0]["FILE_PREFIX"], data[0]["FILE_EXTENSION"]);
	}); */
	
	jQuery('#formAppUpload').submit(function( event ) {
		alert();
	});
	
}

checkFileStatus = function (filePrefix, fileExtension){
	// Validate file name format is valid
	var dataForm = new FormData();
    jQuery.each(jQuery('#idUploadFile'), function(i, obj) {
		jQuery.each(obj.files,function(j,file){
           dataForm.append('file['+i+']', file);
          })           
     });	 
	
	var file = dataForm.get('file[0]');
	var fileName = file.name;
	var fileExt = fileName.split('.').pop();
	
	if(fileName.substring(0, filePrefix.length) != filePrefix || fileExtension.lastIndexOf(fileExt) != -1 ) {
		$_OCT.oct.callModalDialog({
			title: "Warning Information",
			message: "File Format " + fileName + " Tidak Valid ",
		    true_button_name: "Ok",
			_width: 320,
			_height: 160,
			callback_true_button: function () {
				jQuery('#idUploadFile').val("");
				return false;
			}
		});
	}
	
	// Validate file name is exist
	var data = jQuery.pg.callDataschemeSync("DSPNY_TX_UPLOAD","",fileName,"","","","");
	if(data.length > 0) {
		$_OCT.oct.callModalDialog({
			title: "Warning Information",
			message: "Nama File Format " + fileName + " Sudah Pernah Diupload ",
		    true_button_name: "Ok",
			_width: 320,
			_height: 160,
			callback_true_button: function () {
				jQuery('#idUploadFile').val("");
				return false;
			}
		});
	}
}


