import type { Item, Status } from '../types'

const BASE_URL = 'http://localhost:3000'

const toJson = async (res: Response) => {
  if (!res.ok) {
    throw new Error(`リクエストに失敗しました (${res.status})`)
  }
  return res.json()
}

export const fetchItems = (): Promise<Item[]> => fetch(`${BASE_URL}/items`).then(toJson)

export const createItem = (input: {
  title: string
  note: string
  rating: number
}): Promise<Item> =>
  fetch(`${BASE_URL}/items`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ ...input, status: 'open' }),
  }).then(toJson)

export const updateItemStatus = (id: number, status: Status): Promise<Item> =>
  fetch(`${BASE_URL}/items/${id}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ status }),
  }).then(toJson)

export const deleteItem = async (id: number): Promise<void> => {
  const res = await fetch(`${BASE_URL}/items/${id}`, { method: 'DELETE' })
  if (!res.ok) {
    throw new Error(`削除に失敗しました (${res.status})`)
  }
}
