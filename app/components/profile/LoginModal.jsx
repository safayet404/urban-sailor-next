const LoginModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;
  
    return (
      <div className="fixed inset-0 bg-black mt-[-350px] bg-opacity-50 flex justify-center items-center z-50">
        <div className="bg-white p-7 rounded-lg w-full max-w-md">
          <div className="flex justify-between">
            <div>
              <h2 className="text-base text-[#1A1919]">Are you an existing user?</h2>
              <p className="text-[#1A1919] mb-4">Please log in first</p>
            </div>
            <div>
              <p className="text-[#1A1919] font-semibold">Registration</p>
            </div>
          </div>
          <form>
            <input
              type="text"
              placeholder="Please enter email or number"
              className="w-full p-2 bg-[#F0F0F0] border border-[#1A1919] rounded-lg mb-4"
            />
            <button
              type="submit"
              className="w-full bg-black text-white py-2 rounded-lg transition"
            >
              Continue
            </button>
          </form>
          <p className="text-sm text-gray-500 mt-4">
            By continuing, I agree to their{" "}
            <a href="#" className="text-gray-500 underline">
              privacy and policy
            </a>
          </p>
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
          >
            ✕
          </button>
        </div>
      </div>
    );
  };
  
  export default LoginModal;