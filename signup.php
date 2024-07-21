<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $Id = $_POST['Id'];
    $pass = $_POST['pass'];

    $conn = new mysqli('localhost', 'root', '', 'project');
    if ($conn->connect_error) {
        die('Authentication Failed :'.$conn->connect_error);
    } else {
        $stmt = $conn->prepare("INSERT INTO test (Id, pass) VALUES (?, ?)");
        $stmt->bind_param("ss", $Id, $pass);
        if ($stmt->execute()) {
            echo "Registration successful!";

            header("Location: login.html");
        } else {
            echo "Error: " . $stmt->error;
        }
        error_reporting(E_ALL);
        ini_set('display_errors', 1);

        $stmt->close();
        $conn->close();
    }
}
?>
