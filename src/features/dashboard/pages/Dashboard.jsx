import React from "react";
import Tooltip from "../../../components/ui/Tooltip";
import ComparisonBarChart from "../components/charts/ComparisonBarChart";
import StackedExpenseBarChart from "../components/charts/StackedExpenseBarChart";
import DataTable from "../components/ui/Datatable";

const Dashboard = () => {
    const headers = [
        { prop: "category", title: "Category" },
        { prop: "amount", title: "Amount" },
        { prop: "date", title: "Date" },
    ];
    const body = [
        { category: "House rent", amount: 20000, date: "01/02/23" },
        { category: "Electricity bill", amount: 2000, date: "01/02/23" },
        { category: "Grocery", amount: 5000, date: "01/02/23" },
    ];
    return (
        <div className="flex gap-8">
            <div className="flex flex-col gap-8">
                <div className="flex gap-4">
                    <div className="grow p-8 text-center text-xl card-dashboard">
                        Total Income: 400
                    </div>
                    <div className="grow p-8 text-center text-xl card-dashboard">
                        Total Expense: 200
                    </div>
                    <div className="grow p-8 text-center text-xl card-dashboard relative">
                        <div>Balance: 200</div>

                        <div className="absolute right-2 top-2 w-5 h-5 border border-gray-400 flex justify-center items-center text-gray-400 rounded-full hover:border-gray-800 hover:text-gray-800">
                            <Tooltip
                                text="Balance = Total Income - Total Expense + Loan - Lent
                            - Donation + Uncharted cash in - Uncharted cash out"
                                extraClasses="text-sm text-gray-800 bg-white/80 p-1"
                                time={7000}
                            >
                                <i className="uil uil-info"></i>
                            </Tooltip>
                        </div>
                    </div>
                </div>
                <div className="">
                    <div className="h-[60vh]">
                        <ComparisonBarChart />
                        <div className="text-center text-sm">
                            Income and Expense comparison ( last 12 months )
                        </div>
                    </div>
                    {/* <div className="h-[60vh]">
                        <StackedExpenseBarChart />
                        <div className="text-center text-sm">
                            Category based expenses on the last 7 days
                        </div>
                    </div> */}
                </div>
            </div>
            <div className="grow p-4 card-dashboard">
                <DataTable
                    title="Recent Expenses"
                    titleExtraClasses="font-normal mb-1"
                    headerExtraClasses="font-normal"
                    // titleUnderlined
                    headers={headers}
                    body={body}
                    // withFilter
                    // withPagination
                    // rowsPerPageOptions={[5, 10, 20, 30, 50, 70, 100]}
                />
            </div>
        </div>
    );
};

export default Dashboard;
