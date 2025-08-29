/**
 * Canvas-related type definitions
 */

/**
 * Canvas interaction event handlers
 */
export interface CanvasEventHandlers {
  /** Handle drag start event */
  onDragStart?: () => void;
  /** Handle drag event */
  onDrag?: (e: unknown) => void;
  /** Handle drag end event */
  onDragEnd?: (e: unknown) => void;
  /** Handle resize start event */
  onResizeStart?: () => void;
  /** Handle resize event */
  onResize?: (e: unknown) => void;
  /** Handle resize end event */
  onResizeEnd?: (e: unknown) => void;
  /** Handle rotate start event */
  onRotateStart?: () => void;
  /** Handle rotate event */
  onRotate?: (e: unknown) => void;
  /** Handle rotate end event */
  onRotateEnd?: (e: unknown) => void;
}

/**
 * Canvas configuration options
 */
export interface CanvasConfig {
  /** Whether to enable grid snapping */
  enableGridSnap?: boolean;
  /** Grid size in pixels */
  gridSize?: number;
  /** Whether to enable zoom functionality */
  enableZoom?: boolean;
  /** Minimum zoom level */
  minZoom?: number;
  /** Maximum zoom level */
  maxZoom?: number;
  /** Default zoom level */
  defaultZoom?: number;
  /** Whether to enable pan functionality */
  enablePan?: boolean;
  /** Whether to show grid lines */
  showGrid?: boolean;
}

/**
 * Canvas item selection state
 */
export interface CanvasSelection {
  /** Currently selected item ID */
  selectedId: string | null;
  /** Whether multiple items are selected */
  isMultiSelect: boolean;
  /** Array of selected item IDs */
  selectedIds: string[];
}

/**
 * Canvas viewport state
 */
export interface CanvasViewport {
  /** Current zoom level */
  zoom: number;
  /** X offset for panning */
  panX: number;
  /** Y offset for panning */
  panY: number;
  /** Canvas width */
  width: number;
  /** Canvas height */
  height: number;
}
