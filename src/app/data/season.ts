import { Paging } from "./paging"

export interface ISeasons {
    get: string
    parameters: any[]
    errors: any[]
    results: number
    paging: Paging
    response: number[]
  }
  
