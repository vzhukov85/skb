export default function canonize(url) {
  const re = new RegExp('@?(https:|http:)?(//)?([^/]+/)?([@a-z0-9_.]+)', 'i');
  const usernameInfo = url.match(re);
  const username = usernameInfo[4];
  if (username.startsWith('@')) {
    return username;
  }
  return `@${username}`;
}
