/*
* 了解 事件循环 有助于理解 异步问题.
* 1. JavaScript 中, 任务被分为 MacroTask 和 MicroTask 两种.
* MacroTask: script(整体代码), setTimeout, setInterval, setImmediate(node独有), I/O, UI rendering
* MicroTask: process.nextTick(node独有),Promise
*
* 2. 不同类型的任务会进入对应的 event queue, 比如 setTimeout 和 setInterval 会进入相同的 event queue
*
* 3. 需要注意总的执行顺序: 同步代码 --> microTask --> macroTask, task队列严格按照 "先进先出" 的顺序执行.
*
* 4. 事件循环的顺序, 决定了 jS 代码执行的顺序.
*
* 5. 进入整体代码(宏任务)后，开始第一次循环, 接着执行所有的微任务。
* 然后再次从宏任务开始，找到其中一个任务队列执行完毕，再执行所有的微任务。
* 每执行完一个 task 都会检查 microTask 队列是否为空, 如果不为空则会一次性执行完所有的 microTask.
* */


async function async1 () {
  console.log("async1 start");
  await async2();
  console.log("async1 end")
}

async function async2 () {
  console.log("async2");
}

console.log("script start")

setTimeout(function() {
  console.log("setTimeout")
}, 0);

async1()

new Promise(function(resolve) {
  console.log("promise1")
  resolve()
}).then(function() {
  console.log("promise2")
})

console.log("script end")
