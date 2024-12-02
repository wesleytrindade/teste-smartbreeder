import { Box, CircularProgress, Grid2 } from "@mui/material";
import { Sidebar } from "../components/Sidebar"
import { useSidebar } from "../hooks/useSidebar"
import { blue } from "@mui/material/colors";
import { Dashboard } from "../components/Dashboard";
import toast, { Toaster } from "react-hot-toast";

export default function Home() {

  const sidebar = useSidebar();

  if (sidebar.error) {
    toast.error(sidebar.error);
  }
  return (

    <>
      <Toaster
        position="bottom-center"
        reverseOrder={false}
      />
      <Grid2 container size="grow" spacing={2}>
        <Grid2 size={{xs:0,md:2}}>
          {!sidebar.loading && sidebar.data ?
            <Sidebar itens={sidebar.data} /> :

            <Box display="flex" height="100vh" justifyContent="center" alignItems="center">
              <CircularProgress sx={{ color: blue[500] }} />
            </Box>
          }
        </Grid2>
        <Dashboard />
      </Grid2 >


    </>

  )


}
