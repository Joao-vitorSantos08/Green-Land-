import './div-green-land.css'
import logo from '../../../public/logo.png'


const Div_green_land = () => {
    return (
        <div>
            <div className='Green-Land'>
                <img className='logo' src={logo} alt="logo" />
                <h1>Green Land</h1>
            </div>
            <div className='planeta-plantas'>
                <p>O planeta das plantas</p>
                <p>Da nossa terra para sua casa </p>
            </div>
        </div>
    )
}

export default Div_green_land
