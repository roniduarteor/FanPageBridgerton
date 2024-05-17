import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import Header from './Header'

import Home from './Home/Home'
import Sobre from './Sobre'
import Servicos from './Servicos'
import Contatos from './Contatos'

// BrowserRouter -> componente que envolve tudo que depende do react-router

// Routes -> definir as áreas em que vamos colocar os nossos route 

// Route ->  recebe o caminho em path . Se esse caminho for o mesmo do URL ele irá renderizar o componente que estiver dentro de element={}

const App = () => {
    return(
        <BrowserRouter>

        <Header/>
            <Routes>

                <Route path='/' element={<Home/>}/>  {/* / -> home  */} 
                <Route path='/sobre' element={<Sobre/>}/>
                <Route path='/servicos' element={<Servicos/>}/>
                <Route path='/contatos' element={<Contatos/>}/>

            </Routes>

        </BrowserRouter>
    )
}

export default App