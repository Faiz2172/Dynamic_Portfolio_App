const ProgressBar = ({ currentStep, steps }) => {
    return (
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-2xl font-bold">Create Your Portfolio</h1>
          <span className="text-sm text-gray-500">
            Step {currentStep + 1} of {steps.length}
          </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-blue-600 h-2 rounded-full transition-all duration-300"
            style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
          ></div>
        </div>
        <div className="flex justify-between mt-2">
          {steps.map((step, index) => (
            <span
              key={index}
              className={`text-xs ${
                index <= currentStep ? 'text-blue-600 font-medium' : 'text-gray-400'
              }`}
            >
              {step}
            </span>
          ))}
        </div>
      </div>
    );
  };
  
  export default ProgressBar;