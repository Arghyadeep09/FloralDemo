

const Button = (props) => {
  const {content, icon, className=""}=props;
  return (
    <>
     <button className=" border-white/20 rounded-xl text-white pt-[15] pb-[15] bg-transparent" > 
      {icon && <span className="">{icon}</span>}
      {content && <span>{content}</span>}
    </button>
    </>
  )
}

export default Button;
