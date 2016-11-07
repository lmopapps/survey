afterLoad_UIPNY_IMPORT_IN = function(){

}

procesUploadFile = function () {
			// start_upload
			try {
				 var data = new FormData();
				
				jQuery.each(jQuery('#userFile')[0].files, function(i, file) {
					data.append('file-'+i, file);
				});
				
				jQuery.ajax({
					url: "upload_xls.octopus",
					type: 'POST',
					data: data,
					async: false,
					success: function (data) {
							readAndInsertData(data)
					},
					cache: false,
					contentType: false,
					processData: false
				});	


			} catch (e) {
				$_SCC.scc.callModalDialog({
					message: "Error e = "+e,
					true_button_name: "Ok",
					_width: 320,
					_height: 160,
					callback_true_button: function(){
						return false;
					}
				});
			}
}
			
function readAndInsertData(data){

	// var filePath = $_SCC("#userFile").val();
	// var bgp_name_insert = "BGP_IMPORT_DATA";

	// var params_insert = filePath+";"+$_SCC("#idTanggalTerima").val()+";"+$_SCC("#idProductType").val()+";"+$_SCC("#idClientName").val()+";"+$_SCC("#idBranchName").val();
	
	// $_SCC.pg.callBGP(bgp_name_insert, params_insert, function(data){
		// if(data == 'OK'){	
			// $_SCC.scc.callModalDialog({
				// message: "Import is Success",
				// true_button_name: "Ok",
				// _width: 320,
				// _height: 160,
				// callback_true_button: function(){
					// return true;
				// }
			// });
		// } else{
			// $_SCC.scc.callModalDialog({
				// message: "Import is Failed",
				// true_button_name: "Ok",
				// _width: 320,
				// _height: 160,
				// callback_true_button: function(){
					// return false;
				// }
			// });
		// }
	// });
}