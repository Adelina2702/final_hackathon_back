const getProduct = require("./get-product");
const getProducts = require("./get-products");



module.exports = {
        "/api/problem/{id}": {
            ...getProduct
        },
        '/api/problem' : {
            ...getProducts
        }
}