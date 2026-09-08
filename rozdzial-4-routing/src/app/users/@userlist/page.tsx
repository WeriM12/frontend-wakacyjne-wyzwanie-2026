// users/userlist/page.tsx

import { UserProfileList } from "@/src/components/UserProfilesList"

export default async function UsersPage() {
    return (
        <div className="w-full">
            <UserProfileList />
        </div>
    )
}