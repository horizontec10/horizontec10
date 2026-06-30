
const steps=[

"Alinhamento e definição do escopo",

"Desenvolvimento, testes e validação",

"Entrega, documentação e suporte"

]


export default function Process(){

return(

<section className="px-6 py-20">


<div className="max-w-5xl mx-auto">


<h2 className="text-3xl font-bold">
Como funciona
</h2>


<div className="mt-10 space-y-6">


{steps.map((s,i)=>(

<div className="flex gap-5 items-center">


<div className="
w-10 h-10
rounded-full
bg-emerald-500
text-black
flex items-center justify-center
font-bold
">

{i+1}

</div>


<p className="text-lg">
{s}
</p>


</div>


))}


</div>


</div>

</section>


)

}