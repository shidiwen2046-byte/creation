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
];

const categories = [
  {
    id: "poster",
    no: "01",
    title: "海报",
    en: "POSTERS",
    color: "#ff4b34",
    works: ["失物招领", "夏夜游泳", "噪音也开花", "周日无事发生"],
  },
  {
    id: "emoji",
    no: "02",
    title: "表情包",
    en: "EMOJI PACKS",
    color: "#d7ff38",
    works: ["猪没事", "先吃饭吧", "已读乱回", "今日宜躺平"],
  },
  {
    id: "type",
    no: "03",
    title: "文字类",
    en: "TYPE & WORDS",
    color: "#1a56ff",
    works: ["城市错别字", "慢一点宣言", "生活使用说明", "无意义词典"],
  },
];

export default function Home() {
  const [activeObject, setActiveObject] = useState<ObjectCard | null>(null);
  const [activeCategory, setActiveCategory] = useState<(typeof categories)[number] | null>(null);

  useEffect(() => {
    document.body.style.overflow = activeObject ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [activeObject]);

  return (
    <main>
      <section className="hero" aria-label="个人作品集首页">
        <header className="topbar">
          <a className="brand" href="#top" aria-label="返回首页">
            ZHU—01
          </a>
          <p>视觉设计 / 图像 / 字体 / 一些想不通的事</p>
          <a href="#works">作品索引 ↘</a>
        </header>

        <div id="top" className="hero-title">
          <img src="/hero/cover-title.webp" alt="猪没什么想不通的" />
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
              <em>{item.note}</em>
            </button>
          ))}
        </div>

        <div className="scroll-note">往下，认识一下 ↘</div>
      </section>

      <section className="about" aria-labelledby="about-title">
        <div>
          <p className="eyebrow">ABOUT / 关于我</p>
          <h2 id="about-title">
            我是一名把日常生活
            <br />
            <span>拧一下</span>的视觉设计师。
          </h2>
        </div>
        <div className="about-copy">
          <p>
            我收集街头标识、被揉皱的包装、没说完的话，以及城市里看似无关紧要的颜色。
            然后把它们做成海报、表情、字体和有点奇怪的视觉系统。
          </p>
          <p className="small-copy">目前生活在中国，也在寻找有趣的合作与没有标准答案的问题。</p>
        </div>
        <a className="search-button" href="#works" aria-label="进入作品集">
          <span className="search-icon" aria-hidden="true" />
          <span>SEARCH MY WORK</span>
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
              <button key={category.id} onClick={() => setActiveCategory(category)}>
                <span className="category-no">{category.no}</span>
                <span className="category-title">{category.title}</span>
                <span className="category-en">{category.en}</span>
                <span className="category-arrow">↗</span>
              </button>
            ))}
          </div>
        ) : (
          <div className="category-open">
            <button className="back-button" onClick={() => setActiveCategory(null)}>
              ← 返回所有分类
            </button>
            <div className="category-open-title">
              <span>{activeCategory.no}</span>
              <h3>{activeCategory.title}</h3>
              <p>{activeCategory.en}</p>
            </div>
            <div className="work-grid">
              {activeCategory.works.map((work, index) => (
                <article
                  key={work}
                  className="work-card"
                  style={{ "--card-color": activeCategory.color } as React.CSSProperties}
                >
                  <div className={`work-visual visual-${index + 1}`}>
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <strong>{work}</strong>
                  </div>
                  <p>{work}</p>
                  <span>2024—2026 / 视觉实验</span>
                </article>
              ))}
            </div>
          </div>
        )}
      </section>

      <footer>
        <span>ZHU STUDIO © 2026</span>
        <span>如果想不通，就先吃饭。</span>
        <a href="mailto:hello@example.com">HELLO@EXAMPLE.COM ↗</a>
      </footer>

      {activeObject && (
        <div className="object-modal" role="dialog" aria-modal="true" aria-label={activeObject.label}>
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
    </main>
  );
}
