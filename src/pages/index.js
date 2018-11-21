import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

import Layout from '../components/layout'
import Image from '../components/image'
import Card from '../components/Card'
import Section from '../components/Section'
import Cell from '../components/Cell'

import staticdata from '../../staticdata.json'

import Logosketch from '../images/logo-sketch.png'
import Logofigma from '../images/logo-figma.png'
import Logostudio from '../images/logo-studio.png'
import Logoframer from '../images/logo-framer.png'
import Logoreact from '../images/logo-react.png'
import Logoswift from '../images/logo-swift.png'
import Wallpaper from '../images/wallpaper.jpg'
import Wallpaper2 from '../images/wallpaper2.jpg'
import Wallpaper3 from '../images/wallpaper3.jpg'
import Wallpaper4 from '../images/wallpaper4.jpg'
import Wave from '../components/Wave';

const SectionCaption = styled.p`
  font-weight: 600;
  font-size: 18px;
  text-transform: uppercase;
  color: #94a4ba;
  text-align: center;
`

const SectionCellGroup = styled.div`
  max-width: 800px;
  margin: 0 auto 100px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 20px;
  @media (max-width: 800px) {
    padding: 0 20px;
    grid-template-columns: repeat(1, 1fr);
  }
`


const IndexPage = ({ data }) => (
  <Layout>
    <div className="Hero">
      <div className="HeroGroup">
        <h1>Learn to <br />design and code React apps</h1>
        <p>Complete course about best tools and esign systems.</p>
        <Link to="/page-2/">Go to page 2</Link>
        <div className="Logos">
          <img src={Logosketch} alt="" width="50" />
          <img src={Logofigma} alt="" width="50" />
          <img src={Logostudio} alt="" width="50" />
          <img src={Logoframer} alt="" width="50" />
          <img src={Logoreact} alt="" width="50" />
          <img src={Logoswift} alt="" width="50" />
        </div>
        <Wave />
      </div>
    </div>
    <div className="Cards">
      <h2>11 courses, more coming</h2>
      <div className="CardGroup">
        <Card title="React for designers" text="12 sections" image={Wallpaper} />
        <Card title="Design sistem" text="10 sections" image={Wallpaper2} />
        <Card title="Sound design" text="5 sections" image={Wallpaper3} />
        <Card title="ArKit 2" text="10 sections" image={Wallpaper4} />
      </div>
    </div>
    <Section
      image={Wallpaper2}
      logo={Logoreact}
      title="React for Designers"
      text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum cupiditate blanditiis, itaque delectus tempora tenetur, expedita culpa voluptatum, eos aspernatur est voluptate nihil odio ex laborum? Ea commodi ipsum consequuntur."
    ></Section>
    <SectionCaption>12 sections - 6 hours</SectionCaption>
    <SectionCellGroup>
      {staticdata.cells.map(cell => (
        <Cell image={cell.image} title={cell.title} key={cell.title} />
      ))}
    </SectionCellGroup>
  </Layout>
)

export default IndexPage
