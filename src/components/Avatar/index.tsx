import { Avatar, Box } from "@mui/material";
import { customColors } from "../../styles/customColors";

interface AvatarProps {
    themeColor?: string;
    imageSrc: string;
}
export function DashboardAvatar({ themeColor = "other", imageSrc }: AvatarProps) {
    return (<Box display="flex"
        sx={{
            width: 420,
            height: 400,

        }}
    >

        <Avatar alt="image" src={imageSrc} sx={{
            width: "100%",
            height: "100%",
            border: `2px solid ${customColors[themeColor]}`

        }} />
    </Box>)

}