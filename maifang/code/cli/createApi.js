const chalk = require('chalk')
const fs = require('fs')
const path = require('path')
const puppeteer = require('puppeteer')
const cheerio = require('cheerio')

// api的地址
let apiUrl = `https://haizhe.chinacloudsites.cn/swagger/ui/index`
// 当前项目的根目录
let myDir = path.resolve(__dirname, '../')

let runtime = hasFile(myDir + '/project.config.json')
  ? 'wx-app'
  : 'web'

let fixPath = runtime == 'wx-app' ? '' : '/src'

let baseUrlFile = readFileLines(myDir + fixPath + '/ajax/baseUrl.js')

const str1 = `启动前，要检查ajax/YhcAjax/baseUrl.js配置的url是否为当前项目的域名\n`
console.log(chalk.yellow(str1))
console.log(chalk.yellow(str1))
console.log(chalk.yellow(str1))

for (let index = 0; index < baseUrlFile.length; index++) {
  const element = baseUrlFile[index]
  if (element.indexOf('.chinacloudsites') != -1) {
    let a = element.split('.chinacloudsites')[0]
    let b = a.split('//')[1]
    apiUrl = `https://${b}.chinacloudsites.cn/swagger/ui/index`
  }
}

function readFileLines(filePath) {
  return fs
    .readFileSync(filePath)
    .toString('UTF8')
    .split('\n')
}

function createFileTruePath(
  currFile__dirname = './',
  options = {
    filePath: './',
    fileName: +new Date(),
    mime: 'json'
  }
) {
  let _path = path.resolve(
    currFile__dirname,
    `${options.filePath}${options.fileName}.${options.mime}`
  )

  return _path
}

function createJsonFile(jsonData, _path) {
  return fs.writeFileSync(_path, jsonData)
}

function hasFile(filePath) {
  return fs.existsSync(path.resolve(filePath))
}

function body2html(body) {
  return cheerio.load(body, {
    decodeEntities: false
  })
}

const toCamelCase = str =>
  str.replace(/\/(\w)/g, (match, p1, p2, offset) => p1.toUpperCase())

let makeCode = data => {
  let _s = `import http from '../request';

export function uploadFile(
  file,
  url = 'blob',
  method = 'post',
  otherParams = [],
  otherHeaders = {}
) {
  const formData = new FormData();
  formData.append('file', file);
  for (let i = 0; i < otherParams.length; i++) {
    formData.append(i, otherParams[i]);
  }
  const reqParam = {
    url,
    method,
    data: formData,
    headers: Object.assign(
      {
        'Content-Type': 'multipart/form-data;charset=utf-8'
      },
      otherHeaders
    )
  };
  return http(reqParam);
}

`

  for (const key in data) {
    const element = data[key]

    // 添加大标题
    _s += `// ---------------------${key}---------------------
`

    for (let index = 0; index < element.length; index++) {
      const item = element[index]

      _s += `
// ${item.message}
export function ${item.funcName}(body = {}, query = {}) {
  return http({
    url: '${item.url}',
    method: '${item.method}',
    data: body,
    query: query
  });
}
`
    }
  }
  return _s
}

let makeTypes = data => {
  let _s = `export declare class YhcAjax {
    uploadFile: (
      file: any,
      url: string,
      method?: string,
      otherParams?: [],
      otherHeaders?: object
    ) => void;
    uploadFileByVideo: (
      file: any,
      url: string,
      method?: string,
      otherParams?: [],
      otherHeaders?: object
    ) => void;
`

  for (const key in data) {
    const element = data[key]

    for (let index = 0; index < element.length; index++) {
      const item = element[index]
      _s += `  ${item.funcName}: (body: object, query: object) => void;
`
    }
  }
  _s += `}
`
  return _s
}

async function main() {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  page.setViewport({ width: 40, height: 20 })
  await page.goto(apiUrl)
  await page.waitForSelector(`#resources`)
  let html = await page.evaluate(async () => {
    return $(`#resources`).html()
  })
  await browser.close()

  let $ = body2html(html)
  let data = {}
  let list = $('.resource')

  list.each(function(index, item) {
    let title = $(item)
      .find('.heading h2')
      .text()
      .trim()

    data[title] = []

    let everyItem = $(item).find('.endpoints li.operation')

    everyItem.each(function(k, v) {
      let method = $(v)
        .find('.heading .http_method')
        .text()
        .trim()

      let url = $(v)
        .find('.heading .path')
        .text()
        .trim()
        .split('/api/v1/')[1]

      let message = $(v)
        .find('.heading .markdown')
        .text()
        .trim()

      let funcName = toCamelCase(method.toLowerCase() + '/' + url)

      data[title].push({
        method,
        url,
        message,
        funcName
      })
    })
  })

  let okAjax = makeCode(data)
  let okFilePath = createFileTruePath(__dirname, {
    filePath: myDir + fixPath + '/ajax/YhcAjax/',
    fileName: 'index',
    mime: 'js'
  })
  createJsonFile(okAjax, okFilePath)

  let okTypes = makeTypes(data)
  let okTypesFilePath = createFileTruePath(__dirname, {
    filePath: myDir + fixPath + '/types/',
    fileName: 'YhcAjax',
    mime: 'd.ts'
  })
  createJsonFile(okTypes, okTypesFilePath)
  console.log(chalk.green('请求数据完毕'))
}

console.log('正在请求数据')

setTimeout(() => {
  main()
}, 3000)
