import type { Shop } from '../types/types'
import { shopData, date } from '../api/api.ts'

const unorderShopItems: Shop[] = shopData.shop
console.log(unorderShopItems)

const sortItems = (
  items: Shop[],
  sortBy: keyof Shop,
  order: 'asc' | 'desc'
) => {
  return items.sort((a, b) => {
    if (order === 'asc') {
      return a[sortBy] - b[sortBy]
    } else {
      return b[sortBy] - a[sortBy]
    }
  })
}

function groupBy(arr, property) {
  return arr.reduce((acc, obj) => {
    const key = obj[property]
    acc[key] = acc[key] || []
    acc[key].push(obj)
    return acc
  }, {})
}

console.log(groupBy(unorderShopItems, 'section'))
