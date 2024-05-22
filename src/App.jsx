import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import Header from './Header/Header.jsx'

import './App.css'

import Home from './Home/Home'
import About from './About/About'
import Characters from './Characters'
import Pagina404 from './Pagina404/Pagina404.jsx'

// BrowserRouter -> componente que envolve tudo que depende do react-router

// Routes -> definir as áreas em que vamos colocar os nossos route 

// Route ->  recebe o caminho em path . Se esse caminho for o mesmo do URL ele irá renderizar o componente que estiver dentro de element={}

const App = () => {
    return(
        <BrowserRouter>

        <Header/>
            <Routes>

                <Route path='/' element={<Home/>}/>  {/* / -> home  */} 
                <Route path='/about' element={<About/>}/>
                <Route path='/characters' element={<Characters/>}/>
                <Route path='*' element={<Pagina404/>}/>
                

            </Routes>

        </BrowserRouter>
    )
}

export default App