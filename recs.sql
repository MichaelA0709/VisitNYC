CREATE TABLE `recs` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(45) NOT NULL,
  `created_at` varchar(45) NOT NULL,
  `category` enum('food','museums','zoos','parks') NOT NULL,
  `rec_text` varchar(150) NOT NULL,
  `author` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=62 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci
