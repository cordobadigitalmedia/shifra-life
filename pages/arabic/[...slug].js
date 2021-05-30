import fs from 'fs'
import hydrate from 'next-mdx-remote/hydrate'
import { getFiles, getFileBySlug, getAllFilesFrontMatter, formatSlug } from '@/lib/mdx'
import PostLayout from '@/layouts/PostLayout'
import MDXComponents from '@/components/MDXComponents'
import PageTitle from '@/components/PageTitle'
import generateRss from '@/lib/generate-rss'
import PrayerApplyTable from "@/components/PrayerApplyTable"

export async function getStaticPaths() {
  const posts = await getFiles('arabic')
  const paths = posts.map((p) => ({
    params: {
      slug: formatSlug(p),
    },
  }));
  return {
    paths: paths,
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const allPosts = await getAllFilesFrontMatter('arabic')
  const postIndex = allPosts.findIndex((post) => post.slug === params.slug)
  const prev = allPosts[postIndex + 1] || null
  const next = allPosts[postIndex - 1] || null
  const post = await getFileBySlug('arabic', params.slug)
  // rss
  const rss = generateRss(allPosts)
  fs.writeFileSync('./public/index.xml', rss)

  return { props: { post, prev, next, allPosts } }
}

export default function Blog({ post, prev, next, allPosts }) {
  //console.log(post, allPosts);
  //use these 2 values to calculate current module, current lesson, list of lessons and modules with hyrarchy - this is provided to the modules list and highlight component and back/next component as well as points/reward system 
  const { mdxSource, frontMatter } = post
  const content = hydrate(mdxSource, {
    components: MDXComponents,
  })

  return (
    <>
      {frontMatter.draft !== true ? (
        <div>
          <PostLayout frontMatter={frontMatter} prev={prev} next={next}>
            {content}
          </PostLayout>
          <PrayerApplyTable/>
        </div>

      ) : (
        <div className="mt-24 text-center">
          <PageTitle>
            Under Construction{' '}
            <span role="img" aria-label="roadwork sign">
              🚧
            </span>
          </PageTitle>
        </div>
      )}
    </>
  )
}
