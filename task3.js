// // 比特计数
// /**
//  * @param {number} num
//  * @return {number[]}
//  */
// var countBits = function(num) {
//     let numberArr = [];
//     // 转二进制
//     /**
//      * @description: 
//      * @param {number} 
//      * @return: number
//      */
//     var bites = function(arg){
//         let result = arg;
//         let resultCount = 0;
//         result = arg.toString(2).split('');
        
//         for(let i = 0; i < result.length; i++){
//             if(result[i]=='1') resultCount++;
//         }

//         return resultCount;
//     }
//     //循环
//     for(let i = 0; i <= num; i++){
//         numberArr[i] = bites(i);
//     }
//     return numberArr;
// };


// /**
//  * @param {number} n
//  * @return {number[][]}
//  */
// //螺旋矩阵
// var generateMatrix = function(n) {
//     let resArr = [];
//     for(let i = 0; i < n; i++){
//         resArr[i] = [];
//     }

//     let c = 1, j = 0;
//     while (c <= n * n) {
//         for (let i = j; i < n - j; i++){
//                 resArr[j][i] = c++;
//             }
//         for (let i = j + 1; i < n - j; i++){
//                 resArr[i][n - j - 1] = c++;
//             }
//         for (let i = n - j - 2; i >= j; i--){
//                 resArr[n - j - 1][i] = c++;
//             }
//         for (let i = n -j - 2; i > j; i--){
//                 resArr[i][j] = c++;
//             }
//         j++;
//     }

//     return resArr;
// };

// console.log(generateMatrix(4))

// 求子集 问题
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// var subsets = function(nums) {
//     let resArr = [[]];
//     for(let i=0;i<nums.length;i++){
//         let len = resArr.length;
//         for(let j=0;j<len;j++){
//             resArr.push([...resArr[j],nums[i]])
//         }
//     }
//     /* 
//     task1 resArr = [] [1]
//     task2 resArr = [] [1]  [2] [1,2]
//     task3 resArr = [] [1]  [2] [1,2]  [3] [2,3] [1,2,3]
//      */
//     return resArr;
// };

// console.log(subsets([1,2,3]))

/**
 * @param {number} n
 * @return {number}
 * 动态规划问题
 */
// var climbStairs = function(n) {
//     if(n===0||n===1) return 1;
//     if(n===2) return 2;
//     let res = [1,2];

//     for(let i = 2; i<n; i++){
//         res[i] = res[i-1]+res[i-2];
//     }

//     return res[n-1];
// };

// console.log(climbStairs(0))

/**
 * @param {number} n
 * @return {number}
 */
// var tribonacci = function(n) {
//     if(n===0) return 0;
//     if(n===1||n===2) return 1;
//     let res = [0,1,1];
    
//     for(let i = 3; i <= n;i++){
//         res[i] = res[i-2] + res[i-1] + res[i-3];
//     }

//     return res[n];
// }

// console.log(tribonacci(6))

/**
 * @description: 求全排列
 * @param {type} {array} nums
 * @return: array
 */

//  var permute = function(nums) {
//     nums.sort((pre,next)=> pre - next);
//     let result = [];
//     /**
//      * @description: change element's index
//      * @param {type} {number[]} nextArr {number} pre next
//      * @return: null
//      */
//     let swep = function(nextArr,pre,next){
//         let temp = nextArr[pre];
//         nextArr[pre] = nextArr[next];
//         nextArr[next] = temp;
//     }
//     /**
//      * @description: add element to result
//      * @param {type} {number[]} arr {number} start
//      * @return: 
//      */
//     let fn = function(arr,start){
//         if(start === arr.length - 1) return result.push(arr);
//         let len = arr.length;
//         for(let i = start; i < len; i++){
//             swep(arr,start,i);
//             let newA = [...arr];
//             fn(newA,start+1);
//         }
//     }
//     fn(nums,0)

//     return result;
// };

//  console.log(permute([1,3,2]))

/**
 * @description: 求全排列||
 * @param {number[]} nums
 * @return {number[][]}
 */

//这样写效率太低了
// var permuteUnique = function(nums) {
//     nums.sort((pre,next)=> pre - next);
//     let result = [];
//     /**
//      * @description: change element's index
//      * @param {type} {number[]} nextArr {number} pre next
//      * @return: null
//      */
//     let swep = function(nextArr,pre,next){
//         let temp = nextArr[pre];
//         nextArr[pre] = nextArr[next];
//         nextArr[next] = temp;
//     }
//     /**
//      * @description: add element to result
//      * @param {type} {number[]} arr {number} start
//      * @return: 
//      */
//     let fn = function(arr,start){
//         if(start === arr.length - 1) return result.push(arr);
//         let len = arr.length;
//         for(let i = start; i < len; i++){
//             swep(arr,start,i);
//             let newA = [...arr];
//             fn(newA,start+1);
//         }
//     }
//     fn(nums,0);
//     //实现多维数组去重，装逼可以效率不行
//     result = [...new Set(result.map(key => key = key.join(',')))].map(key => key.split(',').map(key=> +key));

//     return result;
// };

// var permuteUnique = function(nums) {
//     nums.sort((pre,next)=> pre - next);
//     let result = [];
//     /**
//      * @description: change element's index
//      * @param {type} {number[]} nextArr {number} pre next
//      * @return: null
//      */
//     let swep = function(nextArr,pre,next){
//         let temp = nextArr[pre];
//         nextArr[pre] = nextArr[next];
//         nextArr[next] = temp;
//     }
//     /**
//      * @description: add element to result
//      * @param {type} {number[]} arr {number} start
//      * @return: 
//      */
//     let fn = function(arr,start){
//         if(start === arr.length - 1) return result.push(arr);

//         let len = arr.length;
//         let map = new Map();

//         for(let i = start; i < len; i++){
//             // 解决重复问题
//             if(!map.get(arr[i])){
//                 map.set(arr[i],true);
//                 swep(arr,start,i);
//                 let newA = [...arr];
//                 fn(newA,start+1);
//             }
//         }
//     }
//     fn(nums,0);

//     return result;
// };

// console.log(permuteUnique([1,1,2,2]))

/**
 * @description 784. 字母大小写全排列
 * @param {string} S
 * @return {string[]}
 */
// var letterCasePermutation = function(S) {
//     let res = [];
//     let Arr = S.split('');
//     let order = [];
    
//     Arr.forEach((key,index)=>{
//         if(+key < 10) return;
//         order.push(index);
//     });

//     let leng = order.length;

//     let fn = function(start,arr){
//         if(start >= leng) return res.push(arr.join(''));

//         arr[order[start]]=arr[order[start]].toLocaleLowerCase();
//         fn(start+1,[...arr]);
//         arr[order[start]]=arr[order[start]].toLocaleUpperCase();
//         fn(start+1,[...arr]);
//     }

//     fn(0,Arr);

//     return res;
// };

// console.log(letterCasePermutation('12sA'))

/**
 * Definition for singly-linked list.
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
// function ListNode(val) {
//     this.val = val;
//     this.next = null;
// }
// let head = new ListNode(1);
// head.next = new ListNode(2);

// var reverseList = function(head) {
//     let node = head;
//     let resNode = head;
//     let arr = [];

//     while(1){
//         if(!node) break;
//         arr.push(node.val);
//         node = node.next;
//     }

//     arr.reverse();
    
//     arr.forEach((key,index)=>{
//         resNode.val = arr[index]
//         resNode = resNode.next;
//     })
//     return head;
// };

// reverseList(head)


/**
 * @description 两个数组求交集
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
// var intersection = function(nums1, nums2) {
//     let res = nums1.filter(elm => nums2.includes(elm));
//     res = [...new Set(res)]
//     return res
// };

// console.log(intersection([1,2,2,1],[2,2]))

/**
 * 求两个数组交集||
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
// var intersect = function(nums1, nums2) {
//     let res = nums1.filter(elm => {
//         let index = nums2.indexOf(elm);
//         if(index !== -1){
//             nums2.splice(index,1);
//             return true
//         }
//     });

//     return res
// };

// console.log(intersect([1,2,2,1],[2]))

/**
 * 按奇偶排序数组 II
 * @param {number[]} A
 * @return {number[]}
 */
// var sortArrayByParityII = function(A) {
//     let even = 0;
//     let odd = 1;
//     let res = [];

//     A.forEach(key=>{
//         if(key%2===0){
//             res[even] = key;
//             even = even + 2;
//         } else {
//             res[odd] = key;
//             odd = odd + 2;
//         }
//     })

//     return res
// };

// console.log(sortArrayByParityII([4,2,5,7]))

/**
 * @param {number[]} A
 * @return {number}
 */
// var sumSubarrayMins = function(A) {
//     let res = 0;
    
//     return res;
// };

// sumSubarrayMins([1,2,3,4])

/**
 * @description: 扑克牌问题 1.0
 * 在纸上面写出了结果以后强行倒推的
 * @param {type} {number[]} A
 * @return: {number[]} res
 */

// var sortPoke = function(A){
//     let res = [];

//     let temp1 = A.splice(0,Math.floor(A.length/2)+1);
//     let temp2 = A.splice(0,Math.floor(A.length/2));
//     let temp3 = A.splice(0,Math.floor(A.length/2));
    
//     let fn = function(Arr1,Arr2){
//         let resA = [];
//         Arr1.forEach(key=>{
//             resA.push(key);
//             if(Arr2.length > 0) resA.push(Arr2.shift());
//         })
//         return resA;
//     }
    
//     res = fn(temp1,fn(fn(A,temp3),temp2))

//     console.log(res)
//     return res;
// }

// sortPoke([1,2,3,4,5,6,7,8,9,10,11,12,13])



// 后面发现先写出正序方法，之后将队列方法改为栈方法，可以快速解决

// /**
//  * @description: 扑克牌问题正序
//  * @param {type} {number[]} A
//  * @return: {number[]} res
//  */

// var sortPokeOrder = function(A){
//     let res = [];
//     let length = A.length;

//     while(length > 0){
//         res.push(A.shift());
//         A.push(A.shift());
//         length--;
//     }

//     console.log('这是正序',res);
    
//     return res;
// }

// sortPokeOrder([1, 12, 2, 8, 3, 11, 4, 9, 5, 13, 6, 10, 7])

// /**
//  * @description: 扑克牌问题倒序
//  * @param {type} {number[]} A
//  * @return: {number[]} res
//  */

// var sortPoke = function(A){
//     A.reverse();
//     let res = [];
//     let length = A.length;

//     while(length > 0){
//         res.unshift(A.pop());
//         A.unshift(A.pop());
//         length--;
//     }
//     res.reverse();

//     console.log('这是倒叙',res)
//     return res;
// }

// sortPoke([1, 12, 2, 8, 3, 11, 4, 9, 5, 13, 6, 10, 7])


/**
 * @description: 网上找的大神解法,洗牌问题
 * @param {type} 
 * @return: 
 */

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]

// function sort(arr) {
//     let pre = []
    
//     while (arr.length > 1) {
//         pre.push(arr.pop())
//         pre.push(pre.shift())
//     }

//     pre.push(arr.pop())
//     console.log(pre.reverse())
// }
// sort(arr)

// let fn = (...arg)=>{
//   console.log(...arg)
// }
// // function
// // function 是你想要在到期时间(delay毫秒)之后执行的函数。
// // code
// // 这是一个可选语法，你可以使用字符串而不是function ，在delay毫秒之后编译和执行字符串 (使用该语法是不推荐的, 原因和使用 eval()一样，有安全风险)。
// // delay 可选
// // 延迟的毫秒数 (一秒等于1000毫秒)，函数的调用会在该延迟之后发生。如果省略该参数，delay取默认值0，意味着“马上”执行，或者尽快执行。不管是哪种情况，实际的延迟时间可能会比期待的(delay毫秒数) 值长，原因请查看Reasons for delays longer than specified。
// // param1, ..., paramN 可选
// // 附加参数，一旦定时器到期，它们会作为参数传递给function 

// setTimeout(fn,1,1,1,2,3)