import React from 'react';
import { graphql, Link } from 'gatsby';
import Layout from '../components/layout';

const BlogPage = ({ data }) => {
  const posts = data.allMarkdownRemark.edges;
  return (
    <Layout>
      <div className="all-posts">
        { posts.map(post => (
          <div key={post.node.id} className="blog-list-item">
            <h2>{ post.node.frontmatter.title }</h2>
            <p>{ post.node.frontmatter.date }</p>
            <div className="post-excerpt">
            <p>{post.node.excerpt}</p>
            </div>
            <Link to={post.node.fields.slug}>Read Full Post</Link>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default BlogPage
export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
          }
        }
      }
    }
  }
`;
