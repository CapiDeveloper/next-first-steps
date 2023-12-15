import { HomeIcon } from "@primer/octicons-react"
import Link from "next/link"
import { ActiveLink } from "..";

const navItems = [
    { path:'/', text:'Home' },
    { path:'/about', text:'About' },
    { path:'/pricing', text:'Pricing' },
    { path:'/contact', text:'Contact' },
];

export const NavBar = ({}) => {
    
    
    return (
    <nav className="flex bg-blue-800 bg-opacity-30 p-2 m-2 rounded">
        <Link href='/' className="flex items-center gap-2">
            <HomeIcon />
            <span>Home</span>
        </Link>
        <div className="flex-1 flex gap-2"></div>
        {
            navItems.map((item)=>(
                <ActiveLink key={item.path} {...item} />
            ))
        }
    </nav>
  )
}