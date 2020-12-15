-- phpMyAdmin SQL Dump
-- version 4.9.4
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Dec 15, 2020 at 02:39 PM
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
  `description` text NOT NULL,
  `type_rating` int(1) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `track_types`
--

INSERT INTO `track_types` (`id`, `user_id`, `name`, `category`, `classification`, `img`, `description`, `type_rating`) VALUES
(1, 7, 'Century Gothic', 'Sans Serif', 'Geometric', 'https://via.placeholder.com/400/976/fff/?text=Century Gothic', 'Nisi amet Lorem tempor Lorem adipisicing est excepteur laborum aliqua enim id.', 1),
(2, 7, 'Baskerville', 'Serif', 'Transitional', 'https://via.placeholder.com/400/825/fff/?text=Baskerville', 'Minim est proident sunt culpa laboris irure ipsum id deserunt culpa veniam pariatur excepteur.', 5),
(3, 9, 'Caslon', 'Serif', 'Old-Style', 'https://via.placeholder.com/400/998/fff/?text=Caslon', 'Exercitation ea ex deserunt esse tempor nisi eu.', 4),
(4, 3, 'Times', 'Serif', 'Transitional', 'https://via.placeholder.com/400/921/fff/?text=Times', 'Pariatur exercitation pariatur est id mollit cillum duis in id id.', 2),
(5, 6, 'Cambria', 'Serif', 'Transitional', 'https://via.placeholder.com/400/763/fff/?text=Cambria', 'Sint dolor velit fugiat deserunt sunt.', 1),
(6, 9, 'Calibri', 'Sans Serif', 'Humanist', 'https://via.placeholder.com/400/962/fff/?text=Calibri', 'Irure ad ut labore reprehenderit cupidatat eu exercitation aliqua do minim.', 5),
(61, 13, 'Garamond', 'Serif', 'Old-Style', 'uploads/1608052263.181_Garamond-Icon.png', 'It\'s a nice elegant typeface and a good choice for more formal design. Unfit for modern design.', 3),
(57, 13, 'Bebas Neue', 'Sans Serif', 'Geometric', 'uploads/1607979440.9979_Bebas Icon.png', 'One of my favorite typefaces. Really fun to use for flat colorful retro-style designs. ', 5),
(8, 1, 'Minion', 'Serif', 'Old-Style', 'https://via.placeholder.com/400/727/fff/?text=Minion', 'Ullamco non voluptate duis Lorem.', 2),
(9, 2, 'Univers', 'Sans Serif', 'Neo-Grotesque', 'https://via.placeholder.com/400/826/fff/?text=Univers', 'Adipisicing aliquip et occaecat Lorem dolore ipsum aute occaecat enim esse.', 1),
(10, 5, 'Lucida Sans', 'Sans Serif', 'Humanist', 'https://via.placeholder.com/400/727/fff/?text=Lucida Sans', 'Aliquip commodo fugiat deserunt id magna enim irure consequat culpa Lorem.', 4),
(11, 6, 'Rockwell', 'Serif', 'Slab Serif', 'https://via.placeholder.com/400/870/fff/?text=Rockwell', 'Duis sunt laborum dolore minim.', 4),
(12, 7, 'Lucida Sans', 'Sans Serif', 'Humanist', 'https://via.placeholder.com/400/827/fff/?text=Lucida Sans', 'Proident sint nulla ex cillum laboris aliqua esse pariatur aliquip veniam sit cillum.', 1),
(13, 9, 'Lucida Sans', 'Sans Serif', 'Humanist', 'https://via.placeholder.com/400/798/fff/?text=Lucida Sans', 'Ex velit exercitation incididunt sit tempor.', 4),
(14, 5, 'Cambria', 'Serif', 'Transitional', 'https://via.placeholder.com/400/937/fff/?text=Cambria', 'Sunt tempor velit proident proident velit.', 2),
(15, 4, 'Noto Sans', 'Sans Serif', 'Humanist', 'https://via.placeholder.com/400/741/fff/?text=Noto Sans', 'Pariatur non id est aliquip duis aute voluptate duis duis.', 3),
(16, 8, 'Arial', 'Sans Serif', 'Neo-Grotesque', 'https://via.placeholder.com/400/863/fff/?text=Arial', 'Aute quis laborum consectetur eiusmod anim et consectetur ullamco.', 4),
(17, 4, 'Raleway', 'Sans Serif', 'Neo-Grotesque', 'https://via.placeholder.com/400/808/fff/?text=Raleway', 'Ullamco Lorem occaecat sit et anim voluptate sit cupidatat ullamco enim et pariatur Lorem minim.', 5),
(18, 10, 'Sabon', 'Serif', 'Old-Style', 'https://via.placeholder.com/400/869/fff/?text=Sabon', 'Id officia reprehenderit proident ut eu consequat.', 3),
(19, 7, 'Gibson', 'Sans Serif', 'Humanist', 'https://via.placeholder.com/400/998/fff/?text=Gibson', 'Et deserunt est irure consectetur excepteur labore reprehenderit.', 5),
(20, 7, 'Proxima Nova', 'Sans Serif', 'Geometric', 'https://via.placeholder.com/400/849/fff/?text=Proxima Nova', 'Officia veniam exercitation ex do nisi sunt in culpa excepteur pariatur qui in.', 3),
(21, 10, 'Frutiger', 'Sans Serif', 'Humanist', 'https://via.placeholder.com/400/791/fff/?text=Frutiger', 'Occaecat do exercitation sint laborum pariatur non eiusmod.', 5),
(22, 3, 'Univers', 'Sans Serif', 'Neo-Grotesque', 'https://via.placeholder.com/400/855/fff/?text=Univers', 'Dolor id laboris officia in exercitation et enim irure.', 1),
(23, 7, 'Adelle', 'Serif', 'Slab Serif', 'https://via.placeholder.com/400/842/fff/?text=Adelle', 'Adipisicing qui excepteur aute ad.', 1),
(24, 3, 'Verdana', 'Sans Serif', 'Humanist', 'https://via.placeholder.com/400/773/fff/?text=Verdana', 'Pariatur officia cupidatat occaecat cillum duis.', 4),
(25, 2, 'Calibri', 'Sans Serif', 'Humanist', 'https://via.placeholder.com/400/994/fff/?text=Calibri', 'Qui aliqua excepteur quis aute labore non anim nostrud officia.', 1),
(26, 8, 'Minion', 'Serif', 'Old-Style', 'https://via.placeholder.com/400/708/fff/?text=Minion', 'Ut quis anim veniam duis enim occaecat.', 1),
(27, 6, 'Univers', 'Sans Serif', 'Neo-Grotesque', 'https://via.placeholder.com/400/815/fff/?text=Univers', 'Fugiat duis reprehenderit labore elit Lorem fugiat dolore eiusmod.', 2),
(28, 6, 'Interstate', 'Sans Serif', 'Neo-Grotesque', 'https://via.placeholder.com/400/966/fff/?text=Interstate', 'Fugiat dolor aliquip sit est ut.', 5),
(29, 5, 'Roboto', 'Sans Serif', 'Neo-Grotesque', 'https://via.placeholder.com/400/903/fff/?text=Roboto', 'Non ut nisi quis nostrud cupidatat magna et ad minim.', 4),
(30, 9, 'Meta', 'Sans Serif', 'Humanist', 'https://via.placeholder.com/400/718/fff/?text=Meta', 'Incididunt irure consectetur esse proident ex culpa excepteur laboris laboris in nisi voluptate.', 2),
(31, 1, 'Goudy', 'Serif', 'Old-Style', 'https://via.placeholder.com/400/973/fff/?text=Goudy', 'Irure sunt adipisicing eiusmod est minim quis sit voluptate.', 3),
(32, 4, 'Verdana', 'Sans Serif', 'Humanist', 'https://via.placeholder.com/400/891/fff/?text=Verdana', 'In ex pariatur in commodo veniam.', 4),
(33, 4, 'Adelle', 'Serif', 'Slab Serif', 'https://via.placeholder.com/400/715/fff/?text=Adelle', 'Dolore elit culpa magna fugiat in elit minim ad esse dolor do in.', 2),
(34, 9, 'Avant Garde', 'Sans Serif', 'Geometric', 'https://via.placeholder.com/400/884/fff/?text=Avant Garde', 'Ad excepteur ad ex amet amet mollit sit cillum elit aliqua ex.', 5),
(35, 10, 'Univers', 'Sans Serif', 'Neo-Grotesque', 'https://via.placeholder.com/400/739/fff/?text=Univers', 'Ullamco elit ipsum nulla proident Lorem veniam ipsum officia reprehenderit cupidatat id voluptate incididunt.', 4),
(36, 6, 'Gibson', 'Sans Serif', 'Humanist', 'https://via.placeholder.com/400/729/fff/?text=Gibson', 'Mollit adipisicing non anim dolore elit laborum.', 3),
(37, 9, 'Montserrat', 'Sans Serif', 'Geometric', 'https://via.placeholder.com/400/730/fff/?text=Montserrat', 'Dolor veniam aute ullamco aliqua occaecat est sit.', 5),
(38, 6, 'Roboto', 'Sans Serif', 'Neo-Grotesque', 'https://via.placeholder.com/400/891/fff/?text=Roboto', 'Qui et occaecat fugiat voluptate commodo mollit ea et voluptate sit amet.', 2),
(39, 9, 'Frutiger', 'Sans Serif', 'Humanist', 'https://via.placeholder.com/400/875/fff/?text=Frutiger', 'Pariatur in eu aliqua consequat.', 4),
(40, 10, 'Gill Sans', 'Sans Serif', 'Humanist', 'https://via.placeholder.com/400/778/fff/?text=Gill Sans', 'Fugiat ex aute esse laborum deserunt tempor ad duis aliquip velit exercitation mollit amet.', 2),
(41, 1, 'Georgia', 'Serif', 'Transitional', 'https://via.placeholder.com/400/790/fff/?text=Georgia', 'Enim esse minim magna elit.', 5),
(42, 2, 'Roboto', 'Sans Serif', 'Neo-Grotesque', 'https://via.placeholder.com/400/722/fff/?text=Roboto', 'Aliquip fugiat anim anim et qui incididunt occaecat fugiat amet eiusmod nisi anim officia.', 2),
(43, 1, 'Verdana', 'Sans Serif', 'Humanist', 'https://via.placeholder.com/400/747/fff/?text=Verdana', 'Non irure Lorem aliqua proident Lorem sint.', 4),
(44, 5, 'Baskerville', 'Serif', 'Transitional', 'https://via.placeholder.com/400/965/fff/?text=Baskerville', 'Irure eiusmod excepteur dolore ex dolor labore cillum proident adipisicing officia ut.', 3),
(45, 9, 'Hoefler', 'Serif', 'Old-Style', 'https://via.placeholder.com/400/854/fff/?text=Hoefler', 'Qui in incididunt do sit consectetur occaecat voluptate ipsum sint.', 2),
(46, 4, 'Avenir', 'Sans Serif', 'Geometric', 'https://via.placeholder.com/400/733/fff/?text=Avenir', 'Eu esse quis cillum laboris cillum cillum aute occaecat minim adipisicing quis.', 3),
(47, 5, 'Roboto', 'Sans Serif', 'Neo-Grotesque', 'https://via.placeholder.com/400/795/fff/?text=Roboto', 'Ullamco fugiat quis proident ut Lorem qui esse minim deserunt exercitation esse officia est.', 5),
(48, 2, 'Roboto', 'Sans Serif', 'Neo-Grotesque', 'https://via.placeholder.com/400/785/fff/?text=Roboto', 'Deserunt consequat labore tempor excepteur enim amet sint do id pariatur voluptate minim ex laborum.', 1),
(49, 3, 'Neutra Text', 'Sans Serif', 'Geometric', 'https://via.placeholder.com/400/835/fff/?text=Neutra Text', 'Incididunt ipsum ea ex commodo enim quis commodo proident ullamco sint cillum dolore.', 3),
(50, 9, 'Sabon', 'Serif', 'Old-Style', 'https://via.placeholder.com/400/958/fff/?text=Sabon', 'Deserunt anim deserunt excepteur sint.', 5),
(60, 13, 'Futura', 'Sans Serif', 'Geometric', 'uploads/1608047599.8717_Futura Icon.png', 'A great-looking typeface with a lot of versatility. It\'s best used for clean modern design.', 5),
(58, 13, 'Helvetica', 'Sans Serif', 'Neo-Grotesque', 'uploads/1607991506.1675_Helvetica Icon.png', 'The vanilla of typefaces. Incredibly versatile, but overused so it\'s kinda generic.', 3),
(59, 13, 'Bodoni', 'Serif', 'Didone', 'uploads/1607992269.3466_Bodoni Icon.png', 'The fashion typeface. Very elegant. Good for display, but terrible for body text.', 4),
(62, 13, 'Neutra Text', 'Sans Serif', 'Geometric', 'uploads/1608054919.2079_Neutra-Text-Icon.png', 'This is my brand typeface. It\'s one of my absolute favorite. Both elegant and modern.', 5),
(63, 13, 'DIN', 'Sans Serif', 'Geometric', 'uploads/1608057210.1306_Din-Icon.png', 'Very modern and cool. It\'s best used as a display text rather than body text most of the time.', 4);

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=68;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
