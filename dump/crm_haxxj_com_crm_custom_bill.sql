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
-- Table structure for table `crm_custom_bill`
--

DROP TABLE IF EXISTS `crm_custom_bill`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `crm_custom_bill` (
  `custom_bill_id` int(10) NOT NULL AUTO_INCREMENT COMMENT '票据信息ID',
  `custom_bill_time` int(11) DEFAULT NULL COMMENT '开票时间',
  `custom_bill_content` tinytext COMMENT '开票内容',
  `custom_bill_type` varchar(45) DEFAULT NULL COMMENT '票据类型',
  `custom_bill_order` varchar(45) DEFAULT NULL COMMENT '票据编号',
  `custom_bill_account` double DEFAULT NULL COMMENT '票据金额',
  `custom_bill_person` varchar(45) DEFAULT NULL COMMENT '经手人',
  `custom_bill_payment_method` varchar(45) DEFAULT NULL COMMENT '支付方式',
  `custom_bill_remark` tinytext COMMENT '摘要',
  `createtime` int(11) DEFAULT NULL COMMENT '创建时间',
  `updatetime` int(11) DEFAULT NULL COMMENT '修改时间',
  `deletetime` int(11) DEFAULT NULL COMMENT '删除时间',
  `company_id` int(10) DEFAULT NULL COMMENT '数据归属',
  `admin_id` int(10) DEFAULT NULL COMMENT '归属人',
  `custom_id` int(10) DEFAULT NULL COMMENT '客户ID',
  PRIMARY KEY (`custom_bill_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8 COMMENT='票据信息';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `crm_custom_bill`
--

LOCK TABLES `crm_custom_bill` WRITE;
/*!40000 ALTER TABLE `crm_custom_bill` DISABLE KEYS */;
INSERT INTO `crm_custom_bill` VALUES (1,1605453953,'招待费','普通发票','123456',1200,'张三','现金','协议单位的',1605453990,1605454031,NULL,0,1,2),(2,1609418850,'餐费','普通发票','123456',12,'从','有','朋',1609418874,1610028621,NULL,2,2,20);
/*!40000 ALTER TABLE `crm_custom_bill` ENABLE KEYS */;
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
