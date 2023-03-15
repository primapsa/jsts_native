import {moveUser, UserType, UserWithLaptop} from "./1";

test('change address', () => {
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
    const movedUser = moveUser(user, 'Kiev');
    expect(user).toBe(movedUser)
    expect(user.address).not.toBe(movedUser.address)
    expect(user.laptop).toBe(movedUser.laptop)
    expect(movedUser.address.city).toBe('Kiev')
})