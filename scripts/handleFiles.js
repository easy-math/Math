const fs = require('fs')
const path = require('path')

const markdownHandler = (fileData) => {
  let md = fs.readFileSync(fileData.path, 'utf8')
  if (fileData.relativePath === 'README.md') {
    md = md.replace(/# .+/, '')
  }
  md = md
    .replace(/\.ipynb/g, '.md')
    .replace(/https:\/\/math\.haozi\.me\/(.*?)\.html/g, '$1.md')

  fs.writeFileSync(fileData.path, md, 'utf8')
}

const handleFile = (fileData) => {
  switch (path.extname(fileData.path)) {
    case '.md':
      markdownHandler(fileData)
  }
}

const walk = (rootDir, stepCallback) => {
  if (!rootDir) throw new Error('rootDir is empty!')

  const ls = fs.readdirSync(rootDir).filter(item => !item.startsWith('.'))
  ls.forEach(dir => {
    dir = path.join(rootDir, dir)
    const stat = fs.statSync(dir)
    if (stat.isFile()) {
      stepCallback({
        path: dir,
        relativePath: path.relative(rootDir, dir),
        baseDir: rootDir
      })
    }
    if (stat.isDirectory()) {
      walk(dir, stepCallback)
    }
  })
}

const inputFile = process.argv[2]
walk(inputFile, handleFile)
