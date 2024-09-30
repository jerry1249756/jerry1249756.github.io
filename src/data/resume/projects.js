// TODO Add a couple lines about each project
const projects = [
  {
    name: 'Approximate Logic Synthesis with Multi-Objective Simulated Annealing',
    summary: 'Final Project in Logic Synthesis and Verification',
    url: 'https://github.com/jerry1249756/LSV_final',
    // image: '/images/projects/ALS.jpg',
    startDate: '2023-10',
    endDate: '2023-12',
    highlights: [
      'Utilized multi-objective simulated annealing to synthesize approximate circuits within the given error bound based on the synthesis tool ABC. ',
      'Demonstrated substantial area reduction (8-98%) over IWLS benchmarks within 1% error rate and shows quality (5-91%) and runtime improvements over the existing ALS tool ALSRAC.',
    ]
  },
  {
    name: 'QR decomposition engine for 5G MIMO demodulation',
    summary: 'Final Project in Computer-aided VLSI System Design',
    startDate: '2023-10',
    endDate: '2023-12',
    // image: '/images/projects/Gram-schmidt.png',
    highlights: [
      'Implemented QR decomposition engine using modified Gram-Schmidt algorithm with 2.2% soft LLR error rate in Verilog. ',
      'Achieved 206 MHz operating frequency with 37.5 mW power under TSMC 130nm technology with full VLSI design flow (RTL to GDSII). ',
    ]
  },
  {
    name: 'Immersed in the Sounds of Space',
    summary: 'NASA Space App Challange 2023 - Second Prize and Global Nominee',
    url: 'https://www.spaceappschallenge.org/2023/find-a-team/expecto-patronum/?tab=project',
    // image: '/images/projects/NASA.png',
    startDate: '2023-10',
    endDate: '2023-10',
    highlights: [
      'Developed an interactive website for users to “sonify” the space data with immersive, personalized auditory experiences. ',
      'Utilized the optical flow in fly-through video to position sound sources around the viewer based on the movement. ',
      'Ensembled features from different wavelength channels to produce instrumental sounds in various frequencies.',
    ]
  },
  {
    name: 'Translingo',
    summary: 'Google Hardware Product Sprint 2023',
    // image: '/images/projects/HPS.jpg',
    startDate: '2023-06',
    endDate: '2023-08',
    highlights: [
      'Developed a transparent display system to bridge communication gaps by offering real-time language translation. ',
      'Incorporated gesture recognitions to realize touchless screens to help people with hearing loss. ',
    ]
  },
  {
    name: 'Real-Time FPGA-based Acoustic Imaging',
    summary: 'Final Project in Laboratory of Digital Circuit System',
    url: 'https://github.com/jerry1249756/DCLab',
    // image: '/images/projects/DCLab.png',
    startDate: '2022-11',
    endDate: '2023-01',
    highlights: [
      'Implemented a low-complexity delay-and-sum algorithm on Altera DE2-115 FPGA using SystemVerilog to visualize the position of sound sources in real-time via VGA output. ',
      'Demonstrated a significant reduction in implementation costs compared to currently high manufacturing costs.',
    ]
  },
];

export default projects;
