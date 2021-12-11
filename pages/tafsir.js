import Image from 'next/image'
import siteMetadata from '@/data/siteMetadata'
import tafsirData from '@/data/tafsirData'
import Link from '@/components/Link'
import Card from '@/components/Card'
import { PageSeo } from '@/components/SEO'

export default function Tafsir() {
  return (
    <>
      <PageSeo
        title={`Projects - ${siteMetadata.author}`}
        description={siteMetadata.description}
        url={`${siteMetadata.siteUrl}/projects`}
      />
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="pt-6 pb-8 space-y-2 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Decoding Koranic Explanation
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            An exploration of the last 22 chapters of the Koran using the book entitled Safwah al Tafasir
          </p>
        </div>
        <div className="container py-12">
          <div className="flex flex-wrap -m-4">
            {tafsirData.map((d) => (
              <Card
                key={d.title}
                title={d.title}
                description={d.description}
                imgSrc={d.imgSrc}
                href={d.href}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
