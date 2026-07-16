// Add one object per place. A map pin appears only when the place has photos.
// Latitude and longitude determine the pin position on the world map.
window.TRAVEL_PLACES = [
  {
    id: "reykjavik",
    city: "Reykjavík",
    country: "Iceland",
    region: "Reykjavík · Iceland",
    date: "November 2025",
    cover: "./assets/travel/iceland/reykjavik-10.jpeg",
    lat: 64.1466,
    lng: -21.9426,
    note: "Photographs and memories from Reykjavík and Iceland.",
    noteLead: "Some places are seen. Iceland is felt",
    notes: [
      "My first journey in Europe, although technically not on the mainland. To be honest, besides the sea and the aurora, Iceland’s landscapes weren’t really my favorite. The vast emptiness isn’t usually what I’m drawn to. But I truly loved its people. Walking through the streets of Reykjavík and spending the evenings in local bars, I found a pace of life I really admire. Everyone seemed relaxed and content—the kind of life I often wish for amid my busy days. I also couldn’t help wondering how people here, with nearly 18 hours of darkness in winter, still manage to stay so warm and full of light.",
      "One funny story: our taxi driver didn’t seem to like love songs. By coincidence, we got the same driver twice during different parts of our trip. She asked us to share some Chinese songs with her, but when we played a few love songs, she quickly skipped them. Maybe after spending so much of the year in the dark, people here simply prefer music that feels brighter and more cheerful. :)"
    ],
    photos: [
      { src: "./assets/travel/iceland/reykjavik-01.jpeg", alt: "Travel photograph from Reykjavík, Iceland", caption: "Reykjavík · Iceland", orientation: "portrait" },
      { src: "./assets/travel/iceland/reykjavik-02.jpeg", alt: "Travel photograph from Reykjavík, Iceland", caption: "Reykjavík · Iceland" },
      { src: "./assets/travel/iceland/reykjavik-03.jpeg", alt: "Travel photograph from Reykjavík, Iceland", caption: "Reykjavík · Iceland", orientation: "portrait" },
      { src: "./assets/travel/iceland/reykjavik-04.jpeg", alt: "Travel photograph from Reykjavík, Iceland", caption: "Reykjavík · Iceland", orientation: "wide" },
      { src: "./assets/travel/iceland/reykjavik-05.jpeg", alt: "Travel photograph from Reykjavík, Iceland", caption: "Reykjavík · Iceland", orientation: "portrait" },
      { src: "./assets/travel/iceland/reykjavik-06.jpeg", alt: "Travel photograph from Reykjavík, Iceland", caption: "Reykjavík · Iceland" },
      { src: "./assets/travel/iceland/reykjavik-07.jpeg", alt: "Travel photograph from Reykjavík, Iceland", caption: "Reykjavík · Iceland" },
      { src: "./assets/travel/iceland/reykjavik-08.jpeg", alt: "Travel photograph from Reykjavík, Iceland", caption: "Reykjavík · Iceland", orientation: "wide" },
      { src: "./assets/travel/iceland/reykjavik-09.jpeg", alt: "Travel photograph from Reykjavík, Iceland", caption: "Reykjavík · Iceland" },
      { src: "./assets/travel/iceland/reykjavik-10.jpeg", alt: "Travel photograph from Reykjavík, Iceland", caption: "Reykjavík · Iceland" }
    ]
  },
  {
    id: "singapore",
    city: "Singapore",
    country: "Singapore",
    region: "Singapore",
    date: "",
    cover: "./assets/travel/singapore/singapore-01.jpeg",
    lat: 1.3521,
    lng: 103.8198,
    noteLead: "First conference, endless possibilities.",
    notes: [
      "Looking back, I spent more time pretending I understood than actually understanding. I walked through poster sessions, talked to lots of people, and occasionally smiled because I had no idea how to continue the conversation. By the time everyone else was heading to conference dinners and receptions, I was still figuring out how conferences even worked. First conference experience, I guess. Maybe next time I’ll know what I’m doing.",
      "Singapore left a wonderful impression on me. It was a bit hot, but incredibly clean, green, and pleasant. We even visited Universal Studios on a quiet day, so I got to ride almost everything twice. I have a feeling this won’t be my last time here. See you next time, Singapore, hopefully as a slightly more experienced PhD student."
    ],
    photos: [
      { src: "./assets/travel/singapore/singapore-01.jpeg", alt: "Travel photograph from Singapore", orientation: "wide" },
      { src: "./assets/travel/singapore/singapore-02.jpeg", alt: "Travel photograph from Singapore", orientation: "wide" },
      { src: "./assets/travel/singapore/singapore-03.jpeg", alt: "Travel photograph from Singapore", orientation: "wide" },
      { src: "./assets/travel/singapore/singapore-04.jpeg", alt: "Travel photograph from Singapore", orientation: "wide" },
      { src: "./assets/travel/singapore/singapore-05.jpeg", alt: "Travel photograph from Singapore", orientation: "wide" },
      { src: "./assets/travel/singapore/singapore-06.jpeg", alt: "Travel photograph from Singapore", orientation: "wide" },
      { src: "./assets/travel/singapore/singapore-07.jpeg", alt: "Travel photograph from Singapore", orientation: "wide" },
      { src: "./assets/travel/singapore/singapore-08.jpeg", alt: "Travel photograph from Singapore", orientation: "wide" },
      { src: "./assets/travel/singapore/singapore-09.jpeg", alt: "Travel photograph from Singapore", orientation: "wide" }
    ]
  },
  {
    id: "japan",
    city: "Japan",
    country: "Japan",
    region: "Tokyo · Kyoto · Osaka · Nagoya",
    date: "",
    cover: "./assets/travel/japan/japan-01.jpeg",
    lat: 36.2048,
    lng: 138.2529,
    cities: ["Tokyo", "Kyoto", "Osaka", "Nagoya"],
    noteLead: "Begin late, never too late.",
    notes: [
      "Because of the pandemic, this trip to Japan was delayed by two years. What was supposed to be a visit with new university friends eventually became our graduation trip.",
      "One thing I really loved was the atmosphere on campus. Students gathered everywhere to discuss ideas, and the self-study spaces felt surprisingly relaxed. People seemed focused on learning instead of competing with one another. It was a quiet, comfortable environment that made me appreciate a different kind of university life."
    ],
    photos: [
      { src: "./assets/travel/japan/japan-01.jpeg", alt: "Travel photograph from Japan", orientation: "wide" },
      { src: "./assets/travel/japan/japan-02.jpeg", alt: "Travel photograph from Japan", orientation: "portrait" },
      { src: "./assets/travel/japan/japan-03.jpeg", alt: "Travel photograph from Japan", orientation: "wide" },
      { src: "./assets/travel/japan/japan-04.jpeg", alt: "Travel photograph from Japan", orientation: "portrait" },
      { src: "./assets/travel/japan/japan-05.jpeg", alt: "Travel photograph from Japan", orientation: "wide" },
      { src: "./assets/travel/japan/japan-06.jpeg", alt: "Travel photograph from Japan", orientation: "wide" },
      { src: "./assets/travel/japan/japan-07.jpeg", alt: "Travel photograph from Japan", orientation: "wide" },
      { src: "./assets/travel/japan/japan-08.jpeg", alt: "Travel photograph from Japan", orientation: "wide" },
      { src: "./assets/travel/japan/japan-09.jpeg", alt: "Travel photograph from Japan", orientation: "wide" }
    ]
  },
  {
    id: "san-diego",
    city: "San Diego",
    country: "United States",
    region: "California · United States",
    date: "",
    cover: "./assets/travel/san-diego/san-diego-01.jpeg",
    lat: 32.7157,
    lng: -117.1611,
    noteLead: "A brave jump",
    notes: [
      "San Diego is a wonderful city.I instantly fell in love with the city. The weather was perfect, life felt slower than in the Bay Area, and everywhere you looked there was a beautiful view. It was the kind of place that made you want to stay a little longer.",
      "I’ve always liked doing something memorable on special days, so this year I went skydiving. It was nothing like I had imagined—no real feeling of weightlessness, just the wind, an incredible view, and a memory I’ll probably keep forever. A huge thank you to my friends, Boxuan and Yihao, for celebrating with me, and especially to Boxuan for going jump with me.",
      "Here’s to 23. And hopefully, one day, to giving my own oral presentation. Happy birthday to me."
    ],
    photos: [
      { src: "./assets/travel/san-diego/san-diego-01.jpeg", alt: "Travel photograph from San Diego, California", orientation: "wide" },
      { src: "./assets/travel/san-diego/san-diego-02.jpeg", alt: "Travel photograph from San Diego, California", orientation: "wide" },
      { src: "./assets/travel/san-diego/san-diego-03.jpeg", alt: "Travel photograph from San Diego, California", orientation: "wide" },
      { src: "./assets/travel/san-diego/san-diego-04.jpeg", alt: "Travel photograph from San Diego, California", orientation: "wide" },
      { src: "./assets/travel/san-diego/san-diego-05.jpeg", alt: "Travel photograph from San Diego, California", orientation: "wide" },
      { src: "./assets/travel/san-diego/san-diego-06.jpeg", alt: "Travel photograph from San Diego, California", orientation: "wide" },
      { src: "./assets/travel/san-diego/san-diego-07.jpeg", alt: "Travel photograph from San Diego, California", orientation: "wide" },
      { src: "./assets/travel/san-diego/san-diego-08.jpeg", alt: "Travel photograph from San Diego, California", orientation: "wide" },
      { src: "./assets/travel/san-diego/san-diego-09.jpeg", alt: "Travel photograph from San Diego, California", orientation: "wide" }
    ]
  },
  {
    id: "qinghai",
    city: "Qinghai",
    country: "China",
    region: "Qinghai · China",
    date: "",
    cover: "./assets/travel/qinghai/qinghai-01.jpeg",
    lat: 35.7448,
    lng: 96.4077,
    noteLead: "Book close; road open",
    notes: [
      "A graduation trip through Qinghai and Gansu with my bros, something I’d been looking forward to for a long time. Northwest China is even more breathtaking than I expected. Endless roads, vast landscapes, deserts, lakes… every day felt like a different postcard. The only downside? The drives were *long*, and the weather seemed to change its mind every few hours.",
      "Still, it was absolutely worth it. Big thanks to my bros, Yuao and Hongwei, for making the trip happen, especially for leaving their girlfriends at home to come travel with me instead. 😂",
      "Until next time."
    ],
    photos: [
      { src: "./assets/travel/qinghai/qinghai-01.jpeg", alt: "Travel photograph from Qinghai, China", orientation: "wide" },
      { src: "./assets/travel/qinghai/qinghai-02.jpeg", alt: "Travel photograph from Qinghai, China", orientation: "wide" },
      { src: "./assets/travel/qinghai/qinghai-03.jpeg", alt: "Travel photograph from Qinghai, China", orientation: "wide" },
      { src: "./assets/travel/qinghai/qinghai-04.jpeg", alt: "Travel photograph from Qinghai, China", orientation: "wide" },
      { src: "./assets/travel/qinghai/qinghai-05.jpeg", alt: "Travel photograph from Qinghai, China", orientation: "wide" },
      { src: "./assets/travel/qinghai/qinghai-06.jpeg", alt: "Travel photograph from Qinghai, China", orientation: "wide" },
      { src: "./assets/travel/qinghai/qinghai-07.jpeg", alt: "Travel photograph from Qinghai, China", orientation: "wide" },
      { src: "./assets/travel/qinghai/qinghai-08.jpeg", alt: "Travel photograph from Qinghai, China", orientation: "wide" },
      { src: "./assets/travel/qinghai/qinghai-09.jpeg", alt: "Travel photograph from Qinghai, China", orientation: "wide" },
      { src: "./assets/travel/qinghai/qinghai-10.jpeg", alt: "Travel photograph from Qinghai, China", orientation: "wide" }
    ]
  }
  /*
  {
    id: "san-francisco",
    city: "San Francisco",
    country: "United States",
    region: "California · United States",
    date: "July 2026",
    lat: 37.7749,
    lng: -122.4194,
    note: "A short memory or introduction to this journey.",
    photos: [
      {
        src: "./assets/travel/san-francisco-01.jpg",
        alt: "Describe what is visible in the photograph",
        caption: "A short caption or location",
        orientation: "wide"
      },
      {
        src: "./assets/travel/san-francisco-02.jpg",
        alt: "Describe what is visible in the photograph",
        caption: "A short caption or location",
        orientation: "portrait"
      }
    ]
  }
  */
];
