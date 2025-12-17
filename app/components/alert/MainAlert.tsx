'use client'


import { Alert, AlertTitle, Snackbar, Typography } from "@mui/material"
import { AlertT } from "../../types";
import { useEffect, useState } from "react";
import { alertS, snackbar } from "./styles";
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

interface Props {
    alert: AlertT | null
}


export function MainAlert({ alert }: Props) {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        if (alert) {
            setOpen(true);
            const timer = setTimeout(() => setOpen(false), 3000);
            return () => clearTimeout(timer);
        }
    }, [alert?.id]);

    
    if (!alert) return null;

    return (
        <Snackbar
            open={open}
            anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
            sx={snackbar}
        >
            <Alert
                key={alert.id}
                variant="filled"
                severity={alert.result ? 'success' : 'error'}
                sx={alertS}
                icon={alert.result ? <CheckCircleOutlineIcon fontSize="inherit" /> : undefined}
            >
                <AlertTitle sx={{ mb: alert.result ? '0' : undefined }}>
                    {alert.result ? 'You won' : 'You lost'}
                </AlertTitle>
                {!alert.result && <Typography variant="body2" sx={{fontWeight:'500'}}>{alert.reason}</Typography>}
            </Alert>
        </Snackbar>
    );
}