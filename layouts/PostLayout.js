import Link from '@/components/Link'
import PageTitle from '@/components/PageTitle'
import SectionContainer from '@/components/SectionContainer'
import { BlogSeo } from '@/components/SEO'
import Tag from '@/components/Tag'
import siteMetdata from '@/data/siteMetadata'

const editUrl = (fileName) => `${siteMetdata.siteRepo}/blob/master/data/blog/${fileName}`
const discussUrl = (slug) =>
  `https://mobile.twitter.com/search?q=${encodeURIComponent(`${siteMetdata.siteUrl}/blog/${slug}`)}`

const postDateTemplate = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }

export default function PostLayout({ children, frontMatter, next, prev }) {
  const { slug, fileName, date, title, tags, menu, links, order, section } = frontMatter;
  console.log(frontMatter);
  return (
    <SectionContainer>
      <BlogSeo url={`${siteMetdata.siteUrl}/blog/${frontMatter.slug}`} {...frontMatter} />
      <header className="w-full z-10 pb-1 mb-1 pt-0 mt-0 border-b border-gray-400">
        <PageTitle>{section}</PageTitle>
      </header>
      <div className="container w-full flex flex-wrap mx-auto">
        <div className="w-full lg:w-1/5 lg:px-6 text-xl text-gray-800 leading-normal">
          <div className="block lg:hidden sticky inset-0">
            <button id="menu-toggle"
              className="flex w-full justify-end px-3 py-3 bg-white lg:bg-transparent border rounded border-gray-600 hover:border-purple-500 appearance-none focus:outline-none">
              <svg className="fill-current h-3 float-right" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </button>
          </div>
          <div className="w-full sticky inset-0 hidden h-64 lg:h-auto overflow-x-hidden overflow-y-auto lg:overflow-y-hidden lg:block mt-0 border border-gray-400 lg:border-transparent bg-white shadow lg:shadow-none lg:bg-transparent z-20"
            id="menu-content">
            <ul className="list-reset">
              {menu.map((item, i) => (
                <li className="py-2 md:my-0 hover:bg-purple-100 lg:hover:bg-transparent" key={i}>
                  <a href={links[i]}
                    className={`block pl-4 align-middle text-gray-700 no-underline hover:text-purple-500 border-l-4 border-transparent ${order === i ? "lg:border-purple-500 lg:hover:border-purple-500" : "lg:hover:border-gray-400"}`}>
                    <span className={`pb-1 md:pb-0 text-sm ${order === i ? "text-gray-900 font-bold" : ""}`}>{item}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        {/*className="w-full lg:w-4/5 p-8 mt-6 lg:mt-0 text-gray-900 leading-normal bg-white border border-gray-400 border-rounded"*/}
        <div className="divide-y divide-gray-200 dark:divide-gray-700 xl:pb-0 xl:col-span-3 xl:row-span-2">
          <div className="pt-3 pb-8 prose dark:prose-dark">{children}</div>
        </div>

        <div className="w-full lg:w-4/5 lg:ml-auto text-base md:text-sm text-gray-500 py-6">
          {order > 0 ? <a href={links[order - 1]}><button className="btn btn--primary mr-2">Previous Lesson</button></a> : <button className="btn btn--secondary mr-2 cursor-text">Previous Lesson</button>}
          {order < links.length ? <a href={links[order + 1]}><button className="btn btn--primary">Next Lesson</button></a> : <button className="btn btn--secondary cursor-text">Next Lesson</button>}
        </div>


      </div>
    </SectionContainer>
  )
}
