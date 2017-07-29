export function initialize(application) {
  // appInstance.inject('route', 'foo', 'service:foo');

  var store = application.lookup('service:store');

  var breweries =  [
    {
      id: 1,
      name: "Lagunitas",
      address: "161 East Bay Street, Charleston, SC 29401",
      location: "Downtown",
      website: "https://lagunitas.com/taprooms/charleston",
      hours_string: "Open Mon - Sat noon - 9:00 p.m., Sun closed",
      hours: [
        {id: 0, name: "Monday", open: 1200, close: 2100},
        {id: 1, name: "Tuesday", open: 1200, close: 2100},
        {id: 2, name: "Wednesday", open: 1200, close: 2100},
        {id: 3, name: "Thursday", open: 1200, close: 2100},
        {id: 4, name: "Friday", open: 1200, close: 2100},
        {id: 5, name: "Saturday", open: 1200, close: 2100},
        {id: 6, name: "Sunday", open: null, close: null}
      ],
      description: "The only brewery in the heart of downtown, just a block from Waterfront Park. The big-name brewery serves up a decent variety of brews along with a solid food selection. Live music every day at 4:30 p.m.",
    },
    {
      id: 2,
      name: "Tradesman Brewing Co.",
      address: "1639 Tatum Street, Charleston, SC 29412",
      location: "James Island",
      website: "http://www.tradesmanbrewing.com/",
      hours_string: "Open Tue - Fri 4:30 p.m. - 8:00 p.m., Sat noon - 8:00 p.m., Sun & Mon closed",
      hours: [
        {id: 0, name: "Monday", open: null, close: null},
        {id: 1, name: "Tuesday", open: 1630, close: 2000},
        {id: 2, name: "Wednesday", open: 1630, close: 2000},
        {id: 3, name: "Thursday", open: 1630, close: 2000},
        {id: 4, name: "Friday", open: 1630, close: 2000},
        {id: 5, name: "Saturday", open: 1200, close: 2000},
        {id: 6, name: "Sunday", open: null, close: null}
      ],
      description: "The lone brewery on James Island, Tradesman touts it's 'well built beer'. One thing that can't be argued is the wide variety of brews on tap. Check out their Tuesday night yoga.",
    },
    {
      id: 3,
      name: "Fat Pig Brewery",
      address: "3690 State Road S-10-1024, Johns Island, SC 29455",
      location: "Johns Island",
      website: "http://fatpigbrewing.com/",
      hours_string: "Open Thu - Fri 4:00 p.m. - 8:30 p.m., Sat noon - 9:00 p.m., Sun - Wed closed",
      hours: [
        {id: 0, name: "Monday", open: null, close: null},
        {id: 1, name: "Tuesday", open: null, close: null},
        {id: 2, name: "Wednesday", open: null, close: null},
        {id: 3, name: "Thursday", open: 1600, close: 2030},
        {id: 4, name: "Friday", open: 1600, close: 2030},
        {id: 5, name: "Saturday", open: 1200, close: 2100},
        {id: 6, name: "Sunday", open: null, close: null}
      ],
      description: "A fledgling operation, Fat Pig had been brewing out of some other local shops like Tradesman Brewing until opening their own location in Spring 2017. Though they're new, they've already started a barrel aged program.",
    },
    {
      id: 4,
      name: "Low Tide Brewing",
      address: "2863 Maybank Highway, Johns Island, SC 29455",
      location: "Johns Island",
      website: "http://lowtidebrewing.com/",
      hours_string: "Open Wed & Thu 3:00 p.m. - 10:00 p.m., Sat noon - midnight, Sun noon - 8:00 p.m., Mon & Tue closed",
      hours: [
        {id: 0, name: "Monday", open: null, close: null},
        {id: 1, name: "Tuesday", open: null, close: null},
        {id: 2, name: "Wednesday", open: 1500, close: 2200},
        {id: 3, name: "Thursday", open: 1500, close: 2200},
        {id: 4, name: "Friday", open: 1500, close: 2200},
        {id: 5, name: "Saturday", open: 1200, close: 2400},
        {id: 6, name: "Sunday", open: 1200, close: 2000}
      ],
      description: "Low Tide prides themselves on working with chefs and restaurants to master beer and food pairing at the beginning of the process, before any beer is brewed.",
    },
    {
      id: 5,
      name: "Ghost Monkey Brewing",
      address: "522 Wando Lane, Mt Pleasant, SC 29464",
      location: "Mount Pleasant",
      website: "http://www.ghostmonkeybrewery.com/",
      hours_string: "Open Thu 4:00 p.m. - 9:00 p.m., Fri 4:00 p.m. - 10:00 p.m., Sat 11:00 a.m. - 10:00 p.m., Sun noon - 6:00 p.m., Mon - Wed closed",
      hours: [
        {id: 0, name: "Monday", open: null, close: null},
        {id: 1, name: "Tuesday", open: null, close: null},
        {id: 2, name: "Wednesday", open: null, close: null},
        {id: 3, name: "Thursday", open: 1600, close: 2100},
        {id: 4, name: "Friday", open: 1600, close: 2200},
        {id: 5, name: "Saturday", open: 1100, close: 2200},
        {id: 6, name: "Sunday", open: 1200, close: 1800}
      ],
      description: "Though Ghost Monkey doesn't offer a ton of options, they do have a decent variety. They also offer a Growler Club where you can get a fancy growler (with refills) and some Ghost Monkey swag.",
    },
    {
      id: 6,
      name: "Two Blokes Brewing",
      address: "547 Long Point Road #101, Mt Pleasant, SC 29464",
      location: "Mount Pleasant",
      website: "http://twoblokesbrewing.com/",
      hours_string: "Open Mon - Fri 4:00 p.m. - 9:00 p.m., Sat noon - 9:00 p.m., Sun noon - 6:00 p.m.",
      hours: [
        {id: 0, name: "Monday", open: 1600, close: 2100},
        {id: 1, name: "Tuesday", open: 1600, close: 2100},
        {id: 2, name: "Wednesday", open: 1600, close: 2100},
        {id: 3, name: "Thursday", open: 1600, close: 2100},
        {id: 4, name: "Friday", open: 1600, close: 2100},
        {id: 5, name: "Saturday", open: 1200, close: 2100},
        {id: 6, name: "Sunday", open: 1200, close: 1600}
      ],
      description: "The large bar, games like giant jenga and darts, and an area especially for kids to hang out makes Two Blokes a comfortable place to spend the evening. Oh yea, and they've got quite a selection of beers.",
    },
    {
      id: 7,
      name: "Westbrook Brewing",
      address: "510 Ridge Road, Mt Pleasant, SC 29464",
      location: "Mount Pleasant",
      website: "http://westbrookbrewing.com/",
      hours_string: "Open Tue - Fri 4:00 p.m. - 7:00 p.m., Sat noon - 6:00 p.m., Sun & Mon closed",
      hours: [
        {id: 0, name: "Monday", open: null, close: null},
        {id: 1, name: "Tuesday", open: 1600, close: 1900},
        {id: 2, name: "Wednesday", open: 1600, close: 1900},
        {id: 3, name: "Thursday", open: 1600, close: 1900},
        {id: 4, name: "Friday", open: 1600, close: 1900},
        {id: 5, name: "Saturday", open: 1200, close: 1600},
        {id: 6, name: "Sunday", open: null, close: null}
      ],
      description: "One of the bigger fixtures in the local craft beer scene, Westbrook has built a name on solid brews like their White Thai and gose. Stop by for tour of their expansive facility.",
    },
    {
      id: 8,
      name: "COAST Brewing Company",
      address: "Charleston Naval Complex, 1250 2nd St N, North Charleston, SC 29405",
      location: "North Charleston",
      website: "http://www.coastbrewing.com/",
      hours_string: "Open Thu & Fri 4:00 p.m. - 7:00 p.m., Sat noon - 5:00 p.m., Sun - Wed closed",
      hours: [
        {id: 0, name: "Monday", open: null, close: null},
        {id: 1, name: "Tuesday", open: null, close: null},
        {id: 2, name: "Wednesday", open: null, close: null},
        {id: 3, name: "Thursday", open: 1600, close: 1900},
        {id: 4, name: "Friday", open: 1600, close: 1900},
        {id: 5, name: "Saturday", open: 1200, close: 1700},
        {id: 6, name: "Sunday", open: null, close: null}
      ],
      description: "Located close to the water on the old Navy base, COAST has been making waves around town with their kölsch. They make all of their beers with fully organic ingredients.",
    },
    {
      id: 9,
      name: "Freehouse Brewery",
      address: "2895 Pringle Street B, North Charleston, SC 29405",
      location: "North Charleston",
      website: "http://freehousebeer.com/",
      hours_string: "Open Tue - Fri 3:00 p.m. - 8:00 p.m., Sat 1:00 p.m. - 8:00 p.m., Sun & Mon closed",
      hours: [
        {id: 0, name: "Monday", open: null, close: null},
        {id: 1, name: "Tuesday", open: 1500, close: 2000},
        {id: 2, name: "Wednesday", open: 1500, close: 2000},
        {id: 3, name: "Thursday", open: 1500, close: 2000},
        {id: 4, name: "Friday", open: 1500, close: 2000},
        {id: 5, name: "Saturday", open: 1300, close: 2000},
        {id: 6, name: "Sunday", open: null, close: null}
      ],
      description: "Situated in a cozy warehouse on the banks of the Ashley River, Freehouse feels a little like drinking in someone's garage. A garage with a gorgeous view and solid beer, that is.",
    },
    {
      id: 10,
      name: "Holy City Brewing",
      address: "4155 Dorchester Road, Charleston, SC 29405",
      location: "North Charleston",
      website: "https://holycitybrewing.com/",
      hours_string: "Open 11:00 a.m. - 8:00 p.m. Sun - Thu, 11:00 a.m. - 9:00 p.m. Fri & Sat",
      hours: [
        {id: 0, name: "Monday", open: 1100, close: 2000},
        {id: 1, name: "Tuesday", open: 1100, close: 2000},
        {id: 2, name: "Wednesday", open: 1100, close: 2000},
        {id: 3, name: "Thursday", open: 1100, close: 2000},
        {id: 4, name: "Friday", open: 1000, close: 2100},
        {id: 5, name: "Saturday", open: 1000, close: 2100},
        {id: 6, name: "Sunday", open: 1100, close: 2000}
      ],
      description: "Holy City has 20+ different beers on tap every day, with a good mix of their staples and rotating brews. Not to mention the solid food selection. The brewery has a great patio where you can toss some cornhole and listen to live music, just come prepared for the bugs.",
    },
    {
      id: 11,
      name: "Snafu Brewing",
      address: "3280 Industry Drive, North Charleston, South Carolina 29418",
      location: "North Charleston",
      website: "http://www.snafubrewingcompany.com/",
      hours_string: "Open Thu & Fri 3:30 p.m. - 7:30 p.m., Sat noon - 5:00 p.m., Sun - Wed closed",
      hours: [
        {id: 0, name: "Monday", open: null, close: null},
        {id: 1, name: "Tuesday", open: null, close: null},
        {id: 2, name: "Wednesday", open: null, close: null},
        {id: 3, name: "Thursday", open: 1330, close: 1930},
        {id: 4, name: "Friday", open: 1330, close: 1930},
        {id: 5, name: "Saturday", open: 1200, close: 1700},
        {id: 6, name: "Sunday", open: null, close: null}
      ],
      description: "One of the newer breweries in town, Snafu is run by a husband and wife team and, according to their website, is 'is the best thing to hit town since Dr. Dre dropped The Chronic.'",
    },
    {
      id: 12,
      name: "Coooper River Brewing Company",
      address: "2201 Mechanic Street B, Charleston, SC 29405",
      location: "Downtown",
      website: "http://cooperriverbrewing.com/",
      hours_string: "Open Thu & Fri 4:00 p.m. - 10:00 p.m., Sat noon - 10:00 p.m., Sun 1:00 p.m. - 7:00 p.m., Mon - Wed closed",
      hours: [
        {id: 0, name: "Monday", open: null, close: null},
        {id: 1, name: "Tuesday", open: null, close: null},
        {id: 2, name: "Wednesday", open: null, close: null},
        {id: 3, name: "Thursday", open: 1600, close: 2200},
        {id: 4, name: "Friday", open: 1600, close: 2200},
        {id: 5, name: "Saturday", open: 1200, close: 2200},
        {id: 6, name: "Sunday", open: 1300, close: 1900}
      ],
      description: "Featuring a large bar and courtyard, Cooper River Brewing is a comfortable place to spend a few hours. Still fairly new, they don't feature a huge selection, but each one is solid.",
    },
    {
      id: 13,
      name: "Edmund's Oast",
      address: "1081 Morrison Drive, Charleston, SC 29403",
      location: "Downtonw",
      website: "http://edmundsoast.com/",
      hours_string: "Open Mon - Thu 4:30 p.m. - 10:00 p.m., Fri & Sat 4:30 p.m. - 11:00 p.m., Sun 10:00 a.m. - 10:00 p.m.",
      hours: [
        {id: 0, name: "Monday", open: 1630, close: 2200},
        {id: 1, name: "Tuesday", open: 1630, close: 2200},
        {id: 2, name: "Wednesday", open: 1630, close: 2200},
        {id: 3, name: "Thursday", open: 1630, close: 2200},
        {id: 4, name: "Friday", open: 1630, close: 2300},
        {id: 5, name: "Saturday", open: 1630, close: 2300},
        {id: 6, name: "Sunday", open: 1000, close: 2200}
      ],
      description: "A full-blown brew pub, Edmunds' Oast offers a pretty huge selection of unique brews that you won't find many other places. The pub features a long bar inside and large outdoor covered area to enjoy their beer and food selection.",
    },
    {
      id: 14,
      name: "Fatty's Beer Works",
      address: "1436 Meeting Street, Charleston, SC 29405",
      location: "Downtown",
      website: "http://www.fattysbeerworks.com/",
      hours_string: "Open Mon - Thu 4:00 p.m. - 9:00 p.m., Fri 4:00 p.m. - 10:00 p.m. Sat & Sun noon. - 9:00 p.m.",
      hours: [
        {id: 0, name: "Monday", open: 1600, close: 2100},
        {id: 1, name: "Tuesday", open: 1600, close: 2100},
        {id: 2, name: "Wednesday", open: 1600, close: 2100},
        {id: 3, name: "Thursday", open: 1600, close: 2100},
        {id: 4, name: "Friday", open: 1600, close: 2200},
        {id: 5, name: "Saturday", open: 1200, close: 2100},
        {id: 6, name: "Sunday", open: 1200, close: 2100}
      ],
      description: "Distributing to quite a few bars and restaurants around town, Fatty's offers just a few brews. You can recognize their beer, and their brewery, from the large-hatted mustached character they feature heavily.",
    },
    {
      id: 15,
      name: "Lo-Fi Brewing",
      address: "2038 Meeting Street Road, Charleston, SC 29405",
      location: "Downtown",
      website: "http://lofibrewing.com/",
      hours_string: "Open Thu & Fri 4:00 p.m. - 9:00 p.m., Sat noon - 9:00 p.m.",
      hours: [
        {id: 0, name: "Monday", open: null, close: null},
        {id: 1, name: "Tuesday", open: null, close: null},
        {id: 2, name: "Wednesday", open: null, close: null},
        {id: 3, name: "Thursday", open: 1600, close: 2100},
        {id: 4, name: "Friday", open: 1600, close: 2100},
        {id: 5, name: "Saturday", open: 1200, close: 2100},
        {id: 6, name: "Sunday", open: null, close: null}
      ],
      description: "If you would use one word to describe Lo-Fi's vibe, it would be 'psychedelic.' The brewery offers a small selection of brews and a unicorn as a mascot.",
    },
    {
      id: 16,
      name: "Palmetto Brewing Co.",
      address: "289 Huger Street, Charleston, SC 29403",
      location: "Downtown",
      website: "http://www.palmettobrewery.com/",
      hours_string: "Open Wed - Sat noon - 10:00 p.m., Sun - Tue closed",
      hours: [
        {id: 0, name: "Monday", open: null, close: null},
        {id: 1, name: "Tuesday", open: null, close: null},
        {id: 2, name: "Wednesday", open: 1200, close: 2200},
        {id: 3, name: "Thursday", open: 1200, close: 2200},
        {id: 4, name: "Friday", open: 1200, close: 2200},
        {id: 5, name: "Saturday", open: 1200, close: 2200},
        {id: 6, name: "Sunday", open: null, close: null}
      ],
      description: "One of the big players in the regional beer scene, Palmetto has some solid, well-known brews and nice outdoor courtyard at their tasting room. They've also got frequent live music, including their Loading Dock Series",
    },
    {
      id: 17,
      name: "Revelry Brewing Co.",
      address: "10 Conroy Street, Charleston, SC 29403",
      location: "Downtown",
      website: "https://www.revelrybrewingco.com/",
      hours_string: "Open Mon - Thu 4:00 p.m. - 10:00 p.m., Fri 4:00 p.m. - midnight, Sat noon - midnight, Sun noon - 10:00 p.m.",
      hours: [
        {id: 0, name: "Monday", open: 1600, close: 2200},
        {id: 1, name: "Tuesday", open: 1600, close: 2200},
        {id: 2, name: "Wednesday", open: 1600, close: 2200},
        {id: 3, name: "Thursday", open: 1600, close: 2200},
        {id: 4, name: "Friday", open: 1600, close: 2400},
        {id: 5, name: "Saturday", open: 1200, close: 2400},
        {id: 6, name: "Sunday", open: 1200, close: 2200}
      ],
      description: "At Revelry, you can hang out downstairs right next to their brewing operation and bang on the piano embedded in the bar, or head up to the rooftop to stretch your legs and take in some views.",
    },
    {
      id: 18,
      name: "Charles Towne Fermentory",
      address: "809 Savannah Highway, Charleston, SC 29407",
      location: "West Ashley",
      website: "https://www.chsfermentory.com/",
      hours_string: "Open Tue - Thu 4:00 p.m. - 11:00 p.m., Fri & Sat 2:00 p.m. - midnight, Sun 2:00 p.m. - 10:00 p.m.",
      hours: [
        {id: 0, name: "Monday", open: 1000, close: 2000},
        {id: 1, name: "Tuesday", open: 1600, close: 2300},
        {id: 2, name: "Wednesday", open: 1600, close: 2300},
        {id: 3, name: "Thursday", open: 1600, close: 2300},
        {id: 4, name: "Friday", open: 1400, close: 2400},
        {id: 5, name: "Saturday", open: 1400, close: 2400},
        {id: 6, name: "Sunday", open: 1400, close: 2200}
      ],
      description: "Charles Towne Fermentory calls itself a 'small neighborhood brewery' and it's exactly that. You can find their brews at few craft beer hot spots around time or at their Avondale tasting room.",
    },
    {
      id: 19,
      name: "Frothy Beard Brewing Company",
      address: "1401 Sam Rittenberg Boulevard, Charleston, SC 29407",
      location: "West Ashley",
      website: "http://frothybeard.com/",
      hours_string: "Open Mon - Fri 11:00 a.m. - 11:00 p.m.",
      hours: [
        {id: 0, name: "Monday", open: 1100, close: 2300},
        {id: 1, name: "Tuesday", open: 1100, close: 2300},
        {id: 2, name: "Wednesday", open: 1100, close: 2300},
        {id: 3, name: "Thursday", open: 1100, close: 2300},
        {id: 4, name: "Friday", open: 1100, close: 2300},
        {id: 5, name: "Saturday", open: 1100, close: 2300},
        {id: 6, name: "Sunday", open: 1100, close: 2200}
      ],
      description: "Recently moving their headquarters to West Ashley, Frothy Beard is run by a proudly-bearded quartet of brewers and serves up a pretty wide selection of beers.",
    },
    {
      id: 20,
      name: "Twisted Cypress Brewing Company",
      address: "1897 Sam Rittenberg Blvd, Charleston, SC 29407",
      location: "West Ashley",
      website: "http://www.twistedcypressbrewingco.com/",
      hours_string: "Open Thu 4:00 p.m. - 10:00 p.m., Fri 4:00 p.m. - midight, Sat noon - midnight, Sun noon - 5:00 p.m.",
      hours: [
        {id: 0, name: "Monday", open: null, close: null},
        {id: 1, name: "Tuesday", open: null, close: null},
        {id: 2, name: "Wednesday", open: null, close: null},
        {id: 3, name: "Thursday", open: 1600, close: 2200},
        {id: 4, name: "Friday", open: 1600, close: 2400},
        {id: 5, name: "Saturday", open: 1200, close: 2400},
        {id: 6, name: "Sunday", open: 1200, close: 1700}
      ],
      description: "Twisted Cypress hosts a small brewing operation serving up a humble selection of beers. You can also stop by their Coffee Haus if you're more of a morning person.",
    },
    {
      id: 21,
      name: "Rusty Bull Brewing Co.",
      address: "3005 W Montague Ave Suite 110, North Charleston, SC 29418",
      location: "North Charleston",
      website: "http://rustybullbrewing.com/",
      hours_string: "Open Mon - Sat 11:00 a.m., Sun 11:00 a.m. - 5:00 p.m.",
      hours: [
        {id: 0, name: "Monday", open: 1100, close: 1100},
        {id: 1, name: "Tuesday", open: 1100, close: 2300},
        {id: 2, name: "Wednesday", open: 1100, close: 2300},
        {id: 3, name: "Thursday", open: 1100, close: 2300},
        {id: 4, name: "Friday", open: 1100, close: 2300},
        {id: 5, name: "Saturday", open: 1100, close: 2300},
        {id: 6, name: "Sunday", open: 1100, close: 1700}
      ],
      description: "Twisted Cypress hosts a small brewing operation serving up a humble selection of beers. You can also stop by their Coffee Haus if you're more of a morning person.",
    }
  ];

  // breweries.forEach(function(brewery) {
  //   store.createRecord('brewery', brewery);
  // });

}

export default {
  name: 'breweries',
  after: 'ember-data',
  initialize
};
