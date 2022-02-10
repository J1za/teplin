import BlogHero from "./Hero"
import SectionCTA from "components/sections/SectionCTA"
import BlogPosts from "./Posts"
export default function BlogTemplate() {
  return (
    <>
      <BlogHero />
      <BlogPosts />
      <SectionCTA pageTop />
    </>
  )
}