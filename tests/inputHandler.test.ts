import { inputHandler } from '../src/inputHandler'

describe('inputHandler', () => {
    test('when input string is MOVE', () => {
        it('should return an updating robot command', () => {
            let inputStr = "MOVE";
            let result = "MOVE";
            expect(inputHandler(inputStr)).toEqual(result);
        })
    })
})
