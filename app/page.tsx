"use client";

import { useEffect, useState } from "react";

type ObjectCard = {
  id: string;
  label: string;
  note: string;
  description: string[];
  src: string;
  className: string;
};

const objects: ObjectCard[] = [
  {
    id: "berlin",
    label: "人类的地下生活",
    note: "BERLIN / ALEXANDERPLATZ / UNDERGROUND ARCHIVE",
    description: [
      "人类为了提高效率发明了地铁。然后所有人低头看手机，成功回到了一个更孤独的时代。",
      "地铁是城市里最大的公共空间，也是人类假装互不认识的地方。",
    ],
    src: "/hero/berlin.webp",
    className: "object-berlin",
  },
  {
    id: "london",
    label: "通往另一个伦敦",
    note: "LONDON / PUBLIC SUBWAY / TIME CAPSULE",
    description: ["伦敦把时间藏在地下。上面是不断更新的城市，下面是仍在呼吸的百年轨道。"],
    src: "/hero/london.webp",
    className: "object-london",
  },
  {
    id: "florence",
    label: "禁止停车，禁止不了意大利",
    note: "FIRENZE / STREET SIGN / BEAUTIFUL DISORDER",
    description: ["有些国家靠规则维持秩序，意大利靠审美缓解混乱。"],
    src: "/hero/florence.webp",
    className: "object-florence",
  },
  {
    id: "pigeon",
    label: "威尼斯的真正居民",
    note: "VENEZIA / LOCAL RESIDENT / FREE VIEW",
    description: [
      "人们花几千块机票来到这里寻找浪漫，鸽子每天免费获得同样的风景。游客拍照，鸽子营业。",
      "这座城市的商业模式运行了几百年。",
    ],
    src: "/hero/pigeon.webp",
    className: "object-pigeon",
  },
  {
    id: "dog",
    label: "狗比人更懂生活",
    note: "DOG / SUNSHINE / HAPPINESS STUDY",
    description: [
      "人类发明了工作、焦虑和人生规划。狗只需要一块太阳、一顿饭，以及一个愿意摸它的人。",
      "人类研究幸福，狗直接拥有幸福。",
    ],
    src: "/hero/dog.webp",
    className: "object-dog",
  },
  {
    id: "cow",
    label: "牛的凝视",
    note: "COW / MUTUAL OBSERVATION / FIELD NOTE",
    description: ["我本来只是来看牛的。后来发现牛也想看看我。"],
    src: "/hero/cow.webp",
    className: "object-cow",
  },
  {
    id: "scarves",
    label: "人类为什么要挂东西",
    note: "SCARVES / DISPLAY HABIT / DAILY STORAGE",
    description: ["人类拥有无数储存空间，却还是喜欢把一些东西挂出来。"],
    src: "/hero/scarves.webp",
    className: "object-scarves",
  },
  {
    id: "saint",
    label: "他在想什么",
    note: "SAINT / TIME UNKNOWN / SAME QUESTION",
    description: ["好像无论过去多久，人类都在面对同样的问题。"],
    src: "/hero/saint.webp",
    className: "object-saint",
  },
  {
    id: "pisa",
    label: "不要修了，开始收费吧",
    note: "PISA / UNSOLVED PROBLEM / TICKET OFFICE",
    description: ["当你发现一个问题无法解决时，最好的办法可能是：给它取一个名字，建一个售票处。"],
    src: "/hero/pisa.webp",
    className: "object-pisa",
  },
  {
    id: "sheep",
    label: "黑脸的哲学",
    note: "BLACK FACE / GRASS DECISION / FIELD PHILOSOPHY",
    description: ["我们总觉得特别意味着孤独。但对它来说，可能只是今天吃哪块草的问题。"],
    src: "/hero/sheep.webp",
    className: "object-sheep",
  },
];

const categories = [
  {
    id: "browse",
    no: "01",
    title: "随便看看",
    en: "LOOK AROUND",
    color: "#ff4b34",
  },
  {
    id: "ferment",
    no: "02",
    title: "发酵中",
    en: "FERMENTING",
    color: "#d7ff38",
  },
  {
    id: "write",
    no: "03",
    title: "写吧",
    en: "WRITE IT DOWN",
    color: "#1a56ff",
  },
];

const portfolioWorks = [
  { title: "马的2026", src: "/work/look-01.webp" },
  { title: "马年快乐", src: "/work/look-02.webp" },
  { title: "马上好了", src: "/work/look-03.webp" },
  { title: "蘑菇花", src: "/work/look-04.webp" },
  { title: "投喂", src: "/work/look-05.webp" },
  { title: "小孩的画", src: "/work/look-06.webp" },
  { title: "滋个大牙乐", src: "/work/look-07.webp" },
  { title: "咿呀咿呀", src: "/work/look-08.webp" },
];

const constructionWork = { title: "正在施工中", src: "/work/look-09.webp" };

const dailyQuotes = [
  {
    text: "“那个鸡脚筋真的特别好吃，而且你想想，它一盒鸡脚筋才20，但是你点外卖配送费都30了。”\n“因为鸡脚不会走路啊，所以配送费30。”",
  },
  { text: "人人心中一口气，不叹气就会发脾气。" },
  { text: "真理是可以用极少的字说出来的。" },
  { text: "我要当黄磊老师烧的豆角，毒死这个世界。" },
  { text: "好东西不一定是好东西，好朋友确实是好朋友。", credit: "淘气" },
  {
    text: "明明处于失权的情况，却拿着自己被剥削的部分作为掌握权利的谈资。",
    credit: "老八",
  },
  { text: "我们的性教育只强调结果，不强调过程。", credit: "本科宿舍深夜妙谈" },
  { text: "如果幸福是蘑菇屋，那我是何炅。", credit: "水米拉" },
  { text: "穿搭都不行，哪里还能行。", credit: "小麦" },
  { text: "有的老同学突然变成青老年、老中年了。" },
  {
    text: "有些人不需要外界帮助，因为他们自己会把自己安慰好，告诉自己屎也有好吃的地方，然后走向吃屎—被恶心到然后哭闹—继续吃屎的循环。",
    credit: "陈姐",
  },
  {
    text: "其实每个人都不管彼此精神如何，只要每个人都在自己的位置上“运转”就可以了。",
    credit: "王姐",
  },
  { text: "本人理念：放弃向父母索求爱，是爱自己的第一步。" },
  {
    text: "人不能一夜就开花，也不能一夜就落地，所以日子是慢慢过的，既不能拥有很多，也不会什么都无所谓。",
  },
  {
    text: "没事别总随便反思自己，一碰到球可以停一停再踢。人类就喜欢当皮筋，绑着世界也绑着自己。",
  },
];

const writingSections = [
  { id: "daily", no: "01", title: "每日一句", en: "ONE A DAY" },
  { id: "monthly", no: "02", title: "每月一打", en: "A DOZEN A MONTH" },
  { id: "yearly", no: "03", title: "每年一堆", en: "A PILE A YEAR" },
] as const;

const scrollParticles = Array.from({ length: 30 }, (_, index) => ({
  type: (["drop", "bubble", "mushroom"] as const)[index % 3],
  left: (index * 37 + 7) % 96,
  top: (index * 23 + 4) % 88,
  size: 18 + ((index * 13) % 34),
  delay: -((index * 0.31) % 3.6),
  duration: 2.2 + ((index * 0.19) % 2.1),
  drift: -34 + ((index * 17) % 68),
}));

const willowCopy = [
  ["我收集街头碎片、城市噪音、", "电影里的沉默，还有那些", "不知道为什么存在但就是", "很有意思的东西。"],
  ["我不生产答案，只负责提出", "一些让自己困惑的问题。"],
  ["目前生活在陆地上，", "尚未掌握飞行技能。"],
];

export default function Home() {
  const [activeObject, setActiveObject] = useState<ObjectCard | null>(null);
  const [activeCategory, setActiveCategory] = useState<(typeof categories)[number] | null>(null);
  const [activeWritingSection, setActiveWritingSection] = useState<
    (typeof writingSections)[number]["id"] | null
  >(null);
  const [activePortfolioWork, setActivePortfolioWork] = useState<{
    title: string;
    src: string;
  } | null>(null);
  const [bookPage, setBookPage] = useState(0);
  const [bookIntroActive, setBookIntroActive] = useState(false);
  const [bookTurnDirection, setBookTurnDirection] = useState<"next" | "previous">("next");
  const [titleDropped, setTitleDropped] = useState(false);

  useEffect(() => {
    document.body.style.overflow = activeObject || activePortfolioWork ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [activeObject, activePortfolioWork]);

  useEffect(() => {
    if (activeCategory?.id !== "browse") return;

    setBookPage(0);
    setBookTurnDirection("next");
    setBookIntroActive(true);
    const introTimer = window.setTimeout(() => setBookIntroActive(false), 1850);

    return () => window.clearTimeout(introTimer);
  }, [activeCategory]);

  useEffect(() => {
    if (activeWritingSection !== "daily") return;

    const quoteElements = Array.from(document.querySelectorAll<HTMLElement>(".quote-list article"));
    const quoteList = document.querySelector<HTMLElement>(".quote-list");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let frame = 0;
    let lastScrollY = window.scrollY;
    let scrollDirection: "up" | "down" = "down";

    const updateQuoteFocus = () => {
      const viewportHeight = window.innerHeight;
      const viewportCenter = viewportHeight / 2;
      const currentScrollY = window.scrollY;

      if (Math.abs(currentScrollY - lastScrollY) > 1) {
        scrollDirection = currentScrollY < lastScrollY ? "up" : "down";
      }
      lastScrollY = currentScrollY;
      quoteList?.classList.toggle("is-scrolling-up", !reducedMotion && scrollDirection === "up");

      quoteElements.forEach((quote) => {
        if (reducedMotion) {
          quote.style.setProperty("--quote-blur", "0px");
          quote.style.setProperty("--quote-opacity", "1");
          quote.style.setProperty("--quote-scale", "1");
          quote.style.setProperty("--puddle-scale-x", "1");
          quote.style.setProperty("--puddle-scale-y", "1");
          quote.style.setProperty("--puddle-shift", "0px");
          quote.style.setProperty("--puddle-opacity", "0");
          return;
        }

        const rect = quote.getBoundingClientRect();
        const quoteCenter = rect.top + rect.height / 2;
        const distance = Math.abs(quoteCenter - viewportCenter);
        const distanceRatio = distance / viewportHeight;
        const clearZone = 0.2;
        const fadeLimit = 0.58;
        const rawFocus =
          distanceRatio <= clearZone
            ? 1
            : Math.max(0, Math.min(1, 1 - (distanceRatio - clearZone) / (fadeLimit - clearZone)));
        const easedFocus = rawFocus * rawFocus * (3 - 2 * rawFocus);
        const puddleStart = viewportCenter + viewportHeight * clearZone;
        const rawPuddle =
          scrollDirection === "up" && quoteCenter > puddleStart
            ? Math.max(0, Math.min(1, (quoteCenter - puddleStart) / (viewportHeight * 0.42)))
            : 0;
        const puddle = rawPuddle * rawPuddle * (3 - 2 * rawPuddle);

        quote.style.setProperty("--quote-blur", `${((1 - easedFocus) * 18 + puddle * 3).toFixed(2)}px`);
        quote.style.setProperty("--quote-opacity", (0.14 + easedFocus * 0.86).toFixed(3));
        quote.style.setProperty("--quote-scale", (0.97 + easedFocus * 0.03).toFixed(3));
        quote.style.setProperty("--puddle-scale-x", (1 + puddle * 0.58).toFixed(3));
        quote.style.setProperty("--puddle-scale-y", (1 - puddle * 0.82).toFixed(3));
        quote.style.setProperty("--puddle-shift", `${(puddle * 42).toFixed(2)}px`);
        quote.style.setProperty("--puddle-opacity", (puddle * 0.78).toFixed(3));
      });
    };

    const requestUpdate = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(updateQuoteFocus);
    };

    updateQuoteFocus();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);

    return () => {
      cancelAnimationFrame(frame);
      quoteList?.classList.remove("is-scrolling-up");
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
    };
  }, [activeWritingSection]);

  return (
    <main>
      <section className="hero" aria-label="个人作品集首页">
        <header className="topbar">
          <a className="brand" href="#top" aria-label="返回首页">
            史蒂文01
          </a>
          <a href="#works">作品索引 ↘</a>
        </header>

        <div id="top" className={`hero-title ${titleDropped ? "is-dropped" : ""}`}>
          <div className="hero-title-board">
            <img src="/hero/cover-title.webp" alt="猪没什么想不通的" />
          </div>
          <span className="pig-rain" aria-hidden="true">
            {Array.from({ length: 5 }, (_, index) => (
              <i className={`falling-pig pig-${index + 1}`} key={index} />
            ))}
          </span>
          <button
            className="title-press"
            type="button"
            onClick={() => setTitleDropped((dropped) => !dropped)}
            aria-label={titleDropped ? "重新升起封面标题" : "让封面标题掉落"}
          >
            PRESS
          </button>
        </div>

        <p className="hero-index">OBJECTS FROM REAL LIFE / CLICK TO DISTORT / 2026</p>

        <div className="object-field">
          {objects.map((item) => (
            <button
              key={item.id}
              className={`found-object ${item.className}`}
              onClick={() => setActiveObject(item)}
              aria-label={`放大查看：${item.label}`}
            >
              <img src={item.src} alt="" />
              {item.id === "pigeon" && (
                <span className="falling-fries" aria-hidden="true">
                  <i />
                  <i />
                  <i />
                  <i />
                  <i />
                </span>
              )}
              {item.id === "dog" && (
                <span className="dog-head-pop" aria-hidden="true">
                  <img src={item.src} alt="" />
                </span>
              )}
              {item.id === "berlin" && (
                <span className="station-bricks" aria-hidden="true">
                  {Array.from({ length: 10 }, (_, index) => (
                    <i key={index} />
                  ))}
                </span>
              )}
              {item.id === "scarves" && (
                <span className="spark-shower" aria-hidden="true">
                  {Array.from({ length: 12 }, (_, index) => (
                    <i key={index} />
                  ))}
                </span>
              )}
              {item.id === "florence" && (
                <span className="stop-pop" aria-hidden="true">
                  STOP
                </span>
              )}
              {item.id === "saint" && (
                <span className="sleep-zzz" aria-hidden="true">
                  <i>Z</i>
                  <i>Z</i>
                  <i>Z</i>
                </span>
              )}
              <em>{item.note}</em>
            </button>
          ))}
        </div>

        <div className="scroll-note">往下，认识一下 ↘</div>
      </section>

      <section className="about" aria-labelledby="about-title">
        <div>
          <p className="eyebrow">ABOUT / 关于我</p>
          <div
            className="about-title-art"
            id="about-title"
            role="img"
            aria-label="我是一个把普通生活拧出凤梨味道的人"
          >
            <img src="/hero/about-title.png" alt="" />
          </div>
        </div>
        <div
          className="about-copy willow-copy"
          tabIndex={0}
          aria-label="我收集街头碎片、城市噪音、电影里的沉默，还有那些不知道为什么存在但就是很有意思的东西。我不生产答案，只负责提出一些让自己困惑的问题。目前生活在陆地上，尚未掌握飞行技能。"
        >
          {willowCopy.map((paragraph, paragraphIndex) => (
            <p
              className={`willow-paragraph ${paragraphIndex === 2 ? "small-copy" : ""}`}
              key={paragraphIndex}
              aria-hidden="true"
            >
              {paragraph.map((column, columnIndex) => (
                <span
                  className="willow-column"
                  key={columnIndex}
                  style={
                    {
                      "--column-index": columnIndex + paragraphIndex * 3,
                    } as React.CSSProperties
                  }
                >
                  {Array.from(column).map((character, characterIndex) => (
                    <span
                      className="willow-character"
                      key={`${character}-${characterIndex}`}
                      style={
                        {
                          "--char-index": characterIndex,
                          "--column-index": columnIndex + paragraphIndex * 3,
                        } as React.CSSProperties
                      }
                    >
                      {character}
                    </span>
                  ))}
                </span>
              ))}
            </p>
          ))}
        </div>
        <a className="portrait-work-link" href="#works" aria-label="点击个人图片进入作品集">
          <img src="/hero/profile-portrait.webp" alt="史蒂文坐在椅子上拍照的插画" />
          <span className="portrait-arrows" aria-hidden="true">
            {["↘", "→", "↗", "↓", "➜", "↙", "↑", "↖", "→", "↘", "➝", "↓"].map(
              (arrow, index) => (
                <i key={`${arrow}-${index}`}>{arrow}</i>
              ),
            )}
          </span>
        </a>
      </section>

      <section className="works" id="works" aria-labelledby="works-title">
        <div className="works-head">
          <p className="eyebrow">SELECTED WORK / 作品集</p>
          <h2 id="works-title">东西都在这里。</h2>
          <p>点击一个分类进去看看。</p>
        </div>

        {!activeCategory ? (
          <div className="category-list">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => {
                  setActiveCategory(category);
                  setActiveWritingSection(null);
                }}
              >
                <span className="category-no">{category.no}</span>
                <span className="category-title">{category.title}</span>
                <span className="category-en">{category.en}</span>
                <span className="category-arrow">↗</span>
              </button>
            ))}
          </div>
        ) : (
          <div className="category-open">
            <button
              className="back-button"
              onClick={() => {
                setActiveCategory(null);
                setActiveWritingSection(null);
              }}
            >
              ← 返回所有分类
            </button>
            <div className="category-open-title">
              <span>{activeCategory.no}</span>
              <h3>{activeCategory.title}</h3>
              <p>{activeCategory.en}</p>
            </div>
            {activeCategory.id === "browse" && (
              <div className="portfolio-book-section">
                <div className={`portfolio-book ${bookIntroActive ? "is-intro" : ""}`}>
                  <div className="book-volume">
                    <div className="book-left-page">
                      <span>LOOK AROUND / 随便看看</span>
                      <strong>{String(bookPage + 1).padStart(2, "0")}</strong>
                      <h4>《{portfolioWorks[bookPage].title}》</h4>
                      <p>翻一页，看看脑子里又掉出了什么。</p>
                    </div>

                    <button
                      className={`book-right-page turn-${bookTurnDirection}`}
                      key={`${bookPage}-${bookTurnDirection}`}
                      onClick={() => setActivePortfolioWork(portfolioWorks[bookPage])}
                      aria-label={`放大查看《${portfolioWorks[bookPage].title}》`}
                    >
                      <img src={portfolioWorks[bookPage].src} alt={portfolioWorks[bookPage].title} />
                    </button>

                    <div className="rapid-book-pages" aria-hidden="true">
                      {portfolioWorks.map((work, index) => (
                        <span
                          key={work.title}
                          style={{ "--rapid-index": index } as React.CSSProperties}
                        >
                          <img src={work.src} alt="" />
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="book-controls">
                    <button
                      type="button"
                      disabled={bookIntroActive}
                      onClick={() => {
                        setBookTurnDirection("previous");
                        setBookPage((page) => (page - 1 + portfolioWorks.length) % portfolioWorks.length);
                      }}
                    >
                      ← 上一页
                    </button>
                    <span>
                      {String(bookPage + 1).padStart(2, "0")} / {String(portfolioWorks.length).padStart(2, "0")}
                    </span>
                    <button
                      type="button"
                      disabled={bookIntroActive}
                      onClick={() => {
                        setBookTurnDirection("next");
                        setBookPage((page) => (page + 1) % portfolioWorks.length);
                      }}
                    >
                      下一页 →
                    </button>
                  </div>
                </div>

                <div className="construction-tail">
                  <div>
                    <span>TO BE CONTINUED / 未完待续</span>
                    <h4>这一页还没完。</h4>
                    <p>还有很多创意正在施工。</p>
                  </div>
                  <button
                    onClick={() => setActivePortfolioWork(constructionWork)}
                    aria-label="放大查看正在施工中的标牌"
                  >
                    <img src={constructionWork.src} alt="正在施工中" />
                  </button>
                </div>
              </div>
            )}

            {activeCategory.id === "ferment" && (
              <div className="ferment-placeholder" aria-label="发酵中的作品">
                <span aria-hidden="true">•••</span>
                <strong>还在发酵，先别开盖。</strong>
              </div>
            )}

            {activeCategory.id === "write" && !activeWritingSection && (
              <div className="writing-menu">
                {writingSections.map((section) => (
                  <button key={section.id} onClick={() => setActiveWritingSection(section.id)}>
                    <span>{section.no}</span>
                    <strong>{section.title}</strong>
                    <em>{section.en}</em>
                    <i>↗</i>
                  </button>
                ))}
              </div>
            )}

            {activeCategory.id === "write" && activeWritingSection && (
              <div className="writing-open">
                <button className="writing-back" onClick={() => setActiveWritingSection(null)}>
                  ← 返回“写吧”
                </button>

                {activeWritingSection === "daily" && (
                  <div className="quote-list">
                    <div className="up-scroll-effects" aria-hidden="true">
                      {scrollParticles.map((particle, index) => (
                        <i
                          className={`scroll-particle particle-${particle.type}`}
                          key={`${particle.type}-${index}`}
                          style={
                            {
                              left: `${particle.left}%`,
                              top: `${particle.top}%`,
                              "--particle-size": `${particle.size}px`,
                              "--particle-delay": `${particle.delay}s`,
                              "--particle-duration": `${particle.duration}s`,
                              "--particle-drift": `${particle.drift}px`,
                              "--particle-half-drift": `${particle.drift * 0.45}px`,
                              "--particle-drop-width": `${Math.max(5, particle.size * 0.26)}px`,
                            } as React.CSSProperties
                          }
                        />
                      ))}
                    </div>
                    {dailyQuotes.map((quote, index) => (
                      <article key={index}>
                        <span>{String(index + 1).padStart(2, "0")}</span>
                        <p>{quote.text}</p>
                        {quote.credit && <cite>— {quote.credit}</cite>}
                      </article>
                    ))}
                  </div>
                )}

                {activeWritingSection === "monthly" && (
                  <p className="empty-writing">这里空空如也</p>
                )}

                {activeWritingSection === "yearly" && <p className="empty-writing">还在敲</p>}
              </div>
            )}
          </div>
        )}
      </section>

      <footer>
        <span>ZHU STUDIO © 2026</span>
        <span>如果想不通，就先吃饭。</span>
        <a href="mailto:hello@example.com">HELLO@EXAMPLE.COM ↗</a>
      </footer>

      {activeObject && (
        <div
          className={`object-modal object-modal-${activeObject.id}`}
          role="dialog"
          aria-modal="true"
          aria-label={activeObject.label}
        >
          <button className="modal-close" onClick={() => setActiveObject(null)} aria-label="关闭">
            ×
          </button>
          <div className={`modal-object ${activeObject.className}`}>
            <img src={activeObject.src} alt={activeObject.label} />
          </div>
          <div className="modal-caption">
            <span>{activeObject.note}</span>
            <h2>{activeObject.label}</h2>
            {activeObject.description.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      )}

      {activePortfolioWork && (
        <div className="portfolio-lightbox" role="dialog" aria-modal="true" aria-label={activePortfolioWork.title}>
          <button
            className="portfolio-lightbox-close"
            onClick={() => setActivePortfolioWork(null)}
            aria-label="关闭作品大图"
          >
            ×
          </button>
          <img src={activePortfolioWork.src} alt={activePortfolioWork.title} />
          <p>《{activePortfolioWork.title}》</p>
        </div>
      )}
    </main>
  );
}
