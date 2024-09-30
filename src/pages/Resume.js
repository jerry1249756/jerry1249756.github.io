import React from 'react';

import Main from '../layouts/Main';

import Education from '../components/Resume/Education';
import Experience from '../components/Resume/Experience';
// import Skills from '../components/Resume/Skills';
import Courses from '../components/Resume/Courses';
import References from '../components/Resume/References';
import Publications from '../components/Resume/Publication';
import Awards from '../components/Resume/Awards';
import Project from './Projects';

import courses from '../data/resume/courses';
import degrees from '../data/resume/degrees';
import work from '../data/resume/work';
import awards from '../data/resume/awards';
// import { skills, categories } from '../data/resume/skills';
import publications from '../data/resume/publications';
import projects from '../data/resume/projects';

// NOTE: sections are displayed in order defined.
const sections = {
  Education: () => <Education data={degrees} />,
  Publications: () => <Publications data={publications} />,
  Research: () => <Experience data={work} />,
  Projects: () => <Project data={projects} />,
  Awards: () => <Awards data={awards} />,
  Courses: () => <Courses data={courses} />,
  References: () => <References />,
};

const Resume = () => (
  <Main
    title="Resume"
    description="Jerry's Resume."
  >
    <article className="post" id="resume">
      <header>
        <div className="title">
          <h2>
            Resume
          </h2>
          <div className="pdf">
            <a href={`${process.env.PUBLIC_URL}/files/CV.pdf`} target="_blank" rel="noopener noreferrer">
              PDF version
            </a>
          </div>
          <div className="link-container">
            {Object.keys(sections).map((sec) => (
              <h4 key={sec}>
                <a href={`#${sec.toLowerCase()}`}>{sec}</a>
              </h4>
            ))}
          </div>
        </div>
      </header>
      {Object.entries(sections).map(([name, Section]) => (
        <Section key={name} />
      ))}
    </article>
    <p className="image">
      <img src={`${process.env.PUBLIC_URL}/images/projects/ALS.jpg`} alt="No data" />
    </p>
  </Main>
);

export default Resume;
