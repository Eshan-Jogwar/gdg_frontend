export const Button = ({ text, onClick, className }) => {
    return (
      <button 
        className={className || "mt-4 px-6 py-3 bg-green-900 text-white rounded-lg text-xl"}
        onClick={onClick}
      >
        {text}
      </button>
    );
  };