function removeDuplicates(nums) {
    let i = 0;
    
    for (let j = 1; j < nums.length; j++) {
      if (nums[j] !== nums[i]) {
        i++;
        nums[i] = nums[j];
      }
    }
    
    return i + 1;
  }
  
  const arr = [2, 3, 3, 3, 6, 9, 9];
  const length = removeDuplicates(arr);

  console.log(arr.slice(0, length)); // [2, 3, 6, 9]
  