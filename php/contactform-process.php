<?php
$errorMSG = "";

if (empty($_POST["name"])) {
    $errorMSG = "Nom requis ";
} else {
    $name = $_POST["name"];
}

if (empty($_POST["email"])) {
    $errorMSG = "Email requis ";
} else {
    $email = $_POST["email"];
}

if (empty($_POST["message"])) {
    $errorMSG = "Message requis ";
} else {
    $message = $_POST["message"];
}

if (empty($_POST["terms"])) {
    $errorMSG = "Termes requis ";
} else {
    $terms = $_POST["terms"];
}

$EmailTo = "dasibium@gmail.com";
$Subject = "Message depuis le site DASIBIUM";

// prepare email body text
$Body = "";
$Body .= "Nom: ";
$Body .= $name;
$Body .= "\n";
$Body .= "Email: ";
$Body .= $email;
$Body .= "\n";
$Body .= "Message: ";
$Body .= $message;
$Body .= "\n";
$Body .= "Termes: ";
$Body .= $terms;
$Body .= "\n";

// send email
$success = mail($EmailTo, $Subject, $Body, "De:".$email);

// redirect to success page
if ($success && $errorMSG == ""){
   echo "parfait";
}else{
    if($errorMSG == ""){
        echo "Une erreur s'est produite :(";
    } else {
        echo $errorMSG;
    }
}
?>