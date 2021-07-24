// 监听页面事件
self.addEventListener('message', event => {
  console.log(event, '=== 页面和进程通信 ===')
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting()
  }
})
