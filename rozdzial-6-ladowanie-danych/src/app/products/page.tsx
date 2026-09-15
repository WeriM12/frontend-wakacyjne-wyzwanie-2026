import { AddProductForm } from "@/components/add-product-form";
import { ProductList } from "./product-list";
import { ProductsResponse } from "@/types/product";

async function getProducts() {
    const res = await fetch('https://dummyjson.com/products', {
        next: {
            revalidate: 60,
            tags: ['products'],
        },
    });

    if (!res.ok) {
        throw new Error("Nie udało się pobrać produktów");
    }

    const data: ProductsResponse = await res.json();
    return data.products
}

export default async function ProductsPage() {
    const products = await getProducts();

    return (
        <div className="flex flex-col items-center xl:flex-row xl:justify-center xl:items-start gap-16 p-8 py-4 w-full">
            
            <AddProductForm />
            <ProductList initialData={products}/>
        </div>
    )
}