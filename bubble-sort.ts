
type inputType = string[] | number[];

class BubbleSort{
    private _sortedArray: inputType =[];
    get sortedArray(): inputType{
        return this._sortedArray;
    }
    
    constructor(unsortedArray: inputType ) {
       this._sortedArray = this.bubbleSort(unsortedArray);
    }
    bubbleSort(arrayToSort:inputType){
        let counter= 0 ;
        let opertionsCounter = 0;
        while (counter < arrayToSort.length) {
            opertionsCounter++
            for(let i=0;i<arrayToSort.length - counter;i++){
                opertionsCounter++;
                if(arrayToSort[i]>arrayToSort[i+1]){
                    //swap
                    let temp = arrayToSort[i];
                    arrayToSort[i] = arrayToSort[i+1];
                    arrayToSort[i+1] = temp;
                }
            }
            
            counter++;
        }
    return arrayToSort;
    }
}
let input = [1, 2, 6, 4,2,4,66,78,0,44,22,42,12];
console.log(new BubbleSort(input).sortedArray);