import ProductCard from '@/components/home/ProductCard';
import React from 'react';

const ProductsPage = async() => {

    const res=await fetch('https://sun-cart-summer-essential-store.vercel.app/data.json');
    const products=await res.json();

    return (
        <div className=''>
            
            <div className='w-10/12 mx-auto py-10'>
                <div className='space-y-2 mb-4'>
                    <h2 className='text-3xl text-[#181A2E] font-bold'>Explore Summer Essentials</h2>
                <p className='text-[#5E5E5B]'>Curated collection for your perfect golden hour. Discover high-end fashion, skincare, and beach accessories designed for the modern sun-seeker.</p>
                </div>

                <div className='grid md:grid-cols-2 lg:grid-cols-3  gap-4'>
                    {
                        products.map((product)=>{

                            return <ProductCard key={product.id} product={product}></ProductCard>
                        })
                    }

                </div>
                
            </div>
            
        </div>
    );
};

export default ProductsPage;