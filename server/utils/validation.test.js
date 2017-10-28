const expect = require('expect');
const { isRealString } = require('./validation');

describe('isRealString', () => {
    it('should reject non-string values', () => {
        // Arrange
        const testValue = 5;

        // Act 
        const result = isRealString(testValue);

        // Assert
        expect(result).toBe(false);
    });

    it('should reject string with only spaces', () => {
        // Arrange
        const testValue = '             ';

        // Act 
        const result = isRealString(testValue);

        // Assert
        expect(result).toBe(false);
    });

    it('should allow string with non-space characters', () => {
        // Arrange
        const testValue = '   Test this value   ';

        // Act 
        const result = isRealString(testValue);

        // Assert
        expect(result).toBe(true);
    });
});