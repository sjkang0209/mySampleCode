var Templates = {};

Templates.overlay = [
    '<div class="overlay">',
        /* contact */
        '<div class="contact-container">',
           '<div class="form-container">',
               '<form class="contact-form" action="send-mail.php" method="post">',
                    '<h2>CONTACT</h2>',
                    '<p class="status"></p>',
                    '<div class="clearfix">',
                        '<label>Name</label>',
                        '<input type="text" id="name" name="name" placeholder="Name">',
                    '</div>',
                    '<div class="clearfix">',
                        '<label>Email</label>',
                        '<input type="text" id="email" name="email" placeholder="Email">',
                    '</div>',
                    '<div class="clearfix">',
                        '<label>Message</label>',
                        '<textarea id="message" name="message" placeholder="Message"></textarea>',
                    '</div>',      
                    '<div class="button-container">', 
                        '<div class="cancel">Cancel</div>',  
                        '<button type="submit">Submit</button>',    
                    '</div>',
                '</form>',
            '<div>',   
        '<div>',
    '</div>'
].join('\n');


function compileTemplates(){
	for(template in Templates){
		Templates[template] = Handlebars.compile(Templates[template]);
	}
}
compileTemplates();
