const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const imageSchema = new Schema({
  name: String,
  image: {
    data: Buffer,
    contentType: String,
  },
},
  {timestamps: true}
);

module.exports = mongoose.model("images", imageSchema);
