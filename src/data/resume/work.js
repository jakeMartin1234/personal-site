/**
 * @typedef {Object} Position
 * Conforms to https://jsonresume.org/schema/
 *
 * @property {string} name - Name of the company
 * @property {string} position - Position title
 * @property {string} url - Company website
 * @property {string} startDate - Start date of the position in YYYY-MM-DD format
 * @property {string|undefined} endDate - End date of the position in YYYY-MM-DD format.
 * If undefined, the position is still active.
 * @property {string|undefined} summary - html/markdown summary of the position
 * @property {string[]} highlights - plain text highlights of the position (bulleted list)
 */
const work = [
  {
    name: 'Looy Lab, University of California Museum of Paleontology',
    position: 'Assistant',
    startDate: '2022-01-01',
    endDate: '2022-11-01',
    highlights: [
      'Worked alongside Professor Looy to develop a graph reader application to intake paleontology data sheets.',
      'Designed and developed a user interface is ReactJS that enables a person to upload photos and quickly plot the\nboarders of a data table in the photos.',
    ],
  },
  {
    name: 'East Cost Sailing',
    position: 'Deckhand',
    startDate: '2020-12-01',
    endDate: '2021-06-01',
    highlights: [
      'Worked as a deckhand for a company that runs charter boat services during the summer months on Sydney Harbor.',
      'This job entailed cleaning the boat, assisting the captain with operations on the boat and helping out customers with\n'
      + 'their needs.',
    ],
  },
];

export default work;
