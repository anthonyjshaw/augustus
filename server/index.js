import express from 'express';
import {} from 'dotenv/config';
import mongoose from 'mongoose';
import cors from 'cors';
import path from 'path';
import { MongoMemoryServer } from 'mongodb-memory-server';

// Routes
import productRoutes from './routes/products.js';

const __dirname = path.resolve();
const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const PORT = process.env.PORT || 5000;

const routes = {'products': productRoutes};

Object.keys(routes).forEach(e => {
	app.use(`/api/v1/${e}`, routes[e]);
});

const connectToDB = async () => {
	const mongod = await MongoMemoryServer.create();
    const uri = mongod.getUri();
	const mongooseOptions = {
        useNewUrlParser: true,
        useUnifiedTopology: true
    };
	mongoose.connect(uri, mongooseOptions)
    .then(() => app.listen(PORT, () => console.log(`Server running on port ${PORT}`)))
    .catch((error)=> console.error(error.message));
}

connectToDB();

