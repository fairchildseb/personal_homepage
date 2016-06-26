!function  () {
	
	U.onclick({
		home : function(target){
		  
			U.AJAX('GET', '../../partials/home.html', function (err, xhr) {
				if(err){
		      console.log(err);
		      return false;
		    } else {
		    	U.selectElement('body')
		    		.html(xhr.response);
		    }
			});

		  return true;
		},
		about : function(target) {
		  
		  U.AJAX('GET', '../../partials/about.html', function(err, xhr){
		    
		    if(err){
		      console.log(err);
		      return false;
		    } else {

		        U.selectElement('.left-column')
		          .html(xhr.response);
		        U.selectElement('.background')
		          .css({
		            background : 'white'
		          });
		        U.selectElement('.frame')
		          .css({
		            border : '10px solid black'
		          });
		        U.selectElement('.fa')
		          .css({
		            color : 'black'
		          });
		        U.selectElement('.headline h1')
		        	.css({
		        		color : 'black'
		        	});
		        U.selectElement('.headline .underline')
		        	.css({
		        		background : 'black'
		        	});

		        return true;
		    }
		  });
		},

		resume : function (target){
		 
		  U.AJAX('GET', '../../partials/resume.html', function(err, xhr){
		    
		    if(err){
		      console.log(err);
		      return false;
		    } else {
		      

		      U.selectElement('.left-column')
		          .html(xhr.response);
		        U.selectElement('.background')
		          .css({
		            background : 'white'
		          });
		        U.selectElement('.frame')
		          .css({
		            border : '10px solid black'
		          });
		        U.selectElement('.fa')
		          .css({
		            color : 'black'
		          });
		       	U.selectElement('.headline h1')
		        	.css({
		        		color : 'black'
		        	});
		        U.selectElement('.headline .underline')
		        	.css({
		        		background : 'black'
		        	});

		    }

		  });

		  return true
		},
		contact : function(target){
			
			U.AJAX('GET', '../../partials/contact.html', function(err, xhr){
				
				if(err){
					console.log(err);
					return false;
				} else {
					U.selectElement('.left-column')
						.html(xhr.response);
		        U.selectElement('.background')
		          .css({
		            background : 'white'
		          });
		        U.selectElement('.frame')
		          .css({
		            border : '10px solid black'
		          });
		        U.selectElement('.fa')
		          .css({
		            color : 'black'
		          });
		        U.selectElement('.headline h1')
		        	.css({
		        		color : 'black'
		        	});
		        U.selectElement('.headline .underline')
		        	.css({
		        		background : 'black'
		        	});

				}

			});

			return true;
		},

		music : function(target) {

			U.AJAX('GET', '../../partials/music.html', function(err, xhr){
				
				if(err){
					console.log(err);
					return false;
				} else {
					U.selectElement('.left-column')
						.html(xhr.response);
	        U.selectElement('.background')
	          .css({
	            background : 'white'
	          });
	        U.selectElement('.frame')
	          .css({
	            border : '10px solid black'
	          });
	        U.selectElement('.fa')
	          .css({
	            color : 'black'
	          });
	        U.selectElement('.headline h1')
	        	.css({
	        		color : 'black'
	        	});
	        U.selectElement('.headline .underline')
	        	.css({
	        		background : 'black'
	        	});

				}

			});

			return true;
		}

	});

}();