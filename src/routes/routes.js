import { addnewProduct, getProducts, getProductWithID } from '../controllers/controllers.js'

export const routes = (app) => {
    app.route('/products');
    app.post(addnewProduct);
    app.get(getProducts);

    app.route('/products/:ProductID')
    app.get(getProductWithID);
}

