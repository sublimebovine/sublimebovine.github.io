-- MySQL dump 10.13  Distrib 8.0.41, for Linux (x86_64)
--
-- Host: localhost    Database: login_db
-- ------------------------------------------------------
-- Server version	8.0.41-0ubuntu0.24.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `emails`
--

DROP TABLE IF EXISTS `emails`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `emails` (
  `id` int NOT NULL AUTO_INCREMENT,
  `email` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `emails`
--

LOCK TABLES `emails` WRITE;
/*!40000 ALTER TABLE `emails` DISABLE KEYS */;
INSERT INTO `emails` VALUES (1,'a@gmail.com'),(4,'sbj33@gmail.com'),(3,'sean@winlab.com');
/*!40000 ALTER TABLE `emails` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `forecast`
--

DROP TABLE IF EXISTS `forecast`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `forecast` (
  `source` varchar(255) DEFAULT NULL,
  `Lat` decimal(10,2) DEFAULT NULL,
  `Lon` decimal(10,2) DEFAULT NULL,
  `TIME` int DEFAULT NULL,
  `DATE` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `forecast`
--

LOCK TABLES `forecast` WRITE;
/*!40000 ALTER TABLE `forecast` DISABLE KEYS */;
INSERT INTO `forecast` VALUES ('openweathermap',37.58,43.59,1745954415,'2025-04-29T19:20:15.567Z'),('openweathermap',40.52,-74.46,1745954423,'2025-04-29T19:20:23.400Z'),('openweathermap',40.52,-74.46,1745954428,'2025-04-29T19:20:28.619Z'),('openweathermap',40.52,-74.46,1745954464,'2025-04-29T19:21:04.238Z'),('openweathermap',43.97,-89.74,1745954480,'2025-04-29T19:21:20.301Z'),('openweathermap',40.52,-74.46,1745954490,'2025-04-29T19:21:30.138Z'),('openweathermap',40.52,-74.46,1745954781,'2025-04-29T19:26:21.571Z'),('openweathermap',41.52,-74.46,1745954787,'2025-04-29T19:26:27.834Z'),('openweathermap',40.52,-74.46,1745954854,'2025-04-29T19:27:34.106Z'),('openweathermap',39.47,-82.81,1745954892,'2025-04-29T19:28:12.108Z'),('openweathermap',40.52,-74.46,1745954982,'2025-04-29T19:29:42.903Z'),('openweathermap',40.52,-74.46,1745954998,'2025-04-29T19:29:58.404Z'),('openweathermap',40.52,-74.46,1745955047,'2025-04-29T19:30:47.438Z'),('openweathermap',40.52,-74.46,1745955202,'2025-04-29T19:33:22.457Z'),('openweathermap',32.69,-81.56,1745955469,'2025-04-29T19:37:49.352Z'),('openweathermap',40.52,-74.46,1745955471,'2025-04-29T19:37:51.226Z'),('openweathermap',41.52,-74.46,1745955474,'2025-04-29T19:37:54.116Z'),('openweathermap',40.52,-74.46,1745955697,'2025-04-29T19:41:37.382Z'),('openweathermap',41.52,-74.46,1745955703,'2025-04-29T19:41:43.030Z'),('openweathermap',40.52,-74.46,1745955712,'2025-04-29T19:41:52.388Z'),('openweathermap',41.52,-74.46,1745955713,'2025-04-29T19:41:53.900Z'),('openweathermap',40.52,-74.46,1745956411,'2025-04-29T19:53:31.802Z'),('openweathermap',40.52,-74.46,1745956413,'2025-04-29T19:53:33.356Z'),('openweathermap',40.52,-74.46,1745956413,'2025-04-29T19:53:33.734Z'),('openweathermap',41.11,-103.01,1745956628,'2025-04-29T19:57:08.546Z'),('openweathermap',38.41,-96.33,1745956672,'2025-04-29T19:57:52.405Z'),('openweathermap',59.80,58.36,1745956693,'2025-04-29T19:58:13.674Z'),('openweathermap',59.27,-111.09,1745956697,'2025-04-29T19:58:17.598Z'),('openweathermap',69.72,-35.86,1745956700,'2025-04-29T19:58:20.442Z'),('openweathermap',40.52,-74.46,1745957127,'2025-04-29T20:05:27.766Z'),('openweathermap',40.52,-74.46,1745957233,'2025-04-29T20:07:13.226Z'),('openweathermap',41.52,-74.46,1745957236,'2025-04-29T20:07:16.013Z'),('openweathermap',40.52,-74.46,1745957237,'2025-04-29T20:07:17.474Z'),('openweathermap',41.52,-74.46,1745957239,'2025-04-29T20:07:19.085Z'),('openweathermap',40.52,-74.46,1745957240,'2025-04-29T20:07:20.132Z'),('openweathermap',41.52,-74.46,1745957241,'2025-04-29T20:07:21.784Z'),('openweathermap',41.52,-74.46,1745957252,'2025-04-29T20:07:32.835Z'),('openweathermap',40.52,-74.46,1745976025,'2025-04-30T01:20:25.279Z'),('openweathermap',40.52,-74.46,1745980062,'2025-04-30T02:27:42.295Z'),('openweathermap',40.52,-74.46,1746037028,'2025-04-30T18:17:08.637Z'),('openweathermap',57.04,63.28,1746037038,'2025-04-30T18:17:18.776Z'),('openweathermap',39.23,-92.11,1746466098,'2025-05-05T17:28:18.634Z'),('openweathermap',38.32,-79.22,1746466104,'2025-05-05T17:28:24.591Z'),('openweathermap',37.35,-85.60,1746466203,'2025-05-05T17:30:03.676Z'),('openweathermap',40.52,-74.46,1746466205,'2025-05-05T17:30:05.277Z'),('openweathermap',38.01,-91.79,1746466478,'2025-05-05T17:34:38.240Z'),('openweathermap',51.07,66.80,1746466482,'2025-05-05T17:34:42.592Z'),('openweathermap',62.02,79.45,1746466486,'2025-05-05T17:34:46.677Z'),('openweathermap',40.13,74.44,1746466840,'2025-05-05T17:40:40.620Z'),('openweathermap',40.52,-74.46,1746466849,'2025-05-05T17:40:49.399Z'),('openweathermap',40.13,74.44,1746466851,'2025-05-05T17:40:51.181Z'),('openweathermap',40.13,-74.44,1746466972,'2025-05-05T17:42:52.111Z'),('openweathermap',40.52,-74.46,1746466978,'2025-05-05T17:42:58.011Z'),('openweathermap',40.13,-75.44,1746467147,'2025-05-05T17:45:47.850Z'),('openweathermap',40.13,-74.74,1746467254,'2025-05-05T17:47:34.347Z'),('openweathermap',40.13,-75.44,1746467257,'2025-05-05T17:47:37.391Z'),('openweathermap',40.13,-74.74,1746467259,'2025-05-05T17:47:39.135Z');
/*!40000 ALTER TABLE `forecast` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `locations`
--

DROP TABLE IF EXISTS `locations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `locations` (
  `name` varchar(255) DEFAULT NULL,
  `Lat` decimal(10,2) DEFAULT NULL,
  `Lon` decimal(10,2) DEFAULT NULL,
  `Rating` int DEFAULT NULL,
  `Reviews` varchar(255) DEFAULT NULL,
  `Description` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `locations`
--

LOCK TABLES `locations` WRITE;
/*!40000 ALTER TABLE `locations` DISABLE KEYS */;
INSERT INTO `locations` VALUES ('Six Flags',40.13,-74.44,4,'place','Popular amusment park'),('Six Flags Gobi Desert',40.13,74.44,4,'place','Popular amusment park');
/*!40000 ALTER TABLE `locations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `reviews`
--

DROP TABLE IF EXISTS `reviews`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `reviews` (
  `id` int NOT NULL AUTO_INCREMENT,
  `User` varchar(255) DEFAULT NULL,
  `Text` varchar(512) DEFAULT NULL,
  `Rating` int DEFAULT NULL,
  `Code` varchar(255) DEFAULT NULL,
  `Name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `reviews`
--

LOCK TABLES `reviews` WRITE;
/*!40000 ALTER TABLE `reviews` DISABLE KEYS */;
/*!40000 ALTER TABLE `reviews` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `username` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `premium` char(1) DEFAULT NULL,
  `confidence` int DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES ('test','$2b$10$cIuR3LImLSAQPIhm0WEBYey7f2WtV8KoPYnYhFVrLpsWqYedEj3e6',NULL,NULL,NULL),('test2','$2b$10$bc4J24JnwYG.ANoiS1Up9.mtPJWbmHTLPV9MIBNj4Uzu64DNdQhEe',NULL,NULL,NULL);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-05-05 13:49:58
