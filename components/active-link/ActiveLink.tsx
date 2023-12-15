'use client'
import Link from "next/link"
import { usePathname } from "next/navigation"
import style from './ActiveLink.module.css'
interface Props {
    path: string,
    text: string
}

export const ActiveLink = ({path,text}:Props) => {
    const pathName = usePathname();
    return (
    <Link 
    className={`${(pathName == path)&&style['active-link']} ${style.link} mr-5`}
    href={path}>
        {text}
    </Link>
  )
}