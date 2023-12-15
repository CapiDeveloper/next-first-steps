import type { Metadata } from "next"

export const metadata:Metadata = {
    title:'Pagina de contacto',
    description:'Conoce sobre nosotros'
}
export default function ContactPage(){
  return (
    <span className="text-7xl">Contacto</span>
  )
}