export const destinations = [
    {
      id: "new_york_123",
      cityName: "New York",
      cityDesc: "The city that never sleeps",
      cityCountry: "United States",
      imgURL:
        "https://cdn.vox-cdn.com/thumbor/8IFcxJ7dHvGmhj00IHmt0HoX5o0=/0x0:2800x1874/1520x1013/filters:focal(1195x378:1643x826):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/64043139/shutterstock_240592135.0.jpg",
      activities: [
        {
          id: 1,
          activityName: "Central Park",
          activityDesc: "Enjoy a leisurely stroll in the park",
          activtityImgUrl:
            "https://cdn.thecollector.com/wp-content/uploads/2022/04/central-park-aerial-view-greensward-plan.jpg?width=1400&quality=70",
          price: 50,
          activityType: "Shopping",
        },
        {
          id: 2,
          activityName: "Broadway Show",
          activityDesc: "Watch a spectacular Broadway production",
          activtityImgUrl:
            "https://media.istockphoto.com/id/1256618106/photo/leather-cricket-ball-resting-on-a-cricket-bat-placed-on-green-grass-cricket-ground-pitch.jpg?s=2048x2048&w=is&k=20&c=LcPWOW80rEbK2p3lv1x48S7zocbMJIXgtbptJFP178s=",
          price: 150,
          activityType: "Cultural experiences",
        },
      ],
      cityRestaurant: [
        {
          id: 1,
          restaurantName: "The Fine Dining",
          restaurantDesc: "Experience exquisite fine dining",
          costFor2: 200,
        },
      ],
    },
    {
      id: "paris_123",
      cityName: "Paris",
      cityDesc: "The city of love",
      cityCountry: "France",
      imgURL:
        "https://www.france-hotel-guide.com/en/blog/wp-content/uploads/Tour-Eiffel-1.jpg",
      activities: [
        {
          id: 1,
          activityName: "Eiffel Tower",
          activityDesc: "Visit the iconic Eiffel Tower",
          activtityImgUrl:
            "https://cdn.pixabay.com/photo/2014/10/22/18/04/man-498473_1280.jpg",
          price: 75,
          activityType: 'Historical tours',
        },
        {
          id: 2,
          activityName: "Louvre Museum",
          activityDesc: "Explore world-class art at the Louvre",
          activtityImgUrl:
            "https://cdn.pixabay.com/photo/2018/06/12/20/17/soccer-3471402_1280.jpg",
          price: 90,
          activityType: 'Historical tours',
        },
      ],
      cityRestaurant: [
        {
          id: 1,
          restaurantName: "Le Petit Bistro",
          restaurantDesc: "Charming bistro with delicious French cuisine",
          costFor2: 120,
        },
      ],
    },
    {
      id: "tokyo_123",
      cityName: "Tokyo",
      cityDesc: "A blend of tradition and modernity",
      cityCountry: "Japan",
      imgURL:
        "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
      activities: [
        {
          id: 1,
          activityName: "Asakusa Temple",
          activityDesc: "Experience the serenity of Asakusa Temple",
          activtityImgUrl:
            "https://www.neverendingvoyage.com/wp-content/uploads/2019/11/sensoji-things-to-do-in-tokyo-japan.jpg",
          price: 30,
          activityType: 'Cultural experiences',
        },
        {
          id: 2,
          activityName: "Shibuya Crossing",
          activityDesc: "Witness the famous Shibuya Crossing",
          activtityImgUrl:
            "https://www.neverendingvoyage.com/wp-content/uploads/2017/10/simon-maricar-tokyo-933x700.jpg",
          price: 40,
          activityType: 'Sightseeing',
        },
      ],
      cityRestaurant: [
        {
          id: 1,
          restaurantName: "Sushi Delight",
          restaurantDesc: "Delight in authentic Japanese sushi",
          costFor2: 80,
        },
      ],
    },
    {
      id: "sydney_123",
      cityName: "Sydney",
      cityDesc: "Harbor city with stunning views",
      cityCountry: "Australia",
      imgURL:
        "https://www.datocms-assets.com/6737/1533664813-sydneyoperahouseferrydepositphotos.jpg?auto=compress%2Cformat&dpr=0.84&fm=jpg&w=1920",
      activities: [
        {
          id: 1,
          activityName: "Sydney Opera House",
          activityDesc: "Marvel at the architectural wonder",
          activtityImgUrl:
            "https://www.datocms-assets.com/6737/1533664861-sydney-aquariumown.jpg?auto=compress%2Cformat&dpr=1&fm=jpg&w=1000",
          price: 65,
          activityType: 'Sightseeing',
        },
        {
          id: 2,
          activityName: "Bondi Beach",
          activityDesc: "Relax at the famous Bondi Beach",
          activtityImgUrl:
            "https://www.datocms-assets.com/6737/1533664952-bondi-to-coogee-walkgordons-bay-own.jpg?auto=compress%2Cformat&dpr=1&fm=jpg&w=1000",
          price: 25,
          activityType: 'Sightseeing',
        },
      ],
      cityRestaurant: [
        {
          id: 1,
          restaurantName: "Harbor View",
          restaurantDesc: "Enjoy stunning harbor views while dining",
          costFor2: 150,
        },
      ],
    },
    {
      id: "london_123",
      cityName: "London",
      cityDesc: "Rich history and cultural diversity",
      cityCountry: "United Kingdom",
      imgURL:
        "https://i0.wp.com/mindfulwonderer.com/wp-content/uploads/2021/10/romantic-things-to-do-in-london-.jpg?w=1000&ssl=1",
      activities: [
        {
          id: 1,
          activityName: "Tower of London",
          activityDesc: "Explore the historic Tower of London",
          activtityImgUrl:
            "https://i0.wp.com/mindfulwonderer.com/wp-content/uploads/2021/10/Harry-Potter-Theatre-Romantic-things-to-do-in-London.jpg?w=1000&ssl=1",
          price: 60,
          activityType: 'Historical tours',
        },
        {
          id: 2,
          activityName: "West End Show",
          activityDesc: "Enjoy a spectacular show in the West End",
          activtityImgUrl:
            "https://www.westend.com/wp-content/uploads/westend_london_mamma_mia_hero-1030x579.jpg",
          price: 100,
          activityType: 'Cultural experiences',
        },
      ],
      cityRestaurant: [
        {
          id: 1,
          restaurantName: "British Feast",
          restaurantDesc: "Savor traditional British dishes",
          costFor2: 80,
        },
      ],
    },
  ];