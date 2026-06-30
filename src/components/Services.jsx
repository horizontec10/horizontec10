import {
Code2,
Globe,
Database,
Zap,
Bot,
ShoppingCart,
Settings,
Server,
ChartBar
} from "lucide-react";


const services = [

{
icon:<Globe/>,
title:"Landing Page Empresarial",
price:"R$ 500",
description:
"Página profissional focada em apresentação de serviços e conversão de clientes.",
link:"/servico/landing-page"
},


{
icon:<Globe/>,
title:"Site Institucional",
price:"R$ 900",
description:
"Sites completos para empresas fortalecerem sua presença digital.",
link:"/servico/site-institucional"
},


{
icon:<Code2/>,
title:"Portfólio Profissional",
price:"R$ 700",
description:
"Portfólios modernos para profissionais apresentarem seus projetos.",
link:"/servico/portfolio"
},


{
icon:<Settings/>,
title:"Correção e Otimização de Sistemas",
price:"R$ 200",
description:
"Melhoria de desempenho, correções e evolução de sistemas existentes.",
link:"/servico/otimizacao"
},


{
icon:<Server/>,
title:"Integrações com APIs",
price:"R$ 900",
description:
"Integração entre sistemas, plataformas e serviços externos.",
link:"/servico/apis"
},


{
icon:<ChartBar/>,
title:"Dashboard Empresarial",
price:"R$ 800",
description:
"Painéis administrativos para controle e visualização de dados.",
link:"/servico/dashboard"
},


{
icon:<Database/>,
title:"API REST Personalizada",
price:"R$ 1.800",
description:
"Desenvolvimento de APIs escaláveis para aplicações empresariais.",
link:"/servico/api-rest"
},


{
icon:<ShoppingCart/>,
title:"Loja Virtual",
price:"A partir de R$ 2.000",
description:
"E-commerce completo para vendas online.",
link:"/servico/loja-virtual"
},


{
icon:<Bot/>,
title:"Automação de Processos",
price:"A partir de R$ 250",
description:
"Automação de tarefas repetitivas para aumentar produtividade.",
link:"/servico/automacao"
},


{
icon:<Zap/>,
title:"Sistemas Personalizados",
price:"A partir de R$ 2.500",
description:
"Soluções sob medida conforme necessidade da empresa.",
link:"/servico/sistemas"
}


]



export default function Services(){


return(

<section 
className="
px-6
py-20
bg-[#0c111b]
"
>


<div className="
max-w-7xl
mx-auto
">


<h2 className="
text-3xl
font-bold
">

Serviços e Soluções

</h2>


<p className="
text-gray-400
mt-3
">

Desenvolvimento de soluções digitais profissionais para empresas.

</p>



<div className="
grid
md:grid-cols-2
lg:grid-cols-3
gap-6
mt-10
">


{

services.map((service,index)=>(


<a

href={service.link}

key={index}

className="
bg-[#080b12]
border
border-gray-800
rounded-2xl
p-6
hover:border-emerald-500
transition
"

>


<div className="
text-emerald-400
mb-5
">

{service.icon}

</div>



<h3 className="
text-xl
font-bold
">

{service.title}

</h3>



<p className="
text-gray-400
mt-3
">

{service.description}

</p>



<div className="
mt-5
text-emerald-400
font-bold
">

{service.price}

</div>


<p className="
mt-4
text-sm
text-gray-500
">

Ver detalhes →

</p>


</a>


))


}


</div>


</div>


</section>

)

}