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
-- Table structure for table `crm_custom_contact`
--

DROP TABLE IF EXISTS `crm_custom_contact`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `crm_custom_contact` (
  `custom_contact_id` int(10) NOT NULL AUTO_INCREMENT COMMENT '客户联系人ID',
  `custom_contact_name` varchar(20) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL COMMENT '姓名（称呼）',
  `custom_contact_email` varchar(30) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL COMMENT '电子邮箱',
  `custom_contact_mobile` varchar(30) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL COMMENT '移动电话',
  `custom_contact_phone` varchar(30) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL COMMENT '固定电话',
  `custom_contact_QQ` varchar(20) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL COMMENT 'QQ',
  `custom_contact_wchat` varchar(20) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL COMMENT '微信',
  `custom_contact_websitname` varchar(45) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL COMMENT '网站名称',
  `custom_contact_webtype` varchar(45) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL COMMENT '网络类型',
  `company_id` int(10) DEFAULT NULL COMMENT '数据归属',
  `admin_id` int(10) DEFAULT NULL COMMENT '归属人',
  `custom_id` int(10) DEFAULT NULL COMMENT '客户ID',
  PRIMARY KEY (`custom_contact_id`),
  UNIQUE KEY `custom_contact_id_UNIQUE` (`custom_contact_id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci COMMENT='客户联系人';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `crm_custom_contact`
--

LOCK TABLES `crm_custom_contact` WRITE;
/*!40000 ALTER TABLE `crm_custom_contact` DISABLE KEYS */;
INSERT INTO `crm_custom_contact` VALUES (1,'吴俊雷','luckywujl@163.com','15358691188','0517-84811889','78637593','15358691188','淮安兴星佳科技有限公司','自有网站',0,1,2),(2,'施金华','78637593@qq.com','18932312010','0517-84811889','2734461330','13861578182','我的个人网站','',0,1,2),(3,'我的朋友','hahrkj@163.com','','','','','','',0,1,NULL),(5,'施金华1','luckywujl@163.com','15358691188','0517-84811889','','','','',0,1,NULL),(6,'施金华1','luckywujl@163.com','15358691188','','','','','',0,1,NULL),(8,'吴施璇','78637593@qq.com','1234','5678','3456','1234','4321','2222',0,1,2),(9,'吴施璇','78637593@qq.com','1234qqqq','qqq','qq','qqq','qq','qq',0,1,2),(11,'吴施璇','78637593@qq.com','1234','qqq','','1234','','',0,1,1),(12,'吴先生','','','','','','','',2,2,20),(13,'赵宗祥','hahrkj@163.com','123456789798','84811889','78627593','15358691188','兴星佳科技','自有网络',2,2,25);
/*!40000 ALTER TABLE `crm_custom_contact` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-03-03 23:54:01
