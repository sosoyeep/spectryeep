import type { CompareRecord } from './_types';
import { compare as innovateT5VsNobleT7 } from './innovate-t5-vs-noble-t7';

export const COMPARE_RECORDS: Record<string, CompareRecord> = {
  'innovate-t5-vs-noble-t7': innovateT5VsNobleT7,
};

export const COMPARE_LIST: CompareRecord[] = Object.values(COMPARE_RECORDS);

export function getCompare(slug: string): CompareRecord | undefined {
  return COMPARE_RECORDS[slug];
}
