	var aDataSet = [
		//---------------------------------------------------------------------------
		// CN - START

		// General
		// ['XXXXX','()','China','General','XXXXX'],
		['US-China Economic and Security Review Commission','(uscc.gov)','China','Government','https://www.uscc.gov/annual-reports'],
		['China investment','(mofcom.gov.cn)','China','Government','https://project.mofcom.gov.cn/'],
		['Center for Strategic & International Studies (CSIS)','(csis)','China','Think-tank','https://www.csis.org/regions/asia/china'],
		['Center for Security & Emerging Technologies (CSET) ','(cset)','China','Think-tank','https://cset.georgetown.edu/topic/china/'],
		['National Institute for Defence Studies (NIDS) China Security Report ','(nids.mod.go.jp)','China','Think-tank','http://www.nids.mod.go.jp/english/publication/chinareport/index.html'],
		['China Internet Report 2021','(scmp)','China','News','https://multimedia.scmp.com/infographics/china-internet-2021/'],
		['Jeff Ding China AI ','(substack)','China','Blog','https://chinai.substack.com/'],
		['Andrew S. Erickson ','(andrewerickson)','China','Blog','https://www.andrewerickson.com/categories/'],
		// CN - END

	];


$(document).ready(function() {	$('#dynamic').html( '<table cellpadding="0" style="width:100%" cellspacing="0" border="0" class="display" id="example"></table>' );
	$('#example').dataTable( {
		// "scrollY"  : 500, // no. of Y-pixels
		"paging"   : false,
		"order": [[ 2, 'asc' ], [ 3, 'asc' ]],
		"aaData"   : aDataSet,
		"oSearch": {"sSearch": ""},
		"aoColumns": [
			{ "sTitle": "Name", "sWidth": "35%" },
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
