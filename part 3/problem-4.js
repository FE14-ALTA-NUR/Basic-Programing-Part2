function calculateMean(nums) {
    const sum = nums.reduce((acc, curr) => acc + curr, 0);
    return sum / nums.length;
  }
  
  function calculateMedian(nums) {
    const n = nums.length;
    const middleIndex = Math.floor(n / 2);
  
    if (n % 2 === 0) {
      // jika jumlah elemen genap, ambil nilai rata-rata dari dua nilai tengah
      return (nums[middleIndex - 1] + nums[middleIndex]) / 2;
    } else {
      // jika jumlah elemen ganjil, ambil nilai tengah
      return nums[middleIndex];
    }
  }
  
  function calculateMeanAndMedian(nums) {
    const mean = calculateMean(nums);
    const median = calculateMedian(nums);
  
    return { mean, median };
  }
  
  const arr = [1, 2, 3, 4, 5];
  const result = calculateMeanAndMedian(arr);
  
  console.log(`Mean: ${result.mean}`);
  console.log(`Median: ${result.median}`);
  