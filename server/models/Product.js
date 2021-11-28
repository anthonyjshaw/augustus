import mongoose from 'mongoose';

const productSchema = mongoose.Schema({
	
	product_name: {
		type: String,
		required: true,
	},

	product_description: {
		type: String,
		required: true,
	},

	product_type: {
		type: String,
		enum: ['t-shirt', 'hoodie/sweatshirt', 'hat/cap', 'badge'],
		required: true
	},

	product_price: {
		type: Number,
		required: true,
	},

	quantity: {
		type: Number
	},

	in_stock: {
		type: Boolean,
		default: true
	},

	created_at: {
		type: Date,
		default: new Date()
	}
});

const Product = mongoose.model('Product', productSchema);

export default Product;