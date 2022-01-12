const ProductService = require("./../services/product-service")
const { CREATE_SUCCESS, DELETE_SUCCESS, UPDATED_SUCCESS } = require("../utils/consts");

const create = async (req, res, next) => {
  try {
    const { img, name, category, composition, price} = req.body;
    const { id } = req.user;
    const { id: productId } = await ProductService.create(
      img,
      name,
      category,
      composition,
      price,
      id
    );
    res.json({ message: CREATE_SUCCESS, productId });
  } catch (error) {
    next(error);
  }
};

const getAll = async (req, res, next) => {
  try {
    let { q, page, limit, category } = req.query;
    page = page || 1;
    limit = limit || 8;
    const offset = page * limit - limit;
    const product = await ProductService.getAll({ offset, limit, q, category });
    res.json(product);
  } catch (error) {                         
    res.status(404).json({ message: "category not found" });
  }
};
const getOne = async (req, res, next) => {
  try {
    // let { q, page, limit, category } = req.query;
    // page = page || 1;
    // limit = limit || 6;
    // const offset = page * limit - limit;
    const { id } = req.params;

    const product = await ProductService.getOne(id);
    res.json(product);
  } catch (error) {
    console.log(error);
    res.status(404).json({ message: "qwe not found" });
  }
};
const deleteOne = async (req, res, next) => {
  try {
    const { id } = req.params;
    await ProductService.deleteOne(id);
    res.json({ message: DELETE_SUCCESS });
  } catch (error) {
    next(error);
  }
};
const update = async (req, res, next) => {
  try {
    const { img, name, category, composition, price } = req.body;

    const { id } = req.params;
    await ProductService.update(id, img, name, category, composition, price);
    res.json({ message:  UPDATED_SUCCESS});
  } catch (error) {
    next(error);
  }
};

module.exports = {
  create,
  deleteOne,
  getAll,
  getOne,
  update,
};