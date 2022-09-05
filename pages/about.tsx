import React from 'react';
import Layout from '../components/Layout';

export const About = (): JSX.Element => {
  return (
    <Layout
      customMeta={{
        title: 'About - Isidro Salcedo'
      }}
    >
      <h1>About Me</h1>
      <p>My name is Isidro Salcedo. I have been a software engineer for over 10 years, building tools for streaming platforms.</p>
      <p>I recently made the transition to the fintech industry where I am working on blockchain applications.</p>

      <div style={{ marginTop: '46px' }}>
        <a
          href="https://twitter.com/issalcedo"
        >
          Twitter
        </a>
      </div>
    </Layout>
  );
};

export default About;
