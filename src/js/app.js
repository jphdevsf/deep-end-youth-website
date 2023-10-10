const lyrics = [
  {
    title: 'Gentle Reminder',
    copy: `
    swim before you sink 
    the bottom her deepest blue 
    float don't overthink 
    for all she knows, will weigh you down 
     
    leave 'em all behind you 
    butterfly in the deep end 
    give in to the moment 
    before it's through 
     
    rising to the skyline 
    panorama endless 
    gentle understanding 
    of caring less 
     
    ages we flow through 
    aren't candles to right now 
    so much light we see 
    don't douse me with your salty eyes 
     
    leaving us behind you 
    butterfly in the deep end 
    you only have a moment 
    and then it's through 
     
    rising to the skyline 
    panorama endless 
    gentle understanding 
    of caring less 
     
    parallax 
    always from different places 
    separate ways 
    towards the same thing 
    dirty globe 
    we burned it down together 
    journey on 
    towards the same dream 
     
    leaving her behind me 
    blow up dolls in the deep end 
    if we had a moment 
    then now it's through 
     
    rising to the skyline 
    panorama shameless 
    gentle reminder 
    to care much less 
     
    refracting each other 
    outwardly escaping 
    refracting making colors 
    i just want the same thing 
    `
  },
  {
    title: 'Soaked In White Noise',
    copy: `
    everywhere everything on 
    turning me off turning you down 
    dulling over the meaning 
    she must cut through 
 
    we are softly eroding 
    to join the ocean in between 
    angry birds in my pocket 
    soaked in white noise 
 
    she must cut through 
    soaked in white noise 
 
    in my head 
    there's a ringing 
    so long after 
    you were gone 
 
    i think i feel the repetition 
    the tracks we brought this way before 
    all the lovers i remember 
    drift out to sea 
 
    hard to be so unaffected 
    a lonely idol for the dejected 
    apparition of the body 
    light passes through 
 
    we drift out to sea 
    and the light passes through 
 
    she must cut through 
    soaked in white noise 
    drift out to sea 
    light passes through 
 
    in my head 
    there's a ringing 
    so long after 
    you were gone 
 
    if the night 
    is for dreaming 
    the day is 
    far too long 
    `
  },
  {
    title: 'Go Around Again',
    copy: `
    never end 
    and don't begin 
    go around 
    again 
 
    deja vu 
    echoes through 
    mirrors of you 
    on me 
 
    is it true 
    that nothings new 
    feeling through 
    a hole 
 
    pedestrian 
    hum & drum 
    i become 
    undone 
 
    lifeless dreams 
    knots of strings 
    why bother 
    at all? 
 
    pretend you know 
    full control 
    explain the soul 
    in rhymes 
 
    all that glow 
    a tiger by the toe 
    skipping down the road 
    and feeling fine 
    it's all under control 
    when i'm waking up slow 
 
    splitting ends 
    where you been? 
    go around 
    again 
 
    deja vu 
    controlling you 
    tell the truth 
    to me 
 
    stars that leave 
    cuts that bleed 
    feelings all 
    the same 
 
    slowly burn 
    longest turn 
    when you cross my 
    mind 
 
    all that glow 
    a tiger by the toe 
    skipping down the road 
    and feeling fine 
    it's all under control 
    if we die real slow 
 
    my perennial 
    blossoms oh 
    i'm mournless for you 
    when i know we'll meet again 
 
    my perennial 
    blossoms know 
    i'm heartless true 
    she said we'll meet again 
    `
  },
  {
    title: 'Playground Of The Night',
    copy: `
    i walk the plane beyond 
    any crawl or climb 
    seasons forgotten 
    i drift outside the line 
 
    taught well to bestow 
    a chair of vacancy 
    initials for the carving 
    on tired giving trees 
 
    idle friends of mine 
    waste another song 
    playground of the night 
    deep in these wrongs 
 
    take out 
    the high and low 
    is there a meaning at all? 
    i don't really know 
    i'm just barely breathing 
 
    the order sprawling out 
    idly ashyxiating 
    what are you waiting for? 
    empty so self-fulfilling 
 
    taught well to bestow 
    this chair of vacancy 
    initials for the carving 
    on tired giving trees 
 
    all my pretty monitors 
    coax me to recline 
    i now do all theirs 
    they keep ghosting mine 
 
    without a pendulum 
    is there a motion at all? 
    i don't 
    really know 
    i was just 
    leaving 
    `
  },
  {
    title: 'Pretenders',
    copy: `
    everyone knows 
    how to fit in 
    lonely pretenders 
    where do i begin? 
 
    after small talk 
    hold that thought now 
    barely holding on 
    just smile and nod 
 
    a shallow wave of good intentions 
    i guess i don't relate 
    i don't relate 
 
    visons of my open mouth 
    when it sucks the air out 
    an anemic room of dolls 
    eye rolling in their falls 
 
    am i letting on 
    or just inside my head 
    empty pretenders 
    send me golden thread 
 
    let's be honest now 
    please don't make a scene 
    all we want from you 
    are smiles and nods 
 
    a nausea navigating graces 
    i can't take it anymore 
    i can't take it no 
    i can't take it anymore 
 
    everyone 
    knows how to fit in 
    everyone 
    is lonely pretenders 
    everyone 
    knows how to fit in 
    where do i begin? 
 
    visions of my open mouth 
    when it sucks the air out 
    the synchronic climb the walls 
    in a gasping free-for-all 
 
    should have stayed home 
    shouldn't be here 
    this isn't me 
    let me go 
    pretenders 
    leave me alone 
    `
  }
]
// const randomizeBackgroundImage

const addRandomLyrics = () => {
  const el = document.querySelector('.outro > p .copy')
  if (!el) return
  const titleEl = document.querySelector('.outro > p .title')
  const randomIndex = Math.floor(Math.random() * lyrics.length)
  const { copy, title } = lyrics[randomIndex]
  el.innerHTML = copy
  console.log(titleEl)
  if (!titleEl) return
  titleEl.innerHTML = `${title} // `
}

const setCopyrightYear = () => {
  const el = document.querySelector('#footer-copyright')
  if (!el) return
  el.innerHTML = new Date().getFullYear()
}

window.addEventListener('load', () => {
  addRandomLyrics()
  setCopyrightYear()
})
