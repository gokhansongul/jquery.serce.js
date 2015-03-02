Serce Image Slider Plugin for jQuery
==============================
Overview
--------
This is a slider plugin for the jQuery javascript library. It allows user to slide images on image mouseover.

### Usage
First, include the jQuery and serce javascript files.

```html
<script src="jquery.js" type="text/javascript"></script>
<script src="jquery.serce.js" type="text/javascript"></script>
```

Next, add data-images attribute to img elements.

```html
    <div class="box">
        <img class="serce" src="http://lorempixel.com/output/animals-h-c-270-320-8.jpg" data-images="http://lorempixel.com/output/animals-h-c-270-320-8.jpg, http://lorempixel.com/output/city-h-c-270-320-9.jpg, http://lorempixel.com/output/technics-h-c-270-320-6.jpg, http://lorempixel.com/output/technics-h-c-270-320-9.jpg" alt="serce dummy image"/>
    </div>

    <div class="box">
        <img class="serce" src="http://lorempixel.com/output/animals-h-c-270-320-8.jpg" data-images="http://lorempixel.com/output/animals-h-c-270-320-8.jpg, http://lorempixel.com/output/city-h-c-270-320-9.jpg, http://lorempixel.com/output/technics-h-c-270-320-6.jpg" alt="serce dummy image"/>
    </div>

    <div class="box">
        <img class="serce" src="http://lorempixel.com/output/animals-h-c-270-320-8.jpg" data-images="http://lorempixel.com/output/animals-h-c-270-320-8.jpg, http://lorempixel.com/output/city-h-c-270-320-9.jpg" alt="serce dummy image"/>
    </div>
```

Next, call the serce function for those items you wish to have slided.

```html

jQuery(function($){
   $(".box").serce();
});
```

Optionally, you can pass the image selector.

```html
jQuery(function($){
   $(".box").serce({imgSelector: 'serce'});
});
```
