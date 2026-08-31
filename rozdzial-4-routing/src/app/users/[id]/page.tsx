import { getUser } from "@/src/data/mockUsers";
import { notFound } from "next/navigation";


export default async function UserPage({params} : {params: Promise <{id:string}>}) {

    const {id} = await params;

    const user = getUser(id);

    if (!user) {
        notFound();
    }
    //notFound();
    return (
        <div className="m-auto w-fit bg-linear-to-b from-gray-900 to-transparent min-w-80 border-t border-b rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
            <img
                src={user.avatarUrl}
                alt={user.name}
                className="w-48 h-48 m-auto rounded-full mb-3"
            />
            <h3 className="text-lg font-semibold">{user.name}</h3>
            <p className="text-sm text-gray-600 mb-4">{user.role}</p>
        </div>
    )
}