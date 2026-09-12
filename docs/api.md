# API設計

Step 2 で実装する `GET /items` / `GET /items/:id` / `POST /items` の設計をまとめる。実装前にここを埋めてレビューを受ける（PR #2）。

## Item モデル

| フィールド | 型 | 説明 |
| --- | --- | --- |
| id | number | 一意なID |
| title | string | タイトル |
| note | string | メモ |
| rating | number(1-5) | 評価 |
| status | "open" \| "doing" \| "done" | 状態 |
| allowedTransitions | ("open" \| "doing" \| "done")[] | 次に変更できる状態 |

## エンドポイント一覧

| メソッド | URL | リクエスト | レスポンス | ステータスコード |
| --- | --- | --- | --- | --- |
| GET | /items | なし | タスク一覧 | 200 |
| GET | /items/:id | なし | タスク1件 | 200 / 404 |
| POST | /items | title / note / rating / status | 作成したタスク1件 | 201 / 400 |
| PATCH | /items/:id | 変更したいフィールドだけ | 更新後のタスク1件 | 200 / 400 / 404 |
| DELETE | /items/:id | なし | なし | 204 / 404 |

## 状態遷移

隣り合う状態への遷移（`open` ⇄ `doing` ⇄ `done`）を許可し、`open` と `done` の直接遷移は禁止する。
レスポンスの `allowedTransitions` は、現在の状態から変更できる状態を表す。

## エラーレスポンス

- 存在しないIDを指定した場合: 404
- 不正な入力（バリデーションエラー）の場合: 400
- バリデーションには zod を使う

## 動作確認ログ（curl）

正常系・異常系を叩いた記録をここに貼る。
