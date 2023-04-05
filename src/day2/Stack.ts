type SNode<T> = {
    value: T;
    prev?: SNode<T>;
    next?: SNode<T>;
};
export default class Stack<T> {
    public length: number;
    private head?: SNode<T>;

    constructor() {
        this.head = undefined;
        this.length = 0;
    }

    push(item: T): void {
        const newNode = { value: item } as SNode<T>;
        this.length++;
        if (!this.head) {
            this.head = newNode;
            return;
        }
        newNode.prev = this.head;
        this.head = newNode;
    }
    pop(): T | undefined {
        // Stop from getting to -1
        this.length = Math.max(0, this.length - 1);

        if (this.length === 0) {
            const head = this.head;
            this.head = undefined;
            return head?.value;
        }

        const head = this.head as SNode<T>;
        this.head = head.prev;
        return head.value;
    }
    peek(): T | undefined {
        return this.head?.value;
    }
}
