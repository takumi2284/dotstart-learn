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
