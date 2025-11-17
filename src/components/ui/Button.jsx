

const Button = (props) => {
  const {content,className }=props;
  return (
    <>
     <button className={` border-2 border-white rounded-xl text-white py-[15px] px-[58px] bg-transparent text-[28px] font-normal h-16 max-w-[217px] font-['Inter'] items-center ${className || ''} ` }> 
    {content}
    </button>
    </>
  )
}

export default Button;
