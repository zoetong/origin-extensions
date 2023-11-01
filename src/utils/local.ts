interface StorageData<T> {
  value: T
}

function createLocalStorage<T extends StorageInterface.Local = StorageInterface.Local>() {
  function set<K extends keyof T>(key: K, value: T[K]) {
    const storageData: StorageData<T[K]> = {
      value,
    }
    const json = JSON.stringify(storageData)
    window.localStorage.setItem(key as string, json)
  }

  function get<K extends keyof T>(key: K) {
    const json = window.localStorage.getItem(key as string)
    if (json) {
      let storageData: StorageData<T[K]> | null = null
      try {
        storageData = JSON.parse(json)
      }
      catch {
        // 防止解析失败
      }
      if (storageData) {
        const { value } = storageData

        return value as T[K]
      }
      remove(key)
      return null
    }
    return null
  }

  function remove(key: keyof T) {
    window.localStorage.removeItem(key as string)
  }
  function clear() {
    window.localStorage.clear()
  }

  return {
    set,
    get,
    remove,
    clear,
  }
}

export const localStg = createLocalStorage()
