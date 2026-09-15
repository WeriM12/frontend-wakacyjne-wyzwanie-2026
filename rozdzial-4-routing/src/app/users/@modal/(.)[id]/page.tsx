import { notFound } from "next/navigation";
import Link from "next/link";
import { getUser } from "@/src/data/mockUsers";
import { Modal } from "@/src/components/Modal";

export default async function InterceptedUserPage({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;
    const user = getUser(id);

    if (!user) {
        notFound();
    }

    return (
        <Modal>
            <div className="h-70 border rounded-lg p-4 bg-linear-to-b from-gray-900 to-gray-950 w-80 shadow-lg">
                <img src={user.avatarUrl} alt={user.name} className="w-32 h-32 rounded-full mb-2" />
                <h2 className="text-xl font-bold">{user.name}</h2>
                <p className="text-gray-600">{user.role}</p>
            </div>
        </Modal>
    );
}