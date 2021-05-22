import Verses from "@/components/Verses";
import sura105 from "@/data/quran/json/105.json";

const showVersesFrom105 = ({ ayahs }) => (
    <Verses chapter={sura105} ayahs={ayahs}/>
)

export default showVersesFrom105;