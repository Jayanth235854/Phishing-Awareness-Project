<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $Id = $_POST['Id'];
    $pass = $_POST['pass'];

    $conn = new mysqli('localhost', 'root', '', 'project');
    if ($conn->connect_error) {
        die('Authentication Failed :'.$conn->connect_error);
    } else {
        $stmt = $conn->prepare("SELECT * FROM test WHERE Id = ? AND pass = ?");
        $stmt->bind_param("ss", $Id, $pass);
        $stmt->execute();
        $result = $stmt->get_result();
        
        if ($result->num_rows === 1) {
            echo "Login successful!";
            header("Location: hall.html");
        } else {
            echo "Invalid credentials.";
        }
        
        $stmt->close();
        $conn->close();
    }
}
?>
