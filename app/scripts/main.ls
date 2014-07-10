console.log \hello \livescript
$ \.submit .click ->
  targetUrl = $ 'input[name=t-url]' .val!
  msg = $ 'textarea[name=msg]' .val!
  pageId = targetUrl.substring(targetUrl.lastIndexOf('/'))
  graphUrl = "https://graph.facebook.com#{pageId}"

  $.ajax(
    url: graphUrl
    success: (data) ->
      console.log msg+data.id
  )
