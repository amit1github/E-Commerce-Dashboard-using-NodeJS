const mongoose = require("mongoose");

const AddressSchema = new mongoose.Schema({
  address: {
    street: String,
    city: String,
    state: {
      type: String,
      uppercase: true,
    },
    location: {
      type: {
        type: String,
        enum: ['Point'],
        required: true
      },
      coordinates: {
        type: [Number],
        required: true,
      }
    },
    zip: Number,
  }
});

// ! Note that longitude comes first in a GeoJSON coordinate array, not latitude. 
// Don't do `{ location: { type: String } }`
// 'location.type' must be 'Point'

module.exports = mongoose.model("address", AddressSchema);


// {
//   "address": {
//       "street": "park street",
//       "city": "kolkata",
//       "state": "WB",
//       "location": {
//           "type": "Point",
//           "coordinates": [
//               55.357311,
//               56.549094
//           ]
//       },
//       "zip": "700456"
//   }
// }