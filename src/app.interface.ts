export interface IAddress {
  country: string;
  city: string;
  street: string;
  house: string;
}

export interface IShippingFields {
  email: string;
  name: string;
  confirmName: string;
  address: IAddress;
}

export interface IOption {
  value: string;
  label: string;
}
