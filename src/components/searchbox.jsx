export const InputBox = ({type, placeholder, value, onChange, onKeyPress, className}) => {
    return (
      <div>
        <div className="p-8 rounded-2xl text-2xl px-2 py-2 text-white cursor-pointer bg-blue-900">
          <input 
            type={type} 
            placeholder={placeholder} 
            value={value}
            onChange={onChange}
            onKeyPress={onKeyPress}
            className="bg-blue-900 outline-none w-full"
          />
        </div>
      </div>
    );
  };