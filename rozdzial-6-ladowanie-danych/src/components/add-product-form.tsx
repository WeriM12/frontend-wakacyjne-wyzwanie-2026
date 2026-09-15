'use client';

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import type { Product, NewProductInput, ProductCategory } from "@/types/product";
import { PRODUCT_CATEGORIES } from "@/types/product";


async function addProduct(newProduct: NewProductInput): Promise<Product> {
    const res = await fetch('https://dummyjson.com/products/add', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(newProduct),
  });

if (!res.ok) {
    throw new Error('Nie udało się dodać produktu');
  }

  return res.json();
}

export function AddProductForm() {
    const queryClient = useQueryClient();

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [category, setCategory] = useState<ProductCategory>(PRODUCT_CATEGORIES[0]);

    const mutation = useMutation({
        mutationFn: addProduct,

        onMutate: async (newProduct) => {
            await queryClient.cancelQueries({ queryKey: ['products'] });
            const previousQueries = queryClient.getQueriesData<Product[]>({
                queryKey: ['products'],
            });

            const optimisticProduct: Product = {
                id: Date.now() * -1,
                title: newProduct.title,
                description: newProduct.description ?? '',
                category: newProduct.category,
                price: newProduct.price,
                thumbnail: '', 
            };

            queryClient.setQueriesData<Product[]>(
                { queryKey: ['products'] },
                (old) => (old ? [optimisticProduct, ...old] : [optimisticProduct])
            );
                return { previousQueries };
        },

        onError: (_err, _newProduct, context) => {
            if (context?.previousQueries) {
                    context.previousQueries.forEach(([queryKey, data]) => {
                    queryClient.setQueryData(queryKey, data);
                });
            }
        },

        onSuccess: () => {
            queryClient.invalidateQueries({queryKey: ['products'], refetchType: 'none'});
            setTitle('');
            setDescription('');
            setPrice('');
            setCategory(PRODUCT_CATEGORIES[0]);

        }
    })

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        mutation.mutate({title, description, price: Number(price), category});
    }


    return (
        <form onSubmit={handleSubmit} className="w-fit h-fit flex flex-col gap-2 mt-14 bg-mauve-600/50 text-taupe-50 shadow-taupe-300 shadow-xs border border-taupe-400 p-4 rounded">
            <h2 className="text-taupe-50 font-semibold text-2xl text-shadow-sm text-shadow-mauve-600">Add new product</h2>
            <label>Title</label>
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Product" required
            className="text-input"/>

            <label>Description</label>
            <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Example description" rows={3}
            className="text-input"/>

            <label>Category</label>
            <select value={category} onChange={(e) => setCategory(e.target.value as ProductCategory)} className="text-input">
            {PRODUCT_CATEGORIES.map((cat) => (
                <option key={cat} value={cat} className="text-taupe-950">
                {cat}
                </option>
            ))}
            </select>

            <label>Price</label>
            <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} placeholder="999.99" required
            className="text-input w-30! appea"/>

            <div className="flex items-center">
                {mutation.isError && (<p className="h-3">ERROR! Product not added ⚠️</p> )}

                {mutation.isSuccess && (<p className="h-3">The product has been added ✅</p>)}

                <button type="submit"
                className="px-2 py-1 bg-taupe-50 text-taupe-900 border border-taupe-50 p-1 outline-none rounded-lg w-fit ml-auto mt-2 hover:bg-taupe-100 active:bg-taupe-200 cursor-pointer">
                    {mutation.isPending ? "Adding..." : "Add product"}
                </button>
            </div>





        </form>
    )
}