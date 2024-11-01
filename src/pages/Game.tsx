import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function Game() {
  return (
    <div className="h-full flex flex-col justify-between">
        <Header/>

        <main className="flex flex-col items-center gap-20  mb-72 md:mb-20 mt-[90px]">
            <h1 className="font-header text-3xl text-h1Color mb-4 md:text-6xl">Game</h1>
            <iframe className="w-[280px] h-[157px] md:w-[560px] md:h-[315px]"  src="https://www.youtube.com/embed/oFtjKbXKqbg?si=rnmaUB9aeY5_vFvn" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>

        </main>

        <Footer/>
    </div>
  )
}
