USE [master]
GO
/****** Object:  Database [cinema]    Script Date: 15.03.2025 13:06:43 ******/
CREATE DATABASE [cinema]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'cinema', FILENAME = N'/var/opt/mssql/data/cinema.mdf' , SIZE = 8192KB , MAXSIZE = UNLIMITED, FILEGROWTH = 65536KB )
 LOG ON 
( NAME = N'cinema_log', FILENAME = N'/var/opt/mssql/data/cinema_log.ldf' , SIZE = 8192KB , MAXSIZE = 2048GB , FILEGROWTH = 65536KB )
 WITH CATALOG_COLLATION = DATABASE_DEFAULT, LEDGER = OFF
GO
ALTER DATABASE [cinema] SET COMPATIBILITY_LEVEL = 160
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [cinema].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [cinema] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [cinema] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [cinema] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [cinema] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [cinema] SET ARITHABORT OFF 
GO
ALTER DATABASE [cinema] SET AUTO_CLOSE OFF 
GO
ALTER DATABASE [cinema] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [cinema] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [cinema] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [cinema] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [cinema] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [cinema] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [cinema] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [cinema] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [cinema] SET  DISABLE_BROKER 
GO
ALTER DATABASE [cinema] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [cinema] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [cinema] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [cinema] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [cinema] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [cinema] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [cinema] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [cinema] SET RECOVERY FULL 
GO
ALTER DATABASE [cinema] SET  MULTI_USER 
GO
ALTER DATABASE [cinema] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [cinema] SET DB_CHAINING OFF 
GO
ALTER DATABASE [cinema] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [cinema] SET TARGET_RECOVERY_TIME = 60 SECONDS 
GO
ALTER DATABASE [cinema] SET DELAYED_DURABILITY = DISABLED 
GO
ALTER DATABASE [cinema] SET ACCELERATED_DATABASE_RECOVERY = OFF  
GO
EXEC sys.sp_db_vardecimal_storage_format N'cinema', N'ON'
GO
ALTER DATABASE [cinema] SET QUERY_STORE = ON
GO
ALTER DATABASE [cinema] SET QUERY_STORE (OPERATION_MODE = READ_WRITE, CLEANUP_POLICY = (STALE_QUERY_THRESHOLD_DAYS = 30), DATA_FLUSH_INTERVAL_SECONDS = 900, INTERVAL_LENGTH_MINUTES = 60, MAX_STORAGE_SIZE_MB = 1000, QUERY_CAPTURE_MODE = AUTO, SIZE_BASED_CLEANUP_MODE = AUTO, MAX_PLANS_PER_QUERY = 200, WAIT_STATS_CAPTURE_MODE = ON)
GO
USE [cinema]
GO
/****** Object:  Table [dbo].[employee]    Script Date: 15.03.2025 13:06:44 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[employee](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[name] [varchar](50) NOT NULL,
	[surname] [varchar](50) NOT NULL,
	[salary] [money] NOT NULL,
 CONSTRAINT [PK_employee] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[film]    Script Date: 15.03.2025 13:06:44 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[film](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[title] [varchar](50) NOT NULL,
	[premiere] [date] NOT NULL,
	[ticket] [money] NOT NULL,
 CONSTRAINT [PK_film_1] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[glasses_3d]    Script Date: 15.03.2025 13:06:44 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[glasses_3d](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[name] [varchar](50) NOT NULL,
	[price] [money] NOT NULL,
 CONSTRAINT [PK_glasses_3d] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[log_action]    Script Date: 15.03.2025 13:06:44 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[log_action](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[name] [varchar](100) NOT NULL,
 CONSTRAINT [PK_log_action] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[logs]    Script Date: 15.03.2025 13:06:44 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[logs](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[id_action] [int] NOT NULL,
	[date] [datetime] NOT NULL,
	[id_employee] [int] NOT NULL,
 CONSTRAINT [PK_logs] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[room]    Script Date: 15.03.2025 13:06:44 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[room](
	[number] [int] NOT NULL,
	[number_of_seats] [int] NOT NULL,
 CONSTRAINT [PK_room] PRIMARY KEY CLUSTERED 
(
	[number] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[showing]    Script Date: 15.03.2025 13:06:44 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[showing](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[id_film] [int] NOT NULL,
	[date] [date] NOT NULL,
	[room_number] [int] NOT NULL,
	[available_seats] [int] NULL,
 CONSTRAINT [PK_showing] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[snack]    Script Date: 15.03.2025 13:06:44 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[snack](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[name] [varchar](50) NOT NULL,
	[price] [money] NOT NULL,
 CONSTRAINT [PK_snack_1] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[snack_size]    Script Date: 15.03.2025 13:06:44 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[snack_size](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[price_multiplier] [float] NOT NULL,
	[name] [varchar](50) NOT NULL,
 CONSTRAINT [PK_snack_size] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[sold_glasses]    Script Date: 15.03.2025 13:06:44 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[sold_glasses](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[id_glasses] [int] NOT NULL,
	[id_employee] [int] NOT NULL,
	[date] [date] NULL,
 CONSTRAINT [PK_sold_glasses] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[sold_snack]    Script Date: 15.03.2025 13:06:44 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[sold_snack](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[id_snack] [int] NOT NULL,
	[id_size] [int] NOT NULL,
	[date] [date] NULL,
	[id_employee] [int] NOT NULL,
 CONSTRAINT [PK_sold_snack] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[sold_ticket]    Script Date: 15.03.2025 13:06:44 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[sold_ticket](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[name] [varchar](40) NOT NULL,
	[surname] [varchar](50) NOT NULL,
	[id_showing] [int] NOT NULL,
	[email] [varchar](75) NOT NULL,
	[date] [date] NULL,
	[id_employee] [int] NOT NULL,
 CONSTRAINT [PK_sold_ticket_1] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[users]    Script Date: 15.03.2025 13:06:44 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[users](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[login] [varchar](50) NOT NULL,
	[password] [varchar](255) NOT NULL,
	[id_employee] [int] NOT NULL,
 CONSTRAINT [PK_users] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
SET IDENTITY_INSERT [dbo].[log_action] ON 

INSERT [dbo].[log_action] ([id], [name]) VALUES (3, N'Sell a glasses')
INSERT [dbo].[log_action] ([id], [name]) VALUES (2, N'Sell a snack')
INSERT [dbo].[log_action] ([id], [name]) VALUES (1, N'Sell a ticket')
SET IDENTITY_INSERT [dbo].[log_action] OFF
GO
SET ANSI_PADDING ON
GO
/****** Object:  Index [log_action_name_key]    Script Date: 15.03.2025 13:06:44 ******/
ALTER TABLE [dbo].[log_action] ADD  CONSTRAINT [log_action_name_key] UNIQUE NONCLUSTERED 
(
	[name] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
GO
/****** Object:  Index [showing_id_key]    Script Date: 15.03.2025 13:06:44 ******/
ALTER TABLE [dbo].[showing] ADD  CONSTRAINT [showing_id_key] UNIQUE NONCLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
GO
SET ANSI_PADDING ON
GO
/****** Object:  Index [users_login_key]    Script Date: 15.03.2025 13:06:44 ******/
ALTER TABLE [dbo].[users] ADD  CONSTRAINT [users_login_key] UNIQUE NONCLUSTERED 
(
	[login] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
GO
ALTER TABLE [dbo].[logs]  WITH CHECK ADD  CONSTRAINT [FK_logs_action] FOREIGN KEY([id_action])
REFERENCES [dbo].[log_action] ([id])
GO
ALTER TABLE [dbo].[logs] CHECK CONSTRAINT [FK_logs_action]
GO
ALTER TABLE [dbo].[logs]  WITH CHECK ADD  CONSTRAINT [FK_logs_employee] FOREIGN KEY([id_employee])
REFERENCES [dbo].[employee] ([id])
GO
ALTER TABLE [dbo].[logs] CHECK CONSTRAINT [FK_logs_employee]
GO
ALTER TABLE [dbo].[showing]  WITH CHECK ADD  CONSTRAINT [FK_showing_film] FOREIGN KEY([id_film])
REFERENCES [dbo].[film] ([id])
GO
ALTER TABLE [dbo].[showing] CHECK CONSTRAINT [FK_showing_film]
GO
ALTER TABLE [dbo].[showing]  WITH CHECK ADD  CONSTRAINT [FK_showing_room] FOREIGN KEY([room_number])
REFERENCES [dbo].[room] ([number])
GO
ALTER TABLE [dbo].[showing] CHECK CONSTRAINT [FK_showing_room]
GO
ALTER TABLE [dbo].[sold_glasses]  WITH CHECK ADD  CONSTRAINT [FK_sold_glasses_employee] FOREIGN KEY([id_employee])
REFERENCES [dbo].[employee] ([id])
GO
ALTER TABLE [dbo].[sold_glasses] CHECK CONSTRAINT [FK_sold_glasses_employee]
GO
ALTER TABLE [dbo].[sold_glasses]  WITH CHECK ADD  CONSTRAINT [FK_sold_glasses_glasses_3d] FOREIGN KEY([id_glasses])
REFERENCES [dbo].[glasses_3d] ([id])
GO
ALTER TABLE [dbo].[sold_glasses] CHECK CONSTRAINT [FK_sold_glasses_glasses_3d]
GO
ALTER TABLE [dbo].[sold_snack]  WITH CHECK ADD  CONSTRAINT [FK_sold_snack_employee] FOREIGN KEY([id_employee])
REFERENCES [dbo].[employee] ([id])
GO
ALTER TABLE [dbo].[sold_snack] CHECK CONSTRAINT [FK_sold_snack_employee]
GO
ALTER TABLE [dbo].[sold_snack]  WITH CHECK ADD  CONSTRAINT [FK_sold_snack_snack_size] FOREIGN KEY([id_size])
REFERENCES [dbo].[snack_size] ([id])
GO
ALTER TABLE [dbo].[sold_snack] CHECK CONSTRAINT [FK_sold_snack_snack_size]
GO
ALTER TABLE [dbo].[sold_snack]  WITH CHECK ADD  CONSTRAINT [FK_sold_snack_snack1] FOREIGN KEY([id_snack])
REFERENCES [dbo].[snack] ([id])
GO
ALTER TABLE [dbo].[sold_snack] CHECK CONSTRAINT [FK_sold_snack_snack1]
GO
ALTER TABLE [dbo].[sold_ticket]  WITH CHECK ADD  CONSTRAINT [FK_sold_ticket_employee] FOREIGN KEY([id_employee])
REFERENCES [dbo].[employee] ([id])
GO
ALTER TABLE [dbo].[sold_ticket] CHECK CONSTRAINT [FK_sold_ticket_employee]
GO
ALTER TABLE [dbo].[sold_ticket]  WITH CHECK ADD  CONSTRAINT [FK_sold_ticket_showing] FOREIGN KEY([id_showing])
REFERENCES [dbo].[showing] ([id])
GO
ALTER TABLE [dbo].[sold_ticket] CHECK CONSTRAINT [FK_sold_ticket_showing]
GO
ALTER TABLE [dbo].[users]  WITH CHECK ADD  CONSTRAINT [FK_users_employee] FOREIGN KEY([id_employee])
REFERENCES [dbo].[employee] ([id])
GO
ALTER TABLE [dbo].[users] CHECK CONSTRAINT [FK_users_employee]
GO
/****** Object:  Trigger [dbo].[set_available_seats]    Script Date: 15.03.2025 13:06:44 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TRIGGER [dbo].[set_available_seats]
ON [dbo].[showing]
AFTER INSERT
AS
BEGIN
    SET NOCOUNT ON;
    
    UPDATE s
    SET available_seats = r.number_of_seats
    FROM showing s
    INNER JOIN inserted i ON s.id = i.id
    INNER JOIN room r ON i.room_number = r.number;
END;
GO
ALTER TABLE [dbo].[showing] ENABLE TRIGGER [set_available_seats]
GO
/****** Object:  Trigger [dbo].[log_after_insert_sold_glasses]    Script Date: 15.03.2025 13:06:45 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE TRIGGER [dbo].[log_after_insert_sold_glasses]
ON [dbo].[sold_glasses]
AFTER INSERT
AS
BEGIN
    INSERT INTO logs (id_employee, id_action, date)
    SELECT id_employee, 3, GETDATE()
    FROM inserted;
END;

GO
ALTER TABLE [dbo].[sold_glasses] ENABLE TRIGGER [log_after_insert_sold_glasses]
GO
/****** Object:  Trigger [dbo].[set_sold_glasses_date]    Script Date: 15.03.2025 13:06:45 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TRIGGER [dbo].[set_sold_glasses_date]
ON [dbo].[sold_glasses]
AFTER INSERT
AS
BEGIN
    SET NOCOUNT ON;
    UPDATE sold_glasses
    SET date = GETDATE()
    WHERE id IN (SELECT id FROM inserted);
END;
GO
ALTER TABLE [dbo].[sold_glasses] ENABLE TRIGGER [set_sold_glasses_date]
GO
/****** Object:  Trigger [dbo].[log_after_insert_sold_snack]    Script Date: 15.03.2025 13:06:45 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TRIGGER [dbo].[log_after_insert_sold_snack]
ON [dbo].[sold_snack]
AFTER INSERT
AS
BEGIN
    INSERT INTO logs (id_employee, id_action, date)
    SELECT id_employee, 2, GETDATE()
    FROM inserted;
END;

GO
ALTER TABLE [dbo].[sold_snack] ENABLE TRIGGER [log_after_insert_sold_snack]
GO
/****** Object:  Trigger [dbo].[set_sold_snack_date]    Script Date: 15.03.2025 13:06:45 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TRIGGER [dbo].[set_sold_snack_date]
ON [dbo].[sold_snack]
AFTER INSERT
AS
BEGIN
    SET NOCOUNT ON;
    UPDATE sold_snack
    SET date = GETDATE()
    WHERE id IN (SELECT id FROM inserted);
END;
GO
ALTER TABLE [dbo].[sold_snack] ENABLE TRIGGER [set_sold_snack_date]
GO
/****** Object:  Trigger [dbo].[log_after_insert_sold_ticket]    Script Date: 15.03.2025 13:06:45 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TRIGGER [dbo].[log_after_insert_sold_ticket]
ON [dbo].[sold_ticket]
AFTER INSERT
AS
BEGIN
    INSERT INTO logs (id_employee, id_action, date)
    SELECT id_employee, 1, GETDATE()
    FROM inserted;
END;

GO
ALTER TABLE [dbo].[sold_ticket] ENABLE TRIGGER [log_after_insert_sold_ticket]
GO
/****** Object:  Trigger [dbo].[set_sold_ticket_date]    Script Date: 15.03.2025 13:06:45 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TRIGGER [dbo].[set_sold_ticket_date]
ON [dbo].[sold_ticket]
AFTER INSERT
AS
BEGIN
    SET NOCOUNT ON;
    UPDATE sold_ticket
    SET date = GETDATE()
    WHERE id IN (SELECT id FROM inserted);
END;
GO
ALTER TABLE [dbo].[sold_ticket] ENABLE TRIGGER [set_sold_ticket_date]
GO
/****** Object:  Trigger [dbo].[update_available_seat_after_ticket_sale]    Script Date: 15.03.2025 13:06:45 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TRIGGER [dbo].[update_available_seat_after_ticket_sale]
ON [dbo].[sold_ticket]
AFTER INSERT
AS
BEGIN
    UPDATE showing
    SET available_seats = available_seats - 1
    FROM showing s
    INNER JOIN inserted i ON s.id = i.id_showing;
END;
GO
ALTER TABLE [dbo].[sold_ticket] ENABLE TRIGGER [update_available_seat_after_ticket_sale]
GO
USE [master]
GO
ALTER DATABASE [cinema] SET  READ_WRITE 
GO
