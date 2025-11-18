const Button = (props) => {
  const {content,className }=props;

  const getContentSpecificStyles = () => {
    if (content === 'Buy Now') {
      return 'pl-[49px] pr-[50px] pt-[14px] pb-[16px]'; 
    } else if (content === 'Explore') {
      return 'px-[58px] py-[15px]'; 
    }
    return ''; 
  };
  return (
    <>
     <button className={` border-2 border-white rounded-xl text-white bg-transparent text-[28px] font-normal h-16 max-w-[217px] w-full font-['Inter'] flex items-center ${getContentSpecificStyles()} ${className || ''}`}> 
    {content}
    </button>
    </>
  )
}

export default Button;
