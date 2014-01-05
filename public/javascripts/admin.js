
function show_blog_topic_field() {
	$('#blog_post_topic_field').show('slow');
}

function save_blog_topic() {
	topic = $('#blog_post_topic_entry').val();
	
	$.ajax({
	  url: '/blog_post_topics/ajax_save',
	  data: 'blog_post_topic=' + topic,
	  success: blog_topic_saved
	});
}

// Handle the async response from blog topic save
function blog_topic_saved(response) {
	$.ajax({
	  url: '/blog_post_topics/fetch_topic_list',
	  data: 'blog_post_id=' + blog_post_id,
	  success: function(data) {
		$('#blog_post_topic_list').replaceWith(data);
		}
	});
}

function submit_test_query(method, query) {
	var method = method;
	var query = query;
	$.ajax({
	   type: method,
	   url: query,
	   success: query_success,
	   error: query_error
	 });
}

function query_success(data) {
	$('#api_test_data').val(data);
}

function query_error(data) {
	alert('An Error Occurred');
}
	 
