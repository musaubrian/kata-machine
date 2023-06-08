type QNode<T> = {
    value: T;
    next?: QNode<T>;
};

export default class Queue<T> {
    public length: number;
    private head?: QNode<T>;
    private tail?: QNode<T>;

    constructor() {
        this.head = undefined;
        this.tail = undefined;
        this.length = 0;
    }

    enqueue(item: T): void {
        const ENode: QNode<T> = { value: item };
        this.length++;
        if (!this.tail) {
            this.tail = ENode;
            this.head = ENode;
            return;
        }
        this.tail.next = ENode;
        this.tail = ENode;
    }
    deque(): T | undefined {
        if (!this.head) {
            return undefined;
        }
        this.length--;
        const savedHead = this.head;
        this.head = this.head.next
        savedHead.next = undefined

        if (this.length === 0) {
            this.tail = undefined;
        }
        return savedHead.value;
    }
    peek(): T | undefined {
        return this.head?.value;
    }
}
