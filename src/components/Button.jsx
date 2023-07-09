import React from 'react'

const Button = ({title, bgColor, textColor, hoverColor, hoverTextColor,hoverText,onClickHandler}) => {
  return (
    <div className={`w-[55px] h-[22px] sm:w-[108px] sm:h-[40px] flex justify-center items-center p-4 rounded-md  ${textColor} ${bgColor === null ? "" : bgColor} tracking-wide ${hoverColor} ${hoverText === null ? "": hoverText} ${hoverTextColor === null ? "" : hoverTextColor} cursor-pointer`}>
        { title }
    </div>
  )
}

export default Button