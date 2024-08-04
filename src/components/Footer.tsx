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
    <div className='flex flex-col items-center'>
        <div className='flex flex-col items-center gap-3 justify-center mb-4'>
          <Link to={'/'}>
          <img src={logo} alt="" className='ml-5'/>
          </Link>

          <div className='flex gap-10 items-center justify-center'>
            <p className='text-textBody text-center'>Produtos</p>
            <p className='text-textBody text-center'>Sobre nós</p>
          </div>
          
        </div>

        <div className='flex gap-7 flex-wrap w-40 justify-center items-center mb-4'>
            <img src={Facebook} alt="" />
            <img src={Instagram} alt="" />
            <img src={Linkedin} alt="" />
            <img src={Youtube} alt="" />
            <img src={Twitter} alt="" />
        </div>

        <div className='flex flex-col items-center gap-4 mb-14'>
          <img src={AppleStore} alt="" />
          <img src={PlayStore} alt="" />
        </div>
    </div>
  )
}
