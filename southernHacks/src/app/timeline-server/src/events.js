var mysqlLib = require("mysqlLib");

mysqlLib.getConnection(function(err, mclient) {
    "INSERT INTO register (id, name, email, school) VALUES (NULL,'ferreira','pleasework@gmail.com','GSU');"
});