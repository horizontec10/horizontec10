import {
FaGithub,
FaLinkedin,
FaEnvelope,
FaWhatsapp
} from "react-icons/fa";


export default function Footer(){


return(

<footer className="px-6 py-20 bg-[#0c111b]">


<div className="max-w-5xl mx-auto text-center">


<h2 className="text-4xl font-bold">

Vamos desenvolver sua próxima solução digital?

</h2>


<p className="text-gray-400 mt-5">

Entre em contato para criar um projeto personalizado para sua empresa.

</p>



<a

href="https://wa.me/5599999999999"

target="_blank"

className="
inline-flex
items-center
gap-3
mt-8
bg-emerald-500
text-black
px-8
py-4
rounded-xl
font-bold
hover:bg-emerald-400
transition
"

>

<FaWhatsapp/>

Solicitar orçamento

</a>




<div className="
flex
justify-center
gap-8
mt-10
text-gray-400
">


<a

href="mailto:seuemail@gmail.com"

className="hover:text-emerald-400 transition"

>

<FaEnvelope size={30}/>

</a>




<a

href="www.linkedin.com/in/marcos-wyliam-791b882a6"

target="_blank"

className="hover:text-emerald-400 transition"

>

<FaLinkedin size={30}/>

</a>




<a

href="https://github.com/marcosdary"

target="_blank"

className="hover:text-emerald-400 transition"

>

<FaGithub size={30}/>

</a>



</div>



<p className="text-gray-600 mt-10 text-sm">

© 2026 - Engenharia de Computação | Desenvolvimento de Soluções Digitais

</p>



</div>


</footer>


)

}