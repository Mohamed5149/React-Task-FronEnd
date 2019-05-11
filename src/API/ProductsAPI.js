import * as actionCreators from '../Store/actions/actionCreators';

let products = [{
    image: 'https://hips.hearstapps.com/amv-prod-cad-assets.s3.amazonaws.com/media/assets/submodel/7965.jpg',
    name: 'test0', price: '1000', producerName: 'BMW'
},{
    image: 'https://hips.hearstapps.com/amv-prod-cad-assets.s3.amazonaws.com/media/assets/submodel/7965.jpg',
    name: 'test1', price: '1000', producerName: 'BMW'
},{
    image: 'https://hips.hearstapps.com/amv-prod-cad-assets.s3.amazonaws.com/media/assets/submodel/7965.jpg',
    name: 'test2', price: '1000', producerName: 'BMW'
}]

//to get the products from the API
export const getProducts = () => {
    console.log(products + 'from api');
    return (actionCreators.InitProducts(products));
}