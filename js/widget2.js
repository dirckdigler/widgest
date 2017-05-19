$(document).ready(function() {

	/* Funcionality for print data json on the charts*/
	var jsonObject = JSON.parse(transfer); 
	$.each(jsonObject, function (key, data) { 
		window.onload =function() { 
			$("#chart-container").CanvasJSChart({ 
			  title: { 
			    text: "DATA TRANSFER" 
			  }, 
			  data: [ 
			  { 
			    type: "doughnut", 
			    indexLabel: "{label}: {y}%",
			    toolTipContent: "{label}: {y}%",
			    dataPoints: [ 
			      { label: "Audio",       y: data.audio}, 
			      { label: "Video",        y: data.video}, 
			      { label: "Foto",y: data.photo}, 
			      { label: "Disponible",y: data.available} 
			    ] 
			  } 
			  ] 
			}); 
		} 

		if($("#tabs").length) {
			$(function() {
	    		$("#tabs").tabs();
    			$('#tabs-1').find('.audio').append('<span>'+data.audio+'%'+'</span>');	
				$('#tabs-1').find('.video').append('<span>'+data.video+'%'+'</span>');	
				$('#tabs-1').find('.photo').append('<span>'+data.photo+'%'+'</span>');
	  		});
	  	};
	});

	/* Funcionality to file upload*/
	$(function () {
	    var url = window.location.hostname === 'blueimp.github.io' ?
	                '//jquery-file-upload.appspot.com/' : 'server/php/',
	        uploadButton = $('<button/>')
	            .addClass('btn btn-primary')
	            .prop('disabled', true)
	            .text('Processing...')
	            .on('click', function () {
	                var $this = $(this),
	                    data = $this.data();
	                $this
	                    .off('click')
	                    .text('Abort')
	                    .on('click', function () {
	                        $this.remove();
	                        data.abort();
	                    });
	                data.submit().always(function () {
	                    $this.remove();
	                });
	            });
	    $('#fileupload').fileupload({
	        url: url,
	        dataType: 'json',
	        autoUpload: false,
	        acceptFileTypes: /(\.|\/)(gif|jpe?g|png)$/i,
	        maxFileSize: 999000,
	        disableImageResize: /Android(?!.*Chrome)|Opera/
	            .test(window.navigator.userAgent),
	        previewMaxWidth: 100,
	        previewMaxHeight: 100,
	        previewCrop: true
	    }).on('fileuploadadd', function (e, data) {
	        data.context = $('<div/>').appendTo('#files');
	        $.each(data.files, function (index, file) {
	            var node = $('<p/>')
	                    .append($('<span/>').text(file.name));
	            if (!index) {
	                node
	                    .append('<br>')
	                    .append(uploadButton.clone(true).data(data));
	            }
	            node.appendTo(data.context);
	        });
	    }).on('fileuploadprocessalways', function (e, data) {
	        var index = data.index,
	            file = data.files[index],
	            node = $(data.context.children()[index]);
	        if (file.preview) {
	            node
	                .prepend('<br>')
	                .prepend(file.preview);
	        }
	        if (file.error) {
	            node
	                .append('<br>')
	                .append($('<span class="text-danger"/>').text(file.error));
	        }
	        if (index + 1 === data.files.length) {
	            data.context.find('button')
	                .text('Upload')
	                .prop('disabled', !!data.files.error);
	        }
	    }).on('fileuploadprogressall', function (e, data) {
	        var progress = parseInt(data.loaded / data.total * 100, 10);
	        $('#progress .progress-bar').css(
	            'width',
	            progress + '%'
	        );
	    }).on('fileuploaddone', function (e, data) {
	        $.each(data.result.files, function (index, file) {
	            if (file.url) {
	                var link = $('<a>')
	                    .attr('target', '_blank')
	                    .prop('href', file.url);
	                $(data.context.children()[index])
	                    .wrap(link);
	            } else if (file.error) {
	                var error = $('<span class="text-danger"/>').text(file.error);
	                $(data.context.children()[index])
	                    .append('<br>')
	                    .append(error);
	            }
	        });
	    }).on('fileuploadfail', function (e, data) {
	        $.each(data.files, function (index) {
	            var error = $('<span class="text-danger"/>').text('Your file has been successfully uploaded, save changes!');
	            $(data.context.children()[index])
	                .append('<br>')
	                .append(error);
	        });
	    }).prop('disabled', !$.support.fileInput)
	        .parent().addClass($.support.fileInput ? undefined : 'disabled');
	});

	/* Funcionality to share content social media*/
	if($(".share").length) {
		$('.share').share({
			socialIcons : {
			    facebook : {
			        show : false
			    },
			    pinterest : {
			        show : true,
			        media : "http://goo.gl/OCMfWB",
			        description : "Harshen Pandey"
			    }
			},
			mandatory : {
			    containerId: "boxa",
			    APIkey : "bgrswprtt3nzgudfxr5zkjur",
			    URL : "http://www.nature.org/"
			},
			display : {
			    background : "#321243"
			}
		});

		$('.share_butterfly').share({
			mandatory : {
			    containerId: "boxb",
			    APIkey : "bgrswprtt3nzgudfxr5zkjur",
			    URL : "http://www.wwf.org/"
			}
		});
	}	
});