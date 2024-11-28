import { ListItemButton, ListItemText, Typography } from "@mui/material";
import { customColors } from "../../styles/customColors";

interface NavBarItemProps {
    id: string;
    name: string;
    variant?: string;
    handleClick: () => void;
}

export function NavBarItem({ id, name, variant = "other", handleClick }: NavBarItemProps) {

    const variantColor = customColors[variant];

    return (
        <ListItemButton key={id}
            sx={{
                padding: "3rem", color: variantColor,
                background: "#3A3A3A", cursor: "pointer", textAlign: "center", ":hover":`${customColors[variant]}`
            }} onClick={handleClick}>
            <ListItemText disableTypography primary={<Typography variant="body2" style={{ fontWeight: 600, color: `${customColors[variant]}`}}>{name}</Typography>}></ListItemText> </ListItemButton>
    )
}