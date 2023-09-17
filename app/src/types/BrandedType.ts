import { BrandType } from "./BrandType";

export type BrandedType<T, B> = T & BrandType<B>;
