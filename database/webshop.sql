-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 05, 2024 at 09:13 PM
-- Server version: 10.4.25-MariaDB
-- PHP Version: 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `webshop`
--

-- --------------------------------------------------------

--
-- Table structure for table `artikl`
--

CREATE TABLE `artikl` (
  `artiklId` int(6) NOT NULL,
  `artiklName` varchar(25) NOT NULL,
  `artiklDescription` varchar(255) NOT NULL,
  `category` varchar(25) NOT NULL,
  `subCategory` varchar(25) NOT NULL,
  `price` int(6) NOT NULL,
  `quantity` int(6) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `artikl`
--

INSERT INTO `artikl` (`artiklId`, `artiklName`, `artiklDescription`, `category`, `subCategory`, `price`, `quantity`) VALUES
(1, 'Bijelo vino', ' Bijelo vino -domaća prizvodnja 12% alk ', 'Pića', 'Alkoholno piće', 5, 28),
(2, 'Crno vino', ' Crno vino -domaća prizvodnja 12% alk ', 'Pića', 'Alkoholno piće', 5, 28),
(3, 'Crno vino', ' Crno bla bla -domaća prizvodnja 12% alk ', 'Pića', 'Alkoholno piće', 5, 28),
(4, 'Crno vino', ' Crno novo -domaća prizvodnja 12% alk ', 'Pića', 'Alkoholno piće', 2, 48),
(5, 'Crno vino', ' Crno gorja -domaća prizvodnja 12% alk ', 'Pića', 'Alkoholno piće', 6, 18),
(6, 'Crno vino', ' Crno velebit -domaća prizvodnja 12% alk ', 'Pića', 'Alkoholno piće', 3, 84),
(7, 'Crno vino', ' Crno dinara -domaća prizvodnja 12% alk ', 'Pića', 'Alkoholno piće', 11, 228),
(8, 'Crno vino', ' Crno nvino-domaća prizvodnja 12% alk ', 'Pića', 'Alkoholno piće', 43, 8),
(9, 'Bijelo vino', ' Bijelo-italija -domaća prizvodnja 12% alk ', 'Pića', 'Alkoholno piće', 5, 28),
(10, 'Bijelo vino', ' Bijelo podrumi -domaća prizvodnja 12% alk ', 'Pića', 'Alkoholno piće', 5, 28),
(11, 'Bijelo vino', ' Bijelo 123 -domaća prizvodnja 12% alk ', 'Pića', 'Alkoholno piće', 5, 28),
(12, 'Rakija', 'Domaca rakija meodvaca 42% alk ', 'Pića', 'Alkoholno piće', 2, 48),
(13, 'Rakija', 'Domaca rakija loza 42% alk ', 'Pića', 'Alkoholno piće', 6, 18),
(14, 'Rakija', 'Domaca rakija sljivovica 42% alk ', 'Pića', 'Alkoholno piće', 3, 84),
(15, 'Rakija', 'Domaca rakija visnjevaca 42% alk ', 'Pića', 'Alkoholno piće', 11, 228),
(16, 'Rakija', 'Domaca rakija orahovica 42% alk ', 'Pića', 'Alkoholno piće', 43, 8),
(17, 'Voda', 'Voda -0,5l ', 'Pića', 'Bezalkoholna', 2, 48),
(18, 'Voda', 'Voda -1L ', 'Pića', 'Bezalkoholna', 4, 18),
(19, 'Voda', 'Mineralna 0,5l ', 'Pića', 'Bezalkoholna', 3, 84),
(20, 'Voda', 'Voda sa vitaminom C-0,5l ', 'Pića', 'Bezalkoholna', 11, 228),
(21, 'Rakija', 'Domaca rakija orahovica 42% alk ', 'Pića', 'Alkoholno piće', 43, 8),
(22, 'Juneci vrat', ' Hrvatska junetina -domaća prizvodnja 0,5kg ', 'Meso', 'Junetina', 5, 28),
(23, 'Juneci vrat', ' Hrvatska junetina -domaća prizvodnja 0,5kg ', 'Meso', 'Junetina', 5, 28),
(24, 'Juneca rebra', ' Hrvatska junetina -domaća prizvodnja 0,5kg ', 'Meso', 'Junetina', 5, 28),
(25, 'Juneci but', ' Hrvatska junetina but sa kosti -domaća prizvodnja 0,5kg ', 'Meso', 'Junetina', 2, 48),
(26, 'Juneci but', ' Hrvatska junetina -but bez kosti, domaća prizvodnja 0,5kg ', 'Meso', 'Junetina', 6, 18),
(27, 'Svinjski vrat', ' Svinjetina - domaća prizvodnja 0,5kg ', 'Meso', 'Svinjetina', 3, 84),
(28, 'Svinjski lungici', ' Svinjetina - domaća prizvodnja 0,5kg ', 'Meso', 'Svinjetina', 11, 228),
(29, 'Svinjski but', ' Svinjetina - domaća prizvodnja 0,5kg ', 'Meso', 'Svinjetina', 43, 8),
(30, 'Pileca prsa', ' Piletina-hravatska- 1kg  ', 'Meso', 'Piletina', 5, 28),
(31, 'Pileci bataci', ' Piletina-hravatska- 1kg  ', 'Meso', 'Piletina', 15, 8),
(32, 'Janjetina but', ' janjetina-hravatska- 1kg  ', 'Meso', 'Janjetina', 15, 8),
(33, 'Janjetina rebra', ' janjetina-hravatska- 1kg  ', 'Meso', 'Janjetina', 11, 22),
(34, 'Janjetina vrat', ' janjetina-hravatska- 1kg  ', 'Meso', 'Janjetina', 9, 8),
(35, 'Janjetina juha', ' janjetina-hravatska- 1kg  ', 'Meso', 'Janjetina', 15, 8),
(36, 'Orada', ' orada- 1kg  ', 'Riba', 'Morska', 15, 8),
(37, 'Losos', ' Losos- 1kg  ', 'Riba', 'Morska', 11, 38),
(38, 'Brancin', ' Brancin- 1kg  ', 'Riba', 'Morska', 135, 48),
(39, 'Srdela', ' Srdela- 1kg  ', 'Riba', 'Morska', 5, 58),
(40, 'Tuna', 'Tuna- 1kg  ', 'Riba', 'Morska', 15, 28),
(41, 'Pastrva', ' Pastrva- 1kg  ', 'Riba', 'Slatkovodna', 15, 8),
(42, 'Som', ' Som- 1kg  ', 'Riba', 'Slatkovodna', 45, 23),
(43, 'Jabuka', ' Jabuka- 1kg  ', 'Voce i povrce', 'voce', 45, 23),
(44, 'Kruska', ' Kruska- 1kg  ', 'Voce i povrce', 'voce', 5, 233),
(45, 'Marelica', ' Marelica- 1kg  ', 'Voce i povrce', 'voce', 4, 3),
(46, 'Nekatarina', ' Nekatarina- 1kg  ', 'Voce i povrce', 'voce', 9, 23),
(47, 'Lubenica', ' Lubenica- 1kg  ', 'Voce i povrce', 'voce', 5, 23),
(48, 'Naranca', ' Naranca- 1kg  ', 'Voce i povrce', 'voce', 4, 223),
(49, 'Mandarina', ' Mandarina- 1kg  ', 'Voce i povrce', 'voce', 1, 2),
(50, 'Krumpir', ' Krumpir- 1kg  ', 'Voce i povrce', 'povrce', 11, 243),
(51, 'Slata', ' Salata- 1kg  ', 'Voce i povrce', 'povrce', 11, 243),
(52, 'Mrkva', ' Mrkva- 1kg  ', 'Voce i povrce', 'povrce', 1, 23),
(53, 'Blitva', ' Blitva- 1kg  ', 'Voce i povrce', 'povrce', 12, 43),
(54, 'Kapula', ' Kapula- 1kg  ', 'Voce i povrce', 'povrce', 21, 243),
(55, 'Rikola', ' Rikola- 1kg  ', 'Voce i povrce', 'povrce', 11, 243),
(56, 'Tikivca', ' Tikivca- 1kg  ', 'Voce i povrce', 'povrce', 11, 243),
(57, 'Batat', ' Batat- 1kg  ', 'Voce i povrce', 'povrce', 11, 243);

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `orderId` int(11) NOT NULL,
  `userId` int(11) NOT NULL,
  `totalValue` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `orders`
--

INSERT INTO `orders` (`orderId`, `userId`, `totalValue`) VALUES
(1, 2, 10),
(2, 2, 10),
(3, 2, 37);

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `userID` int(11) NOT NULL,
  `userName` varchar(50) NOT NULL,
  `pass` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`userID`, `userName`, `pass`, `email`) VALUES
(1, 'firstUser', '1234', 'first@first'),
(2, 'novi', '1234', 'noviemail@novi');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `artikl`
--
ALTER TABLE `artikl`
  ADD PRIMARY KEY (`artiklId`);

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`orderId`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`userID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `artikl`
--
ALTER TABLE `artikl`
  MODIFY `artiklId` int(6) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=58;

--
-- AUTO_INCREMENT for table `orders`
--
ALTER TABLE `orders`
  MODIFY `orderId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `userID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
