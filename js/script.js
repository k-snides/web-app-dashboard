$(function() {



	// --- Close alert box ---
	$('.close-btn').on("click", function() {
		$('#alert').slideUp();
		$('.notification-notice').fadeOut()
	});
	// --- Close alert box ---




	// --- Website Traffic Line Chart ---
	var wtlc = document.getElementById('website-traffic').getContext('2d');

	var websiteTraffic = new Chart(wtlc, {
		type: 'line',
		data: {
		    labels: ["16-22", "23-29", "30-5", "6-12", "13-9", "20-26", "27-3", "4-10", "11-17", "18-24", "25-31"],
		    datasets: [{
		      data: [0, 500, 1000, 750, 1250, 1750, 1250, 1500, 1000, 1500, 2000],
		      backgroundColor: '#e2e3f6',
		      borderColor: '#7477b4'
		    }]
		  },
		options: {
			responsive: true,
			maintainAspectRatio: false,
			legend: {
				display: false
			}
		}
	})
	// --- end Website Traffic Line Chart ---


	// --- Daily Traffic Bar Chart ---
	var dtbc = document.getElementById('daily-traffic').getContext('2d');

	var dailyTraffic = new Chart(dtbc, {
		type: 'bar',
		data: {
			labels: ["S", "M", "T", "W", "T", "F", "S"],
			datasets: [{
				data: [75, 100, 175, 125, 225, 200, 100],
				backgroundColor: '#7477b4'
			}]
		},
		options: {
			responsive: true,
			legend: {
				display: false
			}
		}
	})
	// --- end Daily Traffic Bar Chart ---


	// --- Mobile Users Donut Chart ---
	var mudc = document.getElementById('mobile-users').getContext('2d');

	var mobileUsers = new Chart(mudc, {
	    type: 'doughnut',
	    data: {
	    	labels: ["Tablets", "Phones", "Desktop"],
	    	datasets: [{
	    		backgroundColor: [
	    			"#81c98f",
	    			"#74b1bf",
	    			"#7477b4"
	    		],
	    		data: [20, 20, 60]
	    	}]
	    },
	    options: {
	    	responsive: true,
	    	maintainAspectRatio: false	
	    }
	});
	// --- end Donut Chart --- 



	$.ajax({
	  url: 'https://randomuser.me/api/?results=4',
	  dataType: 'json',
	  success: function(data) {
	    console.log(data.results.length);
	    for (let i = 0; i < data.results.length; i++) {

	    	// TODO: turn to function
	    	// https://stackoverflow.com/questions/17306830/how-to-get-2-digit-year-w-javascript
	    	let date = new Date();
	    	let day = date.getDate();
	    	let month = date.getMonth() + 1;
	    	let fullYear = date.getFullYear().toString();
	    	let year = fullYear.substr(-2);

	    	if (month >= 1 && month <= 9) {
	    		month = "0" + month;
	    	}

	    	let $newMembers = $('.new-members');
	    	let $recentActivity = $('.recent-activity');


	    	$newMembers.append(`
	    		<div class="new-members-group flex">
						<img src="${data.results[i].picture.thumbnail}" />
						<p>
							${data.results[i].name.first} ${data.results[i].name.last} <br />
							<span class="email">
								${data.results[i].email}
							</span>
						</p>
						<p class="date">
							${day}/${month}/${year}
						</p>
					</div>
	    	`);

	    	$recentActivity.append(`
	    		<div class="recent-activity-group flex">
						<img src="${data.results[i].picture.thumbnail}" />
						<p>
							${data.results[i].name.first} ${data.results[i].name.last} said a bunch of junk<br />
							<span class="time-ago">
								4 hours ago
							</span>
						</p>
						<p class="right-caret">
							
						</p>
					</div>
	    	`);
	    	


	    	
	    }
	  }
	});
	






























});