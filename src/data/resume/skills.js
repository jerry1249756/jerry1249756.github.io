const skills = [
  {
    title: 'Javascript',
    competency: 4,
    category: ['Web Development', 'Languages'],
  },
  {
    title: 'Node.js',
    competency: 3,
    category: ['Web Development'],
  },
  {
    title: 'React.js',
    competency: 2,
    category: ['Web Development'],
  },
  {
    title: 'MongoDB',
    competency: 2,
    category: ['Web Development'],
  },
  {
    title: 'Express.js',
    competency: 2,
    category: ['Web Development'],
  },
  {
    title: 'Python',
    competency: 5,
    category: ['Languages'],
  },
  {
    title: 'C++',
    competency: 5,
    category: ['Languages'],
  },
  {
    title: 'MATLAB',
    competency: 3,
    category: ['Languages'],
  },
  {
    title: 'Verilog',
    competency: 5,
    category: ['Languages', 'Hardware'],
  },
  {
    title: 'System Verilog',
    competency: 5,
    category: ['Languages', 'Hardware'],
  },
  {
    title: 'Berkeley ABC',
    competency: 4,
    category: ['Open-source EDA tools', 'Hardware'],
  },
  {
    title: 'Yosys',
    competency: 4,
    category: ['Open-source EDA tools', 'Hardware'],
  },
  {
    title: 'Synopsys VCS Verilog Compiler',
    competency: 4,
    category: ['EDA tools', 'Hardware'],
  },
  {
    title: 'Synopsys Design Compiler',
    competency: 4,
    category: ['EDA tools', 'Hardware'],
  },
  {
    title: 'Cadence Innovus Implementation System',
    competency: 3,
    category: ['EDA tools', 'Hardware'],
  },
].map((skill) => ({ ...skill, category: skill.category.sort() }));

// this is a list of colors that I like. The length should be === to the
// number of categories. Re-arrange this list until you find a pattern you like.
const colors = [
  '#6968b3',
  '#37b1f5',
  '#40494e',
  '#515dd4',
  '#e47272',
  // '#cc7b94',
  // '#3896e2',
  // '#c3423f',
  // '#d75858',
  // '#747fff',
  // '#64cb7b',
];

const categories = [...new Set(skills.flatMap(({ category }) => category))]
  .sort()
  .map((category, index) => ({
    name: category,
    color: colors[index],
  }));

export { categories, skills };
