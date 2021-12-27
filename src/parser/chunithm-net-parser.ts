import { fetchPlayRecordDifficultyMapping } from '../const/level-string';
import { loadDom } from './load-dom';

export function parsePlayRecord(content: string): ChunithmNetPlayRecord[] {
  const $ = loadDom(content);

  const t = $('.frame02.w400').map((_, el) => {
    const _$ = $.load(el);

    return {
      title: _$('.play_musicdata_title').text(),
      date: _$('.play_datalist_date').text(),

      score: _$('.play_musicdata_score_text')
        .text()
        .replace(/Score：(([0-9]+,?)+)/, '$1')
        .replace(/,/g, ''),

      track: _$('.play_track_text').text().replace('Track ', ''),

      difficulty:
        fetchPlayRecordDifficultyMapping[
          _$('.play_track_result > img')
            .attr('src')
            ?.replace(
              /https:\/\/chunithm-net-eng.com\/mobile\/images\/icon_text_(.+).png/,
              '$1'
            ) ?? 'BAS'
        ],
    } as ChunithmNetPlayRecord;
  });

  return t.toArray();
}

export function parseSongRecord(content: string): ChunithmNetSongRecord[] {
  const $ = loadDom(content);

  const t = $('.musiclist_box').map((_, el) => {
    const _$ = $.load(el);

    return {
      title: _$('.music_title').text(),
      score: _$('.play_musicdata_highscore .text_b').text().replace(/,/g, ''),
      isClear:
        _$(
          'img[src="https://chunithm-net-eng.com/mobile/images/icon_clear.png"]'
        ).length !== 0,

      isFullCombo:
        _$(
          'img[src="https://chunithm-net-eng.com/mobile/images/icon_fullcombo.png"]'
        ).length !== 0,

      isAllJustice:
        _$(
          'img[src="https://chunithm-net-eng.com/mobile/images/icon_alljustice.png"]'
        ).length !== 0,
    } as ChunithmNetSongRecord;
  });

  return t.toArray();
}
