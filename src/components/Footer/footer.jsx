import './footer.css'
import logo from '../../../public/logo.png'

const Footer = () => {
    return (
        <footer>
            <ul className='contato'>
                <p>Contato</p>
                <li>Email: info@greenlad.com</li>
                <li>Brasil 03007</li>
                <li>Aviso legal</li>
            </ul>
            <div className='footer-Green-Land'>
                <img src={logo} alt="logo" />
                <h4>Green Land</h4>
            </div>
            <nav className='nav-footer'>

                <ul>
                    <li><a href="#">Plantas e Sementes</a></li>
                    <li><a href="#">Vasos </a></li>
                    <li><a href="#">Acessórios</a></li>
                    <li><a href="#">Blog</a></li>
                    <li><a href="#">Contato</a></li>
                </ul>

            </nav>
        </footer>
    )
}

export default Footer