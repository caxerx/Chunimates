// import {DOMParser} from '@xmldom/xmldom';

import {Parser} from 'htmlparser2';
import {DomHandler} from 'htmlparser2';
import * as cheerio from 'cheerio';

export function parsePlayRecord(content: string): ChunithmPlayRecord[] {
  const handler = new DomHandler(undefined, undefined);
  new Parser(handler, undefined).end(content);
  const dom = handler.root;
  const $ = cheerio.load(dom);
  const t = $('.frame02.w400').map((i, el) => {
    const _$ = $.load(el);
    return {
      title: _$('.play_musicdata_title').text(),
      date: _$('.play_datalist_date').text(),
      score: _$('.play_musicdata_score_text')
        .text()
        .replace(/Score：(([0-9]+,?)+)/, '$1')
        .replace(/,/g, ''),
      difficulty: _$('.play_track_result > img')
        .attr('src')
        ?.replace(
          /https:\/\/chunithm-net-eng.com\/mobile\/images\/icon_text_(.+).png/,
          '$1',
        ),
    } as ChunithmPlayRecord;
  });

  return t.toArray();
}
