'use client'
import { Button } from '@/components/ui/button'
import { sidebarLinks } from '@/constants'
import { SignedOut } from '@clerk/nextjs'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { LiaUserCheckSolid } from 'react-icons/lia'
import { RiLoginCircleLine } from 'react-icons/ri'
import CustomIcon from '../CustomIcon'

const LeftSidebar = () => {
  const pathname = usePathname()
  return (
    <section className="bg-light-900 dark:bg-dark-200 light-border sticky top-0 left-0 flex h-screen flex-col justify-between overflow-y-auto border-r p-5 pt-36 shadow-light-300 dark:shadow-none max-sm:hidden lg:w-[266px] custom-scrollbar">
      <div className="flex flex-1 flex-col gap-6">
        {sidebarLinks.map((item) => {
          const isActive =
            (pathname.includes(item.route) && item.route.length > 1) ||
            item.route === pathname
          return (
            <Link
              href={item.route}
              key={item.route}
              className="flex items-center gap-4 sm:w-14 md:w-full dark:text-light-800 font-bold p-3 rounded-md hover:bg-slate-300 transition-all duration-200 dark:hover:bg-primary-500"
            >
              <CustomIcon
                icon={item.icon}
                className="text-dark-300 dark:text-light-800 md:pr-3 sm:pr-0 h-9 w-9"
              />
              <p
                className={`${
                  isActive ? 'base-bold' : 'base-medium'
                } sm:hidden md:block text-dark-200 dark:text-light-700`}
              >
                {item.label}
              </p>
            </Link>
          )
        })}
      </div>
      <SignedOut>
        <div className="flex flex-col gap-3">
          <Link href="/sign-in">
            <Button className="small-medium btn-secondary min-h-[39px] w-full rounded-lg px-4 py-3 shadow-none">
              <RiLoginCircleLine className="text-dark-300 dark:text-light-800 pr-3 sm:pr-0 h-9 w-9 md:hidden" />
              <span className="primary-text-gradient font-bold max-md:hidden">
                Log In
              </span>
            </Button>
          </Link>
          <Link href="/sign-up">
            <Button className="small-medium light-border-2 btn-tertiary min-h-[39px] w-full rounded-lg px-4 py-3 shadow-none">
              <LiaUserCheckSolid className="text-dark-300 dark:text-light-800 pr-3 sm:pr-0 h-9 w-9 md:hidden" />
              <span className="primary-text-gradient font-bold max-md:hidden">
                Sign Up
              </span>
            </Button>
          </Link>
        </div>
      </SignedOut>
    </section>
  )
}

export default LeftSidebar
