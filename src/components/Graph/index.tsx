
import ReactECharts from 'echarts-for-react';
import { countMonths, Episode } from "../../utils/countMonths";
import { useEffect, useState } from "react";
import { CircularProgress, Grid2 } from "@mui/material";
import { customColors } from '../../styles/customColors';

type CustomColorKeys = keyof typeof customColors;

export interface AxisData {
    label: string;
    value: string;
}
export interface GraphProps {
    data: AxisData[],
    color: CustomColorKeys;
}
export function Graph(ep: GraphProps) {

    const [formatedData, setFormatedData] = useState<AxisData[]>([]);
    const [loading, setLoading] = useState(true);

    const [labels, setLabels] = useState([]);
    const [graphValues, setGraphValues] = useState([]);

    useEffect(() => {
        if (ep && ep.data.length > 0) {
            const months = countMonths(ep.data);

            setFormatedData(months);

            const labelsMap = months.map((m: any) => {
                return m.label;
            });

            setLabels(labelsMap);

            const valuesMap = months.map((m: any) => {
                return parseInt(m.value);
            });

            setGraphValues(valuesMap);
        }
        setLoading(false);
    }, [ep]);

    const optionsChartBars = {
        backgroundColor: "#2E2E2E",
        color:customColors[ep.color],
        grid: { top: 10, right: 10, bottom: 24, left: 36 },
        xAxis: {
            type: 'category',
            data: formatedData ? labels : [],
        },
        yAxis: {
            type: 'value',
            name: "Número de aparições"


        },
        series: [
            {
                data: formatedData ? graphValues : [],
                type: 'bar',
            },
        ],
        tooltip: {
            trigger: 'axis',
        },
    }

    return (
        <>
            {!loading && formatedData !== null ?

                    <ReactECharts
                        option={optionsChartBars}
                    />:
                <Grid2 size={12} container justifyContent="center" alignItems="center">
                    <CircularProgress color="success" />
                </Grid2>
            }


        </>
    )
}
