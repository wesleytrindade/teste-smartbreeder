import { Box, List} from "@mui/material";
import { NavBarItem } from "./NavBarItem";

interface NavBarItemProps {
    name: string;
    id: string;
    variant:string;
}
interface NavBarProps {
    itens: NavBarItemProps[],
}

export function NavBar({ itens }: NavBarProps) {

    return (
        <Box sx={{ width: "100%", maxWidth: 360, height: "100vh"}}>
            <List component="nav">
                {itens.map((item) => {
                    return (<NavBarItem name={item.name} id={item.id} variant={item.variant} handleClick={()=>{}}/>);
                })}
            </List>
        </Box>
    )
}