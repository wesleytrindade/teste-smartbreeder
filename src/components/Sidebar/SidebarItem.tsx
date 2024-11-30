import { ListItemButton, ListItemText, Typography } from "@mui/material";
import { customColors } from "../../styles/customColors";

interface SidebarItemProps {
    name: string;
    variant?: string;
    handleClick: () => void;
    selected:boolean;
}

export function SidebarItem({name, variant = "other", handleClick,selected=false }: SidebarItemProps) {

    const variantColor = customColors[variant];

    return (
        <ListItemButton
            sx={{
                maxWidth:"310px",
                maxHeight:"180px",
                padding:"3rem",
                color: "white" ,
                background:selected ? variantColor:"#3A3A3A",
                cursor: "pointer",
                textAlign: "center",
            }} onClick={handleClick} selected={selected}>
            <ListItemText disableTypography primary={<Typography variant="body2" style={{ fontWeight: selected ? 600:400}}>{name}</Typography>}>
            </ListItemText> 
        </ListItemButton>
    )
}