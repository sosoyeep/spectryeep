import type { CompareRecord } from './_types';
import { compare as innovateT5VsNobleT7 } from './innovate-t5-vs-noble-t7';
import { compare as exquisT4VsInnovateT5 } from './exquis-t4-vs-innovate-t5';
import { compare as cs995VsCs996 } from './cs995-vs-cs996';
import { compare as f6000ProVsF7000Pro } from './f6000-pro-vs-f7000-pro';

export const COMPARE_RECORDS: Record<string, CompareRecord> = {
  'innovate-t5-vs-noble-t7': innovateT5VsNobleT7,
  'exquis-t4-vs-innovate-t5': exquisT4VsInnovateT5,
  'cs995-vs-cs996': cs995VsCs996,
  'f6000-pro-vs-f7000-pro': f6000ProVsF7000Pro,
};

export const COMPARE_LIST: CompareRecord[] = Object.values(COMPARE_RECORDS);

export function getCompare(slug: string): CompareRecord | undefined {
  return COMPARE_RECORDS[slug];
}
