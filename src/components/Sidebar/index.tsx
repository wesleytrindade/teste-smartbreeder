import { Box, List, Drawer, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { SidebarItem } from "./SidebarItem";

import { sidebarSlice } from "../../redux/sidebarList/slice";
import { useAppDispatch } from "../../redux/hooks/useAppDispatch";
import { useAppSelector } from "../../redux/hooks/useAppSelector";
import { useState } from "react";

interface SidebarItemProps {
    name: string;
    id: string;
}
interface SidebarProps {
    itens: SidebarItemProps[];
}

export function Sidebar({ itens }: SidebarProps) {
    const dispatch = useAppDispatch();
    const { selectedCharacter } = useAppSelector((store) => store.sidebarList);

    const [isDrawerOpen, setDrawerOpen] = useState(false);

    const handleSidebarClick = (id: string) => {
        dispatch(sidebarSlice.actions.setSelectedCharacter(id));
        setDrawerOpen(false);
    };

    return (
        <>
            <IconButton
                sx={{
                    display: { xs: "block", md: "none" },
                    position: "fixed",
                    top: 16,
                    left: 16,
                    zIndex: 1300,
                    color:"white"
                }}
                onClick={() => setDrawerOpen(true)}
            >
                <MenuIcon />
            </IconButton>

            <Drawer
                anchor="left"
                open={isDrawerOpen}
                onClose={() => setDrawerOpen(false)}
                sx={{
                    display: { xs: "block", md: "none" },
                }}
            >
                <Box sx={{ width: 310 }}>
                    <List
                        sx={{
                            overflowY: "auto",
                            height: "100vh",
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
                        }}
                    >
                        {itens.map((item) => (
                            <SidebarItem
                                key={item.id}
                                id={item.id}
                                name={item.name}
                                handleClick={() => handleSidebarClick(item.id)}
                                selected={selectedCharacter == item.id}
                            />
                        ))}
                    </List>
                </Box>
            </Drawer>

            <Box
                sx={{
                    width: "100%",
                    maxWidth: "310px",
                    height: "100vh",
                    overflow: "hidden",
                    display: { xs: "none", md: "block" }, 
                }}
            >
                <List
                    sx={{
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
                    }}
                >
                    {itens.map((item) => (
                        <SidebarItem
                            key={item.id}
                            id={item.id}
                            name={item.name}
                            handleClick={() => handleSidebarClick(item.id)}
                            selected={selectedCharacter == item.id}
                        />
                    ))}
                </List>
            </Box>
        </>
    );
}
