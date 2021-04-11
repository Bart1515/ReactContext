const sections = {
  response: {
    status: "ok",
    userTier: "developer",
    total: 75,
    results: [
      {
        id: "about",
        webTitle: "About",
        webUrl: "https://www.theguardian.com/about",
        apiUrl: "https://content.guardianapis.com/about",
        editions: [
          {
            id: "about",
            webTitle: "About",
            webUrl: "https://www.theguardian.com/about",
            apiUrl: "https://content.guardianapis.com/about",
            code: "default",
          },
        ],
      },
      {
        id: "animals-farmed",
        webTitle: "Animals farmed",
        webUrl: "https://www.theguardian.com/animals-farmed",
        apiUrl: "https://content.guardianapis.com/animals-farmed",
        editions: [
          {
            id: "animals-farmed",
            webTitle: "Animals farmed",
            webUrl: "https://www.theguardian.com/animals-farmed",
            apiUrl: "https://content.guardianapis.com/animals-farmed",
            code: "default",
          },
        ],
      },
      {
        id: "artanddesign",
        webTitle: "Art and design",
        webUrl: "https://www.theguardian.com/artanddesign",
        apiUrl: "https://content.guardianapis.com/artanddesign",
        editions: [
          {
            id: "artanddesign",
            webTitle: "Art and design",
            webUrl: "https://www.theguardian.com/artanddesign",
            apiUrl: "https://content.guardianapis.com/artanddesign",
            code: "default",
          },
        ],
      },
    ],
  },
};

const about = {
  response: {
    status: "ok",
    userTier: "developer",
    total: 4,
    startIndex: 1,
    pageSize: 10,
    currentPage: 1,
    pages: 1,
    edition: {
      id: "about",
      webTitle: "About",
      webUrl: "https://www.theguardian.com/about",
      apiUrl: "https://content.guardianapis.com/about",
      code: "default",
    },
    section: {
      id: "about",
      webTitle: "About",
      webUrl: "https://www.theguardian.com/about",
      apiUrl: "https://content.guardianapis.com/about",
      editions: [
        {
          id: "about",
          webTitle: "About",
          webUrl: "https://www.theguardian.com/about",
          apiUrl: "https://content.guardianapis.com/about",
          code: "default",
        },
      ],
    },
    results: [
      {
        id: "guardian-observer-style-guide-a",
        type: "article",
        sectionId: "about",
        sectionName: "About",
        webPublicationDate: "2021-03-16T10:30:02Z",
        webTitle: "Guardian and Observer style guide: A",
        webUrl: "https://www.theguardian.com/guardian-observer-style-guide-a",
        apiUrl:
          "https://content.guardianapis.com/guardian-observer-style-guide-a",
        isHosted: false,
      },
      {
        id:
          "about/2018/jan/09/a-letter-from-the-editor-in-chief-on-the-new-guardian-and-observer",
        type: "article",
        sectionId: "about",
        sectionName: "About",
        webPublicationDate: "2018-01-09T13:16:14Z",
        webTitle:
          "A letter from the editor-in-chief on the new Guardian and Observer",
        webUrl:
          "https://www.theguardian.com/about/2018/jan/09/a-letter-from-the-editor-in-chief-on-the-new-guardian-and-observer",
        apiUrl:
          "https://content.guardianapis.com/about/2018/jan/09/a-letter-from-the-editor-in-chief-on-the-new-guardian-and-observer",
        isHosted: false,
      },
      {
        id: "help/ng-interactive/2017/mar/17/contact-the-guardian-securely",
        type: "interactive",
        sectionId: "about",
        sectionName: "About",
        webPublicationDate: "2017-03-17T14:49:11Z",
        webTitle: "Contact the Guardian securely",
        webUrl:
          "https://www.theguardian.com/help/ng-interactive/2017/mar/17/contact-the-guardian-securely",
        apiUrl:
          "https://content.guardianapis.com/help/ng-interactive/2017/mar/17/contact-the-guardian-securely",
        isHosted: false,
      },
      {
        id: "community-standards",
        type: "article",
        sectionId: "about",
        sectionName: "About",
        webPublicationDate: "2009-05-07T17:14:20Z",
        webTitle:
          "The Guardian website community standards and participation guidelines",
        webUrl: "https://www.theguardian.com/community-standards",
        apiUrl: "https://content.guardianapis.com/community-standards",
        isHosted: false,
      },
    ],
  },
};
const animalsFarmed = {
  response: {
    status: "ok",
    userTier: "developer",
    total: 25,
    startIndex: 1,
    pageSize: 10,
    currentPage: 1,
    pages: 3,
    edition: {
      id: "animals-farmed",
      webTitle: "Animals farmed",
      webUrl: "https://www.theguardian.com/animals-farmed",
      apiUrl: "https://content.guardianapis.com/animals-farmed",
      code: "default",
    },
    section: {
      id: "animals-farmed",
      webTitle: "Animals farmed",
      webUrl: "https://www.theguardian.com/animals-farmed",
      apiUrl: "https://content.guardianapis.com/animals-farmed",
      editions: [
        {
          id: "animals-farmed",
          webTitle: "Animals farmed",
          webUrl: "https://www.theguardian.com/animals-farmed",
          apiUrl: "https://content.guardianapis.com/animals-farmed",
          code: "default",
        },
      ],
    },
    results: [
      {
        id:
          "animals-farmed/2021/mar/10/animals-farmed-net-zero-beef-chinas-mink-bonus-and-fake-swine-fever-jabs",
        type: "article",
        sectionId: "animals-farmed",
        sectionName: "Animals farmed",
        webPublicationDate: "2021-03-10T11:55:39Z",
        webTitle:
          "Animals farmed: ‘Net zero’ beef, China’s mink bonus and fake swine fever jabs ",
        webUrl:
          "https://www.theguardian.com/animals-farmed/2021/mar/10/animals-farmed-net-zero-beef-chinas-mink-bonus-and-fake-swine-fever-jabs",
        apiUrl:
          "https://content.guardianapis.com/animals-farmed/2021/mar/10/animals-farmed-net-zero-beef-chinas-mink-bonus-and-fake-swine-fever-jabs",
        isHosted: false,
      },
      {
        id:
          "animals-farmed/2021/feb/09/animals-farmed-insects-for-lunch-2bn-for-mink-farmers-and-the-future-of-male-chicks",
        type: "article",
        sectionId: "animals-farmed",
        sectionName: "Animals farmed",
        webPublicationDate: "2021-02-09T14:44:29Z",
        webTitle:
          "Animals farmed: insects for lunch, £2bn for mink farmers and the future of male chicks",
        webUrl:
          "https://www.theguardian.com/animals-farmed/2021/feb/09/animals-farmed-insects-for-lunch-2bn-for-mink-farmers-and-the-future-of-male-chicks",
        apiUrl:
          "https://content.guardianapis.com/animals-farmed/2021/feb/09/animals-farmed-insects-for-lunch-2bn-for-mink-farmers-and-the-future-of-male-chicks",
        isHosted: false,
      },
      {
        id:
          "animals-farmed/2021/jan/05/animals-farmed-lab-grown-chicken-bird-culls-and-why-pigs-really-cant-fly",
        type: "article",
        sectionId: "animals-farmed",
        sectionName: "Animals farmed",
        webPublicationDate: "2021-01-05T15:01:11Z",
        webTitle:
          "Animals farmed: lab-grown ‘chicken’, bird culls, and why pigs really can't fly",
        webUrl:
          "https://www.theguardian.com/animals-farmed/2021/jan/05/animals-farmed-lab-grown-chicken-bird-culls-and-why-pigs-really-cant-fly",
        apiUrl:
          "https://content.guardianapis.com/animals-farmed/2021/jan/05/animals-farmed-lab-grown-chicken-bird-culls-and-why-pigs-really-cant-fly",
        isHosted: false,
      },
    ],
  },
};

const artAndDesign = {
  response: {
    status: "ok",
    userTier: "developer",
    total: 27710,
    startIndex: 1,
    pageSize: 10,
    currentPage: 1,
    pages: 2771,
    edition: {
      id: "artanddesign",
      webTitle: "Art and design",
      webUrl: "https://www.theguardian.com/artanddesign",
      apiUrl: "https://content.guardianapis.com/artanddesign",
      code: "default",
    },
    section: {
      id: "artanddesign",
      webTitle: "Art and design",
      webUrl: "https://www.theguardian.com/artanddesign",
      apiUrl: "https://content.guardianapis.com/artanddesign",
      editions: [
        {
          id: "artanddesign",
          webTitle: "Art and design",
          webUrl: "https://www.theguardian.com/artanddesign",
          apiUrl: "https://content.guardianapis.com/artanddesign",
          code: "default",
        },
      ],
    },
    results: [
      {
        id:
          "artanddesign/2021/apr/09/rachel-whitereads-world-of-interiors-and-francis-bacons-dead-elephants-the-week-in-art",
        type: "article",
        sectionId: "artanddesign",
        sectionName: "Art and design",
        webPublicationDate: "2021-04-09T13:17:47Z",
        webTitle:
          "Rachel Whiteread’s world of interiors and Francis Bacon’s dead elephants – the week in art",
        webUrl:
          "https://www.theguardian.com/artanddesign/2021/apr/09/rachel-whitereads-world-of-interiors-and-francis-bacons-dead-elephants-the-week-in-art",
        apiUrl:
          "https://content.guardianapis.com/artanddesign/2021/apr/09/rachel-whitereads-world-of-interiors-and-francis-bacons-dead-elephants-the-week-in-art",
        isHosted: false,
        pillarId: "pillar/arts",
        pillarName: "Arts",
      },
      {
        id:
          "artanddesign/2021/apr/09/ugo-rondinone-review-art-with-an-air-of-holiday-sadie-coles-london",
        type: "article",
        sectionId: "artanddesign",
        sectionName: "Art and design",
        webPublicationDate: "2021-04-09T10:47:31Z",
        webTitle: "Ugo Rondinone review – art with a holiday air",
        webUrl:
          "https://www.theguardian.com/artanddesign/2021/apr/09/ugo-rondinone-review-art-with-an-air-of-holiday-sadie-coles-london",
        apiUrl:
          "https://content.guardianapis.com/artanddesign/2021/apr/09/ugo-rondinone-review-art-with-an-air-of-holiday-sadie-coles-london",
        isHosted: false,
        pillarId: "pillar/arts",
        pillarName: "Arts",
      },
      {
        id:
          "artanddesign/2021/apr/09/tracey-emin-reveals-she-has-had-cancer-all-clear",
        type: "article",
        sectionId: "artanddesign",
        sectionName: "Art and design",
        webPublicationDate: "2021-04-09T08:12:38Z",
        webTitle: "Tracey Emin reveals she has had cancer ‘all clear’",
        webUrl:
          "https://www.theguardian.com/artanddesign/2021/apr/09/tracey-emin-reveals-she-has-had-cancer-all-clear",
        apiUrl:
          "https://content.guardianapis.com/artanddesign/2021/apr/09/tracey-emin-reveals-she-has-had-cancer-all-clear",
        isHosted: false,
        pillarId: "pillar/arts",
        pillarName: "Arts",
      },
    ],
  },
};

// Using CommonJS style export so we can consume via Node (without using Babel-node)
module.exports = {
  sections,
  about,
  animalsFarmed,
  artAndDesign,
};
