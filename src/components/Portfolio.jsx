const projects = [

{
title:"Chatbot Inteligente para Atendimento",

desc:
"Desenvolvimento de chatbot personalizado para automatização de atendimento, suporte ao cliente e otimização de processos empresariais.",

tags:[
"JavaScript",
"APIs",
"Automação"
],

link:"#"

},


{
title:"Sites Institucionais Profissionais",

desc:
"Criação de websites modernos, responsivos e otimizados para empresas apresentarem seus serviços e aumentarem sua presença digital.",

tags:[
"React",
"HTML",
"CSS",
"SEO"
],

link:"#"

},


{
title:"Sistemas de Pagamento",

desc:
"Desenvolvimento de sistemas integrados para gerenciamento de pagamentos, processos financeiros e soluções digitais personalizadas.",

tags:[
"Node.js",
"APIs",
"Banco de Dados"
],

link:"#"

}


]


export default function Portfolio(){


return(

<section 
id="portfolio"
className="px-6 py-20 bg-[#0c111b]"
>


<div className="max-w-7xl mx-auto">


<h2 className="text-3xl font-bold">

Projetos Desenvolvidos

</h2>


<p className="text-gray-400 mt-3">

Soluções digitais criadas para empresas que buscam tecnologia,
automação e crescimento.

</p>



<div className="
grid
md:grid-cols-3
gap-6
mt-10
">


{

projects.map((project,index)=>(


<div

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


<h3 className="text-xl font-bold">

{project.title}

</h3>



<p className="text-gray-400 mt-4">

{project.desc}

</p>



<div className="
flex
flex-wrap
gap-2
mt-5
">


{

project.tags.map(tag=>(


<span

key={tag}

className="
bg-gray-900
border
border-gray-700
px-3
py-1
rounded-full
text-sm
"

>

{tag}

</span>


))


}


</div>



<a

href={project.link}

className="
inline-block
mt-6
text-emerald-400
font-semibold
hover:text-emerald-300
"

>

Ver detalhes →

</a>



</div>


))


}



</div>


</div>


</section>


)

}