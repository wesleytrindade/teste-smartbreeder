import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";


interface DashboardTableRow {
    status: string;
    species: string;
    gender: string;
    origin: string;

}

interface DashboardTableColumns {
    field: string;
}
interface DashboardTableProps {
    rows: DashboardTableRow[];
}


export function DashboardTable({ rows }: any) {

    const columns = [
        { field: 'Status', },
        { field: 'Species' },
        { field: 'Gender', },
        { field: 'Origin', },
    ] as DashboardTableColumns[];

    return (
        <TableContainer sx={{
            border:0,
            borderRadius: '1%',
            overflow: 'hidden'
        }}>
            <Table sx={{ borderColor: "gray.900", color: "white", minWidth: 650 }}>
                <TableHead>
                    <TableRow sx={{
                        background: "#4C4C4C",
                        '&:last-child td, &:last-child th': { border: 0 }
                    }} >

                        {columns.map((c) =>
                            <TableCell sx={{ color: "white", fontWeight: 600, fontSize: "1rem" }} align="center">{c.field}</TableCell>
                        )}
                    </TableRow>
                </TableHead>

                <TableBody>

                    <TableRow sx={{ background: "#2E2E2E", '&:last-child td, &:last-child th': { border: 0 } }}>
                        <TableCell sx={{ color: "white" }} align="center">{rows.status}</TableCell>
                        <TableCell sx={{ color: "white" }} align="center">{rows.species}</TableCell>
                        <TableCell sx={{ color: "white" }} align="center">{rows.gender}</TableCell>
                        <TableCell sx={{ color: "white" }} align="center">{rows.origin?.name}</TableCell>
                    </TableRow>

                </TableBody>
            </Table>
        </TableContainer>
    )
}