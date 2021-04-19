import { NonEmptyArray } from 'fp-ts/lib/NonEmptyArray';
import { Either, left, right, map } from 'fp-ts/lib/Either'
import { pipe } from 'fp-ts/lib/pipeable';

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

export type ValidatedCommand = Command | ValidatedPlace;

export const validateInput = (inputStr: string): Either<NonEmptyArray<string>, ValidatedCommand> =>
{
    if (inputStr === 'MOVE') return right(Command.Move)
    else if (inputStr === 'LEFT') return right(Command.Left)
    else if (inputStr === 'RIGHT') return right(Command.Right)
    else if (inputStr === 'REPORT') return right(Command.Report)
    else if (inputStr.includes('PLACE')) return validatePlaceCommand(inputStr)
    else return left([`Invalid command: ${inputStr}`])
}

export interface ValidatedPlace {
    x: number,
    y: number,
    direction: Direction,
}

// Place constructor
const toPlace = (x: number, y: number, direction: Direction): ValidatedPlace => ({
    x,
    y,
    direction
  })

const validateDirection = (directionStr: string): Either<NonEmptyArray<string>, Direction> => {
    if (directionStr in Direction) return right(directionStr as Direction)
    else return left([`Invalid direction: ${directionStr}`])
}

export const validatePlaceCommand = (inputStr: string): Either<NonEmptyArray<string>, ValidatedPlace> => {
    const temp = inputStr.split(",")
    const x = Number(temp[0].slice(-1))
    const y = Number(temp[1])
    const directionStr = temp[2]
    return(
        pipe(
            validateDirection(directionStr),
            map(d => toPlace(x, y, d))
        )
    )
}
