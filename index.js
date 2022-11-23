const arr = [3, 'alexa lexaa', 'himalaya yalamiha', 'data teda'];

function checkIsValid() {
  for (let j = 1; j < arr.length; j++) {
    let sData = arr[j];
    const split = sData.split(' ');
    let temp1 = {};
    let temp2 = {};

    let isSame = false;
    for (let i = 0; i < split[0].length; i++) {
      if (split[0].length === split[1].length) {
        temp1[split[0][i]] = (temp1[split[0][i]] || 0) + 1;
        temp2[split[1][i]] = (temp2[split[1][i]] || 0) + 1;
      } else {
        isSame = false;
        return;
      }
    }
    for (let ele in temp1) {
      if (temp1[ele] === temp2[ele]) {
        isSame = true;
      } else {
        isSame = false;
        break;
      }
    }
    console.log(isSame);
  }
}

checkIsValid();
