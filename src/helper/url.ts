/**
 * add param for url
 * @export
 * @param {string} url
 * @param {string} name
 * @param {string} value
 * @returns {string}
 */
export function addUrlParam (url: string, name: string, value: string): string {
  url += (url.indexOf('?') === -1 ? '?' : '&')
  url += encodeURIComponent(name) + '=' + encodeURIComponent(value)
  return url
}
