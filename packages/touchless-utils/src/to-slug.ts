/**
 * Return a slugified copy of a string.
 *
 * @param {string} str The string to be slugified
 * @return {string} The slugified string.
 */
export function toSlug(string_: string): string {
  let s = string_
  if (!s) {
    return ''
  }
  s = s.toLowerCase().trim()
  s = s.replace(/ & /g, ' and ')
  s = s.replace(/ +/g, '-')
  s = s.replace(/-+/g, '-')
  s = s.replace(/[^\da-z-]+/g, '')
  return s
}
