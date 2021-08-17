import Verses from '@/components/Verses'
import sura94 from '@/data/quran/json/94.json'

const showVersesFrom94 = ({ ayahs, audio, children }) => (
  <Verses chapter={sura94} ayahs={ayahs} audio={audio}>
    {children}
  </Verses>
)

export default showVersesFrom94
