import Verses from '@/components/Verses'
import sura6 from '@/data/quran/json/6.json'

const showVersesFrom6 = ({ ayahs }) => <Verses chapter={sura6} ayahs={ayahs} />

export default showVersesFrom6
