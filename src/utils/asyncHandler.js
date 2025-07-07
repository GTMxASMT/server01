const asyncHandler = (func) => async (req, res, next) => {
    try {
        await func(req, res, next);
    } catch (error) {
        console.error('Error occurred in asyncHandler. ', error)
        res.status(500)
            .json({
                success: false,
                message: error.message || 'Internal server error'
            }
            )

    }
}



export { asyncHandler };

// using Promise
// const asyncHanlder = (func) =>
//   return  (req, res, next) =>
//         Promise
//             .resolve(  func(req, res, next)  )
//             .catch((error) => 
//                next(error)
//             )      

// export { asyncHanlder };