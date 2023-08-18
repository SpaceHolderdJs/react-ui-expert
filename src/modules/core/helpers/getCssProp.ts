export const getCssProp = (prop: string) => {
    const index = prop.split("").findIndex((l) => l.toUpperCase() === l);
    return index === -1 ? prop : `${prop.slice(0, index,)}-${prop[index].toLowerCase()}${prop.slice(index + 1)}`;
}