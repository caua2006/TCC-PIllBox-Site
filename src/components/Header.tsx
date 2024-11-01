import logo from '/pillbox-logo.svg'
import { Menu } from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <div className='flex items-center justify-between py-4 px-8 fixed top-0 left-0 bg-backgroundColor w-full z-50'>
        <Link to={'/'}><img src={logo} alt="" /></Link>

        <div className='gap-52 hidden md:flex'>
        <Link to={'/products'} className='text-textBody'>Produtos</Link>
        <Link to={'/game'} className='text-textBody'>Game</Link>
        <Link to={'/about-us'} className='text-textBody'>Sobre nós</Link>
        </div>


        <DropdownMenu>
          <DropdownMenuTrigger><Menu className='size-8 md:hidden'/></DropdownMenuTrigger>
          <DropdownMenuContent className='bg-backgroundColor'>
            <DropdownMenuItem className='text-textBody'>
              <Link to={'/products'}>Produtos</Link>
            </DropdownMenuItem>
            <DropdownMenuItem className='text-textBody'>
              <Link to={'/Game'}>Game</Link>
            </DropdownMenuItem>
            <DropdownMenuItem className='text-textBody'>
              <Link to={'/about-us'}>Sobre nós</Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

    </div>
  )
}
