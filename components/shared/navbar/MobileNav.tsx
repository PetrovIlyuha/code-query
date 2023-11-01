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
import { SignedOut } from '@clerk/nextjs'
import Link from 'next/link'

const NavContent = () => {
  return <h1>NavContent</h1>
}

const MobileNav = () => {
  const { mode } = useTheme()
  return (
    <Sheet>
      <SheetTrigger asChild>
        <IoMdMenu
          color={`${mode === 'dark' ? '#ff7700' : '#222'}`}
          size={23}
          className="sm:hidden"
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
