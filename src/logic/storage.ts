import { useStorageLocal } from '~/composables/useStorageLocal'
import { themeSetting } from '~/settings'

export const storageDemo = useStorageLocal('webext-demo', 'Storage Demo')

export const themeStorage = useStorageLocal('origin-theme', JSON.stringify(themeSetting))
