<?php
  $to = "chiragdoddamani@gmail.com";
  $name = $_POST['name'];
  $email = $_POST['email'];
  $message = $_POST['message'];
  $subject = "New message from $name";

  $headers = "From: $name <$email>\r\n";
  $headers .= "Reply-To: $name <$email>\r\n";
  $headers .= "Content-type: text/plain; charset=UTF-8\r\n";

  mail($to, $subject, $message, $headers);

  header("Location: redirect.html"); // redirect the user back to the homepage
?>


