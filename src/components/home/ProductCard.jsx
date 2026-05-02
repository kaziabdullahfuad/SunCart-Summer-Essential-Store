import Image from 'next/image';
import React from 'react';

const ProductCard = ({product}) => {

    console.log(product);
    
    return (

        <div>
           <Image src={product.image} alt={product.name} width={200} height={200}></Image>
        </div>
    );
};

export default ProductCard;