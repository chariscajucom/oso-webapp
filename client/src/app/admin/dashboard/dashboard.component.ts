import { Component, OnInit } from '@angular/core';
import { StudOrgsService } from '../../myservices/studorgs.service';
import { NewsService } from '../../myservices/news.service';

declare var swal: any;
declare var $: any;

@Component({
	moduleId: module.id,
	selector: 'admin-dash',
	templateUrl: 'dashboard.component.html'
})

export class DashboardComponent implements OnInit{
	studOrgs: any;
	newsArticles: any;
	constructor(private studorgsService: StudOrgsService,
				private newsService: NewsService){}

	getAllOrgs(){
		this.studorgsService.getAllOrgs().subscribe(data => {
		  this.studOrgs = data.studorgs.length;
		});
	}
	getAllNews(){  
		this.newsService.getAllNews().subscribe(data =>{
		  this.newsArticles = data.news.length;
		});
	  }

	ngOnInit(){
		this.getAllOrgs();
		this.getAllNews();
		var $calendar = $('#fullCalendar');

		var today = new Date();
		var y = today.getFullYear();
		var m = today.getMonth();
		var d = today.getDate();

		$calendar.fullCalendar({
			viewRender: function(view, element) {
        // We make sure that we activate the perfect scrollbar when the view isn't on Month
        if (view.name != 'month'){
        	$(element).find('.fc-scroller').perfectScrollbar();
        }
	    },
	    header: {
	    	left: 'title',
	    	center: 'month,agendaWeek,agendaDay',
	    	right: 'prev,next,today'
	    },
	    defaultDate: today,
	    selectable: true,
	    selectHelper: true,
	    views: {
	        month: { // name of view
	        	titleFormat: 'MMMM YYYY'
	            // other view-specific options here
	        },
	        week: {
	        	titleFormat: " MMMM D YYYY"
	        },
	        day: {
	        	titleFormat: 'D MMM, YYYY'
	        }
	    },

	    select: function(start, end) {

	        // on select we show the Sweet Alert modal with an input
	        swal({
	        	title: 'Create an Event',
	        	html: '<div class="form-group">' +
	        	'<input class="form-control" placeholder="Event Title" id="input-field">' +
	        	'</div>',
	        	showCancelButton: true,
	        	confirmButtonClass: 'btn btn-success',
	        	cancelButtonClass: 'btn btn-danger',
	        	buttonsStyling: false
	        }).then(function(result) {

	        	var eventData;
	        	var event_title = $('#input-field').val();

	        	if (event_title) {
	        		eventData = {
	        			title: event_title,
	        			start: start,
	        			end: end
	        		};
	      $calendar.fullCalendar('renderEvent', eventData, true); // stick? = true
	  }

	  $calendar.fullCalendar('unselect');

	});
	    },
	    editable: true,
	eventLimit: true, // allow "more" link when too many events


	    // color classes: [ event-blue | event-azure | event-green | event-orange | event-red ]
	    events: [
	    ]
	});
	}
}
