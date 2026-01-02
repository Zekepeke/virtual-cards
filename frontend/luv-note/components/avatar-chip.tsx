import React from 'react';
import { Heart } from 'lucide-react';

interface AvatarChipProps {
  name: string;
  imageUrl?: string;
  initials?: string;
  status?: 'online' | 'offline';
  size?: 'sm' | 'md' | 'lg';
  showHeart?: boolean;
}

export function AvatarChip({ 
  name, 
  imageUrl, 
  initials,
  status,
  size = 'md',
  showHeart = false
}: AvatarChipProps) {
  const sizeClasses = {
    sm: { container: 'h-8 w-8 text-xs', chip: 'px-3 py-1.5 gap-2' },
    md: { container: 'h-10 w-10', chip: 'px-4 py-2 gap-2' },
    lg: { container: 'h-12 w-12', chip: 'px-5 py-2.5 gap-3' }
  };

  const displayInitials = initials || name.slice(0, 2).toUpperCase();

  return (
    <div 
      className={`
        inline-flex items-center 
        ${sizeClasses[size].chip}
        bg-[var(--blush-pink-light)]
        rounded-[var(--radius-full)]
        border border-[var(--border)]
        shadow-[var(--shadow-sm)]
      `}
    >
      <div className="relative">
        <div 
          className={`
            ${sizeClasses[size].container}
            rounded-full
            bg-gradient-to-br from-[var(--rose)] to-[var(--rose-deep)]
            flex items-center justify-center
            text-white
            overflow-hidden
          `}
        >
          {imageUrl ? (
            <img src={imageUrl} alt={name} className="w-full h-full object-cover" />
          ) : (
            <span>{displayInitials}</span>
          )}
        </div>
        {status && (
          <div 
            className={`
              absolute bottom-0 right-0 
              w-3 h-3 rounded-full border-2 border-[var(--blush-pink-light)]
              ${status === 'online' ? 'bg-green-400' : 'bg-gray-300'}
            `}
          />
        )}
      </div>
      <span className="text-[var(--charcoal)]">{name}</span>
      {showHeart && (
        <Heart size={16} className="text-[var(--rose)]" fill="var(--rose)" />
      )}
    </div>
  );
}

interface AvatarPairProps {
  person1: { name: string; imageUrl?: string; initials?: string };
  person2: { name: string; imageUrl?: string; initials?: string };
}

export function AvatarPair({ person1, person2 }: AvatarPairProps) {
  return (
    <div className="flex items-center gap-4">
      <AvatarChip {...person1} showHeart={false} />
      <Heart size={20} className="text-[var(--rose)]" fill="var(--rose)" />
      <AvatarChip {...person2} showHeart={false} />
    </div>
  );
}
