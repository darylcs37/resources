	var aDataSet = [
		/* auto-generated - START */


		['37','Cloud Architect Role','Cloud','Course','EMC','Amazon Web Services (AWS), Cloud and ITaaS, Cloud Infrastructure and Services v3,  Cloud Infrastructure Planning and Design, Cloud Services Planning and Design, Cloud Tiering Appliance, CloudLink, Elastic Cloud Storage (ECS).','https://education.dellemc.com/content/emc/en-us/home/training/by-role.html#vert-click11',],

		/* auto-generated - END */

		/*
		['8',' Visual Tracker Benchmark ','Data and code of the benchmark evaluation of online visual tracking algorithms.','Video','','http://www.visual-tracking.net',],

		37	Cloud Architect Role	Cloud	Course	EMC	Amazon Web Services (AWS), Cloud and ITaaS, Cloud Infrastructure and Services v3,  Cloud Infrastructure Planning and Design, Cloud Services Planning and Design, Cloud Tiering Appliance, CloudLink, Elastic Cloud Storage (ECS).	https://education.dellemc.com/content/emc/en-us/home/training/by-role.html#vert-click11


		*/
	];


$(document).ready(function() {	$('#dynamic').html( '<table cellpadding="0" style="width:100%" cellspacing="0" border="0" class="display" id="example"></table>' );
	$('#example').dataTable( {
		"aaData": aDataSet,
		"aoColumns": [
			{ "sTitle": "S/N", "sWidth": "2%" },
			{ "sTitle": "Name", "sWidth": "15%" },
			{ "sTitle": "Category", "sWidth": "5%" },
			{ "sTitle": "Type", "sWidth": "5%" },
			{ "sTitle": "Provider", "sWidth": "10%" },
			{ "sTitle": "Description", "sWidth": "50%" },
			{ "sTitle": "URL", "sWidth": "3%",
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
							sResult = sResult + ', <a href="' + arrURL[i] + '" target="_blank">Link</a>, ';
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
