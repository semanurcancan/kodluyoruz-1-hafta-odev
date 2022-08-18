let arr1 = ['2', 'a', '3', 3, 4, 3, 5, 5]
let arr2 = ['c', 'c', 'h', 1, 1, 1, 4]
let arr3 = [
    { name: 'ali', id: 221 },
    { name: 'veli', id: 343 },
    { name: 'konya', id: 333 },
    { name: 'ali', id: 664 },
    { name: 'selim', id: 112 }
]
let arr4 = [1, 1, 1, 4, 5, 5, 3, 2]



//----------SORU1-------------------------------------
function shiftA(array){
    console.log(array.unshift("a"));
}
shiftA(arr1)
//['a', '2', 'a', '3', 3, 4, 3, 5, 5]

//---------SORU2--------------------------------------
console.log(arr1.push(6));
//['2', 'a', '3', 3, 4, 3, 5, 5,6]

//---------SORU3--------------------------------------
console.log(arr1.pop());
//['2', 'a', '3', 3, 4, 3, 5]


//---------SORU4--------------------------------------
console.log(arr1.shift());
//['a', '3', 3, 4, 3, 5, 5]




//---------SORU5--------------------------------------
arr1 = arr1.concat(arr2);
console.log(arr1);
console.log(...arr1, ...arr2);
//(15) ['2', 'a', '3', 3, 4, 3, 5, 5, 'c', 'c', 'h', 1, 1, 1, 4]


//---------SORU6--------------------------------------
const checkIfContains = (arr, el) => { return arr.includes(el)};
console.log(checkIfContains(arr2, "h"));
//true


//---------SORU7---------------------------------------
console.log(arr2.indexOf("h"));
//2




//---------SORU8---------------------------------------
arr2 = arr2.slice(0,3)
console.log(arr2);

console.log(arr2.splice(0,4));
//(3) ['c', 'c', 'h']
//(3) [1, 1, 4]


//----------SORU9-------------------------------------- 
    function sumNumbers(array){
        let sum=0;
        for(let i=0; i<array.length- 1 ; i++){
            let number = array[i]
            if(Number.isNaN(number)){
                sum += number
            }
        }
        return sum;
    }
    let result = sumNumbers(arr1);
    console.log(result);
//20





//--------------SORU10---------------------------------
const convertToStr = (array) => array.map(String);
const convert = convertToStr(arr1);
console.log(convert);

//(8) ['2', 'a', '3', '3', '4', '3', '5', '5']




//--------------SORU11---------------------------------
console.log(arr3.find(el=> el.id ===221));
//{name: 'ali', id: 221}


//--------------SORU12----------------------------------
console.log(arr3.filter(el=> el.name== "ali"));
//0: {name: 'ali', id: 221}
//1: {name: 'ali', id: 664}
//length: 2



//--------------SORU13----------------------------------
const sumİd = arr3.reduce((el, i)=> el+i.id,0);
console.log(sumİd);
//1673




//YÖNERGE:Her sorunun cevabını console.log ile yazıdırın.



