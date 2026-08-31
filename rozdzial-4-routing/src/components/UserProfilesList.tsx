// components/UserProfileList.tsx
import { error } from "console";
import { User } from "../types/User";
import { UserProfileCard } from "./UserProfileCard";
import { MOCK_USERS } from "@/src/data/mockUsers";


async function getUsers(): Promise<User[]> {
  await new Promise((resolve) => {
    setTimeout(resolve, 2000);
  });

  //throw new Error("Testowy błąd ładowania użytkowników")

  return MOCK_USERS;
}

export async function UserProfileList() {
  const users = await getUsers();

  return (
    <div className="w-full md:w-fit h-fit grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
      {users.map((user) => (
        <UserProfileCard key={user.id} user={user} />
      ))}
    </div>
  );
}
