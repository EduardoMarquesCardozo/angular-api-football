export interface Paging {
    current: number
    total: number
}

export interface IPaginationList<T> {
    get: string
    parameters: any[]
    errors: any[]
    results: number
    paging: Paging
    response: T[]
}

export interface IPaginationStatistics<T> {
    get: string
    parameters: any[]
    errors: any[]
    results: number
    paging: Paging
    response: T
}