import { Box, CircularProgress, Grid2 } from "@mui/material";
import { NavBar } from "./components/NavBar"
import { useNavBar } from "./hooks/useNavBar"
import { blue } from "@mui/material/colors";

export function App() {

  const navBar = useNavBar();

  return (

    <>
      <Grid2 container spacing={2}>
        <Grid2 size={2}>
          {!navBar.loading && navBar.data ?
            <NavBar itens={navBar.data} /> :

            <Box display="flex" height="100vh" justifyContent="center" alignItems="center">
              <CircularProgress sx={{color:blue[500]}} />
            </Box>

          }
        </Grid2>

        <Grid2 size={8}>

        </Grid2>
      </Grid2>

    </>

  )


}
