import {cell} from "../redux/gameSlice";
import {FirstLevel, SecondLevel, ThirdLevel} from "./Levels";

export const fillField = (iterationsNum?: number, level?: number): cell[] => {
    let filled: cell[] = []
    if (level){
        switch (level){
            case 1: return FirstLevel
            case 2: return SecondLevel
            case 3: return ThirdLevel
        }
    }else if(iterationsNum){
        let isCharacter = false
        let isLoot = false
        for (let i = 0; i < iterationsNum; i++){
            let random = Math.floor(Math.random() * 100)
            let status: cell['status'] = 'empty'
            if (random > 30 && random < 60 ){
                status = 'block'
            } else if (random < 30 && !isCharacter){
                isCharacter = true
                status = 'character'
            } else if (random > 80 && !isLoot){
                isLoot = true
                status = 'loot'
            }
            filled.push({position: i, status: status})
        }
        if (!isCharacter){
            fillField(iterationsNum)
        }
    }
    return filled
}