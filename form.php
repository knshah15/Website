<?php
if ($_POST['submit']) {
    mail("kunal@eml.cc", "Form Submission",
        "Name: ".$_POST['first_name']."
        LastName: ".$_POST['last_name']."
        Email: ".$_POST['email']."
        Phone: ".$_POST['phone']."
        City: ".$_POST['city']."
        LearningGoals: ".$_POST['comment']);
        header('Location: thank-you.html');
}
?>
