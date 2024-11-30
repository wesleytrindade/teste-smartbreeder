import { Box, List } from "@mui/material";
import { SidebarItem } from "./SidebarItem";

import { sidebarSlice } from "../../redux/sidebarList/slice";
import { useAppDispatch } from "../../redux/hooks/useAppDispatch";
import { useAppSelector } from "../../redux/hooks/useAppSelector";

interface SidebarItemProps {
    name: string;
    id: number;
    variant: string;
}
interface SidebarProps {
    itens: SidebarItemProps[],
}


export function Sidebar({ itens }: SidebarProps) {

    const dispatch = useAppDispatch();
    const {selectedCharacter} = useAppSelector((store) => store.sidebarList);

    const handleSidebarClick = (id: number) => {
        dispatch(sidebarSlice.actions.setSelectedCharacter(id));
    }
    return (
        <Box sx={{ width: "100%", maxWidth: "310px", height: "100vh", overflow: "hidden" }}>
            <List sx={{
                overflowY: "auto",
                height: "100%",
                padding: 0,

                "&::-webkit-scrollbar": {
                    width: "8px",
                  },
                  "&::-webkit-scrollbar-thumb": {
                    backgroundColor: "#888", 
                    borderRadius: "4px", 
                  },
                  "&::-webkit-scrollbar-thumb:hover": {
                    backgroundColor: "#555", 
                  },
                  "&::-webkit-scrollbar-track": {
                    backgroundColor: "#222", 
                  },
            }}>
                {itens.map((item) => {
                    return (<SidebarItem key={item.id} name={item.name} variant={item.variant} handleClick={() => handleSidebarClick(item.id)} selected={selectedCharacter === item.id} />);
                })}
            </List>
        </Box>
    )
}