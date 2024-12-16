// styles.js
import styled from 'styled-components';

export const Container = styled.div`
  min-height: 100vh;
  background-color: #f9fafb;
`;

export const Header = styled.header`
  background-color: #1e3a8a;
  color: white;
  position: sticky;
  top: 0;
  z-index: 50;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
`;

export const HeaderContainer = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1rem;
`;

export const Nav = styled.nav`
  display: none;
  @media (min-width: 768px) {
    display: block;
  }
`;

export const NavList = styled.ul`
  display: flex;
  gap: 2rem;
`;

export const NavItem = styled.li`
  button {
    color: black;
    background: #ffcc00;
    transition: color 0.2s;
    &:hover {
      color: black;
    }
  }
`;

export const SearchContainer = styled.div`
  position: relative;
  display: none;
  @media (min-width: 768px) {
    display: block;
  }
`;

export const SearchInput = styled.input`
  width: 12rem;
  padding: 0.25rem 1rem;
  border-radius: 9999px;
  color: #111827;
  font-size: 0.875rem;
  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px #3b82f6;
  }
`;

export const CarouselContainer = styled.div`
  position: relative;
  width: 100%;
  height: 500px;
  background-color: #111827;
`;

export const CarouselOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(to right, rgba(30, 58, 138, 0.9), transparent);
  z-index: 10;
`;

export const CarouselContent = styled.div`
  position: relative;
  height: 100%;
  display: flex;
  align-items: center;
  z-index: 20;
`;

export const CarouselText = styled.div`
  max-width: 36rem;
  color: white;
  padding: 0 1.5rem;
  
  h2 {
    font-size: 2.25rem;
    font-weight: bold;
    margin-bottom: 1.5rem;
  }
  
  p {
    font-size: 1.125rem;
    margin-bottom: 1.5rem;
  }
`;

export const CarouselButton = styled.button`
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  font-weight: 600;
  transition: opacity 0.2s;
  
  &:hover {
    opacity: 0.9;
  }
`;

export const NavigationButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(255, 255, 255, 0.2);
  padding: 0.5rem;
  border-radius: 9999px;
  color: white;
  transition: background-color 0.2s;
  z-index: 20;
  
  &:hover {
    background-color: rgba(255, 255, 255, 0.3);
  }
  
  &.left {
    left: 1rem;
  }
  
  &.right {
    right: 1rem;
  }
`;

export const Indicators = styled.div`
  position: absolute;
  bottom: 1rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 0.5rem;
  z-index: 20;
`;

export const IndicatorDot = styled.button`
  width: 0.75rem;
  height: 0.75rem;
  border-radius: 9999px;
  transition: background-color 0.2s;
  background-color: ${props => props.active ? 'white' : 'rgba(255, 255, 255, 0.5)'};
`;

export const SpotlightSection = styled.section`
  padding: 4rem 0;
  background-color: white;
`;

export const SpotlightGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  padding: 0 1rem;
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const SpotlightCard = styled.div`
  background-color: white;
  padding: 1.5rem;
  border-radius: 0.75rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.2s;
  
  &:hover {
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  }
`;

export const AlertSection = styled.section`
  background-color: #fefce8;
  padding: 2rem 0;
  text-align: center;
`;

export const Footer = styled.footer`
  background-color: #1e3a8a;
  color: white;
  padding: 2rem 0;
`;

export const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  padding: 0 1rem;
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export const FooterSection = styled.div`
  h3 {
    font-size: 1.125rem;
    font-weight: 600;
    margin-bottom: 1rem;
  }
  
  ul {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
  
  button {
    color: black;
    background: #ffcc00;
    &:hover {
      color: #bfdbfe;
    }
  }
`;

export const FooterBottom = styled.div`
  margin-top: 2rem;
  padding-top: 2rem;
  border-top: 1px solid #2563eb;
  text-align: center;
`;


export const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 4rem;
`;

export const Logo = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
`;

export const HeaderControls = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const SearchIcon = styled.div`
  position: absolute;
  right: 0.75rem;
  top: 50%;
  transform: translateY(-50%);
  color: #6b7280;
`;

export const MobileMenuButton = styled.button`
  display: block;
  padding: 0.5rem;
  color: white;
  border-radius: 0.375rem;
  
  @media (min-width: 768px) {
    display: none;
  }
  
  &:hover {
    background-color: #1e40af;
  }
`;

export const MobileMenu = styled.div`
  background-color: #1e40af;
  padding: 0.5rem;
  
  @media (min-width: 768px) {
    display: none;
  }
`;

export const MobileNavList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const MobileNavItem = styled.li`
  button {
    display: block;
    width: 100%;
    text-align: left;
    padding: 0.5rem 1rem;
    color: white;
    border-radius: 0.375rem;
    
    &:hover {
      background-color: #1e3a8a;
    }
  }
`;

export const CarouselInner = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1.5rem;
`;

export const SectionTitle = styled.h2`
  font-size: 1.875rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 2rem;
  color: #111827;
`;

export const CardTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  color: #1e3a8a;
  margin-bottom: 0.75rem;
`;

export const CardText = styled.p`
  color: #4b5563;
  margin-bottom: 1rem;
`;

export const LearnMoreButton = styled.button`
  color: #2563eb;
  font-weight: 600;
  
  &:hover {
    color: #1d4ed8;
  }
`;

export const AlertText = styled.p`
  font-size: 1.125rem;
  font-weight: bold;
  color: #dc2626;
`;

export const FooterContent = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1.5rem;
`;