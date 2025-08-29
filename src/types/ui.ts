/**
 * UI component type definitions
 */

/**
 * Button component props
 */
export interface ButtonProps {
  /** Button text content */
  children: React.ReactNode;
  /** Click handler function */
  onClick: () => void;
  /** Button variant/style */
  variant?: 'primary' | 'secondary' | 'danger' | 'ghost';
  /** Button size */
  size?: 'sm' | 'md' | 'lg';
  /** Whether button is disabled */
  disabled?: boolean;
  /** Additional CSS classes */
  className?: string;
  /** Button type */
  type?: 'button' | 'submit' | 'reset';
}

/**
 * Modal component props
 */
export interface ModalProps {
  /** Whether modal is open */
  isOpen: boolean;
  /** Function to close modal */
  onClose: () => void;
  /** Modal title */
  title?: string;
  /** Modal content */
  children: React.ReactNode;
  /** Whether to show close button */
  showCloseButton?: boolean;
  /** Modal size */
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

/**
 * Tooltip component props
 */
export interface TooltipProps {
  /** Tooltip content */
  content: string;
  /** Element to attach tooltip to */
  children: React.ReactNode;
  /** Tooltip position */
  position?: 'top' | 'bottom' | 'left' | 'right';
  /** Whether tooltip is visible */
  isVisible?: boolean;
  /** Delay before showing tooltip (ms) */
  delay?: number;
}

/**
 * Loading spinner props
 */
export interface SpinnerProps {
  /** Spinner size */
  size?: 'sm' | 'md' | 'lg';
  /** Spinner color */
  color?: string;
  /** Additional CSS classes */
  className?: string;
}

/**
 * Form input props
 */
export interface InputProps {
  /** Input value */
  value: string;
  /** Change handler */
  onChange: (value: string) => void;
  /** Input placeholder */
  placeholder?: string;
  /** Input label */
  label?: string;
  /** Input type */
  type?: 'text' | 'email' | 'password' | 'number';
  /** Whether input is required */
  required?: boolean;
  /** Error message */
  error?: string;
  /** Additional CSS classes */
  className?: string;
}

/**
 * Dropdown/Select props
 */
export interface SelectProps<T> {
  /** Available options */
  options: Array<{ value: T; label: string }>;
  /** Selected value */
  value: T;
  /** Change handler */
  onChange: (value: T) => void;
  /** Placeholder text */
  placeholder?: string;
  /** Whether dropdown is disabled */
  disabled?: boolean;
  /** Additional CSS classes */
  className?: string;
}
