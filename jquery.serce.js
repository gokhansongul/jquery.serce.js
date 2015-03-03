(function( $ ) {

    $.fn.serce = function(cfg) {

        cfg = cfg || {};

        var mode,
            index,
            length,
            limits,
            offsetX,
            images,
            imgSelector = cfg.imgSelector || 'img';

        var mouseMove = function(e){

            offsetX = e.offsetX;

            for(var i = 0, ii = limits.length; i < ii; i++){
                if(offsetX <= limits[i]) {
                    index = i;
                    break;
                }
                else if(offsetX > limits[i] && offsetX <= limits[i+1]){
                    index = i + 1;
                    break;
                }
            }

            var $this = $(this);

            $this.attr('src', images[index]);
            var $serceWrapper = $this.parent().find(".serce-wrapper");
            if ($serceWrapper.length) {
                var $serceNavItem = $serceWrapper.find(".serce-nav-item");
                $serceNavItem.removeClass("on").eq(index).addClass("on");
            }

        };
        var mouseLeave = function(e){
            var $img = $(this).find('img');
            var defaultImageSrc = $img.data('images') && $img.data('images').split(',')[0] ? $img.data('images').split(',')[0] : null;
            $(this).find('.serce-wrapper').remove();
            if(defaultImageSrc){
                $img.attr('src', $img.data('images').split(',')[0])
            }
        };

        this.each(function() {
            var limit,
                $this = $(this);

            $this.hover(function(){
                var $img = $this.find(imgSelector);
                images = $img.data("images") ? $img.data("images").split(",") : [];
                length = images.length;
                if(length > 1){
                    mode = $img.width() / length;
                    var thumbsMarkup = '';
                    var serceNavItem = '<a class="serce-nav-item"></a>';
                    var $serceWrapper = $('<div class="serce-wrapper"></div>');

                    limits = [];
                    for(var i = 1; i <= length; i++){
                        limit = mode * i;
                        limits.push(limit);
                        thumbsMarkup += serceNavItem;
                    }

                    $this.find(".serce-wrapper").remove();
                    $serceWrapper.insertAfter($img);
                    $(thumbsMarkup).appendTo($serceWrapper);
                    $serceWrapper.find(".serce-nav-item").first().addClass("on");
                    $img.bind("mousemove", mouseMove);
                }
            }, mouseLeave);

        });

        return this;

    };

}( jQuery ));






