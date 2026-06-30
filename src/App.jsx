import {
BrowserRouter,
Routes,
Route
} from "react-router-dom";


import Home from "./pages/Home";

import Chatbot from "./pages/Chatbot";
import Sites from "./pages/Sites";
import Pagamentos from "./pages/Pagamentos";
import ServiceDetails from "./pages/ServiceDetails";


export default function App(){


return(

<BrowserRouter>


<Routes>


<Route 
path="/"
element={<Home/>}
/>


<Route
path="/servicos/chatbot"
element={<Chatbot/>}
/>


<Route
path="/servicos/sites-institucionais"
element={<Sites/>}
/>


<Route
path="/servicos/sistemas-pagamento"
element={<Pagamentos/>}
/>


<Route
path="/servico/:service"
element={<ServiceDetails/>}
/>


</Routes>


</BrowserRouter>

)

}