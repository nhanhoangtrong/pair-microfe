# Pair Coding MicroFE

## Usage
<pre>
yarn install
cd header && yarn start -> start header server
cd ../app && yarn start -> start main app server

<strong><i>Main app will be served at localhost:3001</i></strong>
</pre>

## Scenario

### 1. Main app

- Container chứa tất cả các thành phần của website: Header, Footer, Main, Sidebar
- Container sẽ làm nhiệm vụ Initialize React, ReactDOM

### 2. Header

- Chứa những thành phần ở trên Header bao gồm Logo, Search, User Account, ...

## Monolith

- Chứa 2 thư mục app và header
- Build -> build cả app và header

## Micro-frontends

- Chia phần build ra: header, app
- Sau khi build header, serve nó ở 1 cái endpoint
- App (container) request tới Header khi cần

<pre>
App
"""""""""""""""""""""""""""""""""
"Header                         "
"                               "
"""""""""""""""""""""""""""""""""
"Main                           "
"                               "
"""""""""""""""""""""""""""""""""
</pre>

# Updates
## 25/10/2021
- Able to start main app with remote header from other host using module federation

<strong>Next question: </strong> If we import shared module from outside, how would it affect to performance?