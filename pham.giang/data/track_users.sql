-- phpMyAdmin SQL Dump
-- version 4.9.4
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Nov 28, 2020 at 04:18 PM
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
  `img` varchar(256) NOT NULL,
  `occupation` varchar(64) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `track_users`
--

INSERT INTO `track_users` (`id`, `name`, `username`, `email`, `password`, `phone`, `img`, `occupation`) VALUES
(1, 'Patel Singleton', 'user1', 'user1@gmail.com', '1a1dc91c907325c69271ddf0c944bc72', '(908) 564-3177', 'https://via.placeholder.com/400/900/fff/?text=user1', 'Product Designer'),
(2, 'Mckenzie Knowles', 'user2', 'user2@gmail.com', '1a1dc91c907325c69271ddf0c944bc72', '(890) 496-2198', 'https://via.placeholder.com/400/723/fff/?text=user2', 'Game Designer'),
(3, 'Debora Sellers', 'user3', 'user3@gmail.com', '1a1dc91c907325c69271ddf0c944bc72', '(998) 436-2731', 'https://via.placeholder.com/400/892/fff/?text=user3', 'Motion Designer'),
(4, 'Kayla Nicholson', 'user4', 'user4@gmail.com', '1a1dc91c907325c69271ddf0c944bc72', '(833) 573-3252', 'https://via.placeholder.com/400/776/fff/?text=user4', 'Game Designer'),
(5, 'Leslie Vasquez', 'user5', 'user5@gmail.com', '1a1dc91c907325c69271ddf0c944bc72', '(962) 415-2648', 'https://via.placeholder.com/400/864/fff/?text=user5', 'Photographer'),
(6, 'Madden Blackburn', 'user6', 'user6@gmail.com', '1a1dc91c907325c69271ddf0c944bc72', '(862) 588-3215', 'https://via.placeholder.com/400/832/fff/?text=user6', 'Interior Designer'),
(7, 'Cervantes Lancaster', 'user7', 'user7@gmail.com', '1a1dc91c907325c69271ddf0c944bc72', '(990) 472-2621', 'https://via.placeholder.com/400/898/fff/?text=user7', 'UX Designer'),
(8, 'Washington Jimenez', 'user8', 'user8@gmail.com', '1a1dc91c907325c69271ddf0c944bc72', '(978) 429-3731', 'https://via.placeholder.com/400/919/fff/?text=user8', 'Motion Designer'),
(9, 'Herman Rollins', 'user9', 'user9@gmail.com', '1a1dc91c907325c69271ddf0c944bc72', '(943) 495-3242', 'https://via.placeholder.com/400/761/fff/?text=user9', 'Product Designer'),
(10, 'Ella Fields', 'user10', 'user10@gmail.com', '1a1dc91c907325c69271ddf0c944bc72', '(961) 463-2713', 'https://via.placeholder.com/400/750/fff/?text=user10', 'Freelancer');

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
