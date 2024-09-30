import React from 'react';
import PropTypes from 'prop-types';
import Job from '../components/Resume/Experience/Job';
// import { Link } from 'react-router-dom';

// import Main from '../layouts/Main';

// import Cell from '../components/Projects/Cell';
// import data from '../data/resume/projects';

// const Projects = () => (
//   <Main title="Projects" description="Learn about Jerry's projects.">
//     <article className="post" id="projects">
//       <header>
//         <div className="title">
//           <h2>
//             <Link to="/projects">Projects</Link>
//           </h2>
//           <p>A selection of projects.</p>
//         </div>
//       </header>
//       {data.map((project) => (
//         <Cell data={project} key={project.title} />
//       ))}
//     </article>
//   </Main>
// );

// export default Projects;

const Project = ({ data }) => (
  <div className="experience">
    <div className="link-to" id="projects" />
    <div className="title">
      <h3>Project Experience</h3>
    </div>
    {data.map((job) => (
      <Job data={job} key={`${job.name}`} />
    ))}
  </div>
);

Project.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.exact({
      name: PropTypes.string,
      url: PropTypes.string,
      startDate: PropTypes.string,
      endDate: PropTypes.string,
      highlights: PropTypes.arrayOf(PropTypes.string),
      summary: PropTypes.string,
    }),
  ),
};

Project.defaultProps = {
  data: [],
};

export default Project;
