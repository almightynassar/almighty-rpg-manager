// ---------------------------------------------------------------
// Based off of name_generator.js
// written and released to the public domain by drow <drow@bin.sh>
// http://creativecommons.org/publicdomain/zero/1.0/

var nameSet = {}
var chainCache = {}

// Generates a new name
function generate (type) {
  var chain = markovChain(type)
  if (chain) {
    return markovName(chain)
  }
  return ''
}

// Generate multiple names
function generateList (type, num) {
  var list = []

  for (var i = 0; i < num; i++) {
    list.push(generate(type))
  }
  return list
}

// Get markov chain by type
function markovChain (type) {
  var chain = chainCache[type]
  if (chain) {
    return chain
  } else {
    var list = nameSet[type]
    if (list) {
      chain = constructChain(list)
      if (chain) {
        chainCache[type] = chain
        return chain
      }
    }
  }
  return false
}

// Construct markov chain from list of names
function constructChain (list) {
  var chain = {
    meta: {},
    ending: {},
    scnd: {},
    word: {}
  }

  for (var i = 0; i < list.length; i++) {
    var names = list[i].split(/\s+/)
    chain = incrementMeta(chain, 'parts', names.length)

    for (var j = 0; j < names.length; j++) {
      var name = names[j]
      chain = incrementMeta(chain, 'nameLen', name.length)

      var priorC = name.substr(0, 1)
      var lastC = name.substr(1, 1)
      var string = name.substr(2)
      chain = incrementMeta(chain, 'initial', priorC)
      chain = incrementSecondary(chain, priorC, lastC)

      var c = lastC

      while (string.length > 1) {
        c = string.substr(0, 1)
        chain = incrementChain(chain, priorC, lastC, c)

        string = string.substr(1)
        priorC = lastC
        lastC = c
      }

      // Add the ending
      if (string.length === 1) {
        c = string.substr(0, 1)
        chain = incrementEnding(chain, lastC, c)
      }
    }
  }
  return scaleWeights(chain)
}

// Update chain meta-data
function incrementMeta (chain, key, token) {
  if (chain.meta[key]) {
    if (chain.meta[key][token]) {
      chain.meta[key][token]++
    } else {
      chain.meta[key][token] = 1
    }
  } else {
    chain.meta[key] = {}
    chain.meta[key][token] = 1
  }
  return chain
}

// Update chain second-letter
function incrementSecondary (chain, key, token) {
  if (chain.scnd[key]) {
    if (chain.scnd[key][token]) {
      chain.scnd[key][token]++
    } else {
      chain.scnd[key][token] = 1
    }
  } else {
    chain.scnd[key] = {}
    chain.scnd[key][token] = 1
  }
  return chain
}

// Update chain second-letter
function incrementEnding (chain, key, token) {
  if (chain.ending[key]) {
    if (chain.ending[key][token]) {
      chain.ending[key][token]++
    } else {
      chain.ending[key][token] = 1
    }
  } else {
    chain.ending[key] = {}
    chain.ending[key][token] = 1
  }
  return chain
}

// Increment along the chain
function incrementChain (chain, prior, key, token) {
  if (chain.word[prior]) {
    if (chain.word[prior][key]) {
      if (chain.word[prior][key][token]) {
        chain.word[prior][key][token]++
      } else {
        chain.word[prior][key][token] = 1
      }
    } else {
      chain.word[prior][key] = {}
      chain.word[prior][key][token] = 1
    }
  } else {
    chain.word[prior] = {}
    chain.word[prior][key] = {}
    chain.word[prior][key][token] = 1
  }
  return chain
}

function scaleWeights (chain) {
  var tableLen = {}

  for (var type in chain) {
    tableLen[type] = {}
    if (type === 'word') {
      for (var prior in chain.word) {
        tableLen.word[prior] = {}
        for (var key in chain.word[prior]) {
          tableLen.word[prior][key] = 0

          for (var token in chain.word[prior][key]) {
            var count = chain.word[prior][key][token] || 0
            var weighted = Math.floor(Math.pow(count, 1.3))

            chain.word[prior][key][token] = weighted
            tableLen.word[prior][key] += weighted
          }
        }
      }
    } else {
      for (var meta in chain[type]) {
        tableLen[type][meta] = 0

        for (var data in chain[type][meta]) {
          var count2 = chain[type][meta][data]
          var weighted2 = Math.floor(Math.pow(count2, 1.3))

          chain[type][meta][data] = weighted2
          tableLen[type][meta] += weighted2
        }
      }
    }
  }
  chain.tableLen = tableLen
  return chain
}

// Construct name from markov chain
function markovName (chain) {
  var parts = selectMeta(chain, 'parts')
  var names = []

  for (var i = 0; i < parts; i++) {
    var nameLen = selectMeta(chain, 'nameLen')
    var priorC = selectMeta(chain, 'initial')
    var lastC = selectScnd(chain, priorC)
    var c = priorC + lastC
    var name = c
    var endingFound = false
    var attempts = 0

    while (!endingFound) {
      c = selectLink(chain, priorC, lastC)
      var endC = selectEnding(chain, lastC)
      // Build the name
      if (c !== '~' && name.length <= nameLen) {
        name += c
        priorC = lastC
        lastC = c
      // End the sentence
      } else if (endC !== '~') {
        name += endC
        endingFound = true
      // Cannot continue; redo 5 times, then quit
      } else {
        attempts += 1
        name = name.substring(0, name.length - 1)
        lastC = name.charAt(name.length - 1)
        priorC = name.charAt(name.length - 2)
        if (attempts > 5) {
          endingFound = true
        }
      }
    }

    names.push(name)
  }
  return names.join(' ')
}

// Randomly select meta-data
function selectMeta (chain, key) {
  var len = chain.tableLen.meta[key] || 1
  var idx = Math.floor(Math.random() * len)

  var t = 0
  for (var token in chain.meta[key]) {
    t += chain.meta[key][token]
    if (idx < t) {
      return token
    }
  }
  return 0
}

// Randomly select the second letter
function selectScnd (chain, key) {
  var len = chain.tableLen.scnd[key] || 1
  var idx = Math.floor(Math.random() * len)

  var t = 0
  for (var token in chain.scnd[key]) {
    t += chain.scnd[key][token]
    if (idx < t) {
      return token
    }
  }
  return '~'
}

// Randomly select the second letter
function selectEnding (chain, key) {
  var len = chain.tableLen.ending[key] || 1
  var idx = Math.floor(Math.random() * len)

  var t = 0
  for (var token in chain.ending[key]) {
    t += chain.ending[key][token]
    if (idx < t) {
      return token
    }
  }
  return '~'
}

// Randomly select the second letter
function selectLink (chain, prior, key) {
  // This check ends the build if a letter is usually NOT followed by other letters
  if (chain.tableLen.word[prior]) {
    var len = chain.tableLen.word[prior][key] || 1
    var idx = Math.floor(Math.random() * len)

    var t = 0
    for (var token in chain.word[prior][key]) {
      t += chain.word[prior][key][token]
      if (idx < t) {
        return token
      }
    }
  }
  return '~'
}

// Get random name from list
function getRandom (type) {
  if (nameSet[type]) {
    return nameSet[type][Math.floor(Math.random() * nameSet[type].length)]
  }
  return ''
}

// Get multiple names from list
function getRandomList (type, num) {
  var list = []

  for (var i = 0; i < num; i++) {
    list.push(getRandom(type))
  }
  return list
}

export default ({ Vue }) => {
  Vue.prototype.$markov = {
    // Generate names from a chain
    generate (type) {
      return generate(type)
    },
    // Generate multiple names from a chain
    generateList (type, num) {
      return generateList(type, num)
    },
    // Get a random name from the list
    getRandom (type) {
      return getRandom(type)
    },
    // Get multiple random names
    getRandomList (type, num) {
      return getRandomList(type, num)
    },
    // Create a new name set
    addNameArray (type, set) {
      if (Array.isArray(set)) {
        nameSet[type] = set
        return markovChain(type)
      }
      return false
    },
    // Get our resulting Markov chains
    getChains (type) {
      return chainCache[type]
    },
    // Reset the chains to their empty state
    reset () {
      chainCache = {}
    }
  }
}
