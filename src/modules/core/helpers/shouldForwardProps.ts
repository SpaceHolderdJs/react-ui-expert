import { allCssRulesObject } from "../AllCssRules";

export const shouldForwardProp = (prop: string) => !Object.keys(allCssRulesObject).includes(prop)