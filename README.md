# jQuery GitHub Repository Search #

### Introduction ###

This is a simple wrapper of GitHub Repository Search API made in jQuery.

### How to use it ###

It's simple as it should be. Append this piece of HTML wherever you want

	<div id="github-jquery"></div>

name is completely arbitrary, it is important to keep that name also on your jQuery call, which would be

	jQuery(function($){
			$('#github-jquery').githubreposearch({
			'q': Your Search String,
			'sort' : 'stars',
			'order' : 'desc',
			'callback':function(json){
				// Your callback logic here
			}
		});
	});

and of course this is only an example of usage :)

### Options ###

For additional information in using the GitHub search API can be found here: [https://developer.github.com/v3/search/#search-repositories](https://developer.github.com/v3/search/#search-repositories)

### License ###

This plugin is licensed as MIT and you can read it in the file "LICENSE" attached with this plugin.
