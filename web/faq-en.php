<!DOCTYPE html>
<!-- Website created by Jonathan Guillotte-Blouin -->

<html>
	<head>
		<meta charset="utf-8"/>
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<meta name="robots" content="index, follow" />
		<meta name="description" content="Useful and efficient tool for common vector algebra problems - FAQ" />
		<meta name="keywords" content="faq, FAQ, vector, conversion, addition, algebra, scalar product, dot product, cross product, triple product, angle conversion" />
		<title> Vector calculator - FAQ </title>
		<link rel="stylesheet" href="css/faq.css">
		<link rel="stylesheet" href="css/bootstrap.min.css">
		<link rel="stylesheet" href="css/bootstrap-theme.min.css">
		<link rel="shortcut icon" href="favicon.ico">
		<script type="text/javascript">
			var RecaptchaOptions = {
			   lang : 'en',
			   theme: 'blackglass',
			};
		</script>
	</head>

	<body>
		<div id="fb-root"></div>
		<script>(function(d, s, id) {
		  var js, fjs = d.getElementsByTagName(s)[0];
		  if (d.getElementById(id)) return;
		  js = d.createElement(s); js.id = id;
		  js.src = "//connect.facebook.net/en_GB/sdk.js#xfbml=1&appId=59855838262&version=v2.0";
		  fjs.parentNode.insertBefore(js, fjs);
		}(document, 'script', 'facebook-jssdk'));
		</script>
		<script type="text/javascript">
		window.twttr = (function (d, s, id) {
		  var t, js, fjs = d.getElementsByTagName(s)[0];
		  if (d.getElementById(id)) return;
		  js = d.createElement(s); js.id = id;
		  js.src= "https://platform.twitter.com/widgets.js";
		  fjs.parentNode.insertBefore(js, fjs);
		  return window.twttr || (t = { _e: [], ready: function (f) { t._e.push(f) } });
		}(document, "script", "twitter-wjs"));
		</script>
		<div class="container">
			<header class="row">
				<div class="col-xs-12 col-md-12 col-sm-12 col-xs-12">
					<h1> Vector calculator - FAQ </h1> 
					<div id="language-box">
						<a href="faq.php"><button id="language-selector" type="button" class="btn btn-default">Français</button></a>
					</div>
				</div>
			</header>
			<div id ="retour">
				<a href="index-en.html"><button class="btn btn-primary"> Return to calculator </button></a>
			</div>
			<main class="row">
				<h3><strong>Q: <em>Who are you, and why did you create this website?</em></strong></h3>
					<h5>
						My name is Jonathan Guillotte-Blouin, and I am a French-Canadian full-time student. I've created this website as my final project for an introduction course to programmating given by HarvardX, known as "CS50". Also, I wanted to created a web application that would proves itself to be very useful to students like me. I've put a lot of effort to make this tool polished and pleasant to use, while also being suitable for a computer screen, tablet or smart phone.
					</h5>
				<h3><strong>Q: <em>Why is there this button </em></strong><form id="boutonPayPal" action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
						<input type="hidden" name="cmd" value="_s-xclick">
						<input type="hidden" name="encrypted" value="-----BEGIN PKCS7-----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-----END PKCS7-----
						">
						<input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donate_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!">
						<img alt="" border="0" src="https://www.paypalobjects.com/fr_CA/i/scr/pixel.gif" width="1" height="1">
					</form><strong><em>on your webpage?</em></strong></h3>
					<h5>
						I've included this option so that people that want to give a little can: it is not mandatory. It simply is a way to support the work that I've done, and it also helps me pay the fees required to keep this site online. Let's say it's an appreciated gesture! 
					</h5>
			</main>

			<form id="formulaire" class="form-horizontal">
				<fieldset>

				<!-- Form Name -->
				<legend>Personal inquiries</legend>
				
				<p class="text-center" style="font-size: 1.3em; color: #2a64a7"> <em>Fill the following CAPTCHA</em></p>
				<div id="captcha">
					<?php 
						require_once('recaptchalib.php');
						$publickey = '6LdDe_oSAAAAAOSBVjZdjzzP0H-briX0B95a2xWr';
						echo recaptcha_get_html($publickey);
					?>
				</div>
				
				<div id="singlebutton">
				    <button type="submit" class="btn btn-info">Submit</button>
				</div>

				</fieldset>
			</form>
			<div class="panel panel-success resultat" style="display: none;">
			  <div class="panel-heading">
			    <h2 class="panel-title">It's all good! <span class="glyphicon glyphicon-ok"></span></h2>
			  </div>
			  <div class="panel-body">
			    <span class="message_courriel" id="reponse"></span>  	
			  </div>
			</div>
			<div class="panel panel-danger resultat" style="display: none;">
				<div class="panel-heading">
					<h2 class="panel-title">Houston, we have a problem... <span class="glyphicon glyphicon-remove"></span></h2>
				</div>
				<div class="panel-body">
					<span class="message_courriel"><a href="http://en.wikipedia.org/wiki/CAPTCHA"> Captcha </a> has not been filled correctly</span>
				</div>
			</div>
			<footer>
				<p id="facebook" style="color: #2a64a7;"> And visit the facebook and twitter page!<a href="https://www.facebook.com/vectorsCalculator"><button class="btn btn-default"><img src="img/facebook.png" alt="facebook"/></button></a><a href="https://www.twitter.com/VectorCalculate"><button class="btn btn-default"><img src="img/twitter.png" alt="twitter"/></button></a></p>
				<div style="margin-bottom:10px;" class="fb-like" data-href="https://www.facebook.com/vectorsCalculator" data-layout="button_count" data-action="like" data-show-faces="false" data-share="true"></div> <br>
				<a class="twitter-follow-button" href="https://twitter.com/VectorCalculate" data-show-count="false" data-lang="en">Follow @VectorCalculate</a>
				<div id="github"><iframe src="http://ghbtns.com/github-btn.html?user=jonathanGB&type=follow" height="30" width="168" frameborder="0" scrolling="0" style="width:168px; height: 30px;" allowTransparency="true"></iframe></div>
			</footer>
		</div>

		<!-- Insertion des librairies/scripts javascript -->
		<script src="js/jquery.min.js"></script>
		<script src="js/bootstrap.min.js"></script>
		<script src="js/script.js"></script>

		<script>

		   // analytics -->
		  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
		  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
		  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
		  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

		  ga('create', 'UA-55117067-1', 'auto');
		  ga('send', 'pageview');

		  $('#formulaire').submit(function(ev) {
		  	ev.preventDefault();
		  	$('.resultat').fadeOut(500);

		  	challengeField = $('input#recaptcha_challenge_field').val();
		    responseField = $('input#recaptcha_response_field').val();

		    $.ajax({
		        type: 'POST',
		        url: 'recevoirCourriel-en.php',
		        data: 'action=validate_captcha&recaptcha_challenge_field=' + challengeField + '&recaptcha_response_field=' + responseField,
		        async: false,

		        success:function(result)
		          {
		            if(result == 'Error') 
		            {
		              $('.resultat:eq(1)').fadeIn(600);
		              Recaptcha.reload();

		            } 
		            else 
		            {
		              $('#reponse').text(result);
		              $('#captcha, #singlebutton, #formulaire p').fadeOut(600);
		              $('.resultat:eq(0)').fadeIn(600);
		            }
		          }
		      }).responseText;
		  });
		</script>
	</body>
</html>