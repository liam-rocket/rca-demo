(() => {
  'use strict';
  var e,
    o = {
      434: (e, o, a) => {
        const r = a(311),
          i = a(788);
        (o.all = i), (o.random = r(i));
      },
      311: (e, o, a) => {
        const r = a(167);
        e.exports = (e) => {
          const o = r(0, e.length - 1);
          return () => e[o()];
        };
      },
      167: (e) => {
        e.exports = (e, o) => {
          let a;
          return function r() {
            const i = Math.floor(Math.random() * (o - e + 1) + e);
            return (a = i === a && e !== o ? r() : i), a;
          };
        };
      },
      788: (e) => {
        e.exports = JSON.parse(
          '["Abby","Angel","Annie","Baby","Bailey","Bandit","Bear","Bella","Bob","Boo","Boots","Bubba","Buddy","Buster","Cali","Callie","Casper","Charlie","Chester","Chloe","Cleo","Coco","Cookie","Cuddles","Daisy","Dusty","Felix","Fluffy","Garfield","George","Ginger","Gizmo","Gracie","Harley","Jack","Jasmine","Jasper","Kiki","Kitty","Leo","Lilly","Lily","Loki","Lola","Lucky","Lucy","Luna","Maggie","Max","Mia","Midnight","Milo","Mimi","Miss kitty","Missy","Misty","Mittens","Molly","Muffin","Nala","Oliver","Oreo","Oscar","Patches","Peanut","Pepper","Precious","Princess","Pumpkin","Rascal","Rocky","Sadie","Salem","Sam","Samantha","Sammy","Sasha","Sassy","Scooter","Shadow","Sheba","Simba","Simon","Smokey","Snickers","Snowball","Snuggles","Socks","Sophie","Spooky","Sugar","Tiger","Tigger","Tinkerbell","Toby","Trouble","Whiskers","Willow","Zoe","Zoey"]'
        );
      },
    },
    a = {};
  (e = (function e(r) {
    var i = a[r];
    if (void 0 !== i) return i.exports;
    var s = (a[r] = { exports: {} });
    return o[r](s, s.exports, e), s.exports;
  })(434)),
    console.log(e.random()),
    console.log('cat', 'Tom'),
    console.log('mouse', 'Jerry');
})();
