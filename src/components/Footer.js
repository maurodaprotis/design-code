import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const FooterGroup = styled.div`
  background: #f1f3f5;
  padding: 50px 0;
  display: grid;
  grid-gap: 20px;
`

const Text = styled.p`
  font-size: 24px;
  font-weight: 600;
  max-width: 500px;
  color: #486791;
  margin: 0 auto;
`

const Button = styled.button`
  background: linear-gradient(102.24deg, #9b51e0 0%, #3436e7 100%);
  box-shadow: 0px 10px 20px rgba(101, 41, 255, 0.15);
  border-radius: 30px;
  color: white;
  border: none;
  padding: 16px 60px;
  font-weight: 600;
  font-size: 24px;
  justify-self: center;
`

const LinkGroup = styled.div`
  width: 500px;
  margin: 50px auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 20px;
`
const Copyright = styled.div`
  color: #486791;
  max-width: 500px;
  margin: 0 auto;
`


const Footer = ({ links, children }) => {
  return (
    <FooterGroup>
      <Text>Twete some like no se que @mengTo</Text>
      <Button>Tweet</Button>
      <LinkGroup>
        {links.map(link => (<a href={link.node.url} key={link.node.id}>{link.node.title}</a>))}
      </LinkGroup>
      <Copyright>
        {children}
      </Copyright>
    </FooterGroup>
  )
}

Footer.propTypes = {

}

export default Footer
