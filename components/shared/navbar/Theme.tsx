'use client'

import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger
} from '@/components/ui/menubar'
import { themes } from '@/constants'
import { useTheme } from '@/context/ThemeProvider'

import { PiMoonStarsFill, PiSunFill } from 'react-icons/pi'

const Theme = () => {
  const { mode, changeTheme } = useTheme()
  return (
    <Menubar className="relative border-none bg-transparent shadow-none">
      <MenubarMenu>
        <MenubarTrigger
          className={`${
            mode === 'dark'
              ? 'focus:bg-dark-200 data-[state=open]:bg-dark-200'
              : 'focus:bg-light-900 data-[state=open]:bg-light-900'
          }`}
        >
          {mode === 'light' && (
            <PiSunFill size={32} className="text-yellow-600 bg-gray-100" />
          )}
          {mode === 'dark' && (
            <PiMoonStarsFill
              size={32}
              className="text-yellow-200 bg-dark-200"
            />
          )}
        </MenubarTrigger>
        <MenubarContent className="absolute right-[-3rem] mt-3 min-w-[120px] rounded border py-2 dark:border-dark-400 dark:bg-dark-300">
          {themes.map((theme) => (
            <MenubarItem
              onClick={() => {
                changeTheme()
                if (theme.value !== 'system') {
                  localStorage.theme = theme.value
                } else {
                  localStorage.removeItem('theme')
                }
              }}
              key={theme.value}
              className="flex items-center gap-4 px-2 py-2 dark:focus:bg-dark-400"
            >
              <span>{theme.icon}</span>
              <span
                className={`body-semibold text-light-500 ${
                  mode === theme.value
                    ? 'text-primary-500'
                    : 'text-dark-100_light900'
                }`}
              >
                {theme.label}
              </span>
            </MenubarItem>
          ))}
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  )
}

export default Theme
