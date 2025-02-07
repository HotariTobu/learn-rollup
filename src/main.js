import foo from './foo'
export default () => {
  console.log(foo)
}

import { version } from '../package.json'
export const v = () => {
  console.log('version ' + version)
}
