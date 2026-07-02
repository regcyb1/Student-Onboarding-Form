/*
 * locationData.js
 * -------------------------------------------------------------
 * Nepal location data: Province -> District -> [Municipalities].
 *
 * Complete dataset: 7 Provinces, 77 Districts, 753 Local Levels
 * (Metropolitan Cities, Sub-Metropolitan Cities, Municipalities,
 * and Rural Municipalities), sourced from Nepal's official
 * federal administrative structure (post-2017 restructuring).
 *
 * HOW TO EXTEND:
 *   1. Find (or add) the Province key.
 *   2. Inside it, find (or add) the District key.
 *   3. Push municipality strings into the District array.
 *
 * The dropdown logic in script.js reads this object dynamically,
 * so any data you add here shows up automatically. No code change
 * needed elsewhere.
 * -------------------------------------------------------------
 */

const locationData = {
  "Koshi Province": {
    "Bhojpur": [
      "Shadanand Municipality",
      "Bhojpur Municipality",
      "Hatuwagadhi Rural Municipality",
      "Ramprasad Rai Rural Municipality",
      "Aamchok Rural Municipality",
      "Tyamke Maiyum Rural Municipality",
      "Arun Rural Municipality",
      "Pauwadungma Rural Municipality",
      "Salpasilichho Rural Municipality"
    ],
    "Dhankuta": [
      "Dhankuta Municipality",
      "Pakhribas Municipality",
      "Mahalaxmi Municipality",
      "Sangurigadhi Rural Municipality",
      "Chaubise Rural Municipality",
      "Sahidbhumi Rural Municipality",
      "Chhathar Jorpati Rural Municipality"
    ],
    "Ilam": [
      "Suryodaya Municipality",
      "Ilam Municipality",
      "Deumai Municipality",
      "Maijogmai Rural Municipality",
      "Phakphokthum Rural Municipality",
      "Mai Municipality",
      "Chulachuli Rural Municipality",
      "Rong Rural Municipality",
      "Mangsebung Rural Municipality",
      "Sandakpur Rural Municipality"
    ],
    "Jhapa": [
      "Mechinagar Municipality",
      "Birtamod Municipality",
      "Damak Municipality",
      "Bhadrapur Municipality",
      "Shivasatakshi Municipality",
      "Arjundhara Municipality",
      "Gauradaha Municipality",
      "Kankai Municipality",
      "Kamal Rural Municipality",
      "Buddha Shanti Rural Municipality",
      "Kachankawal Rural Municipality",
      "Jhapa Rural Municipality",
      "Barhadashi Rural Municipality",
      "Gaurigunj Rural Municipality",
      "Haldibari Rural Municipality"
    ],
    "Khotang": [
      "Diktel Rupakot Majhuwagadhi Municipality",
      "Halesi Tuwachung Municipality",
      "Khotehang Rural Municipality",
      "Diprung Chuichumma Rural Municipality",
      "Aiselukharka Rural Municipality",
      "Jantedhunga Rural Municipality",
      "Kepilasgadhi Rural Municipality",
      "Barahpokhari Rural Municipality",
      "Rawa Besi Rural Municipality",
      "Sakela Rural Municipality"
    ],
    "Morang": [
      "Sundar Haraicha Municipality",
      "Belbari Municipality",
      "Pathari Shanischare Municipality",
      "Ratuwamai Municipality",
      "Urlabari Municipality",
      "Rangeli Municipality",
      "Sunawarshi Municipality",
      "Letang Municipality",
      "Biratnagar Metropolitan City",
      "Jahada Rural Municipality",
      "Budi Ganga Rural Municipality",
      "Katahari Rural Municipality",
      "Dhanpalthan Rural Municipality",
      "Kanepokhari Rural Municipality",
      "Gramthan Rural Municipality",
      "Kerabari Rural Municipality",
      "Miklajung Rural Municipality"
    ],
    "Okhaldhunga": [
      "Siddhicharan Municipality",
      "Khiji Demba Rural Municipality",
      "Chisankhugadhi Rural Municipality",
      "Molung Rural Municipality",
      "Sunkoshi Rural Municipality",
      "Champadevi Rural Municipality",
      "Manebhanjyang Rural Municipality",
      "Likhu Rural Municipality"
    ],
    "Pachthar": [
      "Phidim Municipality",
      "Miklajung Rural Municipality",
      "Phalgunanda Rural Municipality",
      "Hilihang Rural Municipality",
      "Phalelung Rural Municipality",
      "Yangwarak Rural Municipality",
      "Kummayak Rural Municipality",
      "Tumbewa Rural Municipality"
    ],
    "Sankhuwasabha": [
      "Khandbari Municipality",
      "Chainpur Municipality",
      "Dharmadevi Municipality",
      "Panchkhapan Municipality",
      "Madi Municipality",
      "Makalu Rural Municipality",
      "Silichong Rural Municipality",
      "Sabhapokhari Rural Municipality",
      "Chichila Rural Municipality",
      "BhotKhola Rural Municipality"
    ],
    "Solukhumbu": [
      "Solu Dudhkunda Municipality",
      "Mapya Dudhkoshi Rural Municipality",
      "Necha Salyan Rural Municipality",
      "Thulung Dudhkoshi Rural Municipality",
      "Maha Kulung Rural Municipality",
      "Sotang Rural Municipality",
      "Khumbu PasangLhamu Rural Municipality",
      "Likhu Pike Rural Municipality"
    ],
    "Sunsari": [
      "BarahaKshetra Municipality",
      "Inaruwa Municipality",
      "Duhabi Municipality",
      "Ramdhuni Municipality",
      "Itahari Sub-Metropolitan City",
      "Dharan Sub-Metropolitan City",
      "Koshi Rural Municipality",
      "Harinagar Rural Municipality",
      "Bhokraha Narsingh Rural Municipality",
      "Dewangunj Rural Municipality",
      "Gadhi Rural Municipality",
      "Barju Rural Municipality"
    ],
    "Taplejung": [
      "Phungling Municipality",
      "Sirijangha Rural Municipality",
      "Aathrai Triveni Rural Municipality",
      "Pathibhara Yangwarak Rural Municipality",
      "Meringden Rural Municipality",
      "Sidingwa Rural Municipality",
      "Phaktanglung Rural Municipality",
      "Maiwa Khola Rural Municipality",
      "Mikwa Khola Rural Municipality"
    ],
    "Terhathum": [
      "Myanglung Municipality",
      "Laligurans Municipality",
      "Aathrai Rural Municipality",
      "Phedap Rural Municipality",
      "Chhathar Rural Municipality",
      "Menchayayem Rural Municipality"
    ],
    "Udayapur": [
      "Triyuga Municipality",
      "Katari Municipality",
      "Chaudandigadhi Municipality",
      "Belaka Municipality",
      "Udayapurgadhi Rural Municipality",
      "Rautamai Rural Municipality",
      "Tapli Rural Municipality",
      "Limchungbung Rural Municipality"
    ]
  },

  "Madhesh Province": {
    "Parsa": [
      "Birgunj Metropolitan City",
      "Bahudarmai Municipality",
      "Parsagadhi Municipality",
      "Pokhariya Municipality",
      "Bindabasini Rural Municipality",
      "Dhobini Rural Municipality",
      "Chhipaharmai Rural Municipality",
      "Jagarnathpur Rural Municipality",
      "Jirabhawani Rural Municipality",
      "Kalikamai Rural Municipality",
      "Pakaha Mainpur Rural Municipality",
      "Paterwa Sugauli Rural Municipality",
      "Sakhuwa Prasauni Rural Municipality",
      "Thori Rural Municipality"
    ],
    "Bara": [
      "Kalaiya Sub-Metropolitan City",
      "Jitpur Simara Sub-Metropolitan City",
      "Kolhabi Municipality",
      "Nijgadh Municipality",
      "Mahagadhimai Municipality",
      "Simaraungadh Municipality",
      "Pacharauta Municipality",
      "Pheta Rural Municipality",
      "Bishrampur Rural Municipality",
      "Prasauni Rural Municipality",
      "Adarsh Kotwal Rural Municipality",
      "Karaiyamai Rural Municipality",
      "Devtal Rural Municipality",
      "Parwanipur Rural Municipality",
      "Baragadhi Rural Municipality",
      "Suwarna Rural Municipality"
    ],
    "Rautahat": [
      "Baudhimai Municipality",
      "Brindaban Municipality",
      "Chandrapur Municipality",
      "Dewahi Gonahi Municipality",
      "Gadhimai Municipality",
      "Guruda Municipality",
      "Gaur Municipality",
      "Gujara Municipality",
      "Ishanath Municipality",
      "Katahariya Municipality",
      "Madhav Narayan Municipality",
      "Maulapur Municipality",
      "Paroha Municipality",
      "Phatuwa Bijayapur Municipality",
      "Rajdevi Municipality",
      "Rajpur Municipality",
      "Durga Bhagwati Rural Municipality",
      "Yamunamai Rural Municipality"
    ],
    "Sarlahi": [
      "Bagmati Municipality",
      "Balara Municipality",
      "Barahathwa Municipality",
      "Godaita Municipality",
      "Hariwan Municipality",
      "Haripur Municipality",
      "Haripurwa Municipality",
      "Ishowrpur Municipality",
      "Kabilasi Municipality",
      "Lalbandi Municipality",
      "Malangawa Municipality",
      "Basbariya Rural Municipality",
      "Bisnu Rural Municipality",
      "Brahampuri Rural Municipality",
      "Chakraghatta Rural Municipality",
      "Chandranagar Rural Municipality",
      "Dhankaul Rural Municipality",
      "Kaudena Rural Municipality",
      "Parsa Rural Municipality",
      "Ramnagar Rural Municipality"
    ],
    "Siraha": [
      "Lahan Municipality",
      "Dhangadhimai Municipality",
      "Siraha Municipality",
      "Golbazar Municipality",
      "Mirchaiya Municipality",
      "Kalyanpur Municipality",
      "Karjanha Municipality",
      "Sukhipur Municipality",
      "Bhagwanpur Rural Municipality",
      "Aurahi Rural Municipality",
      "Bishnupur Rural Municipality",
      "Bariyarpatti Rural Municipality",
      "Lakshmipur Patari Rural Municipality",
      "Naraha Rural Municipality",
      "SakhuwanankarKatti Rural Municipality",
      "Arnama Rural Municipality",
      "Navarajpur Rural Municipality"
    ],
    "Dhanusha": [
      "Janakpurdham Sub-Metropolitan City",
      "Chhireshwarnath Municipality",
      "Ganeshman Charnath Municipality",
      "Dhanushadham Municipality",
      "Nagarain Municipality",
      "Bideha Municipality",
      "Mithila Municipality",
      "Sahidnagar Municipality",
      "Sabaila Municipality",
      "Kamala Municipality",
      "MithilaBihari Municipality",
      "Hansapur Municipality",
      "Janaknandani Rural Municipality",
      "Bateshwar Rural Municipality",
      "Mukhiyapatti Musharniya Rural Municipality",
      "Lakshminya Rural Municipality",
      "Aaurahi Rural Municipality",
      "Dhanauji Rural Municipality"
    ],
    "Saptari": [
      "Bodebarsain Municipality",
      "Dakneshwori Municipality",
      "Hanumannagar Kankalini Municipality",
      "Kanchanrup Municipality",
      "Khadak Municipality",
      "Shambhunath Municipality",
      "Saptakoshi Municipality",
      "Surunga Municipality",
      "Rajbiraj Municipality",
      "Agnisaira Krishnasavaran Rural Municipality",
      "Balan-Bihul Rural Municipality",
      "Rajgadh Rural Municipality",
      "Bishnupur Rural Municipality",
      "Chhinnamasta Rural Municipality",
      "Mahadeva Rural Municipality",
      "Rupani Rural Municipality",
      "Tilathi Koiladi Rural Municipality",
      "Tirhut Rural Municipality"
    ],
    "Mahottari": [
      "Aaurahi Municipality",
      "Balawa Municipality",
      "Bardibas Municipality",
      "Bhangaha Municipality",
      "Gaushala Municipality",
      "Jaleshor Municipality",
      "Loharpatti Municipality",
      "Manara Shiswa Municipality",
      "Matihani Municipality",
      "Ramgopalpur Municipality",
      "Ekdara Rural Municipality",
      "Mahottari Rural Municipality",
      "Pipara Rural Municipality",
      "Samsi Rural Municipality",
      "Sonama Rural Municipality"
    ]
  },

  "Bagmati Province": {
    "Bhaktapur": [
      "Bhaktapur Municipality",
      "Changunarayan Municipality",
      "Suryabinayak Municipality",
      "Madhyapur Thimi Municipality"
    ],
    "Chitwan": [
      "Bharatpur Metropolitan City",
      "Kalika Municipality",
      "Khairhani Municipality",
      "Madi Municipality",
      "Ratnagar Municipality",
      "Rapti Municipality",
      "Ichchhakamana Rural Municipality"
    ],
    "Dhading": [
      "Dhunibeshi Municipality",
      "Nilkantha Municipality",
      "Khaniyabas Rural Municipality",
      "Gajuri Rural Municipality",
      "Galchhi Rural Municipality",
      "Gangajamuna Rural Municipality",
      "Jwalamukhi Rural Municipality",
      "Thakre Rural Municipality",
      "Netrawati Dabjong Rural Municipality",
      "Benighat Rorang Rural Municipality",
      "Rubi Valley Rural Municipality",
      "Siddhalek Rural Municipality",
      "Tripurasundari Rural Municipality"
    ],
    "Dolakha": [
      "Bhimeswor Municipality",
      "Jiri Municipality",
      "Kalinchok Rural Municipality",
      "Melung Rural Municipality",
      "Bigu Rural Municipality",
      "Gaurishankar Rural Municipality",
      "Baiteshowr Rural Municipality",
      "Sailung Rural Municipality",
      "Tamakoshi Rural Municipality"
    ],
    "Kathmandu": [
      "Kathmandu Metropolitan City",
      "Gokarneshwar Municipality",
      "Kirtipur Municipality",
      "Kageshwari-Manohara Municipality",
      "Chandragiri Municipality",
      "Tokha Municipality",
      "Tarakeshwar Municipality",
      "Dakshinkali Municipality",
      "Nagarjun Municipality",
      "Budhalikantha Municipality",
      "Shankharapur Municipality"
    ],
    "Kavrepalanchok": [
      "Dhulikhel Municipality",
      "Namobuddha Municipality",
      "Panauti Municipality",
      "Panchkhal Municipality",
      "Banepa Municipality",
      "Mandandeupur Municipality",
      "Khani Khola Rural Municipality",
      "Chauri Deurali Rural Municipality",
      "Temal Rural Municipality",
      "Bethanchok Rural Municipality",
      "Bhumlu Rural Municipality",
      "Mahabharat Rural Municipality",
      "Roshi Rural Municipality"
    ],
    "Lalitpur": [
      "Lalitpur Metropolitan City",
      "Mahalaxmi Municipality",
      "Godawari Municipality",
      "Konjyosom Rural Municipality",
      "Bagmati Rural Municipality",
      "Mahankal Rural Municipality"
    ],
    "Makwanpur": [
      "Hetauda Sub-Metropolitan City",
      "Thaha Municipality",
      "Bhimphedi Rural Municipality",
      "Makawanpurgadhi Rural Municipality",
      "Manahari Rural Municipality",
      "Raksirang Rural Municipality",
      "Bakaiya Rural Municipality",
      "Bagmati Rural Municipality",
      "Kailash Rural Municipality",
      "Indrasarowar Rural Municipality"
    ],
    "Nuwakot": [
      "Bidur Municipality",
      "Belkotgadhi Municipality",
      "Kakani Rural Municipality",
      "Panchakanya Rural Municipality",
      "Likhu Rural Municipality",
      "Dupcheshwar Rural Municipality",
      "Shivapuri Rural Municipality",
      "Tadi Rural Municipality",
      "Suryagadhi Rural Municipality",
      "Tarkeshwar Rural Municipality",
      "Kispang Rural Municipality",
      "Myagang Rural Municipality"
    ],
    "Ramechap": [
      "Manthali Municipality",
      "Ramechhap Municipality",
      "Umakunda Rural Municipality",
      "Khandadevi Rural Municipality",
      "Doramba Rural Municipality",
      "Gokulganga Rural Municipality",
      "LikhuTamakoshi Rural Municipality",
      "Sunapati Rural Municipality"
    ],
    "Rasuwa": [
      "Kalika Rural Municipality",
      "Gosaikunda Rural Municipality",
      "Naukunda Rural Municipality",
      "Parbatikunda Rural Municipality",
      "Uttargaya Rural Municipality"
    ],
    "Sindhuli": [
      "Kamalamai Municipality",
      "Dudhauli Municipality",
      "Sunkoshi Rural Municipality",
      "Hariharpurgadhi Rural Municipality",
      "Tinpatan Rural Municipality",
      "Marin Rural Municipality",
      "Golanjor Rural Municipality",
      "Phikkal Rural Municipality",
      "Ghyanglekh Rural Municipality"
    ],
    "Sindhupalchok": [
      "Chautara Sangachowkgadi Municipality",
      "Bahrabise Municipality",
      "Melamchi Municipality",
      "Balephi Rural Municipality",
      "Sunkoshi Rural Municipality",
      "Indrawati Rural Municipality",
      "Jugal Rural Municipality",
      "Panchpokhari Rural Municipality",
      "Bhotekoshi Rural Municipality",
      "Lisankhu Rural Municipality",
      "Helambu Rural Municipality",
      "Tripurasundari Rural Municipality"
    ]
  },

  "Gandaki Province": {
    "Baglung": [
      "Baglung Municipality",
      "Dhorpatan Municipality",
      "Galkot Municipality",
      "Jaimuni Municipality",
      "Bareng Rural Municipality",
      "Khathekhola Rural Municipality",
      "Taman Khola Rural Municipality",
      "Tara Khola Rural Municipality",
      "Nishi Khola Rural Municipality",
      "Badigad Rural Municipality"
    ],
    "Gorkha": [
      "Gorkha Municipality",
      "Palungtar Municipality",
      "Sulikot Rural Municipality",
      "Siranchowk Rural Municipality",
      "Ajirkot Rural Municipality",
      "Chumnubri Rural Municipality",
      "Dharche Rural Municipality",
      "Bhimsen Thapa Rural Municipality",
      "Sahid Lakhan Rural Municipality",
      "Aarughat Rural Municipality",
      "Gandaki Rural Municipality"
    ],
    "Kaski": [
      "Pokhara Metropolitan City",
      "Annapurna Rural Municipality",
      "Machhapuchchhre Rural Municipality",
      "Madi Rural Municipality",
      "Rupa Rural Municipality"
    ],
    "Lamjung": [
      "Besisahar Municipality",
      "Madhya Nepal Municipality",
      "Rainas Municipality",
      "Sundarbazar Municipality",
      "Dordi Rural Municipality",
      "Dudhpokhari Rural Municipality",
      "Kwhlosothar Rural Municipality",
      "Marsyangdi Rural Municipality"
    ],
    "Manang": [
      "Chame Rural Municipality",
      "Nason Rural Municipality",
      "NarpaBhumi Rural Municipality",
      "Manang Ngisyang Rural Municipality"
    ],
    "Mustang": [
      "Gharpajhong Rural Municipality",
      "Thasang Rural Municipality",
      "Barhagaun Muktichhetra Rural Municipality",
      "Lomanthang Rural Municipality",
      "Lo-Ghekar Damodarkunda Rural Municipality"
    ],
    "Myagdi": [
      "Beni Municipality",
      "Annapurna Rural Municipality",
      "Dhaulagiri Rural Municipality",
      "Mangala Rural Municipality",
      "Malika Rural Municipality",
      "Raghuganga Rural Municipality"
    ],
    "Nawalpur": [
      "Kawasoti Municipality",
      "Gaindakot Municipality",
      "Devachuli Municipality",
      "Madhya Bindu Municipality",
      "Baudikali Rural Municipality",
      "Bulingtar Rural Municipality",
      "Binayi Tribeni Rural Municipality",
      "Hupsekot Rural Municipality"
    ],
    "Parwat": [
      "Kushma Municipality",
      "Phalewas Municipality",
      "Jaljala Rural Municipality",
      "Paiyun Rural Municipality",
      "Mahashila Rural Municipality",
      "Modi Rural Municipality",
      "Bihadi Rural Municipality"
    ],
    "Syangja": [
      "Galyang Municipality",
      "Chapakot Municipality",
      "Putalibazar Municipality",
      "Bheerkot Municipality",
      "Waling Municipality",
      "Arjun Chaupari Rural Municipality",
      "Aandhikhola Rural Municipality",
      "Kaligandaki Rural Municipality",
      "Phedikhola Rural Municipality",
      "Harinas Rural Municipality",
      "Biruwa Rural Municipality"
    ],
    "Tanahun": [
      "Bhanu Municipality",
      "Bhimad Municipality",
      "Byas Municipality",
      "Suklagandaki Municipality",
      "AnbuKhaireni Rural Municipality",
      "Devghat Rural Municipality",
      "Bandipur Rural Municipality",
      "Rishing Rural Municipality",
      "Ghiring Rural Municipality",
      "Myagde Rural Municipality"
    ]
  },

  "Lumbini Province": {
    "Kapilvastu": [
      "Kapilvastu Municipality",
      "Banganga Municipality",
      "Buddhabhumi Municipality",
      "Shivaraj Municipality",
      "Krishnanagar Municipality",
      "Maharajgunj Municipality",
      "Mayadevi Rural Municipality",
      "Yashodhara Rural Municipality",
      "Suddhodan Rural Municipality",
      "Bijaynagar Rural Municipality"
    ],
    "Parasi": [
      "Bardaghat Municipality",
      "Ramgram Municipality",
      "Sunwal Municipality",
      "Susta Rural Municipality",
      "Palhi Nandan Rural Municipality",
      "Pratappur Rural Municipality",
      "Sarawal Rural Municipality"
    ],
    "Rupandehi": [
      "Butwal Sub-Metropolitan City",
      "Devdaha Municipality",
      "Lumbini Sanskritik Municipality",
      "Sainamaina Municipality",
      "Siddharthanagar Municipality",
      "Tilottama Municipality",
      "Gaidahawa Rural Municipality",
      "Kanchan Rural Municipality",
      "Kotahimai Rural Municipality",
      "Marchawari Rural Municipality",
      "Mayadevi Rural Municipality",
      "Omsatiya Rural Municipality",
      "Rohini Rural Municipality",
      "Sammarimai Rural Municipality",
      "Siyari Rural Municipality",
      "Suddodhan Rural Municipality"
    ],
    "Arghakhanchi": [
      "Sandhikharka Municipality",
      "Sitganga Municipality",
      "Bhumikasthan Municipality",
      "Chhatradev Rural Municipality",
      "Panini Rural Municipality",
      "Malarani Rural Municipality"
    ],
    "Gulmi": [
      "Resunga Municipality",
      "Musikot Municipality",
      "Rurukshetra Rural Municipality",
      "Chhatrakot Rural Municipality",
      "Gulmidarbar Rural Municipality",
      "Chandrakot Rural Municipality",
      "Satyawati Rural Municipality",
      "Dhurkot Rural Municipality",
      "Kaligandaki Rural Municipality",
      "Isma Rural Municipality",
      "Malika Rural Municipality",
      "Madane Rural Municipality"
    ],
    "Palpa": [
      "Tansen Municipality",
      "Rampur Municipality",
      "Rainadevi Chhahara Rural Municipality",
      "Ripdikot Rural Municipality",
      "Bagnaskali Rural Municipality",
      "Rambha Rural Municipality",
      "Purbakhola Rural Municipality",
      "Nisdi Rural Municipality",
      "Mathagadhi Rural Municipality",
      "Tinahu Rural Municipality"
    ],
    "Dang": [
      "Ghorahi Sub-Metropolitan City",
      "Tulsipur Sub-Metropolitan City",
      "Lamahi Municipality",
      "Gadhawa Rural Municipality",
      "Rajpur Rural Municipality",
      "Shantinagar Rural Municipality",
      "Rapti Rural Municipality",
      "Banglachuli Rural Municipality",
      "Dangisharan Rural Municipality",
      "Babai Rural Municipality"
    ],
    "Pyuthan": [
      "Sworgadwari Municipality",
      "Pyuthan Municipality",
      "Mandavi Rural Municipality",
      "Sarumarani Rural Municipality",
      "Ayirawati Rural Municipality",
      "Mallarani Rural Municipality",
      "Jhimruk Rural Municipality",
      "Naubahini Rural Municipality",
      "Gaumukhi Rural Municipality"
    ],
    "Rolpa": [
      "Rolpa Municipality",
      "Runtigadi Rural Municipality",
      "Triveni Rural Municipality",
      "Sunil Smiriti Rural Municipality",
      "Lungri Rural Municipality",
      "Sunchhahari Rural Municipality",
      "Thawang Rural Municipality",
      "Madi Rural Municipality",
      "GangaDev Rural Municipality",
      "Pariwartan Rural Municipality"
    ],
    "Eastern Rukum": [
      "Putha Uttarganga Rural Municipality",
      "Bhume Rural Municipality",
      "Sisne Rural Municipality"
    ],
    "Banke": [
      "Nepalgunj Sub-Metropolitan City",
      "Kohalpur Municipality",
      "Rapti-Sonari Rural Municipality",
      "Narainapur Rural Municipality",
      "Duduwa Rural Municipality",
      "Janaki Rural Municipality",
      "Khajura Rural Municipality",
      "Baijanath Rural Municipality"
    ],
    "Bardiya": [
      "Gulariya Municipality",
      "Rajapur Municipality",
      "Madhuwan Municipality",
      "Thakurbaba Municipality",
      "Basgadhi Municipality",
      "Barbardiya Municipality",
      "Badhaiyatal Rural Municipality",
      "Geruwa Rural Municipality"
    ]
  },

  "Karnali Province": {
    "Western Rukum": [
      "Aathabiskot Municipality",
      "Musikot Municipality",
      "Chaurjahari Municipality",
      "SaniBheri Rural Municipality",
      "Triveni Rural Municipality",
      "Banphikot Rural Municipality"
    ],
    "Salyan": [
      "Kumakh Rural Municipality",
      "Kalimati Rural Municipality",
      "Chhatreshwari Rural Municipality",
      "Darma Rural Municipality",
      "Kapurkot Rural Municipality",
      "Triveni Rural Municipality",
      "Siddha Kumakh Rural Municipality",
      "Bagchaur Municipality",
      "Shaarda Municipality",
      "Bangad Kupinde Municipality"
    ],
    "Dolpa": [
      "Mudkechula Rural Municipality",
      "Kaike Rural Municipality",
      "She Phoksundo Rural Municipality",
      "Jagadulla Rural Municipality",
      "Dolpo Buddha Rural Municipality",
      "Chharka Tongsong Rural Municipality",
      "Thuli Bheri Municipality",
      "Tripurasundari Municipality"
    ],
    "Humla": [
      "Simkot Rural Municipality",
      "Sarkegad Rural Municipality",
      "Adanchuli Rural Municipality",
      "Kharpunath Rural Municipality",
      "Tanjakot Rural Municipality",
      "Chankheli Rural Municipality",
      "Namkha Rural Municipality"
    ],
    "Jumla": [
      "Tatopani Rural Municipality",
      "Patarasi Rural Municipality",
      "Tila Rural Municipality",
      "Kanaka Sundari Rural Municipality",
      "Sinja Rural Municipality",
      "Hima Rural Municipality",
      "Guthichaur Rural Municipality",
      "Chandannath Municipality"
    ],
    "Kalikot": [
      "Khandachakra Municipality",
      "Raskot Municipality",
      "Tilagufa Municipality",
      "Narharinath Rural Municipality",
      "Palata Rural Municipality",
      "Shubha Kalika Rural Municipality",
      "Sanni Triveni Rural Municipality",
      "Pachaljharana Rural Municipality",
      "Mahawai Rural Municipality"
    ],
    "Mugu": [
      "Khatyad Rural Municipality",
      "Soru Rural Municipality",
      "Mugum Karmarong Rural Municipality",
      "Chhayanath Rara Municipality"
    ],
    "Surkhet": [
      "Simta Rural Municipality",
      "Barahatal Rural Municipality",
      "Chaukune Rural Municipality",
      "Chingad Rural Municipality",
      "Gurbhakot Municipality",
      "Birendranagar Municipality",
      "Bheriganga Municipality",
      "Panchapuri Municipality",
      "Lekbeshi Municipality"
    ],
    "Dailekh": [
      "Dullu Municipality",
      "Gurans Rural Municipality",
      "Bhairabi Rural Municipality",
      "Naumule Rural Municipality",
      "Mahabu Rural Municipality",
      "Thantikandh Rural Municipality",
      "Bhagawatimai Rural Municipality",
      "Dungeshwar Rural Municipality",
      "Aathabis Municipality",
      "Narayan Municipality",
      "Chamunda Bindrasaini Municipality"
    ],
    "Jajarkot": [
      "Chhedagad Municipality",
      "Bheri Municipality",
      "Nalgad Municipality",
      "Junichande Rural Municipality",
      "Kuse Rural Municipality",
      "Barekot Rural Municipality",
      "Shivalaya Rural Municipality"
    ]
  },

  "Sudurpaschim Province": {
    "Darchula": [
      "Mahakali Municipality",
      "Shailyashikhar Municipality",
      "Naugad Rural Municipality",
      "Malikarjun Rural Municipality",
      "Marma Rural Municipality",
      "Lekam Rural Municipality",
      "Duhun Rural Municipality",
      "Vyans Rural Municipality",
      "Apihimal Rural Municipality"
    ],
    "Bajhang": [
      "Jayaprithvi Municipality",
      "Bungal Municipality",
      "Kedarsyu Rural Municipality",
      "Thalara Rural Municipality",
      "Bitthadchir Rural Municipality",
      "Chhabis Pathibhera Rural Municipality",
      "Khaptadchhanna Rural Municipality",
      "Masta Rural Municipality",
      "Durgathali Rural Municipality",
      "Talkot Rural Municipality",
      "Surma Rural Municipality",
      "Saipal Rural Municipality"
    ],
    "Bajura": [
      "Badimalika Municipality",
      "Triveni Municipality",
      "Budhiganga Municipality",
      "Budhinanda Municipality",
      "Khaptad Chhededaha Rural Municipality",
      "Swami Kartik Khapar Rural Municipality",
      "Jagannath Rural Municipality",
      "Himali Rural Municipality",
      "Gaumul Rural Municipality"
    ],
    "Baitadi": [
      "Dashrathchanda Municipality",
      "Patan Municipality",
      "Melauli Municipality",
      "Purchaudi Municipality",
      "Dogdakedar Rural Municipality",
      "Dilashaini Rural Municipality",
      "Sigas Rural Municipality",
      "Pancheshwar Rural Municipality",
      "Surnaya Rural Municipality",
      "Shivanath Rural Municipality"
    ],
    "Doti": [
      "Dipayal Silgadhi Municipality",
      "Shikhar Municipality",
      "Aadarsha Rural Municipality",
      "Purbichauki Rural Municipality",
      "K.I.Singh Rural Municipality",
      "Jorayal Rural Municipality",
      "Sayal Rural Municipality",
      "Bogatan-Phudsil Rural Municipality",
      "Badikedar Rural Municipality"
    ],
    "Acham": [
      "Ramaroshan Rural Municipality",
      "Chaurpati Rural Municipality",
      "Turmakhand Rural Municipality",
      "Mellekh Rural Municipality",
      "Dhakari Rural Municipality",
      "Bannigadi Jayagad Rural Municipality",
      "Mangalsen Municipality",
      "Kamalbazar Municipality",
      "Sanfebagar Municipality",
      "Panchadewal Binayak Municipality"
    ],
    "Dadeldhura": [
      "Navadurga Rural Municipality",
      "Aalitaal Rural Municipality",
      "Ganyapadhura Rural Municipality",
      "Bhageshwar Rural Municipality",
      "Ajaymeru Rural Municipality",
      "Amargadhi Municipality",
      "Parshuram Municipality"
    ],
    "Kanchanpur": [
      "Bhimdatta Municipality",
      "Punarbas Municipality",
      "Bedkot Municipality",
      "Mahakali Municipality",
      "Shuklaphanta Municipality",
      "Belauri Municipality",
      "Krishnapur Municipality",
      "Laljhadi Rural Municipality",
      "Beldandi Rural Municipality"
    ],
    "Kailali": [
      "Janaki Rural Municipality",
      "Kailari Rural Municipality",
      "Joshipur Rural Municipality",
      "Bardagoriya Rural Municipality",
      "Mohanyal Rural Municipality",
      "Chure Rural Municipality",
      "Tikapur Municipality",
      "Ghodaghodi Municipality",
      "Lamkichuha Municipality",
      "Bhajni Municipality",
      "Godawari Municipality",
      "Gauriganga Municipality",
      "Dhangadhi Sub-Metropolitan City"
    ]
  }
};

// Expose for browser (loaded via <script> before script.js).
// No module system used, so it lives on the global scope.