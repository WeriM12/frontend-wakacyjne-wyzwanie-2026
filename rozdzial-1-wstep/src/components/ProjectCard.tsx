import { useState } from "react";
import './ProjectCard.css'

interface Technology {
    id: string;
    name: string;
}

interface ProjectCardProps {
    title: string;
    description: string;
    technologies: Technology[];
}

export function ProjectCard({ title, description, technologies }: ProjectCardProps) {

    const [status, setStatus] = useState("W trakcie")

    const handleClick = () => {
        setStatus((prevStatus) => prevStatus === "W trakcie" ? "Ukończony" : "W trakcie");
    }

    return (
        <div className="bg-white rounded-xl shadow-md p-6 flex flex-col gap-2">
            <div className="flex flex-row items-center mb-3">
                <h2 className="text-3xl font-bold">{title}</h2>
                <span className="ml-auto text-xs px-4 py-2 rounded-full bg-sky-50 text-sky-700 whitespace-nowrap">
                    {status}
                </span>
            </div>

            <p className="text-gray-600 mb-4 self-start">{description}</p>

            <h3 className="text-sm font-semibold text-center text-gray-400 uppercase tracking-wide mb-2">Technologie:</h3>
            <ul className="flex flex-row flex-wrap items-center gap-2 mb-6">
                {technologies.map((technology) => (
                    <li key={technology.id} className="bg-gray-100 text-gray-700 text-sm px-4 py-2 rounded-full">{technology.name}</li>
                ))}
            </ul>

            <button
                className="self-end border border-gray-300 rounded-lg px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 active:bg-gray-100 transition-colors"
                onClick={handleClick}
            >
                Zmień status
            </button>
        </div>
    )
}