import { Paging } from "./paging"

export interface ICountryList {
    get: string
    parameters: any[]
    errors: any[]
    results: number
    paging: Paging
    response: CountryList[]
  }

  
  export interface CountryList {
    name: string
    code?: string
    flag?: string
  }