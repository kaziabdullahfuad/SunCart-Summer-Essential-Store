import React from 'react';
import { SiGooglesummerofcode } from "react-icons/si";
import { IoWater } from "react-icons/io5";
import { FaLeaf } from "react-icons/fa";


const SummerCare = () => {
    return (
        <div className='bg-[#F9F7F2] mb-4'>
            <div className='w-10/12 mx-auto py-10 '>
                 <div className='space-y-2 mb-4'>
                    <h2 className='text-3xl text-[#181A2E] font-bold'>Summer Care Tips</h2>
                <p className='text-[#5E5E5B]'>Stay safe and stylish all season long</p>
                </div>
                
                <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4'>

                    <div className='border-t-2 border-t-orange-400 rounded-t-2xl p-3 shadow-md space-y-3'>
                        <SiGooglesummerofcode className='text-yellow-600 font-bold' />
                        <h3 className='font-bold'>Apply SPF Daily</h3>
                        <p className='text-[#5E5E5B]'>Use broad-spectrum SPF 30+ every morning, even on cloudy days. Reapply every 2 hours outdoors.</p>
                    </div>

                    <div className='border-t-2 border-t-blue-400 rounded-t-2xl p-3 shadow-md space-y-3'>
                        <IoWater className='text-blue-600 font-bold' />
                        <h3 className='font-bold'>Stay Hydrated</h3>
                        <p className='text-[#5E5E5B]'>Use broad-spectrum SPF 30+ every morning, even on cloudy days. Reapply every 2 hours outdoors.</p>
                    </div>

                    <div className='border-t-2 border-t-green-400 rounded-t-2xl p-3 shadow-md space-y-3'>
                        <FaLeaf  className='text-green-600 font-bold' />
                        <h3 className='font-bold'>Lightweight Layers</h3>
                        <p className='text-[#5E5E5B]'>Wear loose, breathable fabrics like linen or cotton. Light colours reflect heat and keep you cool.</p>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default SummerCare;