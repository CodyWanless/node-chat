const { Users } = require('./users');
const expect = require('expect');

describe('Users', () => {

    var users;

    beforeEach(() => {
        users = new Users();
        users.users = [{
            id: '1',
            name: 'Mike',
            room: 'Test room'
        }, {
            id: '2',
            name: 'Jen',
            room: 'Test'
        }, {
            id: '3',
            name: 'Todd',
            room: 'Test room'
        }];
    });

    it('should add new user', () => {
        // Arrange
        var users = new Users();
        var user = {
            id: '123',
            name: 'Cody',
            room: 'test'
        };

        // Act
        var reUser = users.addUser(user.id, user.name, user.room);

        // Assert
        expect(users.users).toEqual([user]);
    });

    it('should return names for Test Room', () => {
        // Arrange
        // Act
        var userList = users.getUserList('Test room');

        // Assert
        expect(userList).toEqual(['Mike', 'Todd']);
    });

    it('should remove a user', () => {
        // Arrange
        // Act
        var removedUser = users.removeUser('1');

        //Assert
        expect(removedUser.name).toBe('Mike');
        expect(users.users.length).toBe(2);
    });

    it('should not remove user', () => {
        // Arrange
        // Act
        var removedUser = users.removeUser(12);

        // Assert
        expect(removedUser).toNotExist();
        expect(users.users.length).toBe(3);
    });

    it('should find user', () => {
        // Arrange
        // Act
        var user = users.getUser('2');

        // Assert
        expect(user).toEqual(users.users[1]);
    });

    it('should not find user', () => {
        // Arrange
        // Act
        var user = users.getUser('12');

        // Assert
        expect(user).toNotExist();
    });
});
