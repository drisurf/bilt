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
  whatsapp:   "https://wa.me/212656578306",   // Abdel's WhatsApp
  orderEmail: "you@email.com",                // your email (also set inside the Google Sheet script)
  ordersEndpoint: "https://script.google.com/macros/s/AKfycbyxcwYyz0nS6UmE7h8E_p0FfVh_lCH19_RL2BQGjssnQLkCbz9QeAcY_N-38y0VHbk7/exec",

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
  craftShaper:   "<b>Jason Ribbink</b> is a South African surfer, surfboard shaper, and accomplished waterman. A former South African Open Champion, ISA Team Captain, and World Longboard Championship runner up, he is known for his powerful surfing, big wave achievements, and decades of experience shaping high performance surfboards. He has shaped boards for labels ridden worldwide, while Bilt Surfboards remains his own signature brand.",
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
  /* Each rider has a photo — replace the file in /images/riders (keep the name) */
  riders: [
    { name: "Abdel",    role: "Brand ambassador", photo: "images/riders/rider-1.jpg" },
    { name: "Ayman",    role: "Team rider",        photo: "images/riders/rider-2.jpg" },
    { name: "[ Name ]", role: "[ Placeholder ]",   photo: "images/riders/rider-3.jpg" },
    { name: "[ Name ]", role: "[ Placeholder ]",   photo: "images/riders/rider-4.jpg" },
    { name: "[ Name ]", role: "[ Placeholder ]",   photo: "images/riders/rider-5.jpg" }
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
  drisBody:    "Questions before you order? Message me directly — I'll help you dial in the right shape and size for how you surf. Abdel El Harim is a Moroccan professional surfer, coach, and surfing pioneer. A ten time Moroccan Champion, former WSL Qualifying Series competitor, and the first Moroccan invited to compete at the Pipeline Masters in Hawaii, he is recognized for helping establish Morocco on the international surfing stage. Today, he combines more than three decades of surfing experience with a passion for coaching and developing the next generation of surfers.",
  drisCta:     "Message me on WhatsApp",
  step1: "Order & deposit",
  step2: "Jason shapes your board",
  step3: "You surf — in {buildTime}",

  /* ---- FAQ (edit questions/answers freely; add or remove items) ---- */
  faqEyebrow: "FAQ",
  faqHeading: "Questions, answered.",
  faqs: [
    { q: "How long until I get my board?",
      a: "Every board is shaped to order, so give it about 2–3 months from the day your deposit clears. We keep you posted as it moves through shaping, glassing, and shipping to Morocco." },
    { q: "How does payment work?",
      a: "You pay a 50% deposit to start the build and the balance on delivery. Once you reserve, we send you a secure payment link for the deposit — nothing is charged automatically." },
    { q: "I'm not sure which board or size suits me. Can you help?",
      a: "Yes. The finder matches you to a shape and volume from your weight, level, and the waves you surf. Still unsure? Message Abdel on WhatsApp and we'll dial it in together before anything is built." },
    { q: "Can I really choose any colour?",
      a: "You can. Deck, bottom, and rails are each fully customisable — pick a swatch or any colour you like. A plain white board is standard; each area you colour adds 500 MAD." },
    { q: "Are these boards made for Moroccan waves?",
      a: "That's exactly the point. The three shapes cover everything from small, soft beach breaks to punchier points — the same waves we surf here every day. Tell us your home break and we'll steer you to the right one." },
    { q: "Can I change the volume or dimensions?",
      a: "The builder suggests a volume from your size, and you can nudge it up or down for more float or a tighter feel. Need fully custom dimensions? Add a note when you reserve, or message Abdel and the shaper will work to your spec." }
  ],

  /* ---- FOOTER ---- */
  footerText: "Bilt Morocco · custom surfboards · copyright 2026"
};

/* ============================================================
   PHOTOS — replace files in /images (keep the same names):
     images/bilt-logo.png
     images/big-mac.jpg
     images/whopper.jpg
     images/double-double.jpg
     images/wave.jpg                 (the full-width surf photo)
     images/jason.jpg                (Jason's photo — "Who builds them")
     images/abdel.jpg                (Abdel's photo — "Your guy in Morocco")
     images/riders/rider-1..5.jpg    (the rider photos)
     images/logos/…                  (the "shaped for" logos)
   ============================================================ */
