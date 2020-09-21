-- --------------------------------------------------------
-- 主机:                           127.0.0.1
-- 服务器版本:                        5.1.73-community - MySQL Community Server (GPL)
-- 服务器操作系统:                      Win64
-- HeidiSQL 版本:                  9.4.0.5125
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;

-- 导出  表 cake.goods 结构
CREATE TABLE IF NOT EXISTS `goods` (
  `Gid` int(11) NOT NULL AUTO_INCREMENT,
  `Cid` int(11) DEFAULT NULL COMMENT '分类id',
  `Tid` int(11) DEFAULT NULL,
  `Gname` varchar(50) DEFAULT NULL COMMENT '商品名',
  `img` varchar(500) DEFAULT NULL,
  `description` varchar(100) DEFAULT NULL COMMENT '商品描述',
  `price` int(11) DEFAULT NULL COMMENT '价格',
  `quality` char(50) DEFAULT NULL COMMENT '质量',
  `party` char(50) DEFAULT NULL COMMENT '适用场合',
  `liqueur` char(50) DEFAULT NULL COMMENT '含酒',
  `per_person` char(50) DEFAULT NULL COMMENT '一人份',
  `cp` char(50) DEFAULT NULL COMMENT '情侣',
  `popularity` char(50) DEFAULT NULL COMMENT '人气',
  `new_product` char(50) DEFAULT NULL,
  `designer` char(50) DEFAULT NULL,
  `birthday` char(50) DEFAULT NULL,
  `child` char(50) DEFAULT NULL,
  `elder` char(50) DEFAULT NULL,
  PRIMARY KEY (`Gid`),
  KEY `Cid` (`Cid`),
  KEY `Tid` (`Tid`)
) ENGINE=InnoDB AUTO_INCREMENT=38 DEFAULT CHARSET=utf8 COMMENT='商品表';

-- 数据导出被取消选择。
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
