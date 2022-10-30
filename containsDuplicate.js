// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.
// 
//  
// 
// Example 1:
// 
// Input: nums = [1,2,3,1]
// Output: true
// Example 2:
// 
// Input: nums = [1,2,3,4]
// Output: false
// Example 3:
// 
// Input: nums = [1,1,1,3,3,4,3,2,4,2]
// Output: true
 
 var containsDuplicate = function(nums) {
    num = 0
    
    nums.sort();
    
    for(i=1; i<nums.length; i++){
        if (nums[i] == nums[i-1]){
            num ++;
        }
    }
    return num != 0;
};

//have an array with nums
//return true if the numb exist more than one otherwise return false
//example [1,2,3,1]=> true