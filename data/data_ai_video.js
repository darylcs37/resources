	var aDataSet = [
		/* auto-generated - START */
		['1','Caltech Pedestrian Detection Benchmark','The Caltech Pedestrian Dataset consists of approximately 10 hours of 640x480 30Hz video taken from a vehicle driving through regular traffic in an urban environment. About 250,000 frames (in 137 approximately minute long segments) with a total of 350,000 bounding boxes and 2300 unique pedestrians were annotated. The annotation includes temporal correspondence between bounding boxes and detailed occlusion labels.','Video','10 hours of 640x480 30Hz video','http://www.vision.caltech.edu/Image_Datasets/CaltechPedestrians/, http://www.vision.caltech.edu/Image_Datasets/, http://www.vision.caltech.edu/archive.html',],
		['2','Continual Learning and Object Recognition, Detection, Segmentation (CORe50)','CORe50, specifically designed for (C)ontinual (O)bject (Re)cognition, is a collection of 50 domestic objects belonging to 10 categories: plug adapters, mobile phones, scissors, light bulbs, cans, glasses, balls, markers, cups and remote controls. Classification can be performed at object level (50 classes) or at category level (10 classes). The first task (the default one) is much more challenging because objects of the same category are very difficult to be distinguished under certain poses. The dataset has been collected in 11 distinct sessions (8 indoor and 3 outdoor) characterized by different backgrounds and lighting. For each session and for each object, a 15 seconds video (at 20 fps) has been recorded with a Kinect 2.0 sensor delivering 300 RGB-D frames. ','Image','50 domestic objects in 10 categories','https://vlomonaco.github.io/core50/',],
		['3','DeepMind Kinetics','A large-scale, high-quality dataset of URL links to approximately 650,000 video clips that covers 700 human action classes, including human-object interactions such as playing instruments, as well as human-human interactions such as shaking hands and hugging. Each action class has at least 600 video clips. Each clip is human annotated with a single action class and lasts around 10s.','','650,000','https://deepmind.com/research/open-source/kinetics, http://activity-net.org/challenges/2017/index.html',],
		['4','ERA','Along with the now widespread availability of unmanned aerial vehicles (UAVs), large volumes of aerial videos have been produced. It is unrealistic for humans to screen such big data and understand their contents. Hence methodological research on the automatic understanding of UAV videos is of paramount importance. In this work, we introduce a novel task of event recognition in unconstrained aerial videos in the remote sensing community and present a large-scale, human-annotated dataset, named ERA (Event Recognition in Aerial videos), consisting of 2,864 videos each with a label from 25 different classes corresponding to an event unfolding 5 seconds. The ERA dataset is designed to have a significant intra-class variation and inter-class similarity and captures dynamic events in different environments and at different scales. ','Video','2,864','https://lcmou.github.io/ERA_Dataset/, https://medium.com/syncedreview/whats-happening-down-there-new-aerial-video-event-recognition-dataset-and-dl-benchmark-5dc815ce5a28',],
		['5','YouTube-8M','YouTube-8M is a large-scale labeled video dataset that consists of millions of YouTube video IDs, with high-quality machine-generated annotations from a diverse vocabulary of 3,800+ visual entities. It comes with precomputed audio-visual features from billions of frames and audio segments, designed to fit on a single hard disk. T','Video','3800','https://research.google.com/youtube8m/',],
		['6','YouTube Faces  Database','A database of face videos designed for studying the problem of unconstrained face recognition in videos.','Video','3,425 videos of 1,595 different people','https://www.cs.tau.ac.il/~wolf/ytfaces/',],
		['7','Object Tracking Dataset','TrackingNet - No. of videos=30,132 (train) + 511 (test), annotations=14,205,677 (train) + 225,589 (test), Year: 2018,  MOT17 - No. of videos=21 (train) + 21 (test), annotations=564,228, Year: 2017, NfS - No. of videos: 100, annotations=383,000, Year: 2017','Video','3 datasets','https://neurohive.io/en/datasets/new-datasets-for-object-tracking/, https://motchallenge.net/data/MOT20/',],
		['8',' Visual Tracker Benchmark ','Data and code of the benchmark evaluation of online visual tracking algorithms.','Video','','http://www.visual-tracking.net',],
		/* auto-generated - END */
	];


$(document).ready(function() {	$('#dynamic').html( '<table cellpadding="0" style="width:100%" cellspacing="0" border="0" class="display" id="example"></table>' );
	$('#example').dataTable( {
		"aaData": aDataSet,
		"aoColumns": [
			{ "sTitle": "S/N", "sWidth": "2%" },
			{ "sTitle": "Name", "sWidth": "10%" },
			{ "sTitle": "Description", "sWidth": "10%" },
			{ "sTitle": "Type", "sWidth": "10%" },
			{ "sTitle": "Records", "sWidth": "2%" },
			{ "sTitle": "URL", "sWidth": "2%" },
		]
		} );
	} );
