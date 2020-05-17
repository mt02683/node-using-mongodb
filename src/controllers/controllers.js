import mongoose from 'mongoose'
import { ProductSchema } from '../models/models.js'

var Product = mongoose.model('Product', ProductSchema);

export const addnewProduct = (req, res) => {
    var newProduct = new Product(req.body);
    newProduct.validate(function (err) {
        if (err) console.log("add new product input error: " + err);
        else {
            newProduct.save((err, Product) => {
                if (err) return console.error("saving new product error: " + err);
                res.json(Product)
            });
        }
    });
}

export const getProducts = (req, res) => {
    Product.find({}, (err, Product) => {
        if (err) return console.error("can't get all products error: " + err);
        res.json(Product);
    });
}

export const getProductWithID = (req, res) => {
    Product.findById(req.params.ProductID, (err, Product) => {
        if (err) return console.error("can't find product with id error: " + err);
        res.json(Product);
    });
}

export const updateProduct = (req, res) => {
    Product.findOneAndUpdate({ _id: req.params.ProductID }, req.body, { new: true, useFindAndModify: false }, (err, Product) => {
        if (err) return console.error(err);
        res.json(Product);
    });
}

export const deleteProduct = (req, res) => {
    Product.deleteOne({ _id: req.params.ProductID}, (err, Product) => {
        if (err) return console.error(err);
        res.json({ message: 'successfully deleted product' });
    });
}