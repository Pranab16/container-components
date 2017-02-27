const set = (key, item, storage = sessionStorage) => storage.setItem(key, item);
const get = (key, storage = sessionStorage) => storage.getItem(key);
const remove = (key, storage = sessionStorage) => storage.removeItem(key);

module.exports = { set, remove, get };
