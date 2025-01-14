# Name
"front_react_viet"

# Features
"front_react_viet"

# Requirement
- docker

# Usage
### case1（GitLabからClone）
1. コンテナに繋ぐ
2. GitLabから任意のprojectをCloneする
3. ターミナルで"yarn"してpackge.jsonの内容をinstall
4. ターミナルで"yarn dev"して立ち上げる

### case2(新しくプロジェクトを立ち上げる場合)
1. コンテナをに繋ぐ
2. ターミナルで"yarn create vite [project name] --template react-ts"
3. cd [project name] yarn add -D vite@5.0.0でviteのversionを固定
4. package.jsonの"dev": "vite"を"dev": "vite --host"に変更
5. ターミナルで"yarn dev"して立ち上げる

※case1とファイル構成が異なるため4.でフォルダの移動が必要な点を注意する
 
# Note
### vscodeの設定
vscodeプラグイン
- stylelint
- prettier-code formatter

# Author
- hiroshi muramatsu
