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
-- Table structure for table `crm_attachment`
--

DROP TABLE IF EXISTS `crm_attachment`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `crm_attachment` (
  `id` int(20) unsigned NOT NULL AUTO_INCREMENT COMMENT 'ID',
  `admin_id` int(10) unsigned NOT NULL DEFAULT '0' COMMENT '管理员ID',
  `user_id` int(10) unsigned NOT NULL DEFAULT '0' COMMENT '会员ID',
  `url` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '' COMMENT '物理路径',
  `imagewidth` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '' COMMENT '宽度',
  `imageheight` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '' COMMENT '高度',
  `imagetype` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '' COMMENT '图片类型',
  `imageframes` int(10) unsigned NOT NULL DEFAULT '0' COMMENT '图片帧数',
  `filesize` int(10) unsigned NOT NULL DEFAULT '0' COMMENT '文件大小',
  `mimetype` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '' COMMENT 'mime类型',
  `extparam` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '' COMMENT '透传数据',
  `createtime` int(10) DEFAULT NULL COMMENT '创建日期',
  `updatetime` int(10) DEFAULT NULL COMMENT '更新时间',
  `uploadtime` int(10) DEFAULT NULL COMMENT '上传时间',
  `storage` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'local' COMMENT '存储位置',
  `sha1` varchar(40) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '' COMMENT '文件 sha1编码',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='附件表';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `crm_attachment`
--

LOCK TABLES `crm_attachment` WRITE;
/*!40000 ALTER TABLE `crm_attachment` DISABLE KEYS */;
INSERT INTO `crm_attachment` VALUES (1,1,0,'/assets/img/qrcode.png','150','150','png',0,21859,'image/png','',1499681848,1499681848,1499681848,'local','17163603d0263e4838b9387ff2cd4877e8b018f6'),(2,1,0,'/uploads/20201011/2e2b656725e591271de4e818a29091c0.jpg','3840','2400','jpg',0,966178,'image/jpeg','{\"name\":\"Flying_Whale_by_Shu_Le.jpg\"}',1602427538,1602427538,1602427538,'local','1264c04856d2e30cb1816f5d018cc09c3ab00f6f'),(3,3,0,'/uploads/20201019/489af80e5c10bebbe303f58cf14f5529.jpg','3840','2400','jpg',0,1118260,'image/jpeg','{\"name\":\"abc-123.jpg\"}',1603116963,1603116963,1603116963,'local','6fff815eb9f5e6f552d37df483225d05b76d67ef'),(4,1,0,'/uploads/20201115/17e9785be2e521e2d793a66fa5768283.jpg','3840','2400','jpg',0,1748222,'image/jpeg','{\"name\":\"Hummingbird_by_Shu_Le.jpg\"}',1605422175,1605422175,1605422175,'local','3bcde0f59b121515bf4428b5a2797d57822b3fa9'),(5,1,0,'/uploads/20201115/2e2b656725e591271de4e818a29091c0.jpg','3840','2400','jpg',0,966178,'image/jpeg','{\"name\":\"Flying_Whale_by_Shu_Le.jpg\"}',1605422217,1605422217,1605422217,'local','1264c04856d2e30cb1816f5d018cc09c3ab00f6f'),(6,1,0,'/uploads/20201115/db5d8c6da8880d901580fb06fe29c0fe.jpg','5120','3413','jpg',0,2568488,'image/jpeg','{\"name\":\"desktop.jpg\"}',1605422396,1605422396,1605422396,'local','ce826b4b4f8684f15a9221853d98ab85973b13eb'),(7,1,0,'/uploads/20201116/ed092d723c08eceda51cdfbc4a9b46c6.jpg','3840','2400','jpg',0,1329591,'image/jpeg','{\"name\":\"Colorful-Abstraction02.jpg\"}',1605527832,1605527832,1605527831,'local','9b2a36d6ecaa5faed7c3bcf473c504773e05778e'),(8,1,0,'/uploads/20201116/2e2b656725e591271de4e818a29091c0.jpg','3840','2400','jpg',0,966178,'image/jpeg','{\"name\":\"Flying_Whale_by_Shu_Le.jpg\"}',1605527946,1605527946,1605527946,'local','1264c04856d2e30cb1816f5d018cc09c3ab00f6f'),(9,1,0,'/uploads/20201116/db5d8c6da8880d901580fb06fe29c0fe.jpg','5120','3413','jpg',0,2568488,'image/jpeg','{\"name\":\"desktop.jpg\"}',1605528673,1605528673,1605528673,'local','ce826b4b4f8684f15a9221853d98ab85973b13eb'),(10,1,0,'/uploads/20201116/961bed67300fefec24cb5b65b2343cb6.jpg','3840','2400','jpg',0,870376,'image/jpeg','{\"name\":\"francesco-ungaro-1fzbUyzsHV8-unsplash.jpg\"}',1605529687,1605529687,1605529687,'local','a7f1b9d8c30ab4a8ed18b9cc9d144f6cfc9afb83'),(11,1,0,'/uploads/20201116/0f490260cd3e7d778b2e99ad06a6f7fb.txt','','','txt',0,10652,'text/plain','{\"name\":\"\\u65b0\\u5efa\\u6587\\u672c.txt\"}',1605530288,1605530288,1605530288,'local','4117f1f346ba692edf8277ad538c88807bd75dbc'),(12,1,0,'/uploads/20201116/5c848ee97d766464621425e91d35da5b.docx','','','docx',0,25181,'application/wps-office.docx','{\"name\":\"Fastadmin \\u73ba\\u6dc4\\u6559\\u7a0b\\u5b66\\u4e60\\u5fc3\\u5f97.docx\"}',1605530327,1605530327,1605530327,'local','71d4f5b0215aa584d566f32fff145373e599b5e4'),(13,1,0,'/uploads/20201116/4a3ba9473398e3b1906110f51f5aeddf.txt','','','txt',0,307,'text/plain','{\"name\":\"\\u5c0f\\u76ae\\u767b\\u9646\\u4fe1\\u606f.txt\"}',1605530457,1605530457,1605530457,'local','2c9902de9fca7ca3053d72d69d1276e274ec4684'),(14,2,0,'/uploads/20201118/489af80e5c10bebbe303f58cf14f5529.jpg','3840','2400','jpg',0,1118260,'image/jpeg','{\"name\":\"abc-123.jpg\"}',1605631014,1605631014,1605631014,'local','6fff815eb9f5e6f552d37df483225d05b76d67ef'),(15,2,0,'/uploads/20201118/2e2b656725e591271de4e818a29091c0.jpg','3840','2400','jpg',0,966178,'image/jpeg','{\"name\":\"Flying_Whale_by_Shu_Le.jpg\"}',1605700523,1605700523,1605700523,'local','1264c04856d2e30cb1816f5d018cc09c3ab00f6f'),(16,2,0,'/uploads/20201231/a862b412c77eff8d43344191a184d51b.doc','','','doc',0,34816,'application/wps-office.doc','{\"name\":\"\\u5b89\\u76d1\\u7f51\\u7edc\\u5316\\u7ba1\\u7406\\uff08SSGM\\uff09\\u65b9\\u6848\\u4e66.doc\"}',1609424918,1609424918,1609424918,'local','ccc751f1007acd72ea18cfdaa89edc2cb1169a8a'),(17,2,0,'/uploads/20210107/4a3ba9473398e3b1906110f51f5aeddf.txt','','','txt',0,307,'text/plain','{\"name\":\"\\u5c0f\\u76ae\\u767b\\u9646\\u4fe1\\u606f.txt\"}',1610030400,1610030400,1610030400,'local','2c9902de9fca7ca3053d72d69d1276e274ec4684');
/*!40000 ALTER TABLE `crm_attachment` ENABLE KEYS */;
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
