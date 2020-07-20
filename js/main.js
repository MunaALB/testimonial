$(document).ready(function () {
    var json = {
        'testimonial': [{
                'img': 'images/image-tanya.jpg',
                'description': ' Ive been interested in coding for a while <br>but never taken the jump, until now.I <br>couldnt recommend this course enough.<br>Im now in the job of my dreams and so <br> excited about the future.',
                'signature': 'Tanya Sinclair',
                'position': 'UX Engineer'

            },
            {
                'img': 'images/image-john.jpg',
                'description': 'If you want to lay the best foundation </br> possible i would recommend taking this </br> course the depth the instructor go into </br> is incredible. I now feel so confident about </br> starting up as a professional developer ',
                'signature': 'John Tarkpor',
                'position': 'Junior Front-end Developer'

            }
        ]
    }
    var slider = '';
    $.each(json.testimonial, function (key, val) {
        slider += ' <div class="first row one' + key + '">'
        slider += '<div class="testimonial-text col-lg-6 "> <img class = "qoutes" src = "images/pattern-quotes.svg">'
        slider += '<p  class = "text" >' + val.description + '</p>'
        slider += '<p class = "signature">' + val.signature + ' <span class = "position">' + val.position + ' </span></p> </div>'
        slider += '<div class="testimonial-pic col-lg-6">  <img class="person-pic" src="' + val.img + ' "> <img class="pattern-pic" src="images/pattern-bg.svg">'
        slider += ' <div class="slider-controls"> <button class="prev"><img src="images/icon-prev.svg"></button>  <button class="next"><img src="images/icon-next.svg"></button> '
        slider += '</div> </div>  </div>'


    });
    $('.container').append(slider);

    $('.next').on('click', function () {
        $('.one1').css({
            'display': 'block',
            'animation': 'fade 1.5s'

        })
        $('.one0').css({
            'display': 'none',


        })
    })
    $('.prev').on('click', function () {
        $('.one0').css({
            'display': 'block',
            'animation': 'fade 1.5s'

        })
        $('.one1').css({
            'display': 'none',

        })

    })
});