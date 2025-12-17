import { TableCell, TableRow } from "@mui/material";
import { History } from "../../types";
import { tableCellPadding, tableRow } from "./styles";


interface Props{
    el:History,
}

export function ResultRow(props:Props) {
    const {el} = props


    return (
        <TableRow
            sx={tableRow}
        >
            <TableCell component="th" scope="row" sx={tableCellPadding}>
                {el.time}
            </TableCell>
            <TableCell component="th" scope="row" sx={[tableCellPadding, {textTransform:'capitalize'}]}>
                <span>{el.guess}</span> <span>{el.threshold}</span>
            </TableCell>
            <TableCell component="th" scope="row" sx={[tableCellPadding, {color:`${el.isWin ? 'success.main' : 'error.dark'}`}]}>
                {el.resultNumber}
            </TableCell>
        </TableRow>
        
    )
}