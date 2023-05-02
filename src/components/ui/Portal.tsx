import { FC, useState } from "react";
import ReactDom from "react-dom";
import { tailedClasses } from "../../utils/tailed-classes";
import Backdrop from "./Backdrop";

interface IModalProps {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
    children: React.ReactNode;
    variant?: "modal" | "sidebar";
    className?: string;
}

function Portal({
    open,
    setOpen,
    children,
    variant = "modal",
    className = "",
}: IModalProps) {
    const handleClose = () => {
        setOpen(false);
    };

    let normalStyle = `z-[1000] fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 min-w-fit min-h-fit bg-white ${className} ${
        !open ? "hidden" : ""
    }`;

    let sidebarStyle = `z-[1000] fixed top-0 left-0 bg-white ${
        open ? "open-sidebar" : "close-sidebar"
    } min-w-min min-h-screen ${
        open ? "" : "border-r border-gray-700/50"
    } ${className}`;

    let modalStyle = "";

    switch (variant) {
        case "modal":
            modalStyle = tailedClasses(
                `z-[1000] fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 min-w-fit min-h-fit bg-white ${className} ${
                    !open ? "hidden" : ""
                }`
            );
            break;
        case "sidebar":
            modalStyle = tailedClasses(
                `z-[1000] fixed top-0 left-0 bg-white ${
                    open ? "open-sidebar" : "close-sidebar"
                } min-w-min min-h-screen ${
                    open ? "" : "border-r border-gray-700/50"
                } ${className}`
            );
            break;
        default:
            modalStyle = tailedClasses("bg-red-500");
    }

    return ReactDom.createPortal(
        <>
            {open && <Backdrop handleClose={handleClose} />}

            <div className={modalStyle}>{children}</div>
        </>,
        document.getElementById("portal") as HTMLElement
    );
}

export default Portal;
