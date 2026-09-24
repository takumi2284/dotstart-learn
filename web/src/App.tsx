import { ItemForm } from './components/ItemForm'
import { ItemList } from './components/ItemList'
import { useItems } from './hooks/useItems'

export const App = () => {
  const { items, isLoading, error, addItem, changeStatus, removeItem } = useItems()

  return (
    <main className="font-sans max-w-[640px] mx-auto p-4">
      <h1 className="text-2xl font-bold tracking-tight mb-4">タスクボード</h1>

      {error && (
        <p className="rounded-md border border-red-300 bg-red-50 px-3 py-2 mb-4 text-sm text-red-700">
          {error}
        </p>
      )}

      <section>
        <h2 className="text-lg font-bold mb-2">タスクを追加</h2>
        <ItemForm onSubmit={addItem} />
      </section>

      <section>
        <h2 className="text-lg font-bold mb-2">タスク一覧</h2>
        {isLoading ? (
          <p className="text-sm text-gray-600">読み込み中...</p>
        ) : (
          <ItemList items={items} onChangeStatus={changeStatus} onDelete={removeItem} />
        )}
      </section>
    </main>
  )
}
