<?php
    // recaptcha
    require_once('recaptchalib.php');
	  $privatekey = '<inserer_private_key>';
	  $resp = recaptcha_check_answer ($privatekey,
                        $_SERVER["REMOTE_ADDR"],
                        $_POST["recaptcha_challenge_field"],
                        $_POST["recaptcha_response_field"]);

	  if (!$resp->is_valid) 
	    echo "Error";
	  else
	    echo "Adresse courriel: <inserer_adresse_courriel>";
?>
