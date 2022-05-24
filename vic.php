<?php 
$servername = "localhost";
$username = 'root';
$password = '';
$dbname = "victoradmin";

$firstName = $_POST['firstName'];
$lastName = $_POST['lastName'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$link = $_POST['link'];

$dbname = "victoradmin";

$mysqli = mysqli_connect("localhost", "root", "","victoradmin");
$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
    }
$sql = "INSERT INTO info (firstName, lastName, email, phone, link) VAlUES ('$firstName','$lastName','$email','$phone','$link')";

if($conn->query($sql) === TRUE)
{}ELSE
{echo"Error".$sql."<br>".conn->error;}
$conn->close();

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- vic.js -->
</head>
<body class = "FristId">


    <script src="vic.js"></script>
    
</body>
</html>