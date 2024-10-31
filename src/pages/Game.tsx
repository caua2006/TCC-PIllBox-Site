import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function Game() {
  return (
    <div>
        <Header/>

        <main className="flex flex-col items-center gap-20 mb-20">
            <h1 className="font-header text-3xl text-h1Color mb-8 md:text-6xl">Game</h1>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/oFtjKbXKqbg?si=rnmaUB9aeY5_vFvn" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

        </main>

        <Footer/>
    </div>
  )
}
