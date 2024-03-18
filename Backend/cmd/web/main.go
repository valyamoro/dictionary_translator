package main

import (
	"database/sql"
	_ "github.com/go-sql-driver/mysql"
	"log"
	"os"
)

type application struct {
	errorLog *log.Logger
	infoLog  *log.Logger
}

func main() {
	errorLog := log.New(os.Stderr, "ERROR\t", log.Ldate|log.Ltime|log.Lshortfile)
	infoLog := log.New(os.Stdout, "INFO\t", log.Ltime|log.Ltime)

	dsn := `root:mysql@tcp(127.0.0.1:3306)/dictionary?parseTime=true`
	db, err := openDB(dsn)
	if err != nil {
		errorLog.Fatal(err)
	}

	err = db.Close()
	if err != nil {
		return
	}

	_ = &application{
		errorLog: errorLog,
		infoLog:  infoLog,
	}

	infoLog.Printf("Starting server")
}

func openDB(dsn string) (*sql.DB, error) {
	db, err := sql.Open(`mysql`, dsn)
	if err != nil {
		return nil, err
	}

	if err = db.Ping(); err != nil {
		return nil, err
	}

	return db, nil
}
