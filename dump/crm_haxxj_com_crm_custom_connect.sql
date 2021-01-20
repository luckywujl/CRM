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
-- Table structure for table `crm_custom_connect`
--

DROP TABLE IF EXISTS `crm_custom_connect`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `crm_custom_connect` (
  `custom_connect_id` int(10) NOT NULL AUTO_INCREMENT COMMENT '沟通记录ID',
  `custom_connect_time` int(11) DEFAULT NULL COMMENT '沟通时间',
  `custom_connect_active_phone` varchar(45) DEFAULT NULL COMMENT '有效电话',
  `custom_connect_content` tinytext COMMENT '沟通内容',
  `custom_connect_promotion` varchar(45) DEFAULT NULL COMMENT '推广方式',
  `custom_connect_rating` varchar(10) DEFAULT NULL COMMENT '效果评比',
  `custom_connect_communic` varchar(45) DEFAULT NULL COMMENT '沟通方式',
  `custom_connect_feedback` tinytext COMMENT '客户反馈及修改',
  `custom_connect_person` varchar(45) DEFAULT NULL COMMENT '回访人',
  `custom_operation_person` varchar(45) DEFAULT NULL COMMENT '竞价负责人',
  `custom_adjust_time` int(11) DEFAULT NULL COMMENT '调整时间',
  `custom_after_sale` tinytext COMMENT '账户售后方案',
  `custom_adjust_person` varchar(45) DEFAULT NULL COMMENT '调整专员',
  `createtime` int(11) DEFAULT NULL COMMENT '创建时间',
  `updatetime` int(11) DEFAULT NULL COMMENT '修改时间',
  `deletetime` int(11) DEFAULT NULL COMMENT '删除时间',
  `company_id` int(10) DEFAULT NULL COMMENT '数据归属',
  `admin_id` int(10) DEFAULT NULL COMMENT '归属人',
  `custom_id` int(10) DEFAULT NULL COMMENT '客户ID',
  PRIMARY KEY (`custom_connect_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8 COMMENT='沟通记录';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `crm_custom_connect`
--

LOCK TABLES `crm_custom_connect` WRITE;
/*!40000 ALTER TABLE `crm_custom_connect` DISABLE KEYS */;
INSERT INTO `crm_custom_connect` VALUES (1,1605409004,'1','222','2','A','电话','多','2','有',1605409004,'4444','',1605409061,1605409225,NULL,0,1,2),(2,1605630977,'1','询问相关内容111','搜狗','A+','视频','d','d','d',1605630977,'d','',1605630991,1609425694,NULL,2,2,20),(3,1606229653,'1','22','搜狗','A+','电话','2','2','2',1606229653,'2','2',1606229668,1609425681,NULL,2,2,22);
/*!40000 ALTER TABLE `crm_custom_connect` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-01-20 22:02:12
