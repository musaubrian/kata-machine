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
        // Check if tails exists
        // if not create a new node using the item
        // else set the tails nxt pointer to point to the new node
        // make the new node the new tail
        const newNode = { value: item } as QNode<T>;
        this.length++;
        if (!this.tail) {
            this.head = newNode;
            this.tail = newNode;
        }
        this.tail.next = newNode;
        this.tail = newNode;
    }
    deque(): T | undefined {
        // Check if head exists
        // if it exists reduce length
        // save the current head value
        // modify head to be the next node
        if (!this.head) {
            return undefined;
        }
        this.length--;
        const head = this.head;
        this.head = this.head.next;

        return head.value;
    }
    peek(): T | undefined {
        return this.head?.value;
    }
}
