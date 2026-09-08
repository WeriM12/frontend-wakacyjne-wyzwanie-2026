import Link from "next/link"

export default function notFound() {
    return (
        <div className="w-full flex flex-col gap-8 my-auto py-8">
            <div className="m-auto w-200">
                <h3 className="text-4xl font-bold">Ten profil nie istnieje :,( </h3>
                <p className="mt-2">Niestety, nie znaleźliśmy profilu, którego szukasz.</p>
                <button className="mt-8 cursor-pointer"> Wróć do <Link href="/" className="hover:underline text-blue-300">strony głównej</Link> </button>
            </div>

        </div>
    )
}