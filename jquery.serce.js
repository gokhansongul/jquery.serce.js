(function( $ ) {

    $.fn.serce = function(cfg) {

        cfg = cfg || {};

        var mode,
            index,
            length,
            limits,
            offsetX,
            images,
            imgSelector = cfg.imgSelector || 'img',
            noImagePath = cfg.noImagePath || "",
            $wrapEl = $(this);

        var mouseMove = function(e){

            offsetX = e.offsetX ? e.offsetX : e.pageX - $(this).offset().left;

            for(var i = 0, ii = limits.length; i < ii; i++){
                if(offsetX <= limits[i]) {
                    if(index == i){
                        return;
                    }
                    index = i;
                    break;
                }
                else if(offsetX > limits[i] && offsetX <= limits[i+1]){
                    if(index == i + 1){
                        return;
                    }
                    index = i + 1;
                    break;
                }
            }
            var $this = $(this);
            var newImg = new Image();

            var loadFn = function(){ $this.attr('src', images[index]);};

            newImg.onerror= function(){};

            newImg.onload = loadFn;
            newImg.src = images[index];
            if(newImg.complete){
                newImg.complete = loadFn;
            }

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

        var buildNavItems = function($img){
            var limit;
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

            $wrapEl.find(".serce-wrapper").remove();
            $serceWrapper.insertAfter($img);
            $(thumbsMarkup).appendTo($serceWrapper);
            $serceWrapper.find(".serce-nav-item").first().addClass("on");
        };

        this.each(function() {
            var $this = $(this);
            var $img = $this.find(imgSelector);

            $this.hover(function(){
                images = $img.data("images") ? $img.data("images").split(",") : [];
                length = images.length;
                if(length > 1){
                    buildNavItems($img);
                    $img.bind("mousemove", mouseMove);
                }
            }, mouseLeave);

        });

        return this;

    };

}( jQuery ));
