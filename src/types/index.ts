/**
 * Main types index file
 * Export all types from this central location
 */

// Board and catalog types
export type {
  BoardItem,
  BoardSnapshot,
  BoardIndexItem,
  CatalogItem,
  AddFromCatalogParams,
  BoardItemUpdate,
} from './board';

// Canvas interaction types
export type { CanvasEventHandlers, CanvasConfig, CanvasSelection, CanvasViewport } from './canvas';

// UI component types
export type {
  ButtonProps,
  ModalProps,
  TooltipProps,
  SpinnerProps,
  InputProps,
  SelectProps,
} from './ui';

// Re-export commonly used types for convenience
export type { BoardItem as Item } from './board';
export type { CatalogItem as Product } from './board';
