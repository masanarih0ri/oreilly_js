console.log('settimeoutの前:' + new Date());
function f() {
  console.log('これは関数fの中:' + new Date());
}
setTimeout(f, 10*1000); // 10秒後にcallbackとしてfを実行

console.log('setTimeoutの後');
console.log('これもsetTimeoutの後');

