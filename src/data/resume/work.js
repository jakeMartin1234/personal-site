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
    name: 'NextGen.Net',
    position: 'Software Engineer',
    url: 'https://nextgen.net/',
    startDate: '2023-10-02',
    highlights: [
      'Member of the Research and Development Team working with Angular and NodeJS.',
    ],
  },
  {
    name: 'Neubauer Agency',
    position: 'Web Developer Intern',
    startDate: '2023-05-05',
    endDate: '2023-08-20',
    highlights: [
      'Facilitated the development of custom websites for individual clients, aligning with their unique requirements and'
      + 'preferences.',
      'Created visually appealing website layouts using Figma and seamlessly transformed them into functional and responsive\n'
      + 'Wix components.',
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
