import Button from "@/components/Button";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Link } from "react-router-dom";
import BoxImg from '/pillbox-img.svg'
import AppImg from '/mobile-img.svg'


export default function Products() {
  return (
    <div>

        <Header/>
        <main className="flex flex-col items-center mb-10 gap-10">
          <h1 className="font-header text-3xl text-h1Color mb-8">Produtos</h1>
          
          <div className="flex flex-col items-center gap-5">
            <img src={BoxImg} alt="" className="mr-3"/>
            <h2 className="font-header text-2xl text-h1Color">PillBox</h2>
            <p className="text-center text-textBody">A caixa de remédios inteligente complementa o aplicativo, proporcionando uma experiência completa e integrada</p>
            <Link to={'/pillbox'}>
                <Button placeholder={'Saiba mais'}/>
            </Link>
          </div>
          
          <div className="flex flex-col items-center gap-5">
            <img src={AppImg} alt="" />
            <h2 className="font-header text-2xl text-h1Color">PillBox - App</h2>
            <p className="text-center text-textBody">O aplicativo foi criado para ser um assistente confiável e fácil de usar, com funcionalidades especialmente desenhadas para atender às necessidades de pessoas cegas</p>
            <Link to={'/pillboxapp'}>
                <Button placeholder={'Saiba mais'}/>
            </Link>
          </div>
        </main>
        <Footer/>
    </div>
  )
}
