import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Pages は https://<ユーザー名>.github.io/task-board/ で配信されるため、
// ビルド時だけ base をリポジトリ名に合わせる（開発サーバーは / のまま）
export default defineConfig(({ command }) => ({
  base: command === 'build' ? '/task-board/' : '/',
  plugins: [react()],
}))
