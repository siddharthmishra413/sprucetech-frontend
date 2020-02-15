import React, { Component } from 'react';
import { Layout } from 'antd';
import HeaderComp from './Header';
import FooterComp from './Footer';

const { Content } = Layout;

class About extends Component {
  render() {
    return (
      <Layout>
        <div className="innerCont about">
          <HeaderComp />
          <Content>
            <h1>About Clio</h1>
            <div className="dv">
              <h2>Mission Statement</h2>
              <p>
                Clio's mission is to celebrate bold work that propels the advertising industry
                forward, inspire a competitive marketplace of ideas and foster meaningful
                connections within the creative community.
              </p>
            </div>
            <div className="dv">
              <h2>About Clio</h2>
              <p>
                The Clio Awards is the esteemed international awards competition for the creative
                business.
              </p>
              <p>
                Founded in 1959 to celebrate high achievement in advertising, the Clios annually and
                throughout the year recognize the work, the agencies and the talent -- across
                advertising, sports, fashion, music, entertainment, and health that push boundaries
                and establish new precedent.
              </p>
              <p>
                Clio's year-round celebration of creativity includes a daily editorial content
                platform, Muse by Clio, that highlights the best in creativity from the advertising
                world and beyond with original stories and guest essays from the industry's top
                talent, and Ads of The World, an international database cataloging the work of an
                ever-evolving industry.
              </p>
            </div>
          </Content>
          <FooterComp />
        </div>
      </Layout>
    );
  }
}

export default About;
