// users/error.tsx
"use client";

export default function Error({error, reset}: {
    error: Error & { digest?: string};
    reset: () => void;
}) {
    return (
        <div className="w-full lg:w-100 flex flex-col my-auto py-8">
            <h1 className="text-4xl font-bold">ERROR</h1>
            <h2 className="text-xl">Ups! Coś poszło nie tak</h2>
            <button onClick={() => reset()} className="mt-8 w-fit bg-gray-900 hover:shadow-sm shadow-gray-600 border-t border-b duration-200 rounded-md px-4 py-2 cursor-pointer">Spróbuj ponownie</button>

        </div>
    )
}
