/*
	jQuery Git Hub Keyword Search
	
	This plugin is a simple jQuery wrap of GitHub Keyword Search API.
	See https://developer.github.com/v3/search/#search-repositories for more detailed instructions.
	
	Author: Karl Newell
	Date: 01/17/2015
	Changelog:
		- 0.1: initial relase version.
*/
var GitHubRepoSearch;
(function($){
	GitHubRepoSearch = function(options){
		var placeholder = $(this);
		var settings = $(this).data('githubreposearchsettings');
		// If settings are not declared, we set the default value for them
		if(!settings){
			settings = {
				'q':'',
				'sort':'',
				'order':'',
				'callback':function(data){}
			}
		};
		// Private methods - can only be called from within this object
		var IntFunc = {
		};
		
		if(typeof(options)=='string'){
			if(IntFunc[options])IntFunc[options].apply(null,Array.prototype.slice.call(arguments,1));
		}else if(options){
			settings = $.extend(settings,options||{});
			$(this).data('githubreposearchsettings',settings);
			
			var pars = $.extend({},settings);
			delete pars['callback'];
			$.getJSON('https://api.github.com/search/repositories?',pars,function(data){
				settings.callback(data)
			});
		}
	};
	$.fn.extend({
		githubreposearch:function(){
			var args = arguments;
			this.each(function(){GitHubRepoSearch.apply(this,args)});
		}
	});
})(jQuery);