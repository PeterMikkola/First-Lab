-- phpMyAdmin SQL Dump
-- version 4.6.0
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: May 25, 2016 at 10:22 PM
-- Server version: 5.7.11
-- PHP Version: 5.5.34

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_kultur`
--

-- --------------------------------------------------------

--
-- Table structure for table `survey`
--

CREATE TABLE `survey` (
  `userid` int(250) NOT NULL,
  `question1` varchar(25) NOT NULL,
  `question2` varchar(250) NOT NULL,
  `question3` varchar(250) NOT NULL,
  `question4` int(11) NOT NULL,
  `question5` int(11) NOT NULL,
  `question6` int(11) NOT NULL,
  `question7` int(11) NOT NULL,
  `question8` int(11) NOT NULL,
  `question9` int(11) NOT NULL,
  `question10` int(11) NOT NULL,
  `question11` int(11) NOT NULL,
  `question12` int(11) NOT NULL,
  `question13` int(11) NOT NULL,
  `question14` int(11) NOT NULL,
  `question15` int(11) NOT NULL,
  `question16` varchar(25) NOT NULL,
  `question17` text,
  `question18` text,
  `question19` text
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `survey`
--

INSERT INTO `survey` (`userid`, `question1`, `question2`, `question3`, `question4`, `question5`, `question6`, `question7`, `question8`, `question9`, `question10`, `question11`, `question12`, `question13`, `question14`, `question15`, `question16`, `question17`, `question18`, `question19`) VALUES
(1, 'girl', '2', '2', 3, 3, 2, 3, 2, 2, 2, 0, 0, 0, 0, 0, '0', NULL, NULL, NULL),
(8, 'girl', '2', '3', 4, 5, 6, 7, 8, 9, 9, 0, 0, 0, 0, 0, '0', NULL, NULL, NULL),
(9, 'boy', '5', '5', 5, 5, 4, 4, 4, 4, 4, 0, 0, 0, 0, 0, '0', NULL, NULL, NULL),
(10, 'boy', '4', '5', 5, 5, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, '0', NULL, NULL, NULL),
(11, 'boy', '5', '5', 5, 5, 3, 3, 3, 3, 3, 0, 0, 0, 0, 0, '0', NULL, NULL, NULL),
(12, 'boy', '4', '4', 3, 3, 4, 5, 5, 4, 4, 0, 0, 0, 0, 0, '0', NULL, NULL, NULL),
(13, 'girl', '3', '4', 4, 4, 3, 3, 3, 3, 3, 0, 0, 0, 0, 0, '0', NULL, NULL, NULL),
(14, 'boy', '4', '3', 2, 1, 1, 2, 3, 4, 5, 0, 0, 0, 0, 0, '0', NULL, NULL, NULL),
(15, 'girl', '1', '1', 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, '0', NULL, NULL, NULL),
(16, 'girl', '2', '2', 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0, '0', NULL, NULL, NULL),
(17, 'girl', '5', '5', 5, 1, 1, 1, 5, 5, 5, 0, 0, 0, 0, 0, '0', NULL, NULL, NULL),
(18, 'girl', '1', '1', 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, '0', NULL, NULL, NULL),
(19, 'girl', '1', '1', 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, '0', NULL, NULL, NULL),
(20, 'boy', '2', '2', 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0, '0', NULL, NULL, NULL),
(21, 'girl', '2', '3', 2, 1, 1, 2, 2, 2, 2, 0, 0, 0, 0, 0, '0', NULL, NULL, NULL),
(22, 'girl', '2', '3', 2, 1, 1, 2, 2, 2, 2, 0, 0, 0, 0, 0, '0', NULL, NULL, NULL),
(23, 'Flick', 'Array', 'Array', 2, 3, 3, 2, 3, 3, 5, 4, 3, 3, 4, 4, 'efter_skoltid', 'test1.', 'test2.', 'test3.'),
(24, 'Flick', 'Array', 'Array', 3, 4, 5, 5, 5, 5, 5, 5, 4, 3, 2, 1, 'under_skoltid', 'Test 1.', 'Test 2.', 'Test 3.'),
(25, 'Pojke', 'Array', 'Array', 4, 4, 4, 3, 4, 5, 4, 4, 4, 4, 3, 2, 'under_skoltid', 'Testa nr1.', '222222222.', 'tre tre tre.'),
(26, 'Flick', 'Array', 'Array', 4, 4, 4, 4, 3, 3, 2, 3, 4, 5, 4, 5, 'under_skoltid', 'test 11111.', 'test 22222.', 'test 33333.'),
(27, 'Flick', 'Array', 'Array', 3, 2, 2, 3, 4, 5, 5, 4, 4, 4, 3, 2, 'under_skoltid', '111111111.', '222222222.', '33333333'),
(28, 'Pojke', 'Array', 'Array', 4, 4, 5, 5, 5, 5, 5, 5, 5, 4, 4, 4, 'efter_skoltid', '1111111.', '2222222.', '333333.'),
(29, 'Pojke', 'Array', 'Array', 1, 1, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 'under_skoltid', '111111111.', '22222222.', '333333333.'),
(30, 'Flick', 'Array', 'Array', 5, 5, 5, 4, 4, 4, 3, 3, 3, 3, 2, 1, 'under_skoltid', '11111111', '222222222.', '333333.'),
(31, 'Flick', '', '', 1, 1, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 'efter_skoltid', 'Frivilligt.', 'Frivilligt.', 'Frivilligt.'),
(32, 'Flick', 'Instrument', 'Array', 1, 1, 1, 1, 4, 4, 4, 4, 4, 4, 4, 4, 'efter_skoltid', 'Frivilligt.111111111.', 'Frivilligt.222222.', 'Frivilligt.333333333.'),
(33, 'Flick', 'Instrument', 'Egen_', 1, 1, 1, 1, 4, 4, 4, 4, 4, 4, 4, 4, 'efter_skoltid', 'Frivilligt.111111111.', 'Frivilligt.222222.', 'Frivilligt.333333333.'),
(34, 'Flick', 'Instrument', 'Egen_', 1, 1, 1, 1, 4, 4, 4, 4, 4, 4, 4, 4, 'efter_skoltid', 'Frivilligt.111111111.', 'Frivilligt.222222.', 'Frivilligt.333333333.'),
(35, 'Flick', 'Instrument', 'Egen_', 1, 1, 1, 1, 4, 4, 4, 4, 4, 4, 4, 4, 'efter_skoltid', 'Frivilligt.111111111.', 'Frivilligt.222222.', 'Frivilligt.333333333.'),
(36, 'Flick', 'Instrument', 'Egen_', 1, 1, 1, 1, 4, 4, 4, 4, 4, 4, 4, 4, 'efter_skoltid', 'Frivilligt.111111111.', 'Frivilligt.222222.', 'Frivilligt.333333333.'),
(37, 'Pojke', 'Instrument', 'Egen_', 5, 5, 5, 4, 4, 5, 5, 5, 4, 4, 5, 5, 'efter_skoltid', 'Frivilligt.Frivilligt.Frivilligt.Frivilligt.Frivilligt.', 'Frivilligt.Frivilligt.Frivilligt.Frivilligt.Frivilligt.', 'Frivilligt.Frivilligt.Frivilligt.Frivilligt.Frivilligt.'),
(38, 'Flick', 'Instrument', 'Egen_', 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 'under_skoltid', 'Frivilligt.11111.', 'Frivilligt.22222.', 'Frivilligt.33333.'),
(39, '', '', '', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, '', NULL, NULL, NULL),
(40, '', '', '', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, '', NULL, NULL, NULL),
(41, '', '', '', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, '', NULL, NULL, NULL),
(42, '', '', '', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, '', NULL, NULL, NULL),
(43, '', '', '', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, '', NULL, NULL, NULL),
(44, '', '', '', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, '', NULL, NULL, NULL),
(45, '', '', '', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, '', NULL, NULL, NULL),
(46, '', '', '', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, '', NULL, NULL, NULL),
(47, '', '', '', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, '', NULL, NULL, NULL),
(48, '', '', '', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, '', NULL, NULL, NULL),
(49, 'quest', '', '', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 'question16', 'question17', 'question18', 'question19'),
(50, 'quest', 'Pojke, Arr', 'Pojke', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 'question16', 'question17', 'question18', 'question19'),
(51, 'quest', 'question2', 'quest', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 'question16', 'question17', 'question18', 'question19'),
(52, 'quest', 'question2)', 'quest', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 'question16', 'question17', 'question18', 'question19'),
(53, 'quest', '', '', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 'question16', 'question17', 'question18', 'question19'),
(54, 'quest', '', '', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 'question16', 'question17', 'question18', 'question19'),
(55, 'quest', '', '', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 'question16', 'question17', 'question18', 'question19'),
(56, 'quest', 'question2', 'quest', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 'question16', 'question17', 'question18', 'question19'),
(57, 'quest', 'question2', 'quest', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 'question16', 'question17', 'question18', 'question19'),
(58, 'quest', 'question2', 'quest', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 'question16', 'question17', 'question18', 'question19'),
(59, 'quest', 'question2', 'quest', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 'question16', 'question17', 'question18', 'question19'),
(60, 'quest', '', '', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 'question16', 'question17', 'question18', 'question19'),
(61, 'quest', 'question2', 'quest', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 'question16', 'question17', 'question18', 'question19'),
(62, 'quest', 'question2', 'quest', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 'question16', 'question17', 'question18', 'question19'),
(63, 'quest', 'question2', 'quest', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 'question16', 'question17', 'question18', 'question19'),
(64, 'quest', 'question2', 'quest', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 'question16', 'question17', 'question18', 'question19'),
(65, 'quest', 'question2', 'quest', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 'question16', 'question17', 'question18', 'question19'),
(66, 'quest', '', '', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 'question16', 'question17', 'question18', 'question19'),
(67, 'quest', '', '', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 'question16', 'question17', 'question18', 'question19'),
(68, 'quest', '', '', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 'question16', 'question17', 'question18', 'question19'),
(69, 'quest', '', '', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 'question16', 'question17', 'question18', 'question19'),
(70, 'quest', '', '', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 'question16', 'question17', 'question18', 'question19'),
(71, 'quest', '', '', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 'question16', 'question17', 'question18', 'question19'),
(72, 'quest', '', '', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 'question16', 'question17', 'question18', 'question19'),
(73, 'quest', '', '', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 'question16', 'question17', 'question18', 'question19'),
(74, 'quest', '', '', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 'question16', 'question17', 'question18', 'question19'),
(75, '', '', '', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, '', '', '', ''),
(76, '', '', '', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, '', '', '', ''),
(77, 'Pojke', '', '', 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 'under_skoltid', '111111', '222222', '333333'),
(78, '', '', '', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, '', '', '', ''),
(79, '', 'Instrument', 'Egen_', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, '', '', '', ''),
(80, '', 'Instrument', 'Egen_', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, '', '', '', ''),
(81, '', 'Instrument', 'Egen_', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, '', '', '', ''),
(82, 'Pojke', 'Instrument', 'Egen_', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, '', '', '', ''),
(83, 'Pojke', 'Instrument', 'Egen_', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, '', '', '', ''),
(84, 'Pojke', 'Instrument', 'Egen_', 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, '', '', '', ''),
(85, '', '', 'Egen_', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, '', '', '', ''),
(86, 'quest', '', '', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 'question16', 'question17', 'question18', 'question19'),
(87, '', '', '', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, '', '', '', ''),
(88, '', '', 'Egen_', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, '', '', '', ''),
(89, '', 'Teater', '', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, '', '', '', ''),
(90, '', 'Array', '', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, '', '', '', ''),
(91, '', '', '', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, '', '', '', ''),
(92, '', 'Array', '', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, '', '', '', ''),
(93, '', 'Teater', '', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, '', '', '', ''),
(94, '', '', '', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, '', '', '', ''),
(95, '', 'Musikal, R', 'Annan', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, '', '', '', ''),
(96, 'Flick', 'Dans, Orke', '', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, '', '', '', ''),
(97, 'Flick', 'Musikal, D', '', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, '', '', '', ''),
(98, '', '', '', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, '', '', '', ''),
(99, '', '', '', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, '', '', '', ''),
(100, '', 'Instrument', 'Annan', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, '', '', '', ''),
(101, 'Flick', 'Orkester', 'Annan', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, '', '', '', ''),
(102, '', '', '', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, '', NULL, NULL, NULL),
(103, '', '', '', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, '', NULL, NULL, NULL),
(104, 'girl', '1', '', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, '', NULL, NULL, NULL),
(105, '', '', '', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, '', NULL, NULL, NULL),
(106, '', '', '', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, '', NULL, NULL, NULL),
(107, '', '', '', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, '', NULL, NULL, NULL),
(108, '', '', '', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, '', NULL, NULL, NULL),
(109, 'girl', 'Array', '', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, '', NULL, NULL, NULL),
(110, '', 'Instrument', '', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, '', '', '', ''),
(111, '', 'Instrument', '', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, '', '', '', ''),
(112, '', 'Instrument', '', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, '', '', '', ''),
(113, '', '', '', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, '', '', '', ''),
(114, '', 'Teater', 'Egen_', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, '', '', '', ''),
(115, '', 'Teater', 'Egen_', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, '', '', '', ''),
(116, 'quest', '', '', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 'question16', 'question17', 'question18', 'question19'),
(117, 'quest', '', '', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 'question16', 'question17', 'question18', 'question19'),
(118, 'quest', '', '', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 'question16', 'question17', 'question18', 'question19'),
(119, '', '', '', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, '', '', '', ''),
(120, 'Flick', 'Instrument', 'Egen_', 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 'under_skoltid', '', '', ''),
(121, '', '', '', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, '', NULL, NULL, NULL),
(122, '', '', '', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, '', NULL, NULL, NULL),
(123, '', '', '', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, '', NULL, NULL, NULL),
(124, '', '', '', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, '', NULL, NULL, NULL),
(125, '', '', '', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, '', NULL, NULL, NULL),
(126, '', '', '', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, '', NULL, NULL, NULL),
(127, '', '', '', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, '', NULL, NULL, NULL),
(128, 'girl', '', '', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, '', NULL, NULL, NULL),
(129, '', 'Teater', '', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, '', '', '', ''),
(130, '', '', '', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, '', '', '', ''),
(131, 'quest', '', '', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 'question16', 'question17', 'question18', 'question19'),
(132, 'Pojke', 'Dans, Orkester', 'Annan_skola', 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 'efter_skoltid', '', '', ''),
(133, 'Pojke', 'Dans, Orkester', 'Annan_skola', 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 'efter_skoltid', 'test av text nr 1', 'test av text nr 2', 'test av text nr 3'),
(134, '', 'Teater', 'Egen_skola', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, '', '', '', ''),
(135, '', '', '', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, '', '', '', ''),
(136, '', '', '', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, '', '', '', ''),
(137, 'quest', '', '', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 'question16', 'question17', 'question18', 'question19'),
(138, '', '', '', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, '', '', '', ''),
(139, '', '', '', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, '', '', '', ''),
(140, '', '', '', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, '', '', '', ''),
(141, '', '', '', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, '', '', '', ''),
(142, '', '', '', 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, '', '', '', ''),
(143, '', '', '', 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, '', '', '', ''),
(144, '', '', '', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, '', '', '', ''),
(145, '', 'Instrument, Teater', '', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, '', '', '', ''),
(146, '', '', '', 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, '', '', '', ''),
(147, '', '', '', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, '', NULL, NULL, NULL),
(148, '', '', '', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, '', NULL, NULL, NULL),
(149, '', 'Teater', '', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, '', '', '', ''),
(150, '', 'Teater', '', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, '', '', '', ''),
(151, '', '', '', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, '', '', '', ''),
(152, 'Flick', '', '', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, '', '', '', ''),
(153, 'Flick', '', '', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, '', '', '', ''),
(154, 'Flick', 'Instrument, Teater', 'Egen_skola', 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, '', '', '', ''),
(155, 'Flick', 'Instrument, Teater', 'Egen_skola', 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, '', '', '', ''),
(156, 'Flick', 'Instrument, Teater', 'Egen_skola', 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, '', '', '', ''),
(157, '', '', '', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, '', '', '', ''),
(158, '', '', '', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, '', '', '', ''),
(159, 'Flick', 'Instrument, Teater', 'Egen_skola', 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, '', '', '', ''),
(160, 'Flick', 'Instrument, Teater', 'Egen_skola', 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, '', '', '', ''),
(161, '', 'Instrument', 'Annan_skola', 5, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, '', '', '', ''),
(162, '', 'Instrument', 'Annan_skola', 5, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, '', '', '', ''),
(163, 'quest', '', '', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 'question16', 'question17', 'question18', 'question19'),
(164, '', 'Instrument', 'Annan_skola', 5, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, '', '', '', ''),
(165, '', 'Instrument', 'Annan_skola', 5, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, '', '', '', ''),
(166, '', '', '', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, '', '', '', ''),
(167, '', '', '', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, '', '', '', ''),
(168, '', '', '', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, '', '', '', ''),
(169, '', '', '', 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, '', '', '', ''),
(170, '', '', '', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, '', '', '', ''),
(171, '', '', '', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, '', '', '', ''),
(172, '', '', '', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, '', '', '', ''),
(173, '', '', '', 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, '', '', '', ''),
(174, '', '', '', 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, '', '', '', ''),
(175, '', '', '', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, '', NULL, NULL, NULL),
(176, '', '', '', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, '', NULL, NULL, NULL),
(177, '', '1', '1', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, '', NULL, NULL, NULL),
(178, '', '', 'Annan_skola', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, '', '', '', ''),
(179, '', '', 'Annan_skola', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, '', '', '', ''),
(180, '', '', 'Annan_skola', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, '', '', '', ''),
(181, 'quest', '', '', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 'question16', 'question17', 'question18', 'question19'),
(182, 'quest', '', '', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 'question16', 'question17', 'question18', 'question19'),
(183, '', '', 'Annan_skola', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, '', '', '', ''),
(184, '', '', 'Annan_skola', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, '', '', '', ''),
(185, 'quest', '', '', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 'question16', 'question17', 'question18', 'question19'),
(186, '', '', 'Annan_skola', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, '', '', '', ''),
(187, '', '', 'Annan_skola', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, '', '', '', ''),
(188, '', '', 'Annan_skola', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, '', '', '', ''),
(189, '', '', 'Annan_skola', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, '', '', '', ''),
(190, 'quest', '', '', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 'question16', 'question17', 'question18', 'question19'),
(191, '', '', 'Egen_skola', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, '', '', '', ''),
(192, 'quest', '', '', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 'question16', 'question17', 'question18', 'question19'),
(193, 'quest', '', '', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 'question16', 'question17', 'question18', 'question19'),
(194, 'Flick', '', '', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, '', '', '', ''),
(195, 'quest', '', '', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 'question16', 'question17', 'question18', 'question19'),
(196, 'quest', '', '', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 'question16', 'question17', 'question18', 'question19'),
(197, 'Flick', '', '', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, '', '', '', ''),
(198, 'quest', '', '', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 'question16', 'question17', 'question18', 'question19'),
(199, 'Flick', '', '', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, '', '', '', ''),
(200, 'quest', '', '', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 'question16', 'question17', 'question18', 'question19'),
(201, 'Pojke', 'Dans, Orkester', 'Annan_skola', 1, 1, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 'efter_skoltid', '', '', ''),
(202, '', '', '', 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, '', '', '', ''),
(203, 'quest', '', '', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 'question16', 'question17', 'question18', 'question19'),
(204, '', '', '', 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, '', '', '', ''),
(205, 'quest', '', '', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 'question16', 'question17', 'question18', 'question19'),
(206, '', '', '', 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, '', '', '', ''),
(207, '', '', '', 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, '', '', '', ''),
(208, '', '', '', 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, '', '', '', ''),
(209, '', '', '', 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, '', '', '', ''),
(210, 'quest', '', '', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 'question16', 'question17', 'question18', 'question19'),
(211, '', '', '', 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, '', '', '', ''),
(212, 'quest', '', '', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 'question16', 'question17', 'question18', 'question19'),
(213, '', '', '', 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, '', '', '', ''),
(214, '', '', '', 5, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, '', '', '', ''),
(215, '', '', '', 5, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, '', '', '', ''),
(216, '', '', '', 5, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, '', '', '', ''),
(217, '', '', '', 5, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, '', '', '', ''),
(218, '', '', '', 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, '', '', '', ''),
(219, '', '', '', 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, '', '', '', ''),
(220, '', '', '', 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, '', '', '', ''),
(221, '', '', '', 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, '', '', '', ''),
(222, 'Pojke', 'Dans, Orkester', 'Annan_skola', 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 'efter_skoltid', '', '', ''),
(223, '', '', '', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, '', '', '', ''),
(224, '', '', '', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, '', '', '', ''),
(225, '', '', '', 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, '', '', '', ''),
(226, '', '', '', 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, '', '', '', ''),
(227, 'Pojke', 'Dans, Orkester', 'Annan_skola', 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 'efter_skoltid', '', '', ''),
(228, '', '', 'Egen_skola', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, '', '', '', ''),
(229, 'Flick', 'Instrument, Teater', 'Egen_skola', 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 'under_skoltid', '', '', ''),
(230, 'Pojke', 'Instrument, Musikal, Dans, Teater, Rockskola, Orkester', 'Egen_skola, Annan_skola', 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 'under_skoltid', '111111', '222222', '333333'),
(231, 'Flick', 'Musikal, Rockskola', 'Egen_skola, Annan_skola', 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 'under_skoltid', '', '', ''),
(232, 'Flick', 'Musikal, Rockskola', 'Egen_skola, Annan_skola', 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 'under_skoltid', '', '', ''),
(233, 'Pojke', 'Musikal, Rockskola', 'Annan_skola', 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 'efter_skoltid', '', '', ''),
(234, 'Flick', 'Instrument, Dans', 'Egen_skola', 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 'under_skoltid', '', '', ''),
(235, 'Flicka', 'Instrument, Musikal, Dans, Teater, Rockskola, Orkester', 'Egen_skola', 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 'under_skoltid', 'test', 'test test', 'test test test');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `survey`
--
ALTER TABLE `survey`
  ADD PRIMARY KEY (`userid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `survey`
--
ALTER TABLE `survey`
  MODIFY `userid` int(250) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=236;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
