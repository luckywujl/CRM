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
-- Table structure for table `crm_custom_payment`
--

DROP TABLE IF EXISTS `crm_custom_payment`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `crm_custom_payment` (
  `custom_payment_id` int(10) NOT NULL AUTO_INCREMENT COMMENT '款项信息ID',
  `custom_payment_content1` varchar(45) DEFAULT NULL COMMENT '款项内容',
  `custom_payment_paytime` int(10) DEFAULT NULL COMMENT '发生时间',
  `custom_payment_content` varchar(45) DEFAULT NULL COMMENT '款项内容',
  `custom_payment_account` double DEFAULT NULL COMMENT '金额',
  `custom_payment_bidding` varchar(45) DEFAULT NULL COMMENT '提单竞价',
  `custom_payment_handler` varchar(45) DEFAULT NULL COMMENT '经手人',
  `custom_payment_method` varchar(45) DEFAULT NULL COMMENT '支付方式',
  `custom_payment_type` varchar(45) DEFAULT NULL COMMENT '款项类别',
  `custom_payment_person` varchar(45) DEFAULT NULL COMMENT '填写人',
  `custom_payment_remark` tinytext COMMENT '摘要',
  `createtime` int(11) DEFAULT NULL COMMENT '创建时间',
  `updatetime` int(11) DEFAULT NULL COMMENT '修改时间',
  `deletetime` int(11) DEFAULT NULL COMMENT '删除时间',
  `company_id` int(10) DEFAULT NULL COMMENT '数据归属',
  `admin_id` int(10) DEFAULT NULL COMMENT '归属人',
  `custom_id` int(10) DEFAULT NULL COMMENT '客户ID',
  PRIMARY KEY (`custom_payment_id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8 COMMENT='款项信息';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `crm_custom_payment`
--

LOCK TABLES `crm_custom_payment` WRITE;
/*!40000 ALTER TABLE `crm_custom_payment` DISABLE KEYS */;
INSERT INTO `crm_custom_payment` VALUES (1,'推广服务',1605454097,'下一年服务费',2500,'张','李','现金','主营销售收入','吴','正常销售收入',1605454148,1609591721,NULL,0,1,2),(2,'餐费',1605715474,'1',1,'1','1','转账','主营销售收入','1','1',1605715483,1609425101,NULL,2,3,20),(3,'餐费',1609421784,'付费',12,'1','1','现金','主营销售收入','1','1',1609421846,1609425091,NULL,2,2,20),(4,'餐费',1610029923,'',100,'','','转账','主营销售收入','11','',1610029934,1614729622,NULL,2,2,22),(5,'餐费',1614729162,'mwee',150,'','1','现金','主营销售收入','','',1614729183,1614729590,NULL,2,2,22);
/*!40000 ALTER TABLE `crm_custom_payment` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-03-03 23:54:00
