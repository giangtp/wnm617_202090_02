-- phpMyAdmin SQL Dump
-- version 4.9.4
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Oct 30, 2020 at 11:38 PM
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
-- Table structure for table `track_users`
--

CREATE TABLE `track_users` (
  `id` int(11) NOT NULL,
  `name` varchar(64) NOT NULL,
  `username` varchar(64) NOT NULL,
  `email` varchar(128) NOT NULL,
  `password` varchar(32) NOT NULL,
  `phone` varchar(15) NOT NULL,
  `types_spot` int(5) NOT NULL,
  `locations_spot` int(5) NOT NULL,
  `img` varchar(256) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `track_users`
--

INSERT INTO `track_users` (`id`, `name`, `username`, `email`, `password`, `phone`, `types_spot`, `locations_spot`, `img`) VALUES
(1, 'Cleveland Winters', 'user1', 'user1@gmail.com', '1a1dc91c907325c69271ddf0c944bc72', '(949) 514-3619', 4, 12, 'https://via.placeholder.com/400/911/fff/?text=user1'),
(2, 'Audrey Erickson', 'user2', 'user2@gmail.com', '1a1dc91c907325c69271ddf0c944bc72', '(839) 520-2463', 12, 12, 'https://via.placeholder.com/400/706/fff/?text=user2'),
(3, 'Weaver Haney', 'user3', 'user3@gmail.com', '1a1dc91c907325c69271ddf0c944bc72', '(967) 412-2552', 14, 14, 'https://via.placeholder.com/400/960/fff/?text=user3'),
(4, 'Annmarie Wilder', 'user4', 'user4@gmail.com', '1a1dc91c907325c69271ddf0c944bc72', '(826) 584-3761', 9, 27, 'https://via.placeholder.com/400/872/fff/?text=user4'),
(5, 'Sheri Bush', 'user5', 'user5@gmail.com', '1a1dc91c907325c69271ddf0c944bc72', '(893) 565-2950', 10, 30, 'https://via.placeholder.com/400/934/fff/?text=user5'),
(6, 'Laverne Carrillo', 'user6', 'user6@gmail.com', '1a1dc91c907325c69271ddf0c944bc72', '(904) 408-3635', 6, 18, 'https://via.placeholder.com/400/802/fff/?text=user6'),
(7, 'Merle Gillespie', 'user7', 'user7@gmail.com', '1a1dc91c907325c69271ddf0c944bc72', '(941) 580-3223', 7, 7, 'https://via.placeholder.com/400/862/fff/?text=user7'),
(8, 'Kendra Wright', 'user8', 'user8@gmail.com', '1a1dc91c907325c69271ddf0c944bc72', '(827) 512-2516', 4, 8, 'https://via.placeholder.com/400/914/fff/?text=user8'),
(9, 'Shelby Leonard', 'user9', 'user9@gmail.com', '1a1dc91c907325c69271ddf0c944bc72', '(888) 533-2464', 3, 3, 'https://via.placeholder.com/400/911/fff/?text=user9'),
(10, 'Kim Barrett', 'user10', 'user10@gmail.com', '1a1dc91c907325c69271ddf0c944bc72', '(826) 427-3305', 6, 6, 'https://via.placeholder.com/400/998/fff/?text=user10');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `track_users`
--
ALTER TABLE `track_users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `track_users`
--
ALTER TABLE `track_users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
