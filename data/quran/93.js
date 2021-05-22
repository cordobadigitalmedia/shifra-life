import Verses from "@/components/Verses";
import sura93 from "@/data/quran/json/93.json";

const showVersesFrom93 = ({ ayahs }) => (
    <Verses chapter={sura93} ayahs={ayahs}/>
)

export default showVersesFrom93;