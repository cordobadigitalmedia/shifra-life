import Verses from '@/components/Verses'
import sura95 from '@/data/quran/json/95.json'

const showVersesFrom95 = ({ ayahs, audio, children }) => (
  <Verses chapter={sura95} ayahs={ayahs} audio={audio}>
    {children}
  </Verses>
)

export default showVersesFrom95
