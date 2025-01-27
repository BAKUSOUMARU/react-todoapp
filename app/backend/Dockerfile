# ビルド用ステージ
FROM golang:1.18-alpine AS builder

# 作業ディレクトリを設定（/app/backend）
WORKDIR /app/backend

# Goの依存関係を取得するためにgo.modとgo.sumをコピー
COPY go.mod ./

# 依存関係をダウンロード（これでキャッシュされる）
RUN go mod tidy

# ソースコードをコンテナ内の作業ディレクトリにコピー
COPY . .

# Goアプリケーションをビルド
RUN go build -o main .

# 最終的な軽量イメージ
FROM alpine:latest

# 作業ディレクトリを設定（/app/backend）
WORKDIR /app/backend

# ビルドステージからビルドしたバイナリをコピー
COPY --from=builder /app/backend/main /app/backend/main

# 必要なポートを公開
EXPOSE 8080

# コンテナ起動時に実行するコマンド
CMD ["/app/backend/main"]
