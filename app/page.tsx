"use client";

import { useEffect, useState } from "react";

type ObjectCard = {
  id: string;
  label: string;
  note: string;
  src?: string;
  className: string;
};

const objects: ObjectCard[] = [
  {
    id: "can",
    label: "一罐没喝完的夏天",
    note: "ALU / 16:42 / 路边捡到",
    className: "object-can",
  },
  {
    id: "gum",
    label: "薄荷味的五分钟",
    note: "MINT / POCKET ARCHIVE",
    className: "object-gum",
  },
  {
    id: "london",
    label: "伦敦，换乘中",
    note: "TUBE / LONDON / 2024",
    src: "https://commons.wikimedia.org/wiki/Special:Redirect/file/London%20Underground%20Roundel,%20London%20SW1%20-%20geograph.org.uk%20-%204291435.jpg?width=900",
    className: "object-london",
  },
  {
    id: "stop",
    label: "在佛罗伦萨停一下",
    note: "STOP / FIRENZE / 12:08",
    src: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Stop%20sign%20(1).jpg?width=900",
    className: "object-stop",
  },
  {
    id: "berlin",
    label: "柏林地下的蓝",
    note: "POTSDAMER PLATZ / U2",
    src: "https://commons.wikimedia.org/wiki/Special:Redirect/file/U-Bahn%20Berlin%20Potsdamer%20Platz%20Sign.jpg?width=900",
    className: "object-berlin",
  },
  {
    id: "park",
    label: "公园坐到天黑",
    note: "BENCH / SUNDAY / NO PLAN",
    src: "https://commons.wikimedia.org/wiki/Special:Redirect/file/ParkBench.jpg?width=900",
    className: "object-park",
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
          <span>猪没什么</span>
          <span className="title-shift">想不通的</span>
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
              {item.src ? (
                <img src={item.src} alt="" />
              ) : (
                <span className="css-object" aria-hidden="true">
                  {item.id === "can" ? "SPARK" : "MINT / CHEW / REPEAT"}
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
            {activeObject.src ? (
              <img src={activeObject.src} alt={activeObject.label} />
            ) : (
              <span className="css-object">{activeObject.id === "can" ? "SPARK" : "MINT / CHEW / REPEAT"}</span>
            )}
          </div>
          <div className="modal-caption">
            <span>{activeObject.note}</span>
            <h2>{activeObject.label}</h2>
            <p>一件没有必要被记住，但还是被我收进视觉档案里的东西。</p>
          </div>
        </div>
      )}
    </main>
  );
}
