
class MergeSort {
    private _sortedArray: (number|string)[] =[];
    get sortedArray(): (number|string)[]{
        return this._sortedArray;
    }
    
    constructor(arraySort: (number|string)[]) {
        this._sortedArray = this.functionMergsort(arraySort);
    }

    private merge<T>(left: Array<T>, right: Array<T>) {
        if (!left && !right)
            return [];
        let mainarray = left.concat(right);
        mainarray.sort((a, b) => {
            if (a > b) {
                return 1
            }
            if (a < b) {
                return -1;
            }
            return 0;
        });
        return mainarray;
    }

    private functionMergsort<T>(arrayToSplit: Array<T>): Array<T> {
        let arraySize = arrayToSplit.length;
        if (arraySize < 2) {
            return arrayToSplit;
        }
        let splitSize = Math.round(arraySize / 2);
         //split the main array to left and right
        let left = arrayToSplit.slice(0, splitSize);
        let right = arrayToSplit.slice(splitSize, arraySize);
        return this.merge(this.functionMergsort(left), this.functionMergsort(right));
    }
}
console.log(new MergeSort(input).sortedArray);
