import './dica.css'
import seta_para_baixo from '../../assets/image/seta-baixo.png'
import seta_para_direita from '../../assets/image/seta-direita.png'
import conjuto_platas from '../../assets/image/conjunto-planta.png'
import conjunto_vaso_marrom from '../../assets/image/grupo-charro-marrom.png'

const Dica = () => {
    return (
        <section className='section-dica'>
            <div className='btn-dica'>
                <button className='btn-ideal'>Obtenha sua planta ideal <img src={seta_para_direita} alt="" /></button>
                <button className='btn-popular'>Mais popular <img src={seta_para_baixo} alt="" /></button>
            </div>

            <div className='dica-container'>
                <div className='dicas-img'>
                    <img src={conjuto_platas} alt="conjuto de vasos" />
                    <p>5 Passos para Mudar suas Plantas de Vaso sem Erro</p>
                </div>
                <div className='dicas-img'>
                    <img src={conjunto_vaso_marrom} alt="" />
                    <p>Os primeiros cuidados com uma planta</p>
                </div>
            </div>
        </section>
    )
}

export default Dica