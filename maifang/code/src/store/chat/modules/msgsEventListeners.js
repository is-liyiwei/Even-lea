import store from '../../'

export function formatMsg(msg) {
  const nim = store.state.nim
  // 这里判断是否是机器人，如果不是直接返回，这个if机器人先不管
  if (msg.type === 'robot') {
    if (msg.content && msg.content.flag === 'bot') {
      if (msg.content.message) {
        msg.content.message = msg.content.message.map(item => {
          switch (item.type) {
            case 'template':
              item.content = nim.parseRobotTemplate(item.content)
              break
            case 'text':
            case 'image':
            case 'answer':
              break
          }
          return item
        })
      }
    }
  }
  return msg
}

export function onRoamingMsgs(obj) {
  console.log('收到漫游消息', obj)
}

export function onOfflineMsgs(obj) {
  console.log('收到离线消息', obj)
}

export function onMsg(msg) {
  console.log('收到消息', msg)
}

export function onSendMsgDone(error, msg) {
  if (error) {
    // 被拉黑
    if (error.code === 7101) {
      msg.status = 'success'
      // alert(error.message)
    } else {
      // alert(error.message)
    }
  }
  onMsg(msg)
}

// 消息撤回
export function onRevocateMsg(error, msg) {
  const nim = store.state.nimInstance.nim
  // 官方返回的状态码
  if (error) {
    if (error.code === 508) {
      store._vm.$dialog
        .alert({
          message: '超过2分钟的消息，不能被撤回'
        })
        .then(() => {})
      // alert('发送时间超过2分钟的消息，不能被撤回')
    } else {
      // alert(error)
    }
    return
  }
  let tip = ''
  if (msg.from === store.state.nimInstance.nim.account) {
    tip = '你撤回了一条消息'
  } else {
    tip = '对方撤回了一条消息'
  }
  // 发送消息方法
  nim.sendTipMsg({
    isLocal: true,
    scene: msg.scene,
    to: msg.to,
    tip,
    time: msg.time,
    done: function sendTipMsgDone(error, tipMsg) {
      // 调用成功回调
      console.log(tipMsg)
    }
  })
}
