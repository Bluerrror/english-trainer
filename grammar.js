/* English Trainer — grammar reference lessons.
   Explanations: Persian (fa) primary, English (en) fallback. English stays English.
   lv: 1=A0 2=A1 3=A2 4=B1 5=B2 · sk = skill for the "Practise this" button. */
window.GRAMMAR=[

/* ============ A0 ============ */
{id:'alphabet',ic:'🔤',lv:1,sk:'Beginner',
 title:{en:'The English alphabet',fa:'الفبای انگلیسی'},
 sub:{en:'26 letters & vowels',fa:'۲۶ حرف و مصوت‌ها'},
 blocks:[
  {type:'text',md:{fa:'انگلیسی ۲۶ حرف دارد. پنج مصوت هست: <b>a, e, i, o, u</b>. بقیه صامت‌اند. حرف <b>y</b> گاهی مثل مصوت عمل می‌کند (مثلاً در <i>happy</i>).',
        en:'English has 26 letters. Five are vowels: <b>a, e, i, o, u</b>. The rest are consonants. The letter <b>y</b> sometimes acts as a vowel (as in <i>happy</i>).'}},
  {type:'examples',items:[
   {de:'apple',en:'سیب',say:'apple'},{de:'egg',en:'تخم‌مرغ',say:'egg'},
   {de:'ice',en:'یخ',say:'ice'},{de:'orange',en:'پرتقال',say:'orange'},{de:'umbrella',en:'چتر',say:'umbrella'}]},
  {type:'tip',md:{fa:'دانستن مصوت‌ها مهم است: انتخاب <b>a</b> یا <b>an</b> به صدای مصوت بستگی دارد.',
        en:'Knowing the vowels matters: choosing <b>a</b> or <b>an</b> depends on the vowel sound.'}}
 ]},

{id:'greetings',ic:'👋',lv:1,sk:'Beginner',
 title:{en:'Greetings & politeness',fa:'سلام و ادب'},
 sub:{en:'Hello, thanks, sorry',fa:'سلام، تشکر، عذرخواهی'},
 blocks:[
  {type:'text',md:{fa:'مهم‌ترین کلمه‌های اول. انگلیسی مثل فارسی «تو/شما» رسمی و غیررسمی ندارد — همیشه <b>you</b>.',
        en:'The most useful first words. Unlike many languages, English has no formal/informal "you" — always <b>you</b>.'}},
  {type:'examples',items:[
   {de:'Hello',en:'سلام',say:'Hello'},{de:'Good morning',en:'صبح بخیر',say:'Good morning'},
   {de:'Good evening',en:'عصر بخیر',say:'Good evening'},{de:'Goodbye',en:'خداحافظ',say:'Goodbye'},
   {de:'Thank you',en:'ممنون',say:'Thank you'},{de:'Please',en:'لطفاً',say:'Please'},
   {de:'Sorry',en:'ببخشید',say:'Sorry'},{de:'Excuse me',en:'ببخشید (برای جلب توجه)',say:'Excuse me'}]},
  {type:'tip',md:{fa:'«<b>Sorry</b>» برای عذرخواهی و «<b>Excuse me</b>» برای جلب توجه یا رد شدن از کنار کسی است.',
        en:'Use "<b>Sorry</b>" to apologise, and "<b>Excuse me</b>" to get attention or pass by someone.'}}
 ]},

{id:'numbers',ic:'🔢',lv:1,sk:'Numbers',
 title:{en:'Numbers 0–20',fa:'اعداد ۰ تا ۲۰'},
 sub:{en:'Counting basics',fa:'مبانی شمارش'},
 blocks:[
  {type:'text',md:{fa:'۰ تا ۱۲ را حفظ کن. از ۱۳ تا ۱۹، انگلیسی <b>-teen</b> اضافه می‌کند: <i>four</i> + <i>teen</i> = <b>fourteen</b> (۱۴).',
        en:'Learn 0–12 by heart. From 13–19, English adds <b>-teen</b>: <i>four</i> + <i>teen</i> = <b>fourteen</b> (14).'}},
  {type:'table',head:['#','English','#','English'],rows:[
   ['0','zero','11','eleven'],['1','one','12','twelve'],['2','two','13','thirteen'],
   ['3','three','14','fourteen'],['4','four','15','fifteen'],['5','five','16','sixteen'],
   ['6','six','17','seventeen'],['7','seven','18','eighteen'],['8','eight','19','nineteen'],
   ['9','nine','20','twenty'],['10','ten','','']]},
  {type:'tip',md:{fa:'مراقب باش: <b>thirteen</b> (۱۳) و <b>fifteen</b> (۱۵) کمی نامنظم‌اند — نه «threeteen» و نه «fiveteen».',
        en:'Watch out: <b>thirteen</b> (13) and <b>fifteen</b> (15) are slightly irregular — not "threeteen" or "fiveteen".'}}
 ]},

/* ============ A1 ============ */
{id:'articles',ic:'📘',lv:2,sk:'Articles',
 title:{en:'a, an & the',fa:'a، an و the'},
 sub:{en:'Indefinite & definite',fa:'نامعین و معین'},
 blocks:[
  {type:'text',md:{fa:'<b>a/an</b> = «یک» (نامعین، چیزی که اولین بار گفته می‌شود). <b>the</b> = «آن» (معین، چیزی مشخص). انتخاب <b>a</b> یا <b>an</b> به <b>صدای</b> اول کلمهٔ بعدی بستگی دارد، نه حرف آن.',
        en:'<b>a/an</b> = "a/one" (indefinite, first mention). <b>the</b> = "the" (definite, something specific). Choose <b>a</b> or <b>an</b> by the <b>sound</b> of the next word, not the letter.'}},
  {type:'table',head:['','before','example'],rows:[
   ['a','consonant sound','*a book, a car, a university'],
   ['an','vowel sound','*an apple, an hour, an egg'],
   ['the','something specific','*the sun, the book you gave me']]},
  {type:'examples',items:[
   {de:'I have a cat.',en:'یک گربه دارم.',say:'I have a cat.'},
   {de:'I ate an apple.',en:'یک سیب خوردم.',say:'I ate an apple.'},
   {de:'Please close the door.',en:'لطفاً در را ببند.',say:'Please close the door.'}]},
  {type:'tip',md:{fa:'به صدا دقت کن، نه حرف: «<b>a</b> university» (صدای یو) ولی «<b>an</b> hour» (h خاموش).',
        en:'Listen to the sound, not the letter: "<b>a</b> university" (a "you-" sound) but "<b>an</b> hour" (silent h).'}}
 ]},

{id:'pronouns',ic:'🙋',lv:2,sk:'Verbs',
 title:{en:'Personal pronouns',fa:'ضمایر شخصی'},
 sub:{en:'I, you, he, she, it…',fa:'I، you، he، she، it…'},
 blocks:[
  {type:'text',md:{fa:'ضمایر جای افراد یا چیزها را می‌گیرند. انگلیسی برای «او» سه کلمه دارد: <b>he</b> (مرد)، <b>she</b> (زن)، <b>it</b> (چیز/حیوان).',
        en:'Pronouns replace people or things. English has three words for "he/she/it": <b>he</b> (male), <b>she</b> (female), <b>it</b> (thing/animal).'}},
  {type:'table',head:['subject','object','فارسی'],rows:[
   ['I','me','من'],['you','you','تو / شما'],['he','him','او (مرد)'],
   ['she','her','او (زن)'],['it','it','آن'],['we','us','ما'],['they','them','آن‌ها']]},
  {type:'examples',items:[
   {de:'She loves him.',en:'او (زن) او (مرد) را دوست دارد.',say:'She loves him.'},
   {de:'We saw them yesterday.',en:'دیروز آن‌ها را دیدیم.',say:'We saw them yesterday.'}]},
  {type:'tip',md:{fa:'ضمیر فاعلی (I, he) قبل از فعل و ضمیر مفعولی (me, him) بعد از فعل می‌آید: <i>I see him</i>.',
        en:'Subject pronouns (I, he) go before the verb; object pronouns (me, him) come after: <i>I see him</i>.'}}
 ]},

{id:'present',ic:'⚡',lv:2,sk:'Verbs',
 title:{en:'Present simple',fa:'زمان حال ساده'},
 sub:{en:'he/she/it adds -s',fa:'he/she/it پسوند -s می‌گیرد'},
 blocks:[
  {type:'text',md:{fa:'برای عادت‌ها و حقایق. فعل ساده است، فقط برای <b>he/she/it</b> یک <b>-s</b> اضافه کن: <i>I play → he play<b>s</b></i>.',
        en:'For habits and facts. The verb is simple; just add <b>-s</b> for <b>he/she/it</b>: <i>I play → he play<b>s</b></i>.'}},
  {type:'table',head:['','play','ending'],rows:[
   ['I','play','—'],['you','play','—'],['he/she/it','*plays','-s'],
   ['we','play','—'],['they','play','—']]},
  {type:'examples',items:[
   {de:'I work in Berlin.',en:'در برلین کار می‌کنم.',say:'I work in Berlin.'},
   {de:'She plays tennis.',en:'او تنیس بازی می‌کند.',say:'She plays tennis.'},
   {de:'They live in London.',en:'آن‌ها در لندن زندگی می‌کنند.',say:'They live in London.'}]},
  {type:'tip',md:{fa:'بعد از <b>-s, -sh, -ch, -x, -o</b> پسوند <b>-es</b> می‌شود: <i>watch → watches, go → goes</i>. بعد از صامت+y به <b>-ies</b>: <i>study → studies</i>.',
        en:'After <b>-s, -sh, -ch, -x, -o</b>, add <b>-es</b>: <i>watch → watches, go → goes</i>. After consonant + y → <b>-ies</b>: <i>study → studies</i>.'}}
 ]},

{id:'tobe',ic:'🔑',lv:2,sk:'Verbs',
 title:{en:'to be & to have',fa:'to be و to have'},
 sub:{en:'am/is/are & have/has',fa:'am/is/are و have/has'},
 blocks:[
  {type:'text',md:{fa:'دو فعل مهم و بی‌قاعده. <b>be</b> = بودن، <b>have</b> = داشتن. حفظشان کن.',
        en:'Two essential irregular verbs. <b>be</b> = to be, <b>have</b> = to have. Memorise them.'}},
  {type:'table',head:['','be','have'],rows:[
   ['I','*am','have'],['you','*are','have'],['he/she/it','*is','*has'],
   ['we','*are','have'],['they','*are','have']]},
  {type:'examples',items:[
   {de:'I am tired.',en:'خسته‌ام.',say:'I am tired.'},
   {de:'She is a doctor.',en:'او پزشک است.',say:'She is a doctor.'},
   {de:'They have two children.',en:'آن‌ها دو فرزند دارند.',say:'They have two children.'}]},
  {type:'tip',md:{fa:'کوتاه‌شده‌ها رایج‌اند: <b>I’m</b> (I am)، <b>she’s</b> (she is)، <b>they’re</b> (they are)، <b>I’ve</b> (I have).',
        en:'Contractions are common: <b>I’m</b>, <b>she’s</b>, <b>they’re</b>, <b>I’ve</b>.'}}
 ]},

{id:'wordorder',ic:'🧩',lv:2,sk:'Sentences',
 title:{en:'Word order & questions',fa:'ترتیب کلمات و سؤال'},
 sub:{en:'Subject–Verb–Object',fa:'فاعل–فعل–مفعول'},
 blocks:[
  {type:'text',md:{fa:'انگلیسی ترتیب ثابت <b>فاعل–فعل–مفعول</b> دارد: <i>I (فاعل) eat (فعل) an apple (مفعول)</i>. برای سؤال، از فعل کمکی <b>do/does</b> استفاده کن.',
        en:'English has a fixed <b>Subject–Verb–Object</b> order: <i>I (S) eat (V) an apple (O)</i>. For questions, use the helper <b>do/does</b>.'}},
  {type:'examples',items:[
   {de:'Do you speak English?',en:'انگلیسی صحبت می‌کنی؟',say:'Do you speak English?'},
   {de:'Does she live here?',en:'او اینجا زندگی می‌کند؟',say:'Does she live here?'},
   {de:'Where do you work?',en:'کجا کار می‌کنی؟',say:'Where do you work?'}]},
  {type:'tip',md:{fa:'بعد از <b>does</b>، فعل اصلی <b>-s</b> نمی‌گیرد: «Does she <b>play</b>?» نه «Does she plays?».',
        en:'After <b>does</b>, the main verb drops the -s: "Does she <b>play</b>?" not "Does she plays?".'}}
 ]},

/* ============ A2 ============ */
{id:'plural',ic:'🧺',lv:3,sk:'Plurals',
 title:{en:'Plural nouns',fa:'اسم جمع'},
 sub:{en:'-s, -es and irregulars',fa:'-s، -es و بی‌قاعده‌ها'},
 blocks:[
  {type:'text',md:{fa:'بیشتر اسم‌ها با <b>-s</b> جمع می‌شوند. بعد از <b>-s, -sh, -ch, -x</b> پسوند <b>-es</b> می‌شود. بعد از صامت+y به <b>-ies</b> تبدیل می‌شود. چند اسم بی‌قاعده‌اند.',
        en:'Most nouns add <b>-s</b>. After <b>-s, -sh, -ch, -x</b>, add <b>-es</b>. Consonant + y → <b>-ies</b>. A few are irregular.'}},
  {type:'table',head:['rule','singular','plural'],rows:[
   ['+s','cat','cat*s'],['+es','box','box*es'],['y→ies','city','cit*ies'],
   ['f→ves','knife','kni*ves'],['irregular','child','*children'],['irregular','man','*men']]},
  {type:'examples',items:[
   {de:'one child, two children',en:'یک کودک، دو کودک',say:'two children'},
   {de:'one box, three boxes',en:'یک جعبه، سه جعبه',say:'three boxes'},
   {de:'one city, many cities',en:'یک شهر، شهرهای زیاد',say:'many cities'}]},
  {type:'tip',md:{fa:'بی‌قاعده‌های پرکاربرد را حفظ کن: <b>man→men, woman→women, child→children, foot→feet, tooth→teeth, mouse→mice, person→people</b>.',
        en:'Memorise the common irregulars: <b>man→men, woman→women, child→children, foot→feet, tooth→teeth, mouse→mice, person→people</b>.'}}
 ]},

{id:'continuous',ic:'🌀',lv:3,sk:'Verbs',
 title:{en:'Present continuous',fa:'حال استمراری'},
 sub:{en:'be + verb-ing',fa:'be + فعل-ing'},
 blocks:[
  {type:'text',md:{fa:'برای کاری که <b>همین الان</b> در حال انجام است. با <b>am/is/are + فعل-ing</b> ساخته می‌شود: <i>I am reading</i>.',
        en:'For something happening <b>right now</b>. Built with <b>am/is/are + verb-ing</b>: <i>I am reading</i>.'}},
  {type:'examples',items:[
   {de:'I am learning English.',en:'دارم انگلیسی یاد می‌گیرم.',say:'I am learning English.'},
   {de:'She is cooking dinner.',en:'او دارد شام می‌پزد.',say:'She is cooking dinner.'},
   {de:'They are playing outside.',en:'آن‌ها بیرون بازی می‌کنند.',say:'They are playing outside.'}]},
  {type:'tip',md:{fa:'املای -ing: فعل‌های ختم به <b>e</b> آن را حذف می‌کنند (make→making)؛ فعل‌های کوتاه صامت آخر را دو برابر می‌کنند (run→running).',
        en:'-ing spelling: verbs ending in <b>e</b> drop it (make→making); short verbs double the final consonant (run→running).'}}
 ]},

{id:'pastsimple',ic:'⏳',lv:3,sk:'Verbs',
 title:{en:'Past simple',fa:'گذشتهٔ ساده'},
 sub:{en:'-ed & irregular verbs',fa:'-ed و افعال بی‌قاعده'},
 blocks:[
  {type:'text',md:{fa:'برای کارهای تمام‌شده در گذشته. فعل‌های باقاعده <b>-ed</b> می‌گیرند: <i>play → played</i>. اما بسیاری از فعل‌های پرکاربرد بی‌قاعده‌اند و باید حفظ شوند.',
        en:'For finished past actions. Regular verbs add <b>-ed</b>: <i>play → played</i>. But many common verbs are irregular and must be memorised.'}},
  {type:'table',head:['base','past','فارسی'],rows:[
   ['go','*went','رفتن'],['see','*saw','دیدن'],['have','*had','داشتن'],
   ['do','*did','انجام دادن'],['eat','*ate','خوردن'],['buy','*bought','خریدن']]},
  {type:'examples',items:[
   {de:'Yesterday I went home.',en:'دیروز به خانه رفتم.',say:'Yesterday I went home.'},
   {de:'She bought a new car.',en:'او یک ماشین نو خرید.',say:'She bought a new car.'},
   {de:'We watched a film.',en:'یک فیلم تماشا کردیم.',say:'We watched a film.'}]},
  {type:'tip',md:{fa:'در سؤال و منفی از <b>did</b> استفاده کن و فعل به شکل پایه برمی‌گردد: «Did you <b>go</b>?»، «I <b>didn’t go</b>».',
        en:'In questions and negatives, use <b>did</b> and the verb returns to base form: "Did you <b>go</b>?", "I <b>didn’t go</b>".'}}
 ]},

{id:'prepositions',ic:'🧭',lv:3,sk:'Prepositions',
 title:{en:'in, on, at (time & place)',fa:'in، on، at (زمان و مکان)'},
 sub:{en:'The tricky little words',fa:'کلمه‌های کوچک دشوار'},
 blocks:[
  {type:'text',md:{fa:'سه حرف اضافهٔ پرکاربرد برای زمان و مکان. از بزرگ به کوچک: <b>in</b> (بزرگ‌ترین) → <b>on</b> → <b>at</b> (دقیق‌ترین).',
        en:'Three common prepositions for time and place. From big to small: <b>in</b> (biggest) → <b>on</b> → <b>at</b> (most specific).'}},
  {type:'table',head:['','time','place'],rows:[
   ['in','months, years (in July)','countries, cities (in Berlin)'],
   ['on','days, dates (on Monday)','surfaces (on the table)'],
   ['at','clock times (at 3)','points (at the door)']]},
  {type:'examples',items:[
   {de:'The meeting is at 3 o’clock.',en:'جلسه ساعت ۳ است.',say:'The meeting is at three o’clock.'},
   {de:'My birthday is in July.',en:'تولدم در ژوئیه است.',say:'My birthday is in July.'},
   {de:'See you on Monday.',en:'دوشنبه می‌بینمت.',say:'See you on Monday.'}]},
  {type:'tip',md:{fa:'استثناهای مفید: <b>at night</b>، <b>at the weekend</b>، <b>in the morning / afternoon / evening</b>.',
        en:'Useful exceptions: <b>at night</b>, <b>at the weekend</b>, <b>in the morning / afternoon / evening</b>.'}}
 ]},

{id:'modals',ic:'🔧',lv:3,sk:'Verbs',
 title:{en:'Modal verbs',fa:'افعال کمکی وجهی'},
 sub:{en:'can, must, should…',fa:'can، must، should…'},
 blocks:[
  {type:'text',md:{fa:'افعال وجهی توانایی، ضرورت، اجازه یا توصیه را می‌رسانند. بعدشان فعل به <b>شکل پایه</b> می‌آید (بدون to، بدون -s): <i>She can <b>swim</b></i>.',
        en:'Modal verbs express ability, necessity, permission or advice. They are followed by the <b>base form</b> (no to, no -s): <i>She can <b>swim</b></i>.'}},
  {type:'table',head:['modal','meaning','example'],rows:[
   ['can','توانایی','I can swim'],['must','اجبار','You must stop'],
   ['should','توصیه','You should rest'],['may','اجازه','May I come in?'],
   ['might','احتمال','It might rain']]},
  {type:'examples',items:[
   {de:'You must stop at a red light.',en:'باید پشت چراغ قرمز بایستی.',say:'You must stop at a red light.'},
   {de:'Can you help me?',en:'می‌توانی کمکم کنی؟',say:'Can you help me?'},
   {de:'You should see a doctor.',en:'بهتر است پیش پزشک بروی.',say:'You should see a doctor.'}]},
  {type:'tip',md:{fa:'افعال وجهی هرگز <b>-s</b> نمی‌گیرند: «She <b>can</b>» نه «She cans». و بعدشان <b>to</b> نمی‌آید.',
        en:'Modals never take <b>-s</b>: "She <b>can</b>" not "She cans". And no <b>to</b> after them.'}}
 ]},

{id:'possessive',ic:'🔖',lv:3,sk:'Vocabulary',
 title:{en:'Possessives & this/that',fa:'مالکیت و this/that'},
 sub:{en:'my, your, ’s…',fa:'my، your، ’s…'},
 blocks:[
  {type:'text',md:{fa:'برای مالکیت از صفت‌های ملکی (<b>my, your, his, her, our, their</b>) یا <b>’s</b> استفاده کن: <i>Anna’s book</i> = کتابِ آنا.',
        en:'Show possession with possessive adjectives (<b>my, your, his, her, our, their</b>) or <b>’s</b>: <i>Anna’s book</i>.'}},
  {type:'table',head:['pronoun','possessive'],rows:[
   ['I','my'],['you','your'],['he','his'],['she','her'],['we','our'],['they','their']]},
  {type:'examples',items:[
   {de:'This is my book.',en:'این کتاب من است.',say:'This is my book.'},
   {de:'That is Anna’s car.',en:'آن ماشین آنا است.',say:'That is Anna’s car.'},
   {de:'These are our friends.',en:'این‌ها دوستان ما هستند.',say:'These are our friends.'}]},
  {type:'tip',md:{fa:'<b>this/these</b> برای نزدیک و <b>that/those</b> برای دور: this (مفرد) → these (جمع)؛ that → those.',
        en:'<b>this/these</b> for near, <b>that/those</b> for far: this (singular) → these (plural); that → those.'}}
 ]},

/* ============ B1 ============ */
{id:'comparative',ic:'📏',lv:4,sk:'Adjectives',
 title:{en:'Comparative & superlative',fa:'صفت برتر و برترین'},
 sub:{en:'bigger, the biggest',fa:'بزرگ‌تر، بزرگ‌ترین'},
 blocks:[
  {type:'text',md:{fa:'صفت‌های کوتاه <b>-er / -est</b> می‌گیرند. صفت‌های بلند از <b>more / the most</b> استفاده می‌کنند: <i>more interesting</i>.',
        en:'Short adjectives take <b>-er / -est</b>. Long adjectives use <b>more / the most</b>: <i>more interesting</i>.'}},
  {type:'table',head:['adjective','comparative','superlative'],rows:[
   ['big','bigger','the biggest'],['happy','happier','the happiest'],
   ['good','*better','*the best'],['bad','*worse','*the worst'],
   ['expensive','more expensive','the most expensive']]},
  {type:'examples',items:[
   {de:'Anna is taller than Tom.',en:'آنا از تام قدبلندتر است.',say:'Anna is taller than Tom.'},
   {de:'This is the best book.',en:'این بهترین کتاب است.',say:'This is the best book.'}]},
  {type:'tip',md:{fa:'برای مقایسه از <b>than</b> استفاده کن: <i>faster <b>than</b> me</i>. و بی‌قاعده‌ها: <b>good→better→best</b>، <b>bad→worse→worst</b>.',
        en:'Use <b>than</b> to compare: <i>faster <b>than</b> me</i>. Irregulars: <b>good→better→best</b>, <b>bad→worse→worst</b>.'}}
 ]},

{id:'presentperfect',ic:'🔗',lv:4,sk:'Verbs',
 title:{en:'Present perfect',fa:'حال کامل'},
 sub:{en:'have/has + participle',fa:'have/has + اسم مفعول'},
 blocks:[
  {type:'text',md:{fa:'برای تجربه‌ها و کارهایی که به الان مربوط‌اند. با <b>have/has + اسم مفعول</b> ساخته می‌شود: <i>I have seen it</i>.',
        en:'For experiences and past actions connected to now. Built with <b>have/has + past participle</b>: <i>I have seen it</i>.'}},
  {type:'examples',items:[
   {de:'I have lived here since 2015.',en:'از سال ۲۰۱۵ اینجا زندگی کرده‌ام.',say:'I have lived here since 2015.'},
   {de:'She has never eaten sushi.',en:'او هرگز سوشی نخورده است.',say:'She has never eaten sushi.'},
   {de:'Have you finished your work?',en:'کارت را تمام کرده‌ای؟',say:'Have you finished your work?'}]},
  {type:'tip',md:{fa:'<b>for</b> برای مدت (for five years) و <b>since</b> برای نقطهٔ شروع (since 2015). با <b>already, yet, never, ever</b> زیاد به‌کار می‌رود.',
        en:'<b>for</b> for a duration (for five years), <b>since</b> for a starting point (since 2015). Often used with <b>already, yet, never, ever</b>.'}}
 ]},

{id:'future',ic:'🚀',lv:4,sk:'Verbs',
 title:{en:'Future: will & going to',fa:'آینده: will و going to'},
 sub:{en:'Two ways to talk ahead',fa:'دو راه برای بیان آینده'},
 blocks:[
  {type:'text',md:{fa:'<b>will</b> برای تصمیم‌های لحظه‌ای، پیش‌بینی و قول. <b>going to</b> برای برنامه‌ها و نیت‌های از پیش تعیین‌شده.',
        en:'<b>will</b> for spontaneous decisions, predictions and promises. <b>going to</b> for plans and intentions already decided.'}},
  {type:'examples',items:[
   {de:'I will call you later.',en:'بعداً بهت زنگ می‌زنم.',say:'I will call you later.'},
   {de:'It is going to rain.',en:'قرار است باران ببارد.',say:'It is going to rain.'},
   {de:'We are going to visit Rome.',en:'قرار است رم را ببینیم.',say:'We are going to visit Rome.'}]},
  {type:'tip',md:{fa:'کوتاه‌شدهٔ will = <b>’ll</b> (I’ll, she’ll). منفی will = <b>won’t</b>.',
        en:'Contraction of will = <b>’ll</b> (I’ll, she’ll). Negative of will = <b>won’t</b>.'}}
 ]},

{id:'conditional1',ic:'🌦️',lv:4,sk:'Sentences',
 title:{en:'Conditionals (0 & 1)',fa:'جملات شرطی (۰ و ۱)'},
 sub:{en:'if this, then that',fa:'اگر این، آنگاه آن'},
 blocks:[
  {type:'text',md:{fa:'<b>شرطی صفر</b> برای حقایق کلی: <i>If you heat ice, it melts</i>. <b>شرطی اول</b> برای آیندهٔ واقعی: <i>If it rains, I <b>will</b> stay home</i>.',
        en:'<b>Zero conditional</b> for general facts: <i>If you heat ice, it melts</i>. <b>First conditional</b> for real future: <i>If it rains, I <b>will</b> stay home</i>.'}},
  {type:'examples',items:[
   {de:'If it rains, we will stay home.',en:'اگر باران ببارد، خانه می‌مانیم.',say:'If it rains, we will stay home.'},
   {de:'If you study, you will pass.',en:'اگر درس بخوانی، قبول می‌شوی.',say:'If you study, you will pass.'}]},
  {type:'tip',md:{fa:'در بند <b>if</b> از حال ساده استفاده کن، نه will: «If it <b>rains</b>» نه «If it will rain».',
        en:'In the <b>if</b>-clause, use the present simple, not will: "If it <b>rains</b>" not "If it will rain".'}}
 ]},

/* ============ B2 ============ */
{id:'conditional2',ic:'🌙',lv:5,sk:'Sentences',
 title:{en:'Conditionals (2 & 3)',fa:'جملات شرطی (۲ و ۳)'},
 sub:{en:'unreal & past',fa:'غیرواقعی و گذشته'},
 blocks:[
  {type:'text',md:{fa:'<b>شرطی دوم</b> برای موقعیت غیرواقعی حال: <i>If I <b>were</b> rich, I <b>would</b> travel</i>. <b>شرطی سوم</b> برای گذشتهٔ غیرواقعی: <i>If I <b>had</b> known, I <b>would have</b> come</i>.',
        en:'<b>Second conditional</b> for unreal present: <i>If I <b>were</b> rich, I <b>would</b> travel</i>. <b>Third conditional</b> for unreal past: <i>If I <b>had</b> known, I <b>would have</b> come</i>.'}},
  {type:'examples',items:[
   {de:'If I were you, I would apologise.',en:'اگر جای تو بودم، عذرخواهی می‌کردم.',say:'If I were you, I would apologise.'},
   {de:'If I had studied, I would have passed.',en:'اگر درس خوانده بودم، قبول می‌شدم.',say:'If I had studied, I would have passed.'}]},
  {type:'tip',md:{fa:'در شرطی دوم برای همهٔ اشخاص از <b>were</b> استفاده کن: «If I <b>were</b>…», «If he <b>were</b>…».',
        en:'In the second conditional, use <b>were</b> for all persons: "If I <b>were</b>…", "If he <b>were</b>…".'}}
 ]},

{id:'passive',ic:'🔄',lv:5,sk:'Verbs',
 title:{en:'The passive voice',fa:'وجه مجهول'},
 sub:{en:'be + past participle',fa:'be + اسم مفعول'},
 blocks:[
  {type:'text',md:{fa:'مجهول روی <b>عمل</b> تمرکز می‌کند، نه فاعل. با <b>be + اسم مفعول</b> ساخته می‌شود. عامل (اگر لازم باشد) با <b>by</b> می‌آید.',
        en:'The passive focuses on the <b>action</b>, not who does it. Built with <b>be + past participle</b>. The agent (if needed) uses <b>by</b>.'}},
  {type:'examples',items:[
   {de:'The house was built in 1920.',en:'خانه در سال ۱۹۲۰ ساخته شد.',say:'The house was built in 1920.'},
   {de:'English is spoken here.',en:'اینجا انگلیسی صحبت می‌شود.',say:'English is spoken here.'},
   {de:'The letter was written by Anna.',en:'نامه توسط آنا نوشته شد.',say:'The letter was written by Anna.'}]},
  {type:'tip',md:{fa:'زمان را با فعل <b>be</b> نشان بده: is built (حال)، was built (گذشته)، will be built (آینده). اسم مفعول ثابت می‌ماند.',
        en:'Show the tense with <b>be</b>: is built (present), was built (past), will be built (future). The participle stays the same.'}}
 ]},

{id:'relative',ic:'🧷',lv:5,sk:'Sentences',
 title:{en:'Relative clauses',fa:'جملات موصولی'},
 sub:{en:'who, which, that',fa:'who، which، that'},
 blocks:[
  {type:'text',md:{fa:'بندهای موصولی اطلاعات اضافه می‌دهند: <b>who</b> برای افراد، <b>which</b> برای چیزها، <b>that</b> برای هر دو، <b>where</b> برای مکان.',
        en:'Relative clauses add information: <b>who</b> for people, <b>which</b> for things, <b>that</b> for both, <b>where</b> for places.'}},
  {type:'examples',items:[
   {de:'The man who lives next door is a doctor.',en:'مردی که همسایه است پزشک است.',say:'The man who lives next door is a doctor.'},
   {de:'The book which I read was great.',en:'کتابی که خواندم عالی بود.',say:'The book which I read was great.'},
   {de:'This is the house where I grew up.',en:'این خانه‌ای است که در آن بزرگ شدم.',say:'This is the house where I grew up.'}]},
  {type:'tip',md:{fa:'وقتی موصول مفعول است، اغلب می‌توان آن را حذف کرد: «the book <b>(that)</b> I read».',
        en:'When the relative pronoun is the object, you can often drop it: "the book <b>(that)</b> I read".'}}
 ]},

{id:'reported',ic:'💬',lv:5,sk:'Sentences',
 title:{en:'Reported speech',fa:'نقل‌قول غیرمستقیم'},
 sub:{en:'He said that…',fa:'او گفت که…'},
 blocks:[
  {type:'text',md:{fa:'برای گزارش گفتهٔ کسی، زمان معمولاً یک قدم به عقب می‌رود: <i>«I am tired» → He said he <b>was</b> tired</i>.',
        en:'To report what someone said, the tense usually shifts one step back: <i>"I am tired" → He said he <b>was</b> tired</i>.'}},
  {type:'table',head:['direct','reported'],rows:[
   ['am/is → ','was'],['do/does → ','did'],['will → ','would'],['can → ','could']]},
  {type:'examples',items:[
   {de:'She said she was busy.',en:'او گفت که سرش شلوغ است.',say:'She said she was busy.'},
   {de:'He told me he would call.',en:'او به من گفت که زنگ خواهد زد.',say:'He told me he would call.'}]},
  {type:'tip',md:{fa:'کلمه‌های زمان هم عوض می‌شوند: <b>now→then, today→that day, tomorrow→the next day</b>.',
        en:'Time words also change: <b>now→then, today→that day, tomorrow→the next day</b>.'}}
 ]}

];
