export interface ProductItem {
  id: string;
  category: string;
  itemId: string;
  name: string;
  fullPrice: string;
  price: string;
  screen: string;
  capacity: string;
  color: string;
  ram: string;
  year: string;
  image: string;
}

export interface Person {
  photo: string;
  memePhoto: string;
  fullName: string;
  Tl: boolean;
  linkedInLink: string;
  gitHubLink: string;
  cvLink: string;
  responsibilities: string[];
} 

export interface description {
  title: string;
  text: string[];
}

export interface ProductItemSpec {
  id: string;
  namespaceId: string;
  name: string;
  capacityAvailable: string[];
  capacity: string;
  priceRegular: number;
  priceDiscount: number;
  colorsAvailable: string[];
  color: string;
  images: string[];
  description: description[];
  screen: string;
  resolution: string;
  processor: string;
  ram: string;
  camera: string;
  zoom: string;
  cell: string[];
}

export interface Product extends ProductItem {
  count: number
}

export interface NextAndPrev {
  page: number;
  limit: number;
}
