-- phpMyAdmin SQL Dump
-- version 4.9.4
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Nov 29, 2020 at 03:58 PM
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
  `img` varchar(256) NOT NULL,
  `description` text NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `track_types`
--

INSERT INTO `track_types` (`id`, `user_id`, `name`, `category`, `classification`, `img`, `description`) VALUES
(1, 10, 'Frutiger', 'Sans Serif', 'Humanist', 'https://via.placeholder.com/400/872/fff/?text=Frutiger', 'Ipsum dolore ad id excepteur reprehenderit aliqua ad veniam incididunt amet officia.'),
(2, 8, 'Century Gothic', 'Sans Serif', 'Geometric', 'https://via.placeholder.com/400/764/fff/?text=Century Gothic', 'Fugiat dolore laboris fugiat mollit non qui non ea.'),
(3, 10, 'Hoefler', 'Serif', 'Old-Style', 'https://via.placeholder.com/400/978/fff/?text=Hoefler', 'Dolor eu ipsum deserunt nostrud quis aliquip esse.'),
(4, 2, 'Sabon', 'Serif', 'Old-Style', 'https://via.placeholder.com/400/961/fff/?text=Sabon', 'Cupidatat pariatur adipisicing aliqua nulla ex dolore Lorem culpa consectetur.'),
(5, 5, 'Clarendon', 'Serif', 'Slab Serif', 'https://via.placeholder.com/400/908/fff/?text=Clarendon', 'Do officia laborum non nostrud.'),
(6, 4, 'Proxima Nova', 'Sans Serif', 'Geometric', 'https://via.placeholder.com/400/860/fff/?text=Proxima Nova', 'Culpa veniam ex sint aliqua ad proident et adipisicing irure veniam.'),
(7, 4, 'Caslon', 'Serif', 'Old-Style', 'https://via.placeholder.com/400/852/fff/?text=Caslon', 'Ullamco amet ea do qui deserunt reprehenderit eu.'),
(8, 4, 'Century Gothic', 'Sans Serif', 'Geometric', 'https://via.placeholder.com/400/951/fff/?text=Century Gothic', 'Consequat duis voluptate esse aute consequat sit minim et et aliqua fugiat proident aliquip enim.'),
(9, 6, 'Bodoni', 'Serif', 'Didone', 'https://via.placeholder.com/400/877/fff/?text=Bodoni', 'Amet culpa exercitation cupidatat nulla nostrud veniam ex laborum esse.'),
(10, 3, 'Bodoni', 'Serif', 'Didone', 'https://via.placeholder.com/400/985/fff/?text=Bodoni', 'Cillum eiusmod eiusmod pariatur in eu eiusmod ea magna consequat dolore ipsum laboris in dolore.'),
(11, 3, 'Minion', 'Serif', 'Old-Style', 'https://via.placeholder.com/400/939/fff/?text=Minion', 'Fugiat ea veniam eu id esse est duis.'),
(12, 5, 'Clarendon', 'Serif', 'Slab Serif', 'https://via.placeholder.com/400/933/fff/?text=Clarendon', 'Amet aliquip cillum ad quis nulla dolor.'),
(13, 8, 'Montserrat', 'Sans Serif', 'Geometric', 'https://via.placeholder.com/400/914/fff/?text=Montserrat', 'Duis esse aute voluptate do proident adipisicing incididunt cillum ea mollit quis do.'),
(14, 9, 'Goudy', 'Serif', 'Old-Style', 'https://via.placeholder.com/400/700/fff/?text=Goudy', 'Id cillum sit exercitation laboris voluptate.'),
(15, 7, 'Avant Garde', 'Sans Serif', 'Geometric', 'https://via.placeholder.com/400/757/fff/?text=Avant Garde', 'Officia cupidatat excepteur labore nostrud voluptate ipsum duis laboris veniam consequat fugiat in culpa.'),
(16, 9, 'Cambria', 'Serif', 'Transitional', 'https://via.placeholder.com/400/766/fff/?text=Cambria', 'Dolore elit fugiat labore aute tempor laboris enim magna anim minim ipsum.'),
(17, 8, 'Futura', 'Sans Serif', 'Geometric', 'https://via.placeholder.com/400/849/fff/?text=Futura', 'Nulla amet sit ex laborum.'),
(18, 6, 'Meta', 'Sans Serif', 'Humanist', 'https://via.placeholder.com/400/927/fff/?text=Meta', 'Pariatur exercitation reprehenderit eiusmod laboris.'),
(19, 4, 'Akzidenz-Grotesk', 'Sans Serif', 'Grotesque', 'https://via.placeholder.com/400/787/fff/?text=Akzidenz-Grotesk', 'Culpa nulla tempor pariatur exercitation.'),
(20, 1, 'VAG Rounded', 'Sans Serif', 'Geometric', 'https://via.placeholder.com/400/967/fff/?text=VAG Rounded', 'Dolore ex consequat adipisicing tempor id sunt id.'),
(21, 10, 'Lato', 'Sans Serif', 'Humanist', 'https://via.placeholder.com/400/777/fff/?text=Lato', 'Amet elit aliquip ex sint aliqua velit aute.'),
(22, 2, 'Meta', 'Sans Serif', 'Humanist', 'https://via.placeholder.com/400/714/fff/?text=Meta', 'Ullamco ad velit sint nulla ad culpa reprehenderit ullamco consectetur voluptate.'),
(23, 8, 'Franklin Gothic', 'Sans Serif', 'Grotesque', 'https://via.placeholder.com/400/929/fff/?text=Franklin Gothic', 'Veniam adipisicing incididunt sunt dolore aliquip pariatur tempor consectetur excepteur adipisicing ut.'),
(24, 8, 'Meta', 'Sans Serif', 'Humanist', 'https://via.placeholder.com/400/806/fff/?text=Meta', 'Officia reprehenderit voluptate enim mollit ut laborum.'),
(25, 8, 'Optima', 'Sans Serif', 'Humanist', 'https://via.placeholder.com/400/844/fff/?text=Optima', 'Do duis in occaecat id occaecat.'),
(26, 9, 'Gotham', 'Sans Serif', 'Geometric', 'https://via.placeholder.com/400/859/fff/?text=Gotham', 'Duis in ut sint nisi aute cupidatat excepteur id dolore.'),
(27, 8, 'Bodoni', 'Serif', 'Didone', 'https://via.placeholder.com/400/718/fff/?text=Bodoni', 'Et tempor nisi qui dolor ex in aliqua elit ipsum.'),
(28, 10, 'Gibson', 'Sans Serif', 'Humanist', 'https://via.placeholder.com/400/714/fff/?text=Gibson', 'Et deserunt exercitation amet mollit.'),
(29, 5, 'Calibri', 'Sans Serif', 'Humanist', 'https://via.placeholder.com/400/971/fff/?text=Calibri', 'Elit enim deserunt adipisicing aliquip ex exercitation enim tempor id aute laborum eiusmod.'),
(30, 4, 'Frutiger', 'Sans Serif', 'Humanist', 'https://via.placeholder.com/400/727/fff/?text=Frutiger', 'Proident nulla sunt quis excepteur labore.'),
(31, 4, 'Rockwell', 'Serif', 'Slab Serif', 'https://via.placeholder.com/400/873/fff/?text=Rockwell', 'Voluptate quis consectetur dolor sint dolore veniam nulla ipsum non nulla exercitation ea officia.'),
(32, 1, 'Lato', 'Sans Serif', 'Humanist', 'https://via.placeholder.com/400/808/fff/?text=Lato', 'Fugiat cupidatat Lorem tempor elit sit exercitation aliquip proident labore quis elit sint duis.'),
(33, 7, 'Didot', 'Serif', 'Didone', 'https://via.placeholder.com/400/995/fff/?text=Didot', 'Nostrud elit reprehenderit minim occaecat pariatur amet aute irure qui adipisicing ea commodo eiusmod reprehenderit.'),
(34, 10, 'Sabon', 'Serif', 'Old-Style', 'https://via.placeholder.com/400/963/fff/?text=Sabon', 'Duis incididunt ex incididunt proident.'),
(35, 7, 'Roboto', 'Sans Serif', 'Neo-Grotesque', 'https://via.placeholder.com/400/802/fff/?text=Roboto', 'Consectetur dolor ad commodo ullamco amet commodo ea.'),
(36, 9, 'Calibri', 'Sans Serif', 'Humanist', 'https://via.placeholder.com/400/898/fff/?text=Calibri', 'Anim proident anim sunt deserunt non ex labore non sint veniam cupidatat sint veniam ipsum.'),
(37, 7, 'Frutiger', 'Sans Serif', 'Humanist', 'https://via.placeholder.com/400/721/fff/?text=Frutiger', 'Fugiat sunt quis nostrud id et magna reprehenderit voluptate.'),
(38, 1, 'Meta', 'Sans Serif', 'Humanist', 'https://via.placeholder.com/400/969/fff/?text=Meta', 'Et Lorem non anim pariatur.'),
(39, 4, 'Baskerville', 'Serif', 'Transitional', 'https://via.placeholder.com/400/749/fff/?text=Baskerville', 'Nisi et duis sint adipisicing enim.'),
(40, 5, 'Century Gothic', 'Sans Serif', 'Geometric', 'https://via.placeholder.com/400/887/fff/?text=Century Gothic', 'Minim exercitation do qui id quis ut.'),
(41, 1, 'Century Gothic', 'Sans Serif', 'Geometric', 'https://via.placeholder.com/400/770/fff/?text=Century Gothic', 'Eiusmod qui sit culpa dolor consequat nulla culpa ullamco magna esse dolor reprehenderit enim.'),
(42, 9, 'Gibson', 'Sans Serif', 'Humanist', 'https://via.placeholder.com/400/917/fff/?text=Gibson', 'Mollit cillum veniam sit laboris aliqua et.'),
(43, 5, 'Clarendon', 'Serif', 'Slab Serif', 'https://via.placeholder.com/400/768/fff/?text=Clarendon', 'Elit Lorem pariatur cillum amet occaecat nostrud.'),
(44, 6, 'Avant Garde', 'Sans Serif', 'Geometric', 'https://via.placeholder.com/400/901/fff/?text=Avant Garde', 'Sint nostrud adipisicing laborum laborum ipsum nulla ullamco sit.'),
(45, 1, 'Franklin Gothic', 'Sans Serif', 'Grotesque', 'https://via.placeholder.com/400/789/fff/?text=Franklin Gothic', 'Eiusmod ullamco dolor nisi do dolore velit elit dolor eu sit.'),
(46, 7, 'Clarendon', 'Serif', 'Slab Serif', 'https://via.placeholder.com/400/962/fff/?text=Clarendon', 'Ipsum proident aute tempor nostrud magna occaecat esse exercitation dolore officia fugiat exercitation quis laborum.'),
(47, 1, 'Franklin Gothic', 'Sans Serif', 'Grotesque', 'https://via.placeholder.com/400/724/fff/?text=Franklin Gothic', 'Cillum id ex sint consequat adipisicing excepteur commodo tempor elit laboris quis mollit.'),
(48, 1, 'Palatino', 'Serif', 'Old-Style', 'https://via.placeholder.com/400/864/fff/?text=Palatino', 'Tempor pariatur dolore elit mollit id ipsum amet et quis in cupidatat.'),
(49, 3, 'Noto Sans', 'Sans Serif', 'Humanist', 'https://via.placeholder.com/400/853/fff/?text=Noto Sans', 'Laboris enim reprehenderit fugiat eu ad laborum laboris.'),
(50, 10, 'Sabon', 'Serif', 'Old-Style', 'https://via.placeholder.com/400/978/fff/?text=Sabon', 'Adipisicing magna amet fugiat cupidatat excepteur amet deserunt aliqua id cillum.');

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
