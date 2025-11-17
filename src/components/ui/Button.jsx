

const Button = (props) => {
  const {content }=props;
  return (
    <>
     <button className=" border-2 border-white rounded-xl text-white py-[15px] px-[58px] bg-transparent text-[28px] font-normal h-16 w-[217px] font-['Inter'] items-center" > 
    {content}
    </button>
    </>
  )
}

export default Button;
