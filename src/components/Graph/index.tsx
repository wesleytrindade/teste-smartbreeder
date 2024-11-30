import { ResponsiveContainer, BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar, Rectangle } from "recharts";

export interface AxisData {
    label: "string";
    value: "string";
}
export interface GraphProps {
    data: AxisData[]
}
export function Graph({ data }: GraphProps) {

    console.log(data);
    
    return (<ResponsiveContainer width="100%" height="100%">
        <BarChart
            width={500}
            height={300}
            data={data}
            margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
            }}
        >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="value" fill="#8884d8" activeBar={<Rectangle fill="pink" stroke="blue" />} />
        </BarChart>
    </ResponsiveContainer>)
}