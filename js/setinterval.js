const start = new Date();
let intervalCount = 0;

const intervalId = setInterval(() => {
  let now = new Date(); //現在時刻を得る
  if(now.getMinutes() !== start.getMinutes() || ++intervalCount > 10) {
    return clearInterval(intervalId);
  }
  console.log(`${intervalCount}: ${now}`)
}, 5 * 1000);
//  intervalIdは5秒ずつ動作する関数