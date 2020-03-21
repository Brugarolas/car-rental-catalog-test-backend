const { Schema, model } = require('mongoose');

const MODEL_NAME = 'vehicle';
const COLLECTION_NAME = 'car-catalog';

const vehicleSchema = new Schema({
  id: String,
  brand: String,
  model: String,
  price: String,
  isOnOffer: Boolean,
  offerDiscount: String,
  description: String,
  tags: Schema.Types.Mixed,
  image: String
}, {
  collection: COLLECTION_NAME
});

vehicleSchema.path('_id');

const VehicleModel = model(COLLECTION_NAME, vehicleSchema);

exports.name = MODEL_NAME;
exports.model = VehicleModel;
