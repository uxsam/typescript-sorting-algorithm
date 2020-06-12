type inputType = string[] | number[];


class MergeSort {
    private _sortedArray: inputType =[];
    get sortedArray(): inputType{
        return this._sortedArray;
    }
    
    constructor(arraySort: inputType ) {
       this._sortedArray = this.functionMergsort(arraySort);
    }

    private merge(left:inputType , right:inputType): inputType {
        if (left.length < 0 && right.length < 0) { 
            return [];
        }
        let mainarray = ([...left,...right] as inputType);
        mainarray.sort((a: string|number , b : string|number) => {
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

    private functionMergsort (arrayToSplit:inputType): inputType  {
        let arraySize = arrayToSplit.length;
        if (arraySize < 2 ) {
            return arrayToSplit;
        }
        let splitSize = Math.round(arraySize / 2);
         //split the main array to left and right
        let left = arrayToSplit.slice(0, splitSize);
        let right = arrayToSplit.slice(splitSize, arraySize);
        return this.merge(left,right);
    }
}
let input: inputType = ['janet j','janet a','sam m', 'jeena m', 'luis b','raman v'];
console.log(new MergeSort(input).sortedArray);
input = [1, 2, 6, 4,2,4,66,78,0,44,22,42,12];
console.log(new MergeSort(input).sortedArray);
