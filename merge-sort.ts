type inputType = string[] | number[];


class MergeSort {
    private _sortedArray: inputType = [];
    private opertionsCounter = 0;
    get sortedArray(): inputType{
        return this._sortedArray;
    }
    
    constructor(unSortedArray: inputType ) {
        this._sortedArray = this.functionMergesort(unSortedArray);
        console.log(this.opertionsCounter++);
    }

    private merge(left:inputType , right:inputType): inputType {
        if (left.length < 0 && right.length < 0) { 
            return [];
        }
        let mainarray :(string|number) =[];
        let rightStartCounter = 0;
        for (let i=0; i < left.length; i++) {
            for (let j = rightStartCounter; j < right.length; j++){

                //[1, 2, 6, 4,2,4,  66,78,0,44,22,42,12];
                if (left[i] <  right[j]) {
                    mainarray.push(left[i]);
                    //end of array
                    if (i === left.length-1  ) {
                        mainarray.push(...right.slice(j,right.length));
                    }
                    break;
                } else if (left[i] >  right[j]) { 
                    mainarray.push(right[j]);
                    rightStartCounter++;
                    
                     if(j === right.length - 1){
                         mainarray.push(...left.slice(i, left.length));
                    }
                    
                }
                else if (left[i] === right[j]) { 
                    mainarray.push(left[i]);
                    mainarray.push(right[j]);
                    rightStartCounter++;
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

let input = [1, 2, 6, -1, 0, 77, 64, 4, 4];

console.log(new MergeSort(input).sortedArray);
