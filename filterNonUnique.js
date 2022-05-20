// Array.prototype.filter()를 사용한 배열에서 중복된 값 전부 제거하는 함수 


const filterNonUnique = arr => arr.filter(i => arr.indexOf(i) === arr.lastIndexOf(i));


filterNonUnique([1, 2, 2, 3, 4, 4, 5]); // [1, 3, 5]
