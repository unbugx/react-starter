import path from 'path'
import rimraf from 'rimraf'

const cleanDir = (pattern: string) => new Promise<void>((resolve, reject) => {
  rimraf(pattern, (err) => (err ? reject(err) : resolve()))
})

async function clean() {
  await Promise.all([
    await cleanDir(path.resolve(__dirname, '../../build/*')),
  ])
}

export default clean
