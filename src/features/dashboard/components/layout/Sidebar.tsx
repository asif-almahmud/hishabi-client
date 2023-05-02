import React, { FC, MouseEventHandler } from "react";
import { NavLink } from "react-router-dom";

const tabs = [
    {
        name: "Dashboard",
        link: "dashboard",
        icon: "dashboard",
    },
    {
        name: "Trends",
        link: "trends",
        icon: "chart-line",
    },
    {
        name: "History",
        link: "history",
        icon: "schedule",
    },

    {
        name: "New Transaction",
        link: "add-transaction",
        icon: "plus-square",
    },
    {
        name: "Settings",
        link: "settings",
        icon: "setting",
    },
];

interface ISideberProps {
    closeModal?: MouseEventHandler<HTMLAnchorElement>;
}

const Sidebar: FC<ISideberProps> = ({ closeModal }) => {
    return (
        <div className="m-4">
            <ul className="flex flex-col gap-1">
                {tabs.map((tab) => (
                    <li key={tab.name} className="flex">
                        <NavLink
                            to={tab.link}
                            className={({ isActive }) =>
                                isActive
                                    ? "bg-gray-200/50 py-1 px-2 w-full rounded-md outline outline-2 outline-gray-400 flex gap-3"
                                    : "w-full py-1 px-2 text-gray-800/80 flex gap-3 hover:bg-gray-200/30 rounded-md hover:backdrop-blur-none hover:outline hover:outline-1 hover:outline-gray-100"
                            }
                            onClick={closeModal}
                        >
                            <i className={`uil uil-${tab.icon}`}></i>
                            <p>{tab.name}</p>
                        </NavLink>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Sidebar;
