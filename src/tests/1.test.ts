import {addBooks, moveUser, updateBooks, upgradeLaptop, UserBooks, UserType, UserWithLaptop} from "./1";

test('change address', () => {
    let user: UserWithLaptop & UserBooks = {
        name: 'Ivan',
        hair: 30,
        address: {
            city: 'Minsk',
            zip: 2210
        },
        laptop: {
            title: 'Zenbook'
        },
        books: ['js','ts']
    }
    const movedUser = moveUser(user, 'Kiev');
    expect(user).toBe(movedUser)
    expect(user.address).not.toBe(movedUser.address)
    expect(user.laptop).toBe(movedUser.laptop)
    expect(movedUser.address.city).toBe('Kiev')
})

test('change laptop', () => {
    let user: UserWithLaptop = {
        name: 'Ivan',
        hair: 30,
        address: {
            city: 'Minsk',
            zip: 2210
        },
        laptop: {
            title: 'Zenbook'
        }
    }
    const movedUser = upgradeLaptop(user, 'Mac');
    expect(user).not.toBe(movedUser)
    expect(user.address).toBe(movedUser.address)
    expect(user.laptop).not.toBe(movedUser.laptop)
    expect(movedUser.laptop.title).toBe('Mac')
})
test('add books', () => {
    let user: UserWithLaptop & UserBooks = {
        name: 'Ivan',
        hair: 30,
        address: {
            city: 'Minsk',
            zip: 2210
        },
        laptop: {
            title: 'Zenbook'
        },
        books: ['js','ts']
    }
    const booked = addBooks(user, ['css','html']);
    expect(user).not.toBe(booked)
    expect(user.address).toBe(booked.address)
    expect(user.laptop).toBe(booked.laptop)
    expect(booked.books[2]).toBe('css')
    expect(booked.books[3]).toBe('html')
})
test('update books', () => {
    let user: UserWithLaptop & UserBooks = {
        name: 'Ivan',
        hair: 30,
        address: {
            city: 'Minsk',
            zip: 2210
        },
        laptop: {
            title: 'Zenbook'
        },
        books: ['js','ts']
    }
    const booked = updateBooks(user, 'ts', 'tsx');
    expect(booked.books[1]).toBe('tsx')

})