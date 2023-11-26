let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath, "utf-8").trim().split("\n");

const getUserData = (inputData) => {
  const userList = [];
  for (let i = 1; i < inputData.length; i++) {
    const [age, name] = inputData[i].split(" ");
    userList.push([Number(age), name]);
  }
  return userList;
};

const getSortedDistinctUsers = (userList) => {
  const sortedUsers = [...userList].sort((a, b) => a[0] - b[0]);
  return sortedUsers;
};

const userData = getUserData(input);
const sortedUsers = getSortedDistinctUsers(userData);

let answer = "";
for (let i = 0; i < sortedUsers.length; i++) {
  answer += sortedUsers[i][0] + " " + sortedUsers[i][1] + "\n";
}
console.log(answer);
