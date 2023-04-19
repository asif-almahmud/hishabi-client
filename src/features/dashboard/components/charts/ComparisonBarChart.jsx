import React from "react";
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
    LineChart,
    Line,
} from "recharts";

const data = [
    {
        name: "Jan",
        expense: 400,
        income: 2400,
        balance: 2000,
        loan: 0,
        lent: 0,
        donation: 0,
    },
    {
        name: "Feb",
        expense: 3000,
        income: 4000,
        balance: 5000,
        loan: 2000,
        lent: 0,
    },
    {
        name: "March",
        expense: 2000,
        income: 5000,
        balance: 6000,
        loan: 0,
    },
    {
        name: "April",
        expense: 6000,
        income: 4000,
        balance: 4000,
    },
    {
        name: "May",
        expense: 6000,
        income: 5000,
        balance: 3000,
    },
    {
        name: "June",
        expense: 4000,
        income: 6000,
        balance: 5000,
    },
    {
        name: "Jul",
        expense: 8000,
        income: 5000,
        balance: 2000,
    },
    {
        name: "Aug",
        expense: 5000,
        income: 4000,
        balance: 1000,
    },
    {
        name: "Sept",
        expense: 2000,
        income: 4000,
        balance: 3000,
    },
    {
        name: "Oct",
        expense: 2500,
        income: 4500,
        balance: 5000,
    },
    {
        name: "Nov",
        expense: 1500,
        income: 4500,
        balance: 8000,
    },
    {
        name: "Dec",
        expense: 7000,
        income: 5000,
        balance: 6000,
    },
];

const ComparisonBarChart = () => {
    return (
        <ResponsiveContainer width="100%" height="100%">
            <BarChart width={730} height={250} data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                {/* <Bar dataKey="balance" fill="#8884d8" /> */}
                <Bar dataKey="income" fill="#82ca9d" />
                <Bar dataKey="expense" fill="#ca8282" />
            </BarChart>
            {/* <LineChart
                width={730}
                height={250}
                data={data}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="balance" stroke="#8884d8" />
                <Line type="monotone" dataKey="income" stroke="#82ca9d" />
                <Line type="monotone" dataKey="expense" stroke="#ca8282" />
            </LineChart> */}
        </ResponsiveContainer>
    );
};

export default ComparisonBarChart;
