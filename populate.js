const mongoose = require("mongoose");

const Project = require("./models/project.js");
const Comment = require("./models/comments.js");
const newData = [
  {
    name: "Deepshikha Pegu",
    photos: [
      "/Exhibition/Deepshikha Pegu/dusk - Deepshikha Pegu.png",
      "/Exhibition/Deepshikha Pegu/after - Deepshikha Pegu.png",
      "/Exhibition/Deepshikha Pegu/omw - Deepshikha Pegu.png",
      "/Exhibition/Deepshikha Pegu/rituals - Deepshikha Pegu.png",
    ],
    title: `Hiraeth`,
    writeup: `Hiraeth, a homesickness for a home to which you cannot return. 
    
    A home which maybe never was the nostalgia, the yearning, the grief for the lost places of the past. A remembrance of forgotten rituals, majorly due to the changing relationships between the people and the river.`,
    bio: `Deepshikha is a designer, currently working for an ed-tech firm based in Mumbai. She also identifies as a multi-disciplinary artist, intersecting design, and media as tools and medium to delve into the domain of Culture (both Tangible and Intangible). 
    
    She is currently exploring film as a medium to understand the relations and complexities of the social structure of Indigenous Cultures, in the context of Assam. Currently, topics of displacement due to socio-political aspects has also been one of her major areas of interest.`,
    twitter: "DeepshikhaPegu2",
    instagram: "",
    email: "pegudeepi@gmail.com ",
    index: 4,
  },
  {
    name: "Vivek Raj Singh",
    photos: [
      "/Exhibition/Vivek Raj Singh/7D6BF4CB-A6AB-431E-AE46-8C07F4B0D064 - Vivek Raj Singh.png",
      "/Exhibition/Vivek Raj Singh/AABD486C-F378-45B9-BBC4-1A752B4585A5 - Vivek Raj Singh.png",
      "/Exhibition/Vivek Raj Singh/F214A7D8-218F-440B-915D-8C7BF5212ABA - Vivek Raj Singh.png",
      "/Exhibition/Vivek Raj Singh/FE1A7C13-899F-4318-89D8-CC48EBCB5524 - Vivek Raj Singh.png",
      "/Exhibition/Vivek Raj Singh/FF5287C1-C7A9-4045-A2EA-01488BE9FACE - Vivek Raj Singh.png",
    ],
    title: `River Islands`,
    writeup: `The photos are taken in the river islands of Kamrup rural Assam. They depict the condition of the children and elderly staying in the river island (chars) in the local language.
    
    The hardship they had to face since birth, the girl child is more vulnerable to atrocities and trafficking. An old man returning from his work to his char situated in Kamrup rural. This is his routine for the past 21 years. `,
    bio: `I grew up in Assam, India and moved to Bombay to study mass media - where I learned more about photography and visual practices while beginning to work on my own self-funded projects. In addition to a bachelor’s degree in Mass Media (BMM) from Jai Hind College, Mumbai University, I also have diplomas in filmmaking, photography, and sound production from NYFA, Udaan School of Photography and SRFTI respectively.
    
    My work revolves around observational and journalistic stories such as the documentation of disabled artists in India and an ongoing long-term project about mass migration in Uttarakhand. I am a visual artist working with photography and video mixed as conduits for my creative expression; with interest in further blurring the line between the two mediums - as far as is possible while each complements the other. I am continually looking to improve as a storyteller and delve deeper into the use of expressionist and abstract methods in that pursuit`,
    twitter: "",
    instagram: "vivekr.singh",
    email: "vivekrajsingh6@gmail.com",
    index: 5,
  },

  {
    name: "Ayanava Sil",
    photos: [
      "/Exhibition/Ayanava Sil/1 - Ayanava Sil.png",
      "/Exhibition/Ayanava Sil/2 - Ayanava Sil.png",
      "/Exhibition/Ayanava Sil/3 - Ayanava Sil.png",
      "/Exhibition/Ayanava Sil/4 - Ayanava Sil.png",
      "/Exhibition/Ayanava Sil/5 - Ayanava Sil.png",
    ],
    title: `Prayers`,
    writeup: `The River is sacred to Hindus and pilgrims who travel thousands of miles to pray and bathe themselves in the river as part of a purification ritual. Different rituals take place, mainly in the morning and in the evening. Standing in a river and praying release energy from your body. 
    
    It is believed that these rituals of standing in the water and praying to detoxify the body and mind and provides mental calmness. It also enhances immunity, infuses energy and reduces the frequency of anger, and all other negative emotions. `,
    bio: `I am Ayanava Sil a resident of Kolkata, India. By education I hold a degree of Master Of Business Administration in Marketing. Photography to me is an exemption to see things differently. I am a Street and Documentary photographer, with an objective of documenting everyday life. The uncertainty and the suspense drives me the most towards these genres of Photography. Documenting people over the years has provided me with the invaluable opportunity to explore the unknown and to embrace the conglomerate realities of people.`,
    twitter: "@ayanava",
    instagram: "ayanava3",
    email: "ayanava3@gmail.com",
    index: 2,
  },

  {
    name: "Arundhati Deka",
    photos: [
      "/Exhibition/Arundhati Deka/Picture 1 – Women in the agricultural field in Majuli - Arundhati Deka.png",
      "/Exhibition/Arundhati Deka/Picture 2 – Women from Sadiya with jakoi - Arundhati Deka.png",
      "/Exhibition/Arundhati Deka/Picture 3 – Man and woman in a boat in Majuli - Arundhati Deka.png",
      "/Exhibition/Arundhati Deka/Picture 4 – Woman engaging in fishing, from 2017 flood, while on the way to Dhubri - Arundhati Deka.png",
      "/Exhibition/Arundhati Deka/Picture 5 – Woman simultaneously conducting chore and taking care of her child during flood, from a char in Goalpara - Arundhati Deka.png",
    ],
    title: `Women from the floodplains of Assam`,
    writeup: `Assam has a diverse group of communities, and the role of the women within these communities also sometimes remain the same in the private while changing constantly in the public. The women of the tribal communities in Assam (specifically Deori and Mishing) are engaged both at the private and public space from household activities and looking after the family to agricultural activities (Picture 1 – Women in the agricultural field in Majuli), fishing, and fetching wood for cooking. 
    
    This often overburden the women. Especially during the harvest season, they barely have time left for themselves. The mornings are for household work of cleaning and cooking, then spending the entire day at the field, and then coming back home and engaging in domestic chores again. But within the public sphere, there is a clear gender divide in the public. Women engage in the activities of sowing and reaping in the agricultural field, while the men engage in ploughing and carrying the reaped harvest from the field (heavy load).
    
    Women use the jakoi (Picture 2 – Women from Sadiya with jakoi) as an equipment for catching fish, while men generally use fishing nets. 
    
    The men usually row the boats, while the women are often discouraged and unless absolutely necessary (Picture 3 – Man and woman in a boat in Majuli). While the women from the lower reaches of Assam don’t really engage in the public sphere as much, fishing (Picture 4 – Woman engaging in fishing, from 2017 flood, while on the way to Dhubri) as an activity during the flood season diminishes the gender roles as both the genders engage in it as an alternative source of livelihood. 
    
    Within the char communities, the engagement of women with the public space tends to be even less with their mobility being restricted often to the compound of their house, but like the other communities within the private space they are the primary caretakers (Picture 5 – Woman simultaneously conducting chore and taking care of her child during flood, from a char in Goalpara), often left with trauma upon loss.
  
    Disclaimer: The story from the project team member is only part of the exhibition and will not be considered for the honorarium. The honorarium considerations are only for external participants. However, please leave your feedback for the story in the comments section.`,
    bio: `Arundhati Deka is a Research Associate at the Department of Humanities and Social Sciences, IIT Guwahati. Currently she is working on understanding the need for science-media communication and diplomacy in the Brahmaputra, and to realize what role water infrastructure plays in the evolution of nature-society relationship.
    
    Previously she has been engaged with ‘Transnational Policy Dialogue for Improved Water Governance of Brahmaputra River’ for 4 years, which has generated a platform to work on cross cutting issues for the riparian nations. She has a master's degree in Environmental Studies and Resources Management and a bachelor's degree in Geology.
    
    Her research interest lies in development studies and particularly on water science, policy, and governance; socio-hydrology; and gender in water.`,
    twitter: "@aru_91",
    instagram: "",
    email: "arundhatideka91@gmail.com",
    index: 6,
  },

  {
    name: "Minket Lepcha",
    photos: [
      "/Exhibition/Minket Lepcha/1 - minket lepcha.png",
      "/Exhibition/Minket Lepcha/5 - minket lepcha.png",
      "/Exhibition/Minket Lepcha/8 - minket lepcha.png",
    ],
    title: "Ferry to go home",
    writeup: `:
    Mishing is a largest river community of Assam dispersed around various tributaries of River Brahmaputra. They also live in one of the world's largest river island called Majuli. As a riverine tribe, Mising indicates blend of mi  ̳man‘ and asi  ̳water‘. The Mising consider themselves to be the descendent of the Sun and Moon. On all auspicious occasions, the Sun is referred to Ane Do:nyi- ̳Mother Sun‘ and the Moon who they call Abu Po:lo  ̳Father Moon‘ are worshiped.

    People of Assam referred to Mishing as Miri. According to E. A. Gait, the word Miri means middle man in Assamese words. They acted as a channel of communication between the people of Assam and Abors of Arunachal Pradesh.
    
    Ferries and boats are the only lifeline which connects people to the mainland. Women are rare travellers in the ferry as men dominates the passenger ratio. Women in the boat are seen either with a new born baby, visiting her family or to check ailments to nearby hospitals in mainland. With half the male population outside the island for work or better education, these women spends most of the time weaving, tending farms, cooking or battling flood during monsoon season. Climate related disasters with women in rural areas often go unrecorded while they are directly related to accessing natural resources like water and forest for their daily consumption. Looking at the vastness of the River Brahmaputra, a Mishing woman is seen looking at the river from the ferry as though the river is the only companion and her gold earring, the only wealth. The narratives around women and their relationship with river often goes through many layers.`,
    bio: `I am an independent researcher from Darjeeling conducting interactive experiential sessions across India, Nepal, and Bangladesh to connect children and youth with river. I use the medium of films, photographs in articles to represent narratives around water and river. A Young Green Filmmaker Awardee (2015) for directing ‘Voices of Teesta’ in Woodpecker’s International Film Festival, I have represented and facilitated myself in forums like River Dialogue, Women and Water Consultation Programme in Assam, story therapy sessions with Riverine Communities affected by flood in Assam and represented River Teesta in International Conference on Women with River’s Congress in Nepal.
    
    I was one of the mentors from upstream river communities to engage with youth in River Camp held in Bangladesh. I received Third Pole-Oxfam Shared Water Media Grants as part of the Transboundary Rivers of South Asia (TROSA) project to work with Women's relationship with Mahakali River and was a fellow researcher for Kathmandu Valley Urban History Project by Nepal Picture Library where I traced ancient water resources around World Heritage Site of Boudha Stupa in Kathmandu Valley.
    
    A virtual exhibition was successfully curated Visualizing Water Heritage through storytelling in North East India project funded by British Council Small Heritage Grants with Living Water Museum wherein 30 adolescent girls of North East documented river folklore during Covid19.`,
    twitter: `@LepchaMinket`,
    instagram: "minket_lepcha",
    email: "minket19@gmail.com",
    index: 24,
  },

  {
    name: "Aditi Patil",
    photos: [
      "/Exhibition/Aditi Patil/A fishermen_s lifeline - Aditi Patil.png",
      "/Exhibition/Aditi Patil/Children playing by the river bank - Aditi Patil.png",
      "/Exhibition/Aditi Patil/Photogenic, poetic Brahmaputra - Aditi Patil.png",
      //   "/Exhibition/Aditi Patil/The river as center of friendship - Aditi Patil.png",
      "/Exhibition/Aditi Patil/the river connects - Aditi Patil.png",
    ],
    title: "Brahmaputra’s belonging",
    writeup: `Spent my teenage years next to the Brahmaputra river. And then I had to attend college in the west of the country. I missed my friends, the hills, the abundance of greens but most of all I missed the river from my backyard. The might of the river has been lavishly written about. Her travel from the Himalayas to the Bay of Bengal is an adventure in itself. Her ever-changing forms imitate life. How she makes people feel is spun into poems and songs. 
    
    I strongly believe that the river has a pull, an attraction, a gravity of its own which plays on people of all kinds – fisherfolk, farmers, dating couples, children, elders and on me. While identities of people in North East often clash in insider-outsider binaries, the river unifies. She connects the disconnected. She can bridge boundaries and borders. After studying and working across India, this enormity of the Brahmaputra pulled me back to her after 20 years. Now when I touch her waters, it feels as if I never left. She is the centre of my friendships in the city. She is my family here.`,
    bio: `I work as a researcher with an NGO called Wildlife Conservation Society. My current research is on understanding drivers of illegal wildlife trade. I've also authored a book called 'Patriarchy and the Pangolin'.`,
    twitter: "@Adiitiee",
    instagram: "aditi_patil",
    email: "padity@gmail.com",
    index: 3,
  },

  {
    name: "Dheeman Garg",
    photos: [
      "/Exhibition/Dheemaan Garg/DheemaanGarg_Brahmaputra - Dheemaan Garg.png",
      "/Exhibition/Dheemaan Garg/DheemaanGarg_Brahmaputra1 - Dheemaan Garg.png",
      "/Exhibition/Dheemaan Garg/DheemaanGarg_Brahmaputra2 - Dheemaan Garg.png",
    ],
    title: `Harbinger of Life`,
    writeup: `The mighty Brahmaputra is the harbinger of life for the city of Guwahati. Despite the destructive annual floods which lead to loss of land, life and livestock, the river remains the most cherished attribute of the city. One cannot easily comprehend the magnitude of the Brahmaputra’s impact on the lives of the people of the city of Guwahati, and the state of Assam at large. Settlements by the banks of rivers are a common phenomenon across the world. Given the alluvial soil around the Brahmaputra, it is only natural that populations have settled very close to its shores. For the people who have settled in colonies just by the banks, the river means more to them than a mainstream city dweller could ever imagine.
    
    Their day begins with a prayer to the sun, taking a holy dip in the water. Their livelihood depends mostly on the river; some belong to fishing communities, cloth washing communities, boating communities, and vendors who bring produce from their remote villages in the ferries to be sold in the city.They reflect how these people mark a positive beginning to their day - taking a holy dip at dawn, invoking the blessings of the sun and the river god; and set off to work for the day. `,
    bio: `I'm a final year student of Journalism and Mass Communication and a freelance photographer based around Guwahati, Assam. It fulfils me to find new subjects and areas to work on. Most of my work reflects the nature and culture of North-East India. When I'm not working, I spend my time traveling and finding stories, striking conversations with people I meet on the way, and learning about their cultures.
    
    Attending and documenting various festivals like the Ambubachi Mela in Guwahati, the Junbeel Mela in Morigaon, the Hornbill Festival in Nagaland, my knowledge of various cultures grew with time. My interest in capturing stories has led me to working with advertisements and related media projects. I enjoy exploring everything the world of photography has to offer, one little technique and detail at a time.`,
    twitter: "",
    instagram: "dheemaan_garg",
    email: "dheemaangarg.work@gmail.com",
    index: 1,
  },
  {
    name: "Ayon Pratim Saikia",
    photos: [
      "/Exhibition/Ayon Pratim Saikia/BRAHMAPUTRA 4 - ONBOARD FILMS.png",
      "/Exhibition/Ayon Pratim Saikia/BRAHMAPUTRA 1 - ONBOARD FILMS.png",
      "/Exhibition/Ayon Pratim Saikia/BRAHMAPUTRA 2 - ONBOARD FILMS.png",
      "/Exhibition/Ayon Pratim Saikia/BRAHMAPUTRA 3 - ONBOARD FILMS.png",
      "/Exhibition/Ayon Pratim Saikia/BRAHMAPUTRA 5 - ONBOARD FILMS.png",
    ],
    title: `Symbiosis`,
    writeup: `The set of photographs represents the life and colour of the rural people residing on the banks of the Brahmaputra River. A lady heads in search of her cattle during sunset. The water buffaloes love their bath during summer and relax in the Brahmaputra River.
    
    The occupation of the villagers residing in the banks is mostly fishing, cattle rearing and farming. A fisherman fishing in Brahmaputra River during sunset. They sell their products in the nearby town markets. The last photograph is of a villager crossing a fertile river land where they keep their cattle.  `,
    bio: `I am a freelance photographer from Sadiya, Assam. I have been capturing river Brahmaputra and life around for a while now. I have a special connection with this river, and I am always inspired by the beauty of it`,
    twitter: "",
    instagram: "ayonpratimsaikia",
    email: "ayononboard@gmail.com",
    index: 7,
  },
  {
    name: "Pritam Kumar Goswami",
    photos: [
      "/Exhibition/Pritam Kumar Goswami/1623262780691-01-02 - Pritam 01.png",
      "/Exhibition/Pritam Kumar Goswami/1623479632508-01 - Pritam 01.png",
    ],
    title: `Many Brahmaputra's`,
    writeup: `In Assam, the Brahmaputra River is also known by several other names  i.e. ‘Luit’, ‘Siri Luit’, ‘Bor Luit’ ‘Bor Noi’. For the people of Assam, the Brahmaputra is a symbol of great pride due to its ‘moving ocean’ size but this also ignites fear when it rises to its strength during floods. But this river is also the source of strength for the people of Assam. Time and again, they have expressed their unity as ‘Luitporia’ or ‘people from the banks of Luit’.`,
    bio: `An Engineer who has a keen interest in exploring and capturing the beauty of Nature through his Mobile Clicks.`,
    twitter: "",
    instagram: "the_hobbyistphotographer",
    email: "pritam.k.goswami@gmail.com",
    index: 8,
  },
  {
    name: "Dhritiman Deka",
    photos: [
      "/Exhibition/Dhritiman Deka/Dhritiman Deka - Dhritiman Deka.png",
      "/Exhibition/Dhritiman Deka/Dhritiman Deka 1.png",
      "/Exhibition/Dhritiman Deka/Dhritiman Deka 2.png",
    ],
    title: `Energy`,
    writeup: `The son of Brahma, the river Brahmaputra has been a source of life, livelihood and inspiration for many. The strength and agility of this river making its way amidst the steep cut mountains to the valleys of culture signify a powerful journey called life.
    
    The serene, quiet, and otherwise calm nature of the river symbolizing the enchanting hues of existence goes along with the wrath of that furious rage where it strives for freedom reflecting on the turmoil, distress and tumultuous waters of the region. The river is us and its primordial voyage from the cradle of dawn to the heights of civilization is the decadence of mankind. What is it to live with something? Is it the same as a livelihood? Is it more, is it less? It is much more.
    
    The river correlates with people’s emotions, they need to flow. The river makes emotions look like energy in motion. Stopping the flow means blocking the energy. Thus it surely is not about livelihood. It encompasses sentimentalities. I feel that when I say living, it means longer than staying, something which is more permanent in relation to staying which might be temporary. So, it is the longer residence with it that increases its significance and experience for them. Bruises left by the sudden wrath and destruction of the river also however calm down. People get accustomed to this inner complaint. Living means being there in both its bad and good; when you cannot always expect to be perfect but love it nonetheless with its occasional hiccups to let go.
    
    The world is a small place to accommodate this huge chunk of people, so humans have always attempted to settle down whosesoever they find a small patch of land even if it is in the middle of the river and sometimes in a tiny little boat. There is probably a river in each of our lives. The literal reflection on the water can also be seen as a kind of mirror reflection of the boatman and the river living with and in each other. Channelizing energy through each other.`,
    bio: `I am student pursuing my master’s degree in Sociology at Cotton University. I have developed a keen interest in photography over the past 10 years. As of now I am working on my own photo-book. Most of my shots are based on Brahmaputra only. I also served as the editor of Cottonian, the annual journal of Cotton University in the year 2016.`,
    twitter: "",
    instagram: "dhritimaann",
    email: "dhritiman.dekaa@gmail.com",
    index: 9,
  },

  {
    name: "Bikash Chetry",
    photos: [
        "/Exhibition/Bikash Chetry/Pic 1 Bikash Clay collected by Kumars_2021 - Bikash Chetry.png",
      "/Exhibition/Bikash Chetry/Pic 2 Bikash Women Potters_2021 - Bikash Chetry.png",
      "/Exhibition/Bikash Chetry/Pic 3 Bikash_potter carrying the pots to boats_2021 - Bikash Chetry.png",
      //   "/Exhibition/Bikash Chetry/Pic 4 Bikash_Tying up the pot_2021 - Bikash Chetry.png",
      "/Exhibition/Bikash Chetry/Pic 5 Bikash_getting ready for sail_2021 - Bikash Chetry.png",
    ],
    title: `River & livelihoods`,
    writeup: `The manifestation of flood in Assam has been a perennial occurrence in Brahmaputra valley and it has been a boon and sorrow for the community at the same time. The potter community ‘Kumars’ from Salmora (Majuli) this artistry has been the mainstay of the livelihood and income. The men from sail to Sadia, Tezpur, Lakhimpur districts and other neighbouring districts to sell the pots on their country made boats. 
    
    However, due to the rapid flood and riverbank erosion, it has been continuously eroding/washing away the ‘Kumar matti’ shown in the first and second pictures used by the potters, challenging their traditional livelihood. Kumar community from both 'Dakhinpat Kumar Gaon' and 'Salmora' has been suffering due to soil erosion. It also affects the women potters’ source of income. As seen in the first picture this type of clay is obtained from clay pits from about twenty-five to thirty feet depth near the river banks and the sources for this clay is becoming limited.
    
    Largely, this clay can be procured from riverbanks, which is constantly eroding. Over the years the traditional potters are forced to use sand or inferior quality soil (a type of soil locally called ‘Lodha-maati’) this not only gives the pots a low-quality finish but also potters get less price for such pots.`,
    bio: `I have worked in Social Development sector for more than 3 year and then joined Centre for North East Studies and Policy Research (CNESPR), Jamia Millia Islamia, New Delhi as Assistant Professor (Guest). Currently I am Doctoral candidate at Department of Social Development, University of Cape town. Most of my research has been on water, space, and agency and to understand human and river relationship in Brahmaputra valley.
    
    My research interest includes Post-colonial Disasters studies, Gender and Disasters, Indigenous Knowledge System and Practices, Disaster Risk Reduction.`,
    twitter: "@bikashchetry92",
    instagram: "bikash.chetry_26",
    email: "chetry.bikash@gmail.com",
    index: 10,
  },
  //TODO: Ye problem de rha hai
  {
    name: "Anuron Mullik",
    photos: [
      "/Exhibition/Anuron Mullik/Anuron Mullik - Anuron Mullik 1.png",
      //   "/Exhibition/Anuron Mullik/Anuron Mullik 2 - Anuron Mullik.png",
    ],
    title: "Majestic Brahmaputra",
    writeup: `The picture is taken at Ganesh Ghat, Tezpur(Assam) during the winter season. The river was silent and had a majestic view. I know the beauty of the Ganges in my city Kolkata and so I was eager to see the Brahmaputra. I was overwhelmed with joy when I first saw it, so pleasant and beautiful.`,
    bio: "I am a student of Narula Institute of Technology and I am passionate about Photography. I like street photography as well as nature photography. Street photography really excites me and whenever I get the chance to explore the street, I never miss it",
    twitter: "",
    instagram: "anuronmullik",
    email: "anuron.mullik@gmail.com",
    index: 11,
  },

  {
    name: "Rupam Bhaduri",
    photos: [
      "/Exhibition/Rupam Bhaduri/1 Char-Chaporis.png",
      "/Exhibition/Rupam Bhaduri/2 Livelihood opportunities for Char dwellers - Rupam Bhaduri.png",
      "/Exhibition/Rupam Bhaduri/3.png",
      "/Exhibition/Rupam Bhaduri/4.png",
    ],
    title: `Biodiversity`,
    writeup: `The Brahmaputra basin which extends from the high elevated Tibet to the floodplains of Bangladesh, offers a biodiverse setup on which numerous natural habitats flourish. Meadows, rainforest, wetland, grassland, riverbank are some of the well-known habitats where the ecology thrives. Among these exists a lesser-known ecosystem which is often looked either in terms of engineering or human aspect; the flood-plain sediments or vernacularly called as Char-Chaporis.
    
    It is a highly dynamic landform present pre-dominantly in the floodplains. They undergo alterations every post monsoon flood, making the Char-Chapori ecosystem sensitive and fragile. However, little is known about the biodiversity of Char-Chaporis. Flood-plain sediments primarily hold several species of grasses such as Saccharum spontaneum, Saccharum ravennae, Phragmite sp. etc. These grasses play a vital role in holding the soil of the Char-Chapori which reduces the extent of erosion. In addition to protecting the soil, these grasses also provide suitable habitat for the growth of fauna.
    
    Many avian species find the grassland apt for nesting and breeding, such as Swamp Grass Babbler, Striated Grassbird, Graceful Prinia etc. Migratory bird species such as White-tailed Stonechat, Bristled Grassbird etc. too successfully breed in these habitats. Humans too have been seasonally inhabiting alongside the flora and fauna of Char-Chaporis for decades now. These floodplain-sediments provide excellent ecosystem services by creating a platform for cattle grazing during the non-monsoon seasons. The grass which grows are used as fodder for livestock. Seasonal agriculture is also practiced on the land which has become one of the primary sources of livelihood for the dwellers. However, a negative impact on the biodiversity can be observed with the accelerating rate of dependence on the ecosystem.
    
    Rampant clearing of the grasses is leading to faster erosion, followed by loss of habitat. Char-Chaporis outside protected area are usually overlooked by the Government bodies putting a threat to this unique biodiversity. On the other hand, dependence of Char dwellers on the land and biodiversity can only be reduced by providing them with sufficient livelihood opportunities. Additionally, research to investigate the diversity of species within the Char-Chapori is needed which can provide way forward for conservation.`,
    bio: `I am a doctoral candidate from Indian Institute of Technology Guwahati, pursuing research on analyzing the inclusion of future climate dynamics in the hydropower decision making process with a lens of Political Ecology.
    
    My study area has been Brahmaputra river basin with emphasis on Bhutan & India. In addition to my research, I take deep interest in observing and studying birds.`,
    twitter: "",
    instagram: "chidiyawatchman",
    email: "bhadurirupam@gmail.com",
    index: 12,
  },
  {
    name: "Kasturika Saikia",
    photos: [
      "/Exhibition/Kastaurika Saikia/DSC_0149_Original - kastaurika saikia.png",
      "/Exhibition/Kastaurika Saikia/DSC_0126_Original - kastaurika saikia.png",
    ],
    title: `Monsoons`,
    writeup: `The two pictures were captured during the monsoon season when the river is swollen up and comes with a torrential force yet those communities dependent on the river must set out to seek a living; while being utmost careful in navigating safer and shallow spots.In the first picture, fishermen lay out their nets standing knee deep in river-water which actually was a pocket of land until it started raining in the highlands and the river brought water and fishes along. Infact, the neatly eroded bank, revealing the red layers underneath the top soil is clearly visible on the background.In the second picture a fisherman on his boat follows our tourist boat to sell his fresh catch from the river, bhangun maas; which we later relished upon on-board.`,
    bio: `A social researcher based in Assam with interest in human development, community centric practices and a passion for visual story-telling and photo-documentation.`,
    twitter: "@KastaurikaS",
    instagram: "with_wind_in_my_hair",
    email: "kastaurika.saikia@gmail.com",
    index: 13,
  },
  {
    name: "Sumit Baruah",
    photos: [
      "/Exhibition/Sumit Baruah/1 - Sumit Baruah.png",
      "/Exhibition/Sumit Baruah/2 - Sumit Baruah.png",
      "/Exhibition/Sumit Baruah/3 - Sumit Baruah.png",
      "/Exhibition/Sumit Baruah/4 - Sumit Baruah.png",
      "/Exhibition/Sumit Baruah/5 - Sumit Baruah.png",
    ],
    title: `Char Dwellers`,
    writeup: `The river Bhrahmaputra’s brute force has been the source of personal as well as a cultural loss. The community that faces the most extreme conditions of the river are the char dwellers, as the very river that nourishes the fertile land of the region, unlashes its fury during the monsoon. Proving their adaptability for generations, they are the closest inhabitants along the river and have established themselves as skilled farmers by leveraging upon the fertile soil.
    
    The photographs are part of a long term documentary project titled ‘The Thin Line’, by Sumit Baruah, where he explored the lives of the closest inhabitants of the river Brahmaputra along with inspecting the political and cultural dynamics of the region. `,
    twitter: "@Baruah_Da",
    instagram: "extraterrestrial_farmer",
    email: "sumitbaruah9@gmail.com",
    index: 14,
  },
  {
    name: "Jayshree Borgohain",
    photos: [
      "/Exhibition/Jayshree Borgohain/1 - Jayshree Gohain.png",
      //   "/Exhibition/Jayshree Borgohain/2 - Jayshree Gohain.png",
      "/Exhibition/Jayshree Borgohain/3 - Jayshree Gohain.png",
      "/Exhibition/Jayshree Borgohain/4 - Jayshree Gohain.png",
      "/Exhibition/Jayshree Borgohain/5 - Jayshree Gohain.png",
    ],
    title: `People and their stories…`,
    writeup: `Pushing oneself harder for the peak: The villagers’ returns home after their daily work in the markets. The land near the river bank is very fertile. They cultivate their vegetables and sell them in the markets in a nearby town. We can see two villagers in the photograph returning home after their work in the market.
    
    Guarding: This photograph is of Mr Durgeshswor Borgohain who owns a buffalo shed in a Chapori. Half of the Chapori gets submerged during monsoon floods which leads to the death of the cattle in multiple numbers every year. Flood damages the cattle feed and this causes cattle death. 
    
    Infinite: This photograph is of 10-year-old Nikita Rajbongshi, who belongs to a fisherman family who resides at the bank of river Brahmaputra in Tezpur, Assam. She studies in Kolibari School in class 5. In this photograph, she stares at the vast river view from her home where the horizon over the river goes invisible. 
    
    Dusk choirs: This photograph is of cattle herders returning with their herd during sunset on the bank of river Brahmaputra. The vast stretch of sand makes a spectacular sunset creating a surreal ambience.`,
    twitter: "",
    instagram: " jayshree.__",
    email: "jayshreegohain123@gmail.com",
    index: 32,
  },

  {
    name: "Nayan Moni Baishya",
    photos: [
      "/Exhibition/Nayan Moni Baishya/Infrastructure - Nayan Moni Baishya.png",
      "/Exhibition/Nayan Moni Baishya/Livelihood - Nayan Moni Baishya.png",
    ],
    title: `Brahmaputra from my eyes`,
    writeup: `In an Agriculture focused state like Assam, agriculture and fishing are two of the main livelihoods for many people, especially in the villages and also an opportunity for entrepreneurship. Fish is a stable dietary element of the people in this region. 
    
    For people who rely on fishing for their livelihood, the Brahmaputra and its tributaries are the primary natural sources for fishing due to the abundance of aquatic animals in these water bodies. For some fishermen, the day starts at the dawn and sometimes even before sunrise. They sail on the river on their boats, along with their fishing instruments, to certain pre-identified locations where the chances of catching fish are high. After the early morning fishing, they direct themselves to the markets to sell the fresh fish and generate the day’s income. 
    
    Some may also choose to go door-to-door on their bicycle and asking with their unique tone to buy fish. Others will fish during the daytime till afternoon and then head to the nearest urban market in the evening. To another section of people, fishing can also be a daily secondary activity to generate some extra income. Fishing is a direct economic contribution of the river to people’s lives, both as a source of income and as a food. 
    
    The Brahmaputra is the widest river in India as well in the Asian sub-continent and bridges are one of the key infrastructures associated with this mighty river. The Saraighat Bridge (old), Inaugurated in the year of 1962, is the first major rail-cum-road bridge over the river. This well-designed megastructure has faced the test of time and still stands strong as the prime symbol of the achievement of infrastructural development. The bridge carries significant economic importance as it connects the north bank of the river to the Guwahati city, which is also the economic gateway to North-East India. 
    
    An exotic view of the grandiosity of the river flowing downstream and the scenic beauty of the river will be absorbed by anyone’s eyes who crosses over the bridge. The picture brings the beautiful Saraighat bridge under the colours as a way to bring all the elements of nature and man-made miracles together. The Saraighat bridge brings both emotion of appreciation and excellence to anyone who belongs to this land and has experienced the river.`,
    bio: `My name is Nayan Moni Baishya and I was born and brought up in Tezpur, which is one of the major towns on the north bank of Brahmaputra. Currently, I am a research scholar at the Department of Electronics and Electrical Engineering, IIT Guwahati, with a research focus on developing data-driven methods for Digital Image Forensics. Photography is my favorite hobby due to the freedom it gives to anyone to express their version of creativity. I own a Nikon D5300 model and primarily like capturing landscapes. I was part of the official photography teams associated with a few institute events at IIT Guwahati like Alcheringa and Research Conclave.`,
    twitter: "",
    instagram: "resurgent_nmb",
    email: "nmb94@iitg.ac.in",
    index: 15,
  },

  // ? Bande ne Bio nhi diya
  // {
  //     name: "Junaid Ahmad Khan",
  //     photos: [
  //         "/Exhibition/Junaid Ahmad Khan/inbound3643764731884720376 - Junaid Ahmad Khan.png",
  //         "/Exhibition/Junaid Ahmad Khan/inbound4962524998170304225 - Junaid Ahmad Khan.png",
  //         "/Exhibition/Junaid Ahmad Khan/inbound5100816117554096206 - Junaid Ahmad Khan.png",
  //         "/Exhibition/Junaid Ahmad Khan/inbound5255716952760783315 - Junaid Ahmad Khan.png"
  //     ],
  //     title: `Everyday Brahmaputra`,
  //     writeup: `The Brahmaputra also known as the Yarlung Tsangpo in Tibet, the Siang/Dihang River inArunachal Pradesh, and Luit, Dilao in Assam, is a trans-boundary river which flows throughTibet, India, and Bangladesh.It is the 9th largest river in the world by discharge, and the 15thlongest.Kameng River, Manas River, Beki River, Raidak River, Jaldhaka River, Teesta River, SubansiriRiver With its origin in the Manasarovar Lake region, near the Mount Kailash, located on thenorthern side of the Himalayas in Burang County of Tibet as the Yarlung Tsangpo River,it flowsalong southern Tibet to break through the Himalayas in great gorges (including the YarlungTsangpo Grand Canyon) and into Arunachal Pradesh.It flows southwest through the AssamValley as Brahmaputra and south through Bangladesh as the Jamuna (not to be mistaken withYamuna of India). In the vast Ganges Delta, it merges with the Padma, the popular name of theriver Ganges in Bangladesh, and finally, after merging with Padma, it becomes the Meghna andfrom here, it flows as Meghna river before emptying into the Bay of Bengal.About 3,848 km (2,391 mi) long, the Brahmaputra is an important river for irrigation andtransportation in the region. The average depth of the river is 30 m (98 ft) and its maximumdepth is 135 m (443 ft) (at Sadiya). The river is prone to catastrophic flooding in the spring whenthe Himalayan snow melts. The average discharge of the river is about 19,800 m3/s (700,000cu ft/s),and floods reach about 100,000 m3/s (3,500,000 cu ft/s).It is a classic example of abraided river and is highly susceptible to channel migration and avulsion. It is also one of thefew rivers in the world that exhibits a tidal bore. It is navigable for most of its length.The river drains the Himalayan east of the Indo-Nepal border, south-central portion of theTibetan plateau above the Ganga basin, south-eastern portion of Tibet, the Patkai-Bum hills, thenorthern slopes of the Meghalaya hills, the Assam plains, and the northern portion ofBangladesh. The basin, especially south of Tibet, is characterized by high levels of rainfall.Kangchenjunga (8,586 m) is the only peak above 8,000 m, hence is the highest point within theBrahmaputra basin.The Brahmaputra's upper course was long unknown, and its identity with the Yarlung Tsangpowas only established by exploration in 1884–86. This river is often called theTsangpo-Brahmaputra river.The lower reaches are sacred to Hindus. While most rivers on the Indian subcontinent havefemale names, this river has a rare male name. Brahmaputra means "son of Brahma" inSanskrit.Thank you!Junaid Ahmad Khan`,
  //     bio: ``,
  //     twitter: "",
  //     instagram: "junaidKhan_jak",
  //     index: 20
  // },

  {
    name: "Abhilash Gayan",
    photos: [
      //   "/Exhibition/Abhilash Gayan/1 - Abhilash Gayan.png",
      "/Exhibition/Abhilash Gayan/2 - Abhilash Gayan.png",
      "/Exhibition/Abhilash Gayan/3 - Abhilash Gayan.png",
      "/Exhibition/Abhilash Gayan/4 - Abhilash Gayan.png",
    ],
    title: "Bazaar's over Brahmaputra",
    writeup: `The images captured near the Uzan Bazar ghat in Guwahati gives us an idea about the lives of the people of these communities and their work culture. The fishermen venture out deep into the vastness of the Brahmaputra early in the morning. After they return with their catch, they may sell the fish directly in the nearby markets or sell it to different vendors. 
    
    A major part of the fish catch is marketed fresh in the local fish markets. Located at the Uzan Bazar ghat at the south bank of the Brahmaputra, the Uzan Bazar fish market is one of the largest in the region. This market never fails to impress a fish lover with its huge variety. The place is vastly crowded in the morning hours as plenty of people rush to grab their share of freshly caught fish from the market. The Uzan Bazar fish market holds great significance as the livelihoods of the local fishermen and fish vendors are primarily dependent on the market and the river. It also gives an impression of the rich fishing culture of the native people. 
    
    This is a beautiful example of how the Brahmaputra supports the lives of many local communities and boosts their businesses.`,
    bio: `I am Abhilash Gayan and I am a master’s student at Tezpur University. I am a hobbyist photographer and a beginner. I believe that a photo is worth the story it tells.`,
    twitter: "",
    instagram: "abhilash_gayan",
    email: "agayan401@gmail.com",
    index: 16,
  },
  {
    name: "Hirokjyoti Pathak",
    photos: [
      "/Exhibition/Hirokjyoti Pathak/activities by the river-01 - Hirokjyoti Pathak.png",
      "/Exhibition/Hirokjyoti Pathak/cycle and flood-01 - Hirokjyoti Pathak.png",
      "/Exhibition/Hirokjyoti Pathak/dhobi and boat-01 - Hirokjyoti Pathak.png",
      "/Exhibition/Hirokjyoti Pathak/fresh catch-01 - Hirokjyoti Pathak.png",
      "/Exhibition/Hirokjyoti Pathak/woman in boat-01 - Hirokjyoti Pathak.png",
    ],
    title: `Imaginaries of the Brahmaputra`,
    writeup: `The photographs present various imaginaries of life around the Brahmaputra. A young boy plays with his bicycle in the paddy field which is completely submerged by the flood due to incessant monsoon rains at a village close to the banks of river Brahmaputra on the outskirts of Guwahati city. Fishing is a major source of livelihood, the photographs show a fisherman showing off a catch. 
    
    A lot of daily chores can be usually seen on the banks of the Brahmaputra. It is evident from the scene here where people can be seen brushing teeth, bathing, swimming, applying oil on their bodies on a cold winter morning. On a cold foggy morning, a washerman half-submerged in the chilly water of the river is seen washing piles of clothes and in the background can be seen a boat with fishermen on it starting their day to catch fish in the river. Lastly, a woman rowing her boat and making her way to a nearby road-head to ferry people and essentials back to nearby villages which are mostly submerged by flood in the panikhaiti area of Assam near Guwahati city.`,
    bio: `I am a freelance street and documentary photographer based in Guwahati, Assam. My work focuses on various social, cultural, natural, and political issues from all over the country`,
    twitter: "",
    instagram: "hirokjyotipathak",
    email: "hirok69@gmail.com",
    index: 17,
  },
  {
    name: "Narayani Ganesh",
    photos: [
      //   "/Exhibition/Narayani Ganesh/2016 Brahmaputra rhino in hiding - narayaniganesh.png",
      "/Exhibition/Narayani Ganesh/2016 mother and child Brahmaputra - narayaniganesh 1.png",
      //   "/Exhibition/Narayani Ganesh/2016 watching boats sail past Brahmaputra - narayaniganesh.png",
    ],
    title: `Faces`,
    writeup: `People have happy faces, especially living in settlements all along the river. They seem to have simple lifestyles, dependent on river biodiversity, taking only as much as is required for sustenance.`,
    bio: `Recently retired (January 2021) from The Times of India Group as associate editor, after 34 years. She writes on environment, science, philosophy, travel, tourism, sustainability, heritage etc. She was editor of The Speaking Tree column and feature for 25 years. She is now a freelance writer.`,
    twitter: "",
    instagram: "",
    email: "narayaniganesh@gmail.com",
    index: 18,
  },
  {
    name: "Tanmay Pisolkar",
    photos: [
      "/Exhibition/Tanmay Pisolkar/BRp 7 - tanmay pisolkar.png",
      //   "/Exhibition/Tanmay Pisolkar/BRp1 - tanmay pisolkar.png",
    ],
    title: `Lone Rower`,
    writeup: `The lone rower In the evening sun, I row on. Boat against the current. Waiting for life to happen one more time. Hoping for the last light to show the uncertain path ahead. But I row on, I will row on. In the middle of the river, with head held strong and shoulders ready to take the next charge on. The people beside the river Brahmaputra, through millions of years of cutting through eastern Himalaya and gathering all that it could on the way, finally settles down in the plains of Assam.
    
    And over the years, the river became braided around its islands, enriching the surrounding land. And that attracted the sapiens, they settled, started farming. Then came the greed. The hunger grew. And they started encroaching the very land which gave them life for centuries. In the frame, vast plains of the Brahmaputra and the agriculture fields surrounding. And there, in the corner, we see the growing white spots, racing towards the river, to arrest its path eventually.`,
    bio: `A professional hydrogeologist had been working in Indian Himalayan Region on groundwater management and development. currently working in peninsular India on the community centric watershed development and groundwater management. I am a photography enthusiast with special interests in landscape and night sky. A passionate cricketer who found his second home in the Eastern Himalayas.`,
    twitter: "",
    instagram: "the_north_eastern_anomaly",
    email: "tanmaypisolkar@gmail.com",
    index: 19,
  },
  {
    name: "Vivek Gunawat",
    photos: [
      //   "/Exhibition/Vivek Gunawat/Boat_Ghat_1 - Vivek Gunawat.png",
      //   "/Exhibition/Vivek Gunawat/Boat_Ghat_2 - Vivek Gunawat.png",
      "/Exhibition/Vivek Gunawat/Boat_Ghat_3 - Vivek Gunawat.png",
      //   "/Exhibition/Vivek Gunawat/Boat_Ghat_4 - Vivek Gunawat.png",
      //   "/Exhibition/Vivek Gunawat/Boat_Ghat_5 - Vivek Gunawat.png",
    ],
    title: `Boat`,
    writeup: `Fishing has been one of the popular sources of income for the families that dwell along the Brahmaputra. Without boats, there is no fishing and the most common are these handmade boats (see picture), making the river more picturesque. 
    
    During the time that I spent in Guwahati, I got an opportunity to interact with the locals as well as understand the functioning of their fish economy and the boats. `,
    bio: `I am an IITG Alum, Class of 2014. During my stay on campus, the life around the mighty Brahmaputra was enticing. I tried to observe life around it over weekends, sometimes watching the sunrises and sunsets through numerous ferries that we used to take to the city. And as a Photography enthusiast, I tried to capture as much as I could.`,
    twitter: "@iamgunti",
    instagram: "_gunti",
    email: "vivekgunawat@gmail.com",
    index: 22,
  },

  // {
  //     name: "Natasha Bora",
  //     photos: [
  //         "/Exhibition/Natasha Bora/B1. - Natasha Bora.png",
  //         "/Exhibition/Natasha Bora/B2. - Natasha Bora.png",
  //         "/Exhibition/Natasha Bora/B3. - Natasha Bora.png",
  //         "/Exhibition/Natasha Bora/B4. - Natasha Bora.png",
  //         "/Exhibition/Natasha Bora/B5. - Natasha Bora.png",
  //     ],
  //     title: `People of the River.`,
  //     writeup: `The people of Assam know that "Brahmaputra" is not only a name of one of the river, but it is so much more than that. "Brahmaputra" is a vital source of livelihood for many people. They live because of the river. They live for the river. They live with the river. "Brahmaputra" is a transportation medium, connecting thousands of life, and helping people travel and carry out their different means of occupation and livelihood. "Brahmaputra" is worshipped by many people. It is worshipped because it is believed to be the Son of Lord Brahma and it is regarded as the One and Only male river in India. And last but not the least "Brahmaputra" is an emotion. It gives each and every person of Assam a sense of feeling that "Yes, I am Assamese. And I am proud of it". Assam is a riverine state. And it's people live with the river. They are People of the River.`,
  //     bio: `I am Natasha Bora and I am from Guwahati, Assam. I am studying B.Tech. in Computer Science Engineering in Royal Global University`,
  //     twitter: "",
  //     instagram: " @_.n.a.t.a.s.h.a.____",
  //     index: 26
  // },

  {
    name: "Sudeshna Gupta",
    photos: [
      //   "/Exhibition/Sudeshna Gupta/1 - Sudeshna Gupta.png",
      "/Exhibition/Sudeshna Gupta/2 - Sudeshna Gupta.png",
      //   "/Exhibition/Sudeshna Gupta/3 - Sudeshna Gupta.png",
      "/Exhibition/Sudeshna Gupta/4 - Sudeshna Gupta.png",
      //   "/Exhibition/Sudeshna Gupta/5 - Sudeshna Gupta.png",
    ],
    title: `As the river sees it`,
    writeup: `Walking by the ghat, like every proud Guwahatian, I have always admired the scenic beauty of the mighty Brahmaputra. As the sun sets, the parakeets fly back home, and the wind blowing on my face makes me believe in magic. 
    
    But how does the Brahmaputra see us? A field study allowed me to see the city through his eyes. The rituals might bring peace to the departed soul, but the river isn’t at peace. The Bharalu brings the entire cities waste to the Brahmaputra. A stark contrast of colour where the untreated waste meets the river. A river has a natural capacity for rejuvenation. But how much is too much? The view isn’t pretty from the other side.`,
    bio: `I am currently pursuing a PhD from the Centre for the Environment, IITG. The area of my interest in where the blue meets the green i.e. the wetlands. I believe in the power of storytelling to change perspectives and move mountains.`,
    twitter: "",
    instagram: "neha_tintin_tina",
    email: "sudeshna18@iitg.ac.in",
    index: 20,
  },
  {
    name: "Rizowana Hussaini",
    photos: [
      "/Exhibition/Rizowana Hussaini/WhatsApp Image 2021-06-25 at 10.37.png",
      //   "/Exhibition/Rizowana Hussaini/WhatsApp Image 2021-06-25 at 10.37.29 PM.png",
      //   "/Exhibition/Rizowana Hussaini/WhatsApp Image 2021-06-25 at 10.37.57 PM.png",
      "/Exhibition/Rizowana Hussaini/WhatsApp Image 2021-06-25 at 10.40.png",
      //   "/Exhibition/Rizowana Hussaini/WhatsApp Image 2021-06-25 at 10.41.46 PM.png",
    ],
    title: `Pulling through`,
    writeup: `A series of photographs with accompanying lines of verse displaying the pull of depression the Speaker had through lockdown and steering their will to push on another day.
    As Winter ebbs away, a rush of nostalgia takes its place.
    A solitary figure wends the way right to the water's edge:
    This is no Wanderer Above a Sea of Fog,
    There isn't a cliff or curling fingers of obscurity
    Just a figure, some thoughts and the mighty river.
    Calm, in a pool of sunset, ruminations stray to the changes
    Of a year gone by.

    A crumbling bank. A rivulet
    Streams down to join the bigger body.
    Such is Time
    Wearying down bodies,
    Scratching age into contours.

    In the distance, signs of life:
    Laughter, wind, and moving points
    Of light. Is this misery solely mine
    To battle as if movement after a year of sleep
    Is nothing to rouse out of?

    The face of upset is sometimes tranquil.
    The serene belies
    the depthless currents.
    Agony swirling
    Unseen.
    Perhaps this is Charon
    and this my Styx.

    Or perhaps, this too, like the river,
    Is in motion. What prevents one from going under
    But the promise of daybreak after twilight?
    After this year of stillness, I look
    For another ruse to shelter this
    Unmoored mind.
    Tie me up to the shores of winter:
    Spring tides in gently.`,
    bio: `Rizowana Hussaini is a 1st year PhD student of English Literature at Tezpur University, Assam. She is an ardent lover of nature and pursues amateur photography through windows and walks. Her poetry has been published in the web magazine Vayavya and in the poet’s community blog, Daily Riyaaz.`,
    twitter: "",
    instagram: "giltedged_reads",
    email: "rizowana09@gmail.com",
    index: 21,
  },
  {
    name: "Leons Mathew Abraham",
    photos: [
      "/Exhibition/Leons Mathew Abraham/PSFix_20210601_152952 - Leons Mathew.png",
      "/Exhibition/Leons Mathew Abraham/PSFix_20210610_142031 - Leons Mathew.png",
      "/Exhibition/Leons Mathew Abraham/PSFix_20210611_034852 - Leons Mathew.png",
      "/Exhibition/Leons Mathew Abraham/PSFix_20210611_040434 - Leons Mathew.png",
    ],
    title: `Birds of Brahmaputra`,
    writeup: `The Brahmaputra River is a biodiversity hotspot with a unique ecosystem that has received little attention. It is one of the few rivers in the world to have a riverine dolphin, the Gangetic River Dolphin and a very rare riverine shark, the Ganges Shark. Aside from the diverse range of fishes and mammals found in this river system, it is home to many endemic species of birds like the Swamp Grass Babbler, Marsh Babbler, Black-breasted Parrotbill and the Bengal Florican.
    
    Because of increased human pressure and unsustainable agricultural practises along river banks and "char-chaporis"(river islands), the populations of most of these bird species have become highly fragmented. Furthermore, during the winters, the same areas serve as non-breeding grounds for a large number of migratory birds, many of which are threatened species. Every year, the dynamic changes that occur destroy and create new habitats. But, riverine grasslands play a critical role in slowing erosion. The river banks and char-chaporis are home to a variety of grasses and plants from the genus Saccharum, Typha, Tamarix, and others. Many of these grasses are used for nest making by grassland specialist birds. Grasslands are ploughed down or burned to make way for agriculture. 
    
    While common birds adapt well, many grassland endemics flee to find suitable habitats away from agricultural patches. `,
    bio: `I work as a veterinary microbiologist in Guwahati. I've been there for three years. I completed my master's degree in Veterinary Microbiology at Khanapara College of Veterinary Science. I am a bird watcher who has been exploring the Brahmaputra char-chapori complexes. The movement of birds during the flood season, as well as the arrival of winter birds, has always piqued my interest.`,
    twitter: "",
    instagram: "leonsmathew777",
    email: "leonsreptar@gmail.com",
    index: 23,
  },

  {
    name: "Devadeep Gupta",
    photos: [
      "/Exhibition/Devadeep G/2.png",
      "/Exhibition/Devadeep G/1.png",
      "/Exhibition/Devadeep G/3.png",
      "/Exhibition/Devadeep G/4.png",
      "/Exhibition/Devadeep G/5.png",
    ],
    title: `Flood Walls`,
    writeup: `As monsoons urge on the raging waters of the river, lands of the river banks fall unceasingly. The high, concrete walls defy the water. However, the villages witness the wrath as lands are engulfed to the unsated watery hunger. 

    “We have to build a wall too.” “Yes, we do.” “Like the ones in the city. They protect the shops and the cycles, the poles and the dogs.” “We will make a wall too.” “Yes, we do.” 
    
    The surrounding shapes of the land added to the inspiration, reflecting themselves in the form and material of the intervention. The absurdity of a grass wall used to stop a relentless force of nature expands upon the complex relationship of the community with the river, and their risky existence along its banks. The work contextualizes the irony of the river appearing as a threat to riverine communities, and at the same time, facilitating these literal straws of grass, upon which the villagers of Baladmari Char hang on during days of peril.
    
    The site for wall-making becomes a point of gathering and exchange through dialogue and extends itself as a symbolic statement in the context of the social and cultural history of Baladmari. Undoubtedly, most of the wall is washed away within few hours. A section that remains is morphed into a temporal exhibition space of photographs made around the site during the process of wall-making. The re-activation of the space is intended to generate an impression of the action that outlasts its temporary being.`,
    bio: `My artistic practices come into play as an exploration of perspectives with an emphasis on absurdities of the everyday reality of my subjects. The focus is placed on long-term artistic research that tries to seek a balance between the people and the landscape.
    
    The form of my actions tries to expand, and at the same time contest the widespread blanket understandings associated with the current state of certain social aspects, the outtakes of which are shared through the mediums of installations, photographs, and videos.`,
    twitter: "",
    instagram: "vevaveev",
    email: "devadeep165@gmail.com",
    index: 25,
  },

  {
    name: "Prabir Kumar Talukdar",
    photos: [
      "/Exhibition/Prabir Kumar Talukdar/Picure 1_Prabir - Prabir Talukdar.png",
      "/Exhibition/Prabir Kumar Talukdar/Picture 2_Prabir - Prabir Talukdar.png",
      "/Exhibition/Prabir Kumar Talukdar/Picture 3_Prabir - Prabir Talukdar.png",
      "/Exhibition/Prabir Kumar Talukdar/Picture 4_Prabir - Prabir Talukdar.png",
    ],
    title: `River with a soul`,
    writeup: `The river Brahmaputra has been the lifeline of northeastern India for ages. This mighty river runs for 2880 km through China, India and Bangladesh. Any alluvial river of such magnitude has problems of sediment erosion-deposition attached with it; the Brahmaputra is no exception. The problems of flood, erosion and drainage congestion in the Brahmaputra basin are gigantic.
    
    The Brahmaputra river is characterized by its exceedingly large flow, the enormous volume of sediment load, continuous changes in channel morphology, rapid bed aggradations and bank line recession and erosion. The river has braided channel in most of its course in the alluvial plains of Assam. The lateral changes in channels cause severe erosion along the banks leading to a considerable loss of good fertile land each year. Bank oscillation also causes shifting of outfalls of its tributaries bringing newer areas underwaters.
    
    Thousands of hectares of agricultural land is suffering from severe erosion continuously in the Brahmaputra basin covering parts of states like Assam, Arunachal Pradesh, Meghalaya, Nagaland and Manipur.`,
    bio: `Originally trained as a mechanical engineer, I now find solace in carrying a camera around my neck and write stories as I travel. Currently, I'm researching the theme of early human migration. 
2015 Trust Women Photo Award.
Asia-Africa Foundation (ASEF) Photo Exhibition: Luxembourg, Germany, France, and Finland. Exhibited on the theme of Sustainable Development Goals by the United Nations Centre, Tokyo, Japan. 
Exhibited on the theme of Climate Change, organized by the Centre for Science and Environment, Delhi.
Awarded a scholarship to undergo mobile journalism in Albania.`,
    twitter: "",
    instagram: "prabir.talukdar",
    email: "",
    index: 26,
  },

  {
    name: "Bikramjeet Dhar",
    photos: [
      "/Exhibition/Bikramjeet Dhar/bd30adb0-42d3-4e1b-9860-a046752eb997 - MLA SPAD.png",
      "/Exhibition/Bikramjeet Dhar/f2af5b54-0eda-4614-b7cf-5b1a80489341 - MLA SPAD.png",
    ],
    title: `Erosion in the Brahmaputra`,
    writeup: `The river Brahmaputra has been the lifeline of northeastern India for ages. This mighty river runs for 2880 km through China, India and Bangladesh. Any alluvial river of such magnitude has problems of sediment erosion-deposition attached with it; the Brahmaputra is no exception. The problems of flood, erosion and drainage congestion in the Brahmaputra basin are gigantic. 
    
    The Brahmaputra river is characterized by its exceedingly large flow, the enormous volume of sediment load, continuous changes in channel morphology, rapid bed aggradations and bank line recession and erosion. The river has braided channel in most of its course in the alluvial plains of Assam. The lateral changes in channels cause severe erosion along the banks leading to a considerable loss of good fertile land each year. Bank oscillation also causes shifting of outfalls of its tributaries bringing newer areas underwaters. 
    
    Thousands of hectares of agricultural land is suffering from severe erosion continuously in the Brahmaputra basin covering parts of states like Assam, Arunachal Pradesh, Meghalaya, Nagaland and Manipur.`,
    bio: `I'm an architect by profession. Curious about nature and urbanism and how both of them work in one microcosm.`,
    twitter: "",
    instagram: "_vincent_van_vinci",
    email: "bikramjeetdhar1994@gmail.com",
    index: 27,
  },

  {
    name: "Gurnam Jagota",
    photos: [
      "/Exhibition/Gurnam Jagota/Heavenly Pathway - Gurnam Jagota.png",
      //   "/Exhibition/Gurnam Jagota/Livelihood at the Brahmaputra - Gurnam Jagota.png",
    ],
    title: `Heavenly Path`,
    writeup: `The expansive Brahmaputra is a pilgrimage of harmony, for years altogether this river continues to manifest the meaning of assimilation - Bhupen Hazarika Rivers are still the carriers of most civilizations and growing up in the home of the Brahmaputra river basin, one has a lot to explore about the history of storytelling through the river. Rains and rivers are fundamental in the shaping of the psyche and are the carriers of a riverine culture.
    
    To grow up in Assam is to grow up with the Brahmaputra. I cannot remember a time when I was not intrigued by the river and the myriad relationships it holds for the Assamese people. While the monsoon reminds of the raging floodwaters devastating livelihoods, the same rains that add tranquillity to the river shape the way the Mishings speak of their beautiful romances. Walking along the Brahmaputra, I am making an archive of mobile images, like a journal drifting through patterns of current, looking at forms, colours, to the sound of the monsoon clouds and the birds and the leaves.`,
    bio: `I'm a traveler at heart and like to click pictures. Basically, a hobbyist photographer. I have keen interest in heritage and nature photography`,
    twitter: "",
    instagram: "gurrjag",
    email: "gurrjag@gmail.com",
    index: 28,
  },

  // TODO: no title, no description, no bio
  // {
  //   name: "Moon Ridoy",
  //   photos: [
  //     "/Exhibition/Moon Ridoy/20210608114610__MG_2117 - moon ridoy photograhy.png",
  //     "/Exhibition/Moon Ridoy/20210614115436__MG_2287-01 - moon ridoy photograhy.png",
  //     "/Exhibition/Moon Ridoy/20210614133604__MG_3031_1-02 - moon ridoy photograhy.png",
  //     "/Exhibition/Moon Ridoy/20210627094555__MG_4721-01 - moon ridoy photograhy.png",
  //     "/Exhibition/Moon Ridoy/ridoy 01935738403 (2) - moon ridoy photograhy.png",
  //   ],
  //   title: `PLEASE TITLE`,
  //   writeup: `White breasted kingfisher.
  //   Pied kingfisher.
  //   All picture taken from Bogura, Bangladesh.`,
  //   bio: `Student.`,
  //   twitter: "moonridoy2@gmail.com",
  //   instagram: "ridoymoon_wildlifephotographer",
  //   twitter:"",
  //   index: 33,
  // },

  {
    name: "Agniva Das",
    photos: [
      "/Exhibition/Agniva Das/Brahmaputra 1 - Agniva Das.png",
      //   "/Exhibition/Agniva Das/Brahmaputra 2 - Agniva Das.png",
      "/Exhibition/Agniva Das/Brahmaputra 3 - Agniva Das.png",
    ],
    title: `The mass employer`,
    writeup: `The expansive Brahmaputra is a pilgrimage of harmony, for years altogether this river continues to manifest the meaning of assimilation - Bhupen Hazarika Rivers are still the carriers of most civilizations and growing up in the home of the Brahmaputra river basin, one has a lot to explore about the history of storytelling through the river. Rains and rivers are fundamental in the shaping of the psyche and are the carriers of a riverine culture. To grow up in Assam is to grow up with the Brahmaputra. 
    
    I cannot remember a time when I was not intrigued by the river and the myriad relationships it holds for the Assamese people. While the monsoon reminds of the raging floodwaters devastating livelihoods, the same rains that add tranquillity to the river shape the way the Mishings speak of their beautiful romances. Walking along the Brahmaputra, I am making an archive of mobile images, like a journal drifting through patterns of current, looking at forms, colours, to the sound of the monsoon clouds and the birds and the leaves.`,
    bio: `I'm Agniva Das, a student of law at National Law University and Judicial Academy, Assam. I've been an avid photography enthusiast my entire life and I've been clicking photographs for more than 5 years now. During these 5 years, I've tried my hand in almost every kind of photography genre from Wildlife photography at National Parks, to Landscape photography at beautiful locations such as Sikkim, Andamans and closer to home, Shillong. I'm very eager to try new things out and learn in the process.
    
    In recent times, I've been much more interested in Astrophotography and I'm almost certain that I'll be pursuing this not only as a hobby but also a side profession.`,
    twitter: "",
    instagram: "agniv.jpeg",
    email: "agniv911@gmail.com",
    index: 29,
  },

  {
    name: "Hrishikesh Chowdhury",
    photos: [
      //   "/Exhibition/Hrishikesh Chowdhury/1 - Hrishikesh Chowdhury.png",
      "/Exhibition/Hrishikesh Chowdhury/2 - Hrishikesh Chowdhury.png",
      "/Exhibition/Hrishikesh Chowdhury/3 - Hrishikesh Chowdhury.png",
      "/Exhibition/Hrishikesh Chowdhury/4 - Hrishikesh Chowdhury.png",
      "/Exhibition/Hrishikesh Chowdhury/5 - Hrishikesh Chowdhury.png",
    ],
    title: `Walking along...`,
    writeup: `The expansive Brahmaputra is a pilgrimage of harmony, for years altogether this river continues to manifest the meaning of assimilation - Bhupen Hazarika Rivers are still the carriers of most civilizations and growing up in the home of the Brahmaputra river basin, one has a lot to explore about the history of storytelling through the river. Rains and rivers are fundamental in the shaping of the psyche and are the carriers of a riverine culture.
    
    To grow up in Assam is to grow up with the Brahmaputra. I cannot remember a time when I was not intrigued by the river and the myriad relationships it holds for the Assamese people. While the monsoon reminds of the raging floodwaters devastating livelihoods, the same rains that add tranquillity to the river shape the way the Mishings speak of their beautiful romances. Walking along the Brahmaputra, I am making an archive of mobile images, like a journal drifting through patterns of current, looking at forms, colours, to the sound of the monsoon clouds and the birds and the leaves.`,
    bio: `Hrishikesh Chowdhury is a graduate from Jamia Milia Islamia, India. Presently he is an independent photographer based out of Assam and a member of the artist collective, Northeast Lightbox.`,
    twitter: "",
    instagram: "xinxira_jnr",
    email: "xinxira@gmail.com",
    index: 30,
  },

  {
    name: "Ronit Rimon Sarmah",
    photos: [
      //   "/Exhibition/Ronit Rimon Sarmah/4BD24C4F-C546-4D3F-AC27-E2FB3EF11A6E - Tony Sarmah.png",
      //   "/Exhibition/Ronit Rimon Sarmah/8D2516C1-0A8F-4C54-9DD2-3A96F1E7C206 - Tony Sarmah.png",
      //   "/Exhibition/Ronit Rimon Sarmah/13A719F5-5CF4-44B8-8026-28FA254F18C8 - Tony Sarmah.png",
      "/Exhibition/Ronit Rimon Sarmah/78BADF0F-38C6-45E1-B741-9E251898B821 - Tony Sarmah.png",
      "/Exhibition/Ronit Rimon Sarmah/1049BD19-9DB8-4A58-8A3A-294F8257001B - Tony Sarmah.png",
    ],
    title: `Fishermen`,
    writeup: `We get our proteins from fish. But we never really appreciate the hard work of the people who are behind it. A hot, sunny, afternoon these fishermen hunting for their livelihood content with what they have tell us stories of their daily occupation.`,
    bio: `I am a 19-year-old photographer hailing from Guwahati. Currently studying B.Tech. in Assam Engineering College. Travelling, meeting new people, capturing precious memories, telling unforgettable stories through my lens is my forte and I hope to continue doing so with God’s grace.`,
    twitter: "ronit.r.sarmah_",
    instagram: "",
    email: "ronitrimonsarmah41@gmail.com",
    index: 31,
  },

  {
    name: "Vijayeta Rajkumari",
    photos: [
      "/Exhibition/Vijayeta Rajkumari/20200101000211_IMG_0191~2 - Vijayeta Rajkumari.png",
      "/Exhibition/Vijayeta Rajkumari/20200101000402_IMG_0197~2 - Vijayeta Rajkumari.png",
      "/Exhibition/Vijayeta Rajkumari/20200101000511_IMG_0203~2 - Vijayeta Rajkumari.png",
      "/Exhibition/Vijayeta Rajkumari/IMG_20210625_060755 - Vijayeta Rajkumari.png",
      "/Exhibition/Vijayeta Rajkumari/IMG_20210625_061218~2 - Vijayeta Rajkumari.png",
    ],
    title: `Maas Ghat`,
    writeup: `Guwahati’s Maas Ghat (Fish Port) in an old locality of Uzan Bazaar comes to live in the wee hours of the day. The activities start with fisherman providing their fresh catch to the traders (whole sellers) who bid the fish. A flock of individual buyers also crowd the place as the people of Assam are avid fish lovers. Then some small sellers buy fish at a wholesale rate from Maas Ghat and go on to different localities in Guwahati to sell their day’s stock of fish.
    
    They often can be seen carrying an aluminium drum tied into their bicycles selling fish crying out loud Maas Lage (want fish) in the residential areas of Guwahati. From catching fish in the Brahmaputra to making them reach into the Assamese kitchen there is an extensive network at play. The river has helped shaped not only the economic life of many in the land but also sustained cultures and livelihoods in ways that connect people in intricate ways.`,
    bio: `Vijayeta is a social development practitioner and a researcher who has worked in the thematic areas of gender, livelihoods, and governance. She is a graduate of TISS, Mumbai. She is currently residing in Guwahati, Assam`,
    twitter: "@Vijayeta_R",
    instagram: "vjay_jay__",
    email: "vijayeta.rajkumari@gmail.com",
    index: 33,
  },

  {
    name: "Shivam Singh",
    photos: [
      "/Exhibition/Shivam Singh/AF419C25-272A-457E-A10B-5F39FB9FB3F2 - Shivam Singh.png",
      "/Exhibition/Shivam Singh/E4DAB573-FA7F-4B5A-9BB0-FEC2F80C8E91 - Shivam Singh.png",
    ],
    title: `Essence of life`,
    writeup: `Umananda, the island is the adobe of Lord Shiva, who lies in the middle of the river Brahmaputra. The ferry fetches people from both sides of the river to this small riverine island. A visit to the temple early in the morning can provide you with solace from the hustle-bustle of the city. 
    
    The joyous ride, throughout the river Brahmaputra, is itself soothing. The river is integral to the lives of the people of Guwahati. Sitting by the banks of the river, watching the river turn golden, with the sun setting far in the west not only comforts the mind but also enriches the soul. And if you spot a dolphin jumping through the gushing waters, the thrill is unparalleled. The river has been witness to countless emotions and myriad stories of the people that it shares the path. 
    
    The sorrows of the floods and the hope that it brings, with the water that it carries, from far away mountains, holds within them the tales of lives, that it touches every day. Meandering its way through, the river is the essence of life, in its various distinct forms. Thinking of it, I go back to the evening, I saw her in full delight, the very first time.`,
    bio: `I am a student of MA Development Studies. I like to explore and sometimes write about it.`,
    twitter: "",
    instagram: "shivamsingh13",
    email: "shivamsingh@iitg.ac.in",
    index: 34,
  },

  {
    name: "Wengling Wang",
    photos: [
      "/Exhibition/Wengling Wang/5 (1) 1.png",
      "/Exhibition/Wengling Wang/2 (1) 1.png",
      "/Exhibition/Wengling Wang/6 (1) 1.png",
    ],
    title: `Hope`,
    writeup: `Two facets build the relationship between human beings and the Yarlung-Zangbo River - the “countryside” and “River and lakes”. Some may say that to embrace your soul you need a countryside full of green plants and enchantments.
    
    To do so, retain the idyllic scenery of birds and flowers, enable the people to see mystic mountains, and let everyone wonder about the purity of shared waters. Communities find their way to live alongside the lucid waters and blooming mountains as it brings them hope and other opportunities for a better future. `,
    bio: `Dr. Wenling Wang is an Assistant Professor at the Asian International Rivers Centre of Yunnan University, China. She completed her Ph.D. in Ecology from the same center. She was part of the Knowledge Exchange on International Water Project (2012-2015), which was funded by the UK Government’s  Department for International Development (DFID) and jointly implemented by Tsinghua University and Yunnan University, China.
    
    The project aimed at promoting international cooperation and developing advanced interdisciplinary capacity on transboundary waters within mainland Asia. She has several articles published in international journals on topics ranging from water and ecological security, review of hydropower developments, etc., in the context of transboundary river basins.  `,
    twitter: "",
    instagram: "",
    email: "wangwl@ynu.edu.cn",
    index: 35,
  },

  {
    name: "Chandrani Sinha",
    photos: [
      "/Exhibition/Chandrani Sinha/children of chars - chandrani Sinha.png",
      "/Exhibition/Chandrani Sinha/Fishing in chars - chandrani Sinha.png",
      "/Exhibition/Chandrani Sinha/life in chars (2) - chandrani Sinha.png",
      "/Exhibition/Chandrani Sinha/Old man in chars - chandrani Sinha.png",
    ],
    title: `Life in river island of Brahmaputra`,
    writeup: `Children of char: The photo is taken in one of the chars in Kamrup rural in Assam depicts the condition of the children staying in the river island know as chars in local language. The hardship they had to face since birth, the girl child are more vulnerable to atrocities and trafficking.
    
    Fishing in char: A boat waiting for his luck to catch fishes near a char. Most of the char communities are dependent on fishing. Due to climate change they get a less catch nowadays.
    
    Life in chars: A skeleton of a dead goat. This photo depicts the hardship of river and the people staying in its bank. As every year lot of their cattle die due to flood. 

    Old man in char: Jabbar Ali, a 61 years old man returning from his work to his char Major Tup situated in Kamrup rural in Assam. This is his routine since past 21 years.`,
    bio: `Chandrani Sinha is an independent multimedia journalist, currently based in Guwahati Assam India. She has been reporting stories from Northeast India for 9 years. Currently, she contributes to both Indian and international media organizations. She intensively works on climate change in conflict areas, the environment, and sustainable development along with other human-interest stories. She also covers the eastern corridor of India along with all the North-Eastern states.`,
    twitter: "@chandranisinha1",
    instagram: "chandranisinha",
    email: "chandrani.ghy@gmail.com",
    index: 36,
  },

  {
    name: "Ashima Sharma",
    photos: [
      //   "/Exhibition/Ashima Sharma/IMG 0000 - ashima sharma.png",
      //   "/Exhibition/Ashima Sharma/IMG_0207 - ashima sharma.png",
      "/Exhibition/Ashima Sharma/IMG_9290 - ashima sharma.png",
      "/Exhibition/Ashima Sharma/IMG_9329 - ashima sharma.png",
      "/Exhibition/Ashima Sharma/IMG_9382 - ashima sharma.png",
    ],
    title: `The Shifting Chars of Brahmaputra`,
    writeup: `Chars or sandbanks in the Brahmaputra are home to approximately twenty-five lakh people whose lives are like shifting sand. When Amitav Ghosh, in the title of his book, The Hungry Tide, personifies the tide to hunger, it extends beyond its literal sense to show how islanders fight with calamitous environment each day, yet choose to live with it. 
    
    He writes: "Transformation is the rule of life: rivers stray from week to week, and islands are made and unmade in days.” (Ghosh, 2005) LIVING WITH THE RIVER Pagla Nodi or ‘mad river’ is a song of the boatmen. It captures the many moods of the river—as a ravaging force during the flood, as a nurturer and as the only reality of people for whom land and water is the same.`,
    bio: `Ashima Sharma is a graduate in (B.A. (Hons.) Journalism and Communication from O.P. Jindal Global University, India. She will be joining the London School of Economics and Political Science in September 2021 to pursue a master’s degree in human rights. In October 2020 she was awarded the Graduate Research Immersion Programme (GRIP) Scholarship by O.P Jindal Global University to research on the Rohingyas and their erasure of human rights.
    
    Her focus in research has been on refugees and migration and has worked with an international film production researching on the Rohingyas. She also runs her own podcast called The Hook (https://thehook.podbean.com). She has previously worked with Innovative Change Collaborative (ICCo) as a consultant- research and documentation on a project titled Work: No Child’s Business (WNCB). The alliance includes Save the Children, UNICEF, and Stop Child Labor Coalition in six countries.`,
    twitter: "@AshimaS4",
    instagram: "____ashima____",
    email: "ashimasharma121948@gmail.com",
    index: 37,
  },

  {
    name: "Xiawei Liao",
    photos: [
      "/Exhibition/Xiawei Liao/Xiawei 1 - Arundhati Deka.png",
      "/Exhibition/Xiawei Liao/Xiawei 2 - Arundhati Deka.png",
    ],
    title: `Living with the river`,
    writeup: `I have spent a week during the last summer driving along the river, from the Yarlung Tsangpo Grand Canyon to the Lhasa city. I was not only awed by the magnificent nature along the river, the beautiful starry sky in the night, I was also touched by the different stories and believes that I heard along the way, from the people who have lived with such nourishing water, mountains, trees and animals for decades.
    
    I was taught about the different burial styles of the Tibetan people, including the celestial burial, water burial and so forth. The idea that touched me the most was that, I was told, Tibetans do not eat that much fish and birds because they believe that their ancestors live within them. I texted this to my friends and my friend replied: I wonder if that embeds any traditional thoughts for biodiversity conservation! Yes, I wonder too.`,
    bio: `Xiawei Liao is a water resource specialist based in World Bank Beijing Office. He has worked on a wide range of water-related issues, including water security, water supply and sanitation, flood management and so on in several South and East Asian countries. Xiawei holds a PhD in Geography and the Environment from the University of Oxford and has published more than 20 journal articles and a book on China’s water issues.
    
    He started working at the World Bank on the Brahmaputra Dialogue, a multi-track multi-country dialogue funded by the South Asia Water Initiative, a multi-donor Trust Fund managed by the World Bank.`,
    twitter: "",
    instagram: "",
    email: "xliao@worldbank.org",
    index: 38,
  },

  // {
  //     name: "Tanushree Baruah",
  //     photos: [
  //         "/Exhibition/Tanushree Baruah/River Women - Tanushree Baruah.png",
  //         "/Exhibition/Tanushree Baruah/Urban Flood - Tanushree Baruah.png"
  //     ],
  //     title: `River as a space for women, Rural and urban floods`,
  //     writeup: `River as a space for women The Brahmaputra river might reflect a gendered perspective from its very name, ‘Son of Lord Brahma’. The river is being regarded as ‘male’ for the incomparable, mighty-armed Brahmaputra has been rolling on down the ages, bearing witness to the struggles of the riparian communities. However, the infinite horizon of the Brahmaputra has embraced a thousand tales of brave and bold women of the land of Assam. The Brahmputra resides in every Assamese heart as the Luit (another name of Brahmaputra in Assam). The banks of the Luit still reverberates the voices of revolutionary women like Mula Gabharu, Sati Joymoti, Kanaklata Baruah, Chandraprabha Saikiani, and such other valiant figures who lived, fought, and died for the pride and sovereignty of the Luit. The rustling sound of the Luit waters inspires every woman of the land, far and wide, to dream, be bold, and be empowered to fight life’s odds. The ceaseless flows of the Brahmaputra are a reminder that dreams have no boundaries and this is what is rooted in every woman of today. In short, the Brahmaputra has sustained a land of equality where no gender biases exist, and together, every being strives to build up a new Assam. Urban Floods Being an unplanned city with sprawling urbanization, Guwahati, the biggest city on the south banks of the mighty Brahmaputra in Assam encounters a nightmare with a single heavy shower. With the surrounding green hills being deforested and flattened, the urban dwellers residing on the plains often experience havoc from flash floods. “Oh what has man made of nature! For today the Luit is furious and growling, Making inroads into peaceful places of dwellings; Disturbing the tranquility of innocent hearts Bestowing fears and tears of sorrow, Breaking dreams of a blissful tomorrow.”`,
  //     bio: `Born and brought up and, currently residing by the south banks of the mighty Brahmaputra. As a child, grew up singing the famous song by Jyotiprasad Agarwala, "Luitore pani jabi o' boi.." as taught by my mother (who also bears the name of the river, "Luit") and coincidently, today I am researching on the Brahmaputra river as a PhD scholar from IIT Guwahati, India. The Brahmaputra has and will always reside in my heart.`,
  //     twitter: " @TanushreeBarua3",
  //     instagram: "",
  //     index: 37
  // },
];

module.exports.populateDB = () => {
  newData.forEach((data, idx) => {
    var newProject = new Project(data);

    newProject.save((err) => {
      if (err) throw err;
      else {
        // console.log('Project saved')
        // console.log(newProject);
        console.log(idx);
      }
    });
  });
};

module.exports.clearDB = () => {
  Project.deleteMany({}, (err) => {
    if (err) throw err;
    else {
      console.log("Database cleared.");
    }
  });
};

module.exports.clearAllComments = () => {
  Comment.deleteMany({}, (err) => {
    if (err) throw err;
    else {
      console.log("Comments cleared");
    }
  });
};
