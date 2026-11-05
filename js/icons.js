/* =====================================================================
   Icon set (24×24, 1.8px strokes, round ends). Use ic("name") to get an
   <svg> string. Subjects in registry.js pick one by name, e.g. icon:"graph".
   Unknown names fall back to plain text (so an emoji still works).
   ===================================================================== */
const ICONS = {
  // subjects
  book:     '<path d="M3 5.5c2.6-1.3 5.6-1.3 9 .6 3.4-1.9 6.4-1.9 9-.6V19c-2.6-1.2-5.6-1.2-9 .6-3.4-1.8-6.4-1.8-9-.6z"/><path d="M12 6.1v13.5"/>',
  graph:    '<path d="M4 3.5V20h16.5"/><path d="M6.5 16.5c2.2-7 4.8-10.5 7.5-10.5 2.2 0 3.6 2.3 4.5 5"/><path d="M9 20v-2M14 20v-2M19 20v-2" opacity=".5"/>',
  globe:    '<circle cx="12" cy="12" r="8.5"/><path d="M3.5 12h17M12 3.5c2.5 2.4 3.6 5.2 3.6 8.5s-1.1 6.1-3.6 8.5c-2.5-2.4-3.6-5.2-3.6-8.5s1.1-6.1 3.6-8.5z"/>',
  flask:    '<path d="M9.5 3.5h5M10.5 3.5V9L5.2 18.2A1.9 1.9 0 0 0 6.8 21h10.4a1.9 1.9 0 0 0 1.6-2.8L13.5 9V3.5"/><path d="M7.6 14.5h8.8"/>',
  atom:     '<circle cx="12" cy="12" r="1.6"/><ellipse cx="12" cy="12" rx="9" ry="3.6"/><ellipse cx="12" cy="12" rx="9" ry="3.6" transform="rotate(60 12 12)"/><ellipse cx="12" cy="12" rx="9" ry="3.6" transform="rotate(120 12 12)"/>',
  quill:    '<path d="M20 3.5c-7 .8-12.2 5.6-14 13.3L5 20.5l3.6-1.2C16 17.4 19.6 11 20 3.5z"/><path d="M6.8 17.2 13 11"/>',
  // terms modes
  card:     '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 9h18" stroke="var(--rule)"/><path d="M7 13h10M7 16h6"/>',
  pencil:   '<path d="M4 20l1-4.2L16.3 4.5a2.1 2.1 0 0 1 3 3L8 18.8z"/><path d="M14.5 6.3l3.2 3.2"/>',
  speaker:  '<path d="M4 9.5v5h3.2L12 18.5v-13L7.2 9.5z"/><path d="M15.5 9.2a4 4 0 0 1 0 5.6M18 6.7a7.5 7.5 0 0 1 0 10.6"/>',
  shuffle:  '<path d="M3 7h2.8c4.4 0 6 10 10.4 10H21M3 17h2.8c1.6 0 2.8-1.3 3.9-3M14.3 10c1.1-1.7 2.3-3 3.9-3H21"/><path d="M18.5 4.5 21 7l-2.5 2.5M18.5 14.5 21 17l-2.5 2.5"/>',
  loop:     '<path d="M4.5 11.5a7.5 7.5 0 0 1 13-4.6L19.5 9"/><path d="M19.5 4v5h-5"/><path d="M19.5 12.5a7.5 7.5 0 0 1-13 4.6L4.5 15"/><path d="M4.5 20v-5h5"/>',
  target:   '<circle cx="12" cy="12" r="8.5"/><circle cx="12" cy="12" r="4.8"/><circle cx="12" cy="12" r="1.2" fill="currentColor"/>',
  bolt:     '<path d="M13.2 2.8 4.8 13.6h6.4l-.8 7.6 8.8-11h-6.6z"/>',
  // problems modes
  sheet:    '<rect x="5" y="3.5" width="14" height="17" rx="2"/><path d="M8.5 8.5h7M8.5 12h7M8.5 15.5h4"/>',
  infinity: '<path d="M7.2 8.5C5 8.5 3.5 10 3.5 12s1.5 3.5 3.7 3.5c3.8 0 5.8-7 9.6-7 2.2 0 3.7 1.5 3.7 3.5s-1.5 3.5-3.7 3.5c-3.8 0-5.8-7-9.6-7z"/>',
  // ui
  notes:    '<path d="M6 3.5h9l4 4v13H6z"/><path d="M15 3.5v4h4M9 12h7M9 15.5h7"/>',
  chart:    '<path d="M4 20h16.5"/><path d="M7 16.5v-5M12 16.5V7M17 16.5v-8"/>',
  gear:     '<circle cx="12" cy="12" r="3"/><path d="M19.2 13.4a7.4 7.4 0 0 0 0-2.8l2-1.5-2-3.4-2.3.9a7.4 7.4 0 0 0-2.4-1.4L14 2.8h-4l-.5 2.4a7.4 7.4 0 0 0-2.4 1.4l-2.3-.9-2 3.4 2 1.5a7.4 7.4 0 0 0 0 2.8l-2 1.5 2 3.4 2.3-.9a7.4 7.4 0 0 0 2.4 1.4l.5 2.4h4l.5-2.4a7.4 7.4 0 0 0 2.4-1.4l2.3.9 2-3.4z"/>',
  flame:    '<path d="M12 3c.9 3.4 5 5.3 5 10.2A5 5 0 0 1 7 13.2c0-2 .9-3.4 2-4.5.1 1.9 1 3 2.1 3.1C11 9 10.2 6.3 12 3z"/>',
  copy:     '<rect x="8.5" y="8.5" width="11.5" height="11.5" rx="2"/><path d="M15.5 8.5V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v7.5a2 2 0 0 0 2 2h2.5"/>',
  user:     '<circle cx="12" cy="8.2" r="3.7"/><path d="M4.5 20.5c.9-3.9 3.9-6.2 7.5-6.2s6.6 2.3 7.5 6.2"/>',
  join:     '<circle cx="10" cy="8.2" r="3.7"/><path d="M3 20.5c.9-3.9 3.6-6.2 7-6.2 1.6 0 3 .5 4.2 1.3"/><path d="M18.5 14.5v6M15.5 17.5h6"/>',
  trophy:   '<path d="M8 4h8v5.2a4 4 0 0 1-8 0z"/><path d="M8 6H5.2A3.2 3.2 0 0 0 8.4 10M16 6h2.8a3.2 3.2 0 0 1-3.2 4M12 13.2V17M8.5 20.5h7M9.8 17h4.4"/>',
  upload:   '<path d="M12 15V4.5M7.5 9 12 4.5 16.5 9M5 15v3a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-3"/>',
  download: '<path d="M12 4.5V15M7.5 10.5 12 15l4.5-4.5M5 15v3a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-3"/>',
  close:    '<path d="M6.5 6.5l11 11M17.5 6.5l-11 11"/>',
  back:     '<path d="M14.5 6 8.5 12l6 6"/>',
  check:    '<path d="M5 12.5 9.5 17 19 7.5"/>',
  bulb:     '<path d="M9.5 18h5M10.5 21h3"/><path d="M12 3a6 6 0 0 0-3.6 10.8c.7.5 1.1 1.3 1.1 2.1v.1h5v-.1c0-.8.4-1.6 1.1-2.1A6 6 0 0 0 12 3z"/>',
  skip:     '<path d="M5.5 5.5 14 12l-8.5 6.5zM18 5.5v13"/>',
  refresh:  '<path d="M19.5 12a7.5 7.5 0 1 1-2.2-5.3L19.5 9"/><path d="M19.5 4v5h-5"/>',
  logout:   '<path d="M14 4h4a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-4M10 16l-4-4 4-4M6 12h10"/>',
  clock:    '<circle cx="12" cy="12" r="8.5"/><path d="M12 7.5V12l3 2"/>',
  home:     '<path d="M4 11 12 4l8 7"/><path d="M6.2 9.4V20h11.6V9.4"/>',
  arrow:    '<path d="M5 12h14M13 6l6 6-6 6"/>',
  alert:    '<path d="M12 4 2.8 19.5h18.4z"/><path d="M12 10v4.2M12 17.2v.1"/>'
};
function ic(name, cls = ""){
  if (!ICONS[name]) return escHTML(name || "");
  return `<svg class="ic ${cls}" viewBox="0 0 24 24" aria-hidden="true">${ICONS[name]}</svg>`;
}
// put an icon + text into a button/element
function setLabel(elm, icon, text){ elm.innerHTML = ic(icon) + `<span>${escHTML(text)}</span>`; }
// static buttons in index.html: <button data-ic="close">Quit</button>
document.querySelectorAll("[data-ic]").forEach(e => setLabel(e, e.dataset.ic, e.textContent.trim()));
