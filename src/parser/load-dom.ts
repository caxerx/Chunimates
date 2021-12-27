import * as cheerio from 'cheerio';
import { DomHandler, Parser } from 'htmlparser2';

export function loadDom(content: string) {
  const handler = new DomHandler(undefined, undefined);
  new Parser(handler, undefined).end(content);
  const dom = handler.root;
  return cheerio.load(dom);
}
