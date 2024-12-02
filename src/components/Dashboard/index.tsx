import { Grid2, Stack, Typography, LinearProgress } from "@mui/material";
import { useDashboard } from "../../hooks/useDashboard";
import { customColors } from "../../styles/customColors";
import { DashboardAvatar } from "../Avatar";
import { DashboardTable } from "../DashboardTable";
import { Graph } from "../Graph";
import { useEffect, useState } from "react";
import { colorVariant } from "../../utils/colorVariant";
import { DashboardTableProps } from "../DashboardTable/interfaces/IDashboardTable";
import toast, { Toaster } from "react-hot-toast";

type CustomColorKeys = keyof typeof customColors;

export function Dashboard() {

    const { data, loading, error } = useDashboard();
    const [color, setColor] = useState<CustomColorKeys>("other") ;

    useEffect(() => {
        if (!loading && data) {
            setColor(colorVariant(data.id));
        }

    }, [data])

    if (error) {
        toast.error(error)
    }

    const gridTable: DashboardTableProps = {
        columns: [
            { field: 'Status', },
            { field: 'Species' },
            { field: 'Gender', },
            { field: 'Origin', },],

        rows: data
    }

    return (<>
        <Toaster
            position="bottom-center"
            reverseOrder={false}
        />
        {!loading && data ?

            <Grid2 container size={{ md: 8, xs: 12 }}>
                <Grid2 size={{ md: 10, xs: 12 }}>
                    <Stack spacing={{ md: 10, xs: 12 }} padding={6}>
                        <Typography variant="h3" sx={{ fontSize: "3.5rem", fontWeight: "700", color: "white" }}>
                            {data.name}
                        </Typography>
                        <Stack spacing={2}>
                            <Typography variant="h5" sx={{ marginLeft: "2rem", fontSize: "1.5rem", fontWeight: "600", color: customColors[color], marginBottom: 2 }}>
                                Dados do personagem
                            </Typography>
                            <DashboardTable columns={gridTable.columns} rows={gridTable.rows} />
                        </Stack>

                        <Typography variant="h5" sx={{ marginLeft: "2rem", fontSize: "1.5rem", fontWeight: "600", color: customColors[color], marginBottom: 2 }}>
                            Aparições por Mês
                        </Typography>
                    </Stack>

                    <Grid2 size={12} paddingX={2}>
                        <Graph data={data.episode} color={color} />
                    </Grid2>

                </Grid2>

                <Grid2 size={{ md: 2, xs: 12 }} marginTop={{xs:"3rem"}} paddingX= {{xs:"1rem",md:"1rem"}} paddingY={{xs:"0rem",md:"1rem"}}>
                    <DashboardAvatar themeColor={color} imageSrc={data.image} />
                </Grid2>

            </Grid2> :

            <Grid2 size={8}>
                <LinearProgress />
            </Grid2>

        }</>)
}