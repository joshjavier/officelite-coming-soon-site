import parseMs from 'parse-ms';

class CountdownTimer extends HTMLElement {
  static observedAttributes = ['date'];

  connectedCallback() {
    /** Set the default role to timer */
    if (!this.hasAttribute('role')) {
      this.setAttribute('role', 'timer');
    }

    this.setTimer();

    /** Markup */
    this.innerHTML = `
      <p class="number">
        <span class="days">${String(this.duration.days).padStart(2, '0')}</span>
        <span>${this.duration.days === 1 ? 'day' : 'days'}</span>
      </p>
      <p class="number">
        <span class="hours">${String(this.duration.hours).padStart(2, '0')}</span>
        <span>${this.duration.hours === 1 ? 'hour' : 'hours'}</span>
      </p>
      <p class="number">
        <span class="minutes">${String(this.duration.minutes).padStart(2, '0')}</span>
        <span>min</span>
      </p>
      <p class="number">
        <span class="seconds">${String(this.duration.seconds).padStart(2, '0')}</span>
        <span>sec</span>
      </p>
    `;

    /** Refs */
    this.elements = {
      days: this.querySelector('.days'),
      hours: this.querySelector('.hours'),
      minutes: this.querySelector('.minutes'),
      seconds: this.querySelector('.seconds'),
    };

    /** Run the timer */
    this.startTimer();
  }

  disconnectedCallback() {
    clearInterval(this.timer);
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (!oldValue) return;

    if (name === 'date' && oldValue !== newValue) {
      this.setTimer();
      this.updateDOM();
      this.startTimer();
    }
  }

  setTimer() {
    /** Set the time limit based on the length or date attributes */
    if (this.getAttribute('date')) {
      const today = new Date();
      const date = new Date(this.getAttribute('date'));
      const offset = today.getTimezoneOffset() * 60;
      this.remaining = ((date - today) / 1000) + offset;
      if (this.remaining < 0) {
        this.remaining = 0;
      }
    } else {
      this.remaining = Number(this.getAttribute('length'));
    }

    /** Parse remaining time into an object */
    this.duration = parseMs(this.remaining * 1000);
  }

  startTimer() {
    if (this.timer) {
      clearInterval(this.timer);
    }

    this.timer = setInterval(() => {
      if (this.remaining <= 0) {
        clearInterval(this.timer);
        return;
      }
      this.tick();
    }, 1000);
  }

  tick() {
    this.remaining -= 1;
    this.duration = parseMs(this.remaining * 1000);
    this.updateDOM();
  }

  updateDOM() {
    Object.keys(this.elements).forEach((key) => {
      // eslint-disable-next-line eqeqeq
      if (this.elements[key].textContent != this.duration[key]) {
        this.elements[key].textContent = String(this.duration[key]).padStart(2, '0');
      }
    });
  }
}

if (!customElements.get('countdown-timer')) {
  customElements.define('countdown-timer', CountdownTimer);
}

export default CountdownTimer;
