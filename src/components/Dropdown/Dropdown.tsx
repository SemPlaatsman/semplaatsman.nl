import React, { useState, useRef, useEffect } from 'react';

import styles from './Dropdown.module.scss';

interface DropdownProps {
  className?: string;
  trigger: React.ReactNode;
  children: React.ReactNode;
}

const Dropdown: React.FC<DropdownProps> = ({ className, trigger, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [position, setPosition] = useState<{
    vertical: 'bottom' | 'top';
    horizontal: 'left' | 'right';
  }>({ vertical: 'bottom', horizontal: 'left' });
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
      const contentRect = contentRef.current.getBoundingClientRect();

      // Vertical positioning
      const spaceBelow = window.innerHeight - rect.bottom;
      const spaceAbove = rect.top;
      const vertical =
        spaceBelow < contentRect.height && spaceAbove > spaceBelow ? 'top' : 'bottom';

      // Horizontal positioning
      const spaceRight = window.innerWidth - rect.left;
      const spaceLeft = rect.right;
      const horizontal =
        spaceRight < contentRect.width && spaceLeft > spaceRight ? 'right' : 'left';

      setPosition({ vertical, horizontal });
    }
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`${styles.dropdown} ${className || ''}`} ref={dropdownRef}>
      <div onClick={toggleDropdown}>{trigger}</div>
      {isOpen && (
        <div
          ref={contentRef}
          className={`${styles.dropdownContent} ${styles[position.vertical]} ${styles[position.horizontal]}`}
        >
          {children}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
