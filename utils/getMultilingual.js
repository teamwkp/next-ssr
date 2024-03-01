const fs = require("fs")
const path = require("path")

const dir = path.resolve(__dirname, "../locales")

async function getConfig() {
  const res = await fetch("https://www.itxslq.com/multiLanguageConfig/all")
  if (!res.ok) {
    throw new Error("获取多语言配置失败!请确认接口是否畅通.")
  }
  return res.json()
}

// 处理返回值
function handleRespons(data) {
  let _data = data
  Object.keys(_data).map((k) => {
    handleToFile(k, JSON.stringify(_data[k]))
  })
}

// 生成文件夹
async function handleToFile(key, _json) {
  let filePath = dir + `/${key}/default.json`
  const dirPath = path.dirname(filePath)
  if (!fs.existsSync(dirPath)) {
    await fs.mkdirSync(dirPath, { recursive: true })
  }

  if (fs.existsSync(dirPath)) {
    fs.writeFile(filePath, _json, function (err) {
      if (err) throw err
    })
  }
}

async function main() {
  const data = await getConfig()
  if (data.code === 0) {
    await handleRespons(data.data)
    console.log("多语言同步成功!")
  } else {
    console.log("获取多语言配置失败!请确认接口是否畅通!")
  }
}

main()
