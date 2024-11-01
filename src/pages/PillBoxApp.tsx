import Footer from "@/components/Footer";
import Header from "@/components/Header";
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"

import AppleStore from '/footer/AppleStore.svg'
import PlayStore from '/footer/PlayStore.svg'

import { ChevronRight } from 'lucide-react';
export default function PillBoxApp() {
  return (
    <div>
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

    <main className="md:flex mt-20">
            <div className="md:fixed md:max-w-64 hidden md:block">
                <div className="flex flex-col items-start gap-1 mb-1">
                    <p className="text-h1Color">1 - PillBoxApp - Introdução</p>
                    <p className="text-textBody">Por que criamos o aplicativo?</p>
                </div>
                <div className="flex flex-col items-start gap-1 mb-1">
                    <p className="text-h1Color">2 - Passo a passo de uso do App</p>
                    <p className="text-textBody">Download e Instalação</p>
                    <p className="text-textBody">Configuração Inicial</p>
                    <p className="text-textBody">Cadastro de medicamentos</p>
                    <p className="text-textBody">Configuração de lembretes</p>
                </div>
                <div className="flex flex-col items-start gap-1 mb-1">
                    <p className="text-h1Color">3- Utilizando a caixa com o App</p>
                    <p className="text-textBody">Sincronização automática</p>
                    <p className="text-textBody">Alertas multimodais</p>
                    <p className="text-textBody">Feedback em tempo real</p>
                    <p className="text-textBody">Assistência por voz</p>
                </div>
                <div className="flex flex-col items-start gap-1 mb-1">
                    <p className="text-h1Color">4 - Como o App foi criado</p>
                    <p className="text-textBody">Tecnologias utilizadas</p>
                    <p className="text-textBody">Banco de Dados</p>
                    <p className="text-textBody">Conexões e sincronização</p>
                </div>
            </div>

            <div className="md:w-full md:overflow-auto md:ml-[300px]">
                <div className="flex flex-col gap-4 mb-5">
                    <h1 className="text-3xl font-header text-h1Color">1 - PillBoxApp - Introdução</h1>
                    <h2 className="text-2xl font-header text-h1Color">Por que criamos o aplicativo?</h2>
                    <p className="text-textBody">A administração correta dos medicamentos é vital para a saúde, mas para pessoas cegas ou com baixa visão, pode ser uma tarefa desafiadora. PillBoxApp foi criado para transformar essa realidade proporcionando uma ferramenta que não só auxilia na gestão dos medicamentos, mas também integra perfeitamente com a Caixa de Remédios Inteligente. O objetivo é oferecer mais autonomia, segurança e eficiência no cuidado diário com a saúde.
                    <br /> <br />
                    O aplicativo foi desenvolvido para atender às necessidades específicas de acessibilidade, garantindo que cada dose de medicamento seja tomada corretamente e no momento certo.</p>
                    <div className="w-full bg-bgCard h-0.5"></div>
                </div>

                <div className="flex flex-col gap-4 mb-5">
                    <h1 className="text-3xl font-header text-h1Color">2 - Passo a passo de uso do App</h1>
                    <h2 className="text-2xl font-header text-h1Color">Download e instalação:</h2>
                    <p className="text-textBody"> - Baixe o aplicativo na App Store ou Google Play. <br /> 
                    - Instale o aplicativo no seu smartphone e abra-o para iniciar a configuração.</p>
                    <div className="flex gap-4">
                        <img src={AppleStore} alt="" />
                        <img src={PlayStore} alt="" />
                    </div>
                    <h2 className="text-2xl font-header text-h1Color">Configuração inicial</h2>
                    <p className="text-textBody">-Siga as instruções na tela para configurar seu perfil e preferências de uso. <br />
                    - Conecte o aplicativo à Caixa de Remédios Inteligente via Bluetooth, seguindo as instruções de emparelhamento.</p>
                    <h2 className="text-2xl font-header text-h1Color">Cadastro de medicamentos</h2>
                    <p className="text-textBody">- Utilize o leitor de código de barras do aplicativo para adicionar seus medicamentos à lista. <br />
                    - Insira manualmente os horários e doses recomendadas ou importe essas informações de uma prescrição digital.</p>
                    <h2 className="text-2xl font-header text-h1Color">Configuração de lembretes</h2>
                    <p className="text-textBody">Defina os horários e frequência de medicação no aplicativo. <br />
                    Personalize os tipos de notificações que você deseja receber (sonoras, vibrações, etc.).</p>
                    <div className="w-full bg-bgCard h-0.5"></div>
                </div>

                <div className="flex flex-col  gap-4 mb-5">
                    <h1 className="text-3xl font-header text-h1Color">3 - Utilizando a caixa com o App</h1>
                    <p className="text-textBody">O PillBoxApp funciona em perfeita sincronia com a Caixa de Remédios Inteligente, proporcionando uma experiência integrada e segura:</p>
                    <h2 className="text-2xl font-header text-h1Color">Sincronização automática</h2>
                    <p className="text-textBody">O aplicativo sincroniza automaticamente com a caixa, garantindo que os lembretes e registros de uso sejam precisos e atualizados.</p>
                    <h2 className="text-2xl font-header text-h1Color">Alertas multimodais</h2>
                    <p className="text-textBody">Receba alertas no seu smartphone e na caixa, garantindo que você nunca perca uma dose da medicação.</p>
                    <h2 className="text-2xl font-header text-h1Color">Feedback em tempo real</h2>
                    <p className="text-textBody">Quando você abre um compartimento na caixa, o aplicativo registra automaticamente a retirada do medicamento, atualizando seu histórico.</p>
                    <h2 className="text-2xl font-header text-h1Color">Assistência por voz</h2>
                    <p className="text-textBody">Utilize comandos de voz para configurar lembretes e verificar informações sobre seus medicamentos.</p>
                    <div className="w-full bg-bgCard h-0.5"></div>
                </div>

                <div className="flex flex-col gap-4 mb-5">
                    <h1 className="text-3xl font-header text-h1Color">4 - Como o App foi criado</h1>
                    <p className="text-textBody">O aplicativo foi desenvolvido utilizando tecnologias avançadas para garantir robustez, segurança e acessibilidade:</p>
                    <h2 className="text-2xl font-header text-h1Color">Tecnologias utilizadas</h2>
                    <p className="text-textBody">Linguagens de Programação: Swift (iOS) e Kotlin (Android) para garantir desempenho nativo e otimizado.
                    Frameworks: Utilização de frameworks, como Flutter, para criar uma interface de usuário acessível e intuitiva.</p>
                    <h2 className="text-2xl font-header text-h1Color">Banco de Dados</h2>
                    <p className="text-textBody">Firebase: Para armazenamento seguro e em tempo real das informações dos usuários e histórico de medicação.
                    SQLite: Banco de dados local no dispositivo para garantir acesso rápido às informações críticas.</p>
                    <h2 className="text-2xl font-header text-h1Color">Conexões e sincronização</h2>
                    <p className="text-textBody">Bluetooth Low Energy (BLE): Conexão eficiente e de baixa energia entre o aplicativo e a Caixa de Remédios Inteligente.
                    APIs RESTful: Comunicação segura e eficiente com servidores remotos, permitindo atualizações de software e sincronização de dados.</p>
                    <div className="w-full bg-bgCard h-0.5"></div>
                </div>


                <Footer/>
            </div>

        </main>
</div>
  )
}
