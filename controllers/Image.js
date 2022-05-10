const ImageSchema = require("../models/Image");
const fs = require("fs");
const path = require("path");

exports.imageUpload =  (req, res) => {
	try {
		const newImage = new ImageSchema({
			name: req.body.name,
			image: {
				data: req.file.filename,
				contentType: 'image/png'
			}
		})
		newImage.save()
		res.send(path.join(__dirname + '/uploads/' + req.file.filename))
	} catch (error) {
		console.log(error);
		res.send(error)
	}
}
