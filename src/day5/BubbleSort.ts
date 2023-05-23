function swap_vals(val_1: number, val_2: number): number[] {
    let temp = val_2;
    val_2 = val_1;
    val_1 = temp;
    return [val_1, val_2];
}

export default function bubble_sort(arr: number[]): void {
    let count = 0;
    while (count < arr.length) {
        for (let idx = 0; idx < arr.length; idx++) {
            if (arr[idx] > arr[idx + 1]) {
                const res = swap_vals(arr[idx], arr[idx + 1]);
                arr[idx] = res[0];
                arr[idx + 1] = res[1];
            }
        }
        count += 1;
    }
}
