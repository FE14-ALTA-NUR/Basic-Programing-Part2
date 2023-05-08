function mergeArrays(array1, array2) {
    const mergedArray = array1.concat(array2);
  
    return Array.from(new Set(mergedArray));
  }
  
  const array1 = ['anggur', 'nanas', 'melon', 'semangka'];
  const array2 = ['anggur', 'stawberry', 'berry', 'cerry'];
  
  const merged = mergeArrays(array1, array2);
  console.log(merged); 
  