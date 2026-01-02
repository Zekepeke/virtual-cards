import React, { useState } from 'react';
import { Calendar, Clock } from 'lucide-react';

interface DateTimePickerProps {
  label?: string;
  value?: string;
  onChange?: (value: string) => void;
  showTime?: boolean;
}

export function DateTimePicker({ 
  label = "Select Date & Time", 
  value = '',
  onChange,
  showTime = true
}: DateTimePickerProps) {
  const [selectedDate, setSelectedDate] = useState(value);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setSelectedDate(newValue);
    onChange?.(newValue);
  };

  return (
    <div className="w-full">
      {label && (
        <label className="block mb-2 text-[var(--charcoal)]">
          {label}
        </label>
      )}
      <div className="relative">
        <input
          type={showTime ? "datetime-local" : "date"}
          value={selectedDate}
          onChange={handleChange}
          className="
            w-full px-5 py-3 pl-12
            bg-[var(--input-background)] 
            border border-[var(--input-border)]
            rounded-[var(--radius-lg)]
            text-[var(--charcoal)]
            focus:outline-none 
            focus:ring-2 
            focus:ring-[var(--rose)] 
            focus:ring-opacity-30
            focus:border-[var(--rose)]
            transition-all duration-300
            shadow-[var(--shadow-sm)]
          "
        />
        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--rose)]">
          {showTime ? <Calendar size={18} /> : <Clock size={18} />}
        </div>
      </div>
    </div>
  );
}
