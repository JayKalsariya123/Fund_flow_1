import { tokens } from "../theme";

export const mockDataOrgnanisation = [
  {
    id: 1,
    name: "Jon Snow",
    email: "jonsnow@gmail.com",
    sector: "Leadership",
    problemStatements: 1,
    investors: "Yes",
  },
  {
    id: 2,
    name: "Cersei Lannister",
    email: "cerseilannister@gmail.com",
    sector: "Politics",
    problemStatements: 2,
    investors: "Yes",
  },
  {
    id: 3,
    name: "Jaime Lannister",
    email: "jaimelannister@gmail.com",
    sector: "Knighthood",
    problemStatements: 3,
    investors: "No",
  },
  {
    id: 4,
    name: "Anya Stark",
    email: "anyastark@gmail.com",
    sector: "Youth Development",
    problemStatements: 4,
    investors: "No",
  },
  {
    id: 5,
    name: "Daenerys Targaryen",
    email: "daenerystargaryen@gmail.com",
    sector: "Revolution",
    problemStatements: 5,
    investors: "Yes",
  },
  {
    id: 6,
    name: "Ever Melisandre",
    email: "evermelisandre@gmail.com",
    sector: "Religion",
    problemStatements: 6,
    investors: "Yes",
  },
  {
    id: 7,
    name: "Ferrara Clifford",
    email: "ferraraclifford@gmail.com",
    sector: "Education",
    problemStatements: 7,
    investors: "No",
  },
  {
    id: 8,
    name: "Rossini Frances",
    email: "rossinifrances@gmail.com",
    sector: "Culinary Arts",
    problemStatements: 8,
    investors: "Yes",
  },
  {
    id: 9,
    name: "Harvey Roxie",
    email: "harveyroxie@gmail.com",
    sector: "Healthcare",
    problemStatements: 9,
    investors: "Yes",
  },
];

export const mockDataInvestor = [
  {
    id: 1,
    name: "Jon Snow",
    email: "jonsnow@gmail.com",
    investments: 5, // Random number between 1 to 10
    challengesCreated: 3, // Random number between 1 to 10
    organisations: "Night's Watch",
    interested: "Technology",
  },
  {
    id: 2,
    name: "Cersei Lannister",
    email: "cerseilannister@gmail.com",
    investments: 7, // Random number between 1 to 10
    challengesCreated: 8, // Random number between 1 to 10
    organisations: "Lannister Family",
    interested: "Agriculture",
  },
  {
    id: 3,
    name: "Jaime Lannister",
    email: "jaimelannister@gmail.com",
    investments: 4, // Random number between 1 to 10
    challengesCreated: 5, // Random number between 1 to 10
    organisations: "Kingsguard",
    interested: "Healthcare",
  },
  {
    id: 4,
    name: "Anya Stark",
    email: "anyastark@gmail.com",
    investments: 2, // Random number between 1 to 10
    challengesCreated: 1, // Random number between 1 to 10
    organisations: "House Stark",
    interested: "Education",
  },
  {
    id: 5,
    name: "Daenerys Targaryen",
    email: "daenerystargaryen@gmail.com",
    investments: 10, // Random number between 1 to 10
    challengesCreated: 9, // Random number between 1 to 10
    organisations: "Targaryen Family",
    interested: "Renewable Energy",
  },
  {
    id: 6,
    name: "Ever Melisandre",
    email: "evermelisandre@gmail.com",
    investments: 3, // Random number between 1 to 10
    challengesCreated: 6, // Random number between 1 to 10
    organisations: "Red Temple",
    interested: "Information Technology",
  },
  {
    id: 7,
    name: "Ferrara Clifford",
    email: "ferraraclifford@gmail.com",
    investments: 1, // Random number between 1 to 10
    challengesCreated: 4, // Random number between 1 to 10
    organisations: "House Clifford",
    interested: "Real Estate",
  },
  {
    id: 8,
    name: "Rossini Frances",
    email: "rossinifrances@gmail.com",
    investments: 6, // Random number between 1 to 10
    challengesCreated: 2, // Random number between 1 to 10
    organisations: "House Frances",
    interested: "Transportation",
  },
  {
    id: 9,
    name: "Harvey Roxie",
    email: "harveyroxie@gmail.com",
    investments: 8, // Random number between 1 to 10
    challengesCreated: 7, // Random number between 1 to 10
    organisations: "House Roxie",
    interested: "Biotechnology",
  },
  {
    id: 10,
    name: "Enteri Redack",
    email: "enteriredack@gmail.com",
    investments: 9, // Random number between 1 to 10
    challengesCreated: 10, // Random number between 1 to 10
    organisations: "House Redack",
    interested: "Finance",
  },
  {
    id: 11,
    name: "Steve Goodman",
    email: "stevegoodmane@gmail.com",
    investments: 3, // Random number between 1 to 10
    challengesCreated: 4, // Random number between 1 to 10
    organisations: "Goodman Family",
    interested: "Manufacturing",
  },
];


export const mockDataDeveloper = [
  {
    id: 1,
    name: "Jon Snow",
    experience: "5 years",
    email: "jonsnow@gmail.com",
    projects: 12,
  },
  {
    id: 2,
    name: "Cersei Lannister",
    experience: "10 years",
    email: "cerseilannister@gmail.com",
    projects: 30,
  },
  {
    id: 3,
    name: "Jaime Lannister",
    experience: "12 years",
    email: "jaimelannister@gmail.com",
    projects: 25,
  },
  {
    id: 4,
    name: "Anya Stark",
    experience: "3 years",
    email: "anyastark@gmail.com",
    projects: 7,
  },
  {
    id: 5,
    name: "Daenerys Targaryen",
    experience: "7 years",
    email: "daenerystargaryen@gmail.com",
    projects: 20,
  },
  {
    id: 6,
    name: "Ever Melisandre",
    experience: "15 years",
    email: "evermelisandre@gmail.com",
    projects: 50,
  },
  {
    id: 7,
    name: "Ferrara Clifford",
    experience: "6 years",
    email: "ferraraclifford@gmail.com",
    projects: 15,
  },
  {
    id: 8,
    name: "Rossini Frances",
    experience: "4 years",
    email: "rossinifrances@gmail.com",
    projects: 9,
  },
];

export const mockAccordionData = [
  {
    question: "How do I create a new user?",
    details:
      "To create a new user, navigate to the Users section in the admin dashboard. Click on the 'Add User' button and fill in the required information such as username, email, and password. Then, click on the 'Save' button to create the user.",
  },
  {
    question: "How can I manage permissions for users?",
    details:
      "To manage permissions for users, go to the Permissions section in the admin dashboard. Here, you can assign or revoke specific permissions for each user by selecting the user and adjusting their permissions accordingly.",
  },
  {
    question: "What is the process for adding a new product?",
    details:
      "To add a new product, navigate to the Products section in the admin dashboard. Click on the 'Add Product' button and fill in the details such as product name, description, price, and images. Finally, click on the 'Save' button to add the product.",
  },
  {
    question: "How do I update existing user information?",
    details:
      "To update existing user information, find the user in the Users section of the admin dashboard. Click on the user to view their details, then click on the 'Edit' button. Update the necessary information and click on the 'Save' button to apply the changes.",
  },
  {
    question: "What are the steps to delete a product?",
    details:
      "To delete a product, navigate to the Products section in the admin dashboard. Find the product you want to delete and click on the 'Delete' button. Confirm the action when prompted, and the product will be permanently removed from the system.",
  },
  {
    question: "How can I view sales reports?",
    details:
      "To view sales reports, go to the Reports section in the admin dashboard. Here, you can generate various reports such as sales by day, month, or year, top-selling products, and revenue trends.",
  },
  {
    question: "What options are available for managing customer orders?",
    details:
      "To manage customer orders, navigate to the Orders section in the admin dashboard. Here, you can view all orders, process pending orders, update order status, and manage order fulfillment and shipping details.",
  },
  {
    question: "How do I customize the appearance of the dashboard?",
    details:
      "To customize the appearance of the dashboard, go to the Settings section in the admin dashboard. Here, you can adjust various settings such as theme colors, layout options, and dashboard widgets.",
  },
  {
    question: "What security measures are in place to protect user data?",
    details:
      "We take security seriously and have implemented various measures to protect user data. These include encryption of sensitive information, regular security audits, and compliance with industry standards and regulations.",
  },
  {
    question: "How can I contact support for assistance?",
    details:
      "For assistance or support inquiries, please contact our customer support team via email at support@example.com or by phone at 1-800-123-4567. Our support team is available to assist you with any questions or issues you may have.",
  },
];

export const mockTransactions = [
  {
    txId: "01e4dsa",
    user: "johndoe",
    date: "2021-09-01",
    cost: "43.95",
  },
  {
    txId: "0315dsaa",
    user: "jackdower",
    date: "2022-04-01",
    cost: "133.45",
  },
  {
    txId: "01e4dsa",
    user: "aberdohnny",
    date: "2021-09-01",
    cost: "43.95",
  },
  {
    txId: "51034szv",
    user: "goodmanave",
    date: "2022-11-05",
    cost: "200.95",
  },
  {
    txId: "0a123sb",
    user: "stevebower",
    date: "2022-11-02",
    cost: "13.55",
  },
  {
    txId: "01e4dsa",
    user: "aberdohnny",
    date: "2021-09-01",
    cost: "43.95",
  },
  {
    txId: "120s51a",
    user: "wootzifer",
    date: "2019-04-15",
    cost: "24.20",
  },
  {
    txId: "0315dsaa",
    user: "jackdower",
    date: "2022-04-01",
    cost: "133.45",
  },
];

export const mockBarData = [
  {
    country: "AD",
    "hot dog": 137,
    "hot dogColor": "hsl(229, 70%, 50%)",
    burger: 96,
    burgerColor: "hsl(296, 70%, 50%)",
    kebab: 72,
    kebabColor: "hsl(97, 70%, 50%)",
    donut: 140,
    donutColor: "hsl(340, 70%, 50%)",
  },
  {
    country: "AE",
    "hot dog": 55,
    "hot dogColor": "hsl(307, 70%, 50%)",
    burger: 28,
    burgerColor: "hsl(111, 70%, 50%)",
    kebab: 58,
    kebabColor: "hsl(273, 70%, 50%)",
    donut: 29,
    donutColor: "hsl(275, 70%, 50%)",
  },
  {
    country: "AF",
    "hot dog": 109,
    "hot dogColor": "hsl(72, 70%, 50%)",
    burger: 23,
    burgerColor: "hsl(96, 70%, 50%)",
    kebab: 34,
    kebabColor: "hsl(106, 70%, 50%)",
    donut: 152,
    donutColor: "hsl(256, 70%, 50%)",
  },
  {
    country: "AG",
    "hot dog": 133,
    "hot dogColor": "hsl(257, 70%, 50%)",
    burger: 52,
    burgerColor: "hsl(326, 70%, 50%)",
    kebab: 43,
    kebabColor: "hsl(110, 70%, 50%)",
    donut: 83,
    donutColor: "hsl(9, 70%, 50%)",
  },
  {
    country: "AI",
    "hot dog": 81,
    "hot dogColor": "hsl(190, 70%, 50%)",
    burger: 80,
    burgerColor: "hsl(325, 70%, 50%)",
    kebab: 112,
    kebabColor: "hsl(54, 70%, 50%)",
    donut: 35,
    donutColor: "hsl(285, 70%, 50%)",
  },
  {
    country: "AL",
    "hot dog": 66,
    "hot dogColor": "hsl(208, 70%, 50%)",
    burger: 111,
    burgerColor: "hsl(334, 70%, 50%)",
    kebab: 167,
    kebabColor: "hsl(182, 70%, 50%)",
    donut: 18,
    donutColor: "hsl(76, 70%, 50%)",
  },
  {
    country: "AM",
    "hot dog": 80,
    "hot dogColor": "hsl(87, 70%, 50%)",
    burger: 47,
    burgerColor: "hsl(141, 70%, 50%)",
    kebab: 158,
    kebabColor: "hsl(224, 70%, 50%)",
    donut: 49,
    donutColor: "hsl(274, 70%, 50%)",
  },
];

export const mockStreamData = [
  {
    Raoul: 171,
    Josiane: 82,
    Marcel: 73,
    René: 134,
    Paul: 73,
    Jacques: 73,
  },
  {
    Raoul: 105,
    Josiane: 30,
    Marcel: 55,
    René: 16,
    Paul: 154,
    Jacques: 110,
  },
  {
    Raoul: 18,
    Josiane: 13,
    Marcel: 65,
    René: 111,
    Paul: 132,
    Jacques: 181,
  },
  {
    Raoul: 140,
    Josiane: 101,
    Marcel: 75,
    René: 60,
    Paul: 132,
    Jacques: 32,
  },
  {
    Raoul: 131,
    Josiane: 152,
    Marcel: 102,
    René: 69,
    Paul: 141,
    Jacques: 196,
  },
  {
    Raoul: 46,
    Josiane: 163,
    Marcel: 135,
    René: 50,
    Paul: 48,
    Jacques: 79,
  },
  {
    Raoul: 90,
    Josiane: 164,
    Marcel: 94,
    René: 51,
    Paul: 160,
    Jacques: 26,
  },
  {
    Raoul: 51,
    Josiane: 42,
    Marcel: 13,
    René: 121,
    Paul: 140,
    Jacques: 22,
  },
  {
    Raoul: 48,
    Josiane: 39,
    Marcel: 59,
    René: 15,
    Paul: 16,
    Jacques: 40,
  },
];

export const mockPieData = [
  {
    id: "hack",
    label: "hack",
    value: 239,
    color: "hsl(104, 70%, 50%)",
  },
  {
    id: "make",
    label: "make",
    value: 170,
    color: "hsl(162, 70%, 50%)",
  },
  {
    id: "go",
    label: "go",
    value: 322,
    color: "hsl(291, 70%, 50%)",
  },
  {
    id: "lisp",
    label: "lisp",
    value: 503,
    color: "hsl(229, 70%, 50%)",
  },
  {
    id: "scala",
    label: "scala",
    value: 584,
    color: "hsl(344, 70%, 50%)",
  },
];

export const mockLineData = [
  {
    id: "japan",
    color: tokens("dark").greenAccent[500],
    data: [
      {
        x: "plane",
        y: 101,
      },
      {
        x: "helicopter",
        y: 75,
      },
      {
        x: "boat",
        y: 36,
      },
      {
        x: "train",
        y: 216,
      },
      {
        x: "subway",
        y: 35,
      },
      {
        x: "bus",
        y: 236,
      },
      {
        x: "car",
        y: 88,
      },
      {
        x: "moto",
        y: 232,
      },
      {
        x: "bicycle",
        y: 281,
      },
      {
        x: "horse",
        y: 1,
      },
      {
        x: "skateboard",
        y: 35,
      },
      {
        x: "others",
        y: 14,
      },
    ],
  },
  {
    id: "france",
    color: tokens("dark").blueAccent[300],
    data: [
      {
        x: "plane",
        y: 212,
      },
      {
        x: "helicopter",
        y: 190,
      },
      {
        x: "boat",
        y: 270,
      },
      {
        x: "train",
        y: 9,
      },
      {
        x: "subway",
        y: 75,
      },
      {
        x: "bus",
        y: 175,
      },
      {
        x: "car",
        y: 33,
      },
      {
        x: "moto",
        y: 189,
      },
      {
        x: "bicycle",
        y: 97,
      },
      {
        x: "horse",
        y: 87,
      },
      {
        x: "skateboard",
        y: 299,
      },
      {
        x: "others",
        y: 251,
      },
    ],
  },
  {
    id: "us",
    color: tokens("dark").redAccent[200],
    data: [
      {
        x: "plane",
        y: 191,
      },
      {
        x: "helicopter",
        y: 136,
      },
      {
        x: "boat",
        y: 91,
      },
      {
        x: "train",
        y: 190,
      },
      {
        x: "subway",
        y: 211,
      },
      {
        x: "bus",
        y: 152,
      },
      {
        x: "car",
        y: 189,
      },
      {
        x: "moto",
        y: 152,
      },
      {
        x: "bicycle",
        y: 8,
      },
      {
        x: "horse",
        y: 197,
      },
      {
        x: "skateboard",
        y: 107,
      },
      {
        x: "others",
        y: 170,
      },
    ],
  },
];

export const mockGeographyData = [
  {
    id: "AFG",
    value: 520600,
  },
  {
    id: "AGO",
    value: 949905,
  },
  {
    id: "ALB",
    value: 329910,
  },
  {
    id: "ARE",
    value: 675484,
  },
  {
    id: "ARG",
    value: 432239,
  },
  {
    id: "ARM",
    value: 288305,
  },
  {
    id: "ATA",
    value: 415648,
  },
  {
    id: "ATF",
    value: 665159,
  },
  {
    id: "AUT",
    value: 798526,
  },
  {
    id: "AZE",
    value: 481678,
  },
  {
    id: "BDI",
    value: 496457,
  },
  {
    id: "BEL",
    value: 252276,
  },
  {
    id: "BEN",
    value: 440315,
  },
  {
    id: "BFA",
    value: 343752,
  },
  {
    id: "BGD",
    value: 920203,
  },
  {
    id: "BGR",
    value: 261196,
  },
  {
    id: "BHS",
    value: 421551,
  },
  {
    id: "BIH",
    value: 974745,
  },
  {
    id: "BLR",
    value: 349288,
  },
  {
    id: "BLZ",
    value: 305983,
  },
  {
    id: "BOL",
    value: 430840,
  },
  {
    id: "BRN",
    value: 345666,
  },
  {
    id: "BTN",
    value: 649678,
  },
  {
    id: "BWA",
    value: 319392,
  },
  {
    id: "CAF",
    value: 722549,
  },
  {
    id: "CAN",
    value: 332843,
  },
  {
    id: "CHE",
    value: 122159,
  },
  {
    id: "CHL",
    value: 811736,
  },
  {
    id: "CHN",
    value: 593604,
  },
  {
    id: "CIV",
    value: 143219,
  },
  {
    id: "CMR",
    value: 630627,
  },
  {
    id: "COG",
    value: 498556,
  },
  {
    id: "COL",
    value: 660527,
  },
  {
    id: "CRI",
    value: 60262,
  },
  {
    id: "CUB",
    value: 177870,
  },
  {
    id: "-99",
    value: 463208,
  },
  {
    id: "CYP",
    value: 945909,
  },
  {
    id: "CZE",
    value: 500109,
  },
  {
    id: "DEU",
    value: 63345,
  },
  {
    id: "DJI",
    value: 634523,
  },
  {
    id: "DNK",
    value: 731068,
  },
  {
    id: "DOM",
    value: 262538,
  },
  {
    id: "DZA",
    value: 760695,
  },
  {
    id: "ECU",
    value: 301263,
  },
  {
    id: "EGY",
    value: 148475,
  },
  {
    id: "ERI",
    value: 939504,
  },
  {
    id: "ESP",
    value: 706050,
  },
  {
    id: "EST",
    value: 977015,
  },
  {
    id: "ETH",
    value: 461734,
  },
  {
    id: "FIN",
    value: 22800,
  },
  {
    id: "FJI",
    value: 18985,
  },
  {
    id: "FLK",
    value: 64986,
  },
  {
    id: "FRA",
    value: 447457,
  },
  {
    id: "GAB",
    value: 669675,
  },
  {
    id: "GBR",
    value: 757120,
  },
  {
    id: "GEO",
    value: 158702,
  },
  {
    id: "GHA",
    value: 893180,
  },
  {
    id: "GIN",
    value: 877288,
  },
  {
    id: "GMB",
    value: 724530,
  },
  {
    id: "GNB",
    value: 387753,
  },
  {
    id: "GNQ",
    value: 706118,
  },
  {
    id: "GRC",
    value: 377796,
  },
  {
    id: "GTM",
    value: 66890,
  },
  {
    id: "GUY",
    value: 719300,
  },
  {
    id: "HND",
    value: 739590,
  },
  {
    id: "HRV",
    value: 929467,
  },
  {
    id: "HTI",
    value: 538961,
  },
  {
    id: "HUN",
    value: 146095,
  },
  {
    id: "IDN",
    value: 490681,
  },
  {
    id: "IND",
    value: 549818,
  },
  {
    id: "IRL",
    value: 630163,
  },
  {
    id: "IRN",
    value: 596921,
  },
  {
    id: "IRQ",
    value: 767023,
  },
  {
    id: "ISL",
    value: 478682,
  },
  {
    id: "ISR",
    value: 963688,
  },
  {
    id: "ITA",
    value: 393089,
  },
  {
    id: "JAM",
    value: 83173,
  },
  {
    id: "JOR",
    value: 52005,
  },
  {
    id: "JPN",
    value: 199174,
  },
  {
    id: "KAZ",
    value: 181424,
  },
  {
    id: "KEN",
    value: 60946,
  },
  {
    id: "KGZ",
    value: 432478,
  },
  {
    id: "KHM",
    value: 254461,
  },
  {
    id: "OSA",
    value: 942447,
  },
  {
    id: "KWT",
    value: 414413,
  },
  {
    id: "LAO",
    value: 448339,
  },
  {
    id: "LBN",
    value: 620090,
  },
  {
    id: "LBR",
    value: 435950,
  },
  {
    id: "LBY",
    value: 75091,
  },
  {
    id: "LKA",
    value: 595124,
  },
  {
    id: "LSO",
    value: 483524,
  },
  {
    id: "LTU",
    value: 867357,
  },
  {
    id: "LUX",
    value: 689172,
  },
  {
    id: "LVA",
    value: 742980,
  },
  {
    id: "MAR",
    value: 236538,
  },
  {
    id: "MDA",
    value: 926836,
  },
  {
    id: "MDG",
    value: 840840,
  },
  {
    id: "MEX",
    value: 353910,
  },
  {
    id: "MKD",
    value: 505842,
  },
  {
    id: "MLI",
    value: 286082,
  },
  {
    id: "MMR",
    value: 915544,
  },
  {
    id: "MNE",
    value: 609500,
  },
  {
    id: "MNG",
    value: 410428,
  },
  {
    id: "MOZ",
    value: 32868,
  },
  {
    id: "MRT",
    value: 375671,
  },
  {
    id: "MWI",
    value: 591935,
  },
  {
    id: "MYS",
    value: 991644,
  },
  {
    id: "NAM",
    value: 701897,
  },
  {
    id: "NCL",
    value: 144098,
  },
  {
    id: "NER",
    value: 312944,
  },
  {
    id: "NGA",
    value: 862877,
  },
  {
    id: "NIC",
    value: 90831,
  },
  {
    id: "NLD",
    value: 281879,
  },
  {
    id: "NOR",
    value: 224537,
  },
  {
    id: "NPL",
    value: 322331,
  },
  {
    id: "NZL",
    value: 86615,
  },
  {
    id: "OMN",
    value: 707881,
  },
  {
    id: "PAK",
    value: 158577,
  },
  {
    id: "PAN",
    value: 738579,
  },
  {
    id: "PER",
    value: 248751,
  },
  {
    id: "PHL",
    value: 557292,
  },
  {
    id: "PNG",
    value: 516874,
  },
  {
    id: "POL",
    value: 682137,
  },
  {
    id: "PRI",
    value: 957399,
  },
  {
    id: "PRT",
    value: 846430,
  },
  {
    id: "PRY",
    value: 720555,
  },
  {
    id: "QAT",
    value: 478726,
  },
  {
    id: "ROU",
    value: 259318,
  },
  {
    id: "RUS",
    value: 268735,
  },
  {
    id: "RWA",
    value: 136781,
  },
  {
    id: "ESH",
    value: 151957,
  },
  {
    id: "SAU",
    value: 111821,
  },
  {
    id: "SDN",
    value: 927112,
  },
  {
    id: "SDS",
    value: 966473,
  },
  {
    id: "SEN",
    value: 158085,
  },
  {
    id: "SLB",
    value: 178389,
  },
  {
    id: "SLE",
    value: 528433,
  },
  {
    id: "SLV",
    value: 353467,
  },
  {
    id: "ABV",
    value: 251,
  },
  {
    id: "SOM",
    value: 445243,
  },
  {
    id: "SRB",
    value: 202402,
  },
  {
    id: "SUR",
    value: 972121,
  },
  {
    id: "SVK",
    value: 319923,
  },
  {
    id: "SVN",
    value: 728766,
  },
  {
    id: "SWZ",
    value: 379669,
  },
  {
    id: "SYR",
    value: 16221,
  },
  {
    id: "TCD",
    value: 101273,
  },
  {
    id: "TGO",
    value: 498411,
  },
  {
    id: "THA",
    value: 506906,
  },
  {
    id: "TJK",
    value: 613093,
  },
  {
    id: "TKM",
    value: 327016,
  },
  {
    id: "TLS",
    value: 607972,
  },
  {
    id: "TTO",
    value: 936365,
  },
  {
    id: "TUN",
    value: 898416,
  },
  {
    id: "TUR",
    value: 237783,
  },
  {
    id: "TWN",
    value: 878213,
  },
  {
    id: "TZA",
    value: 442174,
  },
  {
    id: "UGA",
    value: 720710,
  },
  {
    id: "UKR",
    value: 74172,
  },
  {
    id: "URY",
    value: 753177,
  },
  {
    id: "USA",
    value: 658725,
  },
  {
    id: "UZB",
    value: 550313,
  },
  {
    id: "VEN",
    value: 707492,
  },
  {
    id: "VNM",
    value: 538907,
  },
  {
    id: "VUT",
    value: 650646,
  },
  {
    id: "PSE",
    value: 476078,
  },
  {
    id: "YEM",
    value: 957751,
  },
  {
    id: "ZAF",
    value: 836949,
  },
  {
    id: "ZMB",
    value: 714503,
  },
  {
    id: "ZWE",
    value: 405217,
  },
  {
    id: "KOR",
    value: 171135,
  },
];
