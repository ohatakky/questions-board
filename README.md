# questions-board

## Overview
イベント、勉強会等の質疑応答をリアルタイムに処理する。
匿名で投稿できるため、初参加の人やシャイな人も積極的に関わることができる。


## Requirements
- Realtime : 質疑応答の投稿をリアルタイムに表示できる。
- Social Login : ログイン権限があり、ログインユーザのみボードを作成できる。
- Sharable Dynamic URL : 作成したボードは動的なURLによりシェアできる。


## Memo
- serverのroutingにはechoを使用
- clientのroutingにはreact-routerを使用
- SocialLoginはfacebookAPIとOAuth2.0で実装
- 動的なURLには共通鍵暗号方式を用いる。Oauthでreturnされたtokenを暗号化して、ボードへのアクセス時に復号し、Adminのtokenと一致したらtrue

## Architecture
- Go
- Cloud SQL
- React
- Redux
