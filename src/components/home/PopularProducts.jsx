import React from 'react';
import ProductCard from './ProductCard';

const PopularProducts =async () => {

    const res=await fetch('https://sun-cart-summer-essential-store.vercel.app/data.json');
    const products=await res.json();

    console.log(products.length);
    
    

    return (
        <div className='lg:w-10/12 mx-auto mt-10 mb-5'>
            <h2 className='text-[#181A2E] text-3xl font-bold mb-2'>Popular Products </h2>
            <p className='text-[#877462] mb-8'>Handpicked favorites for the golden season</p>
            <div className='grid md:grid-cols-3  gap-4'>
                 {
                    products.slice(0,3).map((product)=>{
                        
                        return <ProductCard key={product.id} product={product}></ProductCard>
                    })
                }
            </div>
           
        </div>
    );
};

export default PopularProducts;