// Given two strings s and t, return true if t is an anagram of s, and false otherwise.
// 
// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.
// 
//  
// 
// Example 1:
// 
// Input: s = "anagram", t = "nagaram"
// Output: true
// Example 2:
// 
// Input: s = "rat", t = "car"
// Output: false
//  
// 
// Constraints:
// 
// 1 <= s.length, t.length <= 5 * 104
// s and t consist of lowercase English letters.

var isAnagram = function(s, t) {
    if (s.length != t.length) return false;
    let record = new Array(26).fill(0);
    let base = 'a'.charCodeAt(0);
    for (let i = 0; i < s.length; ++i) {
        ++record[s.charCodeAt(i) - base];
        --record[t.charCodeAt(i) - base];
    }
    return record.every(v => v == 0);
};