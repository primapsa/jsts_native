export type UserType = {
    name: string
    hair: number
    address: AdressType
}
export type AdressType = {
    city: string
    zip: number
}
export type LaptopType = {
    title: string
}
export type UserWithLaptop = UserType & {
    laptop: LaptopType
}



export function moveUser(u: UserWithLaptop, city: string):UserWithLaptop {
    return {...u, address: {...u.address, city: city }}

}