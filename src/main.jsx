import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Header from './components/Header/Header'
import Information from './components/Section-information/information'
import Produtos from './components/Section-produtos/produtos'
import Dica from './components/section-dicas/dica'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header/>
    <Information/>
    <Produtos/>
    <Dica/>
  </StrictMode>,
)
