$(document).ready(function(){
    //Accessibility Helper


    $('.noscript').removeClass('noscript');

    //Show menu when focused
    $('.accessible li a').focus(function() {$('.accessible').addClass('noscript');});
    $('.accessible li a').blur(function() {$('.accessible').removeClass('noscript');});

    //Show dropdowns on tab focus
    $('.nav-container a').focus(function() {$(this).parents('li').addClass('hover');});
    $('.nav-container a').blur(function() {$(this).parents('li').removeClass('hover');});

    //Show dropdowns on tab focus
    $('.program a').focus(function() {$(this).parents('li').addClass('hover');});
    $('.program a').blur(function() {$(this).parents('li').removeClass('hover');});

    //To Top
    $('a#totop').hide();
    $(window).scroll(function() {
        if($(this).scrollTop() != 0) {
            $('a#totop').fadeIn();
        } else {
            $('a#totop').fadeOut();
        }
    });
	
	$("[data-toggle]").click(function() {
		dataToggle(this);
	});

    //Home Page
    //var classarr = ['bg-one','bg-two','bg-three','bg-four','bg-five','bg-six'];
	var classarr = ['bg-one','bg-two','bg-four','bg-six'];
    var idx = Math.floor(Math.random() * classarr.length);
    $('main.hero').addClass(classarr[idx]);

    //Scrollable tables
    $('table').not('.tbl_calendar, .fsinjectorlinks').each(function() {$(this).wrap("<div class='scrollable'></div>");});

    //Search helper
    $('#fssearchresults p').each(function() {
        var $this = $(this);
        if($this.html().replace(/\s|&nbsp;/g, '').length == 0)
            $this.remove();
    });

    //Toggles Courses
	/*$("#content .courseblock").each(function(){
        $('#content .coursedetails').hide();
    });
	$('#content .btn-course').click(function(){
		$(this).parent().siblings('.coursebody').find('.coursedetails').toggle();
		$(this).toggleClass('expand');
        $(this).parents('.courseblock').toggleClass('expand');
		if ($(this).parent().siblings('.coursebody').find('.coursedetails').attr('aria-expanded') == 'false') {
			$(this).parent().siblings('.coursebody').find('.coursedetails').attr('aria-expanded', 'true');
			$(this).parent().siblings('.coursebody').find('.coursedetails').focus();
		} else {
			$(this).parent().siblings('.coursebody').find('.coursedetails').attr('aria-expanded', 'false');
		}
		return false;
	});*/

    //Toggles Courses
	/*
    $("#content .courseblock").each(function(){
        $('#content .coursedetails').hide().attr('aria-expanded', 'false');
        $('#content .courseblock span.deschide').hide().attr('aria-expanded', 'false');
    });
    $('#content .courseblock a.btn-readmore').click(function(){
        $(this).hide();
        $(this).parent().find('span.deschide').show().attr('aria-expanded', 'true');
        $(this).parent().find('span.descshow').removeClass('overflow');
        $(this).parent().next('.coursedetails').show().attr('aria-expanded', 'true');
        return false;
    });
    $('#content .courseblock a.btn-readless').click(function(){
        $(this).parent().parent().parent().find('a.btn-readmore').show();
        $(this).parent().parent().parent().find('span.deschide').hide().attr('aria-expanded', 'false');
        $(this).parent().parent().parent().find('span.descshow').addClass('overflow');
        $(this).parent().parent('.coursedetails').hide().attr('aria-expanded', 'false');
        return false;
    });
	*/
	
	$("#content .courseblock").each(function(){
        //$('#content .coursebody').hide();
		//$('#content #sc_courseblock_toggleAll');
		//$('#content #sc_courseblock_toggleAll #toggleAllHide').hide();
		$('#content .coursedetails').hide().attr('aria-expanded', 'false');
      $('#content .courseblock span.deschide').hide().attr('aria-expanded', 'false');
    });
	
	$("#content #fssearchresults .courseblock").each(function(){
        //$('#content .coursebody').hide();
		//$('#content #sc_courseblock_toggleAll');
		//$('#content #sc_courseblock_toggleAll #toggleAllHide').hide();
		$(this).find('.coursebody').show().attr('aria-expanded', 'true');
		$(this).find('.coursedetails').hide().attr('aria-expanded', 'false');
    });
	
    $('#content .courseblock a.btn-readmore').click(function(){
        $(this).hide();
        $(this).parent().find('span.deschide').show().attr('aria-expanded', 'true');
        $(this).parent().find('span.descshow').removeClass('overflow');
        $(this).parent().next('.coursedetails').show().attr('aria-expanded', 'true');
        return false;
    });
    $('#content .courseblock a.btn-readless').click(function(){
        $(this).parent().parent().parent().find('a.btn-readmore').show();
        $(this).parent().parent().parent().find('span.deschide').hide().attr('aria-expanded', 'false');
        $(this).parent().parent().parent().find('span.descshow').addClass('overflow');
        $(this).parent().parent('.coursedetails').hide().attr('aria-expanded', 'false');
        return false;
    });
	
	//Toggle all course descriptions - added by Cai 2018-07-12
	
	// these two default settings should be made in CSS instead
	//$('#content .coursedescs_toggleAll .btn_collapseAll').hide();
	
	
	// add a 'toggle_btn' element after each course title so users know that clicking on title toggles description
	$('.btn_toggleCoursebody .courseblocktitle .hours').after("<span class=\"toggle_btn\"> [+]</span><span class=\"sr-only\">Expand course description</span>");
	
	// Expand all course descriptions
	$('#content .btn_expandAll').click(function(){
		
		$('#content .coursedescs_toggleAll .btn_expandAll').hide();
		$('#content .coursedescs_toggleAll .btn_collapseAll').show();
				
		$(".toggle_btn").html(" [-]");
		$(".sr-only").html("Collapse course description");
		
      $(".courseblock").each(function() {
         dataToggle($(this).find(".btn_toggleCoursebody"),true);
      });
	});
	
	// Collapse all course descriptions
	$('#content .btn_collapseAll').click(function(){
		
		$('#content .coursedescs_toggleAll .btn_expandAll').show();
		$('#content .coursedescs_toggleAll .btn_collapseAll').hide();
				
		$(".toggle_btn").html(" [+]");
		$(".sr-only").html("Expand course description");
		
      $(".courseblock").each(function() {
         dataToggle($(this).find(".btn_toggleCoursebody"),false);
      });
	});
	
	
	
	// change the glyph shown for 'toggle_btn' based on aria-expanded value
	$('#content .btn_toggleCoursebody').click(function(){
		
		if ($(this).attr('aria-expanded') === 'true') {
			$(this).find('.toggle_btn').html(" [-]");
			$(this).find('.sr-only').html("Collapse course description");
		}
		else {
			$(this).find('.toggle_btn').html(" [+]");
			$(this).find('.sr-only').html("Expand course description");
		}
	});
	
    //Toggle Content
    var tglsection = 1;

    $('#content h4.tglhead').each(function(){
        $(this).next().wrapAll('<div id="tglsection' + tglsection + '" class="tglcontent" />');
        $(this).next('.tglcontent').andSelf().wrapAll('<div class="tglcontainer" />');
        $(this).next('.tglcontent').attr('aria-expanded', 'false').hide();
        $(this).attr({
          "role": "button",
          "aria-controls": "tglsection" + tglsection
        });
        tglsection++;
    });

    $('#content h4.tglhead').click(function(){
        $(this).next('.tglcontent').toggle();
        $(this).toggleClass('expand');

        if ($(this).next('.tglcontent').attr('aria-expanded') == 'false') {
            $(this).next('.tglcontent').attr('aria-expanded', 'true');
            $(this).next('.tglcontent').focus();
        } else {
            $(this).next('.tglcontent').attr('aria-expanded', 'false');
        }
    });

    //Filters
    var $container = $('#programs'),
        $checkboxes = $('#filters input');

    // if on page with filters
    if ($container.length && $checkboxes.length) {

        $container.isotope({
            itemSelector: '.program',
            transformsEnabled: false
        });
        $checkboxes.change(function(){
            var filters = [];

            // get checked checkboxes values
            $checkboxes.filter(':checked').each(function(){
                filters.push( this.value );
            });

            filters = filters.join('');
            $container.isotope({ filter: filters });

            if(!$container.data('isotope').$filteredAtoms.length){
                $('#noresults').show();
            } else {
                $('#noresults').hide();
            }
        });

        // reset all filters
        var filterurl = location.search.replace(/^\?/,'').split(/\&/);
        for(var i = 0; i < filterurl.length; i++){
            var ent = filterurl[i].split(/\=/);
            if(ent[0].match(/^filter_\d+$/)){
                $('#' + ent[0]).attr('checked', true);
            }
        }
        $checkboxes.change();

        // reset all filters
        $("#filter-head a").click(function(){
            $container.isotope({filter: '*'});
            $checkboxes.filter(':checked').each(function(){
                $(this).attr('checked', false);
            });
            $('#noresults').hide();
            return false;
        });
    }
});

function showProgramPreview(req, id, level, popimage) {
    showPreview = false;

    function showProgramReady(programxml) {
        if($(programxml).find("program").length > 0) {
           var html = $(programxml).find("program").text();
           $('#program-preview').html(html);
           //$('#program-preview')[0].activate();
            var pp = $('#program-preview');
            if (!pp || !pp[0])
                return;
            pp[0].activate({
                keyhandler: lfjs.window.defaultKeyHandler,
                focus: 'a:eq(0)'
            });
        } else {
            skipPreview();
        }
    }
    function skipPreview() {
        window.location.href = $(req).attr('href');
    }

    // if error or no program info found
    if(typeof ribbiturl == "undefined" || window.location.host.indexOf(".leepfrog.com") >= 0)
        ribbiturl = "/ribbit/index.cgi";
    var gcurl = ribbiturl + "?page=getprogrampopup.rjs&id=" + encodeURIComponent(id) + "&level=" + encodeURIComponent(level) + "&popimage=" + encodeURIComponent(popimage);
    $.ajax({
        url:gcurl,
        success: showProgramReady,
        error: skipPreview
    });
    return false;
}
function hideProgramPreview() {
    if($("#program-preview").length)
        $('#program-preview')[0].deactivate();
}

function flipAria(elem,target,state) {
	if(state === undefined) {
		var state = $(elem).attr('aria-expanded') === 'false' ? true : false;
	}
	$(elem).attr('aria-expanded', state);
	$(target).attr('aria-hidden', !state);
}
function dataToggle(elem,state) {
	if(state === undefined) {
		var state = $(elem).attr('aria-expanded') === 'false' ? true : false;
	}
	var target = $(elem).attr("data-toggle");
	var animate = false;
	if($(elem).attr("data-toggle-animate") === "true")
		animate = true;
	
	if(state) {
		$(elem).addClass("active");
		$(target).addClass("active");
		if(animate)
			$(target).slideDown(true);
	} else {
		$(elem).removeClass("active");
		$(target).removeClass("active");
		if(animate)
			$(target).slideUp(true);
	}
	
	flipAria(elem,target,state);
}