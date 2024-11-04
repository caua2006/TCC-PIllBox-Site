import logo from '/pillbox-logo.svg'
import Facebook from '/footer/facebook.svg'
import Instagram from '/footer/instagram.svg'
import Youtube from '/footer/youtube.svg'
import Linkedin from '/footer/linkedin.svg'
import Twitter from '/footer/twitter.svg'
import AppleStore from '/footer/AppleStore.svg'
import PlayStore from '/footer/PlayStore.svg'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <div className='flex flex-col items-center md:items-start z-50 w-full'>
        <div className='flex flex-col items-center gap-3 justify-center mb-4 md:flex-row md:justify-center md:mb-20 md:gap-10'>
          <Link to={'/'}>
            <img src={logo} alt="" className='ml-5 md:ml-0'/>
          </Link>

          <div className='flex gap-10 items-center justify-center'>
            <Link to={'/products'}>
              <p className='text-textBody text-center'>Produtos</p>
            </Link>
            
            <Link to={'/about-us'}>
            <p className='text-textBody text-center'>Sobre nós</p>
            </Link>
          </div>
          
        </div>

        <div className='mb-14 md:flex md:items-center md:w-full md:justify-around'>
          <div className='flex gap-7 flex-wrap w-40 justify-center items-center mb-4 md:flex-row md:w-fit md:mb-0'>
              <img src={Facebook} alt="" />
              <img src={Instagram} alt="" />
              <img src={Linkedin} alt="" />
              <Link to={'https://www.youtube.com/@Pillbox-tcc'} target='_blank'><img src={Youtube} alt="" /></Link>
              <img src={Twitter} alt="" />
          </div>

          <div className='flex flex-col items-center gap-4  md:flex-row'>
            <img src={AppleStore} alt="" />
            <img src={PlayStore} alt="" />
          </div>
        </div>
    </div>
  )
}
