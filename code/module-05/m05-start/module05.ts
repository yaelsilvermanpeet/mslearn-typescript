/*  Module 5: Declare and instantiate classes in TypeScript
    Lab Start  */

/*  EXERCISE 1 */

class BuildArray {
    // TODO Define the properties
    private _items: number;
    private _sortOrder: 'ascending' | 'descending';

    // TODO Define the constructor
    constructor(items:number, sortOrder: 'ascending' | 'descending') {
        this._items = items;
        this._sortOrder = sortOrder;
    }
    // TODO Define the accessors
    get items() {
        return this._items;
    }
    set items(items) {
        this._items = items;
    }

    get sortOrder() {
        return this._sortOrder;
    }
    set sortOrder(sortOrder) {
        this._sortOrder = this.sortOrder;
    }
    // TODO Define the methods



/*  sortDescending is a comparison function that tells the sort method how to sort numbers
    in descending order. */
private sortDescending = (a: number, b: number) => {
    if (a > b) {
        return -1;
    } else if (b > a) {
        return 1;
    } else {
        return 0; }
}

/*  sortAscending is a comparison function that tells the sort method how to sort numbers 
    in ascending order. */
private sortAscending = (a: number, b: number) => {
    if (a > b) {
        return 1;
    } else if (b > a) {
        return -1;
    } else {
        return 0;
    }
}

/*  buildArray builds an array of unique random numbers containing the number of items 
    based on the number passed to it. The sortOrder parameter determines whether to sort 
    the array in ascending or descending order. */
buildArray(): number[] {
    let randomNumbers: number[] = [];
    let nextNumber: number;
    for (let counter = 0; counter < this.items; counter++) {
        nextNumber = Math.ceil(Math.random() * (100 - 1));
        if (randomNumbers.indexOf(nextNumber) === -1) {
            randomNumbers.push(nextNumber);
        } else {
            counter--;
        }
    }
    if (this._sortOrder === 'ascending') {
        return randomNumbers.sort(this.sortAscending);
    } else {
        return randomNumbers.sort(this.sortDescending);
    }
}

}

/*  TODO: Instantiate the BuildArray objects. */

let testArray1 = new BuildArray(12, 'ascending');
let testArray2 = new BuildArray(8, 'descending');
console.log(testArray1.buildArray());
console.log(testArray2.buildArray());
