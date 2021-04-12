const {inputHandler} = require('../src/inputHandler');

describe('inputHandler', () => {
    it('should return an updating robot command', () => {
        let inputStr = "MOVE";
        let result = "MOVE";
        expect(inputHandler(inputStr)).toEqual(result);
    })
})
