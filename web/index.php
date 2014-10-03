<!DOCTYPE html>
<!-- Website created by Jonathan Guillotte-Blouin -->
<!-- There are some easter eggs... try "triple" or "yeaaah" -->
<html>
	<head>
		<meta charset="utf-8"/>
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<meta name="robots" content="index, follow" />
		<meta name="description" content="Outil pratique et efficace pour des calculs d'algèbre vectoriel" />
		<meta name="keywords" content="vecteurs, vecteur, addition, conversion, angle, algèbre, produit scalaire, produit vectoriel, produit mixte, vectoriel" />
		<title> Calculateur de vecteurs - addition, conversion d'angles et produits de vecteurs </title>
		<link rel="stylesheet" href="css/style.css">
		<link rel="stylesheet" href="css/bootstrap.min.css">
		<link rel="stylesheet" href="css/bootstrap-theme.min.css">
		<link rel="icon" type="image/x-icon" href="favicon.ico" />
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
		<audio>
			<source src="audio/triple.mp3">
			<source src="audio/triple.ogg">
		</audio>
		<audio>
			<source src="audio/yeah.mp3">
			<source src="audio/yeah.ogg">
		</audio>
		<img id="grumpy" src="img/grumpycat.jpg" alt="grumpy cat says no" />
		<img id="seriouslystop" src="img/seriouslystop.png" alt="no, already" />
		<img id="stopit" src="img/stopit.jpg" alt="come on dude" />
		<div class="container">
			<header class="row">
				<div class="col-xs-12 col-md-12 col-sm-12 col-xs-12">
					<h1> Calculateur de vecteurs </h1>
					<a href="index-en.php"><button id="language-selector" class="btn btn-info">English</button></a>
					<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
						<input type="hidden" name="cmd" value="_s-xclick">
						<input type="hidden" name="encrypted" value="-----BEGIN PKCS7-----MIIHPwYJKoZIhvcNAQcEoIIHMDCCBywCAQExggEwMIIBLAIBADCBlDCBjjELMAkGA1UEBhMCVVMxCzAJBgNVBAgTAkNBMRYwFAYDVQQHEw1Nb3VudGFpbiBWaWV3MRQwEgYDVQQKEwtQYXlQYWwgSW5jLjETMBEGA1UECxQKbGl2ZV9jZXJ0czERMA8GA1UEAxQIbGl2ZV9hcGkxHDAaBgkqhkiG9w0BCQEWDXJlQHBheXBhbC5jb20CAQAwDQYJKoZIhvcNAQEBBQAEgYAnsRt4NIS6pKCiIgg3ZlPTXri0uF1pCPwe3W/csdLV1dlsZQy1QYjqTyDS0pNnYD5kkM4KB1OGk3rC3FXKy7hgvsuc1OG9sJcLSRESpW0f8mqhdu7ffo2Z+4FWP5FuKjZoxfoBoCqcSZ3qnjQvid7a77Fzs4jEbe7Ax5pijm8tLDELMAkGBSsOAwIaBQAwgbwGCSqGSIb3DQEHATAUBggqhkiG9w0DBwQINFHZpsMLgASAgZjlcr1wQqJE96+Mof4IYZTcczyP5mN033i8IDTjCYgHzC0l67hWISO3xKadvuqqb9BeSB4stoeZxCDUkdFp1wfZl/y5SvArcIKz2AhxMIXo0MnrK18Ca3KwgYIaWeJdP7gO0fRp2AYR+ZQPCY1hpN2SjSWX1oCLzASO/Pn5pleIKxz7nLGvikPd71hxmJ+sFZh5FZ4jOPpkjKCCA4cwggODMIIC7KADAgECAgEAMA0GCSqGSIb3DQEBBQUAMIGOMQswCQYDVQQGEwJVUzELMAkGA1UECBMCQ0ExFjAUBgNVBAcTDU1vdW50YWluIFZpZXcxFDASBgNVBAoTC1BheVBhbCBJbmMuMRMwEQYDVQQLFApsaXZlX2NlcnRzMREwDwYDVQQDFAhsaXZlX2FwaTEcMBoGCSqGSIb3DQEJARYNcmVAcGF5cGFsLmNvbTAeFw0wNDAyMTMxMDEzMTVaFw0zNTAyMTMxMDEzMTVaMIGOMQswCQYDVQQGEwJVUzELMAkGA1UECBMCQ0ExFjAUBgNVBAcTDU1vdW50YWluIFZpZXcxFDASBgNVBAoTC1BheVBhbCBJbmMuMRMwEQYDVQQLFApsaXZlX2NlcnRzMREwDwYDVQQDFAhsaXZlX2FwaTEcMBoGCSqGSIb3DQEJARYNcmVAcGF5cGFsLmNvbTCBnzANBgkqhkiG9w0BAQEFAAOBjQAwgYkCgYEAwUdO3fxEzEtcnI7ZKZL412XvZPugoni7i7D7prCe0AtaHTc97CYgm7NsAtJyxNLixmhLV8pyIEaiHXWAh8fPKW+R017+EmXrr9EaquPmsVvTywAAE1PMNOKqo2kl4Gxiz9zZqIajOm1fZGWcGS0f5JQ2kBqNbvbg2/Za+GJ/qwUCAwEAAaOB7jCB6zAdBgNVHQ4EFgQUlp98u8ZvF71ZP1LXChvsENZklGswgbsGA1UdIwSBszCBsIAUlp98u8ZvF71ZP1LXChvsENZklGuhgZSkgZEwgY4xCzAJBgNVBAYTAlVTMQswCQYDVQQIEwJDQTEWMBQGA1UEBxMNTW91bnRhaW4gVmlldzEUMBIGA1UEChMLUGF5UGFsIEluYy4xEzARBgNVBAsUCmxpdmVfY2VydHMxETAPBgNVBAMUCGxpdmVfYXBpMRwwGgYJKoZIhvcNAQkBFg1yZUBwYXlwYWwuY29tggEAMAwGA1UdEwQFMAMBAf8wDQYJKoZIhvcNAQEFBQADgYEAgV86VpqAWuXvX6Oro4qJ1tYVIT5DgWpE692Ag422H7yRIr/9j/iKG4Thia/Oflx4TdL+IFJBAyPK9v6zZNZtBgPBynXb048hsP16l2vi0k5Q2JKiPDsEfBhGI+HnxLXEaUWAcVfCsQFvd2A1sxRr67ip5y2wwBelUecP3AjJ+YcxggGaMIIBlgIBATCBlDCBjjELMAkGA1UEBhMCVVMxCzAJBgNVBAgTAkNBMRYwFAYDVQQHEw1Nb3VudGFpbiBWaWV3MRQwEgYDVQQKEwtQYXlQYWwgSW5jLjETMBEGA1UECxQKbGl2ZV9jZXJ0czERMA8GA1UEAxQIbGl2ZV9hcGkxHDAaBgkqhkiG9w0BCQEWDXJlQHBheXBhbC5jb20CAQAwCQYFKw4DAhoFAKBdMBgGCSqGSIb3DQEJAzELBgkqhkiG9w0BBwEwHAYJKoZIhvcNAQkFMQ8XDTE0MDkxNzAzMTMxOVowIwYJKoZIhvcNAQkEMRYEFKLJiUFuQrGynriYHHeLZXVChHJAMA0GCSqGSIb3DQEBAQUABIGAmBRMrszGfohJDyNo1CMygKmRLoXM29R/GiYTx1t40pzC8JuXHq0wexRwfMyzZFu8aolMaz4AtJUyvvRsK3tZeLMqgy/uX6+FWZddlnAsUYbHzuB5iwps010zV87FPrUyCc0zAmUtTnK2ryCA6KAra55rkkT5pm1Ntl+GQH0eVAk=-----END PKCS7-----">
						<input type="image" src="https://www.paypalobjects.com/fr_CA/i/btn/btn_donate_LG.gif" border="0" name="submit" alt="PayPal - la solution de paiement en ligne la plus simple et la plus sécurisée !">
						<img alt="" border="0" src="https://www.paypalobjects.com/fr_CA/i/scr/pixel.gif" width="1" height="1">
					</form>
				</div>
			</header>
			<div class="row" id="selection">
				<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
					<ul id="onglets" class="nav nav-tabs nav-justified" role="tablist">
					  <li class="active"><a href="#mod" data-toggle="tab"> addition (polaire) </a></li>
					  <li><a href="#com" data-toggle="tab"> addition (composantes) </a></li>
					  <li><a href="#con" data-toggle="tab"> conversion d'angles </a></li>
					  <li><a href="#mul" data-toggle="tab"> produit </a></li>
					  <li><a href="#uni" data-toggle="tab"> vecteur unitaire </a></li>
					</ul>
					<div class="tab-content">
						<div id="centrerButons">
							<div class="mode-selector" id="selectMode">
								 <span class="mode"><b>Mode</b> </span>
								 <div class="btn-group" data-toggle="buttons">
									 <label class="btn btn-default" id="rad"> 
									 	<input type="radio" name="inlineRadioOptions" value="rad"> Radians 
									 </label>
									 <label class="btn btn-default" id="deg"> 
									 	<input type="radio" name="inlineRadioOptions" value="deg"> Degrés 
									 </label>
								 </div>	 
							</div>
							<div class="mode-selector formatReponse" id="format">
								 <span class="mode"><b>Format de la réponse</b> </span>
								 <div class="btn-group" data-toggle="buttons">
									 <label class="btn btn-default" id="polaire"> 
									 	<input type="radio" name="inlineRadioOptions" value="rad"> Polaire 
									 </label>
									 <label class="btn btn-default" id="composantes"> 
									 	<input type="radio" name="inlineRadioOptions" value="deg"> Composantes 
									 </label>
								 </div>	 
							</div>
						</div>
						<!-- Module et orientation -->
					    <div id="mod" class="tab-pane fade in active">
					    	<div id="resetInputs1">
								<button type="button" class="btn btn-default"> Vider le tout</button>
							</div>
							<div class="easter_eggs">
								<button type="button" class="btn btn-danger">Sneaky...</button>
							</div>
							<p><!-- Inserer reponse --></p>
					        <table class="table table-bordered table-striped form-inline">
					        	<thead>
					        		<tr>
						        		<th> vecteur </th>
						        		<th> norme </th>
						        		<th> orientation </th>
					        		</tr>
					        	</thead>
					        	<tbody class="form-inline">
					        		<tr>
					        			<td><span class="italic">v</span><sub>1</sub> </td>
					        			<td> <input class="form-control" id="modu0" type="text" maxlength="20"></td> <!-- modu = module / orie = orientation -->
					        			<td><input class="form-control" id="orie0" type="text" maxlength="20"><span class="symbole"> °</span></td>
					        		</tr>
					        		<tr>
					        			<td><span class="italic">v</span><sub>2</sub> </td>
					        			<td> <input class="form-control" id="modu1" type="text" maxlength="20"></td>
					        			<td> <input class="form-control" id="orie1" type="text" maxlength="20"><span class="symbole"> °</span></td>
					        		</tr>
					        	</tbody>
					        </table>		
					    </div>

					    <!-- Composantes -->
					    <div id="com" class="tab-pane fade">
					    	<div id="resetInputs2">
								<button type="button" class="btn btn-default"> Vider le tout</button>
							</div>
							<div class="easter_eggs">
								<button type="button" class="btn btn-danger">Sneaky...</button>
							</div>
							<p><!-- Inserer reponse --></p>
					        <table class="table table-bordered table-striped">
					        	<thead>
					        		<tr>
						        		<th> vecteur </th>
						        		<th> composante x </th>
						        		<th> composante y </th>
					        		</tr>
					        	</thead>
					        	<tbody>
					        		<tr>
					        			<td><span class="italic">v</span><sub>1</sub> </td>
					        			<td> <input class="form-control" id="comX0" type="text" maxlength="11" ></td>
					        			<td> <input class="form-control" id="comY0" type="text" maxlength="11"><span></span></td>
					        		</tr>
					        		<tr>
					        			<td><span class="italic">v</span><sub>2</sub> </td>
					        			<td> <input class="form-control" id="comX1" type="text" maxlength="11" ></td>
					        			<td> <input class="form-control" id="comY1" type="text" maxlength="11"><span></span></td>
					        		</tr>
					        	</tbody>
					        </table>
					    </div>
					     <!-- Conversion -->
					    <div id="con" class="tab-pane fade">
							<div class="btn-group" data-toggle="buttons">
								 <label class="btn btn-default" id="radToDeg"> 
								 	<input type="radio" name="inlineRadioOptions" value="rad"> radians <span class="glyphicon glyphicon-arrow-right"></span> degrés 
								 </label>
								 <label class="btn btn-default" id="degToRad"> 
								 	<input type="radio" name="inlineRadioOptions" value="deg"> degrés <span class="glyphicon glyphicon-arrow-right"></span> radians 
								 </label>
							</div>	 
							<p></p>
							<div class="input-group col-lg-10" id="angleConverti">
								<input id="entreeConversion" autofocus maxlength="23" style="text-align: right;" class="form-control" type="text" placeholder="L'angle à convertir">
								<span class="input-group-btn">
    								<button class="btn btn-primary" type="button">Convertir</button>
  								</span>	
								<input class="form-control" id="reponseConversion" type="text" disabled>
							</div>
					    </div>
					    <!-- Produits vectoriels -->
					    <div id="mul" class="tab-pane fade">
					    	<span class="mode"><b>Produit: </b> </span>
					    	<div class="btn-group" data-toggle="buttons">
								 <label class="btn btn-default" id="scalaire"> 
								 	<input type="radio" name="inlineRadioOptions" value="scalaire"> Scalaire
								 </label>
								 <label class="btn btn-default" id="vectoriel"> 
								 	<input type="radio" name="inlineRadioOptions" value="vectoriel"> Vectoriel 
								 </label>
								 <label class="btn btn-default" id="mixte">
								 	<input type="radio" name="inlineRadioOptions" value="mixte"> Mixte
								 </label>
							</div>
							<div id="resetInputs3">
								<button type="button" class="btn btn-default"> Vider le tout</button>
							</div>
							<div class="easter_eggs">
								<button type="button" class="btn btn-danger">Sneaky...</button>
							</div>
							<p></p>
							<p></p>
							<p></p>
							<p></p>
							<table class="table table-bordered table-striped" id="tableS">
					        	<tbody>
					        		<tr>
					        			<td><span class="italic">u</span></td>
					        			<td><input class="form-control" type="text" maxlength="20" placeholder="1" id="scau0"> </td>
					        			<td><input class="form-control" type="text" maxlength="20" placeholder="2" id="scau1"> </td>
					        			<td><input class="form-control" type="text" maxlength="20" placeholder="3" id="scau2"> </td>
					        		</tr>
					        		<tr>
					        			<td><span class="italic">v</span></td>
					        			<td><input class="form-control" type="text" maxlength="20" placeholder="1" id="scav0"> </td>
					        			<td> <input class="form-control" type="text" maxlength="20" placeholder="2" id="scav1"><span> </span></td>
					        			<td> <input class="form-control" type="text" maxlength="20" placeholder="3" id="scav2"><span> </span></td>
					        		</tr>
					        	</tbody>
					        </table>
					        <table class="table table-bordered table-striped" id="tableV">
					        	<tbody>
					        		<tr>
					        			<td><span class="italic">u</span></td>
					        			<td><input class="form-control" type="text" maxlength="20" placeholder="1" id="vecu0"> </td>
					        			<td><input class="form-control" type="text" maxlength="20" placeholder="2" id="vecu1"> </td>
					        			<td><input class="form-control" type="text" maxlength="20" placeholder="3" id="vecu2"> </td>
					        		</tr>
					        		<tr>
					        			<td><span class="italic">v</span></td>
					        			<td><input class="form-control" type="text" maxlength="20" placeholder="1" id="vecv0"> </td>
					        			<td> <input class="form-control" type="text" maxlength="20" placeholder="2" id="vecv1"><span> </span></td>
					        			<td> <input class="form-control" type="text" maxlength="20" placeholder="3" id="vecv2"><span> </span></td>
					        		</tr>
					        	</tbody>
					        </table>
					        <table class="table table-bordered table-striped" id="tableM">
					        	<tbody>
					        		<tr>
					        			<td><span class="italic">u</span></td>
					        			<td><input class="form-control" type="text" maxlength="20" placeholder="1" id="mixu0"> </td>
					        			<td><input class="form-control" type="text" maxlength="20" placeholder="2" id="mixu1"> </td>
					        			<td><input class="form-control" type="text" maxlength="20" placeholder="3" id="mixu2"> </td>
					        		</tr>
					        		<tr>
					        			<td><span class="italic">v</span></td>
					        			<td><input class="form-control" type="text" maxlength="20" placeholder="1" id="mixv0"> </td>
					        			<td> <input class="form-control" type="text" maxlength="20" placeholder="2" id="mixv1"><span> </span></td>
					        			<td> <input class="form-control" type="text" maxlength="20" placeholder="3" id="mixv2"><span> </span></td>
					        		</tr>
					        		<tr>
					        			<td><span class="italic">w</span></td>
					        			<td><input class="form-control" type="text" maxlength="20" placeholder="1" id="mixw0"> </td>
					        			<td><input class="form-control" type="text" maxlength="20" placeholder="2" id="mixw1"> </td>
					        			<td><input class="form-control" type="text" maxlength="20" placeholder="3" id="mixw2"> </td>
					        		</tr>
					        	</tbody>
					        </table>
					        <div class="ajouterCompBox">			
								<button type="button" class="btn btn-primary" id="ajouterComp">Ajouter 1 composante</button>
							</div>
							<div class="enleverCompBox">
								<button type="button" class="btn btn-danger" id="enleverComp">Enlever 1 composante</button>	
							</div>
							<div class="afficherProduitBox">
								<button type="button" class="btn btn-success" id="afficherProduit">Afficher le résultat</button> 
					   		</div>		
					    </div>
						<!-- Vecteurs unitaires -->
					    <div id="uni" class="tab-pane fade">
							<p id="regle_uni">si <span class="italic">u = (u<sub>1</sub>, u<sub>2</sub>, ..., u<sub>n</sub>)</span> et <span class="italic">λ</span> est son vecteur directeur unitaire <span class="italic">∈ ℛ <sup>n</sup> <br> λ = (u<sub>1</sub>, u<sub>2</sub>, ..., u<sub>n</sub>) / ||u||</span></p>
							<div id="resetInputs4">
								<button type="button" class="btn btn-default"> Vider le tout</button>
							</div>
							<div class="easter_eggs">
								<button type="button" class="btn btn-danger">Sneaky...</button>
							</div>
							<p></p>
							<table class="table table-bordered table-striped">
					        	<tbody>
					        		<tr>
					        			<td><span class="italic">u</span></td>
					        			<td><input class="form-control" type="text" maxlength="20" placeholder="1" id="unit0"> </td>
					        			<td><input class="form-control" type="text" maxlength="20" placeholder="2" id="unit1"> </td>
					        			<td><input class="form-control" type="text" maxlength="20" placeholder="3" id="unit2"> </td>
					        		</tr>
					        	</tbody>
					        </table>
					        <div id="unitaireBoutons">
						        <div class="ajouterCompBox">			
									<button type="button" class="btn btn-primary" id="ajouterComp2">Ajouter 1 composante</button>
								</div>
								<div class="enleverCompBox">
									<button type="button" class="btn btn-danger" id="enleverComp2">Enlever 1 composante</button>	
								</div>
								<div class="afficherProduitBox">
									<button type="button" class="btn btn-success" id="afficherResultat">Afficher le résultat</button> 
						   		</div>
					   		</div>
					    </div>
						<!-- Alerte pi radians -->
						<div id="alertPi" class="alert alert-info alert-dismissible" role="alert">
						  <button type="button" class="close" data-dismiss="alert"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>
						  <strong>Pour utiliser π, simplement écrire "pi"<br> <span class="italic">Exemple: 5π/6<br> 5*pi/6 <span class="glyphicon glyphicon-ok"></span> ... 5pi/6 <span class="glyphicon glyphicon-remove"></span></span></strong>
						</div>
						<div id="boutons">
						    <!-- Split button, ajouter -->
						    <div id="btn1">
								<div class="btn-group dropup">
								  <button type="button" class="btn btn-primary">Ajouter 1 vecteur</button>
								  <button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown">
								    <span class="caret"></span>
								    <span class="sr-only">Toggle Dropdown</span>
								  </button>
								  <ul class="dropdown-menu" role="menu" id="ajouter">
								    <li><a role="button">1</a> </li>
								    <li><a role="button">2</a> </li>
								    <li><a role="button">3</a> </li>
								    <li><a role="button">4</a> </li>
								    <li><a role="button">5</a> </li>
								  </ul>
								</div>
							</div>
							<!-- Split button, enlever -->
							<div id="btn2">
								<div class="btn-group dropup">
								  <button type="button" class="btn btn-danger">Enlever 1 vecteur</button>
								  <button type="button" class="btn btn-danger dropdown-toggle" data-toggle="dropdown">
								    <span class="caret"></span>
								    <span class="sr-only">Toggle Dropdown</span>
								  </button>
								  <ul class="dropdown-menu" role="menu" id="enlever">
								    <li><a role="button">1</a> </li>
								    <li><a role="button">2</a> </li>
								    <li><a role="button">3</a></li>
								    <li><a role="button">4</a> </li>
								    <li><a role="button">5</a> </li>
								  </ul>
								</div>
							</div>
							<div id="btn3">
								<button type="button" class="btn btn-success">Afficher la résultante</button>
							</div>
						</div>
					</div>
				</div>
			</div>
			<footer class="col-lg-12">
				<h3> Questions? Commentaires? <a href="faq.php">FAQ</a></h3>
				<p style="color: #2a64a7;"> Ou posez vos questions sur la page facebook et twitter!<a href="https://www.facebook.com/vectorsCalculator"><button class="btn btn-default"><img src="img/facebook.png" alt="facebook"/></button></a><a id="twitter_bouton" href="https://www.twitter.com/VectorCalculate"><button class="btn btn-default"><img src="img/twitter.png" alt="twitter"/></button></a></p>
				<div style="margin-bottom:10px;" class="fb-like" data-href="https://www.facebook.com/vectorsCalculator" data-layout="button_count" data-action="like" data-show-faces="false" data-share="true"></div> <br>
				<a class="twitter-follow-button" href="https://twitter.com/VectorCalculate" data-show-count="false" data-lang="fr">Suivre @VectorCalculate</a>
			</footer>
		</div>

		<!-- Insertion des librairies/scripts javascript -->
		<script src="js/jquery.min.js"></script>
		<script src="js/bootstrap.min.js"></script>
		<script src="js/script.js"></script>

		<!-- analytics -->
		<script>
		  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
		  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
		  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
		  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

		  ga('create', 'UA-55117067-1', 'auto');
		  ga('send', 'pageview');
		</script>
	</body>
	<!-- ajouter l'onglet "vecteur unitaire" -->
</html>