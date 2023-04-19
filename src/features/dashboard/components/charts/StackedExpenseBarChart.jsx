import React, { PureComponent } from "react";
import {
    BarChart,
    Bar,
    Cell,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from "recharts";

const data = [
    {
        name: "Page A",
        income: 4000,
        expense: 2400,
        amt: 2400,
    },
    {
        name: "Page B",
        income: 3000,
        expense: 1398,
        amt: 2210,
    },
    {
        name: "Page C",
        income: 2000,
        expense: 9800,
        amt: 2290,
    },
    {
        name: "Page D",
        income: 2780,
        expense: 3908,
        amt: 2000,
    },
    {
        name: "Page E",
        income: 1890,
        expense: 4800,
        amt: 2181,
    },
    {
        name: "Page F",
        income: 2390,
        expense: 3800,
        amt: 2500,
    },
    {
        name: "Page G",
        income: 3490,
        expense: 4300,
        amt: 2100,
    },
];

const category = [
    { name: "income", color: "#8884d8" },
    { name: "expense", color: "#82ca9d" },
];

const StackedExpenseBarChart = () => {
    return (
        <ResponsiveContainer width="100%" height="100%">
            <BarChart
                width={500}
                height={300}
                data={data}
                margin={{
                    top: 20,
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
                {category.map((item) => (
                    <Bar
                        key={item.name}
                        dataKey={item.name}
                        stackId="a"
                        fill={item.color}
                    />
                ))}
            </BarChart>
        </ResponsiveContainer>
    );
};

export default StackedExpenseBarChart;
