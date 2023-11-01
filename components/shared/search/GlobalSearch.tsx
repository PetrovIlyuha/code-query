import { Input } from '@/components/ui/input'
import { FiSearch } from 'react-icons/fi'
const GlobalSearch = () => {
  return (
    <div className="relative w-full max-w-[600px] max-lg:hidden">
      <div className="bg-light-700 dark:bg-dark-400 relative flex min-h-[56px] grow items-center pag-1 rounded-xl px-4">
        <FiSearch className="w-7 h-7 text-dark-400 dark:text-light-700 mr-2" />
        <Input
          type="text"
          placeholder="Search globally"
          value=""
          className="paragraph-regular bg-light-700 dark:bg-dark-400 no-focus placeholder text-dark-400 dark:text-light-700 border-none shadow-none outline-none focus:outline-none"
        />
      </div>
    </div>
  )
}

export default GlobalSearch
