package main

import (
	"fmt"
	"log"
	"net/http"
)

func helloHandler(w http.ResponseWriter, r *http.Request) {
	// HTTPレスポンスに「Hello, World!」を出力
	fmt.Fprintln(w, "Hello, World!")
}

func main() {
	// ハンドラをルーティング
	http.HandleFunc("/", helloHandler)

	// サーバーを開始 (ポート8080)
	fmt.Println("Starting server on :8080...")
	if err := http.ListenAndServe(":8080", nil); err != nil {
		log.Fatal(err)
	}
}
