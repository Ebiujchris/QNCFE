import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const SEO = ({ title, description, canonical, keywords }) => {
  const location = useLocation()
  const baseUrl = 'https://qncsolutions.org'
  
  useEffect(() => {
    // Update title
    if (title) {
      document.title = title
    }
    
    // Update or create meta tags
    const updateMetaTag = (name, content, isProperty = false) => {
      if (!content) return
      
      const attribute = isProperty ? 'property' : 'name'
      let element = document.querySelector(`meta[${attribute}="${name}"]`)
      
      if (!element) {
        element = document.createElement('meta')
        element.setAttribute(attribute, name)
        document.head.appendChild(element)
      }
      
      element.setAttribute('content', content)
    }
    
    // Update description
    updateMetaTag('description', description)
    updateMetaTag('keywords', keywords)
    
    // Update Open Graph tags
    updateMetaTag('og:title', title, true)
    updateMetaTag('og:description', description, true)
    updateMetaTag('og:url', `${baseUrl}${location.pathname}`, true)
    
    // Update Twitter tags
    updateMetaTag('twitter:title', title, true)
    updateMetaTag('twitter:description', description, true)
    updateMetaTag('twitter:url', `${baseUrl}${location.pathname}`, true)
    
    // Update canonical link
    let canonicalLink = document.querySelector('link[rel="canonical"]')
    if (!canonicalLink) {
      canonicalLink = document.createElement('link')
      canonicalLink.setAttribute('rel', 'canonical')
      document.head.appendChild(canonicalLink)
    }
    canonicalLink.setAttribute('href', canonical || `${baseUrl}${location.pathname}`)
  }, [title, description, canonical, keywords, location.pathname])
  
  return null
}

export default SEO
