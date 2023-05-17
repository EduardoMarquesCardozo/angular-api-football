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