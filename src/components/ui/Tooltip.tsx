import React, { FC, useEffect, useState } from "react";

type Position =
    | "top-start"
    | "top"
    | "top-end"
    | "right-start"
    | "right"
    | "right-end"
    | "bottom-start"
    | "bottom"
    | "bottom-end"
    | "left-start"
    | "left"
    | "left-end";

type BreakPositions = [
    `sm-${Position}`,
    `md-${Position}`,
    `lg-${Position}`,
    `xl-${Position}`,
    `2xl-${Position}`
];

interface ITooltipProps {
    children: React.ReactNode;
    text: React.ReactNode;
    time?: number;
    position?: Position;
    breakPositions?: BreakPositions;
    radius?: number;
    className?: string;
}

function Tooltip({
    children,
    text = "",
    time = 2000,
    position = "bottom",
    breakPositions,
    radius = 4,
    className = "",
}: ITooltipProps) {
    const [show, setShow] = useState(false);
    const [touched, setTouched] = useState(false);

    const getPositionClasses = (position: Position, radius: number) => {
        let positionClasses = "";
        if (position.includes("top") || position.includes("bottom")) {
            if (position.includes("-start")) {
                positionClasses += " left-0";
            } else if (position.includes("-end")) {
                positionClasses += " right-0";
            } else {
                positionClasses += " left-1/2 -translate-x-1/2";
            }
            if (position.includes("top")) {
                positionClasses += ` -top-full -translate-y-[${radius}]`;
            }
            if (position.includes("bottom")) {
                positionClasses += ` top-full translate-y-[${radius}]`;
            }
        }

        if (position.includes("left") || position.includes("right")) {
            if (position.includes("-start")) {
                positionClasses += " top-0";
            } else if (position.includes("-end")) {
                positionClasses += " bottom-0";
            } else {
                positionClasses += " top-1/2 -translate-y-1/2";
            }
            if (position.includes("left")) {
                positionClasses += ` -left-full -translate-x-[${radius}]`;
            }
            if (position.includes("right")) {
                positionClasses += ` left-full translate-x-[${radius}]`;
            }
        }
        return positionClasses;
    };

    useEffect(() => {
        if (touched) {
            setTimeout(() => {
                setShow(false);
                setTouched(false);
            }, time);
        }
    }, [touched, time]);

    return (
        <div
            onTouchStartCapture={(e) => {
                e.preventDefault();
                setTouched(true);
                setShow(true);
            }}
            onMouseEnter={() => {
                setShow(true);
            }}
            onMouseLeave={() => {
                setShow(false);
            }}
            className="relative"
        >
            {children}
            {show ? (
                <div
                    className={`absolute -top-1/2 left-1/2 ${position} ${getPositionClasses(
                        position,
                        radius
                    )} p-1 border z-10 bg-gray-700 text-white rounded-md ${className}`}
                >
                    {/* {text.split(" ").map((text, i) => (
                        <span key={i}>{text} </span>
                    ))} */}
                    {text}
                </div>
            ) : null}
        </div>
    );
}

// Tooltip.Text = ({ children }: { children: React.ReactNode }) => <>{children}</>;

export default Tooltip;
