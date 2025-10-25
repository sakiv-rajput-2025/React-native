import { View, Text, FlatList } from 'react-native'
import React from 'react'
import Products from './components/Products'

const ProductArr = () => {

    const products = [
        {
        productName: 'Product A',
        productImage: "https://static.helioswatchstore.com/media/easyslide/U-Boat.jpg",
        productPrice: 19.99,
        productDescription: "Description fro Product A",
        isFeatured: true,
        },
        {
        productName: 'Product A',
        productImage: "https://static.helioswatchstore.com/media/easyslide/U-Boat.jpg",
        productPrice: 19.99,
        productDescription: "Description fro Product A",
        isFeatured: true,
        },
        {
        productName: 'Product A',
        productImage: "https://static.helioswatchstore.com/media/easyslide/U-Boat.jpg",
        productPrice: 19.99,
        productDescription: "Description fro Product A",
        isFeatured: true,
        },
        {
        productName: 'Product A',
        productImage: "https://static.helioswatchstore.com/media/easyslide/U-Boat.jpg",
        productPrice: 19.99,
        productDescription: "Description fro Product A",
        isFeatured: true,
        },
        {
        productName: 'Product A',
        productImage: "https://static.helioswatchstore.com/media/easyslide/U-Boat.jpg",
        productPrice: 19.99,
        productDescription: "Description fro Product A",
        isFeatured: true,
        },
        {
        productName: 'Product A',
        productImage: "https://static.helioswatchstore.com/media/easyslide/U-Boat.jpg",
        productPrice: 19.99,
        productDescription: "Description fro Product A",
        isFeatured: true,
        },
        {
        productName: 'Product A',
        productImage: "https://static.helioswatchstore.com/media/easyslide/U-Boat.jpg",
        productPrice: 19.99,
        productDescription: "Description fro Product A",
        isFeatured: true,
        },
        {
        productName: 'Product A',
        productImage: "https://static.helioswatchstore.com/media/easyslide/U-Boat.jpg",
        productPrice: 19.99,
        productDescription: "Description fro Product A",
        isFeatured: true,
        },
        {
        productName: 'Product A',
        productImage: "https://static.helioswatchstore.com/media/easyslide/U-Boat.jpg",
        productPrice: 19.99,
        productDescription: "Description fro Product A",
        isFeatured: true,
        },
        {
        productName: 'Product A',
        productImage: "https://static.helioswatchstore.com/media/easyslide/U-Boat.jpg",
        productPrice: 19.99,
        productDescription: "Description fro Product A",
        isFeatured: true,
        },
        {
        productName: 'Product A',
        productImage: "https://static.helioswatchstore.com/media/easyslide/U-Boat.jpg",
        productPrice: 19.99,
        productDescription: "Description fro Product A",
        isFeatured: true,   
        },
    ]

  return <FlatList data={products}
  renderItem={({item}) => (
    <Products name={item.productName} image={item.productImage} price={item.productPrice} description={item.productDescription} isFeatured={item.isFeatured} />
  )}/>
}

export default ProductArr