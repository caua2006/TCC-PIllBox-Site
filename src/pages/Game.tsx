import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function Game() {
  return (
    <div className="md:max-w-[1240px] w-full">
        <Header/>

        <main className="flex flex-col items-center  gap-20  mb-60 md:mb-20 mt-[90px]">
            <h1 className="font-header text-3xl text-h1Color mb-4 md:text-6xl">Wish Tower</h1>
            <iframe className="w-[280px] h-[157px] md:w-[560px] md:h-[315px] xl:mb-28"  src="https://www.youtube.com/embed/zYSF6I1M05U?si=VjaQYKzqnOcJj0rt" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
        </main>
        
        <Footer/>
    </div>
  )
}
