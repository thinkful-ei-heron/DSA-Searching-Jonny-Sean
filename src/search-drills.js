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
//  ** post-order : [ 14, 15, 19, 25, 27, 79, 89, 90, 91, 35 ]
//
// 2) The post order traversal of a binary search tree is 5 7 6 9 11 10 8. What is its pre-order traversal?
// ** pre-order : [ 8, 5, 6, 7, 9, 10, 11 ]



function main4(){
    let tomato = new BinarySearchTree();
    tomato.insert(35,35);
    tomato.insert(25,25);
    tomato.insert(79,79);
    tomato.insert(27,27);
    tomato.insert(15,15);
    tomato.insert(14,14);
    tomato.insert(19,19);
    tomato.insert(89,89);
    tomato.insert(91,91);
    tomato.insert(90,90);
    console.log('Pre-order: ',tomato.dfsPre());
    console.log('In-order: ',tomato.dfs());
    console.log('Post-order: ',tomato.dfsPost());


    let potato = new BinarySearchTree();
    potato.insert(8,8);

    potato.insert(6,6);
    potato.insert(9,9);
    potato.insert(7,7);
    potato.insert(5,5);
    potato.insert(11,11);
    potato.insert(10,10);
    console.log('Pre-order: ',potato.dfsPre());
    console.log('In-order: ',potato.dfs());
    console.log('Post-order: ',potato.dfsPost());
}
//main4();


//.6 Find the Next Commanding Officer
function bfs(tree, values = []) {
    const queue = new Queue(); // Assuming a Queue is implemented (refer to previous lesson on Queue)
    const node = tree;
    queue.enqueue(node);
    while (queue.length) {
        const node = queue.dequeue(); //remove from the queue
        values.push(node.value); // add that value from the queue to an array

        if (node.left) {
            queue.enqueue(node.left); //add left child to the queue
        }

        if (node.right) {
            queue.enqueue(node.right); // add right child to the queue
        }
    }

    return values;
}
// [ 'Captain Picard',
//   'Commander Riker',
//   'Commander Data',
//   'Lt. Cmdr.  Worf ',
//   'Lt. Cmdr. LaForge ',
//   'Lt. Cmdr. Crusher',
//   'Lieutenant security-officer',
//   'Lieutenant Selar' ]
function main6(){
    let starshipUSSEnterprise = new BinarySearchTree();
    starshipUSSEnterprise.insert(10,'Captain Picard');
    starshipUSSEnterprise.insert(7,'Commander Riker');
    starshipUSSEnterprise.insert(11,'Commander Data');
    starshipUSSEnterprise.insert(12,'Lt. Cmdr. Crusher');
    starshipUSSEnterprise.insert(13,'Lieutenant Selar');
    starshipUSSEnterprise.insert(8,'Lt. Cmdr. LaForge ');
    starshipUSSEnterprise.insert(6,'Lt. Cmdr.  Worf ');
    starshipUSSEnterprise.insert(5,'Lieutenant security-officer');
    console.log('Ranking Order: ',bfs(starshipUSSEnterprise));
}
//main6();


//.7 Max Profit
function maxProfit(tree, values=[1000,0]){
    if(tree) {
        if(values[0] >= tree.value){
            values[0] = (tree.value);
        } else if(values[1] <= tree.value)
            values[1] = (tree.value);

        if (tree.left) {
            maxProfit(tree.left, values);
        }
        if (tree.right) {
            maxProfit(tree.right, values);
        }
    }
    return values[1] - values[0];
}
//                  128
//                /
//               97
//                 \
//                  121
//                 /   \
//                98   123
//               /  \
//              97  105

function main7(){
    let profits = new BinarySearchTree();
    profits.insert(128,128);
    profits.insert(97,97);
    profits.insert(121,121);
    profits.insert(123,123);
    profits.insert(98,98);
    profits.insert(97,97);
    profits.insert(105,105);

    console.log(maxProfit(profits));
}
main7();
