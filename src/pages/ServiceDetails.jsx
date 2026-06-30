import { useParams } from "react-router-dom";


const details = {


"landing-page":{

title:"Landing Page Empresarial",

description:
"Criamos páginas estratégicas focadas em apresentar sua empresa e transformar visitantes em clientes.",

benefits:[
"Design moderno",
"Responsividade",
"Otimização para conversão",
"Integração com contatos"
]

},



"site-institucional":{

title:"Site Institucional",

description:
"Sites profissionais para empresas apresentarem serviços, autoridade e informações importantes.",

benefits:[
"Layout personalizado",
"SEO básico",
"Alta performance",
"Adaptado para celular"
]

},


"sistemas":{

title:"Sistemas Personalizados",

description:
"Desenvolvimento de sistemas sob medida conforme o processo da empresa.",

benefits:[
"Arquitetura personalizada",
"Banco de dados",
"Automação",
"Suporte técnico"
]

}


}



export default function ServiceDetails(){


const {service}=useParams();


const item =
details[service] ||
details["sistemas"];



return(

<div className="
min-h-screen
bg-[#080b12]
text-white
px-6
py-20
">


<h1 className="
text-5xl
font-bold
">

{item.title}

</h1>



<p className="
text-gray-400
text-xl
max-w-3xl
mt-6
">

{item.description}

</p>



<h2 className="
text-3xl
font-bold
mt-12
">

O que entregamos

</h2>



<ul className="
mt-6
space-y-4
">


{

item.benefits.map((b)=>(

<li className="
text-emerald-400
">

✓ {b}

</li>


))


}


</ul>


<a

href="mailto:seuemail@email.com"

className="
inline-block
mt-10
bg-emerald-500
text-black
px-8
py-4
rounded-xl
font-bold
"

>

Solicitar orçamento

</a>



</div>

)

}