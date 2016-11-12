import XRegExp from 'xregexp';

function normolize(name) {
  const first = name[0];
  const last = name.substring(1);
  return first.toUpperCase() + last.toLowerCase();
}

export default function formatName(fio) {
  console.log('|' + fio + "|");
  if (fio === undefined) {
    return 'Invalid fullname';
  }
  const reExp = new XRegExp('(\\s+)?([\\pL\']+)?(\\s+)?([\\pL\']+)?(\\s+)?([\\pL\']+)?(.*)?', 'i');
  const parsedFio = fio.match(reExp);
  if (parsedFio == null || parsedFio[7] !== undefined) {
    return 'Invalid fullname';
  }
  if (parsedFio[6] === undefined && parsedFio[4] === undefined && parsedFio[2] === undefined) {
    return 'Invalid fullname';
  }
  if (parsedFio[6] === undefined && parsedFio[4] === undefined) {
    return normolize(parsedFio[2]);
  }
  if (parsedFio[6] === undefined) {
    const lastName = normolize(parsedFio[4]);
    const firstName = normolize(parsedFio[2]);
    return `${lastName} ${firstName[0]}.`;
  }
  const lastName = normolize(parsedFio[6]);
  const firstName = normolize(parsedFio[2]);
  const middleName = normolize(parsedFio[4]);
  return `${lastName} ${firstName[0]}. ${middleName[0]}.`;
}
