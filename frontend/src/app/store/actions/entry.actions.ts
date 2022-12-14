import { IEntry } from '../../interfaces/entry';

export class CreateEntry {
  static readonly type = '[Entry] Create Entry';
  constructor(public entry: IEntry) {}
}

export class UpdateEntry {
  static readonly type = '[Entry] Update Entry';
  constructor(public entry: IEntry) {}
}

export class SetEntries {
  static readonly type = '[Entry] Set Entries';
  constructor(public entries: IEntry[]) {}
}

export class SetActiveEntry {
  static readonly type = '[Entry] Set Active Entry';
  constructor(public entry: IEntry) {}
}

export class SetEdit {
  static readonly type = '[Entry] Set Edit';
  constructor(public state: boolean) {}
}

export class LoadActiveEntry {
  static readonly type = '[Entry] Load Active Entry';
  constructor(public _id?: string) {}
}

export class LoadPublicEntry {
  static readonly type = '[Entry] Load Public Entry';
  constructor(public _id?: string) {}
}

export class LoadEntryComplete {
  static readonly type = '[Entry] Load Entry Complete';
  constructor(public entry: IEntry) {}
}

export class LoadEntryError {
  static readonly type = '[Entry] Load Entry Error';
  constructor(public error: any) {}
}

export class SetEntryPublic {
  static readonly type = '[Entry] Set Entry Public';
  constructor(public _id: string, public entryPublic: boolean) {}
}

export class DeleteEntry {
  static readonly type = '[Entry] Delete Entry';
  constructor(public _id: string) {}
}
