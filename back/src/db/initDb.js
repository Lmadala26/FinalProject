import getPool from "./getPool.js";

const main = async () => {
  let pool;

  try {
    pool = await getPool();

    await pool.query(
      "DROP TABLE IF EXISTS users, topics, comments, commentsPhotos, positivesVotes, negativeVotes "
    );

    console.log("Creando base de datos");

    await pool.query(`
            CREATE TABLE IF NOT EXISTS users (
                id CHAR(30) PRIMARY KEY NOT NULL,
                email VARCHAR(100) UNIQUE NOT NULL,
                username VARCHAR(30) UNIQUE NOT NULL,
                password VARCHAR(100) NOT NULL,
                profilePhoto VARCHAR(100),
                active BOOLEAN DEFAULT false,
                role ENUM('superuser', 'user') DEFAULT 'user',
                registrationCode CHAR(30),
                recoverPassCode CHAR(10),
                createdAt DATETIME DEFAULT CURRENT_TIMESTAMP, 
                modifiedAt DATETIME ON UPDATE CURRENT_TIMESTAMP
                )	
        `);
    await pool.query(`
            CREATE TABLE IF NOT EXISTS topics (
                id CHAR(30) PRIMARY KEY NOT NULL,
                name ENUM('deportes','viajes','economia')
                )
        `);

    await pool.query(`
            CREATE TABLE IF NOT EXISTS comments (
                id CHAR(30) PRIMARY KEY NOT NULL,
                title VARCHAR(50) NOT NULL,
                topicsID CHAR(30) NOT NULL,
                description TEXT NOT NULL,
                userId CHAR(30) NOT NULL,
                createdAt DATETIME DEFAULT CURRENT_TIMESTAMP, 
                FOREIGN KEY (userId) REFERENCES users(id),
                FOREIGN KEY (topicsId) REFERENCES topics(id)
                )
        `);

    await pool.query(`
            CREATE TABLE IF NOT EXISTS commentsPhotos (
                id CHAR(50) PRIMARY KEY NOT NULL,
                name VARCHAR(100) NOT NULL,
                commentsId CHAR(30) NOT NULL,
                FOREIGN KEY (commentsId) REFERENCES comments(id),
                createdAt DATETIME DEFAULT CURRENT_TIMESTAMP
            )
        `);

    await pool.query(`
            CREATE TABLE IF NOT EXISTS positivesVotes (
                id CHAR(50) PRIMARY KEY NOT NULL,
                value TINYINT UNSIGNED NOT NULL,
                userId CHAR(30) NOT NULL,
                commentsId CHAR(30) NOT NULL,
                createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
                FOREIGN KEY (userId) REFERENCES users(id),
                FOREIGN KEY (commentsId) REFERENCES comments(id)
            )
        `);

    await pool.query(`
            CREATE TABLE IF NOT EXISTS negativeVotes (
                id CHAR(50) PRIMARY KEY NOT NULL,
                value TINYINT UNSIGNED NOT NULL,
                userId CHAR(30) NOT NULL,
                commentsId CHAR(30) NOT NULL,
                createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
                FOREIGN KEY (userId) REFERENCES users(id),
                FOREIGN KEY (commentsId) REFERENCES comments(id)
            )
        `);

    console.log("Base de datos creada");
  } catch (err) {
    console.error(err);
  } finally {
    process.exit();
  }
};

main();
