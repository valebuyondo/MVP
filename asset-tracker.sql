-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 29, 2024 at 10:41 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `asset-tracker`
--

-- --------------------------------------------------------

--
-- Table structure for table `assets`
--

CREATE TABLE `assets` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `description` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `assets`
--

INSERT INTO `assets` (`id`, `name`, `description`) VALUES
(3, 'Buyondo Vale', 'it a computer ofcos'),
(4, 'Buyondo Vale', 'fgfhh'),
(5, 'Buyondo Vale', 'adding'),
(6, 'Buyondo Vale', 'fdghjk'),
(7, 'Buyondo Vale', 'fdghjk'),
(8, 'Buyondo Vale', 'fdghjk'),
(9, 'Buyondo Vale', 'fdghjk'),
(10, 'qwer', 'sdfghj'),
(11, 'Buyondo Vale', 'asdfghbnm,'),
(12, 'sdfgnhm', 'sdfgg'),
(13, 'dsfgdsffgg', 'sdfg'),
(14, 'asdfgh', 'zxcvbn'),
(15, 'Buyondo Vale', 'one'),
(16, 'Buyondo Vale', 'asdfghjkl'),
(17, 'Vale', 'dsfghjk'),
(18, 'Buyondo Vale', 'ada'),
(19, 'ewrtyuewrthjk', 'dfghj');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `assets`
--
ALTER TABLE `assets`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `assets`
--
ALTER TABLE `assets`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
