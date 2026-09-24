import { useState, type FormEvent } from 'react'

type Props = {
  onSubmit: (title: string, note: string, rating: number) => void
}

export const ItemForm = ({ onSubmit }: Props) => {
  const [title, setTitle] = useState('')
  const [note, setNote] = useState('')
  const [rating, setRating] = useState(3)

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()
    onSubmit(title, note, rating)
    setTitle('')
    setNote('')
    setRating(3)
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-wrap items-end gap-2 mb-6">
      <label className="text-sm text-gray-700">
        タイトル
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          className="block rounded-md border border-gray-300 bg-white px-3 py-1.5 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-900"
        />
      </label>

      <label className="text-sm text-gray-700">
        メモ
        <input
          type="text"
          value={note}
          onChange={(e) => setNote(e.target.value)}
          className="block rounded-md border border-gray-300 bg-white px-3 py-1.5 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-900"
        />
      </label>

      <label className="text-sm text-gray-700">
        優先度
        <select
          value={rating}
          onChange={(e) => setRating(Number(e.target.value))}
          className="block rounded-md border border-gray-300 bg-white px-3 py-1.5 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-900"
        >
          {[1, 2, 3, 4, 5].map((n) => (
            <option key={n} value={n}>
              {'★'.repeat(n)}
            </option>
          ))}
        </select>
      </label>

      <button
        type="submit"
        className="rounded-md bg-gray-900 px-3 py-1.5 text-sm font-medium text-white hover:bg-gray-700"
      >
        追加する
      </button>
    </form>
  )
}
