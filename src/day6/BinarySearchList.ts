export default function bs_list(haystack: number[], needle: number): boolean {
    let low_val = 0;
    let high_val = haystack.length;

    while (low_val < high_val) {
        const mid = Math.floor(low_val + (high_val - low_val) / 2);

        const val = haystack[mid];

        if (needle == val) {
            return true;
        } else if (needle > val) {
            low_val = mid + 1;
        } else {
            high_val = mid;
        }
    }
    return false;
}
