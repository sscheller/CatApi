//Cat API

var getStuff = 'https://api.thecatapi.com/v1/images/search';

var setStuff = {};

var doStuff = function(data){
  
 showStuff (data);
  
};

$.getJSON( getStuff, setStuff, doStuff);

var showStuff = function(data) {console.log(data[0].url);
                                
                                $('img').attr( 'src' , data[0].url  );
                                
       }



       function changeImage() {
        var src = "https://api.thecatapi.com/v1/images/search";
        $.getJSON(src, function(result){
            $('body').css('img', 'url('+randomPhoto+')');
    
        });
    }; 