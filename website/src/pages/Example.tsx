import LoginBase from '@react-login-page/base';
import LoginLogo from 'react-login-page/logo-rect';
import LoginPage1 from '@react-login-page/page1';
import LoginPage2 from '@react-login-page/page2';
import bannerImage from '@react-login-page/page2/banner-image';
import LoginPage3 from '@react-login-page/page3';
import bannerImage3 from '@react-login-page/page3/banner-image';
import LoginPage4 from '@react-login-page/page4';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { mediaStyle } from '../comps/DocsLayout';

const Wrapper = styled.div`
  display: flex;
  margin: 0 auto;
  flex-wrap: wrap;
  gap: 0.953rem;
  ${mediaStyle}
`;

const Inner = styled(Link)`
  overflow: hidden;
  display: block;
  position: relative;
  width: 326px;
  height: 265px;
  border-radius: 0.571rem;
  text-decoration: none;
  &::before {
    content: '';
    display: block;
    position: absolute;
    background-color: transparent;
    transition: all 0.3s;
    z-index: 2;
    inset: 0;
  }
  &:hover::before {
    background-color: var(--color-neutral-muted);
  }
  & > * {
    transform-origin: top left;
    transform: scale(0.5);
    width: 652px;
    height: 530px;
  }
`;

export const Example = () => {
  return (
    <Wrapper>
      <Inner to="/pages/base">
        <LoginBase>
          <LoginBase.Logo>
            <LoginLogo />
          </LoginBase.Logo>
        </LoginBase>
      </Inner>
      <Inner to="/pages/page1">
        <LoginPage1>
          <LoginPage1.Logo>
            <LoginLogo />
          </LoginPage1.Logo>
        </LoginPage1>
      </Inner>
      <Inner to="/pages/page2">
        <LoginPage2>
          <LoginPage2.Banner>
            <img src={bannerImage} alt="banner" />
          </LoginPage2.Banner>
          <LoginPage2.Logo>
            <LoginLogo />
          </LoginPage2.Logo>
        </LoginPage2>
      </Inner>
      <Inner to="/pages/page3">
        <LoginPage3>
          <LoginPage3.Banner style={{ backgroundImage: `url(${bannerImage3})` }} />
          <LoginPage3.Logo>
            <LoginLogo />
          </LoginPage3.Logo>
        </LoginPage3>
      </Inner>
      <Inner to="/pages/page4">
        <LoginPage4>
          <LoginPage4.Logo>
            <LoginLogo />
          </LoginPage4.Logo>
        </LoginPage4>
      </Inner>
    </Wrapper>
  );
};