
type inputType = string[] | number[];


class MergeSort {
    private _sortedArray: inputType = [];
    private opertionsCounter = 0;
    get sortedArray(): inputType{
        return this._sortedArray;
    }
    
    constructor(unSortedArray: inputType ) {
        this._sortedArray = this.functionMergesort(unSortedArray);
        console.log(`oprations count = ${this.opertionsCounter}`);
    }

    private merge(left:inputType , right:inputType): inputType {
        if (left.length < 0 && right.length < 0) { 
            return [];
        }
        let mainarray: any = [];
        
        let rightStartCounter = 0;
        let leftStartCounter = 0;
        
        for (let i = leftStartCounter ; i < left.length; i++) {
            for (let j = rightStartCounter; j < right.length; j++){
                this.opertionsCounter++;
               
                if (left[i] < right[j]) {
                    mainarray.push(left[i]);
                    if (j +1  === right.length && i+1 === left.length) {
                        mainarray.push(right[j]);
                       //right  has items but left is empty 
                    } else if (j + 1 < right.length && i + 1 === left.length) {
                        mainarray.push(...right.slice(j,right.length));
                    }
                    
                    break;
                    
                } else if (left[i] > right[j]) { 
                    mainarray.push(right[j]);
                    rightStartCounter++;
                    if (j+1  === right.length && i+1  === left.length) {
                        mainarray.push(left[i]);
                    }
                    //left has items and right is empty  
                    else if (j + 1 === right.length && i + 1 < left.length) {
                        mainarray.push(...left.slice(i, left.length));
                        i = left.length;
                        break;
                    }
                    
                } else if (left[i] === right[j]) { 
                    mainarray.push(left[i]);
                    mainarray.push(right[j]);
                    rightStartCounter++;
                     if (j + 1 === right.length && i + 1 < left.length) {
                        mainarray.push(...left.slice(i + 1, left.length));
                        i=left.length;

                    }
                    else if (j + 1 < right.length && i + 1 === left.length) {
                         mainarray.push(...right.slice(j + 1, right.length));
                         j = right.length;
                    }
                    break;
                }
                
                
            }
            
        }
        return mainarray;
    }

    private functionMergesort(unSortedArray: inputType): inputType  {
        this.opertionsCounter++;
        let arraySize = unSortedArray.length;
        if (arraySize < 2 ) {
            return unSortedArray;
        }
        let splitSize = Math.floor(arraySize / 2);
         //split the main array to left and right
        let left = unSortedArray.slice(0, splitSize);
        let right = unSortedArray.slice(splitSize, arraySize);
        
        return this.merge(this.functionMergesort(left),this.functionMergesort(right));
    }
}

let input = Array.from({ length: 2328 }, () => Math.round(Math.random()*93*13 * 100));

let finalArray = new MergeSort(input).sortedArray;

// if (input.length !== finalArray.length) {
//     console.log('fail');
// } else {
//     console.log('pass');
// }
