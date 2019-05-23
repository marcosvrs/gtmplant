export class UniqueValueArray<T> extends Array<T> {
    public push(...items: T[]): number {
        let returnValue: number = -1;
        items.forEach((item: T): void => {
            if (this.indexOf(item) < 0) {
                returnValue = super.push(item);
            }
        });

        return returnValue;
    }
}