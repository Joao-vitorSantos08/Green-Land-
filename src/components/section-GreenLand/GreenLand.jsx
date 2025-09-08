import './GreenLand.css'
import instagran from '../../assets/image/icon-instagram-preto.png'
import pessoa_com_charro from '../../assets/image/pessoa-com-charro.png'
import plata from '../../assets/image/planta.png'
import grupo_charro_branco from '../../assets/image/grupo-charro-branco.png'


const GreenLand = () => {
    return (
        <section className='section-greenLand'>
            <div className='GreenLand-en'>
                <h2>#GreenLand en</h2>
                <img src={instagran} alt="logo do instagram" />
            </div>
            <div className='greenLand-container'>
                <img src={pessoa_com_charro} alt="pessoa segurando um charro" />
                <img src={plata} alt="grupos de três charros brancos" />
                <img src={grupo_charro_branco} alt="grupos de três charros brancos" />
            </div>
        </section>
    )
}

export default GreenLand