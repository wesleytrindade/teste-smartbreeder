import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { DashboardTableProps } from "./interfaces/IDashboardTable";


export function DashboardTable({ columns,rows }: DashboardTableProps) {

    return (
        <TableContainer sx={{
            border:0,
            borderRadius: '1%',
            overflow: 'auto',
            
        }}>
            <Table sx={{ borderColor: "gray.900", color: "white", width:"100%", }}>
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