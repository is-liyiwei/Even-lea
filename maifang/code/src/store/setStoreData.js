function setStoreData(state, params) {
  const { key, type, data, commitInfo, identifierName } = params
  if (!key) {
    throw new Error(`The key can't be empty`)
  }
  if (data === undefined || data === null) {
    throw new Error(`The data can't be empty`)
  }
  if (!identifierName) {
    throw new Error(
      `Must be have identifierName for convenient debug`
    )
  } else {
    console.log(
      `%c` +
        `The commit from ${identifierName}.vue/.js, commit key name is ${key}`,
      `color: #e3e`
    )
    if (commitInfo) {
      console.log(`The commit info: ` + commitInfo)
    }
  }
  state[key] = JSON.parse(JSON.stringify(data))
}

/*

Example code

this.$store.commit(`index/setStoreData`, {
  key: `userInfo`,
  type: `obj`,
  // 必须，这个是页面的唯一标识，方便vuex的debug
  identifierName,
  commitInfo: `这里是commit信息描述，可以不写`,
  data: {
    keyS: `asd222`,
    keyO: {
      name: `lyw222`
    },
    keyArr: {
      test: [1, 2, 3]
    }
  }
});

this.$store.commit(`index/setStoreData`, {
  key: `notificationList`,
  type: `arr`,
  identifierName,
  commitInfo: `来自index.vue的commit`,
  data: [{
    name: 'a'
  }, {
    name: 'b'
  }]
});

this.$store.commit(`index/setStoreData`, {
  // 普通类型时，type可以忽略
  key: `city`,
  identifierName,
  data: `哈哈`
});

*/

export default setStoreData
