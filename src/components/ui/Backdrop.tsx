import { FC } from "react";
import { tailedClasses } from "../../utils/tailed-classes";

interface IBackdropProps {
    handleClose?: () => void;
    className?: string;
    children?: React.ReactNode;
    variant?: "modal" | "loader";
}

const Backdrop: FC<IBackdropProps> = ({
    handleClose,
    className,
    children,
    variant = "modal",
}) => {
    let variantStyle = "";

    switch (variant) {
        case "modal":
            variantStyle = tailedClasses("fixed inset-0");
            break;
        case "loader":
            variantStyle = tailedClasses("absolute inset-0");
    }

    return (
        <div
            className={`${variantStyle} bg-gray-900/70 z-[999] ${className}`}
            onClick={handleClose}
        >
            {children}
        </div>
    );
};

export default Backdrop;
