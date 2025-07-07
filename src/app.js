import 'dotenv/config'
// const env_name = `.env.${process.env.MODE}` || `.env`;
// console.log('Env file path - ../', env_name)
// import {products} from './data/products.js'
import { Product } from './models/products.model.js';
import express from 'express';
import cors from 'cors'
import cookieParser from 'cookie-parser';
const app = express();

app.use(cors(
    {
        origin: process.env.CORS_ORIGIN,
        credentials: true
    }
))
app.use(express.json({ limit: '20kb' }));
app.use(express.urlencoded({ extended: true, limit: '20kb' }));
app.use(express.static("public"));
app.use(cookieParser())


// app.get('/api/v1/products', (req, res) => {
//     res.json(products);})
// app.get("/api/v1/products", async (req, res) => {
//     try {
//         const products = await Product.find();
//         res.json(products);
//     } catch (err) {
//         res.status(500).json({ message: "Error fetching products" });
//     }
// });

// app.get("/api/v1/products/:id", async (req, res) => {
//     try {
//         const product = await Product.findById(req.params.id);
//         if (!product) return res.status(404).json({ message: "Product not found" });
//         res.json(product);
//     } catch (err) {
//         res.status(500).json({ message: "Error fetching product" });
//     }
// });

// app.post("/api/v1/products", async (req, res) => {
//     try {
//         const data = req.body;
//         if (Array.isArray(data)) {
//             const products = await Product.insertMany(data);
//             return res.status(201).json({ message: "Multiple products added", products });
//         }

//         const { title, price, description, image, category, rating } = data;
//         const product = new Product({ title, price, description, image, category, rating });
//         await product.save();

//         res.status(201).json({ message: "Product added", product });
//     } catch (err) {
//         console.error("Error adding product:", err.message);
//         res.status(500).json({ message: "Failed to add product" });
//     }
// });

import UserRouter from './routes/user.routes.js';
import ProductsRouter from './routes/product.routes.js'
app.get('/', (req, res) => {
    res.status(200)
        .send(
            '<h1 style={}>Welcome to Server</h1>'
        );
})
app.use('/api/v1/user', UserRouter);
app.use('/api/v1', ProductsRouter);
export { app }