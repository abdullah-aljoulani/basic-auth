
'use strict'

module.exports = (req, res) => {

    res.status(404).json({
        code: 404,
        massage: 'Page Not Found!',
        router: req.originalUrl
    })

}