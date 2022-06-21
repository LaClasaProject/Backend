const { rmSync } = require('fs')

rmSync(
  `${process.cwd()}/dist`,
  {
    recursive: true,
    force: true
  }
)

console.log('Cleaned up output directory.')