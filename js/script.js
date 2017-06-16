$(function() {

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




	






























});