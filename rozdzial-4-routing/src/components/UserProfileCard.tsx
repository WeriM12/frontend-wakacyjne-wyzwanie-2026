//components/UserProfileCard.tsx
import Link from "next/link";
import { User } from "../types/User";

interface UserProfileCardProps {
  user: User;
}

export function UserProfileCard({ user }: UserProfileCardProps) {
  return (
    <div className="border-t border-b flex flex-col h-full w-full md:w-60 rounded-lg p-4 shadow-sm bg-linear-to-b from-gray-900 to-transparent hover:shadow-md transition-shadow shadow-gray-600">
      <img
        src={user.avatarUrl}
        alt={user.name}
        className="w-16 h-16 rounded-full mb-3"
      />
      <h3 className="text-lg font-semibold">{user.name}</h3>
      <p className="text-sm text-gray-600 mb-4">{user.role}</p>
      <Link
        href={`/users/${user.id}`}
        className="w-fit mt-auto ml-auto text-blue-100 text-sm border-transparent px-4 py-2 font-bold duration-200 rounded hover:text-blue-300 hover:border-gray-200"
      >
        Zobacz profil
      </Link>
    </div>
  );
}
