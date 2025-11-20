const CartButton = ({
  variant = "hero",
  className = "",
  src = "/images/bag.png",
  alt = "bag icon",
  ...props
})=> {
  const sizes = {
    card: {
      container: "w-[33px] h-[32px] sm:w-[38px] sm:h-[38px] lg:w-[55px] lg:h-[55px]",
      img: "w-[16px] h-[16px] sm:w-[21px] sm:h-[21px] lg:w-[27px] lg:h-[27px]",
    },
    hero: {
      container: "w-[43px] h-[43px] sm:w-[52px] sm:h-[52px] lg:w-[64px] lg:h-[64px]",
      img: "w-[20px] h-[20px] sm:w-[28px] sm:h-[28px] lg:w-[34px] lg:h-[34px]",
    },
  };

  const current = sizes[variant] || sizes.card;

  return (
    <div
      className={`border-2 border-white rounded-xl flex items-center justify-center shrink-0 ${current.container} ${className}`}
      {...props}
    >
      <img src={src} alt={alt} className={`${current.img}`} />
    </div>
  );
}
export default CartButton;