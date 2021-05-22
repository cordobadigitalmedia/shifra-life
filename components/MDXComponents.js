import Image from 'next/image'
import CustomLink from './Link'
import showVersesFrom93 from "@/data/quran/93"
import showVersesFrom42 from "@/data/quran/42"
import showVersesFrom105 from "@/data/quran/105"
import VerseExplanation from "@/components/VerseExplanation"
import FullAudioPlayer from "@/components/FullAudioPlayer"
import Vocabulary from "@/components/Vocabulary"

const MDXComponents = {
  Image,
  a: CustomLink,
  showVersesFrom93,
  showVersesFrom42,
  showVersesFrom105,
  VerseExplanation,
  FullAudioPlayer,
  Vocabulary,
}

export default MDXComponents
