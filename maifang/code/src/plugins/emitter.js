function _broadcast(componentName, eventName, params) {
  this.$children.forEach(child => {
    var name = child.$options.name

    if (name === window.vm_identifierName) {
      child.$emit.apply(child, [eventName].concat(params))
    } else {
      _broadcast.apply(
        child,
        [componentName, eventName].concat([params])
      )
    }
  })
}

let componentList = []

function _getDeepChildrenList(list) {
  list.forEach(child => {
    if (
      child.$children &&
      Array.isArray(child.$children) &&
      child.$children.length !== 0
    ) {
      _getDeepChildrenList(child.$children)
    } else {
      componentList.push(child)
    }
  })
  return componentList
}

function _getActiveEventComponent(componentName, eventName) {
  let activeEventComponent = null
  this.$children.forEach(child => {
    var name = child.$options.name

    if (name === componentName) {
      activeEventComponent = child
    }
  })
  if (activeEventComponent) {
    return activeEventComponent
  } else {
    // 这个方法在组件中是使用会获取不到deep组件的实例，所以要用这个方法深度获取
    componentList = []
    let list = _getDeepChildrenList(this.$children)
    activeEventComponent = list.find(
      v => v.$options.name === componentName
    )
    return activeEventComponent
  }
}

export default {
  methods: {
    appSetEmitterIdentifierName(identifierName, eventName) {
      window.vm_identifierName = identifierName
      window.vm_eventName = eventName
    },
    appDispatch(componentName, eventName, params) {
      var parent = this.$parent || this.$root
      var name = parent.$options.name

      while (parent && (!name || name !== componentName)) {
        parent = parent.$parent

        if (parent) {
          name = parent.$options.name
        }
      }
      if (parent) {
        parent.$emit.apply(parent, [eventName].concat(params))
      }
    },
    appBroadcast(componentName, eventName, params) {
      _broadcast.call(this, componentName, eventName, params)
    },
    appGetActiveEventComponent() {
      if (!window.vm_identifierName) {
        return
      }
      if (!window.vm_eventName) {
        return
      }
      return _getActiveEventComponent.call(
        this,
        window.vm_identifierName,
        window.vm_eventName
      )
    }
  }
}
