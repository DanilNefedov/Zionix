'use client'


import { Box, Button, FormControlLabel, Paper, Radio, RadioGroup, Slider, Typography } from "@mui/material";
import { ChangeEvent, Dispatch, SetStateAction, useState } from "react";
import { AlertT, Condition, History } from "../../../types";
import { calculateGameResult } from "./functions";
import { button, containerMainNumbr, paper, radio, radioGroup, textRoll } from "../styles";



function valuetext(value: number) {
    return `${value}`;
}

const marks = [
    {
        value: 0,
        label: '0',
    },
    {
        value: 25,
    },
    {
        value: 40,
    },
    {
        value: 55,
    },
    {
        value: 70,
    },
    {
        value: 85,
    },
    {
        value: 100,
        label: '100',
    },
];


interface Props{
    setAlert:Dispatch<SetStateAction<AlertT | null>>,
    setHistory:Dispatch<SetStateAction<History[]>>
}


export function MainNumber(props:Props) {
    const {setHistory, setAlert} = props
    const [roll, setRoll] = useState<number>(100)
    const [threshold, setThreshold] = useState<number>(20)
    const [condition, setCondition] = useState<Condition>('under');


    function handlePlay(){
        const gameResult = calculateGameResult(threshold, condition);

        setRoll(gameResult.resultNumber);
        setHistory(prev => [gameResult, ...prev].slice(0, 10));
        setAlert({id:gameResult.id, reason:gameResult.reason, result:gameResult.isWin})
    }

    function handleChangeThreshold(event: Event, newValue: number){
        setThreshold(newValue)
    };

    function handleChangeCondition(event: ChangeEvent<HTMLInputElement>){
        setCondition(event.target.value as Condition);
    };

    return (
        <Box sx={containerMainNumbr}>
            <Box sx={{ mb: '16px'}}>
                <Paper
                    elevation={2}
                    sx={paper}
                >
                    <Typography
                        variant="body1"
                        sx={textRoll}
                    >
                        {roll}
                    </Typography>
                </Paper>
            </Box>



            <RadioGroup
                defaultValue="Under"
                name="radio-buttons-group"
                onChange={handleChangeCondition}
                value={condition}
                row
                sx={radioGroup}
            >
                <FormControlLabel labelPlacement="start" value="under" control={<Radio sx={radio} />} label="Under" />
                <FormControlLabel labelPlacement="start" value="over" control={<Radio sx={radio} />} label="Over" />
            </RadioGroup>


            <Box sx={{mb:'16px'}}>
                <Slider
                    getAriaValueText={valuetext}
                    valueLabelDisplay="auto"
                    step={1}
                    value={threshold}
                    marks={marks}
                    min={0}
                    max={100}
                    onChange={handleChangeThreshold}
                />
            </Box>

            <Box>
                <Button onClick={handlePlay} variant="contained" sx={button}>Play</Button>
            </Box>

        </Box>
    )
}