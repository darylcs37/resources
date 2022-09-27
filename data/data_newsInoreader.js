	var aDataSet = [
		//--------------------------------   START   --------------------------------
		// News Inoreader - aggregated news
		// ['News - XXXX','Aggregated News Feeds (inoreader)','XXXX','News-Aggregated','XXXXX'],
		// ['News - XXXX','Aggregated News Feeds (inoreader)','XXXX','News-Aggregated','XXXXX'],
		// ['News - XXXX','Aggregated News Feeds (inoreader)','XXXX','News-Aggregated','XXXXX'],
		['News - 5G','Aggregated News Feeds (inoreader)','5G','News-Aggregated','https://www.inoreader.com/stream/user/1004633940/tag/5G%20Telco/view/html'],
		['News - AR/VR/Mixed Reality/Metaverse','Aggregated News Feeds (inoreader)','AR-VR','News-Aggregated','https://www.inoreader.com/stream/user/1004633940/tag/XR%20AR%20MR/view/html,https://www.inoreader.com/stream/user/1004633940/tag/XR/view/html'],
		['News - Armament','Aggregated News Feeds (inoreader)','Armament','News-Aggregated','https://www.inoreader.com/stream/user/1004633940/tag/Armament/view/html'],
		['News - Cyber-Info','Aggregated News Feeds (inoreader)','Cyber-Info','News-Aggregated','https://www.inoreader.com/stream/user/1004633940/tag/Cyber-Info/view/html'],
		['News - EW / Radar / ELINT','Aggregated News Feeds (inoreader)','EW','News-Aggregated','https://www.inoreader.com/stream/user/1004633940/tag/EW%20Radar%20ELINT/view/html'],
		['News - IoT','Aggregated News Feeds (inoreader)','IoT','News-Aggregated','https://www.inoreader.com/stream/user/1004633940/tag/IoT/view/html'],
		['News - GIS 3D Mapping','Aggregated News Feeds (inoreader)','GIS 3D Mapping','News-Aggregated','https://www.inoreader.com/stream/user/1004633940/tag/GIS%203D%20Mapping/view/html'],
		['News - General','Aggregated News Feeds (inoreader)','General','News-Aggregated','https://www.inoreader.com/stream/user/1004633940/tag/News%20-%20General/view/html'],
		['News - Hypersonic','Aggregated News Feeds (inoreader)','Hypersonic','News-Aggregated','https://www.inoreader.com/stream/user/1004633940/tag/Hypersonic/view/html'],
		['News - MY','Aggregated News Feeds (inoreader)','MY','News-Aggregated','https://www.inoreader.com/stream/user/1004633940/tag/News%20-%20MY/view/html'],
		['News - SG','Aggregated News Feeds (inoreader)','SG','News-Aggregated','https://www.inoreader.com/stream/user/1004633940/tag/News%20-%20SG/view/html'],
		['News - Research Labs (Industry / Academia / Govt)','Aggregated News Feeds (inoreader)','Research Labs','News-Aggregated','https://www.inoreader.com/stream/user/1004633940/tag/Research%20Labs%20%28Industry%20%2F%20Academia%20%2F%20Govt%29/view/html'],
		['News - Robotics / Unmanned','Aggregated News Feeds (inoreader)','Drone','News-Aggregated','https://www.inoreader.com/stream/user/1004633940/tag/Robot%20-%20unmanned/view/html'],
		['News - Russia Ukraine','Aggregated News Feeds (inoreader)','RUS-UKR','News-Aggregated','https://www.inoreader.com/stream/user/1004633940/tag/News%20-%20RUS-UKR/view/html'],
		['News - Russia Ukraine (tagged)','Aggregated News Feeds (inoreader)','RUS-UKR','News-Aggregated','https://www.inoreader.com/stream/user/1004633940/tag/News%20-%20RUS-UKR/view/html,https://www.inoreader.com/stream/user/1004633940/tag/RUS-UKR/view/html'],
		['News - Software Engineering','Aggregated News Feeds (inoreader)','Software Engineering','News-Aggregated','https://www.inoreader.com/stream/user/1004633940/tag/Software%20Engineering/view/html'],
		['News - Space','Aggregated News Feeds (inoreader)','Space','News-Aggregated','https://www.inoreader.com/stream/user/1004633940/tag/Space/view/html'],
		['News - Infrastructure','Aggregated News Feeds (inoreader)','Infrastructure','News-Aggregated','https://www.inoreader.com/stream/user/1004633940/tag/Infrastructure/view/html'],
		//--------------------------------   END   --------------------------------
	];


$(document).ready(function() {	$('#dynamic').html( '<table cellpadding="0" style="width:100%" cellspacing="0" border="0" class="display" id="example"></table>' );
	$('#example').dataTable( {
		// "scrollY"  : 500, // no. of Y-pixels
		"paging"   : false,
		"order": [[ 2, 'asc' ], [ 3, 'asc' ]],
		"aaData"   : aDataSet,
		"oSearch": {"sSearch": ""},
		"aoColumns": [
			{ "sTitle": "Domain Area", "sWidth": "35%" },
			{ "sTitle": "Description", "sWidth": "40%" },
			{ "sTitle": "Domain", "sWidth": "10%" }, // AI, Cyber, Space, Defence & Aerospace, 5G, Cloud, Autonomy. Robotics
			{ "sTitle": "Category", "sWidth": "10%" }, // Algorithms, Policy, Patent, Commercial, Government
			{ "sTitle": "URL", "sWidth": "5%",
			"mRender": function ( data, type, full ) {
		 			// 'full' is the row's data object, and 'data' is this column's data
		 			// e.g. 'full[0]' is the first item, and 'data' is the URL

					// display Hyperline
		 			// return '<a href="' + full[5] + '" target="_blank">' + data + '</a>';
					var arrURL = data.split(',');
					// console.log('no. of tokens='+ arrURL.length +' for ['+ data +']');
					var sResult = '';
					if (arrURL.length>1) {
						for(var i=0; i<arrURL.length; i++) {
							// display URL and Link
							// sResult = sResult + arrURL[i] + ', <a href="' + arrURL[i] + '" target="_blank">Link</a>, ';

							// display Link ONLY
							sResult = sResult + '<a href="' + arrURL[i] + '" target="_blank">Link</a>, ';
						}
					}
					else {
						// display URL and Link
						// sResult =  data + ', <a href="' + full[4] + '" target="_blank">Link</a>';

						// display Link ONLY
						sResult =  '<a href="' + full[4] + '" target="_blank">Link</a>';
					}

					// display Hyperline
					// return data + ', <a href="' + full[5] + '" target="_blank">Link</a>';
					return sResult;
        }
		  },
		]
	} );
} );
