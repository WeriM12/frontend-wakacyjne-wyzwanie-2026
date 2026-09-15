import Link from "next/link"

export default function Navbar() {
    return (
        <nav className="text-taupe-50 flex justify-center gap-4 p-4 shadow-xs shadow-taupe-300 text-shadow-sm text-shadow-mauve-600">
            <Link href="/" className="hover:underline ">Home</Link>
            <Link href="/products" className="hover:underline">Products</Link>
        </nav>
    )
}