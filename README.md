# dotboard

dotstart 実践課程 Stage 2 のハンズオンで作る、チームのタスクを貼り出して進めるボード。

## 開発環境

| 道具 | バージョン |
| --- | --- |
| Node.js | （`node -v` の結果を書く） |
| npm | （`npm -v` の結果を書く） |
| Git | （`git --version` の結果を書く） |
| Docker | （`docker -v` の結果を書く。まだ入れていなければその旨） |

## 起動方法

未実装（Step 1 で書く）

## package.jsonmの各項目
| 用語 | 役割 |
| --- | --- |
| name | packageの名前 |
| version | packageのバージョン番号 |
| main | packageを読み込んだ時のエントリーポイント指定
| scripts | コマンド集
| license | ライセンス種類 |

  "type": "module",

## tsconfig.json の各設定
| 設定 | 役割 |
| --- | --- |
| module | 出力するモジュール形式。`nodenext` は Node.js の ESM/CommonJS 解決ルールに合わせて出力する |
| target | コンパイル後のJSが対象にする言語バージョン。`esnext` は最新構文をそのまま出力する |
| types | グローバルに読み込む型定義パッケージの指定。空配列にして `@types/*` を自動で全部読み込まないようにする |
| sourceMap | コンパイル後のJSと元のTSを対応付ける `.map` を出力し、デバッグ時に元のコード行を辿れるようにする |
| declaration | 型定義ファイル（`.d.ts`）を出力する。ライブラリとして配布するときに必要 |
| declarationMap | `.d.ts` と元の `.ts` を対応付ける `.map` を出力する |
| noUncheckedIndexedAccess | 配列・オブジェクトへの添字アクセスの結果型に自動で `undefined` を含める。存在チェック漏れを防ぐ |
| exactOptionalPropertyTypes | オプショナルプロパティ（`?:`）に `undefined` を明示的に代入することを禁止し、「キーが無い」と「値がundefined」を区別する |
| strict | `noImplicitAny` や `strictNullChecks` など厳格な型チェック系オプションをまとめて有効化する |
| jsx | JSXの変換方法。`react-jsx` は React 17 以降の自動ランタイムを使う（`import React` が不要になる） |
| verbatimModuleSyntax | `import`/`export` を書いた通りに出力し、型だけのimportを自動で消したりしない。`import type` の書き分けを強制する |
| isolatedModules | ファイル単体でトランスパイルできることを保証する。tsx や Babel のように1ファイルずつ変換するツールとの互換性のため |
| noUncheckedSideEffectImports | 副作用目的の `import "xxx"` が実在するモジュールを指しているかをチェックする |
| moduleDetection | `force` にすることで、import/exportが無いファイルもスクリプトではなくモジュールとして扱う |
| skipLibCheck | `node_modules` 内の `.d.ts` の型チェックを省略し、コンパイルを高速化する |

## 開発環境の準備

- Node.js 20 以上

```bash
git clone <このリポジトリのURL>
cd dotboard
npm install
```

## 起動

```bash
npm run dev
```

起動後、別のターミナルで動作確認する:

```bash
curl http://localhost:3000/health
# => {"status":"ok"}
```

## その他のコマンド

| コマンド | 説明 |
| --- | --- |
| `npm run dev` | 開発サーバを起動（ファイル保存で自動再起動） |
| `npm run build` | `dist/` に JavaScript を出力 |
| `npm run typecheck` | 型チェックのみ実行 |

