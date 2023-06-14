-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 14, 2023 at 06:53 AM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `mydb`
--

-- --------------------------------------------------------

--
-- Table structure for table `bookingroom`
--

CREATE TABLE `bookingroom` (
  `id` int(11) NOT NULL,
  `room_id` int(11) NOT NULL,
  `fname` varchar(50) NOT NULL,
  `create_date` timestamp NULL DEFAULT current_timestamp(),
  `topic` varchar(150) DEFAULT NULL,
  `comment` text DEFAULT NULL,
  `attend` int(11) NOT NULL,
  `begin` date NOT NULL,
  `end` date NOT NULL,
  `status_id` tinyint(1) NOT NULL,
  `reason` varchar(125) DEFAULT NULL,
  `approve` int(11) NOT NULL,
  `approve_date` datetime DEFAULT NULL,
  `tel` int(50) NOT NULL,
  `usefor_id` int(11) NOT NULL,
  `item` varchar(255) NOT NULL,
  `department_id` int(11) NOT NULL,
  `time_begin` time NOT NULL,
  `time_end` time NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `bookingroom`
--

INSERT INTO `bookingroom` (`id`, `room_id`, `fname`, `create_date`, `topic`, `comment`, `attend`, `begin`, `end`, `status_id`, `reason`, `approve`, `approve_date`, `tel`, `usefor_id`, `item`, `department_id`, `time_begin`, `time_end`) VALUES
(162, 12, 'Admin', '2023-06-07 05:44:09', 'สัมภาษณ์88', '', 10, '2023-06-07', '2023-06-07', 0, NULL, 0, NULL, 0, 1, 'เครื่องบันทึกเสียง,ไมโครโฟน + เครื่องเสียงห้องประชุม', 1, '05:43:46', '05:43:46'),
(163, 4, '1234', '2023-06-07 07:18:17', 'aaaaaaaadddddddddddd', '1236', 12, '2023-06-05', '2023-06-10', 0, NULL, 0, NULL, 1234, 1, 'เครื่องบันทึกเสียง,ไมโครโฟน + เครื่องเสียงห้องประชุม', 1, '07:18:03', '07:18:03'),
(164, 4, '1234', '2023-06-07 08:25:11', '1', '', 1, '2023-06-07', '2023-06-07', 0, NULL, 0, NULL, 1234, 1, 'Zoom : Video Conference,เครื่องคอมพิวเตอร์', 1, '07:18:48', '07:18:48'),
(165, 12, '1234', '2023-06-07 08:25:43', '12', '', 12, '2023-06-07', '2023-06-07', 0, NULL, 0, NULL, 1234, 1, 'เครื่องคอมพิวเตอร์', 1, '05:43:24', '05:43:24'),
(166, 10, 'Admin', '2023-06-07 09:40:46', '12', '', 5, '2023-06-06', '2023-06-09', 0, NULL, 0, NULL, 12, 1, 'Zoom : Video Conference', 2, '09:40:24', '09:40:24'),
(167, 6, 'Admin', '2023-06-07 09:47:02', 'test', '', 123, '2023-06-07', '2023-06-07', 0, NULL, 0, NULL, 12, 1, 'Zoom : Video Conference,เครื่องคอมพิวเตอร์,จอสมาร์ททีวี,ไมโครโฟน + เครื่องเสียงห้องประชุม,เครื่องบันทึกเสียง,จอโปรเจ็คเตอร์,เครื่องดื่ม', 1, '09:46:51', '09:46:51'),
(168, 6, '1234', '2023-06-08 07:47:51', '12', '123', 12, '2023-06-11', '2023-06-11', 0, NULL, 0, NULL, 13, 1, 'จอสมาร์ททีวี,เครื่องคอมพิวเตอร์', 1, '05:30:21', '10:30:21'),
(169, 7, '1234', '2023-06-08 07:48:33', '1222', '1', 12, '2023-06-11', '2023-06-11', 0, NULL, 0, NULL, 13, 1, 'เครื่องบันทึกเสียง', 2, '06:30:02', '09:48:02'),
(170, 1, '1234', '2023-06-08 07:54:23', 'aaaaaaaadddddddddddd', '', 12, '2023-06-08', '2023-06-08', 0, NULL, 0, NULL, 13, 1, 'เครื่องคอมพิวเตอร์', 1, '07:54:01', '07:54:01'),
(171, 2, '1234', '2023-06-08 08:11:06', 'w', '', 0, '2023-06-08', '2023-06-08', 0, NULL, 0, NULL, 13, 1, 'เครื่องคอมพิวเตอร์', 1, '08:09:34', '08:09:34'),
(172, 3, '1234', '2023-06-08 08:27:09', 'test', 'adadadad', 12, '2023-06-08', '2023-06-08', 1, NULL, 0, NULL, 13, 1, 'Zoom : Video Conference', 2, '08:26:49', '08:26:49'),
(173, 7, '1234', '2023-06-08 09:04:22', 'test', '', 12, '2023-06-15', '2023-06-16', 0, NULL, 0, NULL, 13, 1, 'ไมโครโฟน + เครื่องเสียงห้องประชุม', 1, '11:49:24', '13:49:24'),
(174, 15, 'Admin', '2023-06-08 10:08:02', 'test4565สัมภาษณ์', '', 6, '2023-06-08', '2023-06-09', 0, NULL, 0, NULL, 12, 1, 'จอสมาร์ททีวี', 1, '10:07:35', '10:07:35'),
(175, 3, '123', '2023-06-08 10:12:50', 'zxcvbn', '', 8, '2023-06-08', '2023-06-08', 0, NULL, 0, NULL, 123, 1, 'Zoom : Video Conference', 1, '11:31:07', '10:12:07'),
(176, 1, 'Admin', '2023-06-08 10:18:13', 'ๅ', '', 1, '2023-06-08', '2023-06-07', 0, NULL, 0, NULL, 12, 1, 'Zoom : Video Conference', 1, '10:17:58', '10:17:58'),
(177, 2, '123', '2023-06-08 10:24:06', 'zxcvbn', 'asdfg', 8, '2023-06-13', '2023-06-13', 0, NULL, 0, NULL, 123, 1, 'เครื่องคอมพิวเตอร์', 1, '22:30:28', '10:23:28'),
(178, 7, '123', '2023-06-09 05:02:43', '/', '', 12, '2023-06-16', '2023-06-16', 0, NULL, 0, NULL, 123, 1, 'ไมโครโฟน + เครื่องเสียงห้องประชุม', 1, '11:55:19', '12:01:19'),
(179, 15, 'Admin', '2023-06-14 04:33:38', 'test', '', 12, '2023-06-14', '2023-06-14', 0, NULL, 0, NULL, 12, 1, 'จอสมาร์ททีวี,ไมโครโฟน + เครื่องเสียงห้องประชุม', 1, '04:33:26', '04:33:26'),
(180, 9, 'Admin', '2023-06-14 04:38:52', 'test2222', '', 12, '2023-06-14', '2023-06-14', 0, NULL, 0, NULL, 12, 2, 'จอสมาร์ททีวี,เครื่องบันทึกเสียง,จอโปรเจ็คเตอร์,เครื่องดื่ม', 1, '04:38:40', '04:38:40');

-- --------------------------------------------------------

--
-- Table structure for table `calendarbooking`
--

CREATE TABLE `calendarbooking` (
  `id` int(11) NOT NULL,
  `time` int(11) NOT NULL,
  `topic` varchar(255) NOT NULL,
  `color` varchar(20) NOT NULL,
  `room_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `department`
--

CREATE TABLE `department` (
  `id` int(11) NOT NULL,
  `department` varchar(255) NOT NULL,
  `department_th` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `department`
--

INSERT INTO `department` (`id`, `department`, `department_th`) VALUES
(1, 'accounting', 'แผนกบัญชี'),
(2, 'BangkokDrugCompany', 'บริษัท บางกอกดรัก จำกัด');

-- --------------------------------------------------------

--
-- Table structure for table `item`
--

CREATE TABLE `item` (
  `id` int(11) NOT NULL,
  `item` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `item`
--

INSERT INTO `item` (`id`, `item`) VALUES
(1, 'Zoom : Video Conference'),
(2, 'จอสมาร์ททีวี'),
(3, 'ไมโครโฟน + เครื่องเสียงห้องประชุม'),
(4, 'เครื่องบันทึกเสียง'),
(5, 'จอโปรเจ็คเตอร์'),
(6, 'เครื่องดื่ม');

-- --------------------------------------------------------

--
-- Table structure for table `listrooms`
--

CREATE TABLE `listrooms` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `detail` text NOT NULL,
  `build` varchar(50) NOT NULL,
  `seat` int(50) NOT NULL,
  `color` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `listrooms`
--

INSERT INTO `listrooms` (`id`, `name`, `detail`, `build`, `seat`, `color`) VALUES
(1, 'Zoom Video Conference # 1', 'ระบบสำหรับการติดต่อสื่อสารแบบวิดีโอคอลและแชท รวมทั้งยังรองรับการแชร์ไฟล์ต่างๆ', 'ใช้สำหรับการจอง Link Zoom (ไม่ใช้ห้องประชุม)', 100, '#545454'),
(2, 'Zoom Video Conference # 2', 'ระบบสำหรับการติดต่อสื่อสารแบบวิดีโอคอลและแชท รวมทั้งยังรองรับการแชร์ไฟล์ต่างๆ', 'ใช้สำหรับการจอง Link Zoom (ไม่ใช้ห้องประชุม)', 100, '#545454'),
(3, 'Zoom Video Conference # 3', 'ระบบสำหรับการติดต่อสื่อสารแบบวิดีโอคอลและแชท รวมทั้งยังรองรับการแชร์ไฟล์ต่างๆ', 'ใช้สำหรับการจอง Link Zoom (ไม่ใช้ห้องประชุม)', 100, '#545454'),
(4, 'Zoom Video Conference # 4', 'ระบบสำหรับการติดต่อสื่อสารแบบวิดีโอคอลและแชท รวมทั้งยังรองรับการแชร์ไฟล์ต่างๆ', 'ใช้สำหรับการจอง Link Zoom (ไม่ใช้ห้องประชุม)', 100, '#545454'),
(5, 'Zoom Video Conference # 5', 'ระบบสำหรับการติดต่อสื่อสารแบบวิดีโอคอลและแชท รวมทั้งยังรองรับการแชร์ไฟล์ต่างๆ', 'ใช้สำหรับการจอง Link Zoom (ไม่ใช้ห้องประชุม)', 100, '#545454'),
(6, 'รถตู้', '', 'โปรดแจ้งล่วงหน้าอย่างน้อย 3 วัน', 12, '#6e7a80'),
(7, 'รถตู้ (2)', '', 'โปรดแจ้งล่วงหน้าอย่างน้อย 3 วัน (กรณีที่รถตู้บริษั', 12, '#a8a8a8'),
(8, 'ห้องประชุมสวัสดี', 'อุปกรณ์ภายในห้อง จอสมาร์ททีวี ขนาด 46 นิ้ว', 'อาคาร 3 ชั้น / ห้องประชุมอยู่ ชั้น 2', 12, '#006064'),
(9, 'ห้องประชุมบางกอกดรัก', '** ติดต่อคุณสิริพร(ลี่) เบอร์ 127 ก่อนการจองห้องประชุม', 'อาคารตึก 1 คูหา / ห้องประชุมอยุ่ชั้น 2', 40, '#e75e34'),
(10, 'ห้องประชุมมรกต', 'อุปกรณ์ภายในห้อง จอโปรเจคเตอร์และจอรับภาพ ขนาด 100 นิ้ว ไมโครโฟน + เครื่องเสียงห้องประชุม', 'อาคาร 4 คูหา / ห้องประชุมอยู่ ชั้น 3', 30, '#55abef'),
(11, 'ห้องประชุมสร้างสรรค์', 'อุปกรณ์ภายในห้อง จอสมาร์ททีวี ขนาด 65 นิ้ว', 'อาคาร 3 ชั้น / ห้องประชุมอยู่ ชั้น 3', 22, '#cec363'),
(12, 'ห้องประชุมใบไม้', 'อุปกรณ์ภายในห้อง จอสมาร์ททีวี ขนาด 55 นิ้ว', 'อาคาร 2 ชั้น / ห้องประชุมอยู่ชั้น 2', 12, '#54b4b8'),
(13, 'ห้องประชุมไพลิน', 'อุปกรณ์ภายในห้อง จอโปรเจคเตอร์และจอรับภาพ ขนาด 100 นิ้ว, ไมโครโฟน + เครื่องเสียงห้องประชุม', 'อาคารตึก 4 คูหา / ห้องประชุมอยู่ ชั้น 3', 54, '#01579b'),
(14, 'ห้องประชุมทับทิม', 'อุปกรณ์ภายในห้อง จอสมาร์ททีวี ขนาด 55 นิ้ว', 'อาคาร 4 คูหา/ห้องประชุมอยู่ ชั้น 3', 24, '#2B81C5'),
(15, 'ห้องประชุม BKD VIVA', 'จอสมาร์ททีวี, ไมโครโฟน + เครื่องเสียงห้องประชุม', 'อาคาร 1 คูหา / ห้องประชุมอยู่ ชั้น 3', 8, '#ffbe4d');

-- --------------------------------------------------------

--
-- Table structure for table `modal_booking`
--

CREATE TABLE `modal_booking` (
  `id` int(11) NOT NULL,
  `department` varchar(255) NOT NULL,
  `item` varchar(255) NOT NULL,
  `tel` int(50) NOT NULL,
  `use_for` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `modal_booking`
--

INSERT INTO `modal_booking` (`id`, `department`, `item`, `tel`, `use_for`) VALUES
(1, 'ประชุม', '0000ไไไ', 0, 'ประชุม'),
(2, 'ประชุม', '0000ไไไ', 2323, 'ประชุม'),
(3, 'ประชุม', '0000ไไไ', 2323, 'ประชุม'),
(4, 'ประชุม', '0000ไไไ', 2323, 'ประชุม');

-- --------------------------------------------------------

--
-- Table structure for table `role`
--

CREATE TABLE `role` (
  `id` int(11) NOT NULL,
  `role` varchar(50) NOT NULL,
  `color` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `role`
--

INSERT INTO `role` (`id`, `role`, `color`) VALUES
(1, 'Admin', '#ff6666'),
(2, 'miniAdmin', '#8533ff'),
(3, 'User', '#70db70');

-- --------------------------------------------------------

--
-- Table structure for table `status`
--

CREATE TABLE `status` (
  `id` int(11) NOT NULL,
  `status` varchar(22) NOT NULL,
  `color_status` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `status`
--

INSERT INTO `status` (`id`, `status`, `color_status`) VALUES
(0, 'อนุมัติ', '#117864'),
(1, 'ไม่อนุมัติ', '#ff0000'),
(2, 'ยกเลิก', '#ff944d');

-- --------------------------------------------------------

--
-- Table structure for table `usefor`
--

CREATE TABLE `usefor` (
  `id` int(11) NOT NULL,
  `usefor` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `usefor`
--

INSERT INTO `usefor` (`id`, `usefor`) VALUES
(1, 'ประชุม'),
(2, 'อบรม');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `email` varchar(50) NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` text NOT NULL,
  `fname` varchar(50) NOT NULL,
  `lname` varchar(50) NOT NULL,
  `role` varchar(255) NOT NULL,
  `tel` int(25) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `email`, `username`, `password`, `fname`, `lname`, `role`, `tel`) VALUES
(1, 'Admin@admin', 'Admin', '$2b$10$v3YxgCZyyFy555Yv.4cHvu5nURUf.MUnXjw4wzq5A.cv4oRebSat.', 'Admin', '', 'Admin', 12),
(2, '1234', '1234', '$2b$10$cpzuMsrbSPGdgep0t/ZPPuR4BTyVjzPheMn2Jp6mHBLElZ4dwYbqK', '1234', '', 'miniAdmin', 13),
(3, '123', '123', '$2b$10$kQlYik4gQuXAJn7l.8aE.eeqnybSH4ZNL0dys0omMCF792SpA9fZu', '123', '', 'miniAdmin', 123),
(4, 'miniAdmin@hot.com', 'test2', '$2b$10$oNgiYEzJ7lNb7Bl8iSKE6.0fdCBewEDF1M3nRwY0nSQA0vqR1hpU.', 'miniAdminฟฟฟฟ', '', 'User', 512),
(5, 'test123', 'user', '$2b$10$v3YxgCZyyFy555Yv.4cHvu5nURUf.MUnXjw4wzq5A.cv4oRebSat.', 'user', '', 'User', 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `bookingroom`
--
ALTER TABLE `bookingroom`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `calendarbooking`
--
ALTER TABLE `calendarbooking`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `department`
--
ALTER TABLE `department`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `item`
--
ALTER TABLE `item`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `listrooms`
--
ALTER TABLE `listrooms`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `modal_booking`
--
ALTER TABLE `modal_booking`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `role`
--
ALTER TABLE `role`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `status`
--
ALTER TABLE `status`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `usefor`
--
ALTER TABLE `usefor`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `bookingroom`
--
ALTER TABLE `bookingroom`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=181;

--
-- AUTO_INCREMENT for table `calendarbooking`
--
ALTER TABLE `calendarbooking`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `department`
--
ALTER TABLE `department`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `item`
--
ALTER TABLE `item`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `listrooms`
--
ALTER TABLE `listrooms`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=122;

--
-- AUTO_INCREMENT for table `modal_booking`
--
ALTER TABLE `modal_booking`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `role`
--
ALTER TABLE `role`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `status`
--
ALTER TABLE `status`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `usefor`
--
ALTER TABLE `usefor`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
