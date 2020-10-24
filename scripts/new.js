const inquirer = require('inquirer')
const fs = require('fs')
const path = require('path')
const template = require('./template');

(async () => {
  const { enPath } = await inquirer.prompt({ name: 'enPath', message: '请输入英文路径(只能输入英文数字中划线)', validate: input => /^[a-z0-9-]+$/i.test(input) })
  const target = path.join(__dirname, `../docs/${enPath}.ipynb`)
  if (fs.existsSync(target)) throw new Error(`${target} already exists`)

  const { title } = await inquirer.prompt({ name: 'title', message: '请输入文章标题', validate: input => input !== '' })
  const ipynb = { ...template }
  ipynb.cells[0].source[0] = `# ${title}`
  fs.writeFileSync(target, JSON.stringify(ipynb, null, 2) + '\n', 'utf8')

  console.log(`success created file ${target}`)
})()
