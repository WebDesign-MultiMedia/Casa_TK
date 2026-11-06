import { business } from "../data/business";

const WEEKDAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const toMinutes = (hhmm) => {
  const [h, m] = hhmm.split(":").map(Number);
  return h * 60 + m;
};

// "08:00" → "8 AM", "22:30" → "10:30 PM", "24:00" → "12 AM"
export function formatTime(hhmm) {
  const [h, m] = hhmm.split(":").map(Number);
  const hour = h % 24;
  const suffix = hour < 12 ? "AM" : "PM";
  const display = hour % 12 === 0 ? 12 : hour % 12;
  return m ? `${display}:${String(m).padStart(2, "0")} ${suffix}` : `${display} ${suffix}`;
}

// Current weekday + minutes-since-midnight in the shop's own time zone, so
// a visitor browsing from another state still sees the right status.
function nowInShopTime(date) {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: business.timeZone,
    weekday: "short",
    hour: "2-digit",
    minute: "2-digit",
    hourCycle: "h23",
  }).formatToParts(date);
  const get = (type) => parts.find((p) => p.type === type)?.value;
  return {
    day: WEEKDAYS.indexOf(get("weekday")),
    minutes: Number(get("hour")) * 60 + Number(get("minute")),
  };
}

/**
 * Returns { isOpen, closesAt } while open, or
 * { isOpen: false, opensAt, dayOffset, opensDay } while closed, where
 * dayOffset is 0 = today, 1 = tomorrow, n = n days out and opensDay is
 * the Date#getDay() index of that day.
 */
export function getOpenStatus(date = new Date()) {
  const { day, minutes } = nowInShopTime(date);
  const today = business.hoursByDay[day];

  if (today && minutes >= toMinutes(today.open) && minutes < toMinutes(today.close)) {
    return { isOpen: true, closesAt: formatTime(today.close) };
  }

  if (today && minutes < toMinutes(today.open)) {
    return { isOpen: false, opensAt: formatTime(today.open), dayOffset: 0, opensDay: day };
  }

  for (let offset = 1; offset <= 7; offset++) {
    const nextDay = (day + offset) % 7;
    const hours = business.hoursByDay[nextDay];
    if (hours) {
      return { isOpen: false, opensAt: formatTime(hours.open), dayOffset: offset, opensDay: nextDay };
    }
  }

  return { isOpen: false };
}
