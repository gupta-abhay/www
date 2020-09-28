import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import P from '../Shared/P/P';
import pic from './profile.png';

const ProfileWrapper = styled.section`
  text-align: center;
  margin-top: 40px;
  min-height: 100%;
  padding: 10px 0;
  a {
    font-weight: bold;
  }
`;

const ProfilePic = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  box-shadow: 0 0 0 3px white, 0 3px 8px 3px #ccc;
  margin: 20px 0;
`;

const NameWrapper = styled.div`
  margin-bottom: 20px;
  font-family: 'Alike', serif;
  h3 {
    margin: 10px auto;
    font-size: 1.1em;
    font-weight: 500;
  }
  h2,
  h3 {
    font-family: inherit;
  }
`;

const Name = styled.h2`
  font-size: 2.5em;
  display: inline-block;
  margin: 0;
  font-weight: 600;
`;

const Profile = () => (
  <ProfileWrapper>
    <h3>Hi there, I'm Abhay</h3>

    <P>
      A machine learning engineer & normal science enthusiast living in sunny California, USA.
      <br />
      Currently, I am working with the good folks over at{' '}
      <a href="https://www.cerebras.net" alt="Cerebras.net">
        Cerebras Systems
      </a>
      .
    </P>
    <ProfilePic src={pic} />
    <P>
      I design algorithms for the next-generation of deep learning hardware. As a researcher, I am passionate 
      about the research, development and engineering that enables perception, learning and reasoning in modern AI systems. <br /> <br />
      I think about privacy a lot in this day and age, and hence, rarely share my photograph. In my spare time, I listen to old-school English 
      music, love to travel and snap an occassional memory or two. 
      {/* <a href="/uses">Here</a> are some of things I use daily. */}
    </P>
    <P>
      You can check out my <Link to="/blog">blog</Link>, or find
      me online on <a href="http://github.com/gupta-abhay">Github </a>{' '}
      and <a href="http://twitter.com/gupta__abhay">Twitter</a>.
    </P>
  </ProfileWrapper>
);

export default Profile;
