import { addnewProduct, getProducts, getProductWithID, updateProduct, deleteProduct } from '../controllers/controllers.js'

export const routes = (app) => {
    app.route('/products');
    app.post(addnewProduct);
    app.get(getProducts);

    app.route('/products/:ProductID')
    app.get(getProductWithID);
    app.put(updateProduct);
    app.delete(deleteProduct);
}

