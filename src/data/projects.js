// TODO Add a couple lines about each project
const data = [
  {
    title: 'Share Portfolio Visualizer',
    subtitle: 'Personal Project',
    image: '/images/projects/visualizerScreenshot.png',
    date: '2023-05-20',
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
    link: 'https://github.com/jakeMartin1234/raveTracer',
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
      'Built a game using Java called "The Floor is Lava" '
      + 'which involved making a randomly generated 2D map '
      + 'with islands and pathways that connect the islands '
      + 'together. Map is generated from a seed input by the user. '
      + 'Game features a secret room where the player is tasked with a mission.',
  },
];

export default data;
