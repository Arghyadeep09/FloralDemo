import React from 'react'

const SectionTitle = (props) => {
  const {title,className}=props;
  return (
    <>
      <div className={`relative
        fancy-title-border
        drop-shadow-lg
        text-center text-white h-[67px] 
        text-[55px] font-semibold font-['Inter']
        ${className || ''} 
      `}>
        {title}
        </div>
    </>
  )
}

export default SectionTitle
