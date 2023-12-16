/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  let flag = false;
  console.log(str1.length, str2.length)
  if(str1.length != str2.length){
    return false;
  }
  let str1array = [...str1.toLowerCase()]
  let str2array = [...str2.toLowerCase()]
  str1array.sort()
  str2array.sort() 
  console.log(str1array) 
  console.log(str2array) 

  for(let i=0;i<=str1array.length;i++){
    if(str1array[i] == str2array[i]){
      // console.log("Anagram")

      flag = true
    }
    else{
      // console.log("Not an Anagram")
      flag = false
      break;
    }
  }

  if(flag){
    // console.log("Anagram")
    return true
  }
  else{
    // console.log("Not and Anagram")
    return false
  }



















  // for(let i=0;i<str1array.length;i++){
  //   for(let j=0;j<str2array.length;j++){
  //     if(str1array[i] == str2array[j]){
  //        flag = true;
  //        break;
  //     }
  //     else{
  //       flag = false;
  //       break;
  //     }
  //   }
  // }

  // if(flag){
  //   console.log("Anagram")
  //   return true;
  // }
  // else{
  //   console.log("Not an anagram")
  //   return false;
  // }

}



// isAnagram("", "")

module.exports = isAnagram;
