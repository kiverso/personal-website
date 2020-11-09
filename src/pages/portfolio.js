import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Img from "gatsby-image"
import { Link } from "gatsby";

const portfolioPage = ({data}) => (
    <Layout>
      <SEO title="Portfolio"/>
      <h1>My Projects</h1>
      <div className="all-projects">
        { data.allProjectsJson.edges.map(project => (
          <div key={project.node.id} className="project">
            <div className="project-image">
              <Img fluid={project.node.image.childImageSharp.fluid} />
            </div>
            <div className="project-description">
              <p>{project.node.description}</p>
              <Link to={project.node.demo} className ="project-link" >Application</Link>
              <Link to={project.node.repo} className ="project-link" >Source Code</Link>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  )

export default portfolioPage

export const projectsQuery = graphql`
  query {
    allProjectsJson(sort: { order: DESC, fields: [date] }) {
      edges {
        node {
          id
          title
          date
          description
          demo
          repo
          image {
            childImageSharp {
              fluid(maxWidth: 1200) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`;