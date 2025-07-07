import { Product } from "../models/products.model.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";

const getAllProducts = asyncHandler(async (req, res) => {
    const products = await Product.find();

    if (!products || products.length === 0) {
        throw new ApiError(404, "No products found");
    }
    res
        .status(200)
        .json(new ApiResponse(200, products, "Products fetched successfully"));
});

const getProductById = asyncHandler(async (req, res) => {
    console.log(" get proudct by id");
    console.log('req.params - ' , req.params);
    const {id} = req.params ;
    

    if (!id) {
        throw new ApiError(400, "Product ID is required");
    }
    const product = await Product.findById(id);

    if (!product) {
        throw new ApiError(404, "Product not found");
    }
    res
        .status(200)
        .json(new ApiResponse(200, product, "Product fetched successfully"));
});

const addProduct = asyncHandler(async (req, res) => {

    const data = req.body;

    if (Array.isArray(data)) {

        if (data.some(product => !product.title || !product.price)) {
            throw new ApiError(400, 'Each product should have title and price.')
        };

        const products = await Product.insertMany(data);

        if (!products) {
            throw new ApiError(404, "Error while adding the products.")
        }

        return res
            .status(200)
            .json(new ApiResponse(200, {}, "All the products added successfully."))

    }

    const { title, price, description, category, rating } = req.body
    
    if (!title || !price) {
        throw new ApiError(400, "Product title and price are required!")
    }

    const newProduct = await Product.create({
        title,
        price,
        description,
        category,
        rating
    })

    if (!newProduct) {
        throw new ApiError(401, 'Error in adding the product details.')
    }

    return res
        .status(200)
        .json(new ApiResponse(200, newProduct, "New product added successfully!"))
}

)

const addMultipleProducts = asyncHandler(async (req, res) => {
    const data = req.body;

    if (!Array.isArray(data)) {
        throw new ApiError(400, 'There should be minimum 2 products to be added.')
    }

    if (data.some(product => !product.title || !product.price)) {
        throw new ApiError(400, 'Each product should have title and price.')
    };

    const products = await Product.insertMany(req?.body);

    if (!products) {
        throw new ApiError(404, "Error while adding the products.")
    }

    return res
        .status(200)
        .json(new ApiResponse(200, {}, "All the products added successfully."))

}

)

const addProductImage = asyncHandler(async (req, res) => {
    const { productId } = req.body;
    const imagePath = req.file?.path;

    if (!productId) {
        throw new ApiError(400, "Product ID is required");
    }

    if (!imagePath) {
        throw new ApiError(400, "Image file is missing");
    }

    // uploading on cloudinary
     const uploadedImage = await uploadOnCloudinary(imagePath);
     if (!uploadedImage.url) {
         throw new ApiError(400, "Error while uploading image");
     }

    const product = await Product.findByIdAndUpdate(
        productId,
        { $set: { image: uploadedImage?.url } },
        { new: true }
    );

    if (!product) {
        throw new ApiError(404, "Product not found");
    }

    res
        .status(200)
        .json(new ApiResponse(200, product, "Product image added successfully"));
})


export {
    getAllProducts,
    getProductById,
    addProduct,
    addMultipleProducts,
    addProductImage
};
