export default function bs_list(haystack: number[], needle: number): boolean {
    let lower = 0;
    let upper = haystack.length;

    while (lower < upper) {
        const midpoint = Math.floor(lower + (upper - lower) / 2);
        const value = haystack[midpoint];
        if (needle === value) {
            return true;
        } else if (value < needle) {
            lower = midpoint + 1;
        } else {
            upper = midpoint;
        }
    }
    return false;
}
