import React from 'react';
import { Check } from 'lucide-react';
import { motion } from 'motion/react';

interface Step {
  id: string;
  label: string;
  description?: string;
}

interface ProgressStepperProps {
  steps: Step[];
  currentStep: number;
}

export function ProgressStepper({ steps, currentStep }: ProgressStepperProps) {
  return (
    <div className="w-full">
      <div className="flex items-center justify-between">
        {steps.map((step, index) => {
          const stepNumber = index + 1;
          const isCompleted = stepNumber < currentStep;
          const isCurrent = stepNumber === currentStep;

          return (
            <div key={step.id} className="flex items-center flex-1">
              <div className="flex flex-col items-center flex-1">
                {/* Circle */}
                <motion.div
                  initial={false}
                  animate={{
                    scale: isCurrent ? 1.1 : 1,
                    backgroundColor: isCompleted || isCurrent 
                      ? 'var(--rose)' 
                      : 'var(--cream-dark)'
                  }}
                  className={`
                    relative
                    w-12 h-12 rounded-full
                    flex items-center justify-center
                    border-2
                    ${isCompleted || isCurrent 
                      ? 'border-[var(--rose)] shadow-[var(--shadow-pink)]' 
                      : 'border-[var(--border)]'
                    }
                    transition-all duration-300
                  `}
                >
                  {isCompleted ? (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Check size={20} className="text-white" />
                    </motion.div>
                  ) : (
                    <span 
                      className={`
                        ${isCurrent ? 'text-white' : 'text-[var(--charcoal-lighter)]'}
                      `}
                    >
                      {stepNumber}
                    </span>
                  )}
                </motion.div>

                {/* Label */}
                <div className="mt-3 text-center">
                  <p 
                    className={`
                      ${isCurrent ? 'text-[var(--rose)]' : 'text-[var(--charcoal)]'}
                      transition-colors duration-300
                    `}
                  >
                    {step.label}
                  </p>
                  {step.description && (
                    <p className="text-[var(--charcoal-lighter)] mt-1">{step.description}</p>
                  )}
                </div>
              </div>

              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="flex-1 h-0.5 bg-[var(--border)] mx-4 mb-12 relative">
                  <motion.div
                    initial={{ width: '0%' }}
                    animate={{ 
                      width: stepNumber < currentStep ? '100%' : '0%'
                    }}
                    transition={{ duration: 0.5 }}
                    className="absolute top-0 left-0 h-full bg-[var(--rose)]"
                  />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}