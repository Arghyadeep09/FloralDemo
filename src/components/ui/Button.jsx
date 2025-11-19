const Button = (props) => {
  const {content,className }=props;

  const getContentSpecificStyles = () => {
    if (content === 'Buy Now') {
      return 'pl-[30px] md:pl-[49px] pr-[20px] md:pr-[50px] pt-[8px] md:pt-[14px] pb-[8px] md:pb-[16px]'; 
    } else if (content === 'Explore') {
      return 'px-[35px] md:px-[58px] py-[10px] md:py-[15px]'; 
    }
    return ''; 
  };
  return (
    <>
     <button className={` border-2 border-white rounded-xl text-white bg-transparent text-[13px] md:text-[28px] font-normal h-[50px] md:h-16 max-w-[120px] md:max-w-[217px] w-full font-['Inter'] flex items-center ${getContentSpecificStyles()} ${className || ''}`}> 
    {content}
    </button>
    </>
  )
}

export default Button;
