/* ============================================================
   BILT MOROCCO — EDIT YOUR PAGE HERE
   ------------------------------------------------------------
   This is the ONLY file you need for text, prices, colours,
   logos, and contacts. Change the words between the "quotes".
   Keep the quotes and the commas. Then save/commit.

   To change a PHOTO: put a new image in /images with the SAME
   filename (list at the bottom). Don't edit this file for photos.
   ============================================================ */

window.CONTENT = {

  /* ---- PRICES (update everywhere automatically) ---- */
  currency:              "MAD",
  priceFrom:             "6,500",   // base board price
  colourTintCharge:      500,       // added if the board is coloured (any non-white)
  glassingStandardCharge:0,
  glassingStrongCharge:  500,
  glassingHeavyCharge:   1000,
  buildTime:             "2–3 months",
  depositPct:            "50%",     // deposit share of the total

  /* ---- CONTACT ---- */
  whatsapp:   "https://wa.me/2126XXXXXXXX",   // <-- your WhatsApp link
  orderEmail: "you@email.com",                // where you want order alerts (also set in Netlify)

  /* ---- COLOUR PALETTE (add/remove/change freely: "Name","#hex") ----
     The customer also gets a full colour picker for any colour. */
  colours: [
    ["Red","#e23b3b"],["Orange","#f08a24"],["Yellow","#f5c518"],
    ["Green","#3dae5a"],["Blue","#2e6be6"],["Indigo","#4b3b9c"],
    ["Violet","#8e44ad"],["Black","#111111"],["White","#ffffff"]
  ],

  /* ---- TOP BAR + HERO ---- */
  brandTagline: "MOROCCO",
  heroEyebrow:  "Custom surfboards · shaped in South Africa",
  heroHeadline: "Order the best board you'll ever ride.",
  heroSub:      "Built for your level and the waves you surf. Three shapes, shaped by hand, delivered to Morocco.",
  heroCta1:     "Find my board",
  heroCta2:     "See the 3 shapes",
  heroTag:      "DOUBLE DOUBLE · mid-length",
  trustA:       "<b>1</b> board, built for you",
  trustB:       "<b>{buildTime}</b> to your door",
  trustC:       "From <b>{priceFrom}</b> {currency}",

  /* ---- WHY A CUSTOM BOARD ---- */
  whyEyebrow: "Why custom",
  whyHeading: "The right board changes everything.",
  whySub:     "Most surfers ride the wrong board — too small, too advanced, pulled off a rack that was shaped for someone else. A board built around you is the difference between surfing and struggling.",
  why1h: "More waves",
  why1p: "The right volume under your chest means you paddle into more, sooner. More waves is more surfing.",
  why2h: "Faster progress",
  why2p: "A board matched to your level lets you skip the fight and work on your surfing instead of your equipment.",
  why3h: "Built to last",
  why3p: "Hand-shaped from premium foam and glass — a board made to hold up to real surf, not a rack pop-out.",

  /* ---- FULL-WIDTH PHOTO (swap images/wave.jpg to change it) ---- */
  wideImageAlt: "Surfer on a wave",

  /* ---- THE ONLY 3 ---- */
  threeEyebrow: "The only 3",
  threeHeading: "Why only three boards?",
  threeSub:     "The idea was born on a flat-spell trip to Mexico: when the swell finally came it was 1–2 foot all week, and the quiver bag was full of boards nobody could use. The lesson stuck — three right shapes handle everything from knee-high mush to overhead reef.",

  bigmacKick:  "The daily driver",
  bigmacName:  "Big Mac",
  bigmacBlurb: "One board, any trip, any wave. Paddles long, turns sharp. If you own one board, it's this one.",
  bigmacSpec:  "SHORTBOARD · THRUSTER",
  bigmacWhy:   "You surf with intent and want a board that responds. The Big Mac paddles better than a shortboard its size and turns sharp when the wave lets you.",

  whopperKick:  "The small-wave magic",
  whopperName:  "Whopper Extra Cheese",
  whopperBlurb: "When the waves go soft, this one still flies. A flat fish built for easy paddling in weak, gutless surf.",
  whopperSpec:  "FISH · TWIN / QUAD",
  whopperWhy:   "You'll get the most fun from paddle power and glide. The Whopper flies in soft, weak surf and turns average days into good ones.",

  doubleKick:  "The glider",
  doubleName:  "Double Double",
  doubleBlurb: "Paddles like a longboard, turns like a shortboard. Catches everything and flows fast down the line.",
  doubleSpec:  "MID-LENGTH · TWIN / 2+1",
  doubleWhy:   "You want one board that does it all. The Double Double paddles like a longboard and surfs with the speed and flow of something much shorter.",

  /* ---- WHO BUILDS THEM (Jason) ---- */
  buildsEyebrow: "Who builds them",
  buildsHeading: "Shaped by hand. Built to last.",
  craftShaper:   "<b>Jason</b> — [short bio placeholder]. Shapes for labels ridden worldwide; Bilt is his own brand.",
  craftFoam:     "Australian <b>Surfblanks</b>, the blank originally developed by the late Midget Farrelly.",
  craftGlass:    "<b>Hexel</b> fiberglass from Texas — light, strong, finished by hand.",
  shapedLabel:   "Jason also shapes for",
  /* Logos: upload your logo images to /images/logos and list them here */
  shapedLogos: [
    "images/logos/channel-islands.png",
    "images/logos/christenson.png",
    "images/logos/lost.png",
    "images/logos/mayhem.png"
  ],

  /* ---- WHO RIDES THEM (add or remove riders freely) ---- */
  ridersEyebrow: "Who rides them",
  ridersHeading: "Ridden hard, from Morocco to the world.",
  riders: [
    { name: "Abdel",    role: "Brand ambassador" },
    { name: "Ayman",    role: "Team rider" },
    { name: "[ Name ]", role: "[ Placeholder ]" },
    { name: "[ Name ]", role: "[ Placeholder ]" },
    { name: "[ Name ]", role: "[ Placeholder ]" }
  ],

  /* ---- FINDER ---- */
  finderEyebrow: "Find your board",
  finderHeading: "Answer a few questions. Get your board.",
  finderSub:     "No jargon. We match you to the right shape and size in about a minute.",
  resultBanner:  "Your match",
  continueBtn:   "Continue to build →",

  /* ---- BUILDER ---- */
  buildEyebrow: "Build your board",
  buildHeading: "Make it yours.",
  buildSub:     "Pre-set from your match. Adjust anything you like — size, glassing, and colours. The price updates as you go.",
  reserveBtn:   "Reserve my build →",

  /* ---- LEVEL / ATTRIBUTES ---- */
  levelEyebrow: "What it unlocks",
  levelHeading: "Ready to level up?",
  levelSub:     "Where your board shines, who it's for, and how it feels — at a glance.",

  /* ---- RESERVE / ORDER ---- */
  orderEyebrow: "Reserve",
  orderHeading: "Reserve your build.",
  orderSub:     "Your board is shaped to your spec. Pay a deposit to start the build; the balance is due on delivery in {buildTime}.",
  depositLabel: "Pay deposit",
  depositNote:  "You'll be sent a secure payment link to confirm your deposit.",

  /* ---- YOUR SECTION (Coach Dris) ---- */
  drisEyebrow: "Your guy in Morocco",
  drisHeading: "I ride these boards, and I stand behind every build.",
  drisBody:    "Questions before you order? Message me directly — I'll help you dial in the right shape and size for how you surf. [Bio placeholder.]",
  drisCta:     "Message me on WhatsApp",
  step1: "Order & deposit",
  step2: "Jason shapes your board",
  step3: "You surf — in {buildTime}",

  /* ---- FOOTER ---- */
  footerText: "Bilt Morocco · custom surfboards · [contact placeholder]"
};

/* ============================================================
   PHOTOS — replace files in /images (keep the same names):
     images/bilt-logo.png
     images/big-mac.jpg
     images/whopper.jpg
     images/double-double.jpg
     images/wave.jpg                 (the full-width surf photo)
     images/logos/…                  (the "shaped for" logos)
   ============================================================ */
