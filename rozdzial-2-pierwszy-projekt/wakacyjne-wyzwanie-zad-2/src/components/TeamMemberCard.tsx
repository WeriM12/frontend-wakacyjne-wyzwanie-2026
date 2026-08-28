import Image from "next/image";

import avatar from "../../public/avatar-placeholder.png"


interface TeamMemberCardProps {
    name: string;
    role: string;
    bio: string;
    skills: string[];
}

export function TeamMemberCard({ name, role, bio, skills}: TeamMemberCardProps) {



    return (
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-6 m-auto justify-center p-5 rounded-2xl border-2
                     border-slate-100 bg-slate-950 text-slate-50 max-w-9/10 lg:max-w-300 lg:w-5/6">

            <div className="flex flex-row gap-4 lg:my-4 max-h-fit lg:min-w-1/3">
                <Image src={avatar} alt={name} className="w-15 h-15 bg-slate-50 rounded-full object-center"/>
                <div className="flex flex-col">
                    <h2 className="text-3xl font-bold">{name}</h2>
                    <h3 className=" text-slate-300">{role}</h3>
                </div>
            </div>

            <div className="lg:flex lg:flex-col">
                <h4 className=" italic text-xs text-slate-500">bio</h4>
                <p>{bio}</p>
            </div>

            <div className="lg:flex lg:flex-col lg:min-w-3/10">
                <h2 className="mb-1 italic text-xs text-slate-500">skills</h2>
                <ul className="flex flex-wrap justify-baseline gap-2 text-xs">
                    {skills.map((skill) => (
                        <li key={skill} className="px-2 py-1 bg-slate-600 rounded-full">{skill}</li>
                    ))}
                </ul>
            </div>

        </div>
    )
}