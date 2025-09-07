import './information.css'
import Caminhao from '../../assets/image/icon-caminhao.png'
import Telefone from '../../assets/image/icon-telefone.png'
import Seta from '../../assets/image/icon-seta.png'

const Information = () => {
    return (
        <section className='section-information'>
            <div className='infor-container'>
                <img className='icon-information' src={Caminhao} alt="icone de caminhao" />
                <p>Frete grátis para todo o Brasil</p>
            </div>

            <div className='infor-container'>
                <img className='icon-information' src={Telefone} alt="" />
                <p>Atendimento ao cliente 24 horas</p>
            </div>

            <div className='infor-container'>
                <img className='icon-information' src={Seta} alt="" />
                <p>Garantia de devolução do dinheiro</p>
            </div>
        </section>
    )
}

export default Information