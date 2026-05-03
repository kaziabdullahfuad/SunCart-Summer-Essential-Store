import { Chip } from "@heroui/react";
import Image from "next/image";
import { IoIosStar } from "react-icons/io";


const ProductDetailsPage =async ({params}) => {
    
    const {id}=await params;
    console.log(id,"Atai to id");
    
    const res=await fetch('https://sun-cart-summer-essential-store.vercel.app/data.json');
    const products=await res.json();

    // console.log(products, "Aije products");

    const product=products.find(prod=>prod.id==id);
    
    console.log(product);
    
    
    return (
        <div>
            <div className="w-10/12 border-white shadow-md mx-auto my-8  py-10 px-3 rounded-2xl">
                
                <div className="grid lg:grid-cols-2 gap-4">

                     <div className="w-75 md:w-150 h-90 relative ">

                        <Image src={product.image} alt={product.name} fill className="rounded-2xl"
                        />
                                    
                    </div>

                    <div className="space-y-3">
                        <div className="flex gap-3">
                            <Chip className='text-lg text-[#F97316]'>{product.category}</Chip>

                            <Chip className='text-lg text-green-500'>{product.brand}</Chip>

                        </div>

                        <h2 className="text-3xl font-bold">{product.name}</h2>
                        
                        <div className="flex items-center gap-4">
                            <p className='flex items-center text-xl gap-2'><IoIosStar className='text-yellow-400' /> {product.rating}</p>
                            <p className="text-xl"><span className="text-red-400">{product.stock}</span> in stock</p>
                        </div>

                        <h3 className="font-semibold text-xl">{product.description}</h3>

                        <hr />

                        <p className="text-2xl text-green-600">${product.price}</p>
                        <button className="btn rounded-full bg-orange-400 text-white">Order Now</button>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetailsPage;