import React from 'react';

interface RomanticInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export function RomanticInput({ 
  label, 
  error, 
  className = '',
  ...props 
}: RomanticInputProps) {
  return (
    <div className="w-full">
      {label && (
        <label className="block mb-2 text-[var(--charcoal)]">
          {label}
        </label>
      )}
      <input
        className={`
          w-full px-5 py-3 
          bg-[var(--input-background)] 
          border border-[var(--input-border)]
          rounded-[var(--radius-lg)]
          text-[var(--charcoal)]
          placeholder:text-[var(--charcoal-lighter)]
          focus:outline-none 
          focus:ring-2 
          focus:ring-[var(--rose)] 
          focus:ring-opacity-30
          focus:border-[var(--rose)]
          transition-all duration-300
          shadow-[var(--shadow-sm)]
          ${error ? 'border-[var(--destructive)] focus:ring-[var(--destructive)]' : ''}
          ${className}
        `}
        {...props}
      />
      {error && (
        <p className="mt-2 text-[var(--destructive)]">{error}</p>
      )}
    </div>
  );
}

interface RomanticTextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
}

export function RomanticTextarea({ 
  label, 
  error, 
  className = '',
  ...props 
}: RomanticTextareaProps) {
  return (
    <div className="w-full">
      {label && (
        <label className="block mb-2 text-[var(--charcoal)]">
          {label}
        </label>
      )}
      <textarea
        className={`
          w-full px-5 py-3 
          bg-[var(--input-background)] 
          border border-[var(--input-border)]
          rounded-[var(--radius-lg)]
          text-[var(--charcoal)]
          placeholder:text-[var(--charcoal-lighter)]
          focus:outline-none 
          focus:ring-2 
          focus:ring-[var(--rose)] 
          focus:ring-opacity-30
          focus:border-[var(--rose)]
          transition-all duration-300
          shadow-[var(--shadow-sm)]
          resize-none
          ${error ? 'border-[var(--destructive)] focus:ring-[var(--destructive)]' : ''}
          ${className}
        `}
        {...props}
      />
      {error && (
        <p className="mt-2 text-[var(--destructive)]">{error}</p>
      )}
    </div>
  );
}
