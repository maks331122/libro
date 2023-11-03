let express = require("express");
let app = express();
const cors = require("cors");
let mysql = require("mysql2");

app.use(express.urlencoded({ extended: true }));

app.use(cors());

let connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "1234",
  database: "books",
});

app.get("/book/:id", function (req, res) {
  console.log("ok");
  let bookId = req.params.id;
  connection.query(
    "SELECT * FROM book WHERE id = ?",
    [bookId],
    function (error, results, fields) {
      if (error) {
        console.error("Помилка запиту до бази даних:", error);
        return;
      }

      if (results.length > 0) {
        const bookData = results[0]; // Перший рядок результатів
        console.log("Дані книги у вигляді об'єкта:", bookData);
        res.json(bookData);
      } else {
        console.log("Книга з ID", bookId, "не знайдена.");
      }
    }
  );
});

app.get("/search/:name", function (req, res) {
  console.log("ok");
  let bookName = req.params.name
  connection.query(
    "SELECT * FROM book WHERE book_name LIKE ?",
    [bookName + '%'],
    function (error, results, fields) {
      if (error) {
        console.error("Помилка запиту до бази даних:", error);
        return;
      }

      if (results.length > 0) {
        const bookData = results; // Всі рядки результатів
        console.log("Дані книг у вигляді масиву:", bookData);
        res.json(bookData);
      } else {
        console.log("Книга з Ім'ям", bookName, "не знайдена.");
        res.json('nope');
      }
    }
  );
});

app.listen(8080, function () {
  console.log("App listening on port 8080!");
});
