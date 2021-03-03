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
-- Table structure for table `crm_custom_documents`
--

DROP TABLE IF EXISTS `crm_custom_documents`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `crm_custom_documents` (
  `custom_documents_id` int(10) NOT NULL AUTO_INCREMENT COMMENT '客户文档ID',
  `custom_documents_name` varchar(45) DEFAULT NULL COMMENT '文档名称',
  `custom_documents_files` varchar(255) NOT NULL COMMENT '客户文档',
  `custom_documents_uploadtime` int(11) DEFAULT NULL COMMENT '上传时间',
  `custom_documents_officer` varchar(45) DEFAULT NULL COMMENT '签字人',
  `company_id` int(10) DEFAULT NULL COMMENT '数据归属',
  `admin_id` int(10) DEFAULT NULL COMMENT '归属人',
  `custom_id` int(10) DEFAULT NULL COMMENT '客户ID',
  PRIMARY KEY (`custom_documents_id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8 COMMENT='客户文档';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `crm_custom_documents`
--

LOCK TABLES `crm_custom_documents` WRITE;
/*!40000 ALTER TABLE `crm_custom_documents` DISABLE KEYS */;
INSERT INTO `crm_custom_documents` VALUES (1,'测试文档','/uploads/20201116/2e2b656725e591271de4e818a29091c0.jpg,/uploads/20201116/2e2b656725e591271de4e818a29091c0.jpg',1605454097,'11',0,1,2),(2,'测试文档','/uploads/20201116/db5d8c6da8880d901580fb06fe29c0fe.jpg',1605528666,'11',0,1,NULL),(3,'测试文档1','/uploads/20201116/0f490260cd3e7d778b2e99ad06a6f7fb.txt,/uploads/20201116/5c848ee97d766464621425e91d35da5b.docx',1605529676,'吴俊雷',0,1,2),(4,'测试文档2','/uploads/20201116/0f490260cd3e7d778b2e99ad06a6f7fb.tx,/uploads/20201116/4a3ba9473398e3b1906110f51f5aeddf.txt,/uploads/20201116/5c848ee97d766464621425e91d35da5b.docx',1605530451,'吴俊雷',0,1,2),(5,'图片','/uploads/20201118/489af80e5c10bebbe303f58cf14f5529.jpg',1605631008,'吴俊雷',2,2,20),(6,'合同','/uploads/20210107/4a3ba9473398e3b1906110f51f5aeddf.txt',1610030388,'张',2,2,22);
/*!40000 ALTER TABLE `crm_custom_documents` ENABLE KEYS */;
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
