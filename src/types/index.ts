import { Document as MongooseDocument } from 'mongoose';
import { TypeWithTimestamps } from '../collections/config/types';
import { FileData } from '../uploads/types';
import { validOperators } from './constants';

export { PayloadRequest } from '../express/types';

export type Operator = typeof validOperators[number];

export type WhereField = {
  [key in Operator]?: unknown;
};

export type Where = {
  [key: string]: WhereField | Where[];
  or?: Where[];
  and?: Where[];
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type Document = any;

export interface PayloadMongooseDocument extends MongooseDocument {
  setLocale: (locale: string, fallback: string) => void;
  filename?: string;
  sizes?: FileData[];
}

export type Operation = 'create' | 'read' | 'update' | 'delete';
export type VersionOperations = 'readVersions';
export type AuthOperations = 'unlock';
export type AllOperations = Operation | VersionOperations | AuthOperations;

export function docHasTimestamps(doc: any): doc is TypeWithTimestamps {
  return doc?.createdAt && doc?.updatedAt;
}
