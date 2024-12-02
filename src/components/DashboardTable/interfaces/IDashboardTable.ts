export interface DashboardTableRow {
    status: string;
    species: string;
    gender: string;
    origin:{
        name:string;
    }

}

interface DashboardTableColumns {
    field: string;
}
export interface DashboardTableProps {
    columns: DashboardTableColumns[];
    rows: DashboardTableRow;
}