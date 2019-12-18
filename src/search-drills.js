/*

3, 5,    6, 8, 11,12,    14, 15, 17, 18

Given this sorted list and using a binary search algorithm, it will take 3 recursive calls to find the number 8.
The first call will split the array of 10 elements in half, and check if the value is greater than, less than, or equal to
the element at index = 5 (12). 5 divided by 2 is 2.5, and when Math.floor(2.5) is performed, the resultant is 2.
The element at index 2 is 6, and the item we are looking for is greater than 6. At this point, element 2 is the start,
element 5 is the end. Math.floor(5+2)=3, so the array index of 3 is checked, where we have the item we are looking for

To find the number 16 with the above list of 10 elements, initally the item is checked against array index 5 (12).
16 is greater, therefore the next midpoint to index is at Math.floor((5+10)/2), since what we are looking for is in 
the last half of the array. The result is 7, therefore we now check to see what is at index 7 (15). The item we
are searching for is greater than what we found at index 7, so we perform Math.floor((7+10)/2) and search the item at 
index 8. Index 8 contains the value of 17, so we can be sure that the value of 16 is not in our sorted array because
index 7 contained 15, and index 8 contained 17. There is no possibility of 16 existing here.


*/
function binarySearch(array, value, start, end) {
    var start = start === undefined ? 0 : start;
    var end = end === undefined ? array.length : end;

    if (start > end) {
        return -1;
    }

    const index = Math.floor((start + end) / 2);
    const item = array[index];

    console.log(start, end);
    if (item == value) {
        return index;
    }
    else if (item < value) {
        return binarySearch(array, value, index + 1, end);
    }
    else if (item > value) {
        return binarySearch(array, value, start, index - 1);
    }
};



function findABook(number, title){

    let found = false
    
    let deweyDecimalArray = [100 , 200, 300, 400, 500, 600, 700, 800, 900]
    let bookTitleArray = ['Argentina', 'Brazil', 'Chile', 'Columbia']
    
    let deweyIndex = binarySearch(deweyDecimalArray, number)
    let titleIndex = binarySearch(bookTitleArray, title)

    console.log(titleIndex)
    if(deweyIndex && titleIndex){
        found = true;
        console.log(found)
    }

    if(found){
        return(`${title} was found at the following index : ${titleIndex}`)
    } else {
        return(`${title} was not found`)
    }

}

console.log(findABook('900', 'Chile'))