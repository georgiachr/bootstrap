/**
 * FileController
 *
 * @description :: Server-side logic for managing files
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {

	upload: function  (req, res) {

		var uploadFilesList, uploadFile;

		if (req.method === 'GET')
			return res.json({'status': 'GET not allowed'});
		//	Call to /upload via GET is error

//	/*
		uploadFilesList = req.file('file');

		//console.log(uploadFilesList);
//*/

/*
		var uploadFile = req.file('file');
		console.log(uploadFile);
//*/

		//Use this to upload to custom folder
		//If you don't want this remove {dirname: ''}
		//There are other options also .Check at skipper docs

		//If dirname is not set the upload will be done to ./tmp/uploads


		/*
		if (uploadFilesList && uploadFilesList.length !== undefined) {
			if(uploadFilesList.length>0){
			for (var i = 0; i < uploadFilesList.length; i++) {

				uploadFile = uploadFilesList[i];
//*/
				uploadFilesList.upload(
					{
						dirname: '../../assets/images',
						maxBytes: 10000000
					},
					function onUploadComplete(err, file) {
					// Files will be uploaded to /assets/images/
					// Access the files via localhost:1337/images/yourfilename

					if (err) return res.serverError(err);
					//	IF ERROR Return and send 500 error with error

					console.log(file);
					res.json({status: 200, file: file});
					//This will print the details including new file name upload path etc
				});
			}
			/*


			} // for loop

		} // if

	}//*/
};

