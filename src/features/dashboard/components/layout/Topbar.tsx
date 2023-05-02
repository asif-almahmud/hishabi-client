import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Portal from "../../../../components/ui/Portal";
import useWindowDimensions from "../../../../hooks/useWindowDimensions";
import Sidebar from "./Sidebar";

const Topbar = () => {
    const [open, setOpen] = useState(false);
    const [render, setRender] = useState(false);
    const { width } = useWindowDimensions();

    const openModal = () => {
        !render && setRender(true);
        setOpen(true);
    };

    const closeModal = () => {
        setOpen(false);
    };

    useEffect(() => {
        if (open && width >= 640) {
            closeModal();
        }
    }, [open, width]);

    return (
        <div className="h-full flex items-center justify-between px-4 bg-gray-100/10 drop-shadow-md border-b border-gray-400/20 backdrop-blur">
            <button className="text-xl text-[18px] px-2 py-1 drop-shadow rounded-md flex items-center text-gray-800">
                <i className="uil uil-coins font-bold text-[24px] mr-1"></i>
                hishabi
            </button>
            <div className="flex gap-2.5 text-gray-800">
                <Link
                    to="/"
                    // role="button"
                    className="  px-3 py-2 text-sm font-medium cursor-pointer"
                    // onClick={}
                >
                    Logout
                </Link>

                <button className="block sm:hidden" onClick={openModal}>
                    <i className="uil uil-bars"></i>
                </button>
            </div>

            {render && (
                <Portal open={open} setOpen={setOpen} variant="sidebar">
                    <Sidebar closeModal={closeModal} />
                </Portal>
            )}
        </div>
    );
};

export default Topbar;
