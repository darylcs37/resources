	var aDataSet = [
		/* auto-generated - START */
		['1','AceMap','Acemap Knowledge Graph (AceKG), supported by Acemap, is now open to everyone for research and non-commercial use. AceKG describes 114.30 million academic entities based on a consistent ontology, including 61,704,089 papers, 52,498,428 authors, 50,233 research fields, 19,843 academic institutes, 22,744 journals, 1,278 conferences and 3 special affiliations. In total, AceKG consists of 3.13 billion pieces of relationship information.','Graph','114.30 million','https://acemap.cn/acekg/index , https://www.acemap.info/csAuthor',],
		['2','Aminer','ArnetMiner (AMiner) is designed to search and perform data mining operations against academic publications on the Internet, using social network analysis to identify connections between researchers, conferences, and publications. This allows it to provide services such as expert finding, geographic search, trend analysis, reviewer recommendation, association search, course search, academic performance evaluation, and topic modeling.  ArnetMiner was created as a research project in social influence analysis, social network ranking, and social network extraction. A number of peer-reviewed papers have been published arising from the development of the system. It has been in operation for more than three years, and has indexed 130,000,000 researchers and more than 200 million publications. The research was funded by the Chinese National High-tech R&D Program and the National Science Foundation of China.  ArnetMiner is commonly used in academia to identify relationships between and draw statistical correlations about research and researchers. It has attracted more than 10 million independent IP accesses from 220 countries and regions. The product has been used in Elsevier s SciVerse platform, and academic conferences such as SIGKDD, ICDM, PKDD, WSDM. ','Graph','130 million','https://www.aminer.cn/, https://www.aminer.cn/data',],
		['3','ATOMIC','Knowledge Graph - An Atlas of Machine Commonsense for If-Then Reasoning, contains 880,000 triples for AI systems to reason about causes and effects of everyday situations','Graph','880000','https://homes.cs.washington.edu/~msap/atomic/',],
		['4','Linked Open Data Cloud','The dataset currently contains 1,239 datasets with 16,147 links (as of March 2019)','','1239','https://schema.org/docs/full.html, https://lod-cloud.net/, https://lod-cloud.net/datasets',],
		['5','Open Academic Graph (OAG)','Open Academic Graph (OAG) is a large knowledge graph unifying two billion-scale academic graphs: Microsoft Academic Graph (MAG) and AMiner. In mid 2017, we published OAG v1, which contains 166,192,182 papers from MAG and 154,771,162 papers from AMiner (see below) and generated 64,639,608 linking (matching) relations between the two graphs. This time, in OAG v2, author, venue and newer publication data and the corresponding matchings are available.','Graph','166 million','https://www.openacademic.ai/oag/, https://www.microsoft.com/en-us/research/project/microsoft-academic-graph/, http://ma-graph.org/, https://www.aminer.cn/open-academic-graph, ',],
		['6','SalesForce CommonSenseQA ','CommonsenseQA is a new multiple-choice question answering dataset that requires different types of commonsense knowledge to predict the correct answers.  It contains 12,102 questions with one correct answer and four distractor answers.  The dataset is provided in two major training/validation/testing set splits: "Random split" which is the main evaluation split, and "Question token split", see paper for details. ','Graph','12102','https://github.com/salesforce/cos-e, https://www.tau-nlp.org/commonsenseqa',],
		['7','Stanford','Stanford Large Network Dataset Collection - SNAP','Network','281903 Nodes, 2312497 Edges ','https://snap.stanford.edu/data/, ',],
		['8','Network repository ','Network repository with visual analytic tools. Network Repository is the first data repository with interactive visual analytic and statistical techniques for exploring data in real-time over the web. We provide various collections of graph data sets from a wide range of types. ','Network','77 datasets','http://networkrepository.com/soc.php',],
		/* auto-generated - END */
	];


$(document).ready(function() {	$('#dynamic').html( '<table cellpadding="0" style="width:100%" cellspacing="0" border="0" class="display" id="example"></table>' );
	$('#example').dataTable( {
		"aaData": aDataSet,
		"aoColumns": [
			{ "sTitle": "S/N", "sWidth": "2%" },
			{ "sTitle": "Name", "sWidth": "5%" },
			{ "sTitle": "Description", "sWidth": "10%" },
			{ "sTitle": "Type", "sWidth": "5%" },
			{ "sTitle": "Records", "sWidth": "5%" },
			{ "sTitle": "URL", "sWidth": "10%" },
		]
		} );
	} );
