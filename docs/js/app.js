"use strict";

var lyrics = [{
  title: 'Gentle Reminder',
  copy: "\n    swim before you sink \n    the bottom her deepest blue \n    float don't overthink \n    for all she knows, will weigh you down \n     \n    leave 'em all behind you \n    butterfly in the deep end \n    give in to the moment \n    before it's through \n     \n    rising to the skyline \n    panorama endless \n    gentle understanding \n    of caring less \n     \n    ages we flow through \n    aren't candles to right now \n    so much light we see \n    don't douse me with your salty eyes \n     \n    leaving us behind you \n    butterfly in the deep end \n    you only have a moment \n    and then it's through \n     \n    rising to the skyline \n    panorama endless \n    gentle understanding \n    of caring less \n     \n    parallax \n    always from different places \n    separate ways \n    towards the same thing \n    dirty globe \n    we burned it down together \n    journey on \n    towards the same dream \n     \n    leaving her behind me \n    blow up dolls in the deep end \n    if we had a moment \n    then now it's through \n     \n    rising to the skyline \n    panorama shameless \n    gentle reminder \n    to care much less \n     \n    refracting each other \n    outwardly escaping \n    refracting making colors \n    i just want the same thing \n    "
}, {
  title: 'Soaked In White Noise',
  copy: "\n    everywhere everything on \n    turning me off turning you down \n    dulling over the meaning \n    she must cut through \n \n    we are softly eroding \n    to join the ocean in between \n    angry birds in my pocket \n    soaked in white noise \n \n    she must cut through \n    soaked in white noise \n \n    in my head \n    there's a ringing \n    so long after \n    you were gone \n \n    i think i feel the repetition \n    the tracks we brought this way before \n    all the lovers i remember \n    drift out to sea \n \n    hard to be so unaffected \n    a lonely idol for the dejected \n    apparition of the body \n    light passes through \n \n    we drift out to sea \n    and the light passes through \n \n    she must cut through \n    soaked in white noise \n    drift out to sea \n    light passes through \n \n    in my head \n    there's a ringing \n    so long after \n    you were gone \n \n    if the night \n    is for dreaming \n    the day is \n    far too long \n    "
}, {
  title: 'Go Around Again',
  copy: "\n    never end \n    and don't begin \n    go around \n    again \n \n    deja vu \n    echoes through \n    mirrors of you \n    on me \n \n    is it true \n    that nothings new \n    feeling through \n    a hole \n \n    pedestrian \n    hum & drum \n    i become \n    undone \n \n    lifeless dreams \n    knots of strings \n    why bother \n    at all? \n \n    pretend you know \n    full control \n    explain the soul \n    in rhymes \n \n    all that glow \n    a tiger by the toe \n    skipping down the road \n    and feeling fine \n    it's all under control \n    when i'm waking up slow \n \n    splitting ends \n    where you been? \n    go around \n    again \n \n    deja vu \n    controlling you \n    tell the truth \n    to me \n \n    stars that leave \n    cuts that bleed \n    feelings all \n    the same \n \n    slowly burn \n    longest turn \n    when you cross my \n    mind \n \n    all that glow \n    a tiger by the toe \n    skipping down the road \n    and feeling fine \n    it's all under control \n    if we die real slow \n \n    my perennial \n    blossoms oh \n    i'm mournless for you \n    when i know we'll meet again \n \n    my perennial \n    blossoms know \n    i'm heartless true \n    she said we'll meet again \n    "
}, {
  title: 'Playground Of The Night',
  copy: "\n    i walk the plane beyond \n    any crawl or climb \n    seasons forgotten \n    i drift outside the line \n \n    taught well to bestow \n    a chair of vacancy \n    initials for the carving \n    on tired giving trees \n \n    idle friends of mine \n    waste another song \n    playground of the night \n    deep in these wrongs \n \n    take out \n    the high and low \n    is there a meaning at all? \n    i don't really know \n    i'm just barely breathing \n \n    the order sprawling out \n    idly ashyxiating \n    what are you waiting for? \n    empty so self-fulfilling \n \n    taught well to bestow \n    this chair of vacancy \n    initials for the carving \n    on tired giving trees \n \n    all my pretty monitors \n    coax me to recline \n    i now do all theirs \n    they keep ghosting mine \n \n    without a pendulum \n    is there a motion at all? \n    i don't \n    really know \n    i was just \n    leaving \n    "
}, {
  title: 'Pretenders',
  copy: "\n    everyone knows \n    how to fit in \n    lonely pretenders \n    where do i begin? \n \n    after small talk \n    hold that thought now \n    barely holding on \n    just smile and nod \n \n    a shallow wave of good intentions \n    i guess i don't relate \n    i don't relate \n \n    visons of my open mouth \n    when it sucks the air out \n    an anemic room of dolls \n    eye rolling in their falls \n \n    am i letting on \n    or just inside my head \n    empty pretenders \n    send me golden thread \n \n    let's be honest now \n    please don't make a scene \n    all we want from you \n    are smiles and nods \n \n    a nausea navigating graces \n    i can't take it anymore \n    i can't take it no \n    i can't take it anymore \n \n    everyone \n    knows how to fit in \n    everyone \n    is lonely pretenders \n    everyone \n    knows how to fit in \n    where do i begin? \n \n    visions of my open mouth \n    when it sucks the air out \n    the synchronic climb the walls \n    in a gasping free-for-all \n \n    should have stayed home \n    shouldn't be here \n    this isn't me \n    let me go \n    pretenders \n    leave me alone \n    "
}];
// const randomizeBackgroundImage

var addRandomLyrics = function addRandomLyrics() {
  var el = document.querySelector('.outro > p .copy');
  if (!el) return;
  var titleEl = document.querySelector('.outro > p .title');
  var randomIndex = Math.floor(Math.random() * lyrics.length);
  var _lyrics$randomIndex = lyrics[randomIndex],
    copy = _lyrics$randomIndex.copy,
    title = _lyrics$randomIndex.title;
  el.innerHTML = copy;
  console.log(titleEl);
  if (!titleEl) return;
  titleEl.innerHTML = "".concat(title, " // ");
};
var setCopyrightYear = function setCopyrightYear() {
  var el = document.querySelector('#footer-copyright');
  if (!el) return;
  el.innerHTML = new Date().getFullYear();
};
window.addEventListener('load', function () {
  addRandomLyrics();
  setCopyrightYear();
});