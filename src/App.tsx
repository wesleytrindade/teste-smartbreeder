import { Avatar, Box, CircularProgress, Grid2, LinearProgress, Stack, Typography } from "@mui/material";
import { Sidebar } from "./components/Sidebar"
import { useSidebar } from "./hooks/useSidebar"
import { blue } from "@mui/material/colors";
import { useDashboard } from "./hooks/useCharacterDashboard";
import { DashboardTable } from "./components/DashboardTable";
import { Graph } from "./components/Graph";
import { DashboardAvatar } from "./components/Avatar";

export function App() {

  const sidebar = useSidebar();
  const dashboard = useDashboard();

  return (

    <>
      <Grid2 container spacing={2}>
        <Grid2 size={2}>
          {!sidebar.loading && sidebar.data ?
            <Sidebar itens={sidebar.data} /> :

            <Box display="flex" height="100vh" justifyContent="center" alignItems="center">
              <CircularProgress sx={{ color: blue[500] }} />
            </Box>
          }
        </Grid2>


        {!dashboard.loading && dashboard.data ?

          <Grid2 container size={8} sx={{ padding: 4 }}>
            <Grid2 size={10}>
              <Stack spacing={10} padding={6}>
                <Typography variant="h3" sx={{ fontSize: "3.5rem", fontWeight: "bold", color: "white" }}>
                  {dashboard.data.name}
                </Typography>
                <Stack spacing={2}>
                  <Typography variant="h5" sx={{ marginLeft: "2rem", fontSize: "1.5rem", fontWeight: "600", color: "white", marginBottom: 2 }}>
                    Dados do personagem
                  </Typography>
                  <DashboardTable rows={dashboard.data} />
                </Stack>

                <Typography variant="h5" sx={{ marginLeft: "2rem", fontSize: "1.5rem", fontWeight: "600", color: "white", marginBottom: 2 }}>
                  Aparições por Mês
                </Typography>


                <Graph data={dashboard.table} />

              </Stack>

            </Grid2>

            <Grid2 size={2}>
              <DashboardAvatar imageSrc={dashboard.data.image}/>
            </Grid2>

          </Grid2> :

          <Grid2 size={12}>
            <LinearProgress />
          </Grid2>

        }

      </Grid2 >


    </>

  )


}
