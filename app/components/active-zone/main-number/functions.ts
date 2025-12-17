import { v4 as uuidv4 } from 'uuid';
import { Condition, History } from '../../../types';


export function calculateGameResult (threshold: number, condition: Condition): History{
    const resultNumber = Math.floor(Math.random() * 100) + 1;
    const isWin = condition === 'under' ? resultNumber < threshold : resultNumber > threshold;

    let reason = '';
    
    if (!isWin) {
        if (resultNumber > threshold && condition === 'under') reason = 'Number was higher';
        if (resultNumber < threshold && condition === 'over') reason = 'Number was lower';
    }
    

    return {
        id: uuidv4(),
        time: new Date().toLocaleTimeString('en-GB'),
        threshold,
        guess: condition,
        resultNumber,
        isWin,
        reason
    };
};