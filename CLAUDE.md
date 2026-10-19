# CLAUDE.md

このファイルは、このリポジトリで作業する Claude Code 向けのガイドです。

## プロジェクト概要

- プロジェクト名: task-board
- 内容: タスク管理ボードアプリケーション（追加・完了切り替え・削除、完了済みはグレー表示）

## 技術スタック

| 分類 | 使用技術 |
| --- | --- |
| UI ライブラリ | React 18.3（関数コンポーネント + Hooks） |
| ビルドツール | Vite 5.4 + @vitejs/plugin-react |
| 言語 | JavaScript（ES Modules、JSX）※ TypeScript は未使用 |
| スタイル | 素の CSS（[src/index.css](src/index.css) に集約） |
| データ保存 | ブラウザの localStorage（キー: `task-board.tasks`） |
| ホスティング | GitHub Pages（GitHub Actions で自動デプロイ） |

### ファイル構成

- [index.html](index.html): エントリーの HTML
- [src/main.jsx](src/main.jsx): React のマウント処理
- [src/App.jsx](src/App.jsx): アプリ本体（タスクの状態管理と画面）
- [src/index.css](src/index.css): 全体のスタイル
- [vite.config.js](vite.config.js): Vite の設定
- [.github/workflows/deploy.yml](.github/workflows/deploy.yml): デプロイ用ワークフロー

## 開発コマンド

- 依存関係のインストール: `npm install`
- 開発サーバーの起動: `npm run dev`（http://localhost:5173）
- テストの実行: 未導入
- ビルド: `npm run build`

## デプロイ先

https://brutus-2028.github.io/task-board/

- GitHub Pages で公開している
- `main` へプッシュすると [.github/workflows/deploy.yml](.github/workflows/deploy.yml) が自動でビルド・デプロイする
- [vite.config.js](vite.config.js) の `base` はビルド時のみ `/task-board/`。リポジトリ名を変えたらここも合わせる

## コーディング規約

- 既存コードの命名規則・書き方・コメント量に合わせる
- コメントやドキュメントは日本語で書く
- 1つの変更は1つの目的に絞る

### コンポーネントの命名規約

- **コンポーネント名:** PascalCase の名詞にする（例: `App`、`TaskItem`、`TaskForm`）
- **ファイル名:** コンポーネント名と同じにし、拡張子は `.jsx`（例: `TaskItem.jsx`）。1ファイルに1コンポーネントを置き、`export default` で公開する
- **定義の仕方:** `function` 宣言の関数コンポーネントで書く（クラスコンポーネントは使わない）
- **置き場所:** `src/` 直下に置く。コンポーネントが増えたら `src/components/` に分ける
- **イベント処理の関数:** camelCase の「動詞 + 名詞」にする（例: `addTask`、`toggleTask`、`deleteTask`）
- **state:** `[値, set値]` の組にする（例: `[tasks, setTasks]`、`[text, setText]`）
- **定数:** モジュールの先頭で UPPER_SNAKE_CASE にする（例: `STORAGE_KEY`）
- **CSS クラス名:** kebab-case にする（例: `task-list`、`add-form`）。状態は `done` のような修飾クラスを足して表す
- **書式:** インデントは2スペース、文字列はシングルクォートで、セミコロンは付けない

## Git 運用ルール

### 基本方針

**コードを変更するたびに、コミットして GitHub にプッシュすること。**
変更をローカルに溜め込まず、作業の区切りごとに必ずリモートへ反映する。

### 手順

1. 変更内容を確認する: `git status` / `git diff`
2. 関連するファイルだけをステージする: `git add <ファイル>`
3. コミットする: `git commit -m "<メッセージ>"`
4. GitHub にプッシュする: `git push`

### コミットメッセージ

- 日本語で、何をなぜ変更したかが分かるように書く
- 1行目は50文字程度の要約、必要なら空行を挟んで詳細を書く
- 例: `タスクの並び替え機能を追加`

### 注意事項

- `main` ブランチへの `git push --force` は禁止
- `.env` や API キーなどの機密情報はコミットしない（`.gitignore` に追加する）
- コミット前にテストやビルドが通ることを確認する（用意されている場合）
- プッシュに失敗した場合は、`git pull --rebase` で最新を取り込み、競合を解消してから再度プッシュする
