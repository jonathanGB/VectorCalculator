var nombre_vecteurs = 2;
var nombre_ajout = 1;
var nombre_retire = 1;
var rad = false;
var deg = true;
var modules = [];
var orientations = [];
var comX = [];
var comY = [];
var polaire = true;
var composantes = false;
var modulesOnglet = true;
var composantesOnglet = false;
var radToDeg = false;
var degToRad = false;
var scalaire = false
var vectoriel = false;
var mixte = false;
var nombre_composantes = 3;
var nombre_composantes_unitaire = 3;
var scalairesU = [];
var scalairesV = [];
var vectorielsU = [];
var vectorielsV = [];
var mixtesU = [];
var mixtesV = [];
var mixtesW = [];
var unitaires = [];
var unitaires_resultat = [];
var changementS = false;
var changementV = false;
var changementM = false;
var approximation_zero = 1e-10;
var yeahs = 0;
var triples = 0;

function hidePopover(selector)
{
	setTimeout(function () {
		$(selector).popover('destroy');
		}, 2500);
}

$(document).ready(function() {
	// mettre le format polaire comme format de reponse par defaut
	$('#polaire').button('toggle');
	// mettre le bouton degres comme angle par defaut
	$('#deg').button('toggle');
	// mettre a jour le bouton "ajouter"
    $('#ajouter a').on('click', function() {
    	nombre_ajout = parseInt($(this).html());
    	if (nombre_ajout > 1)
        	$('#btn1 button').eq(0).html('Ajouter ' + nombre_ajout +' vecteurs');
        else if (nombre_ajout == 1)
        	$('#btn1 button').eq(0).html('Ajouter ' + nombre_ajout +' vecteur');
    });
    // mettre a jour le bouton "enlever"
    $('#enlever a').on('click', function() {
    	nombre_retire = parseInt($(this).html());

    	if (nombre_retire > 1)
        	$('#btn2 button').eq(0).html('Enlever ' + nombre_retire +' vecteurs');
        else if (nombre_retire == 1)
        	$('#btn2 button').eq(0).html('Enlever ' + nombre_retire +' vecteur');
    });
    // ajouter le nombre de vecteurs desires dans le tableau
    $('#btn1 button:eq(0)').on('click', function() {   	
    	nombre_vecteurs += nombre_ajout;

    	if(nombre_vecteurs > 7)
    	{
    		nombre_vecteurs -= nombre_ajout;
    		
    		$(this).popover({
    			container: 'body',
    			content: 'Maximum de 7 vecteurs à la fois',
    			placement: 'top',
    		}).popover('show');

    		hidePopover('#btn1 button:eq(0)');
		}
    	else
    	{
    		var width = $(window).width();

    		if (width > 768)
    		{
		    	for(var i = 0; i < nombre_ajout; i++)
		    	{
		    		var indice = $('#mod tbody tr:last sub').html();
		    		if (rad == true)
		    			$('#mod tbody').append('<tr><td><span class="italic">v</span><sub>' + parseInt(parseInt(indice) + 1) + '</sub> </td><td> <input id="modu' + indice + '" type="text" maxlength="11" class="form-control"></td><td> <input id="orie' + indice + '" type="text" maxlength="6" class="form-control"><span> rad</span></td></tr>');
		    		else if (deg == true)
		    			$('#mod tbody').append('<tr><td><span class="italic">v</span><sub>' + parseInt(parseInt(indice) + 1) + '</sub> </td><td> <input id="modu' + indice + '" type="text" maxlength="11" class="form-control"></td><td> <input id="orie' + indice + '" type="text" maxlength="6" class="form-control"><span> °</span></td></tr>');
		    		else
		    			$('#mod tbody').append('<tr><td><span class="italic">v</span><sub>' + parseInt(parseInt(indice) + 1) + '</sub> </td><td> <input id="modu' + indice + '" type="text" maxlength="11" class="form-control"></td><td> <input id="orie' + indice + '" type="text" maxlength="6" class="form-control"><span></span></td></tr>');
		    		
		    		$('#com tbody').append('<tr><td><span class="italic">v</span><sub>' + parseInt(parseInt(indice) + 1) + '</sub> </td><td> <input id="comX' + indice + '" type="text" maxlength="11" class="form-control"></td><td> <input id="comY' + indice + '" type="text" maxlength="11" class="form-control"> </td></tr>');
		    	}
		    }
		    else if (rad == true)
		    {
		    	for(var i = 0; i < nombre_ajout; i++)
		    	{
		    		var indice = $('#mod tbody tr:last sub').html();
		    		if (rad == true)
		    			$('#mod tbody').append('<tr><td><span class="italic">v</span><sub>' + parseInt(parseInt(indice) + 1) + '</sub> </td><td> <input id="modu' + indice + '" type="text" maxlength="11" class="form-control"></td><td> <input id="orie' + indice + '" type="text" placeholder="radians" maxlength="6" class="form-control"><span></span></td></tr>');
		    		else if (deg == true)
		    			$('#mod tbody').append('<tr><td><span class="italic">v</span><sub>' + parseInt(parseInt(indice) + 1) + '</sub> </td><td> <input id="modu' + indice + '" type="text" maxlength="11" class="form-control"></td><td> <input id="orie' + indice + '" type="text" placeholder="radians" maxlength="6" class="form-control"><span></span></td></tr>');
		    		else
		    			$('#mod tbody').append('<tr><td><span class="italic">v</span><sub>' + parseInt(parseInt(indice) + 1) + '</sub> </td><td> <input id="modu' + indice + '" type="text" maxlength="11" class="form-control"></td><td> <input id="orie' + indice + '" type="text" placeholder="radians" maxlength="6" class="form-control"><span></span></td></tr>');
		    		
		    		$('#com tbody').append('<tr><td><span class="italic">v</span><sub>' + parseInt(parseInt(indice) + 1) + '</sub> </td><td> <input id="comX' + indice + '" type="text" maxlength="11" class="form-control"></td><td> <input id="comY' + indice + '" type="text" maxlength="11" class="form-control"> </td></tr>');
		    	}
		    }
		    else if (deg == true)
		    {
		    	for(var i = 0; i < nombre_ajout; i++)
		    	{
		    		var indice = $('#mod tbody tr:last sub').html();
		    		if (rad == true)
		    			$('#mod tbody').append('<tr><td><span class="italic">v</span><sub>' + parseInt(parseInt(indice) + 1) + '</sub> </td><td> <input id="modu' + indice + '" type="text" maxlength="11" class="form-control"></td><td> <input id="orie' + indice + '" type="text" placeholder="degrés" maxlength="6" class="form-control"><span></span></td></tr>');
		    		else if (deg == true)
		    			$('#mod tbody').append('<tr><td><span class="italic">v</span><sub>' + parseInt(parseInt(indice) + 1) + '</sub> </td><td> <input id="modu' + indice + '" type="text" maxlength="11" class="form-control"></td><td> <input id="orie' + indice + '" type="text" placeholder="degrés" maxlength="6" class="form-control"><span></span></td></tr>');
		    		else
		    			$('#mod tbody').append('<tr><td><span class="italic">v</span><sub>' + parseInt(parseInt(indice) + 1) + '</sub> </td><td> <input id="modu' + indice + '" type="text" maxlength="11" class="form-control"></td><td> <input id="orie' + indice + '" type="text" placeholder="degrés" maxlength="6" class="form-control"><span></span></td></tr>');
		    		
		    		$('#com tbody').append('<tr><td><span class="italic">v</span><sub>' + parseInt(parseInt(indice) + 1) + '</sub> </td><td> <input id="comX' + indice + '" type="text" maxlength="11" class="form-control"></td><td> <input id="comY' + indice + '" type="text" maxlength="11" class="form-control"> </td></tr>');
		    	}
		    }
	    }
    });
    // enlever le nombre de vecteurs desires dans le tableau
    $('#btn2 button:eq(0)').on('click', function() {   	

    	if(nombre_vecteurs-nombre_retire <= 1)
    	{
    		$(this).popover({
    			container: 'body',
    			content: 'Il doit y avoir minimalement 2 vecteurs',
    			placement: 'top',
    		}).popover('show');

    		hidePopover('#btn2 button:eq(0)');
    	}
    	else
    	{ 
	    	for(var i = nombre_vecteurs-1; i > nombre_vecteurs - nombre_retire-1; i--)
	    	{
	    		$('#mod tbody tr').eq(i).remove();
	    		$('#com tbody tr').eq(i).remove();
	    		modules[i] = undefined;
				orientations[i] = undefined;
				comX[i] = undefined;
				comY[i] = undefined;
	    	}
	    	nombre_vecteurs -= nombre_retire;
	    }
    });
    // change les booleans quand on change d'onglet
    $('#selection div:eq(0) ul:eq(0) li:eq(0)').click(function() {
    	modulesOnglet = true;
	    composantesOnglet = false;
    });
    $('#selection div:eq(0) ul:eq(0) li:eq(1)').click(function() {
    	composantesOnglet = true;
    	modulesOnglet = false;

    	$('#alertPi').css('display', 'none');
    });
    // changer l'unite pour des rads
    $('#rad').click(function() {
        for (var i = 0; i < nombre_vecteurs; i++)
        {
        	if ($(window).width() <= 768)
				$('#mod tbody tr:eq('+i+') td:eq(2) input').attr('placeholder', 'radians');
			else
				$('#mod tbody tr:eq('+ i +') span:eq(1)').text(' rad');
        }

        rad = true;
    	deg = false;

        $('#alertPi').css('display', 'block');
	});
	// changer l'unite pour des degres
    $('#deg').click(function() {
        for (var i = 0; i < nombre_vecteurs; i++)
        {
        	if ($(window).width() <= 768)
				$('#mod tbody tr:eq('+i+') td:eq(2) input').attr('placeholder', 'degrés');
			else
				$('#mod tbody tr:eq('+ i +') span:eq(1)').text(' °');
        }

        deg = true;
    	rad = false;
	});
	// change les booleans de la conversion
	$('#radToDeg').click(function() {
		radToDeg = true;
		degToRad = false;

		$('#con p').html(' 1 radian = 1 <span class="italic">x</span> 180 / π')
	});
	$('#degToRad').click(function() {
		degToRad = true;
		radToDeg = false;

		$('#con p').html(' 1 degré = 1 <span class="italic">x</span> π / 180')
	});
	// ajouter composantes produit scalaire
	$('#ajouterComp').click(function() {

		if (nombre_composantes < 5)
		{
			nombre_composantes++;
			$('#tableS tr:eq(0)').append('<td><input class="form-control" type="text" maxlength="20" placeholder="' + nombre_composantes +'" id="scau' + parseInt(parseInt(nombre_composantes) - 1) + '"> </td>');
			$('#tableS tr:eq(1)').append('<td><input class="form-control" type="text" maxlength="20" placeholder="' + nombre_composantes +'" id="scav' + parseInt(parseInt(nombre_composantes) - 1) + '"> </td>');
		}
		else
		{
			$(this).popover({
				container: 'body',
				content: 'Maximum de 5 composantes',
				placement: 'top',
			}).popover('show');

		    hidePopover('#ajouterComp');
		}
	});
	// enlever composantes produit scalaire
	$('#enleverComp').click(function() {
		var count = 0;

		if (nombre_composantes > 1)
		{
			$('#tableS tr:eq(1) td').eq(nombre_composantes).remove();
			$('#tableS tr:eq(0) td').eq(nombre_composantes).remove();
			scalairesU[nombre_composantes -1] = undefined;
			scalairesV[nombre_composantes -1] = undefined;
			nombre_composantes--;

			for (var i = 0; i < nombre_composantes; i++)
			{
				if (scalairesV[i] == undefined && scalairesU[i] == undefined)
					count++;
			}

			if (count == nombre_composantes)
				$('#resetInputs3').fadeOut(500);

		}
		else
		{
			$(this).popover({
				container: 'body',
				content: 'Minimum d\'une composante par vecteur',
				placement: 'top',
			}).popover('show');

		    hidePopover('#enleverComp');
		}
	});
	// ajouter composante vecteur directeur unitaire
	$('#ajouterComp2').click(function() {

		if (nombre_composantes_unitaire < 5)
		{
			nombre_composantes_unitaire++;
			$('#uni table tr:eq(0)').append('<td><input class="form-control" type="text" maxlength="20" placeholder="' + nombre_composantes_unitaire
			 +'" id="unit' + parseInt(parseInt(nombre_composantes_unitaire) - 1) + '"> </td>');
		}
		else
		{
			$(this).popover({
				container: 'body',
				content: 'Maximum de 5 composantes',
				placement: 'top',
			}).popover('show');

		    hidePopover('#ajouterComp2');
		}
	});
	// enlever composantes vecteur directeur unitaire
	$('#enleverComp2').click(function() {
		var count = 0;

		if (nombre_composantes_unitaire > 2)
		{
			$('#uni table tr:eq(0) td').eq(nombre_composantes_unitaire).remove();
			unitaires[nombre_composantes_unitaire-1] = undefined;
			unitaires_resultat[nombre_composantes_unitaire-1] = undefined;
			nombre_composantes_unitaire--;

			for (var i = 0; i < nombre_composantes_unitaire; i++)
			{
				if (unitaires[i] == undefined)
					count++;
			}

			if (count == nombre_composantes_unitaire)
				$('#resetInputs4').fadeOut(500);
		}
		else
		{
			$(this).popover({
				container: 'body',
				content: 'Minimum de deux composantes',
				placement: 'top',
			}).popover('show');

		    hidePopover('#enleverComp2');
		}
	});
	// change les booleans de produits et affecte le p
	$('#scalaire').click(function() {
		scalaire = true;
		vectoriel = false;
		mixte = false;

		if (changementS == true)
			$('#resetInputs3').fadeIn(500);
		else
			$('#resetInputs3').hide();

		$('#tableV, #tableM, #mul p:eq(2), #mul p:eq(3)').hide();
		$('#mul p:eq(1)').fadeIn(500);
		$('#tableS, #ajouterComp, #enleverComp, #afficherProduit').show();
		$('#mul p:eq(0)').html('si <span class="italic">u = (u<sub>1</sub>, u<sub>2</sub>, ..., u<sub>n</sub>)</span> et <span class="italic">v = (v<sub>1</sub>, v<sub>2</sub>, ..., v<sub>n</sub>) ∈ ℛ <sup>n</sup> <br>u · v = (u<sub>1</sub>v<sub>1</sub> + u<sub>2</sub>v<sub>2</sub> + ... + u<sub>n</sub>v<sub>n</sub>) ∈ ℛ</span>');
	});
	$('#vectoriel').on('click', function() {
		scalaire = false;
		vectoriel = true;
		mixte = false;

		if (changementV == true)
			$('#resetInputs3').fadeIn(500);
		else
			$('#resetInputs3').hide();

		$('#mul p:eq(1), #mul p:eq(3)').hide();
		$('#mul p:eq(2)').fadeIn(500);
		$('#tableV, #afficherProduit').show();
		$('#tableS, #tableM, #ajouterComp, #enleverComp').hide();
		$('#mul p:eq(0)').html('si <em>u = (u<sub>1</sub>, u<sub>2</sub>, u<sub>3</sub>)</em> et <em>v = (v<sub>1</sub>, v<sub>2</sub>, v<sub>3</sub>) ∈ ℛ <sup>3</sup><br>u ∧ v = (u<sub>2</sub>v<sub>3</sub> - u<sub>3</sub>v<sub>2</sub> , u<sub>3</sub>v<sub>1</sub> - u<sub>1</sub>v<sub>3</sub> , u<sub>1</sub>v<sub>2</sub> - u<sub>2</sub>v<sub>1</sub>) ∈ ℛ <sup>3</sup>');
		
	});
	$('#mixte').click(function() {
		scalaire = false;
		vectoriel = false;
		mixte = true;

		if (changementM == true)
			$('#resetInputs3').fadeIn(500);
		else
			$('#resetInputs3').hide();

		$('#mul p:eq(1), #mul p:eq(2)').hide();
		$('#mul p:eq(3)').fadeIn(500);
		$('#tableM, #afficherProduit').show();
		$('#tableS, #tableV, #ajouterComp, #enleverComp').hide();
		$('#mul p:eq(0)').html('si <em>u = (u<sub>1</sub>, u<sub>2</sub>, u<sub>3</sub>)</em> , <em>v = (v<sub>1</sub>, v<sub>2</sub>, v<sub>3</sub>)</em> et <em>w = (w<sub>1</sub>, w<sub>2</sub>, w<sub>3</sub>) ∈ ℛ <sup>3</sup><br>u · (v ∧ w) = (u<sub>1</sub>(v<sub>2</sub>w<sub>3</sub> - v<sub>3</sub>w<sub>2</sub>) + u<sub>2</sub>(v<sub>3</sub>w<sub>1</sub> - v<sub>1</sub>w<sub>3</sub>) + u<sub>3</sub>(v<sub>1</sub>w<sub>2</sub> - v<sub>2</sub>w<sub>1</sub>))∈ ℛ ');
	
		if($(window).width() <= 400 && mixte == true)
			$('#mul p:eq(0)').html('<em>u</em>, <em>v</em> et <em>w ∈ ℛ <sup>3</sup> | u · (v ∧ w) ∈ ℛ</em>');
	});
	// changer les booleans du format
	$('#polaire').click(function() {
		polaire = true;
		composantes = false;

		if ($('#com p').html() != '<!-- Inserer reponse -->')
			$('#com p').html('<b>norme de la résultante:</b><em> ' + resultante + '</em> <b><br> orientation:</b><em> ' + orientationDeg + '</em><b>° ou </b><em>' + orientationRad + '</em> rad').addClass('reponseEsthetique');
		else if ($('#mod p').html() != '<!-- Inserer reponse -->')	
			$('#mod p').html('<b>norme de la résultante:</b><em> ' + resultante + '</em> <b><br> orientation:</b><em> ' + orientationDeg + '</em><b>° ou </b><em>' + orientationRad + '</em> rad').addClass('reponseEsthetique');	
	});
	$('#composantes').click(function() {
		composantes = true;
		polaire = false;

		if ($('#com p').html() != '<!-- Inserer reponse -->')
			$('#com p').html('<b>com. x de la résultante:</b><em> ' + comX_total + '</em> <b><br> com. y de la résultante:</b><em> ' + comY_total + '</em>').addClass('reponseEsthetique');
		else if ($('#mod p').html() != '<!-- Inserer reponse -->')
			$('#mod p').html('<b>com. x de la résultante:</b><em> ' + comX_total + '</em> <b><br> com. y de la résultante:</b><em> ' + comY_total + '</em>').addClass('reponseEsthetique');
	});
	// enlever radians / deg lorsque dans l'onglet composantes
	$('#onglets').on('click', 'li:eq(1)', function() {
		$('.mode-selector').eq(0).hide();
		$('.mode-selector').eq(1).css('display', 'inline-block').removeClass('formatReponse').addClass('formatReponseCentre');
		$('#btn1, #btn2, #btn3').show();
	});
	// enlever les boutons lorsque dans l'onglet conversion
	$('#onglets').on('click', 'li:eq(2)', function() {
		$('.mode-selector').eq(0).hide();
		$('.mode-selector').eq(1).hide();
		$('#btn1, #btn2, #btn3, #alertPi').hide();
	});
	// ajouter radians / deg lorsque dans l'onglet module/ orientation
	$('#onglets').on('click', 'li:eq(0)', function() {
		$('.mode-selector').eq(1).css('display', 'inline-block').removeClass('formatReponseCentre').addClass('formatReponse');
		$('.mode-selector').eq(0).css('display', 'inline-block');
		$('#btn1, #btn2, #btn3').show();
	});
	$('#onglets').on('click', 'li:eq(3)', function() {
		$('.mode-selector:eq(0), .mode-selector:eq(1), #btn1, #btn2, #btn3, #alertPi').hide();
	});
	// enlever les boutons correspondants lorsque dans l'onglet vecteur unitaire
	$('#onglets').on('click', 'li:eq(4)', function() {
		$('.mode-selector:eq(0), .mode-selector:eq(1), #btn1, #btn2, #btn3, #alertPi').hide();
	});
	// changer la couleur des inputs lorsque focused ou blurred
	$('tbody').on('focus', 'input', function() {
		var background = $(this).css('background-color');

		if (background == 'rgb(255, 255, 255)')
			$(this).css('color', 'initial');
	});
	$('tbody').on('blur', 'input', function() {
		var background = $(this).css('background-color');

		if (background == 'rgb(255, 255, 255)')
			$(this).css('color', 'initial');
	})
	// reset le formulaire module/orientation et vider les arrays correspondants
	$('#resetInputs1').click(function() {
		$('#mod input').val('').css('background', '#ffffff');
		$(this).fadeOut(500);
		$('#mod p').html('<!-- Inserer reponse -->').removeClass('reponseEsthetique');

		modules = [];
		orientations = [];
	});
	// reset le formulaire composantes et vider les arrays correspondants
	$('#resetInputs2').click(function() {
		$('#com input').val('').css('background', '#ffffff');
		$(this).fadeOut(500);
		$('#com p').html('<!-- Inserer reponse -->').removeClass('reponseEsthetique');

		comX = [];
		comY = [];
	});
	// reset le formulaire produit et vider les arrays correspondants
	$('#resetInputs3').click(function() {
		
		if (scalaire == true)
		{
			$('#tableS input').val('').css('background', '#ffffff');
			$('#mul p:eq(1)').html('');
			$(this).fadeOut(500);
			changementS = false;

			scalairesU = [];
			scalairesV = [];
		}
		else if (vectoriel == true)
		{
			$('#tableV input').val('').css('background', '#ffffff');
			$('#mul p:eq(2)').html('');
			$(this).fadeOut(500);
			changementV = false;

			vectorielsU = [];
			vectorielsV = [];
		}
		else if (mixte == true)
		{
			$('#tableM input').val('').css('background', '#ffffff');
			$('#mul p:eq(3)').html('');
			$(this).fadeOut(500);
			changementM = false;

			mixtesU = [];
			mixtesV = [];
			mixtesW = [];
		}
	});
	// reset le tableau unitaire
	$('#resetInputs4').click(function() {
		
		$('#uni table input').val('').css('background', '#ffffff');
		$('#uni p:eq(1)').html('');
		$(this).fadeOut(500);

		unitaires = [];
		unitaires_resultat = [];
	});
	// evenement pour la validation d'inputs composantes
	$('#com').on('change', 'input', function() {
		$('#resetInputs2').show();

		var entree = this.value;
		entree = entree.replace(/,/, '.');
		var array = $(this).attr('id').slice(0,4);
		var index_array = parseInt($(this).attr('id')[4]);
		var count = 0;

		if (/^-?(\d+)\/(\d+)$/.test(entree))
		{
			if (parseFloat(entree) < 0)
				entree = -RegExp.$1 / RegExp.$2;
			else
				entree = RegExp.$1 / RegExp.$2;
		}

		if (!isNaN(entree) && isFinite(entree) && /^-?[0-9]+(\/)?[0-9.]*$/.test(entree)  && !/\.$/.test(entree))
		{
			switch(array) 
			{
				case "comX":
					comX[index_array] = parseFloat(entree);
					break;
				case "comY":
					comY[index_array] = parseFloat(entree);
					break;
			}

			$(this).css('background', '#ffffff');
		}
		else
		{
			switch(array) 
			{
				case "comX":
					comX[index_array] = undefined;
					break;
				case "comY":
					comY[index_array] = undefined;
					break;
			}

			$(this).css('background', 'rgba(233,18,29,0.9)').css('color', 'white');
		}

		for (var i = 0; i < nombre_vecteurs; i++)
		{
			if (comX[i] != undefined || comY[i] != undefined)
				count++;
		}

		if (count == 0 && entree == '')
			$('#resetInputs2').fadeOut(500);
	});
	// evenement pour la validation d'inputs module/orientation
	$('#mod').on('change', 'input', function() {
		$('#resetInputs1').show();

		var entree = this.value;
		entree = entree.replace(/,/, '.');
		var array = $(this).attr('id').slice(0,4);
		var index_array = parseInt($(this).attr('id')[4]);
		var negatif = 1;
		var count = 0;

		if (parseFloat(entree) < 0)
			negatif = -1;

		if (/^-?(\d+)\/(\d+)$/.test(entree))
			entree = negatif * RegExp.$1 / RegExp.$2;
		else if (/^-?(\d+)\*pi\/(\d+)$|^-?pi\*(\d+)\/(\d+)$/i.test(entree) && array == "orie" && rad == true)
		{
			if (RegExp.$4 == '' && RegExp.$3 == '' && RegExp.$2 != '' && RegExp.$1 != '')
				entree = negatif * RegExp.$1 * Math.PI / RegExp.$2;
			else if (RegExp.$4 != '' && RegExp.$3 != '' && RegExp.$2 == '' && RegExp.$1 == '')
				entree = negatif * RegExp.$3 * Math.PI / RegExp.$4;
		}
		else if (/^-?(\d*)\*pi$|^pi$/i.test(entree) && array == "orie" && rad == true)
		{
			if (RegExp.$1 == '')
				entree = negatif * Math.PI;
			else
				entree = negatif * RegExp.$1 * Math.PI;
		}

		if (!isNaN(entree) && isFinite(entree) && /^-?[0-9]+(\/)?[0-9.]*$/.test(entree)  && !/\.$/.test(entree))
		{
			switch(array) 
			{
				case "orie":
					orientations[index_array] = parseFloat(entree);
					break;
				case "modu":
					modules[index_array] = parseFloat(entree);
					break;
			}

			$(this).css('background', '#ffffff');
		}
		else
		{
			switch(array) 
			{
				case "orie":
					orientations[index_array] = undefined;
					break;
				case "modu":
					modules[index_array] = undefined;
					break;
			}

			$(this).css('background', 'rgba(233,18,29,0.9)').css('color', 'white');
		}

		for (var i = 0; i < nombre_vecteurs; i++)
		{
			if (modules[i] != undefined || orientations[i] != undefined)
				count++;
		}

		if (count == 0 && entree == '')
			$('#resetInputs1').fadeOut(500);
	});
	// faire les demarches lorsque la resultante est demandee
	$('#btn3').click(function() {
		var count = 0;

		if (modulesOnglet == true)
		{
			for (var i = 0; i < 7; i++)
			{
				if (modules[i] != undefined && orientations[i] != undefined)
					count++
			}
		}
		else if (composantesOnglet == true)
		{
			for (var i = 0; i < 7; i++)
			{
				if (comX[i] != undefined && comY[i] != undefined)
					count++;
			}
		}

		if (count >= 2)
		{
			comX_total = 0;
			comY_total = 0;
			resultante = 0;
			orientationRad = 0;
			orientationDeg = 0;
			comX_module = 0;
			comY_module = 0;

			if (composantesOnglet == true)
			{
				for (var i = 0; i < 7; i++)
				{
					if (comX[i] != undefined && comY[i] != undefined)
					{
						comX_total += comX[i];
						comY_total += comY[i];
					}
				}
			}
			else if (modulesOnglet == true)
			{
				for (var i = 0; i < 7; i++)
				{
					if (modules[i] != undefined && orientations[i] != undefined && deg == true)
					{
						orientations[i] *= Math.PI / 180;
					}

					if (modules[i] != undefined && orientations[i] != undefined)
					{
						comX_module = modules[i] * Math.cos(orientations[i]);
						comY_module = modules[i] * Math.sin(orientations[i]);

						comX_total += comX_module;
						comY_total += comY_module;
					}
				}
			}

			resultante = Math.sqrt(Math.pow(comX_total, 2) + Math.pow(comY_total, 2));

			if (/\.([0-9]+)$/.test(comX_total))
			{
				var nombre_decimales = RegExp.$1.toString().length;
				
				switch (nombre_decimales)
				{
					case 1:
						comX_total = comX_total.toFixed(1);
						break;
					case 2:
						comX_total = comX_total.toFixed(2);
						break;
					default:
						comX_total = comX_total.toFixed(3);
						break;
				}
			}

			if (/\.([0-9]+)$/.test(comY_total))
			{
				var nombre_decimales = RegExp.$1.toString().length;
				
				switch (nombre_decimales)
				{
					case 1:
						comY_total = comY_total.toFixed(1);
						break;
					case 2:
						comY_total = comY_total.toFixed(2);
						break;
					default:
						comY_total = comY_total.toFixed(3);
						break;
				}
			}

			if (/\.([0-9]+)$/.test(resultante))
			{
				var nombre_decimales = RegExp.$1.toString().length;
				
				switch (nombre_decimales)
				{
					case 1:
						resultante = resultante.toFixed(1);
						break;
					case 2:
						resultante = resultante.toFixed(2);
						break;
					default:
						resultante = resultante.toFixed(3);
						break;
				}
			}

			// approximation nombre extremement petit
			if (comX_total < approximation_zero && comX_total > -approximation_zero)
				comX_total = 0;
			if (comY_total < approximation_zero && comY_total > -approximation_zero)
				comY_total = 0;
			if (resultante < approximation_zero && resultante > -approximation_zero)
				resultante = 0;


			if (comX_total == 0 && comY_total > 0)
				orientationRad = Math.PI / 2;
			else if (comX_total == 0 && comY_total < 0)
				orientationRad = 3 * Math.PI / 2;
			else if (comX_total >= 0 && comY_total == 0)
				orientationRad = 0;
			else if (comX_total < 0 && comY_total == 0)
				orientationRad = Math.PI;
			else
				orientationRad = Math.atan(comY_total/comX_total);

			if (orientationRad < 0)
				orientationRad += (2 * Math.PI);

			orientationDeg = orientationRad / Math.PI * 180;

			if (/\.([0-9]+)$/.test(orientationRad))
			{
				var nombre_decimales = RegExp.$1.toString().length;
				
				switch (nombre_decimales)
				{
					case 1:
						orientationRad = orientationRad.toFixed(1);
						break;
					case 2:
						orientationRad = orientationRad.toFixed(2);
						break;
					default:
						orientationRad = orientationRad.toFixed(3);
						break;
				}
			}

			if (/\.([0-9]+)$/.test(orientationDeg))
			{
				var nombre_decimales = RegExp.$1.toString().length;
				
				switch (nombre_decimales)
				{
					case 1:
						orientationDeg = orientationDeg.toFixed(1);
						break;
					case 2:
						orientationDeg = orientationDeg.toFixed(2);
						break;
					default:
						orientationDeg = orientationDeg.toFixed(3);
						break;
				}
			}

			if (polaire == true && composantesOnglet == true)
				$('#com p').html('<b>norme de la résultante:</b><em> ' + resultante + '</em> <b><br> orientation:</b><em> ' + orientationDeg + '</em><b>° ou </b><em>' + orientationRad + '</em> rad').addClass('reponseEsthetique');
			else if (composantes == true && composantesOnglet == true)
				$('#com p').html('<b>com. x de la résultante:</b><em> ' + comX_total + '</em> <b><br> com. y de la résultante:</b><em> ' + comY_total + '</em>').addClass('reponseEsthetique');
			else if (polaire == true && modulesOnglet == true)
				$('#mod p').html('<b>norme de la résultante:</b><em> ' + resultante + '</em> <b><br> orientation:</b><em> ' + orientationDeg + '</em><b>° ou </b><em>' + orientationRad + '</em> rad').addClass('reponseEsthetique');
			else
				$('#mod p').html('<b>com. x de la résultante:</b><em> ' + comX_total + '</em> <b><br> com. y de la résultante:</b><em> ' + comY_total + '</em>').addClass('reponseEsthetique');
		}
		else
		{
			$(this).popover({
				container: 'body',
				content: 'Il y a une erreur dans vos entrées',
				placement: 'top',
			}).popover('show');

		    hidePopover('#btn3');
		}
	});
	// evenement pour la conversion des angles
	$('#angleConverti button').click(function() {
		var entree = $('#angleConverti input').eq(0).val();
		entree = entree.replace(/,/, '.');
		var negatif = 1;
		var conversion;
		var conversion_modulo = 'vide';

		if (parseFloat(entree) < 0)
			negatif = -1;

		if (radToDeg == false && degToRad == false)
		{
			$(this).popover({
				container: 'body',
				content: 'Il faut choisir un type de conversion',
				placement: 'bottom',
			}).popover('show');

		    hidePopover('#angleConverti button');
		}
		else if (degToRad == true)
		{
			if (/^-?(\d+)\/(\d+)$/.test(entree))
				entree = negatif * RegExp.$1 / RegExp.$2;

			if (!isNaN(entree) && isFinite(entree) && /^-?[0-9]+(\/)?[0-9.]*$/.test(entree)  && !/\.$/.test(entree))
			{
				conversion = entree * Math.PI / 180;

				if (conversion >= 2 * Math.PI || conversion <= -2 * Math.PI)
				{
					conversion_modulo = parseFloat(conversion % (2 * Math.PI));

					if (conversion_modulo < 0)
						conversion_modulo += 2 * Math.PI;
				}
				else if (conversion < 0)
					conversion += 2 * Math.PI;

				if (/\.([0-9]+)$/.test(conversion))
				{
					var nombre_decimales = RegExp.$1.toString().length;
					
					switch (nombre_decimales)
					{
						case 1:
							conversion = conversion.toFixed(1);
							break;
						case 2:
							conversion = conversion.toFixed(2);
							break;
						default:
							conversion = conversion.toFixed(3);
							break;
					}
				}

				if (/\.([0-9]+)$/.test(conversion_modulo))
				{
					var nombre_decimales = RegExp.$1.toString().length;
					
					switch (nombre_decimales)
					{
						case 1:
							conversion_modulo = conversion_modulo.toFixed(1);
							break;
						case 2:
							conversion_modulo = conversion_modulo.toFixed(2);
							break;
						default:
							conversion_modulo = conversion_modulo.toFixed(3);
							break;
					}
				}

				if (conversion_modulo < 0)
					conversion_modulo += (2 * Math.PI);

				if (conversion_modulo == 'vide')
					$('#reponseConversion').val(conversion + ' rad');
				else
					$('#reponseConversion').val(conversion + ' rad ou ' + conversion_modulo + ' rad')

				$('#angleConverti input').eq(0).css('background', '#ffffff').css('color', 'initial');
			}
			else
				$('#angleConverti input').eq(0).css('background', 'rgba(233,18,29,0.9)').css('color', 'white');
		}	
		else if (radToDeg == true)
		{
			if (/^-?(\d+)\/(\d+)$/.test(entree))
				entree = negatif * RegExp.$1 / RegExp.$2;
			else if (/^-?(\d+)\*pi\/(\d+)$|^-?pi\*(\d+)\/(\d+)$/i.test(entree))
			{
				if (RegExp.$4 == '' && RegExp.$3 == '' && RegExp.$2 != '' && RegExp.$1 != '')
					entree = negatif * RegExp.$1 * Math.PI / RegExp.$2;
				else if (RegExp.$4 != '' && RegExp.$3 != '' && RegExp.$2 == '' && RegExp.$1 == '')
					entree = negatif * RegExp.$3 * Math.PI / RegExp.$4;
			}
			else if (/^-?(\d*)\*pi$|^-?pi$/i.test(entree))
			{
				if (RegExp.$1 == '')
					entree = negatif * Math.PI;
				else
					entree = negatif * RegExp.$1 * Math.PI;
			}

			if (!isNaN(entree) && isFinite(entree) && /^-?[0-9]+(\/)?[0-9.]*$/.test(entree)  && !/\.$/.test(entree))
			{
				conversion = entree / Math.PI * 180;

				if (conversion >= 360 || conversion <= -360)
					conversion_modulo = parseFloat(conversion % 360);
				else if (conversion < 0)
					conversion += 360;

				if (/\.([0-9]+)$/.test(conversion))
				{
					var nombre_decimales = RegExp.$1.toString().length;
					
					switch (nombre_decimales)
					{
						case 1:
							conversion = conversion.toFixed(1);
							break;
						case 2:
							conversion = conversion.toFixed(2);
							break;
						default:
							conversion = conversion.toFixed(3);
							break;
					}
				}

				if (/\.([0-9]+)$/.test(conversion_modulo))
				{
					var nombre_decimales = RegExp.$1.toString().length;
					
					switch (nombre_decimales)
					{
						case 1:
							conversion_modulo = conversion_modulo.toFixed(1);
							break;
						case 2:
							conversion_modulo = conversion_modulo.toFixed(2);
							break;
						default:
							conversion_modulo = conversion_modulo.toFixed(3);
							break;
					}
				}

				if (conversion_modulo < 0)
					conversion_modulo += 360;

				if (conversion_modulo == 'vide')
					$('#reponseConversion').val(conversion + '°');
				else
					$('#reponseConversion').val(conversion + '° ou ' + conversion_modulo + '°')

				$('#angleConverti input').eq(0).css('background', '#ffffff').css('color', 'initial');
			}
			else
				$('#angleConverti input').eq(0).css('background', 'rgba(233,18,29,0.9)').css('color', 'white');
		}
	});
	// ajouter un placeholder dans l'onglet modules à une certaine largeur d'ecran
	$(window).resize(function() {
		var width = $(window).width();

		if (width <= 768)
		{
			for (var i = 0; i < nombre_vecteurs; i++)
			{
				if (rad == true)
				{
					$('#mod tbody tr:eq('+i+') td:eq(2) input').attr('placeholder', 'radians');
					$('#mod tbody tr:eq('+ i +') span:eq(1)').text('');
				}
				else if (deg == true)
				{
					$('#mod tbody tr:eq('+i+') td:eq(2) input').attr('placeholder', 'degrés');
					$('#mod tbody tr:eq('+ i +') span:eq(1)').text('');
				}
			}

		}
		else
		{
			$('#mod input').attr('placeholder', '');

			for (var i = 0; i < nombre_vecteurs; i++)
			{
				if (rad == true)
					$('#mod tbody tr:eq('+ i +') span:eq(1)').text(' rad');
				else if (deg == true)
					$('#mod tbody tr:eq('+ i +') span:eq(1)').text(' °');
			}
		}

		if(width <= 460 && mixte == true)
			$('#mul p:eq(0)').html('<span class="italic">u</span>, <span class="italic">v</span> et <span class="italic">w ∈ ℛ <sup>3</sup> | u · (v ∧ w) ∈ ℛ</span>');
		else if (mixte == true)
			$('#mul P:eq(0)').html('si <span class="italic">u = (u<sub>1</sub>, u<sub>2</sub>, u<sub>3</sub>)</span> , <span class="italic">v = (v<sub>1</sub>, v<sub>2</sub>, v<sub>3</sub>)</span> et <span>w = (w<sub>1</sub>, w<sub>2</sub>, w<sub>3</sub>) ∈ ℛ <sup>3</sup><br>u · (v ∧ w) = (u<sub>1</sub>(v<sub>2</sub>w<sub>3</sub> - v<sub>3</sub>w<sub>2</sub>) + u<sub>2</sub>(v<sub>3</sub>w<sub>1</sub> - v<sub>1</sub>w<sub>3</sub>) + u<sub>3</sub>(v<sub>1</sub>w<sub>2</sub> - v<sub>2</sub>w<sub>1</sub>))∈ ℛ</span>');
	});
	// validation des inputs scalaire
	$('#mul table').on('change', 'input', function() {
		$('#resetInputs3').show();

		var entree = this.value;
		entree = entree.replace(/,/, '.');
		var array = $(this).attr('id').slice(0,4);
		var index_array = parseInt($(this).attr('id')[4]);
		var count = 0;

		if (/^-?(\d+)\/(\d+)$/.test(entree))
		{
			if (parseFloat(entree) < 0)
				entree = -RegExp.$1 / RegExp.$2;
			else
				entree = RegExp.$1 / RegExp.$2;
		}

		if (!isNaN(entree) && isFinite(entree) && /^-?[0-9]+(\/)?[0-9.]*$/.test(entree)  && !/\.$/.test(entree))
		{
			switch(array) 
			{
				case "scau":
					scalairesU[index_array] = parseFloat(entree);
					break;
				case "scav":
					scalairesV[index_array] = parseFloat(entree);
					break;
				case "vecu":
					vectorielsU[index_array] = parseFloat(entree);
					break;
				case "vecv":
					vectorielsV[index_array] = parseFloat(entree);
					break;
				case "mixu":
					mixtesU[index_array] = parseFloat(entree);
					break;
				case "mixv":
					mixtesV[index_array] = parseFloat(entree);
					break;
				case "mixw":
					mixtesW[index_array] = parseFloat(entree);
					break;
			}

			$(this).css('background', '#ffffff');
		}
		else
		{
			switch(array) 
			{
				case "scau":
					scalairesU[index_array] = undefined;
					break;
				case "scav":
					scalairesV[index_array] = undefined;
					break;
				case "vecu":
					vectorielsU[index_array] = undefined;
					break;
				case "vecv":
					vectorielsV[index_array] = undefined;
					break;
				case "mixu":
					mixtesU[index_array] = undefined;
					break;
				case "mixv":
					mixtesV[index_array] = undefined;
					break;
				case "mixw":
					mixtesW[index_array] = undefined;
					break;
			}

			$(this).css('background', 'rgba(233,18,29,0.9)').css('color', 'white');
		}

		if (scalaire == true)
		{
			changementS = true;

			for (var i = 0; i < nombre_composantes; i++)
			{
				if (scalairesV[i] != undefined || scalairesU[i] != undefined)
					count++;
			}

			if (count == 0 && entree == '')
			{
				$('#resetInputs3').fadeOut(500);
				changementS = false;
			}
		}
		else if (vectoriel == true)
		{
			changementV = true;

			for (var i = 0; i < 3; i++)
			{
				if (vectorielsV[i] != undefined || vectorielsU[i] != undefined)
					count++;
			}

			if (count == 0 && entree == '')
			{
				$('#resetInputs3').fadeOut(500);
				changementV = false;
			}
		}
		else if (mixte == true)
		{
			changementM = true;

			for (var i = 0; i < 3; i++)
			{
				if (mixtesV[i] != undefined || mixtesU[i] != undefined || mixtesW[i] != undefined)
					count++;
			}

			if (count == 0 && entree == '')
			{
				$('#resetInputs3').fadeOut(500);
				changementM = false;
			}
		}
	});
	// validation des inputs unitaires
	$('#uni table').on('change', 'input', function() {
		$('#resetInputs4').show();

		var entree = this.value;
		entree = entree.replace(/,/, '.');
		var index_array = parseInt($(this).attr('id')[4]);
		var count = 0;

		if (/^-?(\d+)\/(\d+)$/.test(entree))
		{
			if (parseFloat(entree) < 0)
				entree = -RegExp.$1 / RegExp.$2;
			else
				entree = RegExp.$1 / RegExp.$2;
		}

		if (!isNaN(entree) && isFinite(entree) && /^-?[0-9]+(\/)?[0-9.]*$/.test(entree)  && !/\.$/.test(entree))
		{
			unitaires[index_array] = parseFloat(entree);

			$(this).css('background', '#ffffff');
		}
		else
		{
			unitaires[index_array] = undefined;

			$(this).css('background', 'rgba(233,18,29,0.9)').css('color', 'white');
		}

		for (var i = 0; i < nombre_composantes_unitaire; i++)
		{
			if (unitaires[i] != undefined)
				count++;
		}

		if (count == 0 && entree == '')
			$('#resetInputs4').fadeOut(500);
	});
	// faire les demarches lorsque le resultat est demande (vecteurs unitaires)
	$('#afficherResultat').click(function() {
		var count = 0;
		var norme = 0;

		for (var i = 0; i < nombre_composantes_unitaire; i++)
			{
				if (unitaires[i] != undefined)
				{
					count++;
					norme += Math.pow(unitaires[i], 2);
				}
			}

			if (count == nombre_composantes_unitaire)
			{
				norme = Math.sqrt(norme);

				for (var i = 0; i < nombre_composantes_unitaire; i++)
				{
					unitaires_resultat[i] = unitaires[i] / norme;

					if (/\.([0-9]+)$/.test(unitaires_resultat[i]))
					{
						var nombre_decimales = RegExp.$1.toString().length;
						
						switch (nombre_decimales)
						{
							case 1:
								unitaires_resultat[i] = unitaires_resultat[i].toFixed(1);
								break;
							case 2:
								unitaires_resultat[i] = unitaires_resultat[i].toFixed(2);
								break;
							case 3:
								unitaires_resultat[i] = unitaires_resultat[i].toFixed(3);
								break;
							default:
								unitaires_resultat[i] = unitaires_resultat[i].toFixed(4);
								break;
						}
					}
				}

				if (nombre_composantes_unitaire == 2)
					$('#uni p:eq(1)').html('<b>Le vecteur directeur unitaire est:</b> (' + unitaires_resultat[0] + ' , ' + unitaires_resultat[1] + ')');
				else if (nombre_composantes_unitaire == 3)
					$('#uni p:eq(1)').html('<b>Le vecteur directeur unitaire est:</b> (' + unitaires_resultat[0] + ' , ' + unitaires_resultat[1] + ' , ' + unitaires_resultat[2] + ')');
				else if (nombre_composantes_unitaire == 4)
					$('#uni p:eq(1)').html('<b>Le vecteur directeur unitaire est:</b> (' + unitaires_resultat[0] + ' , ' + unitaires_resultat[1] + ' , ' + unitaires_resultat[2] + ' , ' + unitaires_resultat[3] + ')');
				else
					$('#uni p:eq(1)').html('<b>Le vecteur directeur unitaire est:</b> (' + unitaires_resultat[0] + ' , ' + unitaires_resultat[1] + ' , ' + unitaires_resultat[2] + ' , ' + unitaires_resultat[3] + ' , ' + unitaires_resultat[4] + ')');
			}
			else
			{
				$(this).popover({
					container: 'body',
					content: 'Il y a une erreur dans vos entrées',
					placement: 'top',
				}).popover('show');

				hidePopover('#afficherResultat');

				$('#uni p:eq(1)').html('');
			}
	});
	// faire les demarches lorsque la resultante est demandee
	$('#afficherProduit').click(function() {
		var count = 0;
		var resultat = 0;
		var resultat = 0;
		var resultatX = resultatY = resultatZ = 0;

		if (scalaire == true)
		{
			for (var i = 0; i < nombre_composantes; i++)
			{
				if (scalairesV[i] != undefined && scalairesU[i] != undefined)
					count++;
			}

			if (count == nombre_composantes)
			{
				for (var i = 0; i < nombre_composantes; i++)
					resultat += scalairesU[i] * scalairesV[i];

				if (/\.([0-9]+)$/.test(resultat))
				{
					var nombre_decimales = RegExp.$1.toString().length;
					
					switch (nombre_decimales)
					{
						case 1:
							resultat = resultat.toFixed(1);
							break;
						case 2:
							resultat = resultat.toFixed(2);
							break;
						default:
							resultat = resultat.toFixed(3);
							break;
					}
				}

				$('#mul p:eq(1)').html('<b>Le produit scalaire donne:</b> ' + resultat);
			}
			else
			{
				$(this).popover({
					container: 'body',
					content: 'Il y a une erreur dans vos entrées',
					placement: 'top',
				}).popover('show');

				hidePopover('#afficherProduit');

				$('#mul p:eq(1)').html('');
			}

		}
		else if (vectoriel == true)
		{
			for (var i = 0; i < 3; i++)
			{
				if (vectorielsV[i] != undefined && vectorielsU[i] != undefined)
					count++;
			}

			if (count == 3)
			{
				resultatX = (vectorielsU[1] * vectorielsV[2]) - (vectorielsU[2] * vectorielsV[1]);
				resultatY = (vectorielsU[2] * vectorielsV[0]) - (vectorielsU[0] * vectorielsV[2]);
				resultatZ = (vectorielsU[0] * vectorielsV[1]) - (vectorielsU[1] * vectorielsV[0]);

				if (/\.([0-9]+)$/.test(resultatX))
				{
					var nombre_decimales = RegExp.$1.toString().length;
					
					switch (nombre_decimales)
					{
						case 1:
							resultatX = resultatX.toFixed(1);
							break;
						case 2:
							resultatX = resultatX.toFixed(2);
							break;
						default:
							resultatX = resultatX.toFixed(3);
							break;
					}
				}

				if (/\.([0-9]+)$/.test(resultatY))
				{
					var nombre_decimales = RegExp.$1.toString().length;
					
					switch (nombre_decimales)
					{
						case 1:
							resultatY = resultatY.toFixed(1);
							break;
						case 2:
							resultatY = resultatY.toFixed(2);
							break;
						default:
							resultatY = resultatY.toFixed(3);
							break;
					}
				}

				if (/\.([0-9]+)$/.test(resultatZ))
				{
					var nombre_decimales = RegExp.$1.toString().length;
					
					switch (nombre_decimales)
					{
						case 1:
							resultatZ = resultatZ.toFixed(1);
							break;
						case 2:
							resultatZ = resultatZ.toFixed(2);
							break;
						default:
							resultatZ = resultatZ.toFixed(3);
							break;
					}
				}

				$('#mul p:eq(2)').html('<b>Le produit vectoriel donne:</b> (' + resultatX + ' , ' + resultatY + ' , ' + resultatZ + ')');
			}
			else
			{
				$(this).popover({
					container: 'body',
					content: 'Il y a une erreur dans vos entrées',
					placement: 'top',
				}).popover('show');

				hidePopover('#afficherProduit');

				$('#mul p:eq(2)').html('');
			}
		}
		else if (mixte == true)
		{
			for (var i = 0; i < 3; i++)
			{
				if (mixtesV[i] != undefined && mixtesU[i] != undefined && mixtesW[i] != undefined)
					count++;
			}

			if (count == 3)
			{
				resultat = (mixtesU[0]*((mixtesV[1]*mixtesW[2]) - (mixtesV[2] * mixtesW[1]))) +  (mixtesU[1] *((mixtesV[2]*mixtesW[0]) - (mixtesV[0]*mixtesW[2]))) + (mixtesU[2]*((mixtesV[0]*mixtesW[1]) - (mixtesV[1]*mixtesW[0])));

				if (/\.([0-9]+)$/.test(resultat))
				{
					var nombre_decimales = RegExp.$1.toString().length;
					
					switch (nombre_decimales)
					{
						case 1:
							resultat = resultat.toFixed(1);
							break;
						case 2:
							resultat = resultat.toFixed(2);
							break;
						default:
							resultat = resultat.toFixed(3);
							break;
					}
				}

				$('#mul p:eq(3)').html('<b>Le produit mixte donne:</b> ' + resultat);
			}
			else
			{
				$(this).popover({
					container: 'body',
					content: 'Il y a une erreur dans vos entrées',
					placement: 'top',
				}).popover('show');

				hidePopover('#afficherProduit');

				$('#mul p:eq(3)').html('');
			}
		}
	});
	// enlever le background rouge lorsque input est vide
	$('input[type="text"]').blur(function() {
		if ($(this).val() == '')
			$(this).css('background', '#ffffff');
	});

	if ($(window).width() <= 768)
	{
		$('#mod tbody tr:eq(0) td:eq(2) input').attr('placeholder', 'degrés');
		$('#mod tbody tr:eq(1) td:eq(2) input').attr('placeholder', 'degrés');
	}

	$('body').on('change', 'input', function() {
		var entree = this.value;

		if(!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))
		{
			if (entree == 'triple' && triples < 3)
			{
				$('audio').get(0).play();
				triples++;
			}
			else if (entree == 'yeaaah' && yeahs < 3)
			{
				$('audio').get(1).play();
				yeahs++;
			}
			else if (triples < 5 && entree == 'triple') 
			{
				$('#grumpy').fadeIn(1000).delay(2000).fadeOut(1000);
				triples++;
			}
			else if (yeahs < 5 && entree == 'yeaaah')
			{
				$('#grumpy').fadeIn(1000).delay(2000).fadeOut(1000);
				yeahs++;
			}
			else if (triples < 7 && entree == 'triple')
			{
				$('#stopit').fadeIn(1000).delay(2000).fadeOut(1000);
				triples++;
			}
			else if (yeahs < 7 && entree == 'yeaaah')
			{
				$('#stopit').fadeIn(1000).delay(2000).fadeOut(1000);
				yeahs++;
			}
			else if (triples == 7 && entree == 'triple')
			{
				$('audio').get(0).play();
				triples++;
			}
			else if (yeahs == 7 && entree == 'yeaaah')
			{
				$('audio').get(1).play();
				yeahs++;
			}
			else if (triples < 11 && entree == 'triple')
			{
				$('#seriouslystop').fadeIn(1000).delay(2000).fadeOut(1000);
				triples++;
			}
			else if (yeahs < 11 && entree == 'yeaaah')
			{
				$('#seriouslystop').fadeIn(1000).delay(2000).fadeOut(1000);
				yeahs++;
			}
			else if (triples == 11 && entree == 'triple')
			{
				win=window.open("//www.youtube.com/embed/H07zYvkNYL8?rel=0&autoplay=1", '_blank');
  				win.focus();
				triples++;
			}
			else if (yeahs == 11 && entree == 'yeaaah')
			{
				win=window.open("//www.youtube.com/embed/H07zYvkNYL8?rel=0&autoplay=1", '_blank');
  				win.focus();
				yeahs++;
			}
		}
	});
});