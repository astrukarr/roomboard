export type CatalogItem = {
  id: string;
  title: string;
  color: string;
  widthCm: number;
  depthCm: number;
  price: number;
};

export const catalog: CatalogItem[] = [
  {
    id: 'sofa-01',
    title: 'Sofa (3-seater)',
    color: '#D0C4B8',
    widthCm: 220,
    depthCm: 90,
    price: 799,
  },
  {
    id: 'table-01',
    title: 'Coffee Table',
    color: '#C8D1D6',
    widthCm: 110,
    depthCm: 60,
    price: 149,
  },
  { id: 'chair-01', title: 'Lounge Chair', color: '#E4E0DA', widthCm: 75, depthCm: 75, price: 129 },
];
