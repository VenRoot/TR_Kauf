
class CalculatorMainFuncs {

  constructor() {
    /**
       * Alle Buttons mit events versetzen.
       */

    this.valueInput = document.getElementById('valueInput');
    this.wasClicked = false;
    /**
        * Nimmt alle Elemente die mit button beginnen und setzt events.
        * @see https://stackoverflow.com/questions/8714090/queryselector-wildcard-element-match
        */
    const buttonsFromCalulator = document.querySelectorAll('[id^=button]');

    // jetzt die click events setzen verhindern user veränderungen exploits etc.
    for (let b = 0; b < buttonsFromCalulator.length; b++) {
      // Anhand der übrigbleibenden id können wir entscheiden was passiert.
      let valueToAdd = buttonsFromCalulator[b].getAttribute('id').replace('button-', '');
      let hasDoubleClick = buttonsFromCalulator[b].getAttribute('has-double-click');

      // diese Prüfung passiert nur wenn wir eine Doppelclick problematik haben.
      // Ich parse in Boolean mit ! und parse wieder zurück mit !! damit ich weiß
      // ob das element existiert.
      if (hasDoubleClick != null && !!hasDoubleClick) {
        // () => this.addValue(valueToAdd) wird gemacht damit die Funktion nicht gleich los rennt sondern
        // tatsächlich den Value erst hinzufügt wenn sie soll.
        buttonsFromCalulator[b].addEventListener('click', () => {

          // wegen double click nicht das zu viel passiert.
          if (!this.wasClicked) {
            this.wasClicked = true;
            valueToAdd = buttonsFromCalulator[b].innerHTML;
            this.checkBeforeAddWithDoubleClick(valueToAdd, false);
            // reset double click.
            setTimeout(() => this.wasClicked = false, 1000);
          }

        });

        buttonsFromCalulator[b].addEventListener('dblclick', () => {
          valueToAdd = buttonsFromCalulator[b].innerHTML;
          this.checkBeforeAddWithDoubleClick(valueToAdd, true);
        });

      } else {
        // () => this.addValue(valueToAdd) wird gemacht damit die Funktion nicht gleich los rennt sondern
        // tatsächlich den Value erst hinzufügt wenn sie soll.
        buttonsFromCalulator[b].addEventListener('click', () => this.addValue(valueToAdd));
      }

    }
  }

  /**
   * Fügt Values hinzu man kann hier auch aufpassen dass nicht sowas wie +++++1++1+1++ passiert aber jetzt erstmal egal.
   * @param {String} val Je nachdem was halt übergeben wird.
   * @param {Boolean} shouldReplace überschreiben oder hinzufügen.
   */
  addValue(val, shouldReplace) {
    console.log(val);
    console.log(shouldReplace);
    if (shouldReplace != null && shouldReplace) {
      this.valueInput.value = this.valueInput.value.replace(/.$/, val);
    } else {
      this.valueInput.value += val;
    }
  }

  /**
   * Erst prüfen was wir machen mit dem Doppelclick dann weiter mit add value.
   * @param  {String} v Value
   * @param  {Boolean} replace on double click replace.
   * @return {void}
   */
  checkBeforeAddWithDoubleClick(v, replace) {
    // hier ein Beispiel wie es mit dem String geht statt boolean.
    // HTML attribute immer klein schreiben.
    // short circuit Beispiel entweder ersetzen wir den Anfang oder das Ende.
    replace ? this.addValue(v.replace(/.\|/, ''), replace) : this.addValue(v.replace(/\|./, ''), replace);
  }

}

