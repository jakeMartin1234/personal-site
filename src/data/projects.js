// TODO Add a couple lines about each project
const data = [
  {
    title: 'three-particle-geometry NPM Package',
    subtitle: 'Personal Project',
    image: '/images/projects/three-particle-geometry.png',
    date: '2023-08-25',
    link: 'https://www.npmjs.com/package/three-particle-geometry',
    desc:
        'A npm package that allows users to represent threeJS geometry '
        + 'instances as a system of customizable particles. I used Webpack and Babel '
        + 'to bundle the package and make it compatible with all browsers that support '
        + 'threeJS. So far it is averaging over 1000 weekly installs.',
  },
  {
    title: 'Circle of Fifths Jam Board',
    subtitle: 'Personal Project',
    image: '/images/projects/circleOfFifths.png',
    date: '2023-08-6',
    link: 'https://jakemartin1234.github.io/circle-of-fifths-jam-board/',
    desc:
        'A small app I created that provides the user with a highly visual '
        + 'way to interact with the circle of fifths. Click the photo '
        + 'to go to the live demo.',
  },
  {
    title: 'Productivity Web App',
    subtitle: 'Personal Project',
    image: '/images/projects/productivityApp.png',
    date: '2023-07-20',
    link: 'https://jakemartin1234.github.io/productivity-app-frontend/',
    desc:
        'Designed and Developed a productivity based web application that '
        + 'allows users to create and manage to-do lists. I plan on adding more '
        + 'functionality to the app such as sticky notes and possibly a calendar. '
        + 'I used Auth0 for authentication and MongoDB for the database. Click the photo '
        + 'to go to the live demo.',
  },
  {
    title: 'Share Portfolio Visualizer',
    subtitle: 'Personal Project',
    image: '/images/projects/visualizerScreenshot.png',
    date: '2023-06-20',
    link: 'https://jakemartin1234.github.io/share-portfolio-visualizer-frontend/',
    desc:
        'Designed and Developed a web application that allows users to '
        + 'visualize their share portfolio using charts made by recharts.js. '
        + 'Users can add share portfolios to the program and it will automatically '
        + 'generate a series of charts that give the user statistics about their portfolio. '
        + 'Click the photo to go to the live demo.',
  },
  {
    title: 'Dispersive Photon Mapping',
    subtitle: 'Computer Graphics Course',
    image: '/images/projects/spectraComparisons.png',
    date: '2022-05-12',
    link: 'https://cal-cs184-student.github.io/sp22-project-webpages-jlbuja/final/index.html',
    desc:
        'Added to an open source photon mapping library '
        + 'written in C++ by adding support for ray dispersion '
        + 'effects. Also implemented laser light sources that could '
        + 'emit photons in a specified direction. Program is cabable of '
        + 'producing beautiful, complex caustic effects. Also implemented '
        + 'different wavelength to color mappings which allows the program '
        + 'to disperse different spectra as seen below.',
  },
  {
    title: 'Computer Graphics Coursework',
    subtitle: 'Computer Graphics Course',
    image: '/images/projects/spheresTracing.png',
    date: '2022-03-20',
    link: 'https://cal-cs184-student.github.io/sp22-project-webpages-jakeMartin1234/',
    desc:
        'Implemented a rasterizer, a mesh upsampler, a ray tracer and a virtual cloth used '
        + 'for animations in C++ for my university\'s computer graphics course. Clicking the image'
        + 'above will take you to a website explaining all of the projects.',
  },
  {
    title: 'Table Scanner',
    subtitle: 'Personal Project',
    link: 'https://github.com/jakeMartin1234/table-scanner-fullstack',
    image: '/images/projects/ExampleGraph.png',
    date: '2022-07-20',
    desc:
        'Designed and developed a UI for a table reader '
        + 'from scratch in ReactJS. I have also developed '
        + 'the back end software to parse the scanned graph '
        + 'using OCR APIs and make it available in a downloadable CSV file.',
  },
  {
    title: 'The Floor is Lava',
    subtitle: 'A fun school project.',
    image: '/images/projects/byowGame.gif',
    date: '2021-06-28',
    desc:
        'Developed a game using Java called "The Floor is Lava" '
        + 'which involved making a randomly generated 2D map '
        + 'with islands and pathways that connect the islands '
        + 'together. Map is generated from a seed input by the user. '
        + 'Game features a secret room where the player is tasked with a mission.',
  },
];

export default data;
