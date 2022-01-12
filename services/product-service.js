const { Op } = require("sequelize");
const { Product } = require("./../models");

const create = async (img, name, category, composition, price) => {
  const product = await Product.create({
    img,
    name, 
    category, 
    composition, 
    price
  });

  //   if (Array.isArray(image)) {
  //     image.forEach((i) => {
  //       PictureService.createPicture(i, product.id);
  //     });
  //   } else {
  //     PictureService.createPicture(image, product.id);
  //   }
  return product;
};

const getAll = async ({ q, offset, limit, category }) => {
  if (q || category) {
    if (!q) q = "";
    if (category) {
      return await Product.findAndCountAll({
        where: {
          [Op.or]: [
            {
              name: {
                [Op.iLike]: "%" + q + "%",
              },
            },
          ],
          category,
        },
     
        limit,
        offset,
      });
    } else {
      return await Product.findAndCountAll({
        where: {
          name: {
            [Op.iLike]: "%" + q + "%",
          },
        },
        
        limit,
        offset,
      });
    }
  }

  return await Product.findAndCountAll({
    limit,
    offset,
  });
};

const deleteOne = async (id) => {
  return await Product.destroy({ where: { id } });
};
const update = async (id, img, name, category, composition, price) => {
  return await Product.update(
    { img, name, category, composition, price},
    { where: { id } }
  );
    // return await Product.patch({ where: { id } });
};
const getOne = async (id) => {
  const card = await Product.findOne({
    where: { id },
  });
  console.log(card);
  return card.dataValues;
};
module.exports = {
  create,
  deleteOne,
  update,
  getOne,
  getAll,
};