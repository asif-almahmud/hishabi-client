import { HTMLProps } from "react";

export function tailedClasses(classes: HTMLProps<HTMLElement>["className"]) {
    return ` ${classes} `;
}
