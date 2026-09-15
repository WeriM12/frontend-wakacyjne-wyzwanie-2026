'use client';

import { keepPreviousData, useQuery } from '@tanstack/react-query';
import type { Product, ProductsResponse } from '@/types/product';
import Image from 'next/image';
import { useState } from 'react';
import image_placeholder from '@/../public/product_placeholder.jpg';


async function fetchProducts(search: string): Promise<Product[]> {
    const url = search
    ? `https://dummyjson.com/products/search?q=${encodeURIComponent(search)}`
    : 'https://dummyjson.com/products';

    const res = await fetch(url);
    if (!res.ok) throw new Error('Błąd pobierania produktów');

    const data: ProductsResponse = await res.json();
    return data.products;
}

export function ProductList({ initialData }: { initialData: Product[] }) {
    const [search, setSearch] = useState('');


    const { data: products = [], isFetching } = useQuery({
        queryKey: ['products', search],
        queryFn: () => fetchProducts(search),
        initialData: search === '' ? initialData : undefined,
        staleTime: 60_000,
        placeholderData: keepPreviousData,
    });

    return (
        <div className='w-full lg:w-250 xl:w-300 flex flex-col'>
            <div className='flex justify-center items-center'>
                <h1 className="mb-6 text-2xl font-bold text-taupe-50 text-shadow-sm text-shadow-mauve-600">Discover our products</h1>
                <input type='text' value={search} onChange={(e) => setSearch(e.target.value)} placeholder='Search...' 
                className='text-input ml-auto mb-2' />
            </div>

            
            {products.length === 0 ? (
                <p className="text-taupe-50">No products found</p>
            ) : (
                <div className="grid gap-2 grid-cols-2 md:grid-cols-3 xl:grid-cols-4">

                    {products.map((product) => (
                        <div key={product.id} className="border border-taupe-100 bg-taupe-100 group overflow-hidden rounded">
                            <div className='relative bg-taupe-200'>
                                <>
                                    {product.thumbnail ? (
                                        <Image src={product.thumbnail} alt={product.title} width={500} height={500} loading="eager" 
                                        className="relative h-fit w-full  rounded-t-lg object-cover transition-transform duration-300" />
                                    ) : (
                                        <Image src={image_placeholder} alt={product.title} width={500} height={500} loading="eager" 
                                        className="relative h-fit w-full  rounded-t-lg object-cover transition-transform duration-300" />
                                    )}
                                </>

                                <div className='z-10 absolute bg-mauve-50/90 p-2 rounded w-[calc(100%-1rem)] bottom-2 left-2 max-h-0 overflow-hidden text-xs opacity-0 transition-all duration-200 ease-in-out group-hover:max-h-40 group-hover:opacity-100 flex flex-col gap-1'>
                                    <p className='bg-mauve-200 border border-mauve-300 rounded-full p-0.3 px-1.5 w-fit'>{product.category}</p>
                                    <p>{product.description}</p>
                                </div>

                            </div>

                            <div className='flex gap-4 h-fit min-h-12 items-center rounded-b-lg p-2 px-4'> 
                                <h2 className="cursor-pointer text-sm hover:underline">{product.title}</h2>
                                <p className="ml-auto text-nowrap font-semibold">{product.price} zł</p>
                            </div>
                        </div>
                    ))}
                </div>)}
        </div>

    );
}