-- phpMyAdmin SQL Dump
-- version 4.9.4
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Nov 28, 2020 at 04:17 PM
-- Server version: 5.6.49-cll-lve
-- PHP Version: 7.3.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `type_journal`
--

-- --------------------------------------------------------

--
-- Table structure for table `track_types`
--

CREATE TABLE `track_types` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `name` varchar(64) NOT NULL,
  `category` varchar(64) NOT NULL,
  `classification` varchar(64) NOT NULL,
  `img` varchar(256) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `track_types`
--

INSERT INTO `track_types` (`id`, `user_id`, `name`, `category`, `classification`, `img`) VALUES
(1, 2, 'Helvetica', 'Sans Serif', 'Neo-Grotesque', 'https://via.placeholder.com/400/883/fff/?text=Helvetica'),
(2, 9, 'Avenir', 'Sans Serif', 'Geometric', 'https://via.placeholder.com/400/884/fff/?text=Avenir'),
(3, 8, 'Times', 'Serif', 'Transitional', 'https://via.placeholder.com/400/898/fff/?text=Times'),
(4, 5, 'Gibson', 'Sans Serif', 'Humanist', 'https://via.placeholder.com/400/804/fff/?text=Gibson'),
(5, 4, 'Montserrat', 'Sans Serif', 'Geometric', 'https://via.placeholder.com/400/709/fff/?text=Montserrat'),
(6, 7, 'Open Sans', 'Sans Serif', 'Humanist', 'https://via.placeholder.com/400/967/fff/?text=Open Sans'),
(7, 4, 'Caslon', 'Serif', 'Old-Style', 'https://via.placeholder.com/400/725/fff/?text=Caslon'),
(8, 8, 'Cambria', 'Serif', 'Transitional', 'https://via.placeholder.com/400/867/fff/?text=Cambria'),
(9, 1, 'Mrs Eaves', 'Serif', 'Transitional', 'https://via.placeholder.com/400/948/fff/?text=Mrs Eaves'),
(10, 8, 'Trajan', 'Serif', 'Display Serif', 'https://via.placeholder.com/400/772/fff/?text=Trajan'),
(11, 2, 'Avenir', 'Sans Serif', 'Geometric', 'https://via.placeholder.com/400/807/fff/?text=Avenir'),
(12, 4, 'Arial', 'Sans Serif', 'Neo-Grotesque', 'https://via.placeholder.com/400/735/fff/?text=Arial'),
(13, 1, 'Clarendon', 'Serif', 'Slab Serif', 'https://via.placeholder.com/400/759/fff/?text=Clarendon'),
(14, 1, 'Rockwell', 'Serif', 'Slab Serif', 'https://via.placeholder.com/400/810/fff/?text=Rockwell'),
(15, 7, 'Montserrat', 'Sans Serif', 'Geometric', 'https://via.placeholder.com/400/733/fff/?text=Montserrat'),
(16, 5, 'Baskerville', 'Serif', 'Transitional', 'https://via.placeholder.com/400/951/fff/?text=Baskerville'),
(17, 9, 'Verdana', 'Sans Serif', 'Humanist', 'https://via.placeholder.com/400/953/fff/?text=Verdana'),
(18, 9, 'Times', 'Serif', 'Transitional', 'https://via.placeholder.com/400/875/fff/?text=Times'),
(19, 3, 'Adelle', 'Serif', 'Slab Serif', 'https://via.placeholder.com/400/829/fff/?text=Adelle'),
(20, 8, 'Cambria', 'Serif', 'Transitional', 'https://via.placeholder.com/400/893/fff/?text=Cambria'),
(21, 6, 'Bembo', 'Serif', 'Old-Style', 'https://via.placeholder.com/400/739/fff/?text=Bembo'),
(22, 3, 'Verdana', 'Sans Serif', 'Humanist', 'https://via.placeholder.com/400/924/fff/?text=Verdana'),
(23, 7, 'Gotham', 'Sans Serif', 'Geometric', 'https://via.placeholder.com/400/900/fff/?text=Gotham'),
(24, 4, 'Optima', 'Sans Serif', 'Humanist', 'https://via.placeholder.com/400/871/fff/?text=Optima'),
(25, 6, 'Futura', 'Sans Serif', 'Geometric', 'https://via.placeholder.com/400/713/fff/?text=Futura'),
(26, 9, 'Myriad', 'Sans Serif', 'Humanist', 'https://via.placeholder.com/400/946/fff/?text=Myriad'),
(27, 2, 'Cambria', 'Serif', 'Transitional', 'https://via.placeholder.com/400/835/fff/?text=Cambria'),
(28, 3, 'Calibri', 'Sans Serif', 'Humanist', 'https://via.placeholder.com/400/715/fff/?text=Calibri'),
(29, 9, 'Helvetica', 'Sans Serif', 'Neo-Grotesque', 'https://via.placeholder.com/400/913/fff/?text=Helvetica'),
(30, 5, 'Open Sans', 'Sans Serif', 'Humanist', 'https://via.placeholder.com/400/803/fff/?text=Open Sans'),
(31, 6, 'Goudy', 'Serif', 'Old-Style', 'https://via.placeholder.com/400/777/fff/?text=Goudy'),
(32, 7, 'Bembo', 'Serif', 'Old-Style', 'https://via.placeholder.com/400/922/fff/?text=Bembo'),
(33, 9, 'Caslon', 'Serif', 'Old-Style', 'https://via.placeholder.com/400/864/fff/?text=Caslon'),
(34, 3, 'Proxima Nova', 'Sans Serif', 'Geometric', 'https://via.placeholder.com/400/871/fff/?text=Proxima Nova'),
(35, 9, 'Myriad', 'Sans Serif', 'Humanist', 'https://via.placeholder.com/400/946/fff/?text=Myriad'),
(36, 1, 'Futura', 'Sans Serif', 'Geometric', 'https://via.placeholder.com/400/782/fff/?text=Futura'),
(37, 9, 'Lucida Sans', 'Sans Serif', 'Humanist', 'https://via.placeholder.com/400/895/fff/?text=Lucida Sans'),
(38, 1, 'Bodoni', 'Serif', 'Didone', 'https://via.placeholder.com/400/821/fff/?text=Bodoni'),
(39, 1, 'Lucida Sans', 'Sans Serif', 'Humanist', 'https://via.placeholder.com/400/809/fff/?text=Lucida Sans'),
(40, 5, 'Century Gothic', 'Sans Serif', 'Geometric', 'https://via.placeholder.com/400/780/fff/?text=Century Gothic'),
(41, 7, 'Lato', 'Sans Serif', 'Humanist', 'https://via.placeholder.com/400/884/fff/?text=Lato'),
(42, 7, 'Times', 'Serif', 'Transitional', 'https://via.placeholder.com/400/890/fff/?text=Times'),
(43, 9, 'Proxima Nova', 'Sans Serif', 'Geometric', 'https://via.placeholder.com/400/723/fff/?text=Proxima Nova'),
(44, 9, 'Verdana', 'Sans Serif', 'Humanist', 'https://via.placeholder.com/400/808/fff/?text=Verdana'),
(45, 7, 'Gill Sans', 'Sans Serif', 'Humanist', 'https://via.placeholder.com/400/902/fff/?text=Gill Sans'),
(46, 9, 'Georgia', 'Serif', 'Transitional', 'https://via.placeholder.com/400/969/fff/?text=Georgia'),
(47, 1, 'Caslon', 'Serif', 'Old-Style', 'https://via.placeholder.com/400/958/fff/?text=Caslon'),
(48, 9, 'Hoefler', 'Serif', 'Old-Style', 'https://via.placeholder.com/400/873/fff/?text=Hoefler'),
(49, 3, 'Optima', 'Sans Serif', 'Humanist', 'https://via.placeholder.com/400/735/fff/?text=Optima'),
(50, 7, 'Franklin Gothic', 'Sans Serif', 'Grotesque', 'https://via.placeholder.com/400/964/fff/?text=Franklin Gothic');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `track_types`
--
ALTER TABLE `track_types`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `track_types`
--
ALTER TABLE `track_types`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=51;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
