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
    <div className='flex items-center justify-between py-4'>
        <Link to={'/'}><img src={logo} alt="" /></Link>

        <DropdownMenu>
          <DropdownMenuTrigger><Menu className='size-8'/></DropdownMenuTrigger>
          <DropdownMenuContent className='bg-backgroundColor'>
            <DropdownMenuItem className='text-textBody'>
              <Link to={'/'}>Home</Link>
            </DropdownMenuItem>
            <DropdownMenuItem className='text-textBody'>
              <Link to={'/products'}>Produtos</Link>
            </DropdownMenuItem>
            <DropdownMenuItem className='text-textBody'>
              <Link to={'/about-us'}>Sobre nós</Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

    </div>
  )
}
