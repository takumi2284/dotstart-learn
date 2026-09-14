# dotboard

dotstart 実践課程 Stage 2 のハンズオンで作る、チームのタスクを貼り出して進めるボード。

## 開発環境

| 道具 | バージョン |
| --- | --- |
| Node.js | v24.19.0 |
| npm | 11.17.0 |
| Git | 2.50.1 (Apple Git-155) |
| Docker | 29.7.2 |

## 開発環境の準備

- Node.js 20以上

```bash
git clone git@github.com:takumi2284/dotstart-learn.git
cd dotstart-learn
npm install
```

## 起動

```bash
npm run dev
```

起動後、別のターミナルで動作確認する。

```bash
curl http://localhost:3000/health
# => {"status":"ok"}
```

## その他のコマンド

| コマンド | 説明 |
| --- | --- |
| `npm run dev` | 開発サーバーを起動（ファイル保存で自動再起動） |
| `npm run build` | `dist/` にJavaScriptを出力 |
| `npm run typecheck` | 型チェックのみ実行 |

## 層の責務とディレクトリ構成

```text
routes/items.ts
  → itemService を呼ぶだけ。HTTPの受け口

services/itemService.ts
  → 存在チェックと状態遷移のルール。itemRepository を呼ぶ

repositories/itemRepository.ts
  → Prisma Client を直接呼ぶ唯一の場所

errors.ts
  → NotFoundError / TransitionError の定義と、404 / 400 に変換するヘルパー

db.ts
  → Prisma Client のインスタンスを1つだけ作る

app.ts
  → ミドルウェア登録・ルーティングの組み立て・app.onError

index.ts
  → app.ts のアプリをNodeで起動するだけ
```
