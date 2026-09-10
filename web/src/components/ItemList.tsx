import type { Item, Status } from '../types'

const STATUS_LABELS: Record<Status, string> = {
  open: '未着手',
  doing: '作業中',
  done: '完了',
}

type Props = {
  items: Item[]
  onChangeStatus: (id: number, status: Status) => void
  onDelete: (id: number) => void
}

export const ItemList = ({ items, onChangeStatus, onDelete }: Props) => {
  if (items.length === 0) {
    return <p className="text-sm text-gray-600">まだタスクがありません。</p>
  }

  return (
    <ul className="list-none p-0">
      {items.map((item) => (
        <li
          key={item.id}
          className="flex items-center gap-3 rounded-md border border-gray-200 bg-white px-3 py-2 mb-2"
        >
          <span className="flex-1 text-sm">{item.title}</span>
          <span className="text-sm text-amber-500">{'★'.repeat(item.rating)}</span>
          <span className="text-xs text-gray-600">{STATUS_LABELS[item.status]}</span>

          {item.allowedTransitions.map((status) => (
            <button
              key={status}
              type="button"
              onClick={() => onChangeStatus(item.id, status)}
              className="rounded-md border border-gray-300 px-2 py-1 text-xs hover:bg-gray-100"
            >
              {STATUS_LABELS[status]}にする
            </button>
          ))}

          <button
            type="button"
            onClick={() => onDelete(item.id)}
            className="rounded-md border border-red-300 px-2 py-1 text-xs text-red-700 hover:bg-red-50"
          >
            削除
          </button>
        </li>
      ))}
    </ul>
  )
}
