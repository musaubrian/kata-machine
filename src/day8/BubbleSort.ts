export default function bubble_sort(arr: number[]): void {
    let count = 0;
    while (count < arr.length) {
        for (let idx = 0; idx < arr.length; idx++) {
            if (arr[idx] > arr[idx + 1]) {
                const temp = arr[idx];
                arr[idx] = arr[idx + 1];
                arr[idx + 1] = temp;
            }
        }
        count += 1;
    }
}
