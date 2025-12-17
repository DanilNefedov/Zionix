'use client'

import { Box, Container } from "@mui/material";
import { MainNumber } from "./components/active-zone/main-number/MainNumber";
import { MainHistory } from "./components/history/MainHistory";
import { useState } from "react";
import { AlertT, History } from "./types";
import { MainAlert } from "./components/alert/MainAlert";
import { container } from "./styles";

export default function Home() {
  const [history, setHistory] = useState<History[]>([])
  const [alert, setAlert] = useState<AlertT | null>(null)
    
  return (
    <Box>
      <main style={{margin:'113px 0'}}>
        <Container maxWidth="sm" >
          <Box sx={container}>
            <MainNumber setHistory={setHistory} setAlert={setAlert}></MainNumber>
            <MainHistory history={history}></MainHistory>
            <MainAlert alert={alert}></MainAlert>
          </Box>
        </Container>
      </main>
    </Box>
  );
}
