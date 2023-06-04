import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Programming Languages',
    Svg: require('@site/static/img/programming-monitor.svg').default,
    description: (
      <>
      <div id="programming-languages">
          <ul>
              <li>Python</li>
              <li>SQL</li>
              <li>PL/SQL</li>
              <li>NoSQL</li>
              <li>Go</li>
              <li>Shell</li>
              <li>R</li>
              <li>C</li>
              <li>MATLAB/Simulink</li>
              <li>Mathematica</li>
          </ul>
      </div>
      </>
    ),
  },
  {
    title: 'Contact Information',
    Svg: require('@site/static/img/smartphone.svg').default,
    description: (
      <>
        <b>Name:</b> Pitikorn Khlaisamniang<br></br>
        <b>Email:</b> pitikorn32@gmail.com<br></br>
        <b>Linkedin:</b> <a href="https://www.linkedin.com/in/pitikorn32/" target="_blank">linkedin.com/in/pitikorn32</a><br></br>
        <b>Github:</b> <a href="https://github.com/pitikorn32" target="_blank">github.com/pitikorn32</a><br></br>
      </>
    ),
  },
  {
    title: 'Misc Skills',
    Svg: require('@site/static/img/edit-tools-ruler.svg').default,
    description: (
      <>
        <p className={styles.miscSkills}>Docker</p>
        <p className={styles.miscSkills}>Apache Airflow</p>
        {/* <p className={styles.miscSkills}>Dagster</p>
        <p className={styles.miscSkills}>Feast</p>
        <p className={styles.miscSkills}>Terraform</p>
        <p className={styles.miscSkills}>Docker Swarm</p> */}
        <p className={styles.miscSkills}>Web scraping</p>
        <p className={styles.miscSkills}>Cloud Services (Azure, GCP, AWS)</p>
        <p className={styles.miscSkills}>CI/CD (Jenkins, Gitlab, Github)</p>
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
