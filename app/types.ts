

export type Condition = 'under' | 'over';

export type History = {
    id:string,
    time:string,
    guess:Condition,
    resultNumber:number,
    threshold:number,
    isWin:boolean,
    reason:string 
}

export type AlertT ={
    id:string, 
    result:boolean, 
    reason:string 
}