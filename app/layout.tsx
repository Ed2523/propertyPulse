import { ReactNode } from 'react'
import '@/assets/styles/globals.css'
import { title } from 'process'
import NavBar from '@/components/NavBar'

export const metadata = {
    title: 'Property Pulse',
    keywords: 'rental, property, real state',
    description: 'find the best rental property'
}

type MainLayoutProps = {
    children: ReactNode
}
const MainLayout = ({children}: MainLayoutProps) => {
    return ( <html><body>
        <NavBar/>
        <main>{children}</main>
    </body></html> );
}
 
export default MainLayout;