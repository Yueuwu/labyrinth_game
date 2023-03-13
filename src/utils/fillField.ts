import {cell} from "../redux/gameSlice";

export const fillField = (iterationsNum: number): cell[] => {
    let filled: cell[] = []
    let isCharacter = false
    let isLoot = false
    for (let i = 0; i < iterationsNum; i++){
        let random = Math.floor(Math.random() * 100)
        let status: cell['status'] = 'empty'
        if (random < 30){
            status = 'block'
        } else if (random > 30 && random < 60 && !isCharacter){
            isCharacter = true
            status = 'character'
        } else if (random > 90 && !isLoot){
            isLoot = true
            status = 'loot'
        }
        filled.push({position: i, status: status})
    }
    return filled
}