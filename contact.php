<?php
$Name = $_POST['Name'];
$Phone = $_POST['Phone'];
$Email = $_POST['Email'];
$Subject = $_POST['Subject'];
$Message = $_POST['Message'];

// Database connection
$conn = new mysqli('localhost', 'root', '', 'test');

if ($conn->connect_error) {
    die('Connection Failed: ' . $conn->connect_error);
} else {
    $stmt = $conn->prepare("INSERT INTO registration (Name, Phone, Email, Subject, Message) VALUES (?, ?, ?, ?, ?)");
    
    // Use "sssss" for string parameters
    $stmt->bind_param("sssss", $Name, $Phone, $Email, $Subject, $Message);
    
    if ($stmt->execute()) {
        echo "Your Response has been recorded...";
    } else {
        echo "Error: " . $stmt->error;
    }

    $stmt->close();
    $conn->close();
}
?>
