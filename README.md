# questions-board

## Overview
イベント、勉強会等の質疑応答をリアルタイムに処理する


## Requirements
- Realtime : 質疑応答の投稿をリアルタイムに表示できる。
- Social Login : ログイン権限があり、ログインユーザのみボードを作成できる。
- Sharable Dynamic URL : 作成したボードは動的なURLによりシェアできる。


## Memo
- 動的なURLには共通鍵暗号方式を用いる。oauthAPIでreturnされたtokenを暗号化して、ボードへのアクセス時に復号し、Adminのtokenと一致したらtrue
- routingにはechoを使用 (github.com/labstack/echo)
- social loginはtwitterAPIを使用

## Architecture
- Go
- Cloud SQL
- React
- Redux
