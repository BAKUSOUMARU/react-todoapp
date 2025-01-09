package database

import (
	"database/sql"
	"fmt"
	"log"

	_ "github.com/go-sql-driver/mysql"
)

var DB *sql.DB

// Connect initializes the database connection
func Connect(host, port, user, password, dbName string) error {
	dsn := fmt.Sprintf("%s:%s@tcp(%s:%s)/%s?parseTime=true", user, password, host, port, dbName)
	var err error
	DB, err = sql.Open("mysql", dsn)
	if err != nil {
		return err
	}

	// Verify the connection
	if err = DB.Ping(); err != nil {
		return err
	}

	log.Println("Successfully connected to the database")
	return nil
}
