import mongoose from 'mongoose'
import ProductSchema from '../models/models.js'

var Product = mongoose.model('Product', ProductSchema);

export const addnewProduct = (req, res) => {
    newProduct = new Product(req.body);
    newProduct.validate(function (err) {
        if (err) console.log(err);
        else {
            newProduct.save((err, Product) => {
                if (err) return console.error(err);
                res.json(Product)
            });
        }
    });
}