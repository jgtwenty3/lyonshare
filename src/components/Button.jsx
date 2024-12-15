import clsx from "clsx";

const Button = ({ id, title, rightIcon, leftIcon, containerClass, onClick }) => {
  return (
    <button
      id={id}
      className={clsx(
        "group relative z-10 cursor-pointer overflow-hidden border-2 text-xl border-darkNavy w-40 h-12 md:w-48 md:h-16 flex items-center justify-center text-darkNavy",
        containerClass
      )}
      onClick={onClick} // Add onClick prop here
    >
      {leftIcon}
      <span className="relative inline-flex overflow-hidden font-bebas text-md uppercase">
        <div className="translate-y-0 skew-y-0 transition duration-500 group-hover:translate-y-[-160%] group-hover:skew-y-12">
          {title}
        </div>
        <div className="absolute translate-y-[164%] skew-y-12 transition duration-500 group-hover:translate-y-0 group-hover:skew-y-0">
          {title}
        </div>
      </span>
      {rightIcon}
    </button>
  );
};

export default Button;
