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

export interface description {
  title: string;
  text: string[];
}

export interface PhoneSpec {
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

export interface Product {
  image: string;
  title: string;
  count: number;
  price: number;
}

export interface NextAndPrev {
  page: number;
  limit: number;
}


export interface serverResponse {
  data(data: unknown): unknown;
  totalPhones: number;
  next: NextAndPrev;
  pages: number;
  prev: NextAndPrev;
  result: Phone[];
  phoneSpec: PhoneSpec;
}