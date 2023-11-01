import { SignedIn, UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import GlobalSearch from '../search/GlobalSearch'
import MobileNav from './MobileNav'
import Theme from './Theme'

const Navbar = () => {
  return (
    <nav className="bg-light-800 dark:bg-dark-200 flex-between  fixed z-50 w-full gap-5 p-6 shadow-light-300 sm:px-12">
      <Link href="/" className="flex items-center gap-1">
        <Image
          src="/assets/images/site_logo.jpg"
          width={48}
          height={48}
          className="rounded-full"
          alt="CodeQuery"
        />
        <p className="h2-bold font-spaceGrotesk text-dark-100 dark:text-light-900 max-sm:hidden">
          <span className="text-slate-800 dark:text-green-300">Code</span>
          <span className="text-primary-500">Query</span>
        </p>
      </Link>
      <GlobalSearch />
      <div className="flex-between">
        <div className="flex-between gap-5">
          <Theme />
        </div>
        <SignedIn>
          <UserButton
            afterSignOutUrl="/"
            appearance={{
              elements: {
                avatarBox: 'h-10 w-10'
              },
              variables: {
                colorPrimary: '#ff7000'
              }
            }}
          />
        </SignedIn>
      </div>
      <MobileNav />
    </nav>
  )
}

export default Navbar
