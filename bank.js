/* English Trainer — authored, hand-verified question bank.
   Natural English sentences, mini-dialogues and common learner traps.
   {lv:1-5, sk:skill, s:sentence-with-___ (or big:word), a:answer, o:[distractors],
    ex:explanation (English), tr:Persian hint, say:read-aloud text}          */
window.BANKDATA=[

/* ===== A0 (lv 1) — survival English ===== */
{lv:1,sk:'Beginner',s:'A: Hello! How ___ you?  B: I am fine, thanks.',a:'are',o:['is','am','be'],ex:'you → are.',tr:'حال شما چطور است؟',say:'How are you?'},
{lv:1,sk:'Beginner',s:'A: What is your ___?  B: My name is Sara.',a:'name',o:['age','day','food'],ex:'What is your name?',tr:'اسم شما چیست؟',say:'What is your name?'},
{lv:1,sk:'Beginner',s:'A: Where are you ___?  B: I am from Iran.',a:'from',o:['to','in','at'],ex:'Where are you from?',tr:'اهل کجایی؟',say:'Where are you from?'},
{lv:1,sk:'Beginner',s:'Thank you! — You are ___.',a:'welcome',o:['sorry','fine','please'],ex:'“You are welcome.”',tr:'خواهش می‌کنم.',say:'You are welcome.'},
{lv:1,sk:'Beginner',s:'In the morning we say: „Good ___!“',a:'morning',o:['night','evening','bye'],ex:'Good morning.',tr:'صبح بخیر!',say:'Good morning'},
{lv:1,sk:'Beginner',s:'The sun is ___.',a:'yellow',o:['blue','black','green'],ex:'yellow.',tr:'خورشید زرد است.',say:'yellow'},
{lv:1,sk:'Beginner',s:'The grass is ___.',a:'green',o:['red','blue','grey'],ex:'green.',tr:'چمن سبز است.',say:'green'},
{lv:1,sk:'Beginner',s:'2 + 3 = ___',a:'five',o:['four','six','seven'],ex:'2+3=5=five.',tr:'پنج',say:'five'},
{lv:1,sk:'Beginner',s:'A week has ___ days.',a:'seven',o:['five','ten','twelve'],ex:'7 days.',tr:'هفت',say:'seven'},

/* ===== A1 (lv 2) — everyday sentences ===== */
{lv:2,sk:'Verbs',s:'I ___ a coffee every morning.',a:'drink',o:['drinks','drinking','drank'],ex:'I → drink (base form).',tr:'هر صبح قهوه می‌نوشم.',say:'I drink a coffee every morning.'},
{lv:2,sk:'Verbs',s:'She ___ tennis on Sundays.',a:'plays',o:['play','playing','played'],ex:'she → plays (add -s).',tr:'او یکشنبه‌ها تنیس بازی می‌کند.',say:'She plays tennis on Sundays.'},
{lv:2,sk:'Verbs',s:'They ___ in London.',a:'live',o:['lives','living','lived'],ex:'they → live (base form).',tr:'آنها در لندن زندگی می‌کنند.',say:'They live in London.'},
{lv:2,sk:'Articles',s:'I have ___ apple and a banana.',a:'an',o:['a','the','some'],ex:'apple starts with a vowel sound → an.',tr:'یک سیب دارم.',say:'I have an apple and a banana.'},
{lv:2,sk:'Articles',s:'She is ___ university student.',a:'a',o:['an','the','one'],ex:'“university” sounds like “you-” → a.',tr:'او دانشجوی دانشگاه است.',say:'She is a university student.'},
{lv:2,sk:'Articles',s:'Please wait ___ hour.',a:'an',o:['a','the','one'],ex:'“hour” has a silent h → an.',tr:'یک ساعت صبر کن.',say:'Please wait an hour.'},
{lv:2,sk:'Vocabulary',s:'I am hungry. I want to ___ something.',a:'eat',o:['drink','sleep','read'],ex:'hungry → eat.',tr:'گرسنه‌ام، می‌خواهم چیزی بخورم.',say:'I want to eat something.'},
{lv:2,sk:'Vocabulary',s:'I am thirsty. I want to ___ water.',a:'drink',o:['eat','buy','walk'],ex:'thirsty → drink.',tr:'تشنه‌ام، می‌خواهم آب بنوشم.',say:'I want to drink water.'},
{lv:2,sk:'Numbers',s:'A day has ___ hours.',a:'twenty-four',o:['twelve','sixty','seven'],ex:'24 hours.',tr:'یک روز ۲۴ ساعت دارد.',say:'twenty-four'},
{lv:2,sk:'Phrases',s:'At a shop: „How ___ does it cost?“',a:'much',o:['many','long','old'],ex:'How much does it cost?',tr:'قیمتش چند است؟',say:'How much does it cost?'},
{lv:2,sk:'Sentences',s:'Choose the correct sentence:',big:'',a:'I am learning English today.',o:['I am learn English today.','I learning am English today.','Am I learning English today.'],ex:'Present continuous: am + verb-ing.',tr:'من امروز انگلیسی یاد می‌گیرم.',say:'I am learning English today.'},

/* ===== A2 (lv 3) — past, plurals, prepositions ===== */
{lv:3,sk:'Verbs',s:'Yesterday I ___ to the cinema.',a:'went',o:['go','goed','gone'],ex:'go → went (irregular past).',tr:'دیروز به سینما رفتم.',say:'Yesterday I went to the cinema.'},
{lv:3,sk:'Verbs',s:'She ___ a beautiful song last night.',a:'sang',o:['sing','singed','sung'],ex:'sing → sang (past).',tr:'او دیشب آهنگ زیبایی خواند.',say:'She sang a beautiful song last night.'},
{lv:3,sk:'Verbs',s:'We ___ our homework an hour ago.',a:'did',o:['do','done','doed'],ex:'do → did (past).',tr:'یک ساعت پیش تکالیفمان را انجام دادیم.',say:'We did our homework an hour ago.'},
{lv:3,sk:'Plurals',s:'One child, two ___.',a:'children',o:['childs','childrens','child'],ex:'Irregular plural: child → children.',tr:'یک کودک، دو کودک.',say:'two children'},
{lv:3,sk:'Plurals',s:'One knife, two ___.',a:'knives',o:['knifes','knifves','knife'],ex:'-fe → -ves: knives.',tr:'یک چاقو، دو چاقو.',say:'two knives'},
{lv:3,sk:'Plurals',s:'One city, three ___.',a:'cities',o:['citys','cityes','citate'],ex:'consonant + y → -ies.',tr:'یک شهر، سه شهر.',say:'three cities'},
{lv:3,sk:'Prepositions',s:'The meeting is ___ 3 o’clock.',a:'at',o:['in','on','by'],ex:'clock time → at.',tr:'جلسه ساعت ۳ است.',say:'The meeting is at 3 o’clock.'},
{lv:3,sk:'Prepositions',s:'My birthday is ___ July.',a:'in',o:['on','at','by'],ex:'months → in.',tr:'تولد من در ژوئیه است.',say:'My birthday is in July.'},
{lv:3,sk:'Prepositions',s:'See you ___ Monday!',a:'on',o:['in','at','by'],ex:'days → on.',tr:'دوشنبه می‌بینمت!',say:'See you on Monday!'},
{lv:3,sk:'Verbs',s:'Look! The baby ___ .',a:'is sleeping',o:['sleep','sleeps','slept'],ex:'Right now → present continuous.',tr:'ببین! نوزاد خوابیده است.',say:'The baby is sleeping.'},
{lv:3,sk:'Verbs',s:'You ___ stop at a red light.',a:'must',o:['can','might','would'],ex:'Obligation → must.',tr:'باید پشت چراغ قرمز بایستی.',say:'You must stop at a red light.'},
{lv:3,sk:'Verbs',s:'___ you help me, please?',a:'Can',o:['Must','Should','Do'],ex:'Ability/request → can.',tr:'می‌توانی کمکم کنی؟',say:'Can you help me, please?'},

/* ===== B1 (lv 4) — comparatives, present perfect, connectors ===== */
{lv:4,sk:'Adjectives',s:'This box is ___ than that one.',a:'heavier',o:['heavy','heaviest','more heavy'],ex:'Comparative: heavy → heavier.',tr:'این جعبه از آن یکی سنگین‌تر است.',say:'This box is heavier than that one.'},
{lv:4,sk:'Adjectives',s:'It is the ___ film I have ever seen.',a:'best',o:['good','better','goodest'],ex:'Superlative of good → best.',tr:'بهترین فیلمی است که دیده‌ام.',say:'It is the best film I have ever seen.'},
{lv:4,sk:'Adjectives',s:'Physics is ___ than maths, I think.',a:'more difficult',o:['difficulter','most difficult','difficult'],ex:'Long adjective → more difficult.',tr:'به نظرم فیزیک از ریاضی سخت‌تر است.',say:'Physics is more difficult than maths.'},
{lv:4,sk:'Verbs',s:'I have ___ in Berlin since 2015.',a:'lived',o:['live','living','lives'],ex:'Present perfect: have + past participle.',tr:'از سال ۲۰۱۵ در برلین زندگی کرده‌ام.',say:'I have lived in Berlin since 2015.'},
{lv:4,sk:'Verbs',s:'She has already ___ her keys.',a:'lost',o:['lose','losed','losing'],ex:'lose → lost (participle).',tr:'او کلیدهایش را گم کرده است.',say:'She has already lost her keys.'},
{lv:4,sk:'Verbs',s:'They have never ___ sushi before.',a:'eaten',o:['eat','ate','eating'],ex:'eat → eaten (participle).',tr:'آنها قبلاً سوشی نخورده‌اند.',say:'They have never eaten sushi before.'},
{lv:4,sk:'Prepositions',s:'I have worked here ___ five years.',a:'for',o:['since','from','during'],ex:'Duration → for.',tr:'پنج سال است اینجا کار می‌کنم.',say:'I have worked here for five years.'},
{lv:4,sk:'Prepositions',s:'I have known her ___ 2010.',a:'since',o:['for','from','ago'],ex:'Point in time → since.',tr:'از سال ۲۰۱۰ او را می‌شناسم.',say:'I have known her since 2010.'},
{lv:4,sk:'Sentences',s:'The man ___ lives next door is a doctor.',a:'who',o:['which','what','whose'],ex:'Person → who.',tr:'مردی که همسایه ماست پزشک است.',say:'The man who lives next door is a doctor.'},
{lv:4,sk:'Sentences',s:'I don’t know ___ he is coming today.',a:'whether',o:['that','because','when'],ex:'Yes/no doubt → whether/if.',tr:'نمی‌دانم آیا امروز می‌آید.',say:'I don’t know whether he is coming today.'},

/* ===== B2 (lv 5) — conditionals, nuance, style ===== */
{lv:5,sk:'Verbs',s:'If I ___ rich, I would travel the world.',a:'were',o:['am','was','will be'],ex:'2nd conditional → were.',tr:'اگر ثروتمند بودم، دور دنیا سفر می‌کردم.',say:'If I were rich, I would travel the world.'},
{lv:5,sk:'Verbs',s:'If it rains tomorrow, we ___ stay home.',a:'will',o:['would','are','did'],ex:'1st conditional → will.',tr:'اگر فردا باران ببارد، خانه می‌مانیم.',say:'If it rains tomorrow, we will stay home.'},
{lv:5,sk:'Verbs',s:'The bridge ___ built in 1890.',a:'was',o:['is','has','did'],ex:'Passive past → was + participle.',tr:'پل در سال ۱۸۹۰ ساخته شد.',say:'The bridge was built in 1890.'},
{lv:5,sk:'Verbs',s:'By next year, she ___ finished her studies.',a:'will have',o:['will','has','had'],ex:'Future perfect → will have + participle.',tr:'تا سال آینده تحصیلش را تمام خواهد کرد.',say:'By next year, she will have finished her studies.'},
{lv:5,sk:'Sentences',s:'___ it was raining, we went for a walk.',a:'Although',o:['Because','So','Unless'],ex:'Concession → although.',tr:'با اینکه باران می‌بارید، پیاده‌روی کردیم.',say:'Although it was raining, we went for a walk.'},
{lv:5,sk:'Sentences',s:'I study hard ___ I can pass the exam.',a:'so that',o:['because','although','despite'],ex:'Purpose → so that.',tr:'سخت درس می‌خوانم تا امتحان را قبول شوم.',say:'I study hard so that I can pass the exam.'},
{lv:5,sk:'Prepositions',s:'___ the bad weather, the flight left on time.',a:'Despite',o:['Although','Because','However'],ex:'despite + noun (no “of”).',tr:'با وجود هوای بد، پرواز به موقع رفت.',say:'Despite the bad weather, the flight left on time.'},
{lv:5,sk:'Adjectives',s:'This is by far the ___ interesting book here.',a:'most',o:['more','much','best'],ex:'Superlative of long adj → the most.',tr:'این جالب‌ترین کتاب اینجاست.',say:'This is by far the most interesting book here.'},
{lv:5,sk:'Verbs',s:'He suggested that she ___ a doctor.',a:'see',o:['sees','saw','seeing'],ex:'suggest that + base form (subjunctive).',tr:'او پیشنهاد داد که او پیش پزشک برود.',say:'He suggested that she see a doctor.'},
{lv:5,sk:'Verbs',s:'I wish I ___ more time for hobbies.',a:'had',o:['have','has','will have'],ex:'wish + past (unreal present) → had.',tr:'کاش برای سرگرمی‌ها وقت بیشتری داشتم.',say:'I wish I had more time for hobbies.'}

];
