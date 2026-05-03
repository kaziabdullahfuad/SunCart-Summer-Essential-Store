import { Chip } from '@heroui/react';
import React from 'react';

const TopBrands = () => {
    return (
        <div>
            <div className='w-10/12 mx-auto py-10 '>
                 <div className='space-y-2 mb-4'>
                    <h2 className='text-3xl text-[#181A2E] font-bold'>Top Brands</h2>
                <p className='text-[#5E5E5B]'>Trusted names in summer fashion and care</p>
                </div>

                <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4'>
                    
                  
                    <div className="bg-white shadow-md p-5 rounded-lg border hover:shadow-lg transition">
                        <h2 className="text-xl font-bold">CeraVe</h2>
                        <Chip className="text-[#F97316] mt-2">Skincare</Chip>
                        <p className="text-gray-600 mt-3">
                        Dermatologist-developed skincare for healthy skin barrier.
                        </p>
                    </div>

                     
                    <div className="bg-white shadow-md p-5 rounded-lg border hover:shadow-lg transition">
                        <h2 className="text-xl font-bold">Nivea</h2>
                        <Chip className="text-[#F97316] mt-2">Moisturizers</Chip>
                        <p className="text-gray-600 mt-3">
                        Trusted skincare brand for everyday hydration and care.
                        </p>
                    </div>

                    
                    <div className="bg-white shadow-md p-5 rounded-lg border hover:shadow-lg transition">
                        <h2 className="text-xl font-bold">Ray-Ban</h2>
                        <Chip className="text-[#F97316] mt-2">Accessories</Chip>
                        <p className="text-gray-600 mt-3">
                        Iconic sunglasses brand known for style and UV protection.
                        </p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default TopBrands;