!function () {
	var Utils, execute_click;

	Utils = window.Utils;


    execute_click = function(target){

      // selector = DOM Elem {}

      var id, method;

      id = target.id;

      method = {
        home : function(target){
          

          toggle_nav(target);
          return true;
        },
        resume : function(target) {
          
          AJAX('GET', '../resume.html', function(err, xhr){
            
            if(err){
              console.log(err);
              return false;
            } else {

                // styles
                selectElement('.frame')
                  .html(xhr.response)
                  .css({
                    display : 'block'
                  });
                selectElement('.background')
                  .css({
                    background : 'white'
                  });
                selectElement('.frame')
                  .css({
                    border : '10px solid black'
                  });
                selectElement('.fa')
                  .css({
                    color : 'black'
                  });


                // menu
                toggle_nav(target);
                return true;
            }
          });
        },

        portfolio : function (target){
         
          AJAX('GET', '../portfolio.html', function(err, xhr){
            
             if(err){
              console.log(err);
              return false;
            } else {
              
              // styles
              selectElement('.frame')
                  .html(xhr.response)
                  .css({
                    display : 'block'
                  });
                selectElement('.background')
                  .css({
                    background : 'white'
                  });
                selectElement('.frame')
                  .css({
                    border : '10px solid black'
                  });
                selectElement('.fa')
                  .css({
                    color : 'black'
                  });

                // menu
                toggle_nav(target);
            }
          });
        }


      };  // end methods {}

      method.hasOwnProperty(id) ? method[target.id](target) : noOp();

    };  // end
}();