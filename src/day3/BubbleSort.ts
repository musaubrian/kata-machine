const swap = (val_1: number, val_2: number): number[] => {
    let temp = val_2;
    val_2 = val_1;
    val_1 = temp;

    return [val_1, val_2];
};
export default function bubble_sort(arr: number[]): void {
    let loop_counter = 0;
    while (loop_counter < arr.length) {
        for (let idx = 0; idx < arr.length; idx++) {
            if (arr[idx] > arr[idx + 1]) {
                const swapped_vals = swap(arr[idx], arr[idx + 1]);
                arr[idx] = swapped_vals[0];
                arr[idx + 1] = swapped_vals[1];
            }
        }
        loop_counter++;
    }
}
