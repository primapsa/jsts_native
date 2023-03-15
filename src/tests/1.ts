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
export type UserBooks = {
    books: string[]
}
export type UserWithBooks = UserWithLaptop & UserBooks
export type CompanyType = {
    companies: {id: number, title: string }[]
}
export function moveUser(u: UserWithLaptop, city: string): UserWithLaptop {
    return {...u, address: {...u.address, city: city}}

}

export function upgradeLaptop(u: UserWithLaptop, laptop: string): UserWithLaptop {
    return {...u, laptop: {...u.laptop, title: laptop}}

}

export function addBooks(u: UserWithLaptop & UserBooks, books: string[]): UserWithLaptop & UserBooks {
    return {...u, books: [...u.books, ...books]}

}

export function updateBooks(u: UserWithLaptop & UserBooks, replacement: string, repalce: string) {
    return {...u, books: u.books.map(e => e === replacement ? repalce : e)}

}

export function removeBook(u: UserWithLaptop & UserBooks, remove: string) {
    return {...u, books: u.books.filter(e => e !== remove)}

}
export function updateCompany(u: UserWithLaptop & CompanyType, id: number, replace: string): UserWithLaptop & CompanyType {
  return {...u, companies: u.companies.map(e => e.id === id ? {...e, title: replace}: e)}

}
