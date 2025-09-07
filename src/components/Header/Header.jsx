import './Header.css'
import Rectangle from '../../assets/image/Rectangle.png'
import fundo_Green_Land from '../../assets/image/fundo-Green-Land.png'
import logo from '../../../public/logo.png'
import lupa from '../../assets/image/lupa.png'
import icon_boneco from '../../assets/image/icon-pessoa.png'
import icon_carrinho from '../../assets/image/icon-carrinho.png'



const Header = () => {
    return (
        <header>
            <div className='Header-container'>
                <div className='Rectangle'>
                    <img className='Rectangle-header' src={Rectangle} alt="" />
                    <img className='Rectangle-header' src={Rectangle} alt="" />
                </div>

                <div className='fake-input'></div>

                <div className='Rectangle'>
                    <img className='Rectangle-header' src={Rectangle} alt="" />
                    <img className='Rectangle-header' src={Rectangle} alt="" />
                </div>
            </div>

            <section className='section-Green-Land'>

                <p>Entregas a domicílio grátis</p>
                <img className='fundo_Green_Land' src={fundo_Green_Land} alt="" />
                <nav className='nav-header'>

                    <ul>
                        <li><a href="#">Plantas e Sementes</a></li>
                        <li><a href="#">Vasos </a></li>
                        <li><a href="#">Acessórios</a></li>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">Contato</a></li>
                    </ul>

                    <div className='header-icon'>
                        <a href="#"> <img className='icon-header' src={lupa} alt="" /></a>
                        <a href="#"> <img className='icon-header' src={icon_boneco} alt="" /></a>
                        <a href="#">  <img className='icon-header' src={icon_carrinho} alt="" /></a>
                    </div>
                    
                </nav>
                <div className='Green-Land'>
                    <img className='logo' src={logo} alt="logo" />
                    <h1>Green Land</h1>
                </div>
                <div className='planeta-plantas'>
                    <p>O planeta das plantas</p>
                    <p>Da nossa terra para sua casa </p>
                </div>
            </section>
        </header>
    )
}

export default Header