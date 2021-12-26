export async function fetchPlayRecord(token: string, userId: string) {
  return await fetch('https://chunithm-net-eng.com/mobile/record/playlog/', {
    headers: {
      Cookie: `_t=${token}; userId=${userId}`,
    },
  }).then(t => t.text());
}
