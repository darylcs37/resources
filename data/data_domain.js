	var aDataSet = [
		// 5G
		['5G Roadmap Whitepaper (IEEE)','','5G','Roadmap','https://www.dropbox.com/s/ymies37erk8tvit/ieee-5g-roadmap-white-paper.pdf?dl=0'],

		// AI
		['US National Security Commission on Artificial Intelligence (2021 - NCSAI)','AI strategy','AI','Policy','https://www.dropbox.com/s/z9jdqk5pf1czcfs/US_NSCAI_National%20Security%20Commission%20on%20Artificial%20Intelligence_p755.pdf?dl=0'],
		['UK National AI Strategy (Sep 2021)','AI strategy','AI','Policy','https://www.dropbox.com/s/8wx6ys2txvek3ys/UK_National_AI_Strategy_20210923.pdf?dl=0'],
		['China AI standardization white paper (2019 - CSET)','','AI','Policy','https://www.dropbox.com/s/gn85yunestrrlr9/CN_AI_standardization_white_paper_2019.pdf?dl=0'],
		['Harnessed Lightning (CSET)','How The Chinese Military Is Adopting Artificial Intelligence','AI','Policy','https://www.dropbox.com/s/r8gjhf69bi2wamh/CN_AI_Harnessed-Lightning_p84%20%28CSET%29.pdf?dl=0'],
		['A Survey of Visual Transformers (Nov 2021)','','AI','Algorithm','https://www.dropbox.com/s/tiq9jrt3608uwrw/AI_Algo_CV_A%20Survey%20of%20Visual%20Transformers_202111.pdf?dl=0'],
		['A Knowledge Representation Practionary','','AI','Algorithm','https://www.dropbox.com/s/p2rhe27ux593vub/AI_Algo_KG_A%20Knowledge%20Representation%20Practionary.pdf?dl=0'],
		['A Survey to Knowledge Graph and Its Military Application (2020 in Chinese)','','AI','Algorithm','https://www.dropbox.com/s/n050wqlorxjyotn/AI_Algo_KG_A%20Surveyto%20Knowledge%20Graph%20andIts%20Military%20Application_2020%20%28in%20Chinese%29.pdf?dl=0'],
		['Synthetic Data for Deep Learning (Sep 2019)','','AI','Algorithm','https://www.dropbox.com/s/fe3ipyq0ff9kgzq/AI_Algo_Synthetic%20Data%20for%20Deep%20Learning_201909.pdf?dl=0'],
		['Entity-Oriented Search (springer)','','AI','Algorithm','https://www.dropbox.com/s/8p38kvgynbl7wu9/AI_Algo_KG_Entity-Oriented%20Search%20%28springer%29.pdf?dl=0'],

		// Autonomy-Robotics-Drones
		['Drone Databook (Mar 2020)','','Autonomy-Robotics','Drone','https://www.dropbox.com/s/4onywr1vq83t5ph/Drone-Databook_202003.pdf?dl=0'],
		['Security analysis of drones systems','','Autonomy-Robotics','Drones','https://www.dropbox.com/s/4r6bt8ucqpsw1m3/drone_ontology_security%20analysis%20of%20drones%20systems.pdf?dl=0'],
		['Mapping the development of autonomy in weapon_systems (2017 - sipri)','','Autonomy-Robotics','Drones','https://www.dropbox.com/s/5r6lq7zgp0m50q9/Mapping_the_development_of_autonomy_in_weapon_systems_2017%20%28sipri%29.pdf?dl=0'],
		['Drone patents','','Autonomy-Robotics','Drones','https://www.dropbox.com/s/eqenozygulwdmkv/drones%20patents.xlsx?dl=0'],
		['State of Drone Security (DroneDec)','','Autonomy-Robotics','Drones','https://www.dropbox.com/s/38uhq886dx0my6c/State%20of%20Drone%20Security.pdf?dl=0'],
		['Challenges in Combating UAIED and SUAV Swarms in Civil and Military environments','','Autonomy-Robotics','Drones','https://www.dropbox.com/s/lk7r201wvqmkf6t/Challenges%20in%20Combating%20UAIED%20and%20SUAV%20Swarms%20in%20Civil%20and%20Military%20environments.pdf?dl=0'],
		['Robotics Roadmap for Australia 2022','','Autonomy-Robotics','Roadmap','https://www.dropbox.com/s/imqkd5op9mxy6pk/Robotics-Roadmap-for-Australia-2022.pdf?dl=0'],
		['China AI Autonomy Report (Jan 2022 - cna.org)','','Autonomy-Robotics','Roadmap','https://www.dropbox.com/s/lmemh3bhb97zd4m/AV_ChinaAI-Autonomy-Report%20%28cna.org%29.pdf?dl=0'],
		['The Ascension Of Turkey As A Drone Power History, Strategy, And Geopolitical Implications (Jul 2020)','','Autonomy-Robotics','Drones','https://www.dropbox.com/s/ekmg6zfcuycvgfn/UAV_Turkey.pdf?dl=0'],
		['Dimensions of Autonomous Decision-making','','Autonomy-Robotics','General','https://www.dropbox.com/s/12egfid2fxmp56r/AV_Dimensions-of-Autonomous-Decision-making.pdf?dl=0'],
		['China Robotics Patent Landscape (CSET)','','Autonomy-Robotics','Patent','https://www.dropbox.com/s/wavbg9c7clpz85k/Autonomy_China%20Robotics%20Patent%20Landscape%20%28CSET%29.pdf?dl=0'],


		// Cloud
		['US Report on the Joint Enterprise Defense Infrastructure (JEDI) Cloud Procurement (Apr 2020)','','Cloud','Policy','https://www.dropbox.com/s/0u1hsekkjcfw9dh/US_JEDI_Report%20On%20The%20Joint%20Enterprise%20Defense%20Infrastructure%20%28Jedi%29%20Cloud%20Procurement%20Dodig-2020-079.pdf?dl=0'],
		['Cloud-playbook-digital (BAH)','','Cloud','General','https://www.dropbox.com/s/f5qtfifuewpb9up/Cloud-playbook-digital%20%28BAH%29.pdf?dl=0'],

		// Cyber
		['Cyber ThaiCERT Threat Actor Encyclopedia (Jun 2019)','Threat Group Cards: A Threat Actor Encyclopedia','Cyber','Threat Groups','https://www.dropbox.com/s/vqikz7x7992j3lk/Cyber_ThaiCERT_Threat_Actor_Encyclopedia_201906.pdf?dl=0'],
		['Cyber ThaiCERT Threat Actor Encyclopedia (Jul 2020)','Threat Group Cards: A Threat Actor Encyclopedia','Cyber','Threat Groups','https://www.dropbox.com/s/6gplj5q7wcvfp65/Cyber_ThaiCERT_Threat_Actor_Encyclopedia_202007.pdf?dl=0'],
		['Cyber Academics, AI and APTs (202103 - CSET)','How Six Advanced Persistent Threat-Connected Chinese Universities are Advancing AI Research','Cyber','Threat Groups','https://www.dropbox.com/s/0izs7pwyqq9xbar/Cyber_Academics-AI-and-APTs_202103%20%28cset%29.pdf?dl=0'],
		['Guide to Cyber Threat Modelling (SG CSA)','','Cyber','Guidelines','https://www.dropbox.com/s/n77ih0cbec09ugi/SG_CSA_Guide%20to%20Cyber%20Threat%20Modelling_202011.pdf?dl=0'],
		['Country Case Studies Industrialized Disinformation 2020','Global Inventory of Organized Social Media Manipulation','Cyber','Fake News','https://www.dropbox.com/s/bri3bo0igic5s4f/Country%20Case%20Studies%20Industrialized%20Disinformation_2020%20Global%20Inventory%20of%20Organized%20Social%20Media%20Manipulation.pdf?dl=0'],
		['Predicting the Proliferation of Cyber Weapons into Small States','','Cyber','Policy','https://www.dropbox.com/s/uakg9zoyadqcudd/Cyber_Predicting%20the%20Proliferation%20of%20Cyber%20Weapons%20into%20Small%20States.pdf?dl=0'],
		['China Cyber vision (ASPI)','How the Cyberspace Administration of China is building a new consensus on global internet governance','Cyber','Policy','https://www.dropbox.com/s/uwir003pl8sy9oq/CN_China%20Cyber%20vision%20%28aspi%29.pdf?dl=0'],
		['AI Cybersecurity Threat Challenges (Dec 2020 - ENISA)','','Cyber','Threat Landscape','https://www.dropbox.com/s/6mjcet263frc0kz/Cybersecurity%20Threat%20Challenges%20%28enisa%29_202012.pdf?dl=0'],
		['Cyber Threats and NATO 2030 Horizon-Scanning and Analysis (ccdcoe)','NATO Cooperative Cyber Defence Centre of Excellence (CCDCOE) is a NATO-accredited cyber defence hub focusing on research, training and exercises.','Cyber','Threat Landscape','https://www.dropbox.com/s/m0vzfazw64zfvrm/Cyber-Threats-and-NATO-2030_Horizon-Scanning-and-Analysis%20%28ccdcoe%29.pdf?dl=0'],
		['Chinese State-Sponsored Cyber Espionage Activity Supports Expansion of Regional Power and Influence in Southeast Asia (RecordedFuture)','','Cyber','Policy','https://www.dropbox.com/s/eq0qs7izpcqbkgw/CN_Cyber_Chinese%20State-Sponsored%20Cyber%20Espionage%20Activity%20Supports%20Expansion%20of%20Regional%20Power%20and%20Influence%20in%20Southeast%20Asia%20%28RecordedFuture%29.pdf?dl=0'],

		// Defence
		['Landscape of Hybrid Threats - A Conceptual Mode 2021 (Hybrid CoE)','','Defence','Hybrid Warfare','https://www.dropbox.com/s/v5xe09pnqqrxkx8/Hybrid%20Warfare_Landscape%20of%20Hybrid%20Threats%20-%20A%20Conceptual%20Mode_2021%20%28Hybrid%20CoE%29l.pdf?dl=0'],
		['Quantifying gray zone conflict codebook (2017 - start)','','Defence','Hybrid Warfare','https://www.dropbox.com/s/y3e2novjp7bp4zj/Quantifying_gray_zone_conflict_codebook_2017%20%28start%29.pdf?dl=0'],

		// Space
		['China Space and Counterspace Activities','','Space','Policy','https://www.dropbox.com/s/h9t5deyl4m3dp1g/CN_China_Space_and_Counterspace_Activities.pdf?dl=0'],
		['SG OSTIn','','Space','Policy','https://www.dropbox.com/s/3qno7eltgbarpni/SG_OSTIn.pdf?dl=0'],
		['SPIE Defence + Commercial Sensing','','Space','Conference','https://www.dropbox.com/s/0xmu4qhxji1lq6m/SPIE_Defence%20%2B%20Commercial%20Sensing%20%28conference%29.pdf?dl=0'],
		['US Space industry deep dive analysis (May 2013)','','Space','Policy','https://www.dropbox.com/s/suik2uakqc56gp4/US_space%20industry%20deep%20dive%20analysis.pdf?dl=0'],

		// ontology - DBPedia
		['5G Ontology (DBPedia)','DBPedia (format in TTL, JSON, XML)','Ontology','5G','https://www.dropbox.com/s/ioli8axvfew2kc0/5G.zip?dl=0'],
		['Cloud Ontology (DBPedia)','DBPedia (format in TTL, JSON, XML)','Ontology','Cloud','https://www.dropbox.com/s/yotyhasi3m15kxc/Cloud.zip?dl=0'],
		['AI Ontology (DBPedia)','DBPedia (format in TTL, JSON, XML)','Ontology','AI','https://www.dropbox.com/s/adjhdmw3c1c5yj7/AI.zip?dl=0'],
		['Autonomy Ontology (DBPedia)','DBPedia (format in TTL, JSON, XML)','Ontology','5G','https://www.dropbox.com/s/wqsm1czi5tm3s5p/Autonomy.zip?dl=0'],
		['Cyber Ontology (DBPedia)','DBPedia (format in TTL, JSON, XML)','Ontology','Cyber','https://www.dropbox.com/s/9zlqhx0xbemndj8/Cyber.zip?dl=0'],
		['Defence & Aerospace Ontology (DBPedia)','DBPedia (format in TTL, JSON, XML)','Ontology','Defence & Aerospace','https://www.dropbox.com/s/wjekhafi6yl2c2c/Defence.zip?dl=0'],
		['Hardware Ontology (DBPedia)','DBPedia (format in TTL, JSON, XML)','Ontology','Hardware','https://www.dropbox.com/s/ozg5m8d6oo0nhng/Hardware.zip?dl=0'],
		['ICT Ontology (DBPedia)','DBPedia (format in TTL, JSON, XML)','Ontology','ICT','https://www.dropbox.com/s/x1ck9qxey77y8y9/IT.zip?dl=0'],
		['Space Ontology (DBPedia)','DBPedia (format in TTL, JSON, XML)','Ontology','Space','https://www.dropbox.com/s/hi4zca87msxmyb1/Space.zip?dl=0'],

		// RUS-UK
		['Weapons of the war in Ukraine','This report is the result of a three-year study into the supply sources of weapons, ammunition, vehicles, armour, and artillery used in the conflict. [https://www.conflictarm.com/reports/weapons-of-the-war-in-ukraine/]','RUS-UKR','Supply Chain','https://www.dropbox.com/s/twqjw7jj09m0d02/RUS-UKR_SupplyChain_Weapons-of-the-war-in-Ukraine%20%28itrace%29.pdf?dl=0'],
		['Silicon Lifeline Western Electronics at the Heart of Russia s War Machine','Russia s war against Ukraine has relied on Western electronics. Russia’s invasion of Ukraine on 24 February 2022 has not gone to plan. Launched in the expectation of a surgical occupation of Ukrainian cities, it has become a grinding attritional struggle that is rapidly degrading the Russian military. This report, which contains an examination of the components and functioning of 27 of Russia’s most modern military systems – including cruise missiles, communications systems and electronic warfare complexes – concludes that the degradation in Russian military capability could be made permanent if appropriate policies are implemented. [https://rusi.org/explore-our-research/publications/special-resources/silicon-lifeline-western-electronics-heart-russias-war-machine/]','RUS-UKR','Supply Chain','https://www.dropbox.com/s/co3r5b5u92kin4y/RUS-UKR_SupplyChain_Silicon%20Lifeline%20Western%20Electronics%20at%20the%20Heart%20of%20Russia%E2%80%99s%20War%20Machine%20%28rusi%29.pdf?dl=0'],


		['Ukraine War Gives Taiwan Ideas for How to Defend Itself Against China','Taiwan has been taking clues from Ukraine on how smaller armies can inflict heavy losses on larger rivals. WSJ unpacks Taipei s so-called porcupine strategy to prepare for a potential war with China.','RUS-UKR','Video','https://www.youtube.com/watch?v=QYnq8A5gdAw'],
		['Eyes on Russia: The Russia-Ukraine Monitor Map','The Russia-Ukraine Monitor Map is a crowdsourced effort by the Centre for Information Resilience as part of the ‘Eyes on Russia’ project. We work with Bellingcat, GeoConfirmed, Conflict Intelligence Team, Advance Democracy and the open source community to map, document, archive and investigate what is happening in Ukraine.(Cen4infoRes)','RUS-UKR','Map','https://maphub.net/Cen4infoRes/russian-ukraine-monitor'],
		['Russia-Ukraine Conflict Map','[national-security.info]','RUS-UKR','Map','https://www.national-security.info/ukraine/maps.html'],
		['Turkish Way of Drone Warfare','Turkey s burgeoning drone-warfare edge has amplified the Turkish elite s strategic thinking. Winning contemporary wars is about winning the battle networks, and this is the underlying reason behind Turkey s success. Drone warfare has paid off in Libya, Syria, and Karabakh, among others. (atlanticcouncil)','RUS-UKR','Drone','https://www.dropbox.com/s/q3tdv59ox8ro5cw/Techno-Geopolitics_and_the_Turkish_Way_of_Drone_Warfare%20%28atlanticcouncil%29.pdf?dl=0'],
		['Ukraine Control Map','Crowdsouced (Project Owl OSINT)','RUS-UKR','Map','https://www.google.com/maps/d/viewer?mid=180u1IkUjtjpdJWnIC0AxTKSiqK4G6Pez&ll=49.3938255078818%2C32.84786878873499&z=6'],
		['EUR ESCAPE','(ESRI)','RUS-UKR','Map','https://www.arcgis.com/apps/webappviewer/index.html?id=c0477215792342fd8b53640341d59bdb&extent=-893540.2338%2C4092066.5241%2C8220199.5227%2C8587786.7797%2C102100'],
		['Digital Watch observatory','Digital technology plays an important, if not decisive, role in the Ukraine-Russia conflict. Cyberattacks increase as the conflict escalates. Decisions by Big Tech and social media platforms about the services they provide or block directly impact the situation on the ground. Emerging technologies, such as cryptocurrencies, find new applications. Sanctions will impact the development of technology and e-commerce. (dig.watch)','RUS-UKR','Cyber-Info','https://dig.watch/ukraine-crisis-a-timeline-of-developments'],
		['Hypersonic weapons and arms control','(russiancouncil.ru)','RUS-UKR','Hypersonic','https://russiancouncil.ru/en/analytics-and-comments/analytics/hypersonic-weapons-and-arms-control/'],
		['Arms Transfers to Ukraine','Ukraine arms transfers As tensions mounted in late 2021 and into 2022 concerning a Russian invasion of Ukraine, many countries announced arms transfers to Ukraine. As the invasion began in late February, this resource page was launched to track developments related to such transfers, which thus far includes pledges and/or deliveries from more than 25 countries plus the European Union. (forumarmstrade)','RUS-UKR','Arms Transfer','https://www.forumarmstrade.org/ukrainearms.html'],
		['Bayraktar TB2 Armed Drone','In the Ukraine conflict the TB2 has scored some impressive kills against Russian tanks, armored vehicles, artillery pieces, and short-range air defense systems. The Turks have also employed the TB2 in Syria and Iraq since 2014.','RUS-UKR','Drone','https://www.national-security.info/ukraine/weapons/bayraktar-tb2-drone.html'],
		['Ukrainian tech sector in wartime','(techukraine.org)','RUS-UKR','General','https://techukraine.org/2022/07/02/ukrainian-tech-sector-in-wartime-june-edition/'],
		['Disrupters and Defenders: What the Ukraine War Has Taught Us About the Power of Global Tech Companies','(institute.global)','RUS-UKR','General','https://institute.global/policy/disrupters-and-defenders-what-ukraine-war-has-taught-us-about-power-global-tech-companies'],
		['XXXXX','XXXXX','RUS-UKR','XXXX','XXXXX'],
		['XXXXX','XXXXX','RUS-UKR','XXXX','XXXXX'],
		['XXXXX','XXXXX','RUS-UKR','XXXX','XXXXX'],
		['XXXXX','XXXXX','RUS-UKR','XXXX','XXXXX'],

		// ['XXXXX','XXXXX','RUS-UKR','XXXX','XXXXX'],
		// ['XXXXX','XXXXX','XXXXX','XXXX','XXXXX'],
		// ['XXXXX','XXXXX','XXXXX','XXXX','XXXXX'],
	];


$(document).ready(function() {	$('#dynamic').html( '<table cellpadding="0" style="width:100%" cellspacing="0" border="0" class="display" id="example"></table>' );
	$('#example').dataTable( {
		// "scrollY"  : 500, // no. of Y-pixels
		"paging"   : false,
		"order": [[ 2, 'asc' ], [ 3, 'asc' ]],
		"aaData"   : aDataSet,
		"oSearch": {"sSearch": "RUS-UKR"},
		"aoColumns": [
			{ "sTitle": "Name", "sWidth": "30%" },
			{ "sTitle": "Description", "sWidth": "30%" },
			{ "sTitle": "Domain", "sWidth": "5%" }, // AI, Cyber, Space, Defence & Aerospace, 5G, Cloud, Autonomy. Robotics
			{ "sTitle": "Category", "sWidth": "10%" }, // Algorithms, Policy, Patent, Commercial, Government
			{ "sTitle": "URL", "sWidth": "10%",
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
