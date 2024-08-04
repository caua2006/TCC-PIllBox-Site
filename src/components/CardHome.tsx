import WatchIcon from '/cardHome/watch.svg'
import ConfigIcon from '/cardHome/config.svg'
import PillIcon from '/cardHome/pill.svg'
import EyeIcon from '/cardHome/eye.svg'



export default function CardHome() {
  return (
    <>
      <div className="size-52 bg-bgCard rounded-3xl flex flex-col items-center justify-center p-5 gap-3">
          <img src={WatchIcon} alt="" />
          <p className="text-sm text-white antialiased">Cronometre os horarios do seu remédio de maneira eficiente</p>
        </div>
        <div className="size-52 bg-bgCard rounded-3xl flex flex-col items-center justify-center p-5 gap-3">
          <img src={ConfigIcon} alt="" />
          <p className="text-sm text-white antialiased">Configure de acordo com sua preferência</p>
        </div>
        <div className="size-52 bg-bgCard rounded-3xl flex flex-col items-center justify-center p-5 gap-3">
          <img src={PillIcon} alt="" />
          <p className="text-sm text-white antialiased">Controle totalmente os remédio que você toma</p>
        </div>
        <div className="size-52 bg-bgCard rounded-3xl flex flex-col items-center justify-center p-5 gap-3">
          <img src={EyeIcon} alt="" />
          <p className="text-sm text-white antialiased">Facilite a medicação para o deficiente visual</p>
        </div>
    </>
  )
}
