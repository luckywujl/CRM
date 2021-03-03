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
-- Table structure for table `crm_custom_ddetail`
--

DROP TABLE IF EXISTS `crm_custom_ddetail`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `crm_custom_ddetail` (
  `custom_ddetail_id` int(10) NOT NULL AUTO_INCREMENT COMMENT '发货信息ID',
  `custom_ddetail_time` int(11) DEFAULT NULL COMMENT '发货时间',
  `custom_ddetail_product` varchar(45) DEFAULT NULL COMMENT '产品名称',
  `custom_ddetail_number` double DEFAULT NULL COMMENT '发货数量',
  `custom_ddetail_person` varchar(45) DEFAULT NULL COMMENT '发货人',
  `custom_ddetail_logistics` varchar(45) DEFAULT NULL COMMENT '物流公司',
  `custom_ddetail_logistics_order` varchar(45) DEFAULT NULL COMMENT '物流单号',
  `custom_ddetail_remark` tinytext COMMENT '备注',
  `createtime` int(11) DEFAULT NULL COMMENT '创建时间',
  `updatetime` int(11) DEFAULT NULL COMMENT '修改时间',
  `deletetime` int(11) DEFAULT NULL COMMENT '删除时间',
  `company_id` int(10) DEFAULT NULL COMMENT '数据归属',
  `admin_id` int(10) DEFAULT NULL COMMENT '归属人',
  `custom_id` int(10) DEFAULT NULL COMMENT '客户ID',
  PRIMARY KEY (`custom_ddetail_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8 COMMENT='发货信息';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `crm_custom_ddetail`
--

LOCK TABLES `crm_custom_ddetail` WRITE;
/*!40000 ALTER TABLE `crm_custom_ddetail` DISABLE KEYS */;
INSERT INTO `crm_custom_ddetail` VALUES (1,1605424490,'水槽',1.34,'吴俊雷','德邦快递','DPK123456789','注意包装完好',1605424579,1605424579,NULL,0,1,2),(2,1609418797,'qaz',1,'q','a','ssss','aa',1609418807,1609418807,NULL,2,2,20),(3,1610024137,'',0,'','','','',1610024144,1610024144,NULL,2,2,22);
/*!40000 ALTER TABLE `crm_custom_ddetail` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-03-03 23:54:02
