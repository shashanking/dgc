import { groq } from 'next-sanity';

export const servicesQuery = groq`*[_type == "service"]{
  _id,
  title,
  slug,
  description,
  "mainImage": mainImage.asset->url,
  "icon": icon.asset->url
}`;

export const serviceBySlugQuery = groq`*[_type == "service" && slug.current == $slug][0]{
  _id,
  title,
  slug,
  description,
  "mainImage": mainImage.asset->url,
  body,
  products[] {
    productName,
    standard,
    category,
    description,
    link
  }
}`;

export const teamQuery = groq`*[_type == "team"]{
  _id,
  name,
  role,
  "image": image.asset->url
}`;

export const clientsQuery = groq`*[_type == "client"] {
  _id,
  name,
  "logo": logo.asset->url
}`;

export const companyInfoQuery = groq`*[_type == "companyInfo"][0] {
  name,
  tagline,
  email,
  phone,
  address,
  socialLinks,
  contactTitle,
  contactSubtitle,
  contactIntro
}`;

export const homePageQuery = groq`*[_type == "homePage"][0] {
  heroTitle,
  heroSubtitle,
  stats,
  worldMapData
}`;

export const aboutPageQuery = groq`*[_type == "aboutPage"][0] {
  title,
  mission,
  vision,
  story,
  stats
}`;

export const faqsQuery = groq`*[_type == "faq"] | order(order asc) {
  _id,
  question,
  answer
}`;

export const testimonialsQuery = groq`*[_type == "testimonial"] {
  _id,
  name,
  role,
  company,
  quote,
  "image": image.asset->url
}`;
