let area = ['A华北', 'A华南', 'B华南', 'A华东', 'B华东', 'A华西', 'C华北', 'C华东'];

function sorts(arr) {
  let drec = ['东', '南', '西', '北'];
  arr.sort((a, b) => {
    if (a.charAt(0) == b.charAt(0)) {
      return drec.indexOf(a.charAt(2)) - drec.indexOf(b.charAt(2));
    } else {
      return a.charCodeAt(0) - b.charCodeAt(0);
    }
  });
  return arr;
}

console.log(sorts(area));

