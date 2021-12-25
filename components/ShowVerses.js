import React, { useState, useRef, useEffect } from 'react'
import Verses from '@/components/Verses'

export function ShowVerses({ sura, ayahs, children }) {
  const [suraContent, setSuraContent] = React.useState({})
  useEffect(() => {
    import(`@/data/quran/json/${sura}.json`).then((res) => {
      setSuraContent(res);
    })
  }, []);
  return (
    <div>
      {'ayahs' in suraContent > 0 ? (
        <Verses chapter={suraContent} ayahs={ayahs}>
          {children}
        </Verses>
      ) : (
        <h2>No surah</h2>
      )}
    </div>
  )
}
