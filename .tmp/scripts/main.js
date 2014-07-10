(function(){
  console.log('hello', 'livescript');
  $('.submit').click(function(){
    var targetUrl, msg, pageId, graphUrl;
    targetUrl = $('input[name=t-url]').val();
    msg = $('textarea[name=msg]').val();
    pageId = targetUrl.substring(targetUrl.lastIndexOf('/'));
    graphUrl = "https://graph.facebook.com" + pageId;
    return $.ajax({
      url: graphUrl,
      success: function(data){
        return console.log(msg + data.id);
      }
    });
  });
}).call(this);
