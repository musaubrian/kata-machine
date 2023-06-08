type Q<T> = {
    value: T;
    next?: Q<T>;
};
export default class Queue<T> {
    public length: number;
    private head?: Q<T>;
    private tail?: Q<T>;

    constructor() {
        this.head = this.tail = undefined;
        this.length = 0;
    }

    enqueue(item: T): void {
        const someNode: Q<T> = { value: item };
        this.length++;
        if (!this.tail) {
            this.tail = this.head = someNode;
        }
        this.tail.next = someNode;
        this.tail = someNode;
    }

    deque(): T | undefined {
        if (!this.head) {
            return undefined;
        }
        this.length--;
        const head = this.head;
        this.head = this.head.next;
        head.next = undefined;

        if (this.length === 0) {
            this.tail = undefined;
        }

        return head.value;
    }
    peek(): T | undefined {
        return this.head?.value;
    }
}
