import Link from '@/components/Link'
import PageTitle from '@/components/PageTitle'
import SectionContainer from '@/components/SectionContainer'
import { BlogSeo } from '@/components/SEO'
import Tag from '@/components/Tag'
import siteMetdata from '@/data/siteMetadata'
import MarkComplete from "@/components/MarkComplete"

const editUrl = (fileName) => `${siteMetdata.siteRepo}/blob/master/data/blog/${fileName}`
const discussUrl = (slug) =>
  `https://mobile.twitter.com/search?q=${encodeURIComponent(`${siteMetdata.siteUrl}/blog/${slug}`)}`

const postDateTemplate = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }

export default function TafsirLayout({ children, frontMatter, next, prev, module }) {
  const { slug, fileName, date, title, tags, menu, links, order, section } = frontMatter;
  console.log(module);
  return (
    <SectionContainer>
      <BlogSeo url={`${siteMetdata.siteUrl}/blog/${frontMatter.slug}`} {...frontMatter} />
      <header className="w-full z-10 pb-1 mb-1 pt-0 mt-0 text-center">
        <PageTitle>{section}</PageTitle>
      </header>
      <div className="container w-full flex flex-wrap mx-auto">
        {/*className="w-full lg:w-4/5 p-8 mt-6 lg:mt-0 text-gray-900 leading-normal bg-white border border-gray-400 border-rounded"*/}
        <div className="w-full divide-y divide-gray-200 dark:divide-gray-700 xl:pb-0 xl:col-span-3 xl:row-span-2">
          <div className="pt-3 pb-8 prose dark:prose-dark">{children}</div>
        </div>


      </div>
    </SectionContainer>
  )
}
