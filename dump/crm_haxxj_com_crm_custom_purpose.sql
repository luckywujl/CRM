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
-- Table structure for table `crm_custom_purpose`
--

DROP TABLE IF EXISTS `crm_custom_purpose`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `crm_custom_purpose` (
  `custom_purpose_id` int(10) NOT NULL AUTO_INCREMENT COMMENT '客户意向ID',
  `custom_purpose_product` varchar(45) DEFAULT NULL COMMENT '产品名称',
  `custom_purpose_price` double DEFAULT NULL COMMENT '单价预算',
  `custom_purpose_number` double DEFAULT NULL COMMENT '数量预估',
  `custom_purpose_time` varchar(45) DEFAULT NULL COMMENT '发生时间',
  `custom_purpose_remark` tinytext COMMENT '备注',
  `company_id` int(10) DEFAULT NULL COMMENT '数据归属',
  `admin_id` int(10) DEFAULT NULL COMMENT '归属人',
  `custom_id` int(10) DEFAULT NULL COMMENT '客户ID',
  PRIMARY KEY (`custom_purpose_id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8 COMMENT='客户意向';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `crm_custom_purpose`
--

LOCK TABLES `crm_custom_purpose` WRITE;
/*!40000 ALTER TABLE `crm_custom_purpose` DISABLE KEYS */;
INSERT INTO `crm_custom_purpose` VALUES (1,'1',1,1,'1605277660','111',0,1,2),(2,'qq',123,23,'1605360316','先试一下',0,1,1),(3,'一年服务',200,1,'1605630956','先试一下',2,2,20),(5,'二年服务',123,123,'1606229766','20201124',2,2,22);
/*!40000 ALTER TABLE `crm_custom_purpose` ENABLE KEYS */;
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
