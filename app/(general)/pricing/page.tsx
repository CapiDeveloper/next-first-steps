import type { Metadata } from "next"

export const metadata:Metadata = {
    title:'Pagina de precios',
    description:'Nuestros precios'
}

export default function PricingPage(){
    return (
      <span className="text-7xl">Princing</span>
    )
}