<?php
    // recaptcha
    require_once('recaptchalib.php');
	  $privatekey = '6LdDe_oSAAAAAMHfmCYcQJLfpGCp9lSxW5PMMf74';
	  $resp = recaptcha_check_answer ($privatekey,
                        $_SERVER["REMOTE_ADDR"],
                        $_POST["recaptcha_challenge_field"],
                        $_POST["recaptcha_response_field"]);

	  if (!$resp->is_valid) 
	    echo "Error";
	  else
	    echo "Adresse courriel: vectors.calculator@gmail.com";
?>
