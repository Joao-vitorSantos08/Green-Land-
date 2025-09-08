import './produtos.css'
import Aglaonema from '../../assets/image/aglaonema.png'
import Espada_sao_jorge from '../../assets/image/Espada-de-São-Jorge.png'
import Figueira_lira from '../../assets/image/Figueira-lira.png'
import Dracaena from '../../assets/image/Dracaena.png'
import Dieffenbachia from '../../assets/image/Dieffenbachia.png'
import Espada_de_Sao_Jorge_ana from '../../assets/image/Espada-de-Sao-Jorge-ana.png'
import corecao from '../../assets/image/coracao.png'


const Produtos = () => {
    return (
        <section className='section-produtos'>
            <div className='Card-produto'>
                <img className='img-produtos' src={Aglaonema} alt="Aglaonema" title='Aglaonema' />
                <h2>Aglaonema</h2>
                <p>Folhas verdes largas. Resistente, pouca manutenção.</p>

                <div className='card-btn'>
                    <span>R$ 13</span>
                    <button>Adicionar ao carrinho</button>
                    <img src={corecao} alt="" />
                </div>
            </div>

            <div className='Card-produto'>
                <img className='img-produtos' src={Espada_sao_jorge} alt="Espada são jorge" title='Espada são jorge' />
                <h2>Espada de São Jorge</h2>
                <p>Folhas longas e rígidas. Purifica o ar, resistente.</p>

                <div className='card-btn'>
                    <span>R$ 18</span>
                    <button>Adicionar ao carrinho</button>
                    <img src={corecao} alt="" />
                </div>
            </div>

            <div className='Card-produto'>
                <img className='img-produtos' src={Figueira_lira} alt="Figueira_lira" title='Figueira_lira' />
                <h2>Figueira-lira</h2>
                <p>Folhas grandes em formato de violino; elegante, rega moderada..</p>

                <div className='card-btn'>
                    <span>R$ 20</span>
                    <button>Adicionar ao carrinho</button>
                    <img src={corecao} alt="" />
                </div>
            </div>

            <div className='Card-produto'>
                <img className='img-produtos' src={Espada_de_Sao_Jorge_ana} alt="espada_de_Sao_Jorge_ana" title='Espada de São Jorge anã' />
                <h2>Espada-de-São-Jorge</h2>
                <p>Versão compacta; folhas verdes mais largas, resistente e de baixa manutenção.</p>

                <div className='card-btn'>
                    <span>R$ 16</span>
                    <button>Adicionar ao carrinho</button>
                    <img src={corecao} alt="coração" />
                </div>
            </div>

            <div className='Card-produto'>
                <img className='img-produtos' src={Dracaena} alt="Dracaena" title='Dracaena'/>
                <h2>Espada-de-São-Jorge</h2>
                <p>Versão compacta; folhas verdes mais largas, resistente e de baixa manutenção.</p>

                <div className='card-btn'>
                    <span>R$ 35</span>
                    <button>Adicionar ao carrinho</button>
                    <img src={corecao} alt="" />
                </div>
            </div>

             <div className='Card-produto'>
                <img className='img-produtos' src={Dieffenbachia} alt="Dieffenbachia" title='Dieffenbachia' />
                <h2>Dieffenbachia</h2>
                <p>Folhas largas com manchas claras. Decorativa, tóxica.</p>

                <div className='card-btn'>
                    <span>R$ 50</span>
                    <button>Adicionar ao carrinho</button>
                    <img src={corecao} alt="" />
                </div>
            </div>


        </section>
    )
}

export default Produtos