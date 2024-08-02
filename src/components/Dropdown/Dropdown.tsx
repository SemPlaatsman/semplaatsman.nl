import React, { useState, useRef, useEffect } from 'react';
import styles from './Dropdown.module.scss';

interface DropdownProps {
  className?: string;
  trigger: React.ReactNode;
  children: React.ReactNode;
}

const Dropdown: React.FC<DropdownProps> = ({ className, trigger, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [position, setPosition] = useState<'bottom' | 'top'>('bottom');
  const dropdownRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      updatePosition();
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const updatePosition = () => {
    if (dropdownRef.current && contentRef.current) {
      const rect = dropdownRef.current.getBoundingClientRect();
      const contentHeight = contentRef.current.offsetHeight;
      const spaceBelow = window.innerHeight - rect.bottom;
      const spaceAbove = rect.top;

      if (spaceBelow < contentHeight && spaceAbove > spaceBelow) {
        setPosition('top');
      } else {
        setPosition('bottom');
      }
    }
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.dropdown} ref={dropdownRef}>
      <div onClick={toggleDropdown}>{trigger}</div>
      {isOpen && (
        <div
          ref={contentRef}
          className={`${styles.dropdownContent} ${styles[position]} ${className || ''}`}
        >
          {children}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
