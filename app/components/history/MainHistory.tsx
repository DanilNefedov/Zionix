import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { ResultRow } from "./ResultRow";
import { History } from "../../types";
import { table } from "./styles";


interface Props{
    history:History[],
}


export function MainHistory(props:Props) {
    const {history} = props
    


    return (
        <TableContainer component={Paper} sx={{ boxShadow: 'none' }}>
            <Table sx={table}>
                <TableHead>
                    <TableRow>
                        <TableCell>Time</TableCell>
                        <TableCell>Guess</TableCell>
                        <TableCell>Result</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        history.map(el => (
                            <ResultRow key={el.id} el={el}></ResultRow>
                        )) 
                    }
                </TableBody>
            </Table>
        </TableContainer>
    )
}