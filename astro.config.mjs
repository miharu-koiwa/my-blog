// astro.config.mjs

import { defineConfig } from 'astro/config';

// リポジトリ名に変えてください
const REPO_NAME = '/my-blog/'; // 必ずスラッシュで囲むこと

export default defineConfig({
  // ↓↓↓↓↓↓↓ この行を追加・修正します ↓↓↓↓↓↓↓
  base: REPO_NAME,
  // ↑↑↑↑↑↑↑ この行を追加・修正します ↑↑↑↑↑↑↑
  
  // 他の既存の設定（pluginsなど）はそのままでOK
  // ...
});