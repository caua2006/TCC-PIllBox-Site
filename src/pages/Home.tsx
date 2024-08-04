import Button from "@/components/Button";
import CardHome from "@/components/CardHome";
import Header from "@/components/Header";
import Footer from "@/components/Footer";


// import BgBlur from '/bg-blur.svg'


import PhoneBox from '/phone-box.svg'
import MobileAppImg from '/mobile-img.svg'
import BannerPillbox from '/banner-pillbox.svg'
import GirlPhone from '/girl-phone.svg'
import Blur from "@/components/Blur";



function Home() {

  return (
    <div>
      <Header/>
      <div className="flex flex-col items-center gap-3 mb-20">
        <h1 className="text-3xl font-header">Organize sua saúde com a <span className="text-h1Color">caixa inteligente</span></h1>
        <p className="font-body z-10 text-textBody text-center text-sm">Descubra como tornamos a gestão de medicamentos mais fácil, segura e independente</p>
        <Blur className={'top-72'}/>
        <Button placeholder='Saiba mais'/>
        <div className="z-30 flex">
        <img src={PhoneBox} alt="" />
        </div>
      </div>

      <div className="flex flex-col items-center gap-4 mb-16">
        <h2 className="text-2xl font-header">Não deixe que sua visão atrapalhe o dia a dia</h2>
        <p className="text-textBody text-sm">A caixa que vem para fazer com que você não se esqueça dos seus remédios e nem os tome errado</p>

        <Blur className={'top-[700px]'}/>
        <img src={GirlPhone} alt="" />
        <CardHome/>
      </div>

      <div className="flex flex-col items-center gap-3 mb-16">
        <h2 className="text-2xl font-header">Explore o poder do nosso app</h2>
        <p className="text-textBody text-center text-sm">Você já imaginou um mundo onde a gestão dos seus medicamentos seja totalmente acessível e segura, independentemente de qualquer limitação visual? </p>
        <p className="text-textBody text-center text-sm">Nós acreditamos que todos merecem a tranquilidade de cuidar da saúde de maneira autônoma e independente. É por isso que apresentamos o inovador aplicativo para caixas de remédios, especialmente desenvolvido para pessoas cegas.</p>
        <Blur className={'top-[2250px]'}/>
        <Button placeholder={'Baixe agora'}/>
        <img src={MobileAppImg} alt="" />
      </div>

      <div className="flex flex-col items-center gap-3 mb-16">
        <h2 className="text-2xl font-header text-h1Color">Quem somos </h2>
        <p className="text-textBody text-center text-sm">Somos um grupo diversificado de profissionais dedicados a transformar a maneira como pessoas cegas e com baixa visão gerenciam sua saúde. Nossa equipe é composta por especialistas em tecnologia, saúde e acessibilidade, unidos por um objetivo comum: promover a autonomia e a inclusão através da inovação.</p>
        <Button placeholder={'Saiba mais'}/>
        <img src={BannerPillbox} alt="" className="z-20"/>
      </div>

      <Footer/>
      
    </div>
  )
}

export default Home
