export const centToDollars = (num) => {
  let dollars = num / 100;
  return dollars.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
  });
};

export const timeDifference = (previous) => {
  let msPerMinute = 60 * 1000;
  let msPerHour = msPerMinute * 60;
  let msPerDay = msPerHour * 24;
  let msPerMonth = msPerDay * 30;
  let current = Date.now();
  let elapsed = current - previous;

  if (elapsed < msPerMinute) {
    return Math.round(elapsed / 1000) + ' seconds ago';
  } else if (elapsed < msPerHour) {
    return Math.round(elapsed / msPerMinute) + ' minutes ago';
  } else if (elapsed < msPerDay) {
    return Math.round(elapsed / msPerHour) + ' hours ago';
  } else if (
    Math.round(elapsed / msPerDay) > 6 &&
    Math.round(elapsed / msPerDay) < 8
  ) {
    return 'a  week ago';
  } else if (Math.round(elapsed / msPerDay) > 8) {
    let date = new Date(previous);
    return date.toLocaleDateString();
  } else if (elapsed < msPerMonth) {
    return +Math.round(elapsed / msPerDay) + ' days ago';
  }
};
