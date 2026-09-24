import { useCallback, useEffect, useState } from 'react'
import * as api from '../api/items'
import type { Item, Status } from '../types'

const toMessage = (e: unknown) => (e instanceof Error ? e.message : '不明なエラーが発生しました')

export const useItems = () => {
  const [items, setItems] = useState<Item[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const reload = useCallback(
    () =>
      api.fetchItems().then(
        (fetched) => {
          setItems(fetched)
          setError(null)
        },
        (e: unknown) => {
          setError(toMessage(e))
        },
      ),
    [],
  )

  useEffect(() => {
    reload().finally(() => {
      setIsLoading(false)
    })
  }, [reload])

  const runThenReload = (action: () => Promise<unknown>) =>
    action()
      .then(reload)
      .catch((e: unknown) => {
        setError(toMessage(e))
      })

  return {
    items,
    isLoading,
    error,
    addItem: (title: string, note: string, rating: number) =>
      runThenReload(() => api.createItem({ title, note, rating })),
    changeStatus: (id: number, status: Status) =>
      runThenReload(() => api.updateItemStatus(id, status)),
    removeItem: (id: number) => runThenReload(() => api.deleteItem(id)),
  }
}
