import Button from "@/components/Button";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Link } from "react-router-dom";

export default function Products() {
  return (
    <div>

        <Header/>
        <h1>Produtos</h1>
        <h2>PillBox</h2>

        <Link to={'/pillbox'}>
            <Button placeholder={'Saiba mais'}/>
        </Link>
        
        <h2>PillBox - App</h2>
        <Link to={'/pillboxapp'}>
            <Button placeholder={'Saiba mais'}/>
        </Link>
        <Footer/>
    </div>
  )
}
