//Turns HTML Blockquote into a Tweet
var $blockquote = $('blockquote'),
     $location = $(location);

 $blockquote.find('p').wrap(function() {
   var $this = $(this),
       tweet = $.trim($this.text()).substring(0, 140).split(" ").slice(0).join(" "),
       handle = 'naifahbg',
       url = $location.attr('href');
   return '<a class="tweetable" href="https://twitter.com/intent/tweet?text='
     + tweet + '%20' + encodeURI(url) + '%20via%20&#64;'
     + handle + '" onclick="window.open(this.href, \'twitter-share\', \'width=550,height=235\');return false;"></div>';
 });
