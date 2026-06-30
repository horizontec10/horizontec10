
const techs=[

"C/C++",
"Python",
"React",
"Node.js",
"Linux",
"Docker",
"ESP32",
"Arduino",
"Git",
"SQL",
"APIs REST"

]


export default function TechStack(){

return(

<section className="px-6 py-20">

<div className="max-w-6xl mx-auto text-center">


<h2 className="text-3xl font-bold">
Tecnologias
</h2>


<div className="
flex flex-wrap 
justify-center 
gap-4 
mt-10
">


{techs.map(t=>(

<span
key={t}
className="
px-5 py-3
rounded-xl
bg-gray-900
border border-gray-800
text-gray-300
"
>

{t}

</span>


))}


</div>


</div>

</section>


)

}