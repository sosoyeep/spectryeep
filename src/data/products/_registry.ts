import type { ProductRecord } from './_types';
import { product as exquisT4 } from './exquis-t4';
import { product as exquisT4Pro } from './exquis-t4-pro';
import { product as innovateT5 } from './innovate-t5-product';
import { product as nobleT7 } from './noble-t7';
import { product as jb750 } from './jb-750';
import { product as surpassF1 } from './surpass-f1';
import { product as cs2020 } from './cs2020';
import { product as cs995 } from './cs995';
import { product as cs996 } from './cs996';
import { product as onh508 } from './onh-508';
import { product as f6000 } from './f6000-pro';
import { product as f7000 } from './f7000-pro';

export const PRODUCT_RECORDS: Record<string, ProductRecord> = {
  'exquis-t4': exquisT4,
  'exquis-t4-pro': exquisT4Pro,
  'innovate-t5': innovateT5,
  'noble-t7': nobleT7,
  'jb-750': jb750,
  'surpass-f1': surpassF1,
  'cs2020': cs2020,
  'cs995': cs995,
  'cs996': cs996,
  'onh-508': onh508,
  'f6000-pro': f6000,
  'f7000-pro': f7000,
};

export const PRODUCT_LIST: ProductRecord[] = Object.values(PRODUCT_RECORDS);

export function getProduct(slug: string): ProductRecord | undefined {
  return PRODUCT_RECORDS[slug];
}
