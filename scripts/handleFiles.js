const fs = require('fs')
const path = require('path')
const gitlog = require('gitlog').default

const getFileLog = (filePath) => {
  const unique = (arr) => {
    let ret = []
    arr.forEach(item => {
      if (!ret.some(o => o.email === item.email)) {
        ret.push(item)
      }
    })
    return ret
  }
  let log = gitlog({
    repo: __dirname + '/..',
    file: filePath,
    fields: ['authorName', 'authorDate', 'authorEmail']
  })
  const lastModified = log[0].authorDate
  const authors = unique(log.map(item => ({
    name: item.authorName,
    email: item.authorEmail
  })))
  return {
    lastModified,
    authors
  }
}

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
