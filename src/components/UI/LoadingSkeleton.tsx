import React from 'react';

interface LoadingSkeletonProps {
  className?: string;
  variant?: 'text' | 'circular' | 'rectangular' | 'card';
  width?: string | number;
  height?: string | number;
  lines?: number;
}

const LoadingSkeleton: React.FC<LoadingSkeletonProps> = ({
  className = '',
  variant = 'rectangular',
  width = '100%',
  height = '1rem',
  lines = 1
}) => {
  const getSkeletonClass = () => {
    const baseClass = 'skeleton animate-shimmer bg-gray-200 dark:bg-gray-700';
    
    switch (variant) {
      case 'text':
        return `${baseClass} h-4 rounded`;
      case 'circular':
        return `${baseClass} rounded-full`;
      case 'rectangular':
        return `${baseClass} rounded-md`;
      case 'card':
        return `${baseClass} rounded-lg`;
      default:
        return `${baseClass} rounded-md`;
    }
  };

  const style = {
    width: typeof width === 'number' ? `${width}px` : width,
    height: typeof height === 'number' ? `${height}px` : height,
  };

  if (variant === 'text' && lines > 1) {
    return (
      <div className={`space-y-2 ${className}`}>
        {Array.from({ length: lines }).map((_, index) => (
          <div
            key={index}
            className={getSkeletonClass()}
            style={{
              ...style,
              width: index === lines - 1 ? '75%' : style.width,
            }}
          />
        ))}
      </div>
    );
  }

  return (
    <div
      className={`${getSkeletonClass()} ${className}`}
      style={style}
    />
  );
};

// Project Card Skeleton
export const ProjectCardSkeleton: React.FC = () => (
  <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 animate-fadeIn">
    <div className="flex items-start space-x-4 space-x-reverse mb-4">
      <LoadingSkeleton variant="circular" width={48} height={48} />
      <div className="flex-1 space-y-2">
        <LoadingSkeleton variant="text" height={20} width="60%" />
        <LoadingSkeleton variant="text" height={16} width="40%" />
      </div>
    </div>
    <LoadingSkeleton variant="text" lines={3} className="mb-4" />
    <div className="flex items-center justify-between">
      <div className="flex space-x-4 space-x-reverse">
        <LoadingSkeleton variant="rectangular" width={60} height={24} />
        <LoadingSkeleton variant="rectangular" width={60} height={24} />
        <LoadingSkeleton variant="rectangular" width={60} height={24} />
      </div>
      <LoadingSkeleton variant="rectangular" width={80} height={32} />
    </div>
  </div>
);

// File List Skeleton
export const FileListSkeleton: React.FC = () => (
  <div className="border border-gray-200 rounded-md bg-white divide-y divide-gray-200">
    {Array.from({ length: 5 }).map((_, index) => (
      <div key={index} className="px-4 py-3 flex items-center space-x-3 space-x-reverse">
        <LoadingSkeleton variant="rectangular" width={16} height={16} />
        <LoadingSkeleton variant="text" width="30%" height={16} />
        <div className="flex-1" />
        <LoadingSkeleton variant="text" width="20%" height={14} />
        <LoadingSkeleton variant="text" width="15%" height={14} />
      </div>
    ))}
  </div>
);

// Stats Skeleton
export const StatsSkeleton: React.FC = () => (
  <div className="grid grid-cols-2 gap-4">
    {Array.from({ length: 4 }).map((_, index) => (
      <div key={index} className="text-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
        <LoadingSkeleton variant="circular" width={24} height={24} className="mx-auto mb-2" />
        <LoadingSkeleton variant="text" width={40} height={24} className="mb-1" />
        <LoadingSkeleton variant="text" width={60} height={14} />
      </div>
    ))}
  </div>
);

// Header Skeleton
export const HeaderSkeleton: React.FC = () => (
  <div className="py-6">
    <div className="flex items-start justify-between">
      <div className="flex-1">
        <div className="flex items-center space-x-2 space-x-reverse mb-2">
          <LoadingSkeleton variant="text" width={150} height={24} />
          <LoadingSkeleton variant="text" width={20} height={24} />
          <LoadingSkeleton variant="text" width={200} height={24} />
        </div>
        <LoadingSkeleton variant="text" lines={2} className="mb-4 max-w-3xl" />
        <div className="flex items-center space-x-4 space-x-reverse">
          <LoadingSkeleton variant="rectangular" width={60} height={20} />
          <LoadingSkeleton variant="rectangular" width={60} height={20} />
          <LoadingSkeleton variant="rectangular" width={60} height={20} />
        </div>
      </div>
      <div className="flex items-center space-x-2 space-x-reverse">
        <LoadingSkeleton variant="rectangular" width={80} height={36} />
        <LoadingSkeleton variant="rectangular" width={80} height={36} />
        <LoadingSkeleton variant="rectangular" width={80} height={36} />
      </div>
    </div>
  </div>
);

export default LoadingSkeleton;
