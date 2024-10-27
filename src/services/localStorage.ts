const getElementFromLocalStorage = (key: string) => {
  const localStorageValue = localStorage.getItem(key);
  if (localStorageValue == null || localStorageValue == undefined || localStorageValue == '') {
    return null;
  }

  return localStorageValue;
};

const saveElementToLocalStorage = (key: string, value: string) => {
  localStorage.setItem(key, value);
};

const clearElementFromLocalStorage = (key: string) => {
  localStorage.removeItem(key);
};

export {
  getElementFromLocalStorage,
  saveElementToLocalStorage,
  clearElementFromLocalStorage
}