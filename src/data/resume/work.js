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
    name: 'Electronic Design Automation Lab',
    position: 'Research Assistant',
    // url: 'http://skepticalinvestments.biz',
    startDate: '2023-08',
    endDate: '2024-06',
    summary: 'Mixed-Size Placement Prototyping Based on Reinforcement Learning with Semi-Concurrent Optimization',
    highlights: [
      'Proposed an innovative method to move all macros concurrently and iteratively by a deep Q-network model as an agent in reinforcement learning (RL) in contrast to previous works that place them sequentially.',
      'Demonstrate 12.3% / 9% additional HPWL reduction on ISPD\'05 benchmarks compared to modern ML/RL-based placer DREAMplace / GraphPlanner.',
    ],
  },
  {
    startDate: '2024-09',
    summary: 'Warpage Modeling for Advanced Packaging with DeepONet-Based Operator Learning',
    highlights: [
      'Developed a convolutional neural network (CNN)-based deep operator network (DeepONet) to predict warpage in advanced packaging designs.',
      'Achieved 435× speedup over an 8-multiprocess finite element method (FEM) while maintaining an average warpage error of 1.9%',
    ],
  },
  {
    name: 'IBM Almaden Research Center',
    position: 'Research Intern',
    // url: 'http://skepticalinvestments.biz',
    startDate: '2024-06',
    endDate: '2024-09',
    summary: 'Enhancing LLMs for HDL Code Optimization using Domain Knowledge Injection',
    highlights: [
      'Proposed RTLOpt, the first comprehensive dataset designed to evaluate RTL optimization techniques, including pipelining and clock gating.',
      'Introduced MASCOT, a framework for HDL code optimization by injecting and retrieving domain-specific knowledge into the code generation process, aided with compiler and simulator feedback.',
      'Achieved 20% / 10% improvements for larger LLMs /small fine-tuned LLMs compared to zero-shot and ReAct / Chain-of-Thought baseline on HDL optimization tasks.',
    ],
  },
  {
    name: 'Applied Logic and Computation in System Design Lab',
    position: 'Research Assistant',
    // url: 'http://skepticalinvestments.biz',
    startDate: '2022-09',
    endDate: '2024-06',
    summary: 'Quantum Circuit Compilation for Trapped-Ion Processors with Drive-Through Architecture',
    highlights: [
      'Proposed an analytical method to compile a QASM circuit onto a “drive-through” modular architecture by gate partitioning followed by a fidelity-aware placement.',
      'Achieved a substantial reduction in intra-trap gate distance between ions and inter-trap communications compared to modern qubit mappers SABRE / t|ket>, while ensuring the practicality and scalability of our approach.',
    ],
  },
];

export default work;
