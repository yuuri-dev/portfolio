const projectData = [
  {
    id: 5,
    name: 'Tomareco',
    sub_title: '学習記録アプリ',
    thumbnail: '/images/projects/tomareco/top.png',
    images: [
      '/images/projects/tomareco/1.png',
      '/images/projects/tomareco/2.png',
      '/images/projects/tomareco/3.png',
      '/images/projects/tomareco/4.png',
    ],
    period: '2026年3月',
    description: `初めてのiosアプリです。
    このアプリは可愛いトマトがモチーフとなっている学習記録アプリです。
    記録にかかる時間はたったの5秒！
    登録もいらないので気軽に使えるのが魅力です。`,
    stack: ['React Native', 'Expo'],
    githubUrl: '',
    liveUrl: 'https://apps.apple.com/jp/app/tomareco/id6760455427',
    lpUrl: 'https://yuuri-dev.github.io/tomareco-lp/',
  },
  {
    id: 6,
    name: 'よみサポ',
    sub_title: '読書サポートアプリ',
    thumbnail: '/images/projects/yomisapo/top.png',
    images: [
      '/images/projects/yomisapo/1.png',
      '/images/projects/yomisapo/2.png',
      '/images/projects/yomisapo/3.png',
      '/images/projects/yomisapo/4.png',
      '/images/projects/yomisapo/5.png',
      '/images/projects/yomisapo/6.png',
    ],
    period: '2026年3月',
    description: '',
    stack: ['React Native', 'Expo', 'geminiAPI', 'GoogleBooksAPI'],
    githubUrl: `iosアプリです。読書のお供として、単語の意味を調べたり、読書の記録を残すことができます。`,
    liveUrl:
      'https://apps.apple.com/jp/app/%E3%82%88%E3%81%BF%E3%82%B5%E3%83%9D/id6760947477',
  },
  {
    id: 7,
    name: 'link board',
    sub_title: 'リンクの記録アプリ',
    images: [
      '/images/projects/link_board/1.png',
      '/images/projects/link_board/2.png',
      '/images/projects/link_board/3.png',
    ],
    period: '2025年12月',
    description: `このアプリはよく使うリンクを一覧で表示し、ワンクリックで飛べるアプリです。
    ジャンルごとにリンクを追加できるので、ブラウザがすぐ散らかってしまう方におすすめのアプリとなっています。`,
    stack: ['Next.js', 'Tailwind CSS'],
    githubUrl: '',
    liveUrl: 'https://link-board-theta.vercel.app',
  },
  {
    id: 1,
    name: 'Shifty',
    sub_title: 'シフト自動生成アプリ',
    images: ['/images/projects/shifty.png'],
    period: '2025年8月',
    description: `このアプリは最適なシフトを簡単に出力してくれるアプリケーションです。
まず、主要な機能としてはシフトの入力、必要人数の入力、シフト生成、作成したシフトの出力です。
作成したシフトは、pdfや画像として保存することもできます。`,
    stack: ['Next.js', 'Supabase', 'Tailwind CSS'],
    githubUrl: 'https://github.com/yuuri-dev/Shityj-app0507',
    liveUrl: 'https://shityj-app0507-lylpdj5b0-nextpandas-projects.vercel.app',
  },
  {
    id: 2,
    name: 'Tab譜アプリ',
    sub_title: 'ハッカソンで作成',
    images: ['/images/projects/tabree_top.jpeg'],
    period: '2025年6月',
    description:
      'このアプリは、タブ譜と呼ばれるギターの楽譜を簡単に入力、保存、表示できるアプリです。主要機能としてはタブ譜の入力、表示、検索機能、ランキング表示、いいね機能があります。',
    stack: ['Next.js', 'Markdown'],
    githubUrl: 'https://github.com/yuuri-dev/tabree',
    liveUrl: '',
  },
  {
    id: 3,
    name: 'Motivation Timer',
    sub_title: 'ハッカソンで作成',
    images: ['/images/projects/motibe_timer_top.jpeg'],
    period: '2025年7月',
    description: 'このアプリは....',
    stack: ['Next.js', 'Markdown'],
    githubUrl:
      'https://github.com/geek-2025-07-18-motibe/MotivationTimer_front',
    liveUrl: 'https://motibe-devops-geek202507.github.io/MotivationTimer',
  },
  {
    id: 4,
    name: 'ポートフォリオサイト',
    sub_title: '本サイト',
    images: [
      '/images/projects/portfolio1.png',
      '/images/projects/portfolio2.png',
    ],
    period: '2025年5月',
    description: '本アプリです。',
    stack: ['Next.js', 'React', 'Tailwind CSS'],
    githubUrl: 'https://github.com/yuuri-dev/portfolio',
    liveUrl: 'https://portfolio-two-vert-61.vercel.app',
  },
];

export default projectData;
