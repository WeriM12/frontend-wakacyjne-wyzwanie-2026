import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex justify-center items-center h-100">
      <p className="text-taupe-50 text-3xl">Get to know our 
        <Link href='/products' className="text-blue-300 hover:underline transition-all"> products &rarr;</Link>
      </p>
        
    </div>

  );
}
