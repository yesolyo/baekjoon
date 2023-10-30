function solution(name, yearning, photo) {
  let count = 0;
  const answer = [];
  photo.forEach((p) => {
    for (let i = 0; i < name.length; i++) {
      if (p.includes(name[i])) count += yearning[i];
    }
    answer.push(count);
    count = 0;
  });
  return answer;
}