import Router from "express";
import {
    getAllProducts,
    getProductById,
    addProduct,
    addMultipleProducts, 
    addProductImage
} from "../controllers/products.controller.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";
import { upload } from "../middlewares/multer.middleware.js";

const router = Router();


router.route("/products").get(getAllProducts);
router.route("/products/:productId").get(getProductById);
router.route("/products").post(verifyJWT, addProduct);
router.route("/products/multiple").post(verifyJWT, addMultipleProducts);
router.route("/products/image").post(verifyJWT, upload.single("image"), addProductImage);

export default router;