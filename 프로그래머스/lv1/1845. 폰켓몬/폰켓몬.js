const solution = (nums) => {
  const getMonster = parseInt(nums.length / 2);
  const result = [...new Set(nums)].length;
  return getMonster <= result ? getMonster : result;
};