import mongoose from 'mongoose';

const orderSchema = mongoose.Schema({

	order_number: {

	},

	customer_id: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User',
		required: "User ID is required."
	},

	customer_address: {
		address_line1: {type: String},
		county: {type: String, required: true},
		post_code: {type: String, required: true},

	},

	created_at: {
		type: Date,
		default: new Date()
	},

});

const Order = mongoose.model('Order', orderSchema);

export default Order;