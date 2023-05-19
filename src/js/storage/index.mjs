/**
 *
 * @param {string} key | name of the value that will be saved in local storage
 * @param {*} value | the value that the key will have
 */
export function saveLocal(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

/**
 * Get saved item from local storage
 * @param {string} key | name of the saved value in local storage
 * @returns value
 */
export function loadLocal(key) {
  try {
    const value = localStorage.getItem(key);
    return JSON.parse(value);
  } catch {
    return null;
  }
}

/**
 *Remove iten from local storage
 * @param {string} key | name of the saved value in local storage that you want to delete
 */
export function removeLocal(key) {
  localStorage.removeItem(key);
}
