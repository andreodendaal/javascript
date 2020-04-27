function rangeOfNumbers(startNum, endNum) {
    console.log(startNum, endNum)
    if (endNum == startNum) {
      return [endNum];
    } else {
      const countArray = rangeOfNumbers(startNum, endNum - 1);
      countArray.push(endNum);
      console.log(countArray)
      return countArray;
    }    
};

  console.log(rangeOfNumbers(1, 5)) 