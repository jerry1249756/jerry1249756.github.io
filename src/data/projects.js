// TODO Add a couple lines about each project
const data = [
  {
    title: 'Approximate Logic Synthesis with Multi-Objective Simulated Annealing',
    subtitle: 'Final Project in Logic Synthesis and Verification',
    link: 'https://github.com/jerry1249756/LSV_final',
    image: '/images/projects/ALS.jpg',
    date: '2023-12',
    desc:
      'Utilized multi-objective simulated annealing to synthesize approximate circuits within the given error bound based on the synthesis tool ABC. '
      + 'Demonstrated substantial area reduction (8-98%) over IWLS benchmarks within 1% error rate and shows quality (5-91%) and runtime improvements over the existing ALS tool ALSRAC.',
  },
  {
    title: 'QR decomposition engine for 5G MIMO demodulation',
    subtitle: 'Final Project in Computer-aided VLSI System Design',
    date: '2023-12',
    image: '/images/projects/Gram-schmidt.png',
    desc:
      'Implemented QR decomposition engine using modified Gram-Schmidt algorithm with 2.2% soft LLR error rate in Verilog. '
      + 'Achieved 206 MHz operating frequency with 37.5 mW power under TSMC 130nm technology with full VLSI design flow (RTL to GDS). ',
  },
  {
    title: 'Immersed in the Sounds of Space',
    subtitle: 'NASA Space App Challange 2023',
    link: 'https://youtu.be/T-8iSjJYqs8',
    image: '/images/projects/NASA.png',
    date: '2023-10',
    desc:
      'Developed an interactive website for users to “sonify” the space data with immersive, personalized auditory experiences. '
      + 'Utilized the optical flow in fly-through video to position sound sources around the viewer based on the movement. '
      + 'Ensembled features from different wavelength channels to produce instrumental sounds in various frequencies.',
  },
  {
    title: 'Real-Time FPGA-based Acoustic Imaging',
    subtitle: 'Final Project in Laboratory of Digital Circuit System',
    link: 'https://github.com/jerry1249756/DCLab',
    image: '/images/projects/DCLab.png',
    date: '2023-10',
    desc:
      'Implemented a low-complexity delay-and-sum algorithm on Altera DE2-115 FPGA using SystemVerilog to visualize the position of sound sources in real-time via VGA output. '
      + 'Demonstrated a significant reduction in implementation costs compared to currently high manufacturing costs.',
  },
];

export default data;
