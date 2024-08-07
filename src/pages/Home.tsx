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
    <div className="md:max-w-[1240px]">
      <Header/>
      <div className="flex flex-col items-center gap-3 mb-20 md:flex-row md:items-center md:mt-32 md:mb-40">
        <div className="flex flex-col items-center md:w-max md:gap-10 md:justify-between md:items-start gap-5">
          <h1 className="text-3xl font-header md:text-6xl">Organize sua saúde com a <span className="text-h1Color">caixa inteligente</span></h1>
          <p className="font-body z-10 text-textBody text-center text-sm md:text-xl md:text-start md:w-80">Descubra como tornamos a gestão de medicamentos mais fácil, segura e independente</p>
          <Button placeholder='Saiba mais'/>
        </div>

        <div className="z-30 flex">
          <img src={PhoneBox} alt="" className="w-[1000px]"/>
        </div>
        
        <Blur className={'top-72 md:right-32 xl:right-96'}/>
      </div>

      <div className="mb-16 text-center">
        {window.innerWidth > 768 ? (
          <div className="md:flex md:items-center md:justify-center">
            <div className="flex flex-wrap gap-6 w-[650px]">
            <h2 className="text-2xl font-header md:text-4xl">Não deixe que sua visão atrapalhe o dia a dia</h2>
            <p className="text-textBody text-sm md:text-xl font-body">A caixa que vem para fazer com que você não se esqueça dos seus remédios e nem os tome errado</p>
            <CardHome/>
            </div>
            <img src={GirlPhone} alt="" className="w-[550px] z-30"/>
          </div>
        ) : (
          <div className="flex flex-col items-center gap-4">
            <h2 className="text-2xl font-header">Não deixe que sua visão atrapalhe o dia a dia</h2>
            <p className="text-textBody text-sm">A caixa que vem para fazer com que você não se esqueça dos seus remédios e nem os tome errado</p>
            <img src={GirlPhone} alt="" className="z-30"/>
            <CardHome/>
          </div>
        )}

        <Blur className={'top-[700px] right-20 md:top-[950px] md:right-32 xl:right-96'}/>
      </div>

      <div className="flex flex-col items-center gap-3 mb-16 md:flex-row-reverse md:mb-32 md:justify-center">
        <div className="flex flex-col items-center md:w-[550px] md:gap-10">
          <h2 className="text-2xl font-header md:text-4xl">Explore o poder do nosso app</h2>
          <p className="text-textBody text-center text-sm md:text-base md:text-justify">Você já imaginou um mundo onde a gestão dos seus medicamentos seja totalmente acessível e segura, independentemente de qualquer limitação visual? 
            <br /> <br />
            Nós acreditamos que todos merecem a tranquilidade de cuidar da saúde de maneira autônoma e independente. É por isso que apresentamos o inovador aplicativo para caixas de remédios, especialmente desenvolvido para pessoas cegas.
          </p>
          <Button placeholder={'Baixe agora'}/>
        </div>
        <img src={MobileAppImg} alt="" className="w-[600px] z-30"/>
        <Blur className={'top-[2250px] md:top-[1500px] xl:left-[500px] md:left-32'}/>
      </div>

      <div className="flex flex-col items-center gap-3 mb-16 md:flex-row md:justify-center">
        <div className="flex flex-col items-center md:w-[600px] md:gap-5">
          <h2 className="text-2xl font-header text-h1Color md:text-4xl">Quem somos </h2>
          <p className="text-textBody text-center text-sm md:text-base">Somos um grupo diversificado de profissionais dedicados a transformar a maneira como pessoas cegas e com baixa visão gerenciam sua saúde. Nossa equipe é composta por especialistas em tecnologia, saúde e acessibilidade, unidos por um objetivo comum: promover a autonomia e a inclusão através da inovação.</p>
          <Button placeholder={'Saiba mais'}/>
        </div>
        <img src={BannerPillbox} alt="" className="z-20 md:w-[550px] "/>
      </div>

      <Footer/>
      
    </div>
  )
}

export default Home
