$(document).ready(function(){
    
    var $transition = $('#transition,'), // on cible le bloc du carrousel
        $Etapes = $('.Etapes'), // on cible les images contenues dans le carrousel
        indexEtapes = $Etapes.length - 1, // on définit l'index du dernier élément
        i = 0, // on initialise un compteur
        $currentEtapes = $Etapes.eq(i); // enfin, on cible l'image courante, qui possède l'index i (0 pour l'instant)
    
    $etapes.css('display', 'none'); // on cache les images
    $currentEtapes.css('display', 'block'); // on affiche seulement l'image courante
    
    $transition.append('<div class="controls"> <span class="prev">Precedent</span> <span class="next">Suivant</span> </div>');
    
    $('.next').click(function(){ // image suivante
    
        i++; // on incrémente le compteur
    
        if( i <= indexEtapes ){
            $Etapes.css('display', 'none'); // on cache les images
            $currentEtapes = $Etapes.eq(i); // on définit la nouvelle image
            $currentEtapes.css('display', 'block'); // puis on l'affiche
        }
        else{
            i = indexEtapes;
        }
    
    });
    
    $('.prev').click(function(){ // image précédente
    
        i--; // on décrémente le compteur, puis on réalise la même chose que pour la fonction "suivante"
    
        if( i >= 0 ){
            $Etapes.css('display', 'none');
            $currentEtapes = $img.eq(i);
            $currentEtapes.css('display', 'block');
        }
        else{
            i = 0;
        }
    
    });
    
    function slideEtapes(){
        setTimeout(function(){ // on utilise une fonction anonyme
                            
            if(i < indexEtapes){ // si le compteur est inférieur au dernier index
            i++; // on l'incrémente
        }
        else{ // sinon, on le remet à 0 (première image)
            i = 0;
        }
    
        $Etapes.css('display', 'none');
    
        $currentEtapes = $img.eq(i);
        $currentEtapes.css('display', 'block');
    
        slideEtapes(); // on oublie pas de relancer la fonction à la fin
    
   
    }
    
    slideEtapes(); // enfin, on lance la fonction une première fois
    
    });
    