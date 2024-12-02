import { ListItemButton, ListItemText, Typography } from "@mui/material";
import { customColors } from "../../styles/customColors";
import { colorVariant } from "../../utils/colorVariant";

interface SidebarItemProps {
    name: string;
    id:string;
    handleClick: () => void;
    selected:boolean;
}

export function SidebarItem({name, id, handleClick,selected=false }: SidebarItemProps) {

    const color = colorVariant(id);

    return (
        <ListItemButton
            sx={{
                maxWidth:"310px",
                maxHeight:"180px",
                padding:"3rem",
                color: selected ? `${customColors[`text_${color}`]}`:"white",
                backgroundColor:selected ? `${customColors[color]} !important`:"#3A3A3A",
                cursor: "pointer",
                textAlign: "center",
            }} onClick={handleClick} selected={selected}>
            <ListItemText disableTypography primary={<Typography variant="body2" style={{ fontWeight: selected ? 600:400}}>{name}</Typography>}>
            </ListItemText> 
        </ListItemButton>
    )
}