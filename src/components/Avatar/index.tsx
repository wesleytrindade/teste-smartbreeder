import { Avatar, Box, Grid2 } from "@mui/material";
import { customColors } from "../../styles/customColors";

type CustomColorKeys = keyof typeof customColors;

interface AvatarProps {
    themeColor?: CustomColorKeys;
    imageSrc: string;
}
export function DashboardAvatar({ themeColor = "other", imageSrc }: AvatarProps) {
    return (<Grid2 width={{ md: 420, xs: 380 }} height={{ md: 400, xs: 360 }} size={{ xs: "grow", md: 12 }}
        sx={{
            maxWidth: 420,
            maxHeight: 400,

        }}
    >
        <Avatar alt="image" src={imageSrc} sx={{
            width: "100%",
            height: "100%",
            border: `4px solid ${customColors[themeColor]}`

        }} />
    </Grid2>)

}