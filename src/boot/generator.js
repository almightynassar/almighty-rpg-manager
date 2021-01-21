// Based on generator.js
// written and released to the public domain by drow <drow@bin.sh>
import GeneratorWords from 'src/assets/data/GeneratorWords'

const genData = GeneratorWords

function generateText (type) {
  const list = genData[type]
  if (list) {
    const string = selectFrom(list)
    if (string) {
      return expandTokens(string)
    }
  }
  return ''
}

function generateList (type, n) {
  const list = []
  let i
  for (i = 0; i < n; i++) {
    list.push(generateText(type))
  }
  return list
}

function selectFrom (list) {
  return list[Math.floor(Math.random() * list.length)]
}

function expandTokens (string) {
  let result
  while ((result = /{(\w+)}/.exec(string)) !== null) {
    const repl = generateText(result[1])
    if (repl) {
      string = string.replace('{' + result[1] + '}', repl)
    } else {
      string = string.replace('{' + result[1] + '}', result[1])
    }
  }
  return string
}

export default ({ Vue }) => {
  Vue.prototype.$generator = {
    generate (type) {
      return generateText(type)
    },
    list (type, n) {
      return generateList(type, n)
    }
  }
}
