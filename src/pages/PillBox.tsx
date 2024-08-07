import Footer from "@/components/Footer";
import Header from "@/components/Header";
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"

import { ChevronRight } from 'lucide-react';

export default function PillBox() {
  return (
    <div className="">
        <Header/>
        <Sheet>
            <SheetTrigger>
                <div className="flex items-center md:hidden">
                    <ChevronRight className="text-textBody"/> 
                    <p className="text-textBody">Sumário</p>
                </div>
            </SheetTrigger>
            <SheetContent className="bg-backgroundColor">
                <SheetHeader>
                    <SheetTitle className="text-textBody">Sumário</SheetTitle>
                </SheetHeader>
                <div>
                    <div className="flex flex-col items-start gap-1 mb-1">
                        <p className="text-h1Color">1 - PillBox - Introdução</p>
                        <p className="text-textBody">Por que criamos a caixa de remédios inteligente?</p>
                    </div>
                    <div className="flex flex-col items-start gap-1 mb-1">
                        <p className="text-h1Color">2 - Passo a passo de uso da caixa</p>
                        <p className="text-textBody">Configuração inicial</p>
                        <p className="text-textBody">Programação de lembretes</p>
                        <p className="text-textBody">Uso diário</p>
                        <p className="text-textBody">Confirmação de uso</p>
                    </div>
                    <div className="flex flex-col items-start gap-1 mb-1">
                        <p className="text-h1Color">3- O Aplicativo</p>
                        <p className="text-textBody">Interface acessível</p>
                        <p className="text-textBody">Lembretes personalizáveis</p>
                        <p className="text-textBody">Notificações multimodais</p>
                        <p className="text-textBody">Histórico de medicação</p>
                    </div>
                    <div className="flex flex-col items-start gap-1 mb-1">
                        <p className="text-h1Color">4 - Como a caixa foi criada</p>
                        <p className="text-textBody">Pesquisa e desenvolvimento</p>
                        <p className="text-textBody">Prototipagem</p>
                        <p className="text-textBody">Componentes utilizados</p>
                        <p className="text-textBody">Testes com usuários</p>
                        <p className="text-textBody">Refinamento e produção final</p>
                    </div>
                </div>
            </SheetContent>
        </Sheet>

        <main className="md:flex">
            <div className="md:fixed md:max-w-64">
                <div className="flex flex-col items-start gap-1 mb-1">
                    <p className="text-h1Color">1 - PillBox - Introdução</p>
                    <p className="text-textBody">Por que criamos a caixa de remédios inteligente?</p>
                </div>
                <div className="flex flex-col items-start gap-1 mb-1">
                    <p className="text-h1Color">2 - Passo a passo de uso da caixa</p>
                    <p className="text-textBody">Configuração inicial</p>
                    <p className="text-textBody">Programação de lembretes</p>
                    <p className="text-textBody">Uso diário</p>
                    <p className="text-textBody">Confirmação de uso</p>
                </div>
                <div className="flex flex-col items-start gap-1 mb-1">
                    <p className="text-h1Color">3- O Aplicativo</p>
                    <p className="text-textBody">Interface acessível</p>
                    <p className="text-textBody">Lembretes personalizáveis</p>
                    <p className="text-textBody">Notificações multimodais</p>
                    <p className="text-textBody">Histórico de medicação</p>
                </div>
                <div className="flex flex-col items-start gap-1 mb-1">
                    <p className="text-h1Color">4 - Como a caixa foi criada</p>
                    <p className="text-textBody">Pesquisa e desenvolvimento</p>
                    <p className="text-textBody">Prototipagem</p>
                    <p className="text-textBody">Componentes utilizados</p>
                    <p className="text-textBody">Testes com usuários</p>
                    <p className="text-textBody">Refinamento e produção final</p>
                </div>
            </div>

            <div className="md:w-full md:overflow-auto md:ml-[300px]">
                <div className="flex flex-col items-center gap-4 mb-5">
                    <h1 className="text-3xl font-header text-h1Color">1 - PillBox - Introdução</h1>
                    <h2 className="text-2xl font-header text-h1Color">Por que criamos a caixa de remédios inteligente?</h2>
                    <p className="text-textBody">A gestão de medicamentos é crucial para a saúde e bem-estar, mas pode ser particularmente desafiadora para pessoas cegas ou com baixa visão. Estudos indicam que a má administração de medicamentos é uma preocupação significativa, com potencial para causar sérias complicações de saúde. A Caixa de Remédios Inteligente foi criada para atender a essa necessidade, oferecendo uma solução que combina acessibilidade, segurança e independência.
                    <br /> <br />
                    A PillBox foi desenvolvida após extensa pesquisa e feedback de usuários reais e especialistas em saúde. O objetivo é proporcionar uma ferramenta que elimina as incertezas e dificuldades na administração de medicamentos, garantindo que cada dose seja tomada corretamente e no momento certo.</p>
                    <div className="w-full bg-bgCard h-0.5"></div>
                </div>

                <div className="flex flex-col items-center gap-4 mb-5">
                    <h1 className="text-3xl font-header text-h1Color">2 - Passo a passo de uso da caixa</h1>
                    <h2 className="text-2xl font-header text-h1Color">Configuração inicial</h2>
                    <p className="text-textBody">Organize seus medicamentos nos compartimentos da caixa. Cada compartimento pode ser etiquetado com informações em braille.
                    Conecte a caixa ao aplicativo no seu smartphone via Bluetooth, seguindo as instruções de emparelhamento no app.</p>
                    <h2 className="text-2xl font-header text-h1Color">Programação de lembretes</h2>
                    <p className="text-textBody">Use o aplicativo para definir horários e frequência de medicação. Os dados serão enviados para a caixa automaticamente.</p>
                    <h2 className="text-2xl font-header text-h1Color">Uso diário</h2>
                    <p className="text-textBody">Nos horários definidos, a caixa emitirá alertas sonoros e táteis para lembrá-lo de tomar os medicamentos.
                    Abra o compartimento indicado e retire o medicamento. A caixa detectará a abertura e fechamento do compartimento.</p>
                    <h2 className="text-2xl font-header text-h1Color">Confirmação de uso</h2>
                    <p className="text-textBody">Após retirar o medicamento, confirme a ação no aplicativo ou simplesmente feche o compartimento para que o sensor de proximidade registre a retirada.</p>
                    <div className="w-full bg-bgCard h-0.5"></div>
                </div>

                <div className="flex flex-col items-center gap-4 mb-5">
                    <h1 className="text-3xl font-header text-h1Color">2 - Passo a passo de uso da caixa</h1>
                    <h2 className="text-2xl font-header text-h1Color">Configuração inicial</h2>
                    <p className="text-textBody">Organize seus medicamentos nos compartimentos da caixa. Cada compartimento pode ser etiquetado com informações em braille.
                    Conecte a caixa ao aplicativo no seu smartphone via Bluetooth, seguindo as instruções de emparelhamento no app.</p>
                    <h2 className="text-2xl font-header text-h1Color">Programação de lembretes</h2>
                    <p className="text-textBody">Use o aplicativo para definir horários e frequência de medicação. Os dados serão enviados para a caixa automaticamente.</p>
                    <h2 className="text-2xl font-header text-h1Color">Uso diário</h2>
                    <p className="text-textBody">Nos horários definidos, a caixa emitirá alertas sonoros e táteis para lembrá-lo de tomar os medicamentos.
                    Abra o compartimento indicado e retire o medicamento. A caixa detectará a abertura e fechamento do compartimento.</p>
                    <h2 className="text-2xl font-header text-h1Color">Confirmação de uso</h2>
                    <p className="text-textBody">Após retirar o medicamento, confirme a ação no aplicativo ou simplesmente feche o compartimento para que o sensor de proximidade registre a retirada.</p>
                    <div className="w-full bg-bgCard h-0.5"></div>
                </div>

                <div className="flex flex-col items-center gap-4 mb-5">
                    <h1 className="text-3xl font-header text-h1Color">2 - Passo a passo de uso da caixa</h1>
                    <h2 className="text-2xl font-header text-h1Color">Configuração inicial</h2>
                    <p className="text-textBody">Organize seus medicamentos nos compartimentos da caixa. Cada compartimento pode ser etiquetado com informações em braille.
                    Conecte a caixa ao aplicativo no seu smartphone via Bluetooth, seguindo as instruções de emparelhamento no app.</p>
                    <h2 className="text-2xl font-header text-h1Color">Programação de lembretes</h2>
                    <p className="text-textBody">Use o aplicativo para definir horários e frequência de medicação. Os dados serão enviados para a caixa automaticamente.</p>
                    <h2 className="text-2xl font-header text-h1Color">Uso diário</h2>
                    <p className="text-textBody">Nos horários definidos, a caixa emitirá alertas sonoros e táteis para lembrá-lo de tomar os medicamentos.
                    Abra o compartimento indicado e retire o medicamento. A caixa detectará a abertura e fechamento do compartimento.</p>
                    <h2 className="text-2xl font-header text-h1Color">Confirmação de uso</h2>
                    <p className="text-textBody">Após retirar o medicamento, confirme a ação no aplicativo ou simplesmente feche o compartimento para que o sensor de proximidade registre a retirada.</p>
                    <div className="w-full bg-bgCard h-0.5"></div>
                </div>


                <Footer/>
            </div>

        </main>

        
        
        
    </div>
  )
}
