interface HospitalItem {
  _id: string,   //
  name: string,//
  address: string,//
  district: string,
  province: string,
  postalcode: string,
  tel: string,//
  picture: string,
  __v: number,
  id: string
}

export interface HospitalJson {
  success: boolean,
  count: number,
  pagination: Object,
  data: HospitalItem[]
}
export interface BookingItem {
  name: string,
  surname: string,
  id: string,
  hospital: string,
  bookDate: string
}
export interface Shop {
  _id: string,//
  name: string,//
  address: string,//
  tel: string,//
  openclose: string,
  __v: number,//
  reservations: ReservationItem[],//
  id: string  
}

export interface ReservationItem {
  _id: string,
  resDate: string,
  user: string,
  shop: string,
}