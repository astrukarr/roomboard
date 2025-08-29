/**
 * Board-related type definitions
 */

/**
 * Represents a single item placed on the board
 */
export interface BoardItem {
  /** Unique identifier for the item */
  id: string;
  /** Reference to the catalog product */
  productId: string;
  /** X coordinate position on the board */
  x: number;
  /** Y coordinate position on the board */
  y: number;
  /** Width of the item in pixels */
  w: number;
  /** Height of the item in pixels */
  h: number;
  /** Rotation angle in degrees */
  rotation: number;
  /** Background color of the item */
  color: string;
  /** Display title of the item */
  title: string;
  /** Price in euros */
  price: number;
}

/**
 * Represents a board snapshot for persistence
 */
export interface BoardSnapshot {
  /** Unique identifier for the board */
  id: string;
  /** Human-readable name of the board */
  name: string;
  /** Last update timestamp */
  updatedAt: string;
  /** All items on the board */
  items: BoardItem[];
}

/**
 * Represents a board in the index list
 */
export interface BoardIndexItem {
  /** Unique identifier for the board */
  id: string;
  /** Human-readable name of the board */
  name: string;
  /** Last update timestamp */
  updatedAt: string;
}

/**
 * Catalog item data structure
 */
export interface CatalogItem {
  /** Unique identifier for the product */
  id: string;
  /** Display name of the product */
  title: string;
  /** Background color representation */
  color: string;
  /** Width in centimeters */
  widthCm: number;
  /** Depth in centimeters */
  depthCm: number;
  /** Price in euros */
  price: number;
}

/**
 * Parameters for adding an item from catalog to board
 */
export interface AddFromCatalogParams {
  /** Product identifier */
  id: string;
  /** Product title */
  title: string;
  /** Product color */
  color: string;
  /** Product width in centimeters */
  widthCm: number;
  /** Product depth in centimeters */
  depthCm: number;
  /** Product price in euros */
  price: number;
}

/**
 * Partial update parameters for board items
 */
export type BoardItemUpdate = Partial<Omit<BoardItem, 'id' | 'productId'>>;
