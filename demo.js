// Sample data used when no API_URL is set (or when the URL has #demo).
window.makeDemoData = function () {
  const C = { family: '#f5b54a', dad: '#5b9cf5', mom: '#e8789f', kids: '#5cc98a', school: '#a38cf0' };
  const t0 = new Date(); t0.setHours(0, 0, 0, 0);
  const at = (day, h, m) => { const d = new Date(t0); d.setDate(d.getDate() + day); d.setHours(h, m || 0, 0, 0); return d.getTime(); };
  const ymd = day => { const d = new Date(t0); d.setDate(d.getDate() + day); return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0'); };
  const ev = (title, cal, day, h, m, mins, location) => ({ title, colors: [C[cal]], cals: [cal], allDay: false, start: at(day, h, m), end: at(day, h, m) + mins * 60000, location: location || '' });
  const allDay = (title, cal, day, days) => ({ title, colors: [C[cal]], cals: [cal], allDay: true, startDate: ymd(day), endDate: ymd(day + (days || 1)) });

  const both = ev('Parent-teacher conference', 'mom', 1, 16, 30, 30, 'Lincoln Elementary');
  both.colors.push(C.dad); both.cals.push('dad');

  let id = 1; const items = arr => arr.map(([text, done]) => ({ id: 'demo' + (id++), text, done: !!done }));
  const xmas = new Date(t0.getFullYear(), 11, 25); if (xmas < t0) xmas.setFullYear(xmas.getFullYear() + 1);
  const xmasYmd = xmas.getFullYear() + '-12-25';

  return {
    ok: true, demo: true,
    settings: { name: 'Home', units: 'F', days: 7, nightStart: 22, nightEnd: 6, clock24: false },
    calendars: [
      { label: 'Family', color: C.family }, { label: 'Dad', color: C.dad }, { label: 'Mom', color: C.mom },
      { label: 'Kids', color: C.kids }, { label: 'School', color: C.school },
    ],
    events: [
      allDay('Trash & recycling pickup', 'family', 0),
      ev('School drop-off', 'kids', 0, 7, 40, 20),
      ev('Team standup', 'dad', 0, 9, 0, 30),
      ev('Lunch with Sarah', 'mom', 0, 12, 0, 60, 'Zingerman’s'),
      ev('Soccer practice', 'kids', 0, 16, 0, 90, 'Riverside Park'),
      ev('Piano lesson', 'kids', 0, 18, 30, 45),
      ev('Dentist — Emma', 'kids', 1, 9, 0, 60, 'Bright Smiles Dental'),
      both,
      ev('Book club', 'mom', 1, 19, 0, 120),
      allDay('No school — Thanksgiving break', 'school', 2, 3),
      ev('Car in for service', 'dad', 2, 8, 0, 120, 'Main St Auto'),
      ev('Pick up Grandma at airport', 'family', 2, 16, 15, 60, 'DTW Terminal A'),
      ev('Thanksgiving dinner', 'family', 3, 15, 0, 240, 'Our house'),
      ev('Turkey trot 5K', 'family', 3, 8, 0, 90),
      ev('Movie night 🍿', 'family', 4, 19, 30, 150),
      ev('Swim lessons', 'kids', 5, 9, 0, 45),
      ev('Liam’s birthday party', 'kids', 5, 13, 0, 120, 'Bounce World'),
      ev('Date night', 'family', 5, 19, 0, 180),
      ev('Farmers market', 'family', 6, 9, 0, 90),
      ev('Grandma flies home', 'family', 6, 14, 0, 60),
    ],
    weather: {
      place: 'Demo City', units: 'F',
      current: { temp: 44, feels: 39, code: 2, isDay: 1, wind: 8 },
      daily: [[2, 48, 33, 10], [61, 46, 37, 70], [3, 41, 30, 20], [71, 36, 27, 60], [1, 39, 25, 0], [0, 45, 29, 0], [2, 50, 36, 10], [3, 47, 35, 20], [63, 44, 34, 80]]
        .map((d, i) => ({ date: ymd(i), code: d[0], hi: d[1], lo: d[2], pop: d[3] })),
    },
    lists: [
      { name: 'Groceries', emoji: '🛒', items: items([['Milk'], ['Eggs'], ['Bananas'], ['Sourdough bread'], ['Cranberry sauce'], ['Heavy cream'], ['Coffee beans'], ['Paper towels', true], ['Butter']]) },
      { name: 'To-Do', emoji: '✅', items: items([['Call the plumber about the sink'], ['Return library books'], ['Schedule flu shots'], ['RSVP to Liam’s party', true]]) },
      { name: 'Chores', emoji: '🧹', items: items([['Empty dishwasher — Emma'], ['Walk Biscuit — Jack'], ['Fold laundry']]) },
    ],
    meals: { [ymd(0)]: 'Tacos 🌮', [ymd(1)]: 'Chicken stir-fry', [ymd(2)]: 'Spaghetti & meatballs', [ymd(3)]: 'Thanksgiving 🦃', [ymd(4)]: 'Leftovers', [ymd(5)]: 'Homemade pizza' },
    countdowns: [
      { id: 'c1', name: 'Emma’s birthday', date: ymd(12), emoji: '🎂' },
      { id: 'c2', name: 'Christmas', date: xmasYmd, emoji: '🎄' },
      { id: 'c3', name: 'Ski trip', date: ymd(45), emoji: '⛷️' },
    ].sort((a, b) => a.date < b.date ? -1 : 1),
    notes: [{ id: 'n1', text: 'Grandma lands Wednesday at 4:15 — who’s picking her up? ✈️', added: Date.now() }],
    calendarList: [
      { id: 'cal1', name: 'Family', label: 'Family', show: true, color: C.family, kind: 'google' },
      { id: 'cal2', name: 'dad@example.com', label: 'Dad', show: true, color: C.dad, kind: 'google' },
      { id: 'cal3', name: 'Home', label: 'Mom', show: true, color: C.mom, kind: 'link' },
      { id: 'cal4', name: 'Kids', label: 'Kids', show: true, color: C.kids, kind: 'google' },
      { id: 'cal5', name: 'School', label: 'School', show: true, color: C.school, kind: 'google' },
      { id: 'cal6', name: 'Holidays in United States', label: 'Holidays in United States', show: false, color: '#4fc3c7', kind: 'google' },
    ],
    sheetUrl: '#',
    generated: Date.now(),
  };
};
