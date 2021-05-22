import Verses from "@/components/Verses";
import sura42 from "@/data/quran/json/42.json";

const showVersesFrom42 = ({ ayahs }) => (
    <Verses chapter={sura42} ayahs={ayahs}/>
)

export default showVersesFrom42;