# ふるさとズ　マニュアル

## 開発環境構築
```bash
docker-compose build
docker-compose run --rm app sh -c 'npm install'
```

## 開発サーバー起動
```bash
docker-compose up
```

## 開発サーバURL
[http://localhost:4321](http://localhost:4321)

## ビルド
```bash
docker-compose run --rm app sh -c 'npm run build'
```