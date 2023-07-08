'use strict'

module.exports = (error, req, res, next) => {
    res.status(500).json({
        massage: `Server Error: ${error.message}`,
        router: req.originalUrl
    })
    next(error); 
}