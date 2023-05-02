import { FC, ReactNode } from "react";

interface IContainerProps {
    children: ReactNode;
}

const Container: FC<IContainerProps> = ({ children }) => {
    return <div className="p-4 min-h-full max-w-7xl mx-auto">{children}</div>;
};

export default Container;
