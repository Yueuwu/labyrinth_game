import {cell} from "../redux/gameSlice";

export const fillField = (iterationsNum: number): cell[] => {
    let filled: cell[] = []
    let isCharacter = false
    let isLoot = false
    for (let i = 1; i < iterationsNum + 1; i++){
        let random = Math.floor(Math.random() * 4)
        let status: cell['status'] = 'empty'
        if (!random){
            status = 'block'
        } else if (random > 2 && !isCharacter){
            isCharacter = true
            status = 'character'
        } else if (random <= 2 && !isLoot){
            isLoot = true
            status = 'loot'
        }
        filled.push({position: i, status: status})
    }
    return filled
}