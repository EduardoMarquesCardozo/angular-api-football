
export interface PlayerResponse {
    player: Player
}

export interface Player {
    id: number
    name: string
    firstname: string
    lastname: string
    age: number
    birth: Birth
    nationality: string
    height: string
    weight: string
    injured: boolean
    photo: string
}

export interface Birth {
    date: string
    place: string
    country: string
}
