export const replaceItemAtIndex = (arr: any[], index: number, newValue: any) => {
    return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];
}

export const removeItemAtIndex = (arr: any[], index: number) => {
    return [...arr.slice(0, index), ...arr.slice(index + 1)];
}

export const insertItemsStartingAt = (arr: any[], index: any, ...newItems: any[]) => [
    // part of the array before the specified index
    ...arr.slice(0, index),
    // inserted items
    ...newItems,
    // part of the array after the specified index
    ...arr.slice(index)
]