import {NavBar} from "@/components"

export default function AboutLayout({children}: {children: React.ReactNode}) {
  return (
    <>
      <NavBar/>
      <h1>Layout de about</h1>
      { children }
    </>
  )
}