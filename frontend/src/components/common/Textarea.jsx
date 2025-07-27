// components/common/Textarea.jsx
import React from 'react';

const Textarea = ({
  label,
  name,
  value,
  onChange,
  onBlur,
  placeholder,
  required = false,
  disabled = false,
  error,
  helperText,
  rows = 4,
  maxLength,
  minLength,
  className = '',
  autoResize = false,
  ...props
}) => {
  const textareaClasses = `
    w-full px-3 py-2 border rounded-lg transition-colors duration-200 resize-vertical
    focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
    ${error 
      ? 'border-red-300 bg-red-50 text-red-900 placeholder-red-400 focus:ring-red-500' 
      : 'border-gray-300 bg-white text-gray-900 placeholder-gray-400'
    }
    ${disabled ? 'bg-gray-100 cursor-not-allowed opacity-60' : ''}
    ${autoResize ? 'resize-none overflow-hidden' : ''}
    ${className}
  `.trim();

  const characterCount = value ? value.length : 0;
  const isOverLimit = maxLength && characterCount > maxLength;
  const isNearLimit = maxLength && characterCount > maxLength * 0.9;

  // Auto-resize functionality
  const handleInput = (e) => {
    if (autoResize) {
      e.target.style.height = 'auto';
      e.target.style.height = e.target.scrollHeight + 'px';
    }
    if (onChange) {
      onChange(e);
    }
  };

  return (
    <div className="space-y-1">
      {label && (
        <label className="block text-sm font-medium text-gray-700">
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      
      <textarea
        name={name}
        value={value}
        onChange={handleInput}
        onBlur={onBlur}
        placeholder={placeholder}
        required={required}
        disabled={disabled}
        rows={autoResize ? 1 : rows}
        maxLength={maxLength}
        minLength={minLength}
        className={textareaClasses}
        style={autoResize ? { minHeight: `${rows * 24}px` } : {}}
        {...props}
      />

      <div className="flex justify-between items-start">
        <div className="flex-1">
          {error && (
            <p className="text-sm text-red-600 flex items-start">
              <svg className="w-4 h-4 mr-1 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
              <span>{error}</span>
            </p>
          )}

          {helperText && !error && (
            <p className="text-sm text-gray-500">{helperText}</p>
          )}
        </div>

        {maxLength && (
          <div className="ml-3 flex-shrink-0">
            <p className={`text-xs font-medium ${
              isOverLimit
                ? 'text-red-500' 
                : isNearLimit
                ? 'text-yellow-500'
                : 'text-gray-400'
            }`}>
              {characterCount}
              {maxLength && `/${maxLength}`}
            </p>
            {maxLength && (
              <div className="w-16 bg-gray-200 rounded-full h-1 mt-1">
                <div
                  className={`h-1 rounded-full transition-all duration-200 ${
                    isOverLimit
                      ? 'bg-red-500'
                      : isNearLimit
                      ? 'bg-yellow-500'
                      : 'bg-blue-500'
                  }`}
                  style={{
                    width: `${Math.min((characterCount / maxLength) * 100, 100)}%`
                  }}
                />
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

// Export with additional utility functions
export const TextareaWithCounter = ({ maxLength = 500, ...props }) => {
  return (
    <Textarea
      maxLength={maxLength}
      {...props}
    />
  );
};

export const AutoResizeTextarea = (props) => {
  return (
    <Textarea
      autoResize={true}
      {...props}
    />
  );
};

export default Textarea;