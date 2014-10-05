<?php
    // recaptcha
    require_once('recaptchalib.php');
	  $privatekey = 'insert_private_key';
	  $resp = recaptcha_check_answer ($privatekey,
                        $_SERVER["REMOTE_ADDR"],
                        $_POST["recaptcha_challenge_field"],
                        $_POST["recaptcha_response_field"]);

	  if (!$resp->is_valid) 
	    echo "Error";
	  else
	    echo "Email address: insert_email_address";
?>
