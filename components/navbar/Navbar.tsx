import Link from "next/link"
import { HomeIcon } from '@primer/octicons-react'

const navItems = [
  {
    path: '/about',
    text: 'About',
    icon: HomeIcon
  },
  {
    path: '/contact',
    text: 'Contact',
    icon: HomeIcon
  },
  {
    path: '/pricing',
    text: 'Pricing',
    icon: HomeIcon
  },
];

export const Navbar = () => {
  return (
    <nav className="flex bg-blue-800 bg-opacity-30 p-2 m-2 rounded">
      <Link href={'/'} className="flex items-center">
        <HomeIcon className="mr-2" />
        <span>Home</span>
      </Link>

      <div className="flex flex-1"></div>

      {navItems.map((item) => (
        <Link key={item.path} href={item.path} className="mr-2">
          {item.text}
        </Link>
      ))}
    </nav>
  )
}
