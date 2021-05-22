import Verses from "@/components/Verses";
import sura93 from "@/data/quran/json/93.json";

const showVersesFrom93 = ({ ayahs, audio, children }) => (
    <Verses chapter={sura93} ayahs={ayahs} audio={audio}>{children}</Verses>
)

export default showVersesFrom93;