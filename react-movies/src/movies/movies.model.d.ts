export interface movieDTO { // data transfer object
    id: number
    title: string
    poster: string
}

export interface landingPageDTO {
    inTheaters?: movieDTO[]
    upcomingReleases?: movieDTO[]
}