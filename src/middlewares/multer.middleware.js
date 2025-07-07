import multer from "multer";

const storage = multer.diskStorage({
  // The destination function is called by multer to determine where to store the uploaded file
  destination: function (req, file, cb) {

  // cb is a callback function that multer uses to determine where to store the file in this case, we are storing the file in the public/temp directory  
    cb(null, "./public/temp")
  },
  filename: function (req, file, cb) {

    cb(null, file.originalname)
  }
})

export const upload = multer({
  storage
})