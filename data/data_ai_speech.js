	var aDataSet = [
		/* auto-generated - START */
		['1','2000 HUB5 English','2000 HUB5 English Evaluation Transcripts was developed by the Linguistic Data Consortium (LDC)  and consists of transcripts of 40 English telephone conversations used in the 2000 HUB5 evaluation sponsored by NIST (National Institute of Standards and Technology).  The Hub5 evaluation series focused on conversational speech over the telephone with the particular task of transcribing conversational speech into text. Its goals were to explore promising new areas in the recognition of conversational speech, to develop advanced technology incorporating those ideas and to measure the performance of new technology.','Speech','','https://catalog.ldc.upenn.edu/LDC2002T43',],
		['2','CHIME','The CHiME-5 data consists of 20 parties each recorded in a different home.','Speech','','http://spandh.dcs.shef.ac.uk/chime_challenge/data.html',],
		['3','Common Voice','Common Voice (12 GB is size) is a corpus of speech data read by users on the Common Voice website, and based on text from a number of public domain sources like user-submitted blog posts, old books, movies, and other public speech corpora. Its primary purpose is to enable the training and testing of automatic speech recognition (ASR) systems.','Speech','','https://www.kaggle.com/mozillaorg/common-voice/home',],
		['4	Conversational Datasets	"Provides tools to create reproducible datasets for training and evaluating models of conversational response. This includes: 1) Reddit - 3.7 billion comments structured in threaded conversations, 2) OpenSubtitles - over 400 million lines from movie and television subtitles (available in English and other languages), 3) Amazon QA - over 3.6 million question-response pairs in the context of Amazon products','','','','','',],
		['"','Speech','','https://github.com/PolyAI-LDN/conversational-datasets','','',],
		['5','Flickr Audio Caption Corpus','40,000 spoken captions of 8,000 natural images, 4.2 GB in size. This corpus was collected in 2015 to investigate multi-modal learning schemes for unsupervised speech pattern discovery.','Speech','','https://groups.csail.mit.edu/sls/downloads/flickraudio/',],
		['6','Free Spoken Digit Dataset (FSDD)','A simple audio/speech dataset consisting of recordings of spoken digits. The recordings are trimmed so that they are silent at the beginnings and ends. 3 speakers, 1,500 recordings (50 of each digit per speaker), English pronunciations','Speech','1500','https://github.com/Jakobovski/free-spoken-digit-dataset',],
		['7','Google AudioSet','AudioSet consists of an expanding ontology of 632 audio event classes and a collection of 2,084,320 human-labeled 10-second sound clips drawn from YouTube videos. The ontology is specified as a hierarchical graph of event categories, covering a wide range of human and animal sounds, musical instruments and genres, and common everyday environmental sounds.','Speech','2 million, 632 classes','https://research.google.com/audioset/',],
		['8','ISOLET Data Set','This 38.7 GB dataset helps predict which letter-name was spoken?�"?a simple classification task.','Speech','','https://data.world/uci/isolet',],
		['9','LibriSpeech','LibriSpeech is a corpus of approximately 1000 hours of 16kHz read English speech. The data has been sourced from audio books from the LibriVox project and is 60 GB in size.','Speech','1000 hours','http://www.openslr.org/12/',],
		['10','Multimodal EmotionLines Dataset (MELD)','Multimodal EmotionLines Dataset (MELD) has been created by enhancing and extending EmotionLines dataset. MELD contains the same dialogue instances available in EmotionLines, but it also encompasses audio and visual modality along with text. MELD has more than 1400 dialogues and 13000 utterances from Friends TV series. Each utterance in a dialogue has been labeled with�" Anger, Disgust, Sadness, Joy, Neutral, Surprise and Fear. ','Speech','1400 dialogues,  13000 utterances ','https://github.com/SenticNet/MELD',],
		['11','Speech Commands Dataset','The dataset (1.4 GB) has 65,000 one-second long utterances of 30 short words, by thousands of different people, contributed by members of the public through the AIY website. It’s released under a Creative Commons-BY 4.0 license and will continue to grow in future releases as more contributions are received. The dataset is designed to let you build basic but useful voice interfaces for applications, with common words like “Yes”, “No”, digits and directions included. The infrastructure used to create the data has been open sourced too, and we hope to see it used by the wider community to create their own versions, especially to cover under served languages and applications.','Speech','65000, 30 short words','https://ai.googleblog.com/2017/08/launching-speech-commands-dataset.html, https://www.kaggle.com/c/tensorflow-speech-recognition-challenge',],
		['12','Spoken Wikipedia Corpora','Spoken Wikipedia Corpora is a corpus of aligned spoken Wikipedia articles from the English, German, and Dutch Wikipedia. Hundreds of hours of aligned audio and annotations can be mapped back to the original HTML. The entire set is about 38 GB in size available in both audio and without audio format.','Speech','','https://nats.gitlab.io/swc/',],
		['13','TED-LIUM','Audio transcription of TED talks. 1495 TED talks audio recordings along with full-text transcriptions of those recordings, created by Laboratoire d’Informatique de l’Université du Maine (LIUM).','Speech','1495','http://www.openslr.org/51/',],
		['14','TIMIT','The TIMIT corpus of read speech is designed to provide speech data for acoustic-phonetic studies and for the development and evaluation of automatic speech recognition systems. TIMIT contains broadband recordings of 630 speakers of eight major dialects of American English, each reading ten phonetically rich sentences. The TIMIT corpus includes time-aligned orthographic, phonetic and word transcriptions as well as a 16-bit, 16kHz speech waveform file for each utterance. Corpus design was a joint effort among the Massachusetts Institute of Technology (MIT), SRI International (SRI) and Texas Instruments, Inc. (TI). The speech was recorded at TI, transcribed at MIT and verified and prepared for CD-ROM production by the National Institute of Standards and Technology (NIST).','Speech','630 speakers','https://catalog.ldc.upenn.edu/LDC93S1',],
		['15','VoxCeleb','VoxCeleb is a large-scale speaker identification dataset. It contains around 100,000 utterances by 1,251 celebrities, extracted from You Tube videos. The data is mostly gender balanced (males comprise of 55%). The celebrities span a diverse range of accents, professions, and age. There is no overlap between the development and test sets. It’s an intriguing use case for isolating and identifying which superstar the voice belongs to. This set is 150 MB in size and has about 2000 hours of speech.','Speech','1251, 100000 utterances','http://www.robots.ox.ac.uk/~vgg/data/voxceleb/',],
		['16','VoxForge','VoxForge was set up to collect transcribed speech for use in Open Source Speech Recognition Engines ("SRE"s) such as such as ISIP, HTK, Julius and Sphinx, running on Linux, Windows and Mac.','Speech','','http://www.voxforge.org/',],
		['17','Zero Resource Speech Challenge','The ultimate goal of the Zero Resource Speech Challenge is to construct a system that learns an end-to-end Spoken Dialog (SD) system, in an unknown language, from scratch, using only information available to a language learning infant. “Zero resource” refers to zero linguistic expertise (e.g., orthographic/linguistic transcriptions), not zero information besides audio (visual, limited human feedback, etc). The fact that 4-year-olds spontaneously learn a language without supervision from language experts show that this goal is theoretically reachable.','Speech','','https://zerospeech.com/, https://download.zerospeech.com/, https://github.com/bootphon/zerospeech2017',],
		['18','Free Music Archive (FMA)','FMA is a dataset for music analysis. The dataset consists of full-length and HQ audio, pre-computed features, and track and user-level metadata. ','Music','106,574 tracks from 16,341 artists and 14,854 albums','https://github.com/mdeff/fma',],
		['19','MAESTRO Dataset','MAESTRO (MIDI and Audio Edited for Synchronous TRacks and Organization) is a dataset composed of over 200 hours of virtuosic piano performances captured with fine alignment (~3 ms) between note labels and audio waveforms.','Music','200 hours','https://magenta.tensorflow.org/datasets/maestro',],
		['20','MIDI Aligned Piano Sounds (MAPS) Database','A piano database for multipitch estimation and automatic transcription of music for research on multi-F0 estimation and automatic transcription.','Music','','http://www.tsi.telecom-paristech.fr/aao/en/2010/07/08/maps-database-a-piano-database-for-multipitch-estimation-and-automatic-transcription-of-music/',],
		['21','MusicNet','MusicNet is a collection of 330 freely-licensed classical music recordings, together with over 1 million annotated labels indicating the precise time of each note in every recording, the instrument that plays each note, and the note s position in the metrical structure of the composition. The labels are acquired from musical scores aligned to recordings by dynamic time warping. The labels are verified by trained musicians; we estimate a labeling error rate of 4%.','Music','330','https://homes.cs.washington.edu/~thickstn/musicnet.html',],
		['22','Million Song ','The Million Song Dataset is a freely-available collection of audio features and meta-data for a million contemporary popular music tracks. The core of the dataset is the feature analysis and meta-data for one million songs. The dataset does not include any audio, only the derived features. The sample audio can be fetched from services like 7digital, using the code provided by Columbia University. The size of this dataset is about 280 GB.','Music','1 million','https://labrosa.ee.columbia.edu/millionsong/pages/getting-dataset',],
		['23','Urban Sound Classification','The dataset (6 GB) is called UrbanSound and contains 8732 labeled sound excerpts (<=4s) of urban sounds from 10 classes namely: Air Conditioner, Car Horn, Children Playing, Dog bark, Drilling Engine, Idling, Gun Shot, Jackhammer, Siren and Street Music The attributes of data are as follows: ID?�"?Unique ID of sound excerpt Class�"type of sound.','Sound','8732','https://www.kaggle.com/pavansanagapati/urban-sound-classification',],
		['24','Urban Sound Dataset','This dataset contains 1302 labeled sound recordings. Each recording is labeled with the start and end times of sound events from 10 classes: air_conditioner, car_horn, children_playing, dog_bark, drilling, enginge_idling, gun_shot, jackhammer, siren, and street_music. Each recording may contain multiple sound events, but for each file, only events from a single class are labeled. The classes are drawn from the urban sound taxonomy.','Sound','1302','https://urbansounddataset.weebly.com/urbansound.html',],
		/* auto-generated - END */
	];


$(document).ready(function() {	$('#dynamic').html( '<table cellpadding="0" style="width:100%" cellspacing="0" border="0" class="display" id="example"></table>' );
	$('#example').dataTable( {
		"aaData": aDataSet,
		"aoColumns": [
			{ "sTitle": "S/N", "sWidth": "2%" },
			{ "sTitle": "Name", "sWidth": "10%" },
			{ "sTitle": "Description", "sWidth": "10%" },
			{ "sTitle": "Type", "sWidth": "2%" },
			{ "sTitle": "Records", "sWidth": "2%" },
			{ "sTitle": "URL", "sWidth": "10%" },
		]
		} );
	} );
