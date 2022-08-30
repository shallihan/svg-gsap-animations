import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { graphql } from "gatsby";
import { getImage, GatsbyImage } from "gatsby-plugin-image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import GlobalStyle from "../styles";
import { Arrow, BackgroundBlobs } from "../assets/svgs";

gsap.registerPlugin(ScrollTrigger);

const IndexPage = ({ data }) => {
  const pageData = data.allMarkdownRemark.edges[0].node.frontmatter;

  const arrow = useRef();
  const header = useRef();
  const sections = useRef([]);
  const backgroundSvgs = useRef([]);

  useEffect(() => {
    const fadeOutHeader = gsap.timeline({
      scrollTrigger: {
        trigger: sections.current[0],
        start: 250,
        end: 450,
        scrub: true,
      },
    });

    const fadeOutArrow = gsap.timeline({
      scrollTrigger: {
        trigger: sections.current[0],
        start: 200,
        end: 300,
        scrub: true,
      },
    });

    sections.current.forEach((section, index) => {
      const animateBlob = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          end: "+=100%",
          scrub: true,
        },
      });

      const paths = Object.values(backgroundSvgs.current[index].children).map((group) => {
        return group.children[0];
      });

      animateBlob.fromTo(paths, { scale: 0 }, { scale: 1 });
    });

    fadeOutHeader.fromTo(header.current, { opacity: 1 }, { opacity: 0 });
    fadeOutArrow.fromTo(arrow.current, { opacity: 1 }, { opacity: 0 });
  }, []);

  return (
    <>
      <GlobalStyle />
      <BackgroundBlobs blobs={backgroundSvgs} />
      <Header ref={header}>
        <h1>
          Jessie
          <span />
          Cullen
        </h1>
        <h2>Fine art curator, living and working in Berlin, Germany</h2>
      </Header>
      <Arrow setRef={arrow} />
      {pageData.sections.map((section, index) => {
        const image = getImage(section.image);
        return (
          <Section
            ref={(element) => (sections.current[index] = element)}
            key={index}
          >
            <figure>
              <GatsbyImage image={image} alt={section.figcaption} />
              <figcaption>{section.figcaption}</figcaption>
            </figure>
          </Section>
        );
      })}
    </>
  );
};

export const query = graphql`
  query {
    allMarkdownRemark(filter: { frontmatter: { id: { eq: 1 } } }) {
      edges {
        node {
          frontmatter {
            sections {
              figcaption
              image {
                childImageSharp {
                  gatsbyImageData(layout: FULL_WIDTH)
                }
              }
            }
          }
        }
      }
    }
  }
`;

const Header = styled.header`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  h1 {
    font-size: 10vw;
    font-style: italic;
    font-weight: 400;
    animation: fadeIn 0.4s 1s both cubic-bezier(0.9, 0.03, 0.69, 0.22);
  }
  h2 {
    text-align: center;
    max-width: 480px;
    font-size: 36px;
    font-weight: 400;
    animation: fadeIn 0.4s 2s both cubic-bezier(0.9, 0.03, 0.69, 0.22);
  }
  span {
    background-color: #000000;
    width: 1em;
    height: 0.02em;
    display: inline-block;
    vertical-align: middle;
    margin: 0 0.5rem;
    animation: hyphen 2s 1s infinite alternate cubic-bezier(0.86, 0, 0.07, 1);
  }
`;

const Section = styled.section`
  padding: 200px;
  figure {
    max-width: 600px;
    margin: 0 auto;
    figcaption {
      margin: 24px 20% 0 0;
    }
    img {
      filter: grayscale(100%) brightness(125%) contrast(125%);
    }
  }
`;

export default IndexPage;
