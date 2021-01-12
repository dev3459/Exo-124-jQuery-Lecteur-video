// FIXME Assurez vous que ces deux variables contiennent bien les bonnes choses ;-)

//Recovery of items
let play = $('.player__button').first();
let prec = $('.player__button')[1];
let next = $('.player__button')[2];
let progress = $('#playbackRate').first();
let active = false;
let player = $('video');

//Function play
$(play).click(function(){
    active ? active = false : active = true;

    if(active){
        $(player)[0].play();
        $(play).text('||');
    }else{
        $(player)[0].pause();
        $(play).text('►');
    }
});

//Function progress bar
$(player).each(function(){
    $(player)[0].ontimeupdate = function(){
        let duree = $(player)[0].duration;
        let largeur_barre = $(progress).width();
        let point_lecture = $(player)[0].currentTime;
        let largeur_progress = point_lecture * largeur_barre / duree;
        $(progress).val(largeur_progress);
    }
});


//Function previous speed video
$(prec).click(function(){
    $(player)[0].currentTime -= 10;
});

//Function next speed video
$(next).click(function(){
    $(player)[0].currentTime += 10;
});

