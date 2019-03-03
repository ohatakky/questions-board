# questions-board

## Overview
イベント、勉強会等の質疑応答をリアルタイムに処理する。
匿名で投稿できるため、初参加の人やシャイな人も積極的に関わることができる。


## Requirements
- Realtime : 質疑応答の投稿をリアルタイムに表示できる。
- Sharable URL : 作成したボードは動的なURLによりシェアできる。


## Memo
- serverのroutingにはechoを使用
- clientのroutingにはreact-routerを使用
- ボード生成時にハッシュを発行。URLに付与する


## TODO
- clientの実装 (routing済)
- repositoryのテスト
- repository実装
- デプロイ検討