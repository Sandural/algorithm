/*
* debounce 防抖: 高频事件 N 秒内触发, 只会执行一次, 如果高频事件在 N 秒内多次触发, 则重新计算时间
* throttle 节流: 执行完以后, 节制wait秒
* */

let container = document.getElementById('container')
let count = 1

function debounce(wait) {
  let timer
  return () => {
    timer && clearTimeout(timer)
    timer = setTimeout(() => {
      container.innerHTML = count++
    }, wait)
  }
}

container.onmousemove = debounce()

// ---------------------- 节流 --------------------
let btn = document.getElementById('btn')

let timer = false;
function throttle (wait) {
 return () => {
   if (!timer) {
     console.log('11')
     timer=true
     setTimeout(() => {
       // wait之后, 清除定时器
       timer = false
     }, wait)
   }

 }
}

btn.addEventListener('click',throttle(2000))







