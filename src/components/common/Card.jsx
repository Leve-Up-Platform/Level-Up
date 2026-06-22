const Card = ({ children, className = "" }) => {
  return (
    <div
      className={`bg-card text-mainText p-6 rounded-2xl border border-gray-800 shadow-md hover:shadow-lg transition-shadow duration-200 ${className}`}
    >
      {children}
    </div>
  );
};

export default Card;
