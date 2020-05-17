import addnewProduct from '../controllers/controllers.js'

export const routes = (app) => {
    app.route('/products');
    app.post(addnewProduct);
}