import Image from 'next/image'
import CustomLink from './Link'
import showVersesFrom94 from '@/data/quran/94'
import showVersesFrom95 from '@/data/quran/95'
import showVersesFrom42 from '@/data/quran/42'
import showVersesFrom48 from '@/data/quran/48'
import showVersesFrom105 from '@/data/quran/105'
import VerseExplanation from '@/components/VerseExplanation'
import FullAudioPlayer from '@/components/FullAudioPlayer'
import Vocabulary from '@/components/Vocabulary'
import MarkComplete from '@/components/MarkComplete'
import { PrayerApplyTable } from '@/components/PrayerApplyTable'
import { ShowVerses } from '@/components/ShowVerses'
import { Counter } from '../store/Counter'
import { PrayerChecker } from '../store/PrayerChecker'

const MDXComponents = {
  Image,
  a: CustomLink,
  ShowVerses,
  showVersesFrom94,
  showVersesFrom95,
  showVersesFrom42,
  showVersesFrom48,
  showVersesFrom105,
  VerseExplanation,
  FullAudioPlayer,
  Vocabulary,
  PrayerApplyTable,
  Counter,
  PrayerChecker,
  MarkComplete,
}

export default MDXComponents
