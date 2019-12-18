const BinarySearchTree = require('./BinarySearchTree');
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
     start = start === undefined ? 0 : start;
     end = end === undefined ? array.length : end;

    if (start > end) {
        return -1;
    }

    const index = Math.floor((start + end) / 2);
    const item = array[index];


    if (item === value) {
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

    let found = false;
    
    let deweyDecimalArray = [100 , 200, 300, 400, 500, 600, 700, 800, 900];
    let bookTitleArray = ['Argentina', 'Brazil', 'Chile', 'Columbia'];
    
    let deweyIndex = binarySearch(deweyDecimalArray, number);
    let titleIndex = binarySearch(bookTitleArray, title);

    if(deweyIndex && titleIndex){
        found = true;
    }

    if(found){
        return(`${title} was found at the following index : ${titleIndex}`)
    } else {
        return(`${title} was not found`)
    }

    console.log()
}


//console.log(findABook('900', 'Chile'));

//.4 Searching in a BST
// pre-order   :    (parent, left child, right child)
// in-order    :    (left child, parent, right child)
// post-order  :    (left child, right child, parent)
//
//1) Given a binary search tree whose in-order and pre-order traversals are respectively 14 15 19 25 27 35 79 89 90 91
// and 35 25 15 14 19 27 89 79 91 90. What would be its post-order traversal?
//  ** post-order :
//
// 2) The post order traversal of a binary search tree is 5 7 6 9 11 10 8. What is its pre-order traversal?
//

let bst = new BinarySearchTree();

bst.insert(25)
bst.insert(15)
bst.insert(50)
bst.insert(10)
bst.insert(24)
bst.insert(35)
bst.insert(70)
bst.insert(4)
bst.insert(12)
bst.insert(18)
bst.insert(31)
bst.insert(44)
bst.insert(66)
bst.insert(90)
bst.insert(22)

//console.log(bst.preOrder())

//console.log(bst.inOrder())

//console.log(bst.postOrder())

/*


*/

