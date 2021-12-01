/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"

function Seo({ description, lang, meta, title }) {
  const metaDescription = description
  const defaultTitle = title
  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={defaultTitle}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: `Rob-t`,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
        {
          name: `keywords`,
          content:
            "NIC code, CIN code, MCA cin number, Alternative data, crustdata, crustdata alternative data",
        },
      ].concat(meta)}
    />
  )
}

Seo.defaultProps = {
  lang: `en`,
  meta: [
    {
      name: `description`,
      content: `NIC code for your business to obtain Udyog Aadhar. Find section and division of a incorporated company.`,
    },
    {
      property: `og:title`,
      content: "NIC Code Search",
    },
    {
      property: `og:description`,
      content: `NIC code for your business to obtain Udyog Aadhar. Find section and division of a incorporated company.`,
    },
  ],
  description: `NIC code for your business to obtain Udyog Aadhar. Find section and division of a incorporated company.`,
}

Seo.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default Seo
