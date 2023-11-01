import { BsQuestionSquareFill } from 'react-icons/bs'
import {
  IoMdCodeWorking,
  IoMdHome,
  IoMdPeople,
  IoMdPerson,
  IoMdPricetags,
  IoMdStar
} from 'react-icons/io'

export const themes = [
  { value: 'light', label: 'Light', icon: '🔆' },
  { value: 'dark', label: 'Dark', icon: '🌗' },
  { value: 'system', label: 'System', icon: '💻' }
]

export const sidebarLinks = [
  { route: '/', label: 'Home', icon: IoMdHome },
  { route: '/community', label: 'Community', icon: IoMdPeople },
  { route: '/collections', label: 'Collections', icon: IoMdStar },
  { route: '/jobs', label: 'Find Jobs', icon: IoMdCodeWorking },
  { route: '/tags', label: 'Tags', icon: IoMdPricetags },
  { route: '/profile', label: 'Profile', icon: IoMdPerson },
  {
    route: '/ask-question',
    label: 'Ask a Question',
    icon: BsQuestionSquareFill
  }
]
