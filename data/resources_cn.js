	var aDataSet = [
		//---------------------------------------------------------------------------
		// CN - START

		// General
		// ['XXXXX','()','China','General','XXXXX'],
		['US-China Economic and Security Review Commission','(uscc.gov)','China','Government','https://www.uscc.gov/annual-reports'],
		['Report on Military and Security Developments Involving the People’s Republic of China','(defense.GOV)','China','Government','https://www.defense.gov/News/Releases/Release/Article/2831819/dod-releases-2021-report-on-military-and-security-developments-involving-the-pe/'],
		['China investment','(mofcom.gov.cn)','China','Government','https://project.mofcom.gov.cn/'],
		['Center for Strategic & International Studies (CSIS)','(csis)','China','Think-tank','https://www.csis.org/regions/asia/china'],
		['Center for Security & Emerging Technologies (CSET) ','(cset)','China','Think-tank','https://cset.georgetown.edu/topic/china/'],
		['National Institute for Defence Studies (NIDS) China Security Report ','(nids.mod.go.jp)','China','Think-tank','http://www.nids.mod.go.jp/english/publication/chinareport/index.html'],
		['China Internet Report 2021','(scmp)','China','News','https://multimedia.scmp.com/infographics/china-internet-2021/'],
		['Jeff Ding China AI ','(substack)','China','Blog','https://chinai.substack.com/'],
		['Andrew S. Erickson ','(andrewerickson)','China','Blog','https://www.andrewerickson.com/categories/'],
		['Assessing Systemic Strengths and Vulnerabilities of China Defense Industrial Base','(rand)','China','General','https://www.rand.org/pubs/research_briefs/RBA930-1.html,https://www.dropbox.com/s/eipp66olmrgwoa3/CN_Assessing%20Systemic%20Strengths%20and%20Vulnerabilities%20of%20China%27s%20Defense%20Industrial%20Base%20%28rand%29.pdf?dl=0,https://www.dropbox.com/s/6npozmmq81ep2j4/CN_Assessing%20Systemic%20Strengths%20and%20Vulnerabilities%20of%20China%27s%20Defense%20Industrial%20Base2%20%28rand%29.pdf?dl=0'],
		['China Power','ChinaPower provides an in-depth understanding of the evolving nature of Chinese power relative to other countries. The project examines five interrelated categories of Chinese power: military, economics, technology, social, and international image. Through objective analysis and data visualization, ChinaPower unpacks the complexity of China’s rise. (csis)','China','Think-tank','https://chinapower.csis.org/,https://chinapower.csis.org/category/technology/'],
		['China’s Arms Sales Motivations and Implications','China’s arms sales have become the focus of considerable attention and pose a moderate threat to U.S. interests. Although Chinese sales have fallen in recent years, and Beijing has become more responsible in the transfer of nuclear, biological, and chemical (NBC) technologies, much progress will be needed to curtail China’s behavior. Principal recipients of Chinese arms have been Iran, Iraq, Myanmar, North Korea, Pakistan, and Thailand.  (rand)','China','Think-tank','https://www.rand.org/pubs/monograph_reports/MR1119.html'],
		['Estimating the Arms Sales of Chinese Companies','Quantitative research on the finances of the Chinese arms industry has been limited by the scarcity of available data. A scoping study to estimate the financial value of the arms sales of companies in the Chinese arms industry—using a new methodology—found information on four companies: the Aviation Industry Corporation of China (AVIC), the China Electronics Technology Group Corporation (CETC), the China South Industries Group Corporation (CSGC) and the China North Industries Group Corporation (NORINCO). These four companies cover three main sectors of conventional arms production: aircraft, electronics and land systems. (sipri)','China','General','https://www.sipri.org/publications/2020/sipri-insights-peace-and-security/estimating-arms-sales-chinese-companies,https://www.dropbox.com/s/hzqqjpak0cmyu86/CN_Estimating%20the%20Arms%20Sales%20of%20Chinese%20Companies%20%28sipri%29.pdf?dl=0'],
		['Arms Control','The Arms Control Association, founded in 1971, is a national nonpartisan membership organization dedicated to promoting public understanding of and support for effective arms control policies. (armscontrol)','China','Think-tank','https://www.armscontrol.org/search/google/china'],
		['Defense News','Founded in 1986, Defense News is the authoritative, independent, professional news source for the world’s defense decision-makers. In print and online, we provide the global defense community with the latest news and analysis on programs, policy, business and technology. Our bureaus and reporters around the world set the standard for accuracy, credibility and timeliness in defense reporting. (defensenews)','China','News','https://www.defensenews.com/search/China/'],
		['China Project','The China Project is a New York-based, China-focused news, information, and business services platform. We inform and connect a global audience regarding the business, technology, politics, culture, and society of China. (thechinaproject)','China','News','https://thechinaproject.com/section/business-technology/'],
		['China Edge','Company profiles (thechinaproject)','China','General','https://thechinaproject.com/company-profiles/'],
		// ['XXXXX','()','China','General','XXXXX'],
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
