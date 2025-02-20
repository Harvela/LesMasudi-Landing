import type { ReactNode } from 'react';
import { useEffect } from 'react';

type PropTypes = {
  width?: string;
  height?: string;
  onClose?: () => void;
  isForm?: boolean;
  fillAll?: boolean;
  title?: string;
  description?: ReactNode;
  children: any;
};

const Dialog: React.FC<PropTypes> = ({ children, onClose, fillAll }) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden'; // Disable background scrolling
    return () => {
      document.body.style.overflow = 'auto'; // Restore background scrolling
    };
  }, []);

  return (
    <div className="fixed left-0 top-0 z-[99999] flex h-full w-full items-center justify-center bg-blue/60">
      <div
        className="absolute inset-0 z-[99998] h-full w-full"
        onClick={onClose}
      />
      <div
        className={`z-[99999] ${
          fillAll ? 'h-full w-full' : 'h-[95%] w-[90%] md:w-[50%]'
        } 
        overflow-y-auto rounded-lg bg-white p-2`}
        style={{
          scrollbarWidth: 'none', // Firefox
          msOverflowStyle: 'none', // IE & Edge
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default Dialog;
