import { Card, Chip } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { IoIosStar } from "react-icons/io";

const ProductCard = ({product}) => {

    console.log(product);
    
    return (

        <div className='border bg-white border-white rounded-lg p-2 shadow-sm flex flex-col justify-center items-center'>
           
           <div className="w-75 h-48 relative">
                <Image 
                    src={product.image}
                    alt={product.name}
                    fill
                    className="rounded-2xl"
                />
                
            </div>
            <div className='flex justify-between items-center gap-8 my-4'>
                <h2 className='text-xl font-semibold'>{product.name}</h2>
                <p className='flex items-center text-xl'><IoIosStar className='text-yellow-400' /> {product.rating}</p>
            </div>

            <div className='flex justify-between items-center gap-8 my-4'>
                {/* <p className='text-lg text-[#F97316]'><span className='text-black'>Category:</span> {product.category}</p> */}
                <Chip className='text-lg text-[#F97316]'>{product.category}</Chip>
                <p className='text-green-400 text-lg'><span className='text-black'>Price:</span>${product.price}</p>
                
            </div>

           <button className='btn border-[#006A62] text-[#006A62] rounded-full'>
                    <Link href={'/product/details'}>View Details</Link>
            </button>
            
          
        </div>
    );
};

export default ProductCard;