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
-- Table structure for table `crm_custom_info`
--

DROP TABLE IF EXISTS `crm_custom_info`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `crm_custom_info` (
  `custom_id` int(10) unsigned NOT NULL AUTO_INCREMENT COMMENT '客户ID',
  `company_id` int(10) DEFAULT NULL COMMENT '归属公司',
  `admin_id` int(10) DEFAULT NULL COMMENT '归属人',
  `createtime` int(11) DEFAULT NULL COMMENT '创建时间',
  `updatetime` int(11) DEFAULT NULL COMMENT '修改时间',
  `deletetime` int(11) DEFAULT NULL COMMENT '删除时间',
  `custom_promotion_type` varchar(45) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL COMMENT '推广类型',
  `custom_type` varchar(45) COLLATE utf8_unicode_ci DEFAULT NULL COMMENT '客户类型ID',
  `custom_industry` varchar(45) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL COMMENT '行业',
  `custom_server` varchar(45) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL COMMENT '服务器',
  `custom_channel` varchar(45) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL COMMENT '渠道',
  `custom_online_status` varchar(45) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL COMMENT '上线状态',
  `custom_online_time` varchar(45) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL COMMENT '上线时段',
  `custom_operation_person` varchar(45) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL COMMENT '竞价负责人',
  `custom_visit_standard` varchar(45) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL COMMENT '回访标准',
  `custom_login_password` varchar(20) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL COMMENT '登陆密码',
  `custom_security_master_phone` varchar(45) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL COMMENT '密保主手机',
  `custom_security_sub_phone` varchar(45) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL COMMENT '密保子手机',
  `custom_website_name` varchar(100) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL COMMENT '网站名称',
  `custom_wap` varchar(100) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL COMMENT '手机网站',
  `custom_website_password` varchar(20) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL COMMENT '网址登陆密码',
  `custom_pc_website` varchar(100) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL COMMENT 'PC网站',
  `custom_website_code` varchar(45) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL COMMENT '网站号码',
  `custom_copyright` varchar(100) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL COMMENT '版权',
  `custom_opening_dete` date DEFAULT NULL COMMENT '下户日期',
  `custom_sale_total` double DEFAULT NULL COMMENT '销售汇总',
  `custom_payment_total` double DEFAULT '0' COMMENT '付款汇总',
  `custom_payable_total` double DEFAULT NULL COMMENT '应付金额',
  `custom_full_name` varchar(45) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL COMMENT '客户姓名',
  `custom_baidu_id` varchar(20) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL COMMENT '53百度ID',
  `custom_offline_id` varchar(20) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL COMMENT '53离线宝ID',
  `custom_bidding_remark` tinytext CHARACTER SET utf8 COLLATE utf8_unicode_ci COMMENT '竞价备注',
  `custom_remark` tinytext CHARACTER SET utf8 COLLATE utf8_unicode_ci COMMENT '备注',
  PRIMARY KEY (`custom_id`)
) ENGINE=InnoDB AUTO_INCREMENT=27 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci COMMENT='客户信息';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `crm_custom_info`
--

LOCK TABLES `crm_custom_info` WRITE;
/*!40000 ALTER TABLE `crm_custom_info` DISABLE KEYS */;
INSERT INTO `crm_custom_info` VALUES (1,0,1,1,1605542814,NULL,'百度搜索','B类客户','苗木','服务器测试','南京神马','暂停户（每周至少一次）','1','1','一天十个电话','1','1','1','1','1','1','1','1','1','2020-10-11',NULL,0,NULL,'吴俊雷','1','1','1','1'),(2,2,2,1,1605624650,NULL,'测试推广类型','A类客户','苗猪','MC-205（盈茂、锦业）','南京神马','暂停户（每周至少一次）','1605571201','1','新户（连续3天回访）','1','1','1','1','1','1112','1','1','1','2020-10-11',NULL,0,NULL,'施金华','','','1','1'),(8,0,1,1605543369,1605543369,NULL,'再测试','B类客户','苗猪','服务器测试','南京神马','暂停户（每周至少一次）','1605543340','在','一天十个电话','','','','','','','','','','2020-11-17',NULL,0,NULL,'','','','',''),(10,0,1,1605624744,1605624744,NULL,'百度搜索','C类客户','苗猪','服务器测试','南京神马','暂停户（每周至少一次）',NULL,'','新户（连续3天回访）','','','','','','','','','','2020-11-17',NULL,0,NULL,'吴先生','','','',''),(11,0,1,1605624945,1605625052,NULL,'再测试','C类客户','苗木','服务器测试','南京神马','暂停户（每周至少一次）','1605624921','张','新户（连续3天回访）','','','','','','','','','','2020-11-17',NULL,0,NULL,'大','1212','23232','',''),(19,0,1,1605630142,1605630142,NULL,'百度搜索','B类客户','苗猪','服务器测试','南京神马','暂停户（每周至少一次）',NULL,'','','','','','','','','','','','2020-11-18',NULL,0,NULL,'张先生 66','','','',''),(20,2,2,1605630683,1605630683,NULL,'搜狗','B类客户','苗木','MC-205（盈茂、锦业）','南京神马','暂停户（每周至少一次）','1605630672','吴称王称霸','新户（连续3天回访）','','','','','','','','','','2020-11-18',NULL,0,NULL,'张先生 ','','','',''),(21,0,1,1605630863,1605630863,NULL,'再测试','B类客户','苗猪','服务器测试','南京神马','暂停户（每周至少一次）','1605630855','吴称王称霸','新户（连续3天回访）','','','','','','','','','','2020-11-18',NULL,0,NULL,'张先生 ','','','',''),(22,2,2,1605912662,1605912662,NULL,'搜狗','B类客户','苗木','MC-205（盈茂、锦业）','南京神马','暂停户（每周至少一次）','1605912642','','新户（连续3天回访）','','','','','','','','','','2020-11-21',650,250,400,'周飞','','','',''),(23,0,1,1605918123,1605967372,NULL,'再测试','B类客户','苗猪','服务器测试','南京神马','暂停户（每周至少一次）','1604362912','张','一天十个电话','','','','','','','','','','2020-11-04',NULL,0,NULL,'张先生 22','','','',''),(24,0,1,1605967930,1605967930,NULL,'搜狗','B类客户','苗木','MC-205（盈茂、锦业）','南京神马','暂停户（每周至少一次）','1605967921','张','一天十个电话','','','','','','','','','','2020-11-21',24,NULL,24,'张先生 66','','','',''),(25,2,2,1606016689,1606016689,NULL,'百度搜索','B类客户','苗木','MC-205（盈茂、锦业）','南京神马','暂停户（每周至少一次）','1606016677','吴称王称霸','新户（连续3天回访）','','','','','','','','','','2020-11-22',NULL,0,NULL,'张先生 ','','','',''),(26,2,2,1609426677,1609426677,NULL,'搜狗','','','','','',NULL,'','','','','','','','','','','','2020-12-31',NULL,0,NULL,'XT800','','','','');
/*!40000 ALTER TABLE `crm_custom_info` ENABLE KEYS */;
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
