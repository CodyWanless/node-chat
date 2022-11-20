const expect = require('expect');
const { generateMessage, generateLocationMessage } = require('./message');

describe('generateMessage', () => {
    it('should generate correct message object', () => {
        // Arrange
        const text = 'this is a message text';
        const from = 'From user';

        // Act
        const message = generateMessage(from, text);

        // Assert
        expect(message).toInclude({ text, from });
        expect(message.createdAt).toBeA('number');
    });
});

describe('generateLocationMessage', () => {
    it('should generate correct location object', () => {
        // Arrange
        const lat = 12;
        const long = 13;
        const from = 'From user';

        // Act
        const message = generateLocationMessage(from, lat, long);

        // Assert
        expect(message).toInclude({
            from,
            url: `https://www.google.com/maps?q=${lat},${long}`
        });
        expect(message.createdAt).toBeA('number');
    });
});
