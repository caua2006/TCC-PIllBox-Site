import Button from "@/components/Button";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Link } from "react-router-dom";
import BoxImg from '/pillbox-img.svg'
import AppImg from '/mobile-img.svg'
import Blur from "@/components/Blur";


export default function Products() {

  
  return (
    <div>

        <Header/>
        <main className="flex flex-col items-center mb-10 gap-10 md:mt-10">
          <h1 className="font-header text-3xl text-h1Color mb-8 md:text-6xl">Produtos</h1>
          
          <div className="flex flex-col items-center gap-5 md:flex md:flex-row md:mb-10">
            <img src={BoxImg} alt="" className="mr-3 md:w-[450px] z-30"/>
            <div className="flex flex-col items-center md:w-[600px] gap-6">
              <h2 className="font-header text-2xl text-h1Color md:text-5xl">PillBox</h2>
              <p className="text-center text-textBody md:text-base">A caixa de remédios inteligente complementa o aplicativo, proporcionando uma experiência completa e integrada</p>
              <Link to={'/pillbox'}>
                  <Button placeholder={'Saiba mais'}/>
              </Link>
            </div>
            <Blur className={'top-[150px] right-20 md:top-[250px] md:left-[20%]'}/>
          </div>
          
          <div className="flex flex-col items-center gap-5 md:flex md:flex-row">
            <img src={AppImg} alt="" className="md:w-[450px] z-30"/>
            <div className="flex flex-col items-center md:w-[600px] gap-6">
              <h2 className="font-header text-2xl text-h1Color md:text-5xl">PillBox - App</h2>
              <p className="text-center text-textBody md:text-base">O aplicativo foi criado para ser um assistente confiável e fácil de usar, com funcionalidades especialmente desenhadas para atender às necessidades de pessoas cegas</p>
              <Link to={'/pillboxapp'}>
                  <Button placeholder={'Saiba mais'}/>
              </Link>
            </div>
            <Blur className={'top-[600px] right-20 md:top-[650px] md:left-[20%]'}/>
          </div>
        </main>
        <Footer/>
    </div>
  )
}
