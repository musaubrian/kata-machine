export default function bubble_sort(arr: number[]): void {
    let count = 0;
    while (count < arr.length) {
        for (let index = 0; index < arr.length; index++) {
            if (arr[index] > arr[index + 1]) {
                const temp = arr[index + 1];
                arr[index + 1] = arr[index];
                arr[index] = temp;
            }
        }
        count += 1;
    }
}
