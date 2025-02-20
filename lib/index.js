module.exports = (string) => {
  const isRegisterInUpperCase = (symbol) => symbol === symbol.toUpperCase()
  const translit = {
    'a': 'а',
    'b': 'б',
    'v': 'в',
    'g': 'г',
    'd': 'д',
    'e': 'е',
    'jo': 'ё',
    'yo': 'ё',
    'ö': 'ё',
    'zh': 'ж',
    'z': 'з',
    'i': 'и',
    'j': 'й',
    'k': 'к',
    'l': 'л',
    'm': 'м',
    'n': 'н',
    'o': 'о',
    'p': 'п',
    'r': 'р',
    's': 'с',
    't': 'т',
    'u': 'у',
    'f': 'ф',
    'h': 'х',
    'x': 'х',
    'c': 'ц',
    'ch': 'ч',
    'sh': 'ш',
    'osh': 'ош',
    'shh': 'щ',
    'w': 'щ',
    '#': 'ъ',
    'y': 'и',
    '\'': 'ь',
    'je,ä': 'э',
    'ä': 'э',
    'ju': 'ю',
    'yu': 'ю',
    'ü': 'ю',
    'ja': 'я',
    'ya': 'я',
    'q': 'я',
    'ts': 'ц',
    'ia': 'я',
    'fia': 'фия',
    'tar': 'тър'
  }

  for (let i = 0, j = string.length; i < j; i++) {
    if (isRegisterInUpperCase(string[i]) && translit[string[i].toLowerCase()]) {
      string = string.replace(string[i], translit[string[i].toLowerCase()].toUpperCase())
    } else if (translit[string[i]]) {
      string = string.replace(string[i], translit[string[i]])
    }
  }

  return string
}
