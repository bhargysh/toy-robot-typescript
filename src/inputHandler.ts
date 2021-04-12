export const inputHandler = (inputStr: string): string =>
{
    const placeRegex = new RegExp('PLACE (\d+),(\d+),(NORTH|SOUTH|EAST|WEST)$');
    if (inputStr === "MOVE") return "MOVE"
    else if (inputStr === "LEFT") return "LEFT"
    else if (inputStr === "RIGHT") return "RIGHT"
    else if (inputStr === "REPORT") return "REPORT"
    else if (inputStr.match(placeRegex)) return "PLACE"
    else return "INVALID"
}
