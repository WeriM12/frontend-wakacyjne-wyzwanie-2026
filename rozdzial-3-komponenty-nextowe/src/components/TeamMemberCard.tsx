import Image from "next/image";
import Link from "next/link";

interface TeamMemberCardProps {
  name: string;
  role: string;
  bio: string;
  skills: string[];
}

export default function TeamMemberCard({
  name,
  role,
  bio,
  skills,
}: TeamMemberCardProps) {
  return (
    <div className="flex w-full max-w-md flex-col overflow-hidden rounded-2xl bg-white shadow-lg sm:max-w-xl sm:flex-row">
      <div className="flex h-44 items-center justify-center bg-red-400 sm:h-auto sm:w-48">
        <div className="relative flex h-24 w-24 m-5 items-center justify-center rounded-full bg-black/20 text-3xl font-bold text-white">
          <Image src="/image.jpg" alt="Zdjęcie profilowe" fill className="object-cover rounded-full"/>
        </div>
      </div>
      <div className="flex flex-col gap-4 p-6">
        <div>
          <h2 className="text-xl font-bold text-gray-900">{name}</h2>
          <p className="mt-1 text-sm font-medium text-red-700 font-jakarta">{role}</p>
        </div>
        <p className="text-sm leading-6 text-gray-600">{bio}</p>
        <div>
          <h3 className="text-xs font-semibold uppercase tracking-wide text-gray-500">
            Umiejętności
          </h3>
          <ul className="mt-2 flex flex-wrap gap-2">
            {skills.map((skill) => (
              <li
                key={skill}
                className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700"
              >
                {skill}
              </li>
            ))}
          </ul>
        </div>
        <Link href="https://solvro.pwr.edu.pl/pl/" target="_blank" 
            className="mt-4 bg-red-400 text-white font-semibold px-5 py-1 rounded-full w-fit ml-auto hover:bg-red-300 hover:translate-x-1 duration-200">Dowiedz się więcej</Link>
      </div>
    </div>
  );
}
