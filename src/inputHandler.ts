export const inputHandler = (str: string) => {
    const placeRegex = new RegExp('PLACE (\d+),(\d+),(NORTH|SOUTH|EAST|WEST)$');
    if (str === "MOVE") return "MOVE"
    else if (str === "LEFT") return "LEFT"
    else if (str === "RIGHT") return "RIGHT"
    else if (str === "REPORT") return "REPORT"
    else if (str.match(placeRegex)) return "PLACE"
    else return "INVALID"
}
