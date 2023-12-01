import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
  <>
  <header className='flex items-center justify-between'>
    <Link className= "text-red-400 font-semibold text-2xl" href="">Gids Cuisine</Link>
      <nav className='flex items-center gap-8 text-gray-600 font-semibold'>
        <Link href={''}>Home</Link>
        <Link href={''}>Menu</Link>
        <Link href={''}>About</Link>
        <Link href={''}>Contact</Link>
        <Link href={''} className='bg-red-400 text-white rounded-full px-8 py-2'>Login</Link>
      </nav>
  </header>
  </>
  )
}