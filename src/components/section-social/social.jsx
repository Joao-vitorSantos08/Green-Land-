import './social.css'
import facebook from '../../assets/image/Facebook.png'
import Twitter from '../../assets/image/Twitter.png'
import Pinterest from '../../assets/image/Pinterest.png'
import instagram from '../../assets/image/instagram.png'

const Social = () => {
    return (
        <section className='section-social'>
            <h3>Siga-nos...</h3>
            <div className='icon-sicial'>
                <img src={facebook} alt="logo do facebook" />
                <img src={Twitter} alt="logo do Twitter" />
                <img src={Pinterest} alt="logo do Pinterest" />
              <div className='icon-intagram'>
                  <img src={instagram} alt="logo do instagram" />
              </div>
            </div>
        </section>
    )
}

export default Social