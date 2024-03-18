package main

import "database/sql"
import _ "github.com/go-sql-driver/mysql"

func main() {
	dsn := `root:mysql@tcp(127.0.0.1:3306)/dictionary?parseTime=true`
	_, err := openDB(dsn)
	if err != nil {
		panic(err)
	}
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
