export default function bubble_sort(arr: number[]): void {
    let counter = 0;
    while (counter < arr.length) {
        for (let index = 0; index < arr.length; index++) {
            if (arr[index] > arr[index + 1]) {
                const res = swap(arr[index], arr[index + 1]);
                arr[index] = res[0];
                arr[index + 1] = res[1];
            }
        }
        counter += 1;
    }
}

function swap(larger_num: number, smaller_num: number): number[] {
    const tempVal = larger_num;
    larger_num = smaller_num;
    smaller_num = tempVal;
    return [larger_num, smaller_num];
}
