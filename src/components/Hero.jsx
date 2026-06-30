import { ArrowRight, Cpu } from "lucide-react";

export default function Hero(){

return(

<section className="px-6 py-20 md:px-20 lg:py-32">

<div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">


<div>


<p className="text-emerald-400 font-semibold mb-4">
Engenharia de Computação • Desenvolvimento de Software
</p>


<h1 className="text-4xl md:text-6xl font-bold leading-tight">

Transformando ideias em 
<span className="text-emerald-400">
 {" "}Hardware e Software de Alta Performance
</span>

</h1>


<p className="mt-6 text-gray-400 text-lg max-w-xl">

Desenvolvo soluções inteligentes envolvendo sistemas embarcados,
IoT, automação industrial e aplicações web modernas,
unindo engenharia, programação e tecnologia para criar produtos eficientes.

</p>


<div className="mt-8 flex flex-col sm:flex-row gap-4">


<a
href="https://wa.me/"
className="
flex items-center justify-center gap-2
bg-emerald-500 hover:bg-emerald-400
text-black font-semibold
px-6 py-3 rounded-xl transition
"
>

Solicitar Orçamento

<ArrowRight size={20}/>

</a>



<a
href="#portfolio"
className="
border border-gray-700
px-6 py-3 rounded-xl
hover:bg-gray-900 transition
"
>

Ver Projetos

</a>


</div>


</div>




<div className="
relative
bg-gradient-to-br 
from-gray-900 
to-gray-950
border border-gray-800
rounded-3xl
p-8
shadow-2xl
">


<div className="flex gap-3 mb-6">

<div className="w-3 h-3 bg-red-500 rounded-full"/>
<div className="w-3 h-3 bg-yellow-500 rounded-full"/>
<div className="w-3 h-3 bg-green-500 rounded-full"/>

</div>



<pre className="text-sm text-emerald-400">

{`const engineer = {

 skills:[
 "React",
 "Python",
 "C++",
 "IoT"
 ],

 build(){
 return "Innovation"
 }

}`}

</pre>



<div className="
absolute -bottom-6 -right-6
bg-emerald-500
p-4 rounded-2xl
text-black
">

<Cpu/>

</div>


</div>



</div>


</section>

)

}