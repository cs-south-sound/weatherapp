/*phpjs - https://github.com/kvz/phpjs

   Apparently some of us can't remember if we are programming
   in Javascript or PHP:)  This file will allow us to have some of
   the php functions available when needed.  To reduce bloat,
   each phpjs function must be manually added to this file as
   deemed necessary.

*/



function isset() {
  //https://github.com/kvz/phpjs/blob/master/functions/var/isset.js
  //  discuss at: http://phpjs.org/functions/isset/
  // original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
  // improved by: FremyCompany
  // improved by: Onno Marsman
  // improved by: Rafal Kukawski
  //   example 1: isset( undefined, true);
  //   returns 1: false
  //   example 2: isset( 'Kevin van Zonneveld' );
  //   returns 2: true

  var a = arguments,
    l = a.length,
    i = 0,
    undef;

  if (l === 0) {
    throw new Error('Empty isset');
  }

  while (i !== l) {
    if (a[i] === undef || a[i] === null) {
      return false;
    }
    i++;
  }
  return true;
}//end isset
