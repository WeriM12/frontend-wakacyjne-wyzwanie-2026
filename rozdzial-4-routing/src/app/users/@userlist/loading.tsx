// users/loading.tsx

export default function Loading() {
    return (
        <div className="w-fit h-fit grid grid-cols-2 xl:grid-cols-3 gap-4">
            {[1, 2, 3].map((item) => (
                <div key={item} className="animate-pulse h-60 w-50 md:w-60 border-t bg-linear-to-b from-gray-900 to-transparent rounded-lg"> </div>
            ))}

        </div>
    )
}