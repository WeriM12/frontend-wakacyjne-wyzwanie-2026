export default function UsersLayout({children, userlist, stats, modal}: {children: React.ReactNode; userlist: React.ReactNode; stats: React.ReactNode; modal: React.ReactNode}) {
    return (
        <div className="w-full flex flex-col md:flex-row justify-center gap-8 p-4">
            <div className="">{userlist}</div>
            <div className="">{stats}</div>
            {modal}
            {children}
        </div>
    );
}