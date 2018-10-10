import amazon from 'amazon-product-api';
import { AWS_PRODUCT_CREDENTIALS } from '../config/aws-product';

const server = (app) => {
    app.route({
        method: 'GET',
        path: '/',
        handler(request, h) {
            const client = amazon.createClient(AWS_PRODUCT_CREDENTIALS);

            client.itemSearch({
                director: 'Quentin Tarantino',
                actor: 'Samuel L. Jackson',
                searchIndex: 'DVD',
                audienceRating: 'R',
                responseGroup: 'ItemAttributes,Offers,Images'
            }, function (err, results, response) {
                if (err) {
                    console.log(err);
                } else {
                    console.log(results);  // products (Array of Object)
                }
            });
            return "hello world"
        }
    });
}


export default server;