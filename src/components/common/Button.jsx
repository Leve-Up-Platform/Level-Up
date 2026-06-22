
const Button = ({ children, onClick, variant = "primary", className = "" }) => {
  const baseStyle =
    "px-5 py-2.5 rounded-lg font-semibold text-sm transition-all duration-200 shadow-sm";

  const variants = {
    primary: "bg-accent text-white hover:bg-opacity-90 active:scale-95",
    secondary: "bg-card text-mainText border border-gray-700 hover:bg-gray-800",
  };

  return (
    <button
      onClick={onClick}
      className={`${baseStyle} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
