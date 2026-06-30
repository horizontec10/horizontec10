export default function Companies(){


const companies=[

"HorizonTech",

"Empresa Alpha",

"Startup Digital",

"Indústria Beta"


]


return(

<section className="px-6 py-16">


<div className="max-w-7xl mx-auto">


<h2 className="text-3xl font-bold text-center">

Empresas que confiaram em nossas soluções

</h2>


<div className="
grid
grid-cols-2
md:grid-cols-4
gap-6
mt-10
">


{

companies.map((company)=>(


<div

key={company}

className="
h-28
rounded-xl
border
border-gray-800
bg-[#0c111b]
flex
items-center
justify-center
text-gray-400
font-semibold
"

>


{company}


</div>


))


}


</div>


</div>


</section>


)

}