function solution(bridge_length, weight, truck_weights) {
  let count = 0;
  let curWeight = 0;
  const bridge = new Array(bridge_length).fill(0);

  while (truck_weights.length) {
    count++;
    curWeight -= bridge.shift();
    if (curWeight + truck_weights[0] > weight) {
      bridge.push(0);
    } else {
      const curTruck = truck_weights.shift();
      bridge.push(curTruck);
      curWeight += curTruck;
    }
  }
  return count + bridge_length;
}