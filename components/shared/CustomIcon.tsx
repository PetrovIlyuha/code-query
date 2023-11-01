import React from 'react'
import { IconContext, IconType } from 'react-icons'

interface CustomIconProps {
  icon: IconType
  className?: string
  // Other icon-related props
}

const CustomIcon: React.FC<CustomIconProps> = ({
  icon,
  className,
  ...rest
}) => {
  const IconComponent = icon // Use the icon reference
  return (
    <IconContext.Provider value={{ className }}>
      <IconComponent {...rest} />
    </IconContext.Provider>
  )
}

export default CustomIcon
