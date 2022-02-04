import { onRevocateMsg } from './msgsEventListeners'

export function onSysMsg(sysMsg) {
  console.log('收到系统消息', sysMsg)
  switch (sysMsg.type) {
    // 对方消息撤回
    case 'deleteMsg':
      if (sysMsg.scene === 'p2p') {
        sysMsg.sessionId = `p2p-${sysMsg.from}`
      } else {
        sysMsg.sessionId = `team-${sysMsg.to}`
      }
      onRevocateMsg(null, sysMsg)
      break
  }
}

export function onOfflineCustomSysMsgs(sysMsgs) {
  // 同样的逻辑，不过这里是个数组
  console.log('收到离线自定义系统通知', sysMsgs)
}

export function onSendCustomSysMsgDone(sysMsg) {
  // 收到自定义消息
  console.log('收到自定义消息')
  console.log(sysMsg)
}
