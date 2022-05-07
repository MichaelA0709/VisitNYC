CREATE TABLE `comments` (
  `comment_id` int NOT NULL AUTO_INCREMENT,
  `comment` varchar(150) NOT NULL,
  `author` varchar(45) NOT NULL,
  `rec_id` varchar(45) NOT NULL,
  `date` varchar(45) NOT NULL,
  PRIMARY KEY (`comment_id`)
) ENGINE=InnoDB AUTO_INCREMENT=60 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci
