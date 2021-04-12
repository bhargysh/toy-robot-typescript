import { NonEmptyArray } from 'fp-ts/lib/NonEmptyArray';
import { Either, left, right } from 'fp-ts/lib/Either'

export enum Command {
    Move = 'MOVE',
    Left = 'LEFT',
    Right = 'RIGHT',
    Report = 'REPORT',
    Place = 'PLACE'
}

export enum Direction {
    North = 'NORTH',
    South = 'SOUTH',
    East = 'EAST',
    West = 'WEST',
}

export const validateInput = (inputStr: string): Either<NonEmptyArray<string>, Command> =>
{
    if (inputStr === 'MOVE') return right(Command.Move)
    else if (inputStr === 'LEFT') return right(Command.Left)
    else if (inputStr === 'RIGHT') return right(Command.Right)
    else if (inputStr === 'REPORT') return right(Command.Report)
    else if (inputStr.includes('PLACE')) return right(Command.Place)
    else return left([`Invalid command: ${inputStr}`])
}

interface Place {
    x: number,
    y: number,
    direction: Direction,
}

const validatePlaceCommand = (rawCommand: string): void => {
    const placeRegex = new RegExp('PLACE (\d+),(\d+),(NORTH|SOUTH|EAST|WEST)$');
    rawCommand.match(placeRegex);
}
