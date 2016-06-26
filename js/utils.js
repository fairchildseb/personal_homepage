!function  () {

	var Utils;

	Utils = function() {

    var __init__, execute_click, noOp, AJAX, selectElement, hide, show;

    hide = function(target) {
    	target.setAttribute('hidden', true);
    };

    show = function(target) {
      target.removeAttribute('hidden', false);
    };

    selectElement = function(selector){

      // selector is a dom element id

      var collection;

      collection = [].slice.call(document.querySelectorAll(selector));

      if(!collection.length){
        throw new Error("Cannot find dom element: " + selector);
        return false;
      } else {

        collection.html = function(htmlString){
          
          var _self;
          _self = this;

          _self.forEach(function(node, index){
            node.innerHTML = htmlString;
          });
          return _self;

        };
        
        collection.css = function(css){
          
          var _self, applyStyles;
          _self = this;

          applyStyles = function (node, styles){
            for (attr in styles){
              node.style[attr] = styles[attr];
            }
          };

          _self.forEach(function(node, index){
            applyStyles(node, css);
          });

          return _self;

        };


      }

      return collection;

    };

    AJAX = function (httpMethod, url, callback) {
      
      var xhr;

      xhr = new XMLHttpRequest();
      xhr.open(httpMethod, url, true);
      xhr.send();

      xhr.onreadystatechange = function(){
        if(xhr.readyState === 4){
          callback(null, xhr);
        }
      };

      xhr.onerror = function() {
        callback(xhr);
      };

    }

    noOp = function() {
      return false;
    };

    execute_click = function(target){


      // selector = DOM Elem {}

      var id, method;

      id = target.id;

      method = {
        home : function(target){
          
					AJAX('GET', '../home.html', function (err, xhr) {
						if(err){
              console.log(err);
              return false;
            } else {
            	selectElement('body')
            		.html(xhr.response);
            }
					});

          return true;
        },
        about : function(target) {
          
          AJAX('GET', '../about.html', function(err, xhr){
            
            if(err){
              console.log(err);
              return false;
            } else {

                // styles
                selectElement('.left-column')
                  .html(xhr.response);
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
                selectElement('.headline h1')
                	.css({
                		color : 'black'
                	});
                selectElement('.headline .underline')
                	.css({
                		background : 'black'
                	});

                // menu
                return true;
            }
          });
        },

        resume : function (target){
         
          AJAX('GET', '../resume.html', function(err, xhr){
            
            if(err){
              console.log(err);
              return false;
            } else {
              
              // styles
              selectElement('.left-column')
                  .html(xhr.response);
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
               	selectElement('.headline h1')
                	.css({
                		color : 'black'
                	});
                selectElement('.headline .underline')
                	.css({
                		background : 'black'
                	});

            }

          });

          return true
        },
        contact : function(target){
        	
        	AJAX('GET', '../contact.html', function(err, xhr){
        		
        		if(err){
        			console.log(err);
        			return false;
        		} else {
        			selectElement('.left-column')
        				.html(xhr.response);
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
                selectElement('.headline h1')
                	.css({
                		color : 'black'
                	});
                selectElement('.headline .underline')
                	.css({
                		background : 'black'
                	});

        		}

        	});

        	return true;
        },

        music : function(target) {

        	AJAX('GET', '../music.html', function(err, xhr){
        		
        		if(err){
        			console.log(err);
        			return false;
        		} else {
        			selectElement('.left-column')
        				.html(xhr.response);
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
                selectElement('.headline h1')
                	.css({
                		color : 'black'
                	});
                selectElement('.headline .underline')
                	.css({
                		background : 'black'
                	});

        		}

        	});

        	return true;
        }


      };  // end methods {}

      method.hasOwnProperty(id) ? method[target.id](target) : noOp();

    };  // end

		// on page load
  	document.onreadystatechange = function () {
		  if (document.readyState === "complete") {
		    __init__();
		  }
		};

		__init__ = function() {

    	document.addEventListener('click', function (E){
    		console.log(E.target, E.target.id);
        E.target.id ? execute_click(E.target) : noOp();
      });

    	AJAX('GET', '../home.html', function (err, xhr) {
				if(err){
          console.log(err);
          return false;
        } else {
        	selectElement('body')
        		.html(xhr.response);
        }
			});


		};

		return {
	      noOp : noOp,
	      selectElement : selectElement,
	      AJAX : AJAX,
	      execute_click : execute_click
		};
	};

  window.Utils = Utils();

}();