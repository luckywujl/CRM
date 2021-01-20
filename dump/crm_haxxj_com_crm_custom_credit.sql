-- MySQL dump 10.13  Distrib 8.0.22, for Linux (x86_64)
--
-- Host: localhost    Database: crm_haxxj_com
-- ------------------------------------------------------
-- Server version	8.0.16

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `crm_custom_credit`
--

DROP TABLE IF EXISTS `crm_custom_credit`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `crm_custom_credit` (
  `custom_credit_id` int(10) NOT NULL AUTO_INCREMENT COMMENT '序号ID',
  `custom_id` int(10) DEFAULT NULL COMMENT '客户ID',
  `custom_admin` int(10) DEFAULT NULL COMMENT '受信用户',
  `custom_credit_type` enum('0','1','2') CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL COMMENT '受信类型:0=所有者,1=可查看,2=可编辑',
  `company_id` int(10) DEFAULT NULL COMMENT '归属公司',
  `admin_id` int(10) DEFAULT NULL COMMENT '归属人',
  PRIMARY KEY (`custom_credit_id`)
) ENGINE=InnoDB AUTO_INCREMENT=142 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci COMMENT='受信关系表';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `crm_custom_credit`
--

LOCK TABLES `crm_custom_credit` WRITE;
/*!40000 ALTER TABLE `crm_custom_credit` DISABLE KEYS */;
INSERT INTO `crm_custom_credit` VALUES (6,2,2,'1',2,2),(7,20,2,'1',2,2),(10,22,2,'0',2,2),(73,19,3,'1',0,1),(74,23,1,'1',0,1),(79,24,1,'0',0,1),(103,21,2,'2',0,1),(104,21,3,'2',0,1),(105,21,4,'2',0,1),(108,10,2,'1',0,1),(109,10,3,'1',0,1),(110,10,4,'1',0,1),(115,8,5,'1',0,1),(116,10,5,'1',0,1),(117,11,5,'1',0,1),(118,19,5,'1',0,1),(119,21,5,'1',0,1),(123,2,3,'1',2,2),(124,20,3,'1',2,2),(125,22,3,'1',2,2),(126,25,2,'0',2,2),(128,1,2,'1',0,1),(129,1,3,'1',0,1),(130,1,4,'1',0,1),(131,1,5,'1',0,1),(132,23,2,'1',0,1),(133,24,2,'1',0,1),(134,23,3,'1',0,1),(135,24,3,'1',0,1),(136,23,4,'1',0,1),(137,24,4,'1',0,1),(138,23,5,'1',0,1),(139,24,5,'1',0,1),(140,25,3,'1',2,2),(141,26,2,'0',2,2);
/*!40000 ALTER TABLE `crm_custom_credit` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-01-20 22:02:11
