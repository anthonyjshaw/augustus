import Product from "../models/Product.js";

export const getProducts = async (_, res) => {
	try {
		const products = await Product.find();
		res.status(200).json(products);
	} catch (err){
		console.error(err);
		res.status(500).send(`${err}\n Could not find products.`);
	}
}

export const createProduct = async (req, res) => {
	try {
		const product = await new Product(req.body);
		await product.save();
		console.log(product);
		res.status(201).json(product);
	} catch (error) {
		console.error(error);
	}
}