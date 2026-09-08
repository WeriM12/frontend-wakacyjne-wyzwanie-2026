import { NAV_LINKS } from "../config"
import { Tabs, TabsList, TabsTrigger, TabsContent, tabsListVariants } from "@/src/components/ui/tabs";
import Link from "next/link"

export default function Navbar() {
    return (
        <Tabs className="w-full p-4">
            <TabsList variant="line" className='m-auto'>
                {NAV_LINKS.map(link => (
                    // Obsługa zdarzenia 'hover'
                    <TabsTrigger key={link.href} value={link.href} nativeButton={false} render={
                        <Link href={link.href}>{link.title}</Link>
                    } />
                    
                ))}
            </TabsList>
        </Tabs>
    )
}