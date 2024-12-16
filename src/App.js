import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Search, Menu } from 'lucide-react';
import styled from 'styled-components';
import * as S from './styles';

const CarouselSlide = styled.div`
  position: absolute;
  inset: 0;
  opacity: ${props => props.active ? 1 : 0};
  transition: opacity 0.5s ease-in-out;
  background-image: url(${props => props.image});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

const CarouselData = [
  {
    id: 1,
    title: "Make Protecting New Jersey Your Career",
    description: "From community policing to homeland security, from aviation to marine law enforcement, from forensics to communications, we've got a specialty area that's sure to suit your unique skills and interests.",
    buttonText: "Visit Recruiting",
    buttonColor: "#2563eb",
    image: "/images/recruit-2020a.jpg"
  },
  {
    id: 2,
    title: "NJGUNStat Reports",
    description: "The comprehensive monthly report breaks down the number of guns recovered by county and city and additionally lists the type and caliber of gun, number of individuals arrested with more than one crime gun, total crime guns recovered, and a breakdown of shooting victims.",
    buttonText: "View the most recent NJGUNStat report",
    buttonColor: "#2563eb",
    image: "images/NJGUNStat-banner.jpg"
  },
  {
    id: 3,
    title: "ALERT: Important Notice",
    description: "If you see any of these wanted persons please contact the U.S. Embassy and immediately report their location.",
    buttonText: "More Information",
    buttonColor: "#dc2626",
    image: "images/cuba-alert-5.jpg"
  },
  {
    id: 4,
    title: "Stop Corruption in New Jersey",
    description: "Report allegations involving elected officials, appointed officials, county officials, and state employees. Contact the New Jersey State Police Official Corruption Bureau.",
    buttonText: "Report Corruption",
    buttonColor: "#dc2626",
    image: "images/ocb-banner2.jpg"
  },
  {
    id: 5,
    title: "Report Data Breaches",
    description: "For more information on NJ's Identity Theft Protection Act and to report data breaches affecting NJ residents, please click below:",
    buttonText: "Report Data Breaches",
    buttonColor: "#dc2626",
    image: "images/Report-Data-Breaches-2.jpg"
  }
];

const SpotlightData = [
  {
    title: "Crash Report Requests",
    description: "Request official accident reports and documentation."
  },
  {
    title: "NJ Sex Offender Registry",
    description: "Access the public database of registered offenders."
  },
  {
    title: "Firearms Information",
    description: "Learn about permits, regulations, and requirements."
  }
];

const NewsData = [
  {
    title: "12-12-2024",
    description: "State Police Charge Man for Attempted Murder on New Jersey Turnpike."
  },
  {
    title: "11-27-2024",
    description: "Keep the Roads Safe This Holiday: Drive Sober."
  },
  {
    title: "10-23-2024",
    description: "Fugitive Charged in connection with 2010 Brick Township attempted murder captured in New York City."
  }
];

export default function App() {
  const [current, setCurrent] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    let interval;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setCurrent((prev) => (prev + 1) % CarouselData.length);
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % CarouselData.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? CarouselData.length - 1 : prev - 1));
    setIsAutoPlaying(false);
  };

  return (
    <S.Container>
      <S.Header>
        <S.HeaderContainer>
          <S.HeaderContent>
            <S.Logo>NJ State Police</S.Logo>
            
            <S.Nav>
              <S.NavList>
                <S.NavItem><button>Home</button></S.NavItem>
                <S.NavItem><button>About</button></S.NavItem>
                <S.NavItem><button>Services</button></S.NavItem>
                <S.NavItem><button>Resources</button></S.NavItem>
                <S.NavItem><button>Contact</button></S.NavItem>
              </S.NavList>
            </S.Nav>

            <S.HeaderControls>
              <S.SearchContainer>
                <S.SearchInput type="text" placeholder="Search..." />
                <S.SearchIcon>
                  <Search size={16} />
                </S.SearchIcon>
              </S.SearchContainer>
              
              <S.MobileMenuButton onClick={() => setIsMenuOpen(!isMenuOpen)}>
                <Menu size={24} />
              </S.MobileMenuButton>
            </S.HeaderControls>
          </S.HeaderContent>

          {isMenuOpen && (
            <S.MobileMenu>
              <S.MobileNavList>
                <S.MobileNavItem><button>Home</button></S.MobileNavItem>
                <S.MobileNavItem><button>About</button></S.MobileNavItem>
                <S.MobileNavItem><button>Services</button></S.MobileNavItem>
                <S.MobileNavItem><button>Resources</button></S.MobileNavItem>
                <S.MobileNavItem><button>Contact</button></S.MobileNavItem>
              </S.MobileNavList>
            </S.MobileMenu>
          )}
        </S.HeaderContainer>
      </S.Header>

      <S.CarouselContainer>
        {CarouselData.map((slide, index) => (
            <CarouselSlide
              key={slide.id}
              active={current === index}
              image={slide.image}
            />
          ))}
        <S.CarouselOverlay />
        <S.CarouselContent>
          <S.CarouselInner>
            <S.CarouselText>
              <h2>{CarouselData[current].title}</h2>
              <p>{CarouselData[current].description}</p>
              <S.CarouselButton style={{ backgroundColor: CarouselData[current].buttonColor }}>
                {CarouselData[current].buttonText}
              </S.CarouselButton>
            </S.CarouselText>
          </S.CarouselInner>
        </S.CarouselContent>

        <S.NavigationButton className="left" onClick={prevSlide}>
          <ChevronLeft size={24} />
        </S.NavigationButton>
        <S.NavigationButton className="right" onClick={nextSlide}>
          <ChevronRight size={24} />
        </S.NavigationButton>

        <S.Indicators>
          {CarouselData.map((_, index) => (
            <S.IndicatorDot
              key={index}
              active={current === index}
              onClick={() => {
                setCurrent(index);
                setIsAutoPlaying(false);
              }}
            />
          ))}
        </S.Indicators>
      </S.CarouselContainer>

      <S.SpotlightSection>
        <S.SectionTitle>Quick Links</S.SectionTitle>
        <S.SpotlightGrid>
          {SpotlightData.map((item, index) => (
            <S.SpotlightCard key={index}>
              <S.CardTitle>{item.title}</S.CardTitle>
              <S.CardText>{item.description}</S.CardText>
              <S.LearnMoreButton>Learn More →</S.LearnMoreButton>
            </S.SpotlightCard>
          ))}
        </S.SpotlightGrid>
      </S.SpotlightSection>

      <S.SpotlightSection>
        <S.SectionTitle>News Releases</S.SectionTitle>
        <S.SpotlightGrid>
          {NewsData.map((item, index) => (
            <S.SpotlightCard key={index}>
              <S.CardTitle>{item.title}</S.CardTitle>
              <S.CardText>{item.description}</S.CardText>
              <S.LearnMoreButton>Learn More →</S.LearnMoreButton>
            </S.SpotlightCard>
          ))}
        </S.SpotlightGrid>
      </S.SpotlightSection>

      <S.AlertSection>
        <S.SectionTitle>Current Alerts</S.SectionTitle>
        <S.AlertText>No AMBER alerts at this time</S.AlertText>
      </S.AlertSection>

      <S.Footer>
        <S.FooterContent>
          <S.FooterGrid>
            <S.FooterSection>
              <h3>Contact Us</h3>
              <p>Emergency: 911</p>
              <p>Non-Emergency: (609) 882-2000</p>
            </S.FooterSection>

            <S.FooterSection>
              <h3>Quick Links</h3>
              <ul>
                <li><button>FAQs</button></li>
                <li><button>Careers</button></li>
                <li><button>Press Releases</button></li>
              </ul>
            </S.FooterSection>

            <S.FooterSection>
              <h3>Resources</h3>
              <ul>
                <li><button>Forms</button></li>
                <li><button>Publications</button></li>
                <li><button>Statistics</button></li>
              </ul>
            </S.FooterSection>

            <S.FooterSection>
              <h3>Connect With Us</h3>
              <p>Follow us on social media for updates and alerts.</p>
            </S.FooterSection>
          </S.FooterGrid>

          <S.FooterBottom>
            <p>&copy; 2024 New Jersey State Police. All rights reserved.</p>
          </S.FooterBottom>
        </S.FooterContent>
      </S.Footer>
    </S.Container>
  );
}