const card = document.querySelector('.card__inner');

const input = document.querySelector('.input');

const footer = document.querySelector('footer a');

const head = document.querySelector('.head');

const strategies = [

"The myth of the great South persists in corners. The City's greystone, which cannot mislead, remains vague, reproving. Thus the untruths we tell ourselves return.",
"We must remember that one of us found short-lived notoriety for determining the cause of an apostrophe erroneously published several hundred years before.",
"One, or perhaps seven, of the researchers claim to have seen the faces of God in the innumerable books catalogued below our streets.",
"Our whitestone facades weep a bitter bronze when exposed to air, to light. On the occasion of sunlight and warmth, a fissure will open on a north-facing wall and a suited figure will step out, look to the left and affect a brisk stride inland. Those of us who follow the figure will return to the City, burnished with sweat and age, or dubious of cardinal directions.",
"Six councillors — or those carrying papers sufficient to identify them as such — no longer believe that the City exists. Their debates meander and ebb, revolving around ephemera and insubstantialities. We vote for these six each season, of course.",
"Our Mayor delights in opening buildings, provided that the correct forms are followed. One of us is sealed behind a capstone. His voice is faint, now, and he speaks only of mortar and lime. We dare not question procedure.",
"There are those among us who are tied to the City. There are those whose mothers and fathers left us, or lured us, here. There are those among us with no precursors, whose beginnings were theoretical and obtuse. And there are those of whom we must not think.",
"Unlike the Other City, our weeks have seven days. We count steps on the first day, insult friends on the second, strike hard surfaces on the third, forbid work on the fourth, speak freely on the fifth, and allow any repetition on the sixth. The seventh day has no name but is the day of days.",
"We are congenital builders; insistent, compulsive. Where we rebuild, we have found uncertain traces of ourselves. A brackish path half a span wide, laid with timbers; coins of no known value; any number of pipestems.",
"The Old City gave us its name. There was power in names, then. In the giving, the Old City lost both claim and title. In the keeping, we have found that repetition impoverishes meaning.",
"The Council, who sit in unsilent judgement, have long determined our worth. We find no solace in conversation, as each engenders a rival Council. Bound together by tradition and circumstance, we are unable to satisfactorily distinguish Council matters from our own.",
"We meet at Tidemarket to determine the cost of a sand grain, the smell of brine, and the correct arrangement of the whispering grasses.",
"In the City there is another City. It is both compact and diffuse, a hive of stone, paper, and clay. We have looked for it, and found it, and hidden it once more. The others must look for it once again.",
"Some do not believe it, but we encounter four distinct seasons here in the City. In the first, we smile at strangers; in the second we awaken sour for no reason; in the third we profit. The fourth season comes each evening, as we try to sleep.",
"When the albatross begin to circle and the City's bells ring, we soon learn to seek the nearest greystone building. As the winds rise each year, the birds will take one of us. We have all had someone taken — a confidant, a parent, a neighbour. The following year we may hear a hesitant knock, but find only footprints and perhaps a single feather.",
"Any number of families in the City gossip, shouting across crowded rooms. Some families will complain and some learn to smile without agreeing. Only one family in the City hides their paper when the Charmers come.",
"Ours is neither the sacred nor the profane, but the finite and the mundane. Ours is the consciousness and the clay.",
"As for our future, it must be held in the greystones. When we were young, in a group armed with bluster and aspiration, we scratched names, dates, events in a stone and watched with blank eyes as the City writhed and conformed. Such tools are forbidden to us now.",
"As children, we play who-am-I, where-am-I, and what-has-become-of-I. Those of us able to remember our place in the games — in the mutable city — must necessarily be the victors. As to those others, we dare not guess.",
"The Other City once tried to take ours — by force, by guile, by blunt politics. Slowed only by a measure of disinterest, the City shrugged its borders and encompassed the Other, caught it in a ripple of farmland, gorse, and a single whiplashed highway. We are taught this at the earliest opportunity.",
"Our history is walled up and left to cure before it can be rediscovered. In the forgetting, we have hoarded far more than we will know. We take some pride in this, nonetheless. It cannot be said that we have never planned ahead.",
"Travellers from the Other City feign surprise at the squalls of Gullmarket, the arduous streets, our reticence to address specifics. What they do not tell us, of course, is that our City is, to them, the Other.",
"The topography of the Other City seems to us inverted, dreamlike. In the clouded last light, we tell ourselves that ours is the true City. We do not lie — not exactly — though we know that truth is no hard currency.",
"We have reclaimed whole districts from the dark harbour, from the sands of the salt marsh. Underneath this new land, the sediment lies dreaming.",
"We are told that some elements of the City were planned, while others grew unchecked. These are pruned back year after year, cul-de-sacs trimmed and saws addressed to avenues for the health of the greater suburb. If a branching lane is cut in the correct season, two more will replace it the next.",
"Our Mayor awakens fresh each afternoon and talks for several polite minutes with any one of us in proximity. Until the sunlight weakens the next day, our Mayor will rise only to place capstones, bemoan the depredations of the Other City, and practice hissing in a tin mirror.",
"A number of greystones were carved by the Charmers into the shape of household furniture. A single chair has since been adopted by the City as a symbol of our ordinary and indecorous past.",
"The Charmers were transplanted with the greystones from the Old City, this much is certain. To speak of the Charmers is to call them; we must speak of anything else.",
"We have found how to predict the yield from our family plots by watching clouds, sharpening tally-sticks, pretending to scratch that dappled part of our body that does not itch.",
"The City, which is the world, has no outskirts. But beyond the idling engines of art and the passive streets, past walls of cardboard and silvered timber, nests of brutal gulls and the soft clay from which no vessel can be made, there is a single edge between this world and the Other.",
"If we were to complain about the disordered shelves, the Librarians would be quick to point out that any order is arbitrary, that all numbers are some factor of complex or imaginary. Next week we will find the book we needed this morning, alongside a pile of tallysticks that have been sharpened and blunted and sharpened again.",
"When the wind blows from the south, as it is blowing now and will again tomorrow, we dream that we look through the gap-toothed grimace of our dark harbour's mouth and raise our hands to shield against the light we see there. Upon waking, we will smile uneasily and pull our collars more tightly around our necks.",
"Shuffled together or cut, the seven of spears pairs well with the noun of thorns. In most of our games this combination will beat even the charmed three. Pairing is difficult work when the City watches, however, and we cannot account for taste — our Mayor, whose palate is said to be impeccable, wins each game with only the six of trees.",
"Some three quarters of us believe that the City is widening. When we count the circling lines on our streets, we reason, we should be able to track its growth. Others argue that these rings are a single spiral; that the City's centre turns and compresses inwards. When questioned about this, our Mayor's face tightens as though a crank has been turned, and we change the subject to strategies, visions, or mirrors.",
"There is only one reliable way for us to hide from the City and from its unsilent Council. We write five words on old paper, fold the paper twice and rip it once. One half is to be held in the mouth, the other cast in the wind or burned. If the wind agrees, we will be forgotten until the paper or ash first comes to land.",
"Names have never been important to us. We misremember numbers, genders, proximities to the dark harbour. It will suffice to say 'the one of us who cannot whistle,' 'those whose houses mark the high tide,' or 'those with scars in the shape of beaks.'",
"It is near Lakemarket that we take part in the game whose rules shift in the playing, and whose twin objects are knowledge and the permission to use it.",
"Periodically, the drains of the City flow richly with its discarded ideas, unwanted remembrances and speculations. Those tasked with the upkeep of these rushing veins must take care not to inhale too deeply, lest they become indolent and drunk on the thoughts of others.",
"A familiar neighbour sends messages through a carefully coded system of garden maintenance and light shining through orthogonal windows. We, who have not yet decoded these transmissions, will wait, and keep careful records.",
"We dream, some days, of the time before the City, of the place where the red earth abounds. How we would have loved to have lived free of Charmers, of Mayor and council, of the insolent strictures that bind us to the City itself.",
"As for those born under the sign of the Settler, they must either make or make do.",
"We have worn down the steps of our forefathers now, those whose paths were planned before the City was raised. Those who step on new ground find both hardship and joy in equal measure.",
"Stability is a virtue, here. We earn only tokens, favours, vague sentiments. Next time — next time — we will succeed.",
"In darkness, the City mirrors the terrible geography of the moon. All structures are in that long moment effaced, all bitter lakes drained and burned once more.",
"Our speculative devotion is as follows: eight sides has the centre, and eight are the paths we follow.",
"The City imports residents, all of a kind. As we become sleek with fat and begin our own spirals, we alter terms and advocate for increasingly mordant strictures.",
"When we are young, the City seems to us spiteful, wondrous, a site of possibility and defeat. We now recognise that the City is at equal turns implacable and prescient.",
"The Old City rose in the empty space between the Keening. For these two, who did not survive the passage, we are oddly wistful. What might have been? Like the Old City, would ours have been grudgingly entrusted to another, and seized once more?",
"When called upon, we answer as a bloom of clay dissolved in ink, as fresh water in brine.",
"The first to arrive in what would become the City found only three words. Their meaning is as inscrutable as our parentage; either might surround us, as a wall of brittle faces.",
"One of two citizens, well versed in the Arts, will dispense the dark liquor. Who among us could endure the City without a quickened sense of its undefined order?",
"A bowl of rounded stars, the enamelled vegetation, our own complex arrangement of time: these are the last remaining barriers to our secession.",
]

//test font size

// const strategies = ["Short circuit (example; a man eating peas with the idea that they will improve his virility shovels them straight into his lap)"]

const randomStrat = () => {
  const strat = strategies[Math.floor(Math.random() * strategies.length)];
  input.innerText = strat;
}

card.addEventListener("click", (e) => {
  card.classList.toggle('is-flipped');
  input.classList.toggle('hide');
  randomStrat();
});

setTimeout(function(){
    footer.style.color = "#FDFBF3";
}, 3000)

footer.addEventListener('mouseover', () => {
    footer.style.color = 'black';
})

footer.addEventListener('mouseout', () => {
    footer.style.color = '#FDFBF3';
})


setInterval(function(){
    head.style.opacity -= 0.1;
}, 3000);

