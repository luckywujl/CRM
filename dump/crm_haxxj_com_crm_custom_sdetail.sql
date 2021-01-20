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
-- Table structure for table `crm_custom_sdetail`
--

DROP TABLE IF EXISTS `crm_custom_sdetail`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `crm_custom_sdetail` (
  `custom_sdetail_id` int(10) NOT NULL AUTO_INCREMENT COMMENT '销售信息ID',
  `custom_sdetail_time` int(11) DEFAULT NULL COMMENT '销售时间',
  `custom_sdetail_product` varchar(45) DEFAULT NULL COMMENT '产品名称',
  `custom_sdetail_price` double DEFAULT NULL COMMENT '单价',
  `custom_sdetail_unit` varchar(45) DEFAULT NULL COMMENT '单位',
  `custom_sdetail_number` double DEFAULT NULL COMMENT '数量',
  `custom_sdetail_amount` double DEFAULT NULL COMMENT '金额',
  `custom_sdetail_deadline_time` int(11) DEFAULT NULL COMMENT '合同到期',
  `custom_sdetail_remark` tinytext COMMENT '备注',
  `createtime` int(11) DEFAULT NULL COMMENT '创建时间',
  `updatetime` int(11) DEFAULT NULL COMMENT '修改时间',
  `deletetime` int(11) DEFAULT NULL COMMENT '删除时间',
  `company_id` int(10) DEFAULT NULL COMMENT '数据归属',
  `admin_id` int(10) DEFAULT NULL COMMENT '归属人',
  `custom_id` int(10) DEFAULT NULL COMMENT '客户ID',
  PRIMARY KEY (`custom_sdetail_id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8 COMMENT='销售信息';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `crm_custom_sdetail`
--

LOCK TABLES `crm_custom_sdetail` WRITE;
/*!40000 ALTER TABLE `crm_custom_sdetail` DISABLE KEYS */;
INSERT INTO `crm_custom_sdetail` VALUES (1,1605411448,'一年期服务',3888,NULL,1,NULL,1605411448,'来吧',1605411507,1605411507,NULL,0,1,2),(2,1605420860,'一年期服务',2.5,NULL,2.5,NULL,1605420860,'',1605420871,1605420871,NULL,0,1,2),(3,1605630995,'在',2000,'套',1,NULL,1605630995,'',1605631004,1606404704,NULL,2,2,20),(4,1606404585,'在',1122,'套',12,NULL,1606404585,'',1606404595,1606404595,NULL,2,2,22);
/*!40000 ALTER TABLE `crm_custom_sdetail` ENABLE KEYS */;
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
