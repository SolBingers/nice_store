export interface Phone {
  id: string;
  category: string;
  phoneId: string
  itemId: string;
  name: string;
  fullPrice: number;
  price: number;
  screen: string;
  capacity: string;
  color: string;
  ram: string;
  year: number;
  image: string;
}

export interface Person {
  photo: string;
  fullName: string;
  Tl: boolean;
  linkedInLink: string;
  gitHubLink: string;
  cvLink: string;
  responsibilities: string[];
}

export interface Product {
  image: string;
  title: string;
  onRemove: () => void;
  onDecrease: () => void;
  count: number;
  onIncrease: () => void;
  price: number;
}