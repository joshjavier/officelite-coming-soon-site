/* ----------------------------------------------------------------------------
js entry point
---------------------------------------------------------------------------- */
import animateOnScroll from './_elements/animate-on-scroll.js';
import ScrollSentinel from './_elements/scroll-sentinel.js';
import SmallDetails from './_elements/small-details.js';
import CountdownTimer from './_elements/countdown-timer.js';

//  Dynamically set the date 30 days from today
const date = new Date();
date.setDate(date.getDate() + 30);
const isoDate = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;

// Update DOM elements
const timeEl = document.querySelector('time');
timeEl.dateTime = isoDate;
timeEl.textContent = new Intl.DateTimeFormat('en-GB', { year: 'numeric', month: 'short', day: 'numeric' }).format(date);

const countdownEl = document.querySelector('countdown-timer');
countdownEl.setAttribute('date', isoDate);
