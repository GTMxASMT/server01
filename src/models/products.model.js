import mongoose, {Schema}from 'mongoose';

const productSchema = new Schema({
  title: { type: String, required: true },
  price: { type: Number, required: true },
  description: String,
  image: String,
  category: String,
  rating: {
    rate: { type: Number, default: 0 },
    count: { type: Number, default: 0 }
  },
}, { timestamps: true });

export const Product = mongoose.model('Product', productSchema);