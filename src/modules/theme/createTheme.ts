import { allCssRulesObject } from "../core/AllCssRules";
import UI from "../core/components/All";

export interface SizingsInterface {
    xl: string;
    l: string;
    m: string;
    s: string;
    xs: string;
}

export interface DefaulColorsInterface {
    primary: string;
    secondary: string;
    text: string;
    background: string;
    shadows: string;
}

export interface DefaultSpacingsInterface {
    paddings: SizingsInterface;
    margins: SizingsInterface;
    gaps: SizingsInterface;
}

export type OveridesType = Partial<Record<keyof typeof UI, Partial<typeof allCssRulesObject>>>

export interface UIThemeInterface<
    TColors = Partial<DefaulColorsInterface>,
    TSpacings = Partial<DefaultSpacingsInterface>
> {
    variations: Record<keyof TColors, string>[];
    spacings: TSpacings;
    overrides?: OveridesType
}



export const createUITheme = <
    TSpacings = Partial<DefaultSpacingsInterface>,
    TColorSchema = Partial<DefaulColorsInterface>
>(
    spacings: TSpacings,
    variations: TColorSchema[],
    overrides?: OveridesType
): {
    spacings: TSpacings,
    variations: TColorSchema[],
    overrides?: OveridesType
} => {
    return {
        spacings,
        variations,
        overrides
    };
};
