<!DOCTYPE html>
<!-- Website created by Jonathan Guillotte-Blouin -->

<html>
	<head>
		<meta charset="utf-8"/>
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<meta name="robots" content="index, follow" />
		<meta name="description" content="Outil pratique et efficace pour des calculs d'algèbre vectorielle - FAQ" />
		<meta name="keywords" content="faq, FAQ, vecteurs, vecteur, addition, conversion, angle, algèbre, produit scalaire, produit vectoriel, produit mixte, vectoriel" />
		<title> Calculateur de vecteurs - FAQ </title>
		<link rel="stylesheet" href="css/faq.css">
		<link rel="stylesheet" href="css/bootstrap.min.css">
		<link rel="stylesheet" href="css/bootstrap-theme.min.css">
		<link rel="shortcut icon" href="favicon.ico">
		<script type="text/javascript">
			var RecaptchaOptions = {
			   lang : 'fr',
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
				<div class="col-xs-12 col-md-12 col-sm-12 col-xs-12 header-container">
					<h1> Calculateur de vecteurs - FAQ </h1> 
					<div id="language-box">
						<a href="faq-en.php"><button id="language-selector" type="button" class="btn btn-default">English</button></a>	
					</div>
				</div>
			</header>
			<div id ="retour">
				<a href="index.html"><button class="btn btn-primary"> Retourner au calculateur </button></a>
			</div>
			<main class="row">
				<h3><strong>Q: <em>Qui es-tu, et pourquoi as-tu créé ce site?</em></strong></h3>
					<h5>
						Je me nomme Jonathan Guillotte-Blouin, et je suis un étudiant canadien à temps plein. J'ai créé ce site web comme projet final pour un cours d'initiation à la programmation donné par HarvardX, connu sous le nom de "CS50". De plus, je voulais créer une application qui serait vraiment utile pour des étudiants comme moi. J'ai mis beaucoup d'efforts pour rendre cet outil poli et agréable à l'utilisation, tout en étant adapté à la fois à un écran d'ordinateur, à une tablette ou à un téléphone intelligent.
					</h5>
				<h3><strong>Q: <em>Pourquoi y a-t-il ce bouton</em></strong> <form id="boutonPayPal" action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
						<input type="hidden" name="cmd" value="_s-xclick">
						<input type="hidden" name="encrypted" value="-----BEGIN PKCS7-----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-----END PKCS7-----
						">
						<input type="image" src="https://www.paypalobjects.com/fr_CA/i/btn/btn_donate_LG.gif" border="0" name="submit" alt="PayPal - la solution de paiement en ligne la plus simple et la plus sécurisée !">
						<img alt="" border="0" src="https://www.paypalobjects.com/fr_CA/i/scr/pixel.gif" width="1" height="1">
					</form><strong><em>sur ta page?</em></strong></h3>
					<h5>
						J'ai inclus cette option pour que ceux qui désire donner un peu puissent le faire: ce n'est aucunement obligatoire. C'est simplement une manière de supporter le travail que j'ai fait, et ça m'aide en même temps à payer pour garder ce site en ligne. Disons que c'est un geste très apprécié!
					</h5>
			</main>

			<form id="formulaire" class="form-horizontal">
				<fieldset>

				<!-- Form Name -->
				<legend>Pour me contacter personnellement</legend>
				
				<p class="text-center" style="font-size: 1.3em; color: #2a64a7"> <em>Remplissez le CAPTCHA suivant</em></p>
				<div id="captcha">
					<?php 
						require_once('recaptchalib.php');
						$publickey = '6LdDe_oSAAAAAOSBVjZdjzzP0H-briX0B95a2xWr';
						echo recaptcha_get_html($publickey);
					?>
				</div>

				<div id="singlebutton">
				    <button type="submit" class="btn btn-info">Envoyer</button>
				</div>

				</fieldset>
			</form>
			<div class="panel panel-success resultat" style="display:none;">
			  <div class="panel-heading">
			    <h2 class="panel-title">Parfait! <span class="glyphicon glyphicon-ok"></span></h2>
			  </div>
			  <div class="panel-body">
			    <span class="message_courriel" id="reponse"></span>	
			  </div>
			</div>
			<div class="panel panel-danger resultat" style="display: none;">
				<div class="panel-heading">
					<h2 class="panel-title">Houston, nous avons un problème... <span class="glyphicon glyphicon-remove"></span></h2>
				</div>
				<div class="panel-body">
					Le <a href="http://fr.wikipedia.org/wiki/CAPTCHA"> captcha </a> n'a pas été rempli correctement.
				</div>
			</div>
			<footer>
				<p id="facebook" style="color: #2a64a7;"> Et visitez la page facebook et twitter!<a href="https://www.facebook.com/vectorsCalculator"><button class="btn btn-default"><img src="img/facebook.png" alt="facebook"/></button></a><a href="https://www.twitter.com/VectorCalculate"><button class="btn btn-default"><img src="img/twitter.png" alt="twitter"/></button></a></p>
				<div style="margin-bottom:10px;" class="fb-like" data-href="https://www.facebook.com/vectorsCalculator" data-layout="button_count" data-action="like" data-show-faces="false" data-share="true"></div> <br>
				<a class="twitter-follow-button" href="https://twitter.com/VectorCalculate" data-show-count="false" data-lang="fr">Suivre @VectorCalculate</a>
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
		        url: 'recevoirCourriel.php',
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