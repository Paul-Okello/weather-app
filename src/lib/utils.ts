export function chunkValues(values: number[], chunkSize: number) {
    const result = []
    for (let i = 0; i < values.length; i += chunkSize) {
        const chunk = values.slice(i, i + chunkSize);
        result.push({chunk});
    }
    return result
}