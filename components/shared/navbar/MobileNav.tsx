'use client'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger
} from '@/components/ui/sheet'
import { useTheme } from '@/context/ThemeProvider'
import Image from 'next/image'
import { IoMdMenu } from 'react-icons/io'

import { Button } from '@/components/ui/button'
import { sidebarLinks } from '@/constants'
import { SignedOut } from '@clerk/nextjs'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import CustomIcon from '../CustomIcon'

const NavContent = () => {
  const pathname = usePathname()
  return (
    <div className="flex flex-1 flex-col gap-6">
      {sidebarLinks.map((item) => {
        const isActive =
          (pathname.includes(item.route) && item.route.length > 1) ||
          item.route === pathname
        return (
          <Link
            href={item.route}
            key={item.route}
            className="flex items-center gap-4 dark:text-light-800 font-bold p-3 rounded-md hover:bg-slate-300 transition-all duration-200 dark:hover:bg-primary-500"
          >
            <CustomIcon
              icon={item.icon}
              className="text-dark-300 dark:text-light-800 pr-3 h-9 w-9"
            />
            <p
              className={`${
                isActive ? 'base-bold' : 'base-medium'
              } hidden md:block dark:text-light-800`}
            >
              {item.label}
            </p>
          </Link>
        )
      })}
    </div>
  )
}

const MobileNav = () => {
  const { mode } = useTheme()
  return (
    <Sheet>
      <SheetTrigger asChild>
        <IoMdMenu
          // color={`${mode === 'dark' ? '#ff7700' : '#222'}`}
          size={23}
          className="sm:hidden text-black/80 dark:text-orange-500"
        />
      </SheetTrigger>
      <SheetContent
        side="left"
        className={`${
          mode === 'dark' ? 'bg-dark-200 border-none' : 'bg-light-900'
        }`}
      >
        <Link href="/" className="flex items-center gap-1">
          <Image
            src="/assets/images/site_logo.jpg"
            width={48}
            height={48}
            className="rounded-full"
            alt="CodeQuery"
          />
          <p className="h2-bold font-spaceGrotesk">
            <span
              className={`${
                mode === 'dark' ? 'text-green-300' : 'text-gray-900'
              }`}
            >
              Code
            </span>
            <span className="text-primary-500">Query</span>
          </p>
        </Link>
        <div>
          <SheetClose asChild>
            <NavContent />
          </SheetClose>
          <SignedOut>
            <div className="flex flex-col gap-3">
              <SheetClose asChild>
                <Link href="/sign-in">
                  <Button className="small-medium btn-secondary min-h-[39px] w-full rounded-lg px-4 py-3 shadow-none">
                    <span className="primary-text-gradient font-bold">
                      Log In
                    </span>
                  </Button>
                </Link>
              </SheetClose>

              <SheetClose asChild>
                <Link href="/sign-up">
                  <Button className="small-medium light-border-2 btn-tertiary min-h-[39px] w-full rounded-lg px-4 py-3 shadow-none">
                    <span className="primary-text-gradient font-bold">
                      Sign Up
                    </span>
                  </Button>
                </Link>
              </SheetClose>
            </div>
          </SignedOut>
        </div>
      </SheetContent>
    </Sheet>
  )
}

export default MobileNav
