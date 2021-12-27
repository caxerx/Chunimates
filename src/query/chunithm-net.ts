import { fetchProfile } from '../api/chunithm-net-api';
import { parseProfile } from '../parser/chunithm-net-parser';

export async function fetchAndParseProfile() {
  const profile = await fetchProfile();
  return parseProfile(profile);
}
