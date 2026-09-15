import Image from "next/image";
import { TeamMemberCard } from "@/components/TeamMemberCard";

export default function Home() {

    const exampleData = {
        name: "Jan Kowalski",
        role: "Senior Frontend Developer",
        bio: "Zajmuje się tworzeniem interfejsów użytkownika w React i Next.js. Pracuje w branży IT od 13 lat, wcześniej współpracował nad projektami e-commerce.",
        skills: ["React", "TypeScript", "Next.js", "Tailwind CSS", "SASS/SCSS", "Vite", "Python", "Docker"],
    }
  
    return (
        
        <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
            <main className="flex flex-1 flex-col items-center justify-center bg-white dark:bg-black sm:items-start">
                <TeamMemberCard name={exampleData.name} role={exampleData.role} bio={exampleData.bio} skills={exampleData.skills}/>
            </main>
        </div>
    );
}
