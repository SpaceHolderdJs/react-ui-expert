import { CSSProperties } from "react";
import { allCssRulesObject } from "../AllCssRules";

export const generateCssValues = <T>(props: T) => {
    let styles: Partial<CSSProperties> = {};

    for (const prop in props) {
        if (prop in allCssRulesObject) {
            //@ts-ignore
            styles[prop] = props[prop];
        }
    }

    return styles;
}   