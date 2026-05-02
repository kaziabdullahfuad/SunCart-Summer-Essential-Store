import Image from 'next/image';
import React from 'react';

const ProductCard = ({product}) => {

    console.log(product);
    
    return (

        <div>
           <Image src={product.image} alt={product.name} width={100} height={100}></Image>
        </div>
    );
};

export default ProductCard;