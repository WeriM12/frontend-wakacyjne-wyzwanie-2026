import { Sun } from 'lucide-react'
import './App.css'
import { ProjectCard } from './components/ProjectCard'

function App() {
    const sampleTechnologies = [
        { id: crypto.randomUUID(), name: "React" },
        { id: crypto.randomUUID(), name: "TypeScript" },
        { id: crypto.randomUUID(), name: "SCSS" },
    ];   


    return (
        <>
            <header className="bg-sky-50 text-center my-24 p-12 rounded-3xl mx-auto max-w-screen-lg">
                <h1 className="text-4xl font-bold mb-8">Witamy w "Wakacyjnym wyzwaniu" <Sun className='inline-block size-12 text-yellow-400' /></h1>
                <p className="text-gray-600 text-lg">Sprawdź <span className='underline font-bold'>README.md</span> i zobacz co dla ciebie przygotowaliśmy</p>
            </header>
            <main className='flex justify-center items-center py-16 px-8'>
                <section className='flex flex-col justify-center items-center border border-gray-200 rounded-lg p-16 shadow-sm w-full max-w-3xl'>

                    <ProjectCard title="The Watcher" description="Interaktywna strona internetowa do odkrywania i oceniania filmów oraz seriali. Użytkownicy mogą przeglądać szczegółowe informacje o produkcjach, oglądać ich zwiastuny, sprawdzać dostępne gatunki i oceny, a także głosować na swoje ulubione tytuły. Na podstawie głosów tworzone są rankingi, które pozwalają szybko znaleźć najpopularniejsze i najlepiej oceniane filmy oraz seriale." technologies={sampleTechnologies}/>

                </section>
            </main>



        </>
    )
}

export default App
