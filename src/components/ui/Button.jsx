const Button = (props) => {
  const { content, className } = props;

  return (
    <>
      <button
        className={`inline-flex items-center justify-center 
    border-2 border-white rounded-xl bg-transparent text-white
    font-['Inter'] font-normal
    text-[15px] sm:text-[17px] md:text-[20px] lg:text-[28px]
    w-[100px] sm:w-[180px] md:w-[180px] lg:w-[217px]     
    py-[9px] px-0 sm:px-9 sm:py-3 md:py-3 lg:py-[15px] ${className || ""}`}
      >
        {content}
      </button>
    </>
  );
};

export default Button;