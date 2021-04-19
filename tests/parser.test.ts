import { left, right } from 'fp-ts/lib/Either';
import { Command, Direction, validateInput, validatePlaceCommand } from '../src/parser';

describe('validateInput', () => {
    it('should return a valid command', () => {
        expect(validateInput('MOVE')).toEqual(right(Command.Move));
        expect(validateInput('LEFT')).toEqual(right(Command.Left));
        expect(validateInput('RIGHT')).toEqual(right(Command.Right));
        expect(validateInput('REPORT')).toEqual(right(Command.Report));
        // expect(validateInput('PLACE')).toEqual(right(Command.Place));
    })
    it('should return a left with an invalid command', () => {
        expect(validateInput('29jtein')).toEqual(left(['Invalid command: 29jtein']));
        expect(validateInput('HAII')).toEqual(left(['Invalid command: HAII']));
    })
})

describe('validatePlaceCommand', () => {
    it('should return a place command', () => {
        expect(validatePlaceCommand("PLACE 2,3,NORTH")).toEqual(right({
            x: 2,
            y: 3,
            direction: Direction.North
        }))
    })
})
