import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Header from './components/Header/Header'
import Information from './components/Section-information/information'
import Produtos from './components/Section-produtos/produtos'
import Dica from './components/section-dicas/dica'
import GreenLand from './components/section-GreenLand/GreenLand'
import Social from './components/section-social/social'
import Footer from './components/Footer/footer'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header/>
    <Information/>
    <Produtos/>
    <Dica/>
    <GreenLand/>
    <Social/>
    <Footer/>
  </StrictMode>,
)
