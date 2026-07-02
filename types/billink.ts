export interface BillinkImage {
  url: string;
  thumb: string;
}

export interface BillinkSpec {
  id: string;
  label: string;
  value: string;
}

export interface BillinkContact {
  name?: string;
  phone?: string;
  mobile?: string;
  email?: string;
}

export interface BillinkCar {
  id: string;
  make: string;
  model: string;
  variant?: string;
  year: number | null;
  mileage: number | null;
  price: number | null;
  registrationFee: number | null;
  fuel?: string;
  transmission?: string;
  bodyType?: string;
  color?: string;
  drive?: string;
  power?: string;
  firstRegistered?: string;
  status: string;
  finnCode?: string;
  images: BillinkImage[];
  description?: string;
  specs: BillinkSpec[];
  contact: BillinkContact;
}

export interface BillinkResult {
  cars: BillinkCar[];
  error: boolean;
}
