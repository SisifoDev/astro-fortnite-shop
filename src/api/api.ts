import type { ItemsShop } from '../types/types.ts'

export const date = Date.now()

export const shopData: ItemsShop = await fetch(
  `https://fortniteapi.io/v2/shop?lang=es&includeRenderData=false&date=${date}`,
  {
    method: 'GET',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
      Authorization: '305ac5cc-06d2c7da-b6552e50-2804f39c',
      language: 'es',
    },
  }
).then((response) => response.json())

console.log(shopData)
