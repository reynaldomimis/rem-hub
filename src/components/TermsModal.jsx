export default function TermsModal({ isOpen, onClose }) {
    if (!isOpen) return null;
  
    return (
      <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50 px-4 sm:px-6">
        <div className="bg-white text-black w-full max-w-2xl rounded-lg shadow-lg p-6 relative">
          <button
            onClick={onClose}
            className="absolute top-3 right-4 text-xl text-gray-700 hover:text-red-500"
          >
            ✕
          </button>
          <h2 className="text-2xl font-bold mb-4">Terms & Privacy Policy</h2>
          <div className="space-y-3 text-sm max-h-96 overflow-y-auto">
            <p>
              Welcome to REM.Hub. By accessing or using our platform, you agree to
              be bound by the following terms and conditions.
            </p>
            <p>
              Your data is safe with us. We do not share any user information with
              third parties without consent.
            </p>
            <p>
              Please ensure you use our services responsibly. Any misuse may lead
              to restriction of access.
            </p>
            <p>
              For more information, feel free to contact support or read our full
              legal documentation.
            </p>
          </div>
        </div>
      </div>
    );
  }
  