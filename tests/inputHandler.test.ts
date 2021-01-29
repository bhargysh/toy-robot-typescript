const expect = require('chai').expect;
import { inputHandler } from '../src/inputHandler'

describe('inputHandler', () => {
    context('when input string is MOVE', () => {
        it('should return an updating robot command', () => {
            let inputStr: string = "MOVE"
            let result: string = "MOVE"
            expect(inputHandler(inputStr)).to.equal(result);
        })
    })
})
