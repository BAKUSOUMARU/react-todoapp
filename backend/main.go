package main

import (
	"log"
	"net/http"
	"os"

	"your_project_name/database"
	"your_project_name/routes"

	"github.com/gorilla/mux"
)

func main() {
	// Load environment variables
	dbHost := os.Getenv("DB_HOST")
	dbPort := os.Getenv("DB_PORT")
	dbUser := os.Getenv("DB_USER")
	dbPassword := os.Getenv("DB_PASSWORD")
	dbName := os.Getenv("DB_NAME")

	// Initialize database connection
	err := database.Connect(dbHost, dbPort, dbUser, dbPassword, dbName)
	if err != nil {
		log.Fatalf("Could not connect to the database: %v", err)
	}

	// Set up routes
	r := mux.NewRouter()
	routes.RegisterTodoRoutes(r)

	// Start the server
	port := "8080"
	log.Printf("Server is running on port %s", port)
	log.Fatal(http.ListenAndServe(":"+port, r))
}
