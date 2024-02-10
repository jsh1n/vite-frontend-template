// Keyの配列
const recoilKeys = [
    // add to your unique key here
] as const

export const recoilKeyHashSet = Object.fromEntries(
  recoilKeys.map((k) => [k, k])
) as {
  [k in typeof recoilKeys[number]]: k;
};

const set = new Set(recoilKeys);
if (set.size !== recoilKeys.length) {
  throw Error("[Recoil] Duplicate key found");
}