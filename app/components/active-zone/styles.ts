import { theme } from "@/app/theme/theme";
import { alpha } from "@mui/material";




export const containerMainNumbr = {
    mb:'16px', 
    maxWidth:'320px', 
    width:'100%'
}

export const paper = {
    p: "44px 0",
    maxWidth: '320px',
    width: '100%',
    maxHeight: '200px',
    height: '100%',
    borderRadius: '0',
    bgcolor: alpha(theme.palette.text.primary, 0.16),
    boxShadow: 'none'

}

export const textRoll = {
    fontWeight: '300',
    fontSize: '96px',
    textAlign: 'center',
    lineHeight: '117%'
}

export const radioGroup = { 
    justifyContent: 'center', 
    gap: '16px', 
    mb: '32px' 
}

export const radio = { 
    '& .MuiSvgIcon-root': { 
        width: 20, 
        height: 20 
    } 
}

export const button = {
    pt:'8px', 
    pb:'8px', 
    width:'100%', 
    display:'block', 
    fontSize:'15px', 
    textTransform:'uppercase', 
    lineHeight:'26px', 
    letterSpacing:"0.46px"
}