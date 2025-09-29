---
title: 'プロジェクトの作成とフォルダ構成を理解しよう'
description: 'PJの作成とフォルダ構成'
pubDate: '2025-09-25'
heroImage: '../../assets/first-post.jpg'
---

Astroを学ぶ第一歩は、新しいプロジェクトを作成し、そのフォルダ構成を理解することです。公式コマンド npm create astro@latest を使うと、簡単に雛形プロジェクトが生成されます。フォルダには src/pages、src/components、public などがあり、特に pages フォルダに配置したファイルがそのままルーティングに対応する仕組みは、直感的で学びやすいポイントです。また、public フォルダには画像やアイコンを入れ、components には再利用可能なUI部品を作成します。まずは小さなページを1つ作って、フォルダごとに役割を整理しながら進めると、Astroの全体像を理解しやすくなります。