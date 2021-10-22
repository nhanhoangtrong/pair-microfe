# Pair Coding MicroFE

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


App
"""""""""""""""""""""""""""""""""
"Header                         "
"                               "
"""""""""""""""""""""""""""""""""
"Main                           "
"                               "
"""""""""""""""""""""""""""""""""
