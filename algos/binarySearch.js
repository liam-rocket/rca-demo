function bisectLeft(nums, target) {
  let left = 0;
  let right = nums.length;

  while (left < right) {
    const split = Math.floor((left + right) / 2);
    if (nums[split] < target) {
      left = split + 1;
    } else {
      right = split;
    }
  }
  return left;
}

function search(nums, target) {
  const idx = bisectLeft(nums, target);
  return nums[idx] === target ? idx : -1;
}

const nums = [-1, 0, 3, 5, 9, 12, 14, 16, 18];
const target = 16;

const resp = search(nums, target);

console.log('resp: ', resp);
