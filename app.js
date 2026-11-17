(function () {
  const reactSources = [
    'https://cdnjs.cloudflare.com/ajax/libs/react/18.2.0/umd/react.production.min.js',
    'https://cdn.jsdelivr.net/npm/react@18.2.0/umd/react.production.min.js',
    'https://cdn.staticfile.org/react/18.2.0/umd/react.production.min.js',
    'https://lf3-cdn-tos.bytecdntp.com/cdn/expire-1-M/react/18.2.0/umd/react.production.min.js',
    'https://unpkg.com/react@18.2.0/umd/react.production.min.js'
  ];
  const domSources = [
    'https://cdnjs.cloudflare.com/ajax/libs/react-dom/18.2.0/umd/react-dom.production.min.js',
    'https://cdn.jsdelivr.net/npm/react-dom@18.2.0/umd/react-dom.production.min.js',
    'https://cdn.staticfile.org/react-dom/18.2.0/umd/react-dom.production.min.js',
    'https://lf3-cdn-tos.bytecdntp.com/cdn/expire-1-M/react-dom/18.2.0/umd/react-dom.production.min.js',
    'https://unpkg.com/react-dom@18.2.0/umd/react-dom.production.min.js'
  ];
  const root = document.getElementById('root');
  function showError(message) {
    root.innerHTML = '<div style="max-width:760px;margin:12vh auto;padding:32px;background:#fff;border:2px solid #1a1a1a;border-radius:20px;font-family:system-ui,sans-serif;color:#1a1a1a;box-shadow:8px 8px 0 #1a1a1a"><h1 style="font-size:26px;font-weight:900;margin:0 0 14px">页面启动失败 / Unable to start</h1><p style="line-height:1.8">网页样式已加载，但 React 主程序未能启动。请确认网络可以访问 CDN，然后刷新页面。若仍失败，请把此页面截图发给我。</p><p style="font-size:12px;color:#666;overflow-wrap:anywhere">' + String(message || 'Unknown loading error').replace(/[<>]/g,'') + '</p><button onclick="location.reload()" style="margin-top:12px;padding:12px 20px;background:#1a1a1a;color:#fff;border-radius:10px;font-weight:800;cursor:pointer">重新加载 / Reload</button></div>';
  }
  function loadFirstAvailable(urls, label) {
    return new Promise(function (resolve, reject) {
      let index = 0;
      let lastError = null;
      function attempt() {
        if (index >= urls.length) {
          reject(new Error(label + ' CDN 加载失败：' + (lastError || 'all sources unavailable')));
          return;
        }
        const url = urls[index++];
        const script = document.createElement('script');
        let settled = false;
        const timeout = setTimeout(function () {
          if (settled) return;
          settled = true;
          script.remove();
          lastError = 'timeout: ' + url;
          attempt();
        }, 7000);
        script.src = url;
        script.onload = function () {
          if (settled) return;
          settled = true;
          clearTimeout(timeout);
          resolve(url);
        };
        script.onerror = function () {
          if (settled) return;
          settled = true;
          clearTimeout(timeout);
          script.remove();
          lastError = 'blocked: ' + url;
          attempt();
        };
        document.head.appendChild(script);
      }
      attempt();
    });
  }

  loadFirstAvailable(reactSources, 'React')
    .then(function () { return loadFirstAvailable(domSources, 'ReactDOM'); })
    .then(function () {
      if (!window.React || !window.ReactDOM || !window.ReactDOM.createRoot) {
        throw new Error('React / ReactDOM 对象不存在');
      }
      try {
        (function () {

const { useState, useEffect, useRef } = React;
// 多语言字典配置
const I18N_TEXT = {
    zh: {
        title: "犬种档案馆",
        subtitle: "✨ 寻找到与您最契合的小狗吧！ ✨",
        tagline: "毕业设计主题：犬种档案馆与责任启蒙",
        scrollPrompt: "SCROLL TO EXPLORE ↓",
        aboutBtn: "ABOUT / 关于本站",
        aboutTooltip: "关于犬种档案馆",
        archiveNav: "档案",
        archiveTooltip: "气候档案区的犬种",
        archiveZoneNames: { A: "热带", B: "干燥带", C: "温带", D: "亚寒带", E: "寒带" },
        mapNav: "地图",
        mapTooltip: "柯本气候分布地图",
        surveyNav: "测试",
        surveyTooltip: "犬种匹配问卷测试",
        mapScrollPrompt: "继续下滑进入犬种匹配问卷 ↓",
        climateZones: "气候档案区域",
        mapSectionTitle: "WORLD CLIMATE MAP (柯本气候分布地图)",
        mapSectionSub: "💡 点击各大洲气候板块，直达对应气候区犬种档案",
        posterTitle: "气候区主题海报",
        enterArchive: "进入该区档案 →",
        clickToOpenTag: "📂 CLICK TO FLIP / 点击翻开档案 ➔",
        loadingText: "📂 档案解密中 / ARCHIVE LOADING...",
        backToPrev: "← 返回上一页",
        paperTitle: "官方犬种档案名录",
        paperSub: "CLASSIFIED SPECIMEN DOCUMENTS",
        posterFlipHint: "💡 CLICK THE POSTER TO FLIP OPEN ARCHIVE / 点击海报翻开绝密档案",
        // DOG MATCHING SYSTEM / 问卷入口
        bannerTitle: "DOG MATCHING SYSTEM",
        bannerSub: "Find Your Perfect Companion.",
        bannerDesc1: "通过简单的问卷，了解自己的生活条件和饲养准备度，寻找与你最契合的犬种。",
        bannerDesc2: "但在找到你的伙伴之前，请先思考：Are You Ready to Care for a Dog?",
        bannerBtn: "START QUESTIONNAIRE / 开始犬种匹配测试",
        qTitle: "DOG MATCHING SYSTEM",
        qSub: "在选择一只狗狗之前，先了解自己的生活方式、居住环境与饲养能力。每一只狗狗都有自己的需求。",
        part1Title: "PART 01 — LIFESTYLE, ENVIRONMENT & RESPONSIBILITY",
        part2Title: "PART 02 — CARE & RESPONSIBILITY",
        part3Title: "PART 03 — PERSONAL PREFERENCES",
        btnPrev: "上一题", btnNext: "下一题",
        btnSubmit: "CALCULATE MY MATCH / 生成诊断结果",
        calculatingText: "正在计算您的匹配度与准备度...",
        optSelectCountry: "请选择国家", optSelectCity: "请选择城市",
        allCountries: "全部国家 / Select Country", selectCityPrompt: "请选择城市 / Select City",
        cityDetectedZone: "已自动匹配气候区：", cityDatabaseNote: "城市可从全球地名数据库搜索；气候区按坐标和区域特征进行初步估算，仅供参考。",
        unfilledAlert: "请完成所有必答题后再提交！未完成题号：",
        backHome: "返回首页", editAnswers: "修改答案",
        resultTitle1: "RESULT 01 — MY READINESS", resultSub1: "现阶段适养准备度评估",
        resultTitle2: "RESULT 02 — MY DOG MATCH", resultSub2: "犬种匹配推荐结果",
        preAdoptionChecklistTitle: "养犬前必备确认清单 / 养狗须知",
        checklistHousing: "居住许可确认：确认当前居住的公寓或住宅明确允许饲养狗狗。",
        checklistFamily: "家庭成员共识：确认所有共同居住的家人均已知晓并同意迎接狗狗。",
        checklistCare: "医疗与护理便利度确认：确认住宅附近有交通便利、可提供日常及突发宠物医疗与美容护理的医院/机构。",
        checklistAllergy: "过敏原排查确认：确认所有家庭成员均不存在犬只皮毛或唾液过敏情况。",
        badgeBestOwner: "BEST DOG OWNER / 最佳养狗人",
        badgeBestOwnerSub: "READY TO CARE — 你已经为迎接一只狗狗做好了充分准备！",
        notReadyTitle: "NOT READY FOR DOG OWNERSHIP YET",
        notReadySub: "目前，你的生活条件可能还无法充分满足狗狗的日常需求。建议先解决以下问题：",
        noMatchTitle: "NO STRONG MATCH FOUND",
        noMatchSub: "你的饲养准备度较高，但目前的生活条件和个人偏好与现有犬种资料存在一定差距。",
        indivDisclaimerTitle: "A DOG IS MORE THAN ITS BREED.",
        indivDisclaimerText: "本网站展示的犬种数据仅代表一般特征与行为倾向，并不代表每一只狗都会如此。年龄、健康、遗传、社会化与训练都会影响个体表现。匹配指数仅供参考，不是概率或专业评估。部分犬种尚未录入全部细分照护指标，缺失项目按中性参考值处理，不会被当作满分；社交偏好题因犬种资料尚无统一可比评分，暂不计入数值匹配。",
        dim1: "居住环境", dim2: "时间与陪伴能力", dim3: "护理与训练能力", dim4: "经济准备", dim5: "长期责任与照护",
        readinessExcellent: "条件优秀，具备良好饲养准备", readinessMedium: "准备度中等，建议改善部分条件", readinessLow: "目前仍有关键条件需要准备",
        readinessExplanation: "根据住房环境、日常陪伴时间、护理能力、经济准备与长期责任等维度进行综合参考评估。",
        dimScoreTitle: "五大维度得分细分（0–100）", warningTitle: "需要留意的事项：",
        pendingFinance: "目前尚不清楚实际饲养费用，建议先调查日常及突发医疗支出。",
        pendingLongterm: "长期照护计划仍不明确，建议先考虑未来搬家、工作与生活变化。",
        longAway: "每日离家时间较长，建议提前落实可靠的照护安排。",
        pauseFinance: "目前经济条件尚不足以承担日常及突发医疗费用。",
        pauseLongterm: "目前只考虑短期饲养，尚未做好长期照护准备。",
        pauseReadiness: "目前准备度尚未达到建议参考线（80%）。请先改善准备条件，再考虑迎接狗狗。",
        readinessPauseLabel: "目前建议先暂缓饲养",
        matchOverall: "综合匹配", matchPreference: "个人偏好", matchCare: "照护条件", matchClimate: "气候适配",
        originCountry: "原产地", exerciseNeed: "运动需求指数", notRecorded: "尚无数据",
        viewBreedDetails: "查看犬种档案详情", matchingWeights: "犬种匹配权重：照护条件 50%＋气候适配 20%＋个人偏好 30%。适养准备度权重：居住环境 20%＋时间陪伴 30%＋护理训练 15%＋经济准备 15%＋长期责任 20%。",
        qSectionSub1: "生活方式、居住环境与责任准备", qSectionSub2: "饲养能力与责任准备", qSectionSub3: "个人喜好与犬种偏好",
        conceptModalTitle: "关于犬种档案馆 / ARCHIVE CONCEPT",
        conceptP1: "世界上有数百种性格与生活习惯截然不同的小狗，它们带着各自祖先漫长演化出的气候印记，走进人类的都市与家庭。",
        conceptP2: "养狗并非一时兴起的喜爱，而是一场长达十几年的生命约定。我们希望通过充满温度的交互与直观的生命档案，帮助你在遇见那个命中注定的“它”之前，先看清彼此生活的真实轮廓。",
        conceptP3: "真正的爱不是完美匹配，而是在充分了解后的温柔接纳与始终如一的守护。希望这份档案能成为你与小狗之间的一座桥梁，让你在决定牵起牵引绳的那一刻，心中充满确信与温柔。",
        passportTitle: "犬种 ID 护照",
        passportSub: "责任养育启蒙数据档案",
        labelName: "名称",
        labelOrigin: "国籍",
        labelBreedGroup: "犬种组别",
        labelSize: "体型",
        metricSectionTitle: "养育责任与契合度评估",
        statHairLoss: "掉毛程度",
        statPlayfulness: "精力与运动需求",
        statIndependence: "独处适应力 (看家能力)",
        statBarking: "吠叫 / 扰民倾向",
        statTrainability: "易训练度 / 服从度",
        statBeginnerFriendly: "新手推荐指数",
        indepHigh: "适合看家",
        indepLow: "需多陪伴",
        indepMid: "表现中等",
        sortByLabel: "排序方式:",
        sortAsc: "升序",
        sortDesc: "降序",
        sortOptions: {
            size: "体型大小",
            hairLoss: "掉毛程度",
            barking: "吠叫倾向",
            playfulness: "精力与运动需求",
            independence: "独处适应力",
            trainability: "易训练度",
            beginnerFriendly: "新手推荐指数"
        },
        close: "关闭",
        adoptNotice: "★ 提示：领养代替购买，养宠前请审慎评估自身责任与能力！",
        continents: {
            asia: "亚洲 (Asia)",
            europe: "欧洲 (Europe)",
            africa: "非洲 (Africa)",
            northAmerica: "北美洲 (North America)",
            southAmerica: "南美洲 (South America)",
            oceania: "大洋洲 (Oceania)",
            antarctica: "南极洲 (Antarctica)",
            pacific: "太平洋 (Pacific Ocean)",
            atlantic: "大西洋 (Atlantic Ocean)",
            indian: "印度洋 (Indian Ocean)"
        },
        continentTooltips: {
            A: "热带 (A) — 赤道水域与陆地：南美洲 (亚马逊)、非洲中部 (刚果)、亚洲 (东南亚) & 大洋洲北部",
            B: "干燥带 (B) — 副热带高压沙漠/草原：非洲 (撒哈拉)、亚洲 (中东半岛)、大洋洲 (澳洲内陆) & 北美洲沙漠带",
            C: "温带 (C) — 中纬度温和带：欧洲大部分、亚洲 (中国东部/日本)、北美洲 (美国东西海岸) & 大洋洲 (澳洲东南)",
            D: "亚寒带 (D) — 高纬针叶林带 (Taiga)：亚洲 (西伯利亚)、北美洲 (加拿大/阿拉斯加) & 欧洲 (北欧)",
            E: "寒带/极地 (E) — 极地冰原与苔原：北美洲 (格陵兰岛) & 南极洲 (Antarctica全域)"
        }
    },
    jp: {
        title: "犬種マッチング",
        subtitle: "✨ あなたにぴったりのワンちゃんを見つけよう！ ✨",
        tagline: "卒業制作テーマ：犬種マッチングと責任啓発",
        scrollPrompt: "SCROLL TO EXPLORE ↓",
        aboutBtn: "ABOUT / 概要",
        aboutTooltip: "当アーカイブについて",
        archiveNav: "アーカイブ",
        archiveTooltip: "気候帯アーカイブの犬種",
        archiveZoneNames: { A: "熱帯", B: "乾燥帯", C: "温帯", D: "亜寒帯", E: "寒帯" },
        mapNav: "マップ",
        mapTooltip: "ケッペン気候区分マップ",
        surveyNav: "診断",
        surveyTooltip: "犬種マッチング診断",
        mapScrollPrompt: "下にスクロールして犬種マッチング診断へ ↓",
        climateZones: "気候帯アーカイブゾーン",
        mapSectionTitle: "WORLD CLIMATE MAP (ケッペン気候区分)",
        mapSectionSub: "💡 大陸のカラーエリアをクリックすると該当気候帯アーカイブへ移動します",
        posterTitle: "気候テーマポスター",
        enterArchive: "アーカイブを見る →",
        clickToOpenTag: "📂 CLICK TO FLIP / アーカイブを開く ➔",
        loadingText: "📂 アーカイブ解読中 / ARCHIVE LOADING...",
        backToPrev: "← 前のページに戻る",
        paperTitle: "公式犬種アーカイブ目録",
        paperSub: "CLASSIFIED SPECIMEN DOCUMENTS",
        posterFlipHint: "💡 CLICK THE POSTER TO FLIP OPEN ARCHIVE / ポスターをクリックしてアーカイブを開く ➔",
        // DOG MATCHING SYSTEM / 診断システム
        bannerTitle: "DOG MATCHING SYSTEM",
        bannerSub: "Find Your Perfect Companion.",
        bannerDesc1: "簡単な診断を通じて、生活条件や飼育準備度を確認し、相性の良い犬種を探しましょう。",
        bannerDesc2: "パートナーを迎える前に、まず考えてみてください：Are You Ready to Care for a Dog?",
        bannerBtn: "診断を始める / START QUESTIONNAIRE",
        qTitle: "DOG MATCHING SYSTEM",
        qSub: "犬を迎える前に、ライフスタイル・住環境・飼育能力を確認しましょう。犬にはそれぞれ異なるニーズがあります。",
        part1Title: "PART 01 — LIFESTYLE, ENVIRONMENT & RESPONSIBILITY",
        part2Title: "PART 02 — CARE & RESPONSIBILITY",
        part3Title: "PART 03 — PERSONAL PREFERENCES",
        btnPrev: "前の質問", btnNext: "次の質問",
        btnSubmit: "CALCULATE MY MATCH / 診断結果を見る",
        calculatingText: "マッチ度と準備度を計算中...",
        optSelectCountry: "国を選択してください", optSelectCity: "都市を選択してください",
        allCountries: "すべての国 / Select Country", selectCityPrompt: "都市を選択してください / Select City",
        cityDetectedZone: "自動判定された気候帯：", cityDatabaseNote: "世界の地名データベースから都市を検索できます。気候帯は座標と地域特性による概算で、参考情報です。",
        unfilledAlert: "すべての必須質問に回答してください。未回答の番号：",
        backHome: "ホームに戻る", editAnswers: "回答を編集",
        resultTitle1: "RESULT 01 — MY READINESS", resultSub1: "現在の飼育準備度評価",
        resultTitle2: "RESULT 02 — MY DOG MATCH", resultSub2: "犬種マッチング結果",
        preAdoptionChecklistTitle: "犬を迎える前の確認リスト / 飼育の心得",
        checklistHousing: "居住許可の確認：現在のアパートや住宅で、犬の飼育が明確に認められていることを確認してください。",
        checklistFamily: "家族の合意：同居する家族全員が犬を迎えることを知り、同意していることを確認してください。",
        checklistCare: "医療・ケア施設へのアクセス：近隣に日常診療・緊急診療やトリミング等を受けられる、交通の便がよい動物病院・施設があることを確認してください。",
        checklistAllergy: "アレルギーの確認：家族全員に犬の毛や唾液によるアレルギーがないことを確認してください。",
        badgeBestOwner: "BEST DOG OWNER / 最高の飼い主",
        badgeBestOwnerSub: "READY TO CARE — 愛犬を迎える準備が十分に整っています！",
        notReadyTitle: "NOT READY FOR DOG OWNERSHIP YET",
        notReadySub: "現在の生活条件では、犬の日常的なニーズを十分に満たせない可能性があります。まず以下の課題を確認しましょう。",
        noMatchTitle: "NO STRONG MATCH FOUND",
        noMatchSub: "飼育準備度は高いものの、現在の条件や希望に強く一致する犬種データが見つかりませんでした。",
        indivDisclaimerTitle: "A DOG IS MORE THAN ITS BREED.",
        indivDisclaimerText: "掲載データは犬種の一般的な傾向であり、すべての個体に当てはまるものではありません。年齢・健康・遺伝・社会化・トレーニングによって個体差があります。マッチ指数は参考値で、確率や専門的評価ではありません。一部の犬種では詳細な飼育指標が未登録のため、中立的な参考値として扱い、満点とはみなしません。社交性の希望は犬種データに統一された比較指標がないため、数値マッチングには含めていません。",
        dim1: "住環境", dim2: "時間とふれあい", dim3: "お手入れとしつけ", dim4: "経済的準備", dim5: "長期的な責任とケア",
        readinessExcellent: "飼育に向けた準備がよく整っています", readinessMedium: "準備度は中程度です。一部の条件を整えましょう", readinessLow: "迎える前に確認・準備すべき重要な点があります",
        readinessExplanation: "住環境、日々のふれあい時間、ケア能力、経済面、長期的な責任をもとにした参考評価です。",
        dimScoreTitle: "5つの評価項目（0–100）", warningTitle: "確認しておきたい事項：",
        pendingFinance: "実際に必要な飼育費用が不明です。日常費用と緊急医療費を調べましょう。",
        pendingLongterm: "長期的な飼育計画が未確定です。転居や仕事など将来の変化も検討しましょう。",
        longAway: "留守時間が長いため、信頼できるケア体制を事前に整えましょう。",
        pauseFinance: "日常費用や緊急医療費を負担する準備がまだ整っていません。",
        pauseLongterm: "短期間のみの飼育を想定しており、長期的な責任への準備ができていません。",
        pauseReadiness: "準備度が参考基準（80%）に達していません。条件を整えてから犬を迎えることを検討しましょう。",
        readinessPauseLabel: "現在は飼育をいったん見合わせましょう",
        matchOverall: "総合マッチ度", matchPreference: "好みとの一致", matchCare: "飼育条件との一致", matchClimate: "気候適性",
        originCountry: "原産地", exerciseNeed: "運動ニーズ指数", notRecorded: "データ未登録",
        viewBreedDetails: "犬種アーカイブを見る", matchingWeights: "犬種マッチングの配点：飼育条件 50%＋気候適性 20%＋個人の好み 30%。飼育準備度：住環境 20%＋時間・ふれあい 30%＋ケア・しつけ 15%＋経済面 15%＋長期的責任 20%。",
        qSectionSub1: "ライフスタイル・住環境・責任への準備", qSectionSub2: "飼育能力と責任への準備", qSectionSub3: "好みと犬種の希望",
        conceptModalTitle: "アーカイブコンセプト / ARCHIVE CONCEPT",
        conceptP1: "世界には、多様な気候や環境の中で生き抜き、それぞれの歴史を背負って人間とともに歩んできた犬たちがいます。",
        conceptP2: "犬を迎えるということは、単なる憧れや癒やしではなく、一つの命と紡ぐ長い旅の始まりです。私たちは、あたたかみのあるインタラクションと直感的な「命のアーカイブ」を通して、運命のパートナーと出会う前に、お互いが過ごす未来のリアルな輪郭を優しく描き出せる場をつくりました。",
        conceptP3: "本当の愛とは、完璧な条件の一致ではなく、ありのままを深く知った上での受け入れと、変わらない守護です。このアーカイブがあなたと愛犬を繋ぐ架け橋となり、リードを引くその瞬間、あなたの心が確信と優しさで満たされますように。",
        passportTitle: "犬種 ID パスポート",
        passportSub: "責任ある飼育のための啓発データ",
        labelName: "名前",
        labelOrigin: "国籍",
        labelBreedGroup: "犬種",
        labelSize: "体型",
        metricSectionTitle: "養育責任と適合度評価",
        statHairLoss: "抜け毛",
        statPlayfulness: "遊び好き",
        statIndependence: "留守番適性 (独処能力)",
        statBarking: "吠え",
        statTrainability: "しつけやすさ",
        statBeginnerFriendly: "初心者おすすめ度",
        indepHigh: "お留守番向き",
        indepLow: "寂しがり屋",
        indepMid: "普通",
        sortByLabel: "並び替え:",
        sortAsc: "昇順",
        sortDesc: "降順",
        sortOptions: {
            size: "体型サイズ",
            hairLoss: "抜け毛",
            barking: "吠えやすさ",
            playfulness: "運動量・精力",
            independence: "留守番適性",
            trainability: "しつけやすさ",
            beginnerFriendly: "初心者おすすめ度"
        },
        close: "閉じる",
        adoptNotice: "★ 注意：保護犬の譲渡も検討しましょう。お迎え前の慎重な準備を！",
        continents: {
            asia: "アジア (Asia)",
            europe: "ヨーロッパ (Europe)",
            africa: "アフリカ (Africa)",
            northAmerica: "北アメリカ (North America)",
            southAmerica: "南アメリカ (South America)",
            oceania: "オセアニア (Oceania)",
            antarctica: "南極大陸 (Antarctica)",
            pacific: "太平洋 (Pacific Ocean)",
            atlantic: "大西洋 (Atlantic Ocean)",
            indian: "印度洋 (Indian Ocean)"
        },
        continentTooltips: {
            A: "熱帯 (A) — 赤道雨林・サバナ：南アメリカ (アマゾン)、アフリカ中部、アジア (東南アジア)、オセアニア北部",
            B: "乾燥帯 (B) — 砂漠・ステップ：アフリカ (サハラ)、アジア (中東)、オセアニア (豪内陸部)、北アメリカ",
            C: "温帯 (C) — 温帯：ヨーロッパ大半、アジア (東アジア)、北アメリカ沿岸部、オセアニア南東部",
            D: "亜寒帯 (D) — タイガ・亜寒帯：アジア (シベリア)、北アメリカ (カナダ/アラスカ)、ヨーロッパ (北欧)",
            E: "寒帯・極地 (E) — ツンドラ・氷雪：北アメリカ (グリーンランド)、南極大陸全域"
        }
    }
};
// 气候区完整数据（每区 10 只犬种，包含校对后的挪威猎鹿犬等标准日语表达）
const CLIMATE_DATA = [
    {
        id: 'A',
        zoneTag: 'Tropical(A)',
        code: 'A: Tropical Climate',
        nameZh: '热带气候区',
        nameJp: '熱帯気候ゾーン',
        cardBg: '#009B3A',
        cardTextColor: '#FFFFFF',
        accentColor: '#8B4513',
        descZh: '耐热性强，被毛稀疏或单层，适应高湿热环境。',
        descJp: '耐熱性に優れ、被毛は薄いかシングルコートで、高湿度・高温の環境に適応しています。',
        posterImg: 'images/热带海报.jpg',
        breeds: [
            { id: 'chihuahua', nameZh: '吉娃娃', nameJp: 'チワワ', originZh: '墨西哥', originJp: 'メキシコ', fci: 'Group 9 No.218', groupZh: '爱玩犬组', groupJp: '愛玩犬', sizeZh: '小型犬', sizeJp: '小型犬', pixelImg: 'images/犬种像素风图片/吉娃娃_像素风.png', realImg: 'images/犬种写实照片/吉娃娃.png', stats: { hairLoss: 35, playfulness: 70, independence: 25, barking: 75, trainability: 75, beginnerFriendly: 80 } },
            { id: 'basenji', nameZh: '巴仙吉犬', nameJp: 'バセンジー', originZh: '中非', originJp: '中央アフリカ', fci: 'Group 5 No.43', groupZh: '原始犬种组', groupJp: '原始的な犬', sizeZh: '中型犬', sizeJp: '中型犬', pixelImg: 'images/basenji_pixel.png', realImg: 'images/basenji_real.jpg', stats: { hairLoss: 20, playfulness: 75, independence: 75, barking: 15, trainability: 50, beginnerFriendly: 65 } },
            { id: 'fila_brasileiro', nameZh: '巴西菲勒犬', nameJp: 'フィラ・ブラジレイロ', originZh: '巴西', originJp: 'ブラジル', fci: 'Group 2 No.225', groupZh: '护卫犬组', groupJp: '護衛犬', sizeZh: '大型犬', sizeJp: '大型犬', pixelImg: 'images/fila_pixel.png', realImg: 'images/fila_real.jpg', stats: { hairLoss: 45, playfulness: 60, independence: 70, barking: 60, trainability: 65, beginnerFriendly: 30 } },
            { id: 'shar_pei', nameZh: '中国沙皮犬', nameJp: 'シャー・ペイ', originZh: '中国', originJp: '中国', fci: 'Group 2 No.308', groupZh: '獒犬/伴侣犬组', groupJp: 'マスティフ・伴侶犬', sizeZh: '中型犬', sizeJp: '中型犬', pixelImg: 'images/sharpei_pixel.png', realImg: 'images/sharpei_real.jpg', stats: { hairLoss: 30, playfulness: 50, independence: 75, barking: 35, trainability: 60, beginnerFriendly: 55 } },
            { id: 'xoloitzcuintle', nameZh: '墨西哥无毛犬', nameJp: 'ショロイツクインツレ', originZh: '墨西哥', originJp: 'メキシコ', fci: 'Group 5 No.234', groupZh: '原始犬种组', groupJp: '原始的な犬', sizeZh: '中型犬', sizeJp: '中型犬', pixelImg: 'images/犬种像素风图片/墨西哥无毛犬_像素风.png', realImg: 'images/犬种写实照片/墨西哥无毛犬.jpeg', stats: { hairLoss: 5, playfulness: 65, independence: 60, barking: 45, trainability: 75, beginnerFriendly: 70 } },
            { id: 'thai_ridgeback', nameZh: '泰国脊背犬', nameJp: 'タイ・リッジバック', originZh: '泰国', originJp: 'タイ', fci: 'Group 5 No.337', groupZh: '原始猎犬组', groupJp: '原始的な狩猟犬', sizeZh: '中型犬', sizeJp: '中型犬', pixelImg: 'images/thai_ridgeback_pixel.png', realImg: 'images/thai_ridgeback_real.jpg', stats: { hairLoss: 25, playfulness: 70, independence: 80, barking: 40, trainability: 70, beginnerFriendly: 45 } },
            { id: 'poodle', nameZh: '贵宾犬 / 泰迪犬', nameJp: 'プードル', originZh: '法国', originJp: 'フランス', fci: 'Group 9 No.172', groupZh: '伴侣/爱玩犬组', groupJp: '愛玩犬', sizeZh: '小型犬', sizeJp: '小型犬', pixelImg: 'images/犬种像素风图片/贵宾犬_像素风.png', realImg: 'images/犬种写实照片/贵宾犬.jpeg', stats: { hairLoss: 10, playfulness: 90, independence: 30, barking: 55, trainability: 95, beginnerFriendly: 90 } },
            { id: 'peruvian_hairless', nameZh: '秘鲁无毛犬', nameJp: 'ペルービアン・ヘアレス・ドッグ', originZh: '秘鲁', originJp: 'ペルー', fci: 'Group 5 No.310', groupZh: '原始犬种组', groupJp: '原始的な犬', sizeZh: '中型犬', sizeJp: '中型犬', pixelImg: 'images/peruvian_pixel.png', realImg: 'images/peruvian_real.jpg', stats: { hairLoss: 5, playfulness: 60, independence: 65, barking: 35, trainability: 70, beginnerFriendly: 70 } },
            { id: 'rhodesian_ridgeback', nameZh: '罗得西亚脊背犬', nameJp: 'ローデシアン・リッジバック', originZh: '南非/津巴布韦', originJp: 'ジンバブエ', fci: 'Group 6 No.146', groupZh: '猎犬组', groupJp: '狩猟犬', sizeZh: '大型犬', sizeJp: '大型犬', pixelImg: 'images/ridgeback_pixel.png', realImg: 'images/ridgeback_real.jpg', stats: { hairLoss: 40, playfulness: 70, independence: 65, barking: 40, trainability: 80, beginnerFriendly: 50 } },
            { id: 'rastreador_brasileiro', nameZh: '巴西追踪犬', nameJp: 'ハストリアドール・ブラジレイロ', originZh: '巴西', originJp: 'ブラジル', fci: 'Group 6 No.275', groupZh: '嗅觉猎犬组', groupJp: '嗅覚ハウンド', sizeZh: '大型犬', sizeJp: '大型犬', pixelImg: 'images/rastreador_pixel.png', realImg: 'images/rastreador_real.jpg', stats: { hairLoss: 30, playfulness: 75, independence: 70, barking: 70, trainability: 75, beginnerFriendly: 60 } }
        ]
    },
    {
        id: 'B',
        zoneTag: 'Dry Climate(B)',
        code: 'B: Dry Climate',
        nameZh: '干燥带气候区',
        nameJp: '乾燥帯気候ゾーン',
        cardBg: '#EAE511',
        cardTextColor: '#3D2314',
        accentColor: '#D31127',
        descZh: '耐干旱高温，体力充沛，具有出色的奔跑与耐力。',
        descJp: '乾燥や暑さに強く体力豊富で、優れた疾走能力と持久力を備えています。',
        posterImg: 'images/干燥带海报.jpg',
        breeds: [
            { id: 'kelpie', nameZh: '澳大利亚卡尔比犬', nameJp: 'オーストラリアン・ケルピー', originZh: '澳大利亚内陆', originJp: 'オーストラリア', fci: 'Group 1 No.293', groupZh: '牧羊犬组', groupJp: 'シェパード', sizeZh: '中型犬', sizeJp: '中型犬', pixelImg: 'images/犬种像素风图片/澳大利亚卡尔比犬_像素风.png', realImg: 'images/犬种写实照片/澳洲卡尔比.png', stats: { hairLoss: 45, playfulness: 90, independence: 65, barking: 50, trainability: 95, beginnerFriendly: 70 } },
            { id: 'canaan_dog', nameZh: '迦南犬', nameJp: 'カナアン・ドッグ', originZh: '以色列/沙漠', originJp: 'イスラエル', fci: 'Group 5 No.273', groupZh: '原始犬种组', groupJp: '原始的な犬', sizeZh: '中型犬', sizeJp: '中型犬', pixelImg: 'images/canaan_pixel.png', realImg: 'images/canaan_real.jpg', stats: { hairLoss: 40, playfulness: 65, independence: 80, barking: 60, trainability: 70, beginnerFriendly: 50 } },
            { id: 'azawakh', nameZh: '阿萨瓦克犬', nameJp: 'アザワグ', originZh: '马里/撒哈拉', originJp: 'マリ/サハラ', fci: 'Group 10 No.307', groupZh: '视觉猎犬组', groupJp: '視覚ハウンド', sizeZh: '大型犬', sizeJp: '大型犬', pixelImg: 'images/azawakh_pixel.png', realImg: 'images/azawakh_real.jpg', stats: { hairLoss: 15, playfulness: 60, independence: 85, barking: 30, trainability: 60, beginnerFriendly: 40 } },
            { id: 'saluki', nameZh: '萨路基猎犬', nameJp: 'サルーキ', originZh: '中东/阿拉伯沙漠', originJp: '中東', fci: 'Group 10 No.269', groupZh: '视觉猎犬组', groupJp: '視覚ハウンド', sizeZh: '大型犬', sizeJp: '大型犬', pixelImg: 'images/saluki_pixel.png', realImg: 'images/saluki_real.jpg', stats: { hairLoss: 30, playfulness: 70, independence: 75, barking: 25, trainability: 65, beginnerFriendly: 60 } },
            { id: 'kangal', nameZh: '坎高犬', nameJp: 'カンガル・シープドッグ', originZh: '土耳其高原沙漠', originJp: 'トルコ', fci: 'Group 2 No.331', groupZh: '护卫犬组', groupJp: '護衛犬', sizeZh: '超大型犬', sizeJp: '超大型犬', pixelImg: 'images/kangal_pixel.png', realImg: 'images/kangal_real.jpg', stats: { hairLoss: 60, playfulness: 50, independence: 85, barking: 55, trainability: 75, beginnerFriendly: 35 } },
            { id: 'australian_cattle_dog', nameZh: '澳大利亚牧牛犬', nameJp: 'オーストラリアン・キャトル・ドッグ', originZh: '澳大利亚内陆', originJp: 'オーストラリア', fci: 'Group 1 No.287', groupZh: '牧羊犬组', groupJp: 'シェパード', sizeZh: '中型犬', sizeJp: '中型犬', pixelImg: 'images/cattle_dog_pixel.png', realImg: 'images/cattle_dog_real.jpg', stats: { hairLoss: 50, playfulness: 85, independence: 75, barking: 45, trainability: 90, beginnerFriendly: 60 } },
            { id: 'sloughi', nameZh: '斯卢吉犬 (北非猎犬)', nameJp: 'スルーギ', originZh: '摩洛哥/北非', originJp: 'モロッコ', fci: 'Group 10 No.188', groupZh: '视觉猎犬组', groupJp: '視覚ハウンド', sizeZh: '大型犬', sizeJp: '大型犬', pixelImg: 'images/sloughi_pixel.png', realImg: 'images/sloughi_real.jpg', stats: { hairLoss: 20, playfulness: 65, independence: 80, barking: 25, trainability: 60, beginnerFriendly: 45 } },
            { id: 'ibizan_hound', nameZh: '伊比赞猎犬', nameJp: 'アイビザン・ハウンド', originZh: '西班牙岛屿/干旱带', originJp: 'スペイン', fci: 'Group 5 No.89', groupZh: '原始猎犬组', groupJp: '原始的な狩猟犬', sizeZh: '大型犬', sizeJp: '大型犬', pixelImg: 'images/犬种像素风图片/伊比赞猎犬_像素风.png', realImg: 'images/犬种写实照片/伊比赞猎犬.jpeg', stats: { hairLoss: 25, playfulness: 80, independence: 75, barking: 40, trainability: 70, beginnerFriendly: 65 } },
            { id: 'pharaoh_hound', nameZh: '法老王猎犬', nameJp: 'ファラオ・ハウンド', originZh: '马耳他/中东', originJp: 'マルタ', fci: 'Group 5 No.248', groupZh: '原始猎犬组', groupJp: '原始的な狩猟犬', sizeZh: '中型犬', sizeJp: '中型犬', pixelImg: 'images/犬种像素风图片/法老王猎犬_像素风.png', realImg: 'images/犬种写实照片/法老王猎犬.jpeg', stats: { hairLoss: 25, playfulness: 85, independence: 70, barking: 50, trainability: 75, beginnerFriendly: 70 } },
            { id: 'anatolian_shepherd', nameZh: '安纳托利亚牧羊犬', nameJp: 'アナトリアン・シェパード', originZh: '土耳其半干旱高原', originJp: 'トルコ', fci: 'Group 2 No.331', groupZh: '护卫犬组', groupJp: '護衛犬', sizeZh: '超大型犬', sizeJp: '超大型犬', pixelImg: 'images/anatolian_pixel.png', realImg: 'images/anatolian_real.jpg', stats: { hairLoss: 65, playfulness: 45, independence: 90, barking: 60, trainability: 70, beginnerFriendly: 30 } }
        ]
    },
    {
        id: 'C',
        zoneTag: 'Temperate(C)',
        code: 'C: Temperate Climate',
        nameZh: '温带气候区',
        nameJp: '温帯気候ゾーン',
        cardBg: '#2B87FF',
        cardTextColor: '#FFFFFF',
        accentColor: '#E62B1E',
        descZh: '气候温和适应力广，包含极多常见的家庭伴侣犬种。',
        descJp: '穏やかな気候に適応しやすく、身近な家庭伴侶犬が数多く含まれます。',
        posterImg: 'images/温带海报.jpg',
        breeds: [
            { id: 'dobermann', nameZh: '杜宾犬', nameJp: 'ドーベルマン', originZh: '德国', originJp: 'ドイツ', fci: 'Group 2 No.143', groupZh: '护卫/警用犬组', groupJp: '護衛犬', sizeZh: '大型犬', sizeJp: '大型犬', pixelImg: 'images/dobermann_pixel.png', realImg: 'images/犬种写实照片/博美犬.png', stats: { hairLoss: 40, playfulness: 75, independence: 60, barking: 50, trainability: 95, beginnerFriendly: 50 } },
            { id: 'pomeranian', nameZh: '博美犬', nameJp: 'ポメラニアン', originZh: '德国/波兰', originJp: 'ドイツ', fci: 'Group 5 No.97', groupZh: '爱玩犬组', groupJp: '愛玩犬', sizeZh: '小型犬', sizeJp: '小型犬', pixelImg: 'images/犬种像素风图片/博美_像素风.png', realImg: 'images/犬种写实照片/博美犬.png', stats: { hairLoss: 55, playfulness: 70, independence: 20, barking: 75, trainability: 60, beginnerFriendly: 80 } },
            { id: 'german_shepherd', nameZh: '德国牧羊犬', nameJp: 'ジャーマン・シェパード', originZh: '德国', originJp: 'ドイツ', fci: 'Group 1 No.166', groupZh: '牧羊犬组', groupJp: 'シェパード', sizeZh: '大型犬', sizeJp: '大型犬', pixelImg: 'images/犬种像素风图片/德国牧羊犬_像素风.png', realImg: 'images/犬种写实照片/德国牧羊犬.png', stats: { hairLoss: 85, playfulness: 80, independence: 50, barking: 60, trainability: 95, beginnerFriendly: 65 } },
            { id: 'rough_collie', nameZh: '粗毛柯利牧羊犬', nameJp: 'ラフ・コリー', originZh: '英国', originJp: 'イギリス', fci: 'Group 1 No.156', groupZh: '牧羊犬组', groupJp: 'シェパード', sizeZh: '大型犬', sizeJp: '大型犬', pixelImg: 'images/犬种像素风图片/粗毛柯利牧羊犬_像素风.png', realImg: 'images/犬种写实照片/粗毛柯利牧羊犬.png', stats: { hairLoss: 70, playfulness: 70, independence: 50, barking: 85, trainability: 90, beginnerFriendly: 88 } },
            { id: 'bernese_mountain', nameZh: '伯恩山犬', nameJp: 'バーニーズ・マウンテン・ドッグ', originZh: '瑞士', originJp: 'スイス', fci: 'Group 2 No.46', groupZh: '山地护卫犬组', groupJp: '山岳犬', sizeZh: '大型犬', sizeJp: '大型犬', pixelImg: 'images/犬种像素风图片/伯恩山犬_像素风.png', realImg: 'images/犬种写实照片/伯恩山犬.png', stats: { hairLoss: 80, playfulness: 70, independence: 25, barking: 35, trainability: 75, beginnerFriendly: 80 } },
            { id: 'golden_retriever', nameZh: '金毛寻回犬', nameJp: 'ゴールデン・レトリバー', originZh: '英国', originJp: 'イギリス', fci: 'Group 8 No.111', groupZh: '寻回猎犬组', groupJp: 'レトリバー', sizeZh: '大型犬', sizeJp: '大型犬', pixelImg: 'images/golden_pixel.png', realImg: 'images/犬种写实照片/金毛寻回犬.png', stats: { hairLoss: 85, playfulness: 90, independence: 25, barking: 40, trainability: 95, beginnerFriendly: 95 } },
            { id: 'shiba_inu', nameZh: '柴犬', nameJp: '柴犬', originZh: '日本', originJp: '日本', fci: 'Group 5 No.257', groupZh: '小型尖嘴犬组', groupJp: '小型スピッツ', sizeZh: '中型犬', sizeJp: '中型犬', pixelImg: 'images/犬种像素风图片/柴犬_像素风.png', realImg: 'images/犬种写实照片/柴犬.jpeg', stats: { hairLoss: 80, playfulness: 65, independence: 85, barking: 45, trainability: 60, beginnerFriendly: 55 } },
            { id: 'border_collie', nameZh: '边境牧羊犬', nameJp: 'ボーダー・コリー', originZh: '英国', originJp: 'イギリス', fci: 'Group 1 No.297', groupZh: '牧羊犬组', groupJp: 'シェパード', sizeZh: '中型犬', sizeJp: '中型犬', pixelImg: 'images/bordercollie_pixel.png', realImg: 'images/bordercollie_real.jpg', stats: { hairLoss: 75, playfulness: 95, independence: 40, barking: 60, trainability: 100, beginnerFriendly: 70 } },
            { id: 'rottweiler', nameZh: '罗威纳犬', nameJp: 'ロッテクワイラー', originZh: '德国', originJp: 'ドイツ', fci: 'Group 2 No.147', groupZh: '护卫/工作犬组', groupJp: '作業犬', sizeZh: '大型犬', sizeJp: '大型犬', pixelImg: 'images/rottweiler_pixel.png', realImg: 'images/rottweiler_real.jpg', stats: { hairLoss: 50, playfulness: 70, independence: 60, barking: 50, trainability: 90, beginnerFriendly: 50 } },
            { id: 'beagle', nameZh: '比格犬', nameJp: 'ビーグル', originZh: '英国', originJp: 'イギリス', fci: 'Group 6 No.163', groupZh: '嗅觉猎犬组', groupJp: '嗅覚ハウンド', sizeZh: '小型犬', sizeJp: '小型犬', pixelImg: 'images/beagle_pixel.png', realImg: 'images/beagle_real.jpg', stats: { hairLoss: 60, playfulness: 95, independence: 50, barking: 90, trainability: 65, beginnerFriendly: 75 } }
        ]
    },
    {
        id: 'D',
        zoneTag: 'Continental(D)',
        code: 'D: Continental Climate',
        nameZh: '亚寒带气候区',
        nameJp: '亜寒帯気候ゾーン',
        cardBg: '#4A76C6',
        cardTextColor: '#FFFFFF',
        accentColor: '#8E8CD8',
        descZh: '双层厚重被毛，能抵御严寒，需要较大的活动空间。',
        descJp: '厚いダブルコートで極寒に耐えることができ、広い運動スペースを必要とします。',
        posterImg: 'images/亚寒带海报.jpg',
        breeds: [
            { id: 'siberian_husky', nameZh: '西伯利亚哈士奇', nameJp: 'シベリアン・ハスキー', originZh: '俄罗斯西伯利亚', originJp: 'ロシア・シベリア', fci: 'Group 5 No.270', groupZh: '极地雪橇犬组', groupJp: 'ソリ犬', sizeZh: '中型犬', sizeJp: '中型犬', pixelImg: 'images/犬种像素风图片/西伯利亚哈士奇_像素风.png', realImg: 'images/犬种写实照片/西伯利亚哈士奇.png', stats: { hairLoss: 90, playfulness: 95, independence: 75, barking: 70, trainability: 65, beginnerFriendly: 50 } },
            { id: 'czechoslovakian_wolfdog', nameZh: '捷克斯洛伐克狼犬', nameJp: 'チェコスロバキアン・ウルフドッグ', originZh: '前捷克斯洛伐克', originJp: '旧チェコスロバキア', fci: 'Group 1 No.332', groupZh: '工作牧羊犬组', groupJp: 'シェパード', sizeZh: '大型犬', sizeJp: '大型犬', pixelImg: 'images/wolfdog_pixel.png', realImg: 'images/犬种写实照片/捷克斯洛伐克狼犬.png', stats: { hairLoss: 80, playfulness: 80, independence: 85, barking: 40, trainability: 70, beginnerFriendly: 15 } },
            { id: 'labrador', nameZh: '拉布拉多寻回犬', nameJp: 'ラブラドール・レトリバー', originZh: '加拿大', originJp: 'カナダ', fci: 'Group 8 No.122', groupZh: '寻回猎犬组', groupJp: 'レトリバー', sizeZh: '大型犬', sizeJp: '大型犬', pixelImg: 'images/犬种像素风图片/拉布拉多寻回犬_像素风.png', realImg: 'images/犬种写实照片/拉布拉多寻回犬.png', stats: { hairLoss: 75, playfulness: 90, independence: 30, barking: 35, trainability: 95, beginnerFriendly: 95 } },
            { id: 'akita', nameZh: '秋田犬', nameJp: '秋田犬', originZh: '日本秋田县', originJp: '日本', fci: 'Group 5 No.255', groupZh: '大型尖嘴犬组', groupJp: '大型スピッツ', sizeZh: '大型犬', sizeJp: '大型犬', pixelImg: 'images/犬种像素风图片/秋田犬_像素风.png', realImg: 'images/犬种写实照片/秋田犬.jpeg', stats: { hairLoss: 85, playfulness: 55, independence: 85, barking: 30, trainability: 65, beginnerFriendly: 40 } },
            { id: 'saint_bernard', nameZh: '圣伯纳犬', nameJp: 'セント・バーナード', originZh: '瑞士阿尔卑斯山脉', originJp: 'スイス', fci: 'Group 2 No.61', groupZh: '山地救援犬组', groupJp: '山岳救助犬', sizeZh: '超大型犬', sizeJp: '超大型犬', pixelImg: 'images/stbernard_pixel.png', realImg: 'images/stbernard_real.jpg', stats: { hairLoss: 85, playfulness: 60, independence: 30, barking: 40, trainability: 75, beginnerFriendly: 75 } },
            { id: 'newfoundland', nameZh: '纽芬兰犬', nameJp: 'ニューファンドランド', originZh: '加拿大纽芬兰', originJp: 'カナダ', fci: 'Group 2 No.50', groupZh: '水上救援犬组', groupJp: '水難救助犬', sizeZh: '超大型犬', sizeJp: '超大型犬', pixelImg: 'images/newfoundland_pixel.png', realImg: 'images/newfoundland_real.jpg', stats: { hairLoss: 90, playfulness: 70, independence: 35, barking: 30, trainability: 85, beginnerFriendly: 80 } },
            { id: 'giant_schnauzer', nameZh: '巨型雪纳瑞犬', nameJp: 'ジャイアント・シュナウザー', originZh: '德国南部山地', originJp: 'ドイツ', fci: 'Group 2 No.181', groupZh: '工作护卫犬组', groupJp: '作業犬', sizeZh: '大型犬', sizeJp: '大型犬', pixelImg: 'images/giantschnauzer_pixel.png', realImg: 'images/giantschnauzer_real.jpg', stats: { hairLoss: 40, playfulness: 75, independence: 65, barking: 50, trainability: 85, beginnerFriendly: 55 } },
            { id: 'jamthund', nameZh: '瑞典猎熊犬', nameJp: 'イェムトフンド', originZh: '瑞典', originJp: 'スウェーデン', fci: 'Group 5 No.42', groupZh: '北欧猎犬组', groupJp: '北欧狩猟犬', sizeZh: '大型犬', sizeJp: '大型犬', pixelImg: 'images/jamthund_pixel.png', realImg: 'images/jamthund_real.jpg', stats: { hairLoss: 80, playfulness: 65, independence: 80, barking: 60, trainability: 75, beginnerFriendly: 45 } },
            { id: 'east_siberian_laika', nameZh: '东西伯利亚拉伊卡犬', nameJp: 'イースト・シベリアン・ライカ', originZh: '俄罗斯西伯利亚', originJp: 'ロシア', fci: 'Group 5 No.305', groupZh: '极地猎犬组', groupJp: '狩猟犬', sizeZh: '大型犬', sizeJp: '大型犬', pixelImg: 'images/laika_pixel.png', realImg: 'images/laika_real.jpg', stats: { hairLoss: 85, playfulness: 70, independence: 85, barking: 65, trainability: 70, beginnerFriendly: 35 } },
            { id: 'eurasier', nameZh: '欧亚犬', nameJp: 'ユーラシア', originZh: '德国', originJp: 'ドイツ', fci: 'Group 5 No.291', groupZh: '伴侣尖嘴犬组', groupJp: 'スピッツ', sizeZh: '中型犬', sizeJp: '中型犬', pixelImg: 'images/eurasier_pixel.png', realImg: 'images/eurasier_real.jpg', stats: { hairLoss: 75, playfulness: 70, independence: 45, barking: 30, trainability: 80, beginnerFriendly: 85 } }
        ]
    },
    {
        id: 'E',
        zoneTag: 'Polar(E)',
        code: 'E: Polar Climate',
        nameZh: '寒带/极地气候区',
        nameJp: '寒帯・極地気候ゾーン',
        cardBg: '#15B9F6',
        cardTextColor: '#FFFFFF',
        accentColor: '#78A7FF',
        descZh: '防风雪双层毛皮与厚实脂肪层，耐极寒，极度怕热。',
        descJp: '防雪ダブルコートと厚い脂肪層を持ち、極寒に耐えられますが暑さには弱いです。',
        posterImg: 'images/寒带海报.jpg',
        breeds: [
            { id: 'samoyed', nameZh: '萨摩耶犬', nameJp: 'サモエド', originZh: '俄罗斯西伯利亚极地', originJp: 'ロシア', fci: 'Group 5 No.212', groupZh: '北极雪橇犬组', groupJp: '北極ソリ犬', sizeZh: '中型犬', sizeJp: '中型犬', pixelImg: 'images/犬种像素风图片/萨摩耶_像素风.png', realImg: 'images/犬种写实照片/萨摩耶.png', stats: { hairLoss: 95, playfulness: 85, independence: 40, barking: 65, trainability: 80, beginnerFriendly: 60 } },
            { id: 'malamute', nameZh: '阿拉斯加雪橇犬', nameJp: 'アラスカン・マラミュート', originZh: '美国阿拉斯加', originJp: 'アメリカ', fci: 'Group 5 No.243', groupZh: '北极雪橇犬组', groupJp: '北極ソリ犬', sizeZh: '大型犬', sizeJp: '大型犬', pixelImg: 'images/malamute_pixel.png', realImg: 'images/malamute_real.jpg', stats: { hairLoss: 90, playfulness: 85, independence: 65, barking: 55, trainability: 75, beginnerFriendly: 40 } },
            { id: 'greenland_dog', nameZh: '格陵兰犬', nameJp: 'グリーンランド・ドッグ', originZh: '格陵兰极地', originJp: 'グリーンランド', fci: 'Group 5 No.274', groupZh: '北极雪橇犬组', groupJp: '北極ソリ犬', sizeZh: '大型犬', sizeJp: '大型犬', pixelImg: 'images/greenland_pixel.png', realImg: 'images/greenland_real.jpg', stats: { hairLoss: 90, playfulness: 70, independence: 80, barking: 60, trainability: 60, beginnerFriendly: 40 } },
            { id: 'canadian_eskimo_dog', nameZh: '加拿大爱斯基摩犬', nameJp: 'カナディアン・エスキモー・ドッグ', originZh: '加拿大北极圈', originJp: 'カナダ北極圏', fci: 'Group 5 No.211', groupZh: '北极雪橇犬组', groupJp: '北極ソリ犬', sizeZh: '大型犬', sizeJp: '大型犬', pixelImg: 'images/canadian_eskimo_pixel.png', realImg: 'images/canadian_eskimo_real.jpg', stats: { hairLoss: 90, playfulness: 65, independence: 85, barking: 50, trainability: 65, beginnerFriendly: 35 } },
            { id: 'norwegian_elkhound', nameZh: '挪威猎鹿犬', nameJp: 'ノルウェジアン・エルクハウンド・グレー', originZh: '挪威', originJp: 'ノルウェー', fci: 'Group 5 No.242', groupZh: '北欧猎犬组', groupJp: '北欧狩猟犬', sizeZh: '中型犬', sizeJp: '中型犬', pixelImg: 'images/norwegian_elkhound_pixel.png', realImg: 'images/norwegian_elkhound_real.jpg', stats: { hairLoss: 80, playfulness: 75, independence: 70, barking: 70, trainability: 80, beginnerFriendly: 60 } },
            { id: 'karelian_bear_dog', nameZh: '卡累利阿猎熊犬', nameJp: 'カレリアン・ベア・ドッグ', originZh: '芬兰/俄罗斯', originJp: 'フィンランド', fci: 'Group 5 No.48', groupZh: '北欧猎犬组', groupJp: '北欧狩猟犬', sizeZh: '中型犬', sizeJp: '中型犬', pixelImg: 'images/karelian_bear_pixel.png', realImg: 'images/karelian_bear_real.jpg', stats: { hairLoss: 75, playfulness: 60, independence: 85, barking: 65, trainability: 70, beginnerFriendly: 30 } },
            { id: 'finnish_lapphund', nameZh: '芬兰拉普兰犬', nameJp: 'フィンランド・ラップハウンド', originZh: '芬兰拉普兰北极圈', originJp: 'フィンランド', fci: 'Group 5 No.189', groupZh: '北欧牧羊犬组', groupJp: '北欧牧羊犬', sizeZh: '中型犬', sizeJp: '中型犬', pixelImg: 'images/finnish_lapphund_pixel.png', realImg: 'images/finnish_lapphund_real.jpg', stats: { hairLoss: 85, playfulness: 80, independence: 50, barking: 55, trainability: 85, beginnerFriendly: 80 } },
            { id: 'yakutian_laika', nameZh: '雅库特拉伊卡犬', nameJp: 'ヤクーチアン・ライカ', originZh: '俄罗斯雅库特极地', originJp: 'ロシア', fci: 'Group 5 No.365', groupZh: '极地雪橇犬组', groupJp: 'ソリ犬', sizeZh: '中型犬', sizeJp: '中型犬', pixelImg: 'images/yakutian_laika_pixel.png', realImg: 'images/yakutian_laika_real.jpg', stats: { hairLoss: 85, playfulness: 80, independence: 60, barking: 45, trainability: 80, beginnerFriendly: 70 } },
            { id: 'icelandic_sheepdog', nameZh: '冰岛牧羊犬', nameJp: 'アイスランド・シープドッグ', originZh: '冰岛', originJp: 'アイスランド', fci: 'Group 5 No.289', groupZh: '北欧牧羊犬组', groupJp: '北欧牧羊犬', sizeZh: '中型犬', sizeJp: '中型犬', pixelImg: 'images/犬种像素风图片/冰岛牧羊犬_像素风.png', realImg: 'images/犬种写实照片/冰岛牧羊犬.jpeg', stats: { hairLoss: 75, playfulness: 85, independence: 40, barking: 75, trainability: 85, beginnerFriendly: 85 } },
            { id: 'finnish_spitz', nameZh: '芬兰尖嘴犬', nameJp: 'フィンリッシュ・スピッツ', originZh: '芬兰', originJp: 'フィンランド', fci: 'Group 5 No.49', groupZh: '北欧猎犬组', groupJp: '北欧狩猟犬', sizeZh: '中型犬', sizeJp: '中型犬', pixelImg: 'images/finnish_spitz_pixel.png', realImg: 'images/finnish_spitz_real.jpg', stats: { hairLoss: 70, playfulness: 85, independence: 60, barking: 85, trainability: 75, beginnerFriendly: 65 } }
        ]
    }
];
// 国家名称采用 ISO 3166-1 国家/地区代码，并由 Babel 本地化为中文、日文。
const GLOBAL_COUNTRIES_DATABASE = [{"countryCode":"CN","countryZh":"中国","countryJp":"中国"},{"countryCode":"JP","countryZh":"日本","countryJp":"日本"},{"countryCode":"US","countryZh":"美国","countryJp":"アメリカ合衆国"},{"countryCode":"DE","countryZh":"德国","countryJp":"ドイツ"},{"countryCode":"GB","countryZh":"英国","countryJp":"イギリス"},{"countryCode":"BT","countryZh":"不丹","countryJp":"ブータン"},{"countryCode":"TL","countryZh":"东帝汶","countryJp":"東ティモール"},{"countryCode":"MO","countryZh":"中国澳门特别行政区","countryJp":"中華人民共和国マカオ特別行政区"},{"countryCode":"HK","countryZh":"中国香港特别行政区","countryJp":"中華人民共和国香港特別行政区"},{"countryCode":"CF","countryZh":"中非共和国","countryJp":"中央アフリカ共和国"},{"countryCode":"DK","countryZh":"丹麦","countryJp":"デンマーク"},{"countryCode":"UA","countryZh":"乌克兰","countryJp":"ウクライナ"},{"countryCode":"UZ","countryZh":"乌兹别克斯坦","countryJp":"ウズベキスタン"},{"countryCode":"UG","countryZh":"乌干达","countryJp":"ウガンダ"},{"countryCode":"UY","countryZh":"乌拉圭","countryJp":"ウルグアイ"},{"countryCode":"TD","countryZh":"乍得","countryJp":"チャド"},{"countryCode":"YE","countryZh":"也门","countryJp":"イエメン"},{"countryCode":"AM","countryZh":"亚美尼亚","countryJp":"アルメニア"},{"countryCode":"IL","countryZh":"以色列","countryJp":"イスラエル"},{"countryCode":"IQ","countryZh":"伊拉克","countryJp":"イラク"},{"countryCode":"IR","countryZh":"伊朗","countryJp":"イラン"},{"countryCode":"BZ","countryZh":"伯利兹","countryJp":"ベリーズ"},{"countryCode":"CV","countryZh":"佛得角","countryJp":"カーボベルデ"},{"countryCode":"RU","countryZh":"俄罗斯","countryJp":"ロシア"},{"countryCode":"BG","countryZh":"保加利亚","countryJp":"ブルガリア"},{"countryCode":"HR","countryZh":"克罗地亚","countryJp":"クロアチア"},{"countryCode":"GU","countryZh":"关岛","countryJp":"グアム"},{"countryCode":"GM","countryZh":"冈比亚","countryJp":"ガンビア"},{"countryCode":"IS","countryZh":"冰岛","countryJp":"アイスランド"},{"countryCode":"GN","countryZh":"几内亚","countryJp":"ギニア"},{"countryCode":"GW","countryZh":"几内亚比绍","countryJp":"ギニアビサウ"},{"countryCode":"LI","countryZh":"列支敦士登","countryJp":"リヒテンシュタイン"},{"countryCode":"CG","countryZh":"刚果（布）","countryJp":"コンゴ共和国(ブラザビル)"},{"countryCode":"CD","countryZh":"刚果（金）","countryJp":"コンゴ民主共和国(キンシャサ)"},{"countryCode":"LY","countryZh":"利比亚","countryJp":"リビア"},{"countryCode":"LR","countryZh":"利比里亚","countryJp":"リベリア"},{"countryCode":"CA","countryZh":"加拿大","countryJp":"カナダ"},{"countryCode":"GH","countryZh":"加纳","countryJp":"ガーナ"},{"countryCode":"GA","countryZh":"加蓬","countryJp":"ガボン"},{"countryCode":"HU","countryZh":"匈牙利","countryJp":"ハンガリー"},{"countryCode":"MK","countryZh":"北马其顿","countryJp":"北マケドニア"},{"countryCode":"MP","countryZh":"北马里亚纳群岛","countryJp":"北マリアナ諸島"},{"countryCode":"GS","countryZh":"南乔治亚和南桑威奇群岛","countryJp":"サウスジョージア・サウスサンドウィッチ諸島"},{"countryCode":"AQ","countryZh":"南极洲","countryJp":"南極"},{"countryCode":"SS","countryZh":"南苏丹","countryJp":"南スーダン"},{"countryCode":"ZA","countryZh":"南非","countryJp":"南アフリカ"},{"countryCode":"BW","countryZh":"博茨瓦纳","countryJp":"ボツワナ"},{"countryCode":"QA","countryZh":"卡塔尔","countryJp":"カタール"},{"countryCode":"RW","countryZh":"卢旺达","countryJp":"ルワンダ"},{"countryCode":"LU","countryZh":"卢森堡","countryJp":"ルクセンブルク"},{"countryCode":"IN","countryZh":"印度","countryJp":"インド"},{"countryCode":"ID","countryZh":"印度尼西亚","countryJp":"インドネシア"},{"countryCode":"GT","countryZh":"危地马拉","countryJp":"グアテマラ"},{"countryCode":"EC","countryZh":"厄瓜多尔","countryJp":"エクアドル"},{"countryCode":"ER","countryZh":"厄立特里亚","countryJp":"エリトリア"},{"countryCode":"SY","countryZh":"叙利亚","countryJp":"シリア"},{"countryCode":"CU","countryZh":"古巴","countryJp":"キューバ"},{"countryCode":"TW","countryZh":"台湾","countryJp":"台湾"},{"countryCode":"KG","countryZh":"吉尔吉斯斯坦","countryJp":"キルギス"},{"countryCode":"DJ","countryZh":"吉布提","countryJp":"ジブチ"},{"countryCode":"KZ","countryZh":"哈萨克斯坦","countryJp":"カザフスタン"},{"countryCode":"CO","countryZh":"哥伦比亚","countryJp":"コロンビア"},{"countryCode":"CR","countryZh":"哥斯达黎加","countryJp":"コスタリカ"},{"countryCode":"CM","countryZh":"喀麦隆","countryJp":"カメルーン"},{"countryCode":"TV","countryZh":"图瓦卢","countryJp":"ツバル"},{"countryCode":"TM","countryZh":"土库曼斯坦","countryJp":"トルクメニスタン"},{"countryCode":"TR","countryZh":"土耳其","countryJp":"トルコ"},{"countryCode":"LC","countryZh":"圣卢西亚","countryJp":"セントルシア"},{"countryCode":"KN","countryZh":"圣基茨和尼维斯","countryJp":"セントクリストファー・ネーヴィス"},{"countryCode":"ST","countryZh":"圣多美和普林西比","countryJp":"サントメ・プリンシペ"},{"countryCode":"BL","countryZh":"圣巴泰勒米","countryJp":"サン・バルテルミー"},{"countryCode":"VC","countryZh":"圣文森特和格林纳丁斯","countryJp":"セントビンセント及びグレナディーン諸島"},{"countryCode":"PM","countryZh":"圣皮埃尔和密克隆群岛","countryJp":"サンピエール島・ミクロン島"},{"countryCode":"CX","countryZh":"圣诞岛","countryJp":"クリスマス島"},{"countryCode":"SH","countryZh":"圣赫勒拿","countryJp":"セントヘレナ"},{"countryCode":"SM","countryZh":"圣马力诺","countryJp":"サンマリノ"},{"countryCode":"GY","countryZh":"圭亚那","countryJp":"ガイアナ"},{"countryCode":"TZ","countryZh":"坦桑尼亚","countryJp":"タンザニア"},{"countryCode":"EG","countryZh":"埃及","countryJp":"エジプト"},{"countryCode":"ET","countryZh":"埃塞俄比亚","countryJp":"エチオピア"},{"countryCode":"KI","countryZh":"基里巴斯","countryJp":"キリバス"},{"countryCode":"TJ","countryZh":"塔吉克斯坦","countryJp":"タジキスタン"},{"countryCode":"SN","countryZh":"塞内加尔","countryJp":"セネガル"},{"countryCode":"RS","countryZh":"塞尔维亚","countryJp":"セルビア"},{"countryCode":"SL","countryZh":"塞拉利昂","countryJp":"シエラレオネ"},{"countryCode":"CY","countryZh":"塞浦路斯","countryJp":"キプロス"},{"countryCode":"SC","countryZh":"塞舌尔","countryJp":"セーシェル"},{"countryCode":"MX","countryZh":"墨西哥","countryJp":"メキシコ"},{"countryCode":"TG","countryZh":"多哥","countryJp":"トーゴ"},{"countryCode":"DM","countryZh":"多米尼克","countryJp":"ドミニカ国"},{"countryCode":"DO","countryZh":"多米尼加共和国","countryJp":"ドミニカ共和国"},{"countryCode":"AX","countryZh":"奥兰群岛","countryJp":"オーランド諸島"},{"countryCode":"AT","countryZh":"奥地利","countryJp":"オーストリア"},{"countryCode":"VE","countryZh":"委内瑞拉","countryJp":"ベネズエラ"},{"countryCode":"BD","countryZh":"孟加拉国","countryJp":"バングラデシュ"},{"countryCode":"AO","countryZh":"安哥拉","countryJp":"アンゴラ"},{"countryCode":"AI","countryZh":"安圭拉","countryJp":"アンギラ"},{"countryCode":"AG","countryZh":"安提瓜和巴布达","countryJp":"アンティグア・バーブーダ"},{"countryCode":"AD","countryZh":"安道尔","countryJp":"アンドラ"},{"countryCode":"FM","countryZh":"密克罗尼西亚","countryJp":"ミクロネシア連邦"},{"countryCode":"NI","countryZh":"尼加拉瓜","countryJp":"ニカラグア"},{"countryCode":"NG","countryZh":"尼日利亚","countryJp":"ナイジェリア"},{"countryCode":"NE","countryZh":"尼日尔","countryJp":"ニジェール"},{"countryCode":"NP","countryZh":"尼泊尔","countryJp":"ネパール"},{"countryCode":"PS","countryZh":"巴勒斯坦领土","countryJp":"パレスチナ自治区"},{"countryCode":"BS","countryZh":"巴哈马","countryJp":"バハマ"},{"countryCode":"PK","countryZh":"巴基斯坦","countryJp":"パキスタン"},{"countryCode":"BB","countryZh":"巴巴多斯","countryJp":"バルバドス"},{"countryCode":"PG","countryZh":"巴布亚新几内亚","countryJp":"パプアニューギニア"},{"countryCode":"PY","countryZh":"巴拉圭","countryJp":"パラグアイ"},{"countryCode":"PA","countryZh":"巴拿马","countryJp":"パナマ"},{"countryCode":"BH","countryZh":"巴林","countryJp":"バーレーン"},{"countryCode":"BR","countryZh":"巴西","countryJp":"ブラジル"},{"countryCode":"BF","countryZh":"布基纳法索","countryJp":"ブルキナファソ"},{"countryCode":"BI","countryZh":"布隆迪","countryJp":"ブルンジ"},{"countryCode":"BV","countryZh":"布韦岛","countryJp":"ブーベ島"},{"countryCode":"GR","countryZh":"希腊","countryJp":"ギリシャ"},{"countryCode":"PW","countryZh":"帕劳","countryJp":"パラオ"},{"countryCode":"CK","countryZh":"库克群岛","countryJp":"クック諸島"},{"countryCode":"CW","countryZh":"库拉索","countryJp":"キュラソー"},{"countryCode":"KY","countryZh":"开曼群岛","countryJp":"ケイマン諸島"},{"countryCode":"IT","countryZh":"意大利","countryJp":"イタリア"},{"countryCode":"SB","countryZh":"所罗门群岛","countryJp":"ソロモン諸島"},{"countryCode":"TK","countryZh":"托克劳","countryJp":"トケラウ"},{"countryCode":"LV","countryZh":"拉脱维亚","countryJp":"ラトビア"},{"countryCode":"NO","countryZh":"挪威","countryJp":"ノルウェー"},{"countryCode":"CZ","countryZh":"捷克","countryJp":"チェコ"},{"countryCode":"MD","countryZh":"摩尔多瓦","countryJp":"モルドバ"},{"countryCode":"MA","countryZh":"摩洛哥","countryJp":"モロッコ"},{"countryCode":"MC","countryZh":"摩纳哥","countryJp":"モナコ"},{"countryCode":"BN","countryZh":"文莱","countryJp":"ブルネイ"},{"countryCode":"FJ","countryZh":"斐济","countryJp":"フィジー"},{"countryCode":"SZ","countryZh":"斯威士兰","countryJp":"エスワティニ"},{"countryCode":"SK","countryZh":"斯洛伐克","countryJp":"スロバキア"},{"countryCode":"SI","countryZh":"斯洛文尼亚","countryJp":"スロベニア"},{"countryCode":"SJ","countryZh":"斯瓦尔巴和扬马延","countryJp":"スバールバル諸島・ヤンマイエン島"},{"countryCode":"LK","countryZh":"斯里兰卡","countryJp":"スリランカ"},{"countryCode":"SG","countryZh":"新加坡","countryJp":"シンガポール"},{"countryCode":"NC","countryZh":"新喀里多尼亚","countryJp":"ニューカレドニア"},{"countryCode":"NZ","countryZh":"新西兰","countryJp":"ニュージーランド"},{"countryCode":"CL","countryZh":"智利","countryJp":"チリ"},{"countryCode":"KP","countryZh":"朝鲜","countryJp":"北朝鮮"},{"countryCode":"KH","countryZh":"柬埔寨","countryJp":"カンボジア"},{"countryCode":"GG","countryZh":"根西岛","countryJp":"ガーンジー"},{"countryCode":"GD","countryZh":"格林纳达","countryJp":"グレナダ"},{"countryCode":"GL","countryZh":"格陵兰","countryJp":"グリーンランド"},{"countryCode":"GE","countryZh":"格鲁吉亚","countryJp":"ジョージア"},{"countryCode":"VA","countryZh":"梵蒂冈","countryJp":"バチカン市国"},{"countryCode":"BE","countryZh":"比利时","countryJp":"ベルギー"},{"countryCode":"MR","countryZh":"毛里塔尼亚","countryJp":"モーリタニア"},{"countryCode":"MU","countryZh":"毛里求斯","countryJp":"モーリシャス"},{"countryCode":"TO","countryZh":"汤加","countryJp":"トンガ"},{"countryCode":"SA","countryZh":"沙特阿拉伯","countryJp":"サウジアラビア"},{"countryCode":"FR","countryZh":"法国","countryJp":"フランス"},{"countryCode":"TF","countryZh":"法属南部领地","countryJp":"仏領極南諸島"},{"countryCode":"MF","countryZh":"法属圣马丁","countryJp":"サン・マルタン"},{"countryCode":"GF","countryZh":"法属圭亚那","countryJp":"仏領ギアナ"},{"countryCode":"PF","countryZh":"法属波利尼西亚","countryJp":"仏領ポリネシア"},{"countryCode":"FO","countryZh":"法罗群岛","countryJp":"フェロー諸島"},{"countryCode":"PL","countryZh":"波兰","countryJp":"ポーランド"},{"countryCode":"PR","countryZh":"波多黎各","countryJp":"プエルトリコ"},{"countryCode":"BA","countryZh":"波斯尼亚和黑塞哥维那","countryJp":"ボスニア・ヘルツェゴビナ"},{"countryCode":"TH","countryZh":"泰国","countryJp":"タイ"},{"countryCode":"JE","countryZh":"泽西岛","countryJp":"ジャージー"},{"countryCode":"ZW","countryZh":"津巴布韦","countryJp":"ジンバブエ"},{"countryCode":"HN","countryZh":"洪都拉斯","countryJp":"ホンジュラス"},{"countryCode":"HT","countryZh":"海地","countryJp":"ハイチ"},{"countryCode":"AU","countryZh":"澳大利亚","countryJp":"オーストラリア"},{"countryCode":"IE","countryZh":"爱尔兰","countryJp":"アイルランド"},{"countryCode":"EE","countryZh":"爱沙尼亚","countryJp":"エストニア"},{"countryCode":"JM","countryZh":"牙买加","countryJp":"ジャマイカ"},{"countryCode":"TC","countryZh":"特克斯和凯科斯群岛","countryJp":"タークス・カイコス諸島"},{"countryCode":"TT","countryZh":"特立尼达和多巴哥","countryJp":"トリニダード・トバゴ"},{"countryCode":"BO","countryZh":"玻利维亚","countryJp":"ボリビア"},{"countryCode":"NR","countryZh":"瑙鲁","countryJp":"ナウル"},{"countryCode":"SE","countryZh":"瑞典","countryJp":"スウェーデン"},{"countryCode":"CH","countryZh":"瑞士","countryJp":"スイス"},{"countryCode":"GP","countryZh":"瓜德罗普","countryJp":"グアドループ"},{"countryCode":"WF","countryZh":"瓦利斯和富图纳","countryJp":"ウォリス・フツナ"},{"countryCode":"VU","countryZh":"瓦努阿图","countryJp":"バヌアツ"},{"countryCode":"RE","countryZh":"留尼汪","countryJp":"レユニオン"},{"countryCode":"BY","countryZh":"白俄罗斯","countryJp":"ベラルーシ"},{"countryCode":"BM","countryZh":"百慕大","countryJp":"バミューダ"},{"countryCode":"PN","countryZh":"皮特凯恩群岛","countryJp":"ピトケアン諸島"},{"countryCode":"GI","countryZh":"直布罗陀","countryJp":"ジブラルタル"},{"countryCode":"FK","countryZh":"福克兰群岛","countryJp":"フォークランド諸島"},{"countryCode":"KW","countryZh":"科威特","countryJp":"クウェート"},{"countryCode":"KM","countryZh":"科摩罗","countryJp":"コモロ"},{"countryCode":"CI","countryZh":"科特迪瓦","countryJp":"コートジボワール"},{"countryCode":"CC","countryZh":"科科斯（基林）群岛","countryJp":"ココス(キーリング)諸島"},{"countryCode":"PE","countryZh":"秘鲁","countryJp":"ペルー"},{"countryCode":"TN","countryZh":"突尼斯","countryJp":"チュニジア"},{"countryCode":"LT","countryZh":"立陶宛","countryJp":"リトアニア"},{"countryCode":"SO","countryZh":"索马里","countryJp":"ソマリア"},{"countryCode":"JO","countryZh":"约旦","countryJp":"ヨルダン"},{"countryCode":"NA","countryZh":"纳米比亚","countryJp":"ナミビア"},{"countryCode":"NU","countryZh":"纽埃","countryJp":"ニウエ"},{"countryCode":"MM","countryZh":"缅甸","countryJp":"ミャンマー (ビルマ)"},{"countryCode":"RO","countryZh":"罗马尼亚","countryJp":"ルーマニア"},{"countryCode":"UM","countryZh":"美国本土外小岛屿","countryJp":"合衆国領有小離島"},{"countryCode":"VI","countryZh":"美属维尔京群岛","countryJp":"米領ヴァージン諸島"},{"countryCode":"AS","countryZh":"美属萨摩亚","countryJp":"米領サモア"},{"countryCode":"LA","countryZh":"老挝","countryJp":"ラオス"},{"countryCode":"KE","countryZh":"肯尼亚","countryJp":"ケニア"},{"countryCode":"FI","countryZh":"芬兰","countryJp":"フィンランド"},{"countryCode":"SD","countryZh":"苏丹","countryJp":"スーダン"},{"countryCode":"SR","countryZh":"苏里南","countryJp":"スリナム"},{"countryCode":"IO","countryZh":"英属印度洋领地","countryJp":"英領インド洋地域"},{"countryCode":"VG","countryZh":"英属维尔京群岛","countryJp":"英領ヴァージン諸島"},{"countryCode":"NL","countryZh":"荷兰","countryJp":"オランダ"},{"countryCode":"BQ","countryZh":"荷属加勒比区","countryJp":"オランダ領カリブ"},{"countryCode":"SX","countryZh":"荷属圣马丁","countryJp":"シント・マールテン"},{"countryCode":"MZ","countryZh":"莫桑比克","countryJp":"モザンビーク"},{"countryCode":"LS","countryZh":"莱索托","countryJp":"レソト"},{"countryCode":"PH","countryZh":"菲律宾","countryJp":"フィリピン"},{"countryCode":"SV","countryZh":"萨尔瓦多","countryJp":"エルサルバドル"},{"countryCode":"WS","countryZh":"萨摩亚","countryJp":"サモア"},{"countryCode":"PT","countryZh":"葡萄牙","countryJp":"ポルトガル"},{"countryCode":"MN","countryZh":"蒙古","countryJp":"モンゴル"},{"countryCode":"MS","countryZh":"蒙特塞拉特","countryJp":"モントセラト"},{"countryCode":"EH","countryZh":"西撒哈拉","countryJp":"西サハラ"},{"countryCode":"ES","countryZh":"西班牙","countryJp":"スペイン"},{"countryCode":"NF","countryZh":"诺福克岛","countryJp":"ノーフォーク島"},{"countryCode":"BJ","countryZh":"贝宁","countryJp":"ベナン"},{"countryCode":"ZM","countryZh":"赞比亚","countryJp":"ザンビア"},{"countryCode":"GQ","countryZh":"赤道几内亚","countryJp":"赤道ギニア"},{"countryCode":"HM","countryZh":"赫德岛和麦克唐纳群岛","countryJp":"ハード島・マクドナルド諸島"},{"countryCode":"VN","countryZh":"越南","countryJp":"ベトナム"},{"countryCode":"AZ","countryZh":"阿塞拜疆","countryJp":"アゼルバイジャン"},{"countryCode":"AF","countryZh":"阿富汗","countryJp":"アフガニスタン"},{"countryCode":"DZ","countryZh":"阿尔及利亚","countryJp":"アルジェリア"},{"countryCode":"AL","countryZh":"阿尔巴尼亚","countryJp":"アルバニア"},{"countryCode":"AE","countryZh":"阿拉伯联合酋长国","countryJp":"アラブ首長国連邦"},{"countryCode":"OM","countryZh":"阿曼","countryJp":"オマーン"},{"countryCode":"AR","countryZh":"阿根廷","countryJp":"アルゼンチン"},{"countryCode":"AW","countryZh":"阿鲁巴","countryJp":"アルバ"},{"countryCode":"KR","countryZh":"韩国","countryJp":"韓国"},{"countryCode":"MV","countryZh":"马尔代夫","countryJp":"モルディブ"},{"countryCode":"IM","countryZh":"马恩岛","countryJp":"マン島"},{"countryCode":"MW","countryZh":"马拉维","countryJp":"マラウイ"},{"countryCode":"MQ","countryZh":"马提尼克","countryJp":"マルティニーク"},{"countryCode":"MY","countryZh":"马来西亚","countryJp":"マレーシア"},{"countryCode":"YT","countryZh":"马约特","countryJp":"マヨット"},{"countryCode":"MH","countryZh":"马绍尔群岛","countryJp":"マーシャル諸島"},{"countryCode":"MT","countryZh":"马耳他","countryJp":"マルタ"},{"countryCode":"MG","countryZh":"马达加斯加","countryJp":"マダガスカル"},{"countryCode":"ML","countryZh":"马里","countryJp":"マリ"},{"countryCode":"LB","countryZh":"黎巴嫩","countryJp":"レバノン"},{"countryCode":"ME","countryZh":"黑山","countryJp":"モンテネグロ"}];
// 问卷城市气候映射（纯本地数据库：涵盖中国、日本、美国、德国完整主要城市及代表性国际城市）
const ZONE_NAMES = {
    A: 'A: Tropical Climate',
    B: 'B: Dry Climate',
    C: 'C: Temperate Climate',
    D: 'D: Continental Climate',
    E: 'E: Polar Climate'
};
const RAW_CITIES = [
    // ================= 1. 中国 (China - 覆盖全部省级行政区及主要地级市) =================
    ['中国', '中国', '北京', '北京', '北京市', 39.90, 116.40, 'D'],
    ['中国', '中国', '天津', '天津', '天津市', 39.13, 117.20, 'D'],
    ['中国', '中国', '上海', '上海', '上海市', 31.23, 121.47, 'C'],
    ['中国', '中国', '重庆', '重慶', '重庆市', 29.56, 106.55, 'C'],
    ['中国', '中国', '石家庄', '石家荘', '河北省', 38.04, 114.51, 'D'],
    ['中国', '中国', '唐山', '唐山', '河北省', 39.63, 118.18, 'D'],
    ['中国', '中国', '秦皇岛', '秦皇島', '河北省', 39.94, 119.60, 'D'],
    ['中国', '中国', '邯郸', '邯鄲', '河北省', 36.63, 114.49, 'D'],
    ['中国', '中国', '保定', '保定', '河北省', 38.87, 115.46, 'D'],
    ['中国', '中国', '张家口', '張家口', '河北省', 40.82, 114.88, 'D'],
    ['中国', '中国', '承德', '承徳', '河北省', 40.95, 117.96, 'D'],
    ['中国', '中国', '廊坊', '廊坊', '河北省', 39.54, 116.68, 'D'],
    ['中国', '中国', '太原', '太原', '山西省', 37.87, 112.55, 'D'],
    ['中国', '中国', '大同', '大同', '山西省', 40.08, 113.30, 'D'],
    ['中国', '中国', '运城', '運城', '山西省', 35.03, 111.01, 'C'],
    ['中国', '中国', '呼和浩特', 'フフホト', '内蒙古自治区', 40.84, 111.75, 'B'],
    ['中国', '中国', '包头', '包頭', '内蒙古自治区', 40.66, 109.84, 'B'],
    ['中国', '中国', '赤峰', '赤峰', '内蒙古自治区', 42.26, 118.89, 'D'],
    ['中国', '中国', '鄂尔多斯', 'オルドス', '内蒙古自治区', 39.61, 109.78, 'B'],
    ['中国', '中国', '呼伦贝尔', 'フルンボイル', '内蒙古自治区', 49.21, 119.77, 'D'],
    ['中国', '中国', '沈阳', '瀋陽', '辽宁省', 41.80, 123.43, 'D'],
    ['中国', '中国', '大连', '大連', '辽宁省', 38.91, 121.61, 'D'],
    ['中国', '中国', '鞍山', '鞍山', '辽宁省', 41.11, 122.99, 'D'],
    ['中国', '中国', '丹东', '丹東', '辽宁省', 40.00, 124.35, 'D'],
    ['中国', '中国', '锦州', '錦州', '辽宁省', 41.10, 121.13, 'D'],
    ['中国', '中国', '长春', '長春', '吉林省', 43.82, 125.32, 'D'],
    ['中国', '中国', '吉林', '吉林', '吉林省', 43.84, 126.55, 'D'],
    ['中国', '中国', '延边', '延辺', '吉林省', 42.89, 129.51, 'D'],
    ['中国', '中国', '哈尔滨', 'ハルビン', '黑龙江省', 45.80, 126.53, 'D'],
    ['中国', '中国', '齐齐哈尔', 'チチハル', '黑龙江省', 47.35, 123.92, 'D'],
    ['中国', '中国', '牡丹江', '牡丹江', '黑龙江省', 44.55, 129.63, 'D'],
    ['中国', '中国', '大庆', '大慶', '黑龙江省', 46.59, 125.10, 'D'],
    ['中国', '中国', '南京', '南京', '江苏省', 32.06, 118.80, 'C'],
    ['中国', '中国', '无锡', '無錫', '江苏省', 31.49, 120.31, 'C'],
    ['中国', '中国', '徐州', '徐州', '江苏省', 34.21, 117.28, 'C'],
    ['中国', '中国', '常州', '常州', '江苏省', 31.81, 119.97, 'C'],
    ['中国', '中国', '苏州', '蘇州', '江苏省', 31.30, 120.59, 'C'],
    ['中国', '中国', '南通', '南通', '江苏省', 31.98, 120.89, 'C'],
    ['中国', '中国', '连云港', '連雲港', '江苏省', 34.60, 119.22, 'C'],
    ['中国', '中国', '扬州', '揚州', '江苏省', 32.39, 119.41, 'C'],
    ['中国', '中国', '杭州', '杭州', '浙江省', 30.27, 120.15, 'C'],
    ['中国', '中国', '宁波', '寧波', '浙江省', 29.87, 121.54, 'C'],
    ['中国', '中国', '温州', '温州', '浙江省', 28.00, 120.70, 'C'],
    ['中国', '中国', '嘉兴', '嘉興', '浙江省', 30.75, 120.76, 'C'],
    ['中国', '中国', '湖州', '湖州', '浙江省', 30.89, 120.09, 'C'],
    ['中国', '中国', '绍兴', '紹興', '浙江省', 30.03, 120.58, 'C'],
    ['中国', '中国', '金华', '金華', '浙江省', 29.08, 119.65, 'C'],
    ['中国', '中国', '台州', '台州', '浙江省', 28.66, 121.42, 'C'],
    ['中国', '中国', '合肥', '合肥', '安徽省', 31.82, 117.23, 'C'],
    ['中国', '中国', '芜湖', '蕪湖', '安徽省', 31.35, 118.43, 'C'],
    ['中国', '中国', '黄山', '黄山', '安徽省', 29.71, 118.34, 'C'],
    ['中国', '中国', '福州', '福州', '福建省', 26.07, 119.30, 'C'],
    ['中国', '中国', '厦门', '廈門', '福建省', 24.48, 118.09, 'C'],
    ['中国', '中国', '泉州', '泉州', '福建省', 24.87, 118.68, 'C'],
    ['中国', '中国', '漳州', '漳州', '福建省', 24.51, 117.65, 'C'],
    ['中国', '中国', '南昌', '南昌', '江西省', 28.68, 115.86, 'C'],
    ['中国', '中国', '九江', '九江', '江西省', 29.71, 116.00, 'C'],
    ['中国', '中国', '赣州', '贛州', '江西省', 25.83, 114.93, 'C'],
    ['中国', '中国', '景德镇', '景徳鎮', '江西省', 29.27, 117.18, 'C'],
    ['中国', '中国', '济南', '済南', '山东省', 36.65, 117.12, 'D'],
    ['中国', '中国', '青岛', '青島', '山东省', 36.07, 120.38, 'C'],
    ['中国', '中国', '烟台', '煙台', '山东省', 37.46, 121.45, 'C'],
    ['中国', '中国', '潍坊', '濰坊', '山东省', 36.71, 119.16, 'D'],
    ['中国', '中国', '威海', '威海', '山东省', 37.51, 122.12, 'C'],
    ['中国', '中国', '临沂', '臨沂', '山东省', 35.10, 118.36, 'C'],
    ['中国', '中国', '郑州', '鄭州', '河南省', 34.75, 113.62, 'C'],
    ['中国', '中国', '洛阳', '洛陽', '河南省', 34.62, 112.45, 'C'],
    ['中国', '中国', '开封', '開封', '河南省', 34.80, 114.31, 'C'],
    ['中国', '中国', '南阳', '南陽', '河南省', 32.99, 112.53, 'C'],
    ['中国', '中国', '武汉', '武漢', '湖北省', 30.59, 114.31, 'C'],
    ['中国', '中国', '宜昌', '宜昌', '湖北省', 30.69, 111.29, 'C'],
    ['中国', '中国', '襄阳', '襄陽', '湖北省', 32.01, 112.12, 'C'],
    ['中国', '中国', '长沙', '長沙', '湖南省', 28.23, 112.94, 'C'],
    ['中国', '中国', '岳阳', '岳陽', '湖南省', 29.36, 113.13, 'C'],
    ['中国', '中国', '张家界', '張家界', '湖南省', 29.12, 110.48, 'C'],
    ['中国', '中国', '广州', '広州', '广东省', 23.13, 113.26, 'A'],
    ['中国', '中国', '深圳', '深圳', '广东省', 22.54, 114.06, 'A'],
    ['中国', '中国', '珠海', '珠海', '广东省', 22.27, 113.58, 'A'],
    ['中国', '中国', '佛山', '仏山', '广东省', 23.02, 113.12, 'A'],
    ['中国', '中国', '东莞', '東莞', '广东省', 23.02, 113.75, 'A'],
    ['中国', '中国', '中山', '中山', '广东省', 22.52, 113.39, 'A'],
    ['中国', '中国', '惠州', '恵州', '广东省', 23.11, 114.42, 'A'],
    ['中国', '中国', '汕头', '汕頭', '广东省', 23.35, 116.68, 'A'],
    ['中国', '中国', '湛江', '湛江', '广东省', 21.27, 110.36, 'A'],
    ['中国', '中国', '南宁', '南寧', '广西壮族自治区', 22.82, 108.37, 'A'],
    ['中国', '中国', '桂林', '桂林', '广西壮族自治区', 25.27, 110.29, 'C'],
    ['中国', '中国', '柳州', '柳州', '广西壮族自治区', 24.33, 109.42, 'C'],
    ['中国', '中国', '北海', '北海', '广西壮族自治区', 21.48, 109.12, 'A'],
    ['中国', '中国', '海口', '海口', '海南省', 20.04, 110.20, 'A'],
    ['中国', '中国', '三亚', '三亜', '海南省', 18.25, 109.51, 'A'],
    ['中国', '中国', '成都', '成都', '四川省', 30.57, 104.07, 'C'],
    ['中国', '中国', '绵阳', '綿陽', '四川省', 31.47, 104.68, 'C'],
    ['中国', '中国', '乐山', '楽山', '四川省', 29.55, 103.77, 'C'],
    ['中国', '中国', '宜宾', '宜賓', '四川省', 28.75, 104.64, 'C'],
    ['中国', '中国', '贵阳', '貴陽', '贵州省', 26.65, 106.63, 'C'],
    ['中国', '中国', '遵义', '遵義', '贵州省', 27.73, 106.93, 'C'],
    ['中国', '中国', '昆明', '昆明', '云南省', 25.04, 102.71, 'C'],
    ['中国', '中国', '大理', '大理', '云南省', 25.60, 100.27, 'C'],
    ['中国', '中国', '丽江', '麗江', '云南省', 26.86, 100.23, 'C'],
    ['中国', '中国', '西双版纳', 'シーサンパンナ', '云南省', 22.01, 100.80, 'A'],
    ['中国', '中国', '拉萨', 'ラサ', '西藏自治区', 29.65, 91.17, 'B'],
    ['中国', '中国', '林芝', 'ニンティ', '西藏自治区', 29.65, 94.36, 'C'],
    ['中国', '中国', '西安', '西安', '陕西省', 34.34, 108.94, 'C'],
    ['中国', '中国', '咸阳', '咸陽', '陕西省', 34.33, 108.71, 'C'],
    ['中国', '中国', '延安', '延安', '陕西省', 36.59, 109.49, 'D'],
    ['中国', '中国', '兰州', '蘭州', '甘肃省', 36.06, 103.83, 'B'],
    ['中国', '中国', '敦煌', '敦煌', '甘肃省', 40.14, 94.66, 'B'],
    ['中国', '中国', '西宁', '西寧', '青海省', 36.62, 101.78, 'B'],
    ['中国', '中国', '银川', '銀川', '宁夏回族自治区', 38.49, 106.23, 'B'],
    ['中国', '中国', '乌鲁木齐', 'ウルムチ', '新疆维吾尔自治区', 43.83, 87.62, 'B'],
    ['中国', '中国', '喀什', 'カシュガル', '新疆维吾尔自治区', 39.47, 75.99, 'B'],
    ['中国', '中国', '伊犁', 'イリ', '新疆维吾尔自治区', 43.92, 81.32, 'B'],
    ['中国', '中国', '香港', '香港', '香港特别行政区', 22.32, 114.17, 'A'],
    ['中国', '中国', '澳门', 'マカオ', '澳门特别行政区', 22.20, 113.54, 'A'],
    ['中国', '中国', '台北', '台北', '台湾省', 25.03, 121.57, 'A'],
    ['中国', '中国', '台中', '台中', '台湾省', 24.15, 120.67, 'A'],
    ['中国', '中国', '高雄', '高雄', '台湾省', 22.63, 120.30, 'A'],

    // ================= 2. 日本 (Japan - 覆盖全部47都道府县主要市町村，参考 e-Stat) =================
    ['日本', '日本', '札幌市', '札幌市', '北海道', 43.06, 141.35, 'D'],
    ['日本', '日本', '旭川市', '旭川市', '北海道', 43.77, 142.36, 'D'],
    ['日本', '日本', '函馆市', '函館市', '北海道', 41.77, 140.73, 'D'],
    ['日本', '日本', '钏路市', '釧路市', '北海道', 42.98, 144.38, 'D'],
    ['日本', '日本', '带广市', '帯広市', '北海道', 42.92, 143.20, 'D'],
    ['日本', '日本', '小樽市', '小樽市', '北海道', 43.19, 140.99, 'D'],
    ['日本', '日本', '青森市', '青森市', '青森県', 40.82, 140.74, 'D'],
    ['日本', '日本', '八户市', '八戸市', '青森県', 40.51, 141.49, 'D'],
    ['日本', '日本', '弘前市', '弘前市', '青森県', 40.60, 140.46, 'D'],
    ['日本', '日本', '盛冈市', '盛岡市', '岩手県', 39.70, 141.15, 'D'],
    ['日本', '日本', '仙台市', '仙台市', '宮城県', 38.27, 140.87, 'C'],
    ['日本', '日本', '石卷市', '石巻市', '宮城県', 38.43, 141.30, 'C'],
    ['日本', '日本', '秋田市', '秋田市', '秋田県', 39.72, 140.10, 'D'],
    ['日本', '日本', '山形市', '山形市', '山形県', 38.26, 140.34, 'D'],
    ['日本', '日本', '福岛市', '福島市', '福島県', 37.76, 140.47, 'C'],
    ['日本', '日本', '郡山市', '郡山市', '福島県', 37.40, 140.36, 'C'],
    ['日本', '日本', '磐城市', 'いわき市', '福島県', 37.05, 140.89, 'C'],
    ['日本', '日本', '水户市', '水戸市', '茨城県', 36.37, 140.48, 'C'],
    ['日本', '日本', '筑波市', 'つくば市', '茨城県', 36.08, 140.08, 'C'],
    ['日本', '日本', '宇都宫市', '宇都宮市', '栃木県', 36.56, 139.88, 'C'],
    ['日本', '日本', '日光市', '日光市', '栃木県', 36.72, 139.70, 'C'],
    ['日本', '日本', '前桥市', '前橋市', '群馬県', 36.39, 139.06, 'C'],
    ['日本', '日本', '高崎市', '高崎市', '群馬県', 36.32, 139.00, 'C'],
    ['日本', '日本', '埼玉市', 'さいたま市', '埼玉県', 35.86, 139.65, 'C'],
    ['日本', '日本', '川口市', '川口市', '埼玉県', 35.81, 139.72, 'C'],
    ['日本', '日本', '川越市', '川越市', '埼玉県', 35.93, 139.49, 'C'],
    ['日本', '日本', '千叶市', '千葉市', '千葉県', 35.61, 140.11, 'C'],
    ['日本', '日本', '船桥市', '船橋市', '千葉県', 35.69, 139.98, 'C'],
    ['日本', '日本', '柏市', '柏市', '千葉県', 35.87, 139.98, 'C'],
    ['日本', '日本', '东京特别区(23区)', '東京23区', '東京都', 35.68, 139.77, 'C'],
    ['日本', '日本', '八王子市', '八王子市', '東京都', 35.67, 139.32, 'C'],
    ['日本', '日本', '町田市', '町田市', '東京都', 35.55, 139.45, 'C'],
    ['日本', '日本', '立川市', '立川市', '東京都', 35.71, 139.41, 'C'],
    ['日本', '日本', '横滨市', '横浜市', '神奈川県', 35.44, 139.64, 'C'],
    ['日本', '日本', '川崎市', '川崎市', '神奈川県', 35.53, 139.70, 'C'],
    ['日本', '日本', '相模原市', '相模原市', '神奈川県', 35.57, 139.37, 'C'],
    ['日本', '日本', '藤泽市', '藤沢市', '神奈川県', 35.34, 139.49, 'C'],
    ['日本', '日本', '镰仓市', '鎌倉市', '神奈川県', 35.32, 139.55, 'C'],
    ['日本', '日本', '新潟市', '新潟市', '新潟県', 37.92, 139.04, 'C'],
    ['日本', '日本', '长冈市', '長岡市', '新潟県', 37.45, 138.85, 'C'],
    ['日本', '日本', '富山市', '富山市', '富山県', 36.70, 137.21, 'C'],
    ['日本', '日本', '金泽市', '金沢市', '石川県', 36.56, 136.66, 'C'],
    ['日本', '日本', '福井市', '福井市', '福井県', 36.06, 136.22, 'C'],
    ['日本', '日本', '甲府市', '甲府市', '山梨県', 35.66, 138.57, 'C'],
    ['日本', '日本', '长野市', '長野市', '長野県', 36.65, 138.19, 'D'],
    ['日本', '日本', '松本市', '松本市', '長野県', 36.24, 137.97, 'D'],
    ['日本', '日本', '岐阜市', '岐阜市', '岐阜県', 35.42, 136.76, 'C'],
    ['日本', '日本', '高山市', '高山市', '岐阜県', 36.15, 137.25, 'D'],
    ['日本', '日本', '静冈市', '静岡市', '静岡県', 34.98, 138.38, 'C'],
    ['日本', '日本', '滨松市', '浜松市', '静岡県', 34.71, 137.73, 'C'],
    ['日本', '日本', '名古屋市', '名古屋市', '愛知県', 35.18, 136.91, 'C'],
    ['日本', '日本', '丰田市', '豊田市', '愛知県', 35.08, 137.16, 'C'],
    ['日本', '日本', '冈崎市', '岡崎市', '愛知県', 34.95, 137.17, 'C'],
    ['日本', '日本', '津市', '津市', '三重県', 34.72, 136.51, 'C'],
    ['日本', '日本', '四日市市', '四日市市', '三重県', 34.97, 136.62, 'C'],
    ['日本', '日本', '大津市', '大津市', '滋賀県', 35.02, 135.85, 'C'],
    ['日本', '日本', '京都市', '京都市', '京都府', 35.01, 135.77, 'C'],
    ['日本', '日本', '宇治市', '宇治市', '京都府', 34.88, 135.80, 'C'],
    ['日本', '日本', '大阪市', '大阪市', '大阪府', 34.69, 135.50, 'C'],
    ['日本', '日本', '堺市', '堺市', '大阪府', 34.57, 135.48, 'C'],
    ['日本', '日本', '东大阪市', '東大阪市', '大阪府', 34.68, 135.60, 'C'],
    ['日本', '日本', '吹田市', '吹田市', '大阪府', 34.76, 135.52, 'C'],
    ['日本', '日本', '神户市', '神戸市', '兵庫県', 34.69, 135.20, 'C'],
    ['日本', '日本', '姬路市', '姫路市', '兵庫県', 34.82, 134.69, 'C'],
    ['日本', '日本', '西宫市', '西宮市', '兵庫県', 34.74, 135.34, 'C'],
    ['日本', '日本', '奈良市', '奈良市', '奈良県', 34.69, 135.80, 'C'],
    ['日本', '日本', '和歌山市', '和歌山市', '和歌山県', 34.23, 135.17, 'C'],
    ['日本', '日本', '鸟取市', '鳥取市', '鳥取県', 35.50, 134.24, 'C'],
    ['日本', '日本', '松江市', '松江市', '島根県', 35.47, 133.05, 'C'],
    ['日本', '日本', '冈山市', '岡山市', '岡山県', 34.66, 133.92, 'C'],
    ['日本', '日本', '仓敷市', '倉敷市', '岡山県', 34.59, 133.77, 'C'],
    ['日本', '日本', '广岛市', '広島市', '広島県', 34.39, 132.46, 'C'],
    ['日本', '日本', '福山市', '福山市', '広島県', 34.49, 133.36, 'C'],
    ['日本', '日本', '山口市', '山口市', '山口県', 34.18, 131.47, 'C'],
    ['日本', '日本', '下关市', '下関市', '山口県', 33.96, 130.94, 'C'],
    ['日本', '日本', '德岛市', '徳島市', '徳島県', 34.07, 134.55, 'C'],
    ['日本', '日本', '高松市', '高松市', '香川県', 34.34, 134.05, 'C'],
    ['日本', '日本', '松山市', '松山市', '愛媛県', 33.84, 132.77, 'C'],
    ['日本', '日本', '高知市', '高知市', '高知県', 33.56, 133.53, 'C'],
    ['日本', '日本', '福冈市', '福岡市', '福岡県', 33.59, 130.40, 'C'],
    ['日本', '日本', '北九州市', '北九州市', '福岡県', 33.88, 130.88, 'C'],
    ['日本', '日本', '久留米市', '久留米市', '福岡県', 33.32, 130.51, 'C'],
    ['日本', '日本', '佐贺市', '佐賀市', '佐賀県', 33.26, 130.30, 'C'],
    ['日本', '日本', '长崎市', '長崎市', '長崎県', 32.75, 129.88, 'C'],
    ['日本', '日本', '佐世保市', '佐世保市', '長崎県', 33.18, 129.72, 'C'],
    ['日本', '日本', '熊本市', '熊本市', '熊本県', 32.80, 130.71, 'C'],
    ['日本', '日本', '大分市', '大分市', '大分県', 33.24, 131.61, 'C'],
    ['日本', '日本', '宫崎市', '宮崎市', '宮崎県', 31.91, 131.42, 'C'],
    ['日本', '日本', '鹿儿岛市', '鹿児島市', '鹿児島県', 31.60, 130.56, 'C'],
    ['日本', '日本', '那霸市', '那覇市', '沖縄県', 26.21, 127.68, 'A'],
    ['日本', '日本', '石垣市', '石垣市', '沖縄県', 24.34, 124.16, 'A'],

    // ================= 3. 美国 (United States - 覆盖全部50州及哥伦比亚特区主要城市，参考 US Census) =================
    ['美国', 'アメリカ合衆国', '纽约 (New York City)', 'ニューヨーク', 'New York', 40.71, -74.01, 'C'],
    ['美国', 'アメリカ合衆国', '布法罗/水牛城 (Buffalo)', 'バッファロー', 'New York', 42.89, -78.88, 'D'],
    ['美国', 'アメリカ合衆国', '洛杉矶 (Los Angeles)', 'ロサンゼルス', 'California', 34.05, -118.24, 'C'],
    ['美国', 'アメリカ合衆国', '旧金山 (San Francisco)', 'サンフランシスコ', 'California', 37.77, -122.42, 'C'],
    ['美国', 'アメリカ合衆国', '圣迭戈 (San Diego)', 'サンディエゴ', 'California', 32.72, -117.16, 'C'],
    ['美国', 'アメリカ合衆国', '圣何塞 (San Jose)', 'サンノゼ', 'California', 37.34, -121.89, 'C'],
    ['美国', 'アメリカ合衆国', '萨克拉门托 (Sacramento)', 'サクラメント', 'California', 38.58, -121.49, 'C'],
    ['美国', 'アメリカ合衆国', '弗雷斯诺 (Fresno)', 'フレズノ', 'California', 36.74, -119.79, 'B'],
    ['美国', 'アメリカ合衆国', '芝加哥 (Chicago)', 'シカゴ', 'Illinois', 41.88, -87.63, 'D'],
    ['美国', 'アメリカ合衆国', '休斯顿 (Houston)', 'ヒューストン', 'Texas', 29.76, -95.37, 'C'],
    ['美国', 'アメリカ合衆国', '达拉斯 (Dallas)', 'ダラス', 'Texas', 32.78, -96.80, 'C'],
    ['美国', 'アメリカ合衆国', '奥斯汀 (Austin)', 'オースティン', 'Texas', 30.27, -97.74, 'C'],
    ['美国', 'アメリカ合衆国', '圣安东尼奥 (San Antonio)', 'サンアントニオ', 'Texas', 29.42, -98.49, 'C'],
    ['美国', 'アメリカ合衆国', '埃尔帕索 (El Paso)', 'エルパソ', 'Texas', 31.76, -106.49, 'B'],
    ['美国', 'アメリカ合衆国', '菲尼克斯/凤凰城 (Phoenix)', 'フェニックス', 'Arizona', 33.45, -112.07, 'B'],
    ['美国', 'アメリカ合衆国', '图森 (Tucson)', 'ツーソン', 'Arizona', 32.22, -110.97, 'B'],
    ['美国', 'アメリカ合衆国', '费城 (Philadelphia)', 'フィラデルフィア', 'Pennsylvania', 39.95, -75.17, 'C'],
    ['美国', 'アメリカ合衆国', '匹兹堡 (Pittsburgh)', 'ピッツバーグ', 'Pennsylvania', 40.44, -80.00, 'D'],
    ['美国', 'アメリカ合衆国', '华盛顿特区 (Washington, D.C.)', 'ワシントンD.C.', 'District of Columbia', 38.91, -77.04, 'C'],
    ['美国', 'アメリカ合衆国', '波士顿 (Boston)', 'ボストン', 'Massachusetts', 42.36, -71.06, 'D'],
    ['美国', 'アメリカ合衆国', '迈阿密 (Miami)', 'マイアミ', 'Florida', 25.76, -80.19, 'A'],
    ['美国', 'アメリカ合衆国', '奥兰多 (Orlando)', 'オーランド', 'Florida', 28.54, -81.38, 'C'],
    ['美国', 'アメリカ合衆国', '坦帕 (Tampa)', 'タンパ', 'Florida', 27.95, -82.46, 'C'],
    ['美国', 'アメリカ合衆国', '杰克逊维尔 (Jacksonville)', 'ジャクソンビル', 'Florida', 30.33, -81.66, 'C'],
    ['美国', 'アメリカ合衆国', '亚特兰大 (Atlanta)', 'アトランタ', 'Georgia', 33.75, -84.39, 'C'],
    ['美国', 'アメリカ合衆国', '西雅图 (Seattle)', 'シアトル', 'Washington', 47.61, -122.33, 'C'],
    ['美国', 'アメリカ合衆国', '斯波坎 (Spokane)', 'スポケーン', 'Washington', 47.66, -117.43, 'D'],
    ['美国', 'アメリカ合衆国', '波特兰 (Portland)', 'ポートランド', 'Oregon', 45.52, -122.68, 'C'],
    ['美国', 'アメリカ合衆国', '丹佛 (Denver)', 'デンバー', 'Colorado', 39.74, -104.99, 'B'],
    ['美国', 'アメリカ合衆国', '科罗拉多斯普林斯 (Colorado Springs)', 'コロラドスプリングス', 'Colorado', 38.83, -104.82, 'B'],
    ['美国', 'アメリカ合衆国', '拉斯维加斯 (Las Vegas)', 'ラスベガス', 'Nevada', 36.17, -115.14, 'B'],
    ['美国', 'アメリカ合衆国', '里诺 (Reno)', 'リノ', 'Nevada', 39.53, -119.81, 'B'],
    ['美国', 'アメリカ合衆国', '底特律 (Detroit)', 'デトロイト', 'Michigan', 42.33, -83.05, 'D'],
    ['美国', 'アメリカ合衆国', '明尼阿波利斯 (Minneapolis)', 'ミネアポリス', 'Minnesota', 44.98, -93.27, 'D'],
    ['美国', 'アメリカ合衆国', '圣保罗 (St. Paul)', 'セントポール', 'Minnesota', 44.95, -93.09, 'D'],
    ['美国', 'アメリカ合衆国', '夏洛特 (Charlotte)', 'シャーロット', 'North Carolina', 35.23, -80.84, 'C'],
    ['美国', 'アメリカ合衆国', '罗利 (Raleigh)', 'ローリー', 'North Carolina', 35.78, -78.64, 'C'],
    ['美国', 'アメリカ合衆国', '纳什维尔 (Nashville)', 'ナッシュビル', 'Tennessee', 36.16, -86.78, 'C'],
    ['美国', 'アメリカ合衆国', '孟菲斯 (Memphis)', 'メンフィス', 'Tennessee', 35.15, -90.05, 'C'],
    ['美国', 'アメリカ合衆国', '印第安纳波利斯 (Indianapolis)', 'インディアナポリス', 'Indiana', 39.77, -86.16, 'D'],
    ['美国', 'アメリカ合衆国', '哥伦布 (Columbus)', 'コロンバス', 'Ohio', 39.96, -83.00, 'D'],
    ['美国', 'アメリカ合衆国', '克利夫兰 (Cleveland)', 'クリーブランド', 'Ohio', 41.50, -81.69, 'D'],
    ['美国', 'アメリカ合衆国', '辛辛那提 (Cincinnati)', 'シンシナティ', 'Ohio', 39.10, -84.51, 'C'],
    ['美国', 'アメリカ合衆国', '密尔沃基 (Milwaukee)', 'ミルウォーキー', 'Wisconsin', 43.04, -87.91, 'D'],
    ['美国', 'アメリカ合衆国', '堪萨斯城 (Kansas City)', 'カンザスシティ', 'Missouri', 39.10, -94.58, 'C'],
    ['美国', 'アメリカ合衆国', '圣路易斯 (St. Louis)', 'セントルイス', 'Missouri', 38.63, -90.20, 'C'],
    ['美国', 'アメリカ合衆国', '巴尔的摩 (Baltimore)', 'ボルチモア', 'Maryland', 39.29, -76.61, 'C'],
    ['美国', 'アメリカ合衆国', '盐湖城 (Salt Lake City)', 'ソルトレイクシティ', 'Utah', 40.76, -111.89, 'B'],
    ['美国', 'アメリカ合衆国', '阿尔伯克基 (Albuquerque)', 'アルバカーキ', 'New Mexico', 35.08, -106.65, 'B'],
    ['美国', 'アメリカ合衆国', '俄克拉荷马城 (Oklahoma City)', 'オクラホマシティ', 'Oklahoma', 35.47, -97.52, 'C'],
    ['美国', 'アメリカ合衆国', '新奥尔良 (New Orleans)', 'ニューオーリンズ', 'Louisiana', 29.95, -90.07, 'C'],
    ['美国', 'アメリカ合衆国', '路易斯维尔 (Louisville)', 'ルイビル', 'Kentucky', 38.25, -85.76, 'C'],
    ['美国', 'アメリカ合衆国', '伯明翰 (Birmingham)', 'バーミングハム', 'Alabama', 33.52, -86.81, 'C'],
    ['美国', 'アメリカ合衆国', '查尔斯顿 (Charleston)', 'チャールストン', 'South Carolina', 32.78, -79.93, 'C'],
    ['美国', 'アメリカ合衆国', '弗吉尼亚海滩 (Virginia Beach)', 'バージニアビーチ', 'Virginia', 36.85, -75.98, 'C'],
    ['美国', 'アメリカ合衆国', '纽瓦克 (Newark)', 'ニューアーク', 'New Jersey', 40.74, -74.17, 'C'],
    ['美国', 'アメリカ合衆国', '哈特福德 (Hartford)', 'ハートフォード', 'Connecticut', 41.76, -72.67, 'D'],
    ['美国', 'アメリカ合衆国', '普罗维登斯 (Providence)', 'プロビデンス', 'Rhode Island', 41.82, -71.41, 'D'],
    ['美国', 'アメリカ合衆国', '曼彻斯特 (Manchester)', 'マンチェスター', 'New Hampshire', 43.00, -71.45, 'D'],
    ['美国', 'アメリカ合衆国', '伯灵顿 (Burlington)', 'バーリントン', 'Vermont', 44.48, -73.21, 'D'],
    ['美国', 'アメリカ合衆国', '波特兰-缅因 (Portland, ME)', 'ポートランド(メイン州)', 'Maine', 43.66, -70.26, 'D'],
    ['美国', 'アメリカ合衆国', '威尔明顿 (Wilmington)', 'ウィルミントン', 'Delaware', 39.74, -75.55, 'C'],
    ['美国', 'アメリカ合衆国', '查尔斯顿-西弗吉尼亚 (Charleston, WV)', 'チャールストン(WV)', 'West Virginia', 38.35, -81.63, 'C'],
    ['美国', 'アメリカ合衆国', '小石城 (Little Rock)', 'リトルロック', 'Arkansas', 34.75, -92.29, 'C'],
    ['美国', 'アメリカ合衆国', '杰克逊 (Jackson)', 'ジャクソン', 'Mississippi', 32.30, -90.18, 'C'],
    ['美国', 'アメリカ合衆国', '得梅因 (Des Moines)', 'デモイン', 'Iowa', 41.59, -93.62, 'D'],
    ['美国', 'アメリカ合衆国', '奥马哈 (Omaha)', 'オマハ', 'Nebraska', 41.26, -95.93, 'D'],
    ['美国', 'アメリカ合衆国', '威奇托 (Wichita)', 'ウィチタ', 'Kansas', 37.69, -97.34, 'C'],
    ['美国', 'アメリカ合衆国', '苏瀑 (Sioux Falls)', 'スーフォールズ', 'South Dakota', 43.55, -96.73, 'D'],
    ['美国', 'アメリカ合衆国', '法戈 (Fargo)', 'ファーゴ', 'North Dakota', 46.88, -96.79, 'D'],
    ['美国', 'アメリカ合衆国', '比灵斯 (Billings)', 'ビリングス', 'Montana', 45.78, -108.50, 'B'],
    ['美国', 'アメリカ合衆国', '夏延 (Cheyenne)', 'シャイアン', 'Wyoming', 41.14, -104.82, 'B'],
    ['美国', 'アメリカ合衆国', '博伊西 (Boise)', 'ボイシ', 'Idaho', 43.62, -116.20, 'B'],
    ['美国', 'アメリカ合衆国', '安克雷奇 (Anchorage)', 'アンカレジ', 'Alaska', 61.22, -149.90, 'E'],
    ['美国', 'アメリカ合衆国', '费尔班克斯 (Fairbanks)', 'フェアバンクス', 'Alaska', 64.84, -147.72, 'E'],
    ['美国', 'アメリカ合衆国', '檀香山/火奴鲁鲁 (Honolulu)', 'ホノルル', 'Hawaii', 21.31, -157.86, 'A'],

    // ================= 4. 德国 (Germany - 覆盖全部16联邦州主要城市，参考 Destatis) =================
    ['德国', 'ドイツ', '柏林 (Berlin)', 'ベルリン', 'Berlin', 52.52, 13.40, 'C'],
    ['德国', 'ドイツ', '汉堡 (Hamburg)', 'ハンブルク', 'Hamburg', 53.55, 9.99, 'C'],
    ['德国', 'ドイツ', '慕尼黑 (München)', 'ミュンヘン', 'Bayern', 48.14, 11.58, 'C'],
    ['德国', 'ドイツ', '纽伦堡 (Nürnberg)', 'ニュルンベルク', 'Bayern', 49.45, 11.08, 'C'],
    ['德国', 'ドイツ', '奥格斯堡 (Augsburg)', 'アウクスブルク', 'Bayern', 48.37, 10.90, 'C'],
    ['德国', 'ドイツ', '雷根斯堡 (Regensburg)', 'レーゲンスブルク', 'Bayern', 49.01, 12.10, 'C'],
    ['德国', 'ドイツ', '维尔茨堡 (Würzburg)', 'ヴュルツブルク', 'Bayern', 49.79, 9.95, 'C'],
    ['德国', 'ドイツ', '科隆 (Köln)', 'ケルン', 'Nordrhein-Westfalen', 50.94, 6.96, 'C'],
    ['德国', 'ドイツ', '杜塞尔多夫 (Düsseldorf)', 'デュッセルドルフ', 'Nordrhein-Westfalen', 51.23, 6.78, 'C'],
    ['德国', 'ドイツ', '多特蒙德 (Dortmund)', 'ドルトムント', 'Nordrhein-Westfalen', 51.51, 7.47, 'C'],
    ['德国', 'ドイツ', '埃森 (Essen)', 'エッセン', 'Nordrhein-Westfalen', 51.46, 7.01, 'C'],
    ['德国', 'ドイツ', '杜伊斯堡 (Duisburg)', 'デュースブルク', 'Nordrhein-Westfalen', 51.43, 6.76, 'C'],
    ['德国', 'ドイツ', '波鸿 (Bochum)', 'ボーフム', 'Nordrhein-Westfalen', 51.48, 7.22, 'C'],
    ['德国', 'ドイツ', '伍珀塔尔 (Wuppertal)', 'ヴッパータール', 'Nordrhein-Westfalen', 51.26, 7.15, 'C'],
    ['德国', 'ドイツ', '比勒费尔德 (Bielefeld)', 'ビーレフェルト', 'Nordrhein-Westfalen', 52.03, 8.53, 'C'],
    ['德国', 'ドイツ', '波恩 (Bonn)', 'ボン', 'Nordrhein-Westfalen', 50.74, 7.10, 'C'],
    ['德国', 'ドイツ', '明斯特 (Münster)', 'ミュンスター', 'Nordrhein-Westfalen', 51.96, 7.63, 'C'],
    ['德国', 'ドイツ', '亚琛 (Aachen)', 'アーヘン', 'Nordrhein-Westfalen', 50.78, 6.08, 'C'],
    ['德国', 'ドイツ', '法兰克福 (Frankfurt am Main)', 'フランクフルト', 'Hessen', 50.11, 8.68, 'C'],
    ['德国', 'ドイツ', '威斯巴登 (Wiesbaden)', 'ヴィースバーデン', 'Hessen', 50.08, 8.24, 'C'],
    ['德国', 'ドイツ', '卡塞尔 (Kassel)', 'カッセル', 'Hessen', 51.31, 9.48, 'C'],
    ['德国', 'ドイツ', '达姆施塔特 (Darmstadt)', 'ダルムシュタット', 'Hessen', 49.87, 8.65, 'C'],
    ['德国', 'ドイツ', '斯图加特 (Stuttgart)', 'シュトゥットガルト', 'Baden-Württemberg', 48.78, 9.18, 'C'],
    ['德国', 'ドイツ', '卡尔斯鲁厄 (Karlsruhe)', 'カールスルーエ', 'Baden-Württemberg', 49.01, 8.40, 'C'],
    ['德国', 'ドイツ', '曼海姆 (Mannheim)', 'マンハイム', 'Baden-Württemberg', 49.49, 8.47, 'C'],
    ['德国', 'ドイツ', '弗赖堡 (Freiburg im Breisgau)', 'フライブルク', 'Baden-Württemberg', 47.99, 7.84, 'C'],
    ['德国', 'ドイツ', '海德堡 (Heidelberg)', 'ハイデルベルク', 'Baden-Württemberg', 49.40, 8.67, 'C'],
    ['德国', 'ドイツ', '乌尔姆 (Ulm)', 'ウルム', 'Baden-Württemberg', 48.40, 9.99, 'C'],
    ['德国', 'ドイツ', '汉诺威 (Hannover)', 'ハノーファー', 'Niedersachsen', 52.38, 9.73, 'C'],
    ['德国', 'ドイツ', '不伦瑞克 (Braunschweig)', 'ブラウンシュヴァイク', 'Niedersachsen', 52.27, 10.53, 'C'],
    ['德国', 'ドイツ', '奥尔登堡 (Oldenburg)', 'オルデンブルク', 'Niedersachsen', 53.14, 8.21, 'C'],
    ['德国', 'ドイツ', '奥斯纳布吕克 (Osnabrück)', 'オスナブリュック', 'Niedersachsen', 52.28, 8.05, 'C'],
    ['德国', 'ドイツ', '哥廷根 (Göttingen)', 'ゲッティンゲン', 'Niedersachsen', 51.54, 9.92, 'C'],
    ['德国', 'ドイツ', '不来梅 (Bremen)', 'ブレーメン', 'Bremen', 53.08, 8.80, 'C'],
    ['德国', 'ドイツ', '不来梅哈芬 (Bremerhaven)', 'ブレーマーハーフェン', 'Bremen', 53.54, 8.58, 'C'],
    ['德国', 'ドイツ', '德累斯顿 (Dresden)', 'ドレスデン', 'Sachsen', 51.05, 13.74, 'C'],
    ['德国', 'ドイツ', '莱比锡 (Leipzig)', 'ライプツィヒ', 'Sachsen', 51.34, 12.37, 'C'],
    ['德国', 'ドイツ', '开姆尼茨 (Chemnitz)', 'ケムニッツ', 'Sachsen', 50.83, 12.92, 'C'],
    ['德国', 'ドイツ', '波茨坦 (Potsdam)', 'ポツダム', 'Brandenburg', 52.40, 13.06, 'C'],
    ['德国', 'ドイツ', '科特布斯 (Cottbus)', 'コトブス', 'Brandenburg', 51.76, 14.33, 'C'],
    ['德国', 'ドイツ', '基尔 (Kiel)', 'キール', 'Schleswig-Holstein', 54.32, 10.12, 'C'],
    ['德国', 'ドイツ', '吕贝克 (Lübeck)', 'リューベック', 'Schleswig-Holstein', 53.87, 10.69, 'C'],
    ['德国', 'ドイツ', '马格德堡 (Magdeburg)', 'マクデブルク', 'Sachsen-Anhalt', 52.12, 11.63, 'C'],
    ['德国', 'ドイツ', '哈雷 (Halle)', 'ハレ', 'Sachsen-Anhalt', 51.48, 11.97, 'C'],
    ['德国', 'ドイツ', '埃尔福特 (Erfurt)', 'エアフルト', 'Thüringen', 50.98, 11.03, 'C'],
    ['德国', 'ドイツ', '耶拿 (Jena)', 'イェーナ', 'Thüringen', 50.93, 11.59, 'C'],
    ['德国', 'ドイツ', '魏玛 (Weimar)', 'ヴァイマル', 'Thüringen', 50.98, 11.33, 'C'],
    ['德国', 'ドイツ', '美因茨 (Mainz)', 'マインツ', 'Rheinland-Pfalz', 49.99, 8.25, 'C'],
    ['德国', 'ドイツ', '路德维希港 (Ludwigshafen)', 'ルートヴィヒスハーフェン', 'Rheinland-Pfalz', 49.48, 8.44, 'C'],
    ['德国', 'ドイツ', '科布伦茨 (Koblenz)', 'コブレンツ', 'Rheinland-Pfalz', 50.36, 7.59, 'C'],
    ['德国', 'ドイツ', '特里尔 (Trier)', 'トリーア', 'Rheinland-Pfalz', 49.75, 6.64, 'C'],
    ['德国', 'ドイツ', '萨尔布吕肯 (Saarbrücken)', 'ザールブリュッケン', 'Saarland', 49.24, 7.00, 'C'],
    ['德国', 'ドイツ', '罗斯托克 (Rostock)', 'ロストック', 'Mecklenburg-Vorpommern', 54.09, 12.10, 'C'],
    ['德国', 'ドイツ', '什未林 (Schwerin)', 'シュヴェリーン', 'Mecklenburg-Vorpommern', 53.63, 11.40, 'C'],

    // ================= 5. 其他代表性国际城市 =================
    ['英国', 'イギリス', '伦敦 (London)', 'ロンドン', 'England', 51.51, -0.13, 'C'],
    ['英国', 'イギリス', '曼彻斯特 (Manchester)', 'マンチェスター', 'England', 53.48, -2.24, 'C'],
    ['英国', 'イギリス', '爱丁堡 (Edinburgh)', 'エディンバラ', 'Scotland', 55.95, -3.19, 'C'],
    ['澳大利亚', 'オーストラリア', '悉尼 (Sydney)', 'シドニー', 'New South Wales', -33.87, 151.21, 'C'],
    ['澳大利亚', 'オーストラリア', '墨尔本 (Melbourne)', 'メルボルン', 'Victoria', -37.81, 144.96, 'C'],
    ['澳大利亚', 'オーストラリア', '爱丽斯泉 (Alice Springs)', 'アリススプリングス', 'Northern Territory', -23.70, 133.88, 'B'],
    ['加拿大', 'カナダ', '多伦多 (Toronto)', 'トロント', 'Ontario', 43.65, -79.38, 'D'],
    ['加拿大', 'カナダ', '温哥华 (Vancouver)', 'バンクーバー', 'British Columbia', 49.28, -123.12, 'C'],
    ['法国', 'フランス', '巴黎 (Paris)', 'パリ', 'Île-de-France', 48.86, 2.35, 'C'],
    ['韩国', '韓国', '首尔 (Seoul)', 'ソウル', 'Seoul', 37.57, 126.98, 'D'],
    ['韩国', '韓国', '釜山 (Busan)', '釜山', 'Busan', 35.18, 129.08, 'C'],
    ['新加坡', 'シンガポール', '新加坡 (Singapore)', 'シンガポール', 'Singapore', 1.35, 103.82, 'A'],
    ['泰国', 'タイ', '曼谷 (Bangkok)', 'バンコク', 'Bangkok', 13.76, 100.50, 'A'],
    ['埃及', 'エジプト', '开罗 (Cairo)', 'カイロ', 'Cairo', 30.04, 31.24, 'B'],
    ['丹麦', 'デンマーク', '努克 (Nuuk, Greenland)', 'ヌーク', 'Greenland', 64.18, -51.72, 'E']
];
const GLOBAL_CITIES_DATABASE = RAW_CITIES.map((r, idx) => ({
    id: 'city-' + idx,
    countryZh: r[0],
    countryJp: r[1],
    cityZh: r[2],
    cityJp: r[3],
    admin1: r[4],
    lat: r[5],
    lon: r[6],
    zone: r[7],
    zoneName: ZONE_NAMES[r[7]]
}));
const JP_PREF_ZH_MAP = {
    '北海道': '北海道',
    '青森県': '青森县',
    '岩手県': '岩手县',
    '宮城県': '宫城县',
    '秋田県': '秋田县',
    '山形県': '山形县',
    '福島県': '福岛县',
    '茨城県': '茨城县',
    '栃木県': '栃木县',
    '群馬県': '群马县',
    '埼玉県': '埼玉县',
    '千葉県': '千叶县',
    '東京都': '东京都',
    '神奈川県': '神奈川县',
    '新潟県': '新潟县',
    '富山県': '富山县',
    '石川県': '石川县',
    '福井県': '福井县',
    '山梨県': '山梨县',
    '長野県': '长野县',
    '岐阜県': '岐阜县',
    '静岡県': '静冈县',
    '愛知県': '爱知县',
    '三重県': '三重县',
    '滋賀県': '滋贺县',
    '京都府': '京都府',
    '大阪府': '大阪府',
    '兵庫県': '兵库县',
    '奈良県': '奈良县',
    '和歌山県': '和歌山县',
    '鳥取県': '鸟取县',
    '島根県': '岛根县',
    '岡山県': '冈山县',
    '広島県': '广岛县',
    '山口県': '山口县',
    '徳島県': '德岛县',
    '香川県': '香川县',
    '愛媛県': '爱媛县',
    '高知県': '高知县',
    '福岡県': '福冈县',
    '佐賀県': '佐贺县',
    '長崎県': '长崎县',
    '熊本県': '熊本县',
    '大分県': '大分县',
    '宮崎県': '宫崎县',
    '鹿児島県': '鹿儿岛县',
    '沖縄県': '冲绳县'
};
const JP_PREFECTURES = (() => {
    const seen = new Set();
    const list = [];
    GLOBAL_CITIES_DATABASE.forEach(c => {
        if (c.countryZh === '日本' && c.admin1 && !seen.has(c.admin1)) {
            seen.add(c.admin1);
            list.push({
                id: `jp-pref-${c.admin1}`,
                countryZh: '日本',
                countryJp: '日本',
                cityZh: c.admin1,
                cityJp: c.admin1,
                prefZh: JP_PREF_ZH_MAP[c.admin1] || c.admin1,
                admin1: c.admin1,
                lat: c.lat,
                lon: c.lon,
                zone: c.zone,
                zoneName: c.zoneName
            });
        }
    });
    return list;
})();
const CN_DIRECT_ADMIN1 = new Set([
    '北京市',
    '天津市',
    '上海市',
    '重庆市',
    '香港特别行政区',
    '澳门特别行政区'
]);
const CN_ADMIN1_JP_MAP = {
    '北京市': '北京市',
    '天津市': '天津市',
    '上海市': '上海市',
    '重庆市': '重慶市',
    '河北省': '河北省',
    '山西省': '山西省',
    '内蒙古自治区': '内モンゴル自治区',
    '辽宁省': '遼寧省',
    '吉林省': '吉林省',
    '黑龙江省': '黒竜江省',
    '江苏省': '江蘇省',
    '浙江省': '浙江省',
    '安徽省': '安徽省',
    '福建省': '福建省',
    '江西省': '江西省',
    '山东省': '山東省',
    '河南省': '河南省',
    '湖北省': '湖北省',
    '湖南省': '湖南省',
    '广东省': '広東省',
    '广西壮族自治区': '広西チワン族自治区',
    '海南省': '海南省',
    '四川省': '四川省',
    '贵州省': '貴州省',
    '云南省': '雲南省',
    '西藏自治区': 'チベット自治区',
    '陕西省': '陝西省',
    '甘肃省': '甘粛省',
    '青海省': '青海省',
    '宁夏回族自治区': '寧夏回族自治区',
    '新疆维吾尔自治区': '新疆ウイグル自治区',
    '香港特别行政区': '香港特別行政区',
    '澳门特别行政区': 'マカオ特別行政区',
    '台湾省': '台湾省'
};
const CN_PROVINCES = (() => {
    const seen = new Set();
    const list = [];
    GLOBAL_CITIES_DATABASE.forEach(c => {
        if (c.countryZh === '中国' && c.admin1 && !seen.has(c.admin1)) {
            seen.add(c.admin1);
            list.push({
                admin1: c.admin1,
                admin1Jp: CN_ADMIN1_JP_MAP[c.admin1] || c.admin1,
                isDirect: CN_DIRECT_ADMIN1.has(c.admin1),
                representativeCity: c
            });
        }
    });
    return list;
})();
// 问卷题目定义（17道必答题）
const QUESTIONNAIRE_QUESTIONS = [
    { id: 11, part: 1, titleZh: "你是否做好终身长期饲养狗狗的准备？", titleJp: "終生可飼育（10〜15年以上）の覚悟と計画はありますか？", type: "single", options: [
            { key: "A", labelZh: "做好准备，未来环境变化也会承担照顾责任", labelJp: "環境が変わっても生涯責任を持つ", val: 100, pause: false },
            { key: "B", labelZh: "愿意长期饲养，但还需要考虑未来生活变化", labelJp: "長期飼育希望だが将来の変動を検討中", val: 75, pause: false },
            { key: "C", labelZh: "目前没有明确的长期计划", labelJp: "明確な長期計画はない", val: 35, pause: "longterm_unclear" },
            { key: "D", labelZh: "只考虑在现阶段饲养，未来可能无法继续照顾", labelJp: "現時点のみ、将来は継続困難な可能性あり", val: 0, pause: "longterm_short" }
        ] },
    // PART 1
    { id: 1, part: 1, titleZh: "你目前长期居住在哪个国家或城市？", titleJp: "現在、長期的に居住している国・都市はどこですか？", type: "city_picker" },
    { id: 2, part: 1, titleZh: "你目前居住在什么样的住宅？", titleJp: "住居のタイプを選択してください。", type: "single", options: [
            { key: "A", labelZh: "公寓 / Apartment", labelJp: "アパート", val: 80, cat: "apt" },
            { key: "B", labelZh: "集合住宅 / Condominium", labelJp: "マンション", val: 85, cat: "apt" },
            { key: "C", labelZh: "独栋住宅 / House", labelJp: "一戸建て", val: 95, cat: "house" },
            { key: "D", labelZh: "带庭院的住宅 / House with garden", labelJp: "庭付き一戸建て", val: 100, cat: "garden" },
            { key: "E", labelZh: "其他 / Other", labelJp: "その他", val: 70, cat: "apt" }
        ] },
    { id: 5, part: 1, titleZh: "目前与你共同生活的家庭成员有哪些？", titleJp: "同居しているご家族・ペットを選択してください（複数可）。", type: "multi", options: [
            { key: "A", labelZh: "独自居住", labelJp: "一人暮らし", exclusive: true },
            { key: "B", labelZh: "成年人", labelJp: "大人" },
            { key: "C", labelZh: "儿童（12岁以下）", labelJp: "子供（12歳以下）" },
            { key: "D", labelZh: "老年人", labelJp: "高齢者" },
            { key: "E", labelZh: "其他狗狗", labelJp: "先住犬" },
            { key: "F", labelZh: "其他宠物", labelJp: "その他ペット" }
        ] },
    // PART 2
    { id: 6, part: 2, titleZh: "你每天有多长时间不在家？", titleJp: "あなたが1日に家を空ける時間（犬のお留守番時間）はどのくらいですか？", type: "single", options: [
            { key: "A", labelZh: "2小时以内", labelJp: "2時間以内", val: 100, hours: 2 },
            { key: "B", labelZh: "2～4小时", labelJp: "2〜4時間", val: 90, hours: 4 },
            { key: "C", labelZh: "4～6小时", labelJp: "4〜6時間", val: 75, hours: 6 },
            { key: "D", labelZh: "6～8小时", labelJp: "6〜8時間", val: 55, hours: 8 },
            { key: "E", labelZh: "8小时以上", labelJp: "8時間以上", val: 35, hours: 10 }
        ] },
    { id: 7, part: 2, titleZh: "你每天能够为狗狗提供多少散步和运动时间？", titleJp: "1日に確保できる散歩・運動時間は？", type: "single", options: [
            { key: "A", labelZh: "30分钟以内", labelJp: "30分以内", val: 25, mins: 30 },
            { key: "B", labelZh: "30分钟～1小时", labelJp: "30分〜1時間", val: 60, mins: 60 },
            { key: "C", labelZh: "1～2小时", labelJp: "1〜2時間", val: 90, mins: 90 },
            { key: "D", labelZh: "2小时以上", labelJp: "2時間以上", val: 100, mins: 120 }
        ] },
    { id: 8, part: 2, titleZh: "除了散步，每天可以花多少时间陪伴与训练狗狗？", titleJp: "散歩以外で1日に触れ合いや教育に使える時間は？", type: "single", options: [
            { key: "A", labelZh: "15分钟以内", labelJp: "15分以内", val: 25 },
            { key: "B", labelZh: "15～30分钟", labelJp: "15〜30分", val: 55 },
            { key: "C", labelZh: "30分钟～1小时", labelJp: "30分〜1時間", val: 85 },
            { key: "D", labelZh: "1小时以上", labelJp: "1時間以上", val: 100 }
        ] },
    { id: 9, part: 2, titleZh: "您平时能为狗狗的日常护理（如刷牙、身体检查、梳毛等）花多少时间？", titleJp: "日頃のお手入れ（歯みがき・体のチェック・ブラッシングなど）に、どれくらい時間をかけられますか？", helpZh: "日常护理包括刷牙、检查眼睛、耳朵、皮肤和脚掌，以及梳毛等。不同犬种和毛质所需的梳毛频率也有所不同。", helpJp: "歯みがきや目・耳・皮膚・足先のチェック、ブラッシングなどを含みます。ブラッシングの頻度は犬種や毛質によって異なります。", type: "single", options: [
            { key: "A", labelZh: "每天都可以花时间梳理护理", labelJp: "毎日お手入れできる", val: 100 },
            { key: "B", labelZh: "每周可以安排几次护理", labelJp: "週に数回お手入れできる", val: 85 },
            { key: "C", labelZh: "希望日常护理需求尽量少", labelJp: "手入れが少ない犬種が良い", val: 80 },
            { key: "D", labelZh: "愿意定期预约专业美容服务", labelJp: "定期的にサロンを利用する", val: 95 }
        ] },
    { id: 10, part: 2, titleZh: "你是否有能力承担狗狗日常饲养与医疗费用？", titleJp: "飼育費用や突然の医療費への経済的準備はできていますか？", type: "single", options: [
            { key: "A", labelZh: "能够承担日常开销、常规及突发医疗费用", labelJp: "日常・医療・突発費用ともに準備済み", val: 100, pause: false },
            { key: "B", labelZh: "能够承担日常及常规医疗，尚未准备突发预算", labelJp: "日常・定期医療は可能、突発予備費は未定", val: 65, pause: false },
            { key: "C", labelZh: "目前还不清楚实际需要多少费用", labelJp: "必要な費用がまだよく分からない", val: 30, pause: "finance_unknown" },
            { key: "D", labelZh: "目前的经济条件还无法承担这些费用", labelJp: "現在の経済状況では厳しい", val: 0, pause: "finance_unable" }
        ] },
    { id: 13, part: 2, titleZh: "你是否有饲养狗狗的经验？", titleJp: "犬の飼育経験はありますか？", type: "single", options: [
            { key: "A", labelZh: "有丰富的养狗经验", labelJp: "豊富な経験あり", val: 100 },
            { key: "B", labelZh: "有一些养狗经验", labelJp: "多少の経験あり", val: 90 },
            { key: "C", labelZh: "没有经验，但愿意学习并接受专业指导", labelJp: "初心者だが熱心に学ぶ意欲あり", val: 90 },
            { key: "D", labelZh: "没有经验，也不太了解训练和照顾", labelJp: "初心者で知識もまだ少ない", val: 35 }
        ] },
    // PART 3
    { id: 14, part: 3, titleZh: "你更喜欢什么体型的狗狗？", titleJp: "希望する犬のサイズは？", type: "single", options: [
            { key: "A", labelZh: "小型犬 / Small", labelJp: "小型犬", val: "small" },
            { key: "B", labelZh: "中型犬 / Medium", labelJp: "中型犬", val: "medium" },
            { key: "C", labelZh: "大型犬 / Large", labelJp: "大型犬", val: "large" },
            { key: "D", labelZh: "超大型犬 / Giant", labelJp: "超大型犬", val: "giant" },
            { key: "E", labelZh: "无特别偏好 / No preference", labelJp: "こだわりなし", val: "any" }
        ] },
    { id: 15, part: 3, titleZh: "你能接受狗狗有多严重的掉毛情况？", titleJp: "抜け毛の容認程度は？", type: "single", options: [
            { key: "A", labelZh: "非常介意，希望尽可能少掉毛", labelJp: "抜け毛は極力少ない方が良い", val: 20 },
            { key: "B", labelZh: "可以接受少量掉毛", labelJp: "少々の抜け毛ならOK", val: 45 },
            { key: "C", labelZh: "可以接受中等程度掉毛", labelJp: "標準的な抜け毛は許容できる", val: 75 },
            { key: "D", labelZh: "不太介意掉毛程度", labelJp: "全く気にしない", val: 100 }
        ] },
    { id: 16, part: 3, titleZh: "你希望狗狗拥有怎样的活泼程度？", titleJp: "犬の活発さの好みは？", type: "single", options: [
            { key: "A", labelZh: "喜欢活泼好动、精力充沛的狗狗", labelJp: "活発で元気が良い犬", val: 90 },
            { key: "B", labelZh: "喜欢适度活泼、能玩也能休息的狗狗", labelJp: "適度に活発な犬", val: 65 },
            { key: "C", labelZh: "喜欢比较安静、温顺的狗狗", labelJp: "穏やかで静かな犬", val: 40 }
        ] },
    { id: 17, part: 3, titleZh: "你希望狗狗拥有怎样的独立性？", titleJp: "犬の自立性・べったり度の好みは？", type: "single", options: [
            { key: "A", labelZh: "喜欢比较黏人的狗狗", labelJp: "甘えん坊でベったりな犬", val: 25 },
            { key: "B", labelZh: "喜欢亲人但也有自己空间的狗狗", labelJp: "フレンドリーかつ程よく自立した犬", val: 55 },
            { key: "C", labelZh: "喜欢比较独立的狗狗", labelJp: "マイペースで自立した犬", val: 80 }
        ] },
    { id: 18, part: 3, titleZh: "你对狗狗吠叫的接受程度如何？", titleJp: "無駄吠え・声の大きさの容認度は？", type: "single", options: [
            { key: "A", labelZh: "非常介意，希望尽量安静", labelJp: "静かな犬が良い（無駄吠えNG）", val: 25 },
            { key: "B", labelZh: "偶尔吠叫可以接受", labelJp: "たまの無駄吠えなら許容", val: 60 },
            { key: "C", labelZh: "不太介意吠叫", labelJp: "吠え声はあまり気にしない", val: 90 }
        ] },
    { id: 19, part: 3, titleZh: "你希望狗狗的训练难度如何？", titleJp: "しつけのしやすさの希望は？", type: "single", options: [
            { key: "A", labelZh: "希望非常聪明、容易执行指令", labelJp: "賢く指示に従いやすい犬", val: 90 },
            { key: "B", labelZh: "可以接受正常程度的训练", labelJp: "一般的なしつけ易さでOK", val: 70 },
            { key: "C", labelZh: "不介意狗狗有想法，愿意耐心训练", labelJp: "マイペースでも根気強く教える", val: 40 }
        ] },
    { id: 20, part: 3, titleZh: "你更希望狗狗如何与陌生人及其他动物相处？", titleJp: "社交性や他者への態度の希望は？", type: "single", options: [
            { key: "A", labelZh: "喜欢亲人、友善、易相处的狗狗", labelJp: "誰にでも人好意的な犬", val: 90 },
            { key: "B", labelZh: "希望比较温和，但需要时间熟悉", labelJp: "最初は慎重だが慣れると親しい犬", val: 60 },
            { key: "C", labelZh: "喜欢独立、警觉性强的狗狗", labelJp: "警戒心があり頼もしい犬", val: 35 },
            { key: "D", labelZh: "没有特别偏好", labelJp: "こだわりなし", val: 50 }
        ] },
];
// 网站2中已有的犬种细分指标。未录入的犬种保留为空，不以虚构数值补齐。
const BREED_MATCH_EXTENSIONS = { "chihuahua": { "exerciseNeed": 30, "companionNeed": 80, "groomingNeed": 30, "apartmentFit": 95, "sizeCat": "small", "heatTol": 90, "coldTol": 20 }, "basenji": { "exerciseNeed": 60, "companionNeed": 50, "groomingNeed": 20, "apartmentFit": 80, "sizeCat": "medium", "heatTol": 95, "coldTol": 30 }, "fila_brasileiro": { "exerciseNeed": 75, "companionNeed": 60, "groomingNeed": 40, "apartmentFit": 30, "sizeCat": "large", "heatTol": 85, "coldTol": 40 }, "shar_pei": { "exerciseNeed": 45, "companionNeed": 50, "groomingNeed": 60, "apartmentFit": 75, "sizeCat": "medium", "heatTol": 80, "coldTol": 45 }, "xoloitzcuintle": { "exerciseNeed": 50, "companionNeed": 65, "groomingNeed": 30, "apartmentFit": 85, "sizeCat": "medium", "heatTol": 95, "coldTol": 15 }, "kelpie": { "exerciseNeed": 95, "companionNeed": 60, "groomingNeed": 40, "apartmentFit": 40, "sizeCat": "medium", "heatTol": 90, "coldTol": 50 }, "canaan_dog": { "exerciseNeed": 65, "companionNeed": 45, "groomingNeed": 35, "apartmentFit": 60, "sizeCat": "medium", "heatTol": 95, "coldTol": 50 }, "azawakh": { "exerciseNeed": 80, "companionNeed": 40, "groomingNeed": 20, "apartmentFit": 50, "sizeCat": "large", "heatTol": 100, "coldTol": 25 }, "saluki": { "exerciseNeed": 85, "companionNeed": 50, "groomingNeed": 40, "apartmentFit": 55, "sizeCat": "large", "heatTol": 95, "coldTol": 35 }, "kangal": { "exerciseNeed": 70, "companionNeed": 40, "groomingNeed": 50, "apartmentFit": 15, "sizeCat": "giant", "heatTol": 85, "coldTol": 70 }, "pomeranian": { "exerciseNeed": 35, "companionNeed": 90, "groomingNeed": 75, "apartmentFit": 95, "sizeCat": "small", "heatTol": 60, "coldTol": 55 }, "german_shepherd": { "exerciseNeed": 90, "companionNeed": 75, "groomingNeed": 65, "apartmentFit": 45, "sizeCat": "large", "heatTol": 65, "coldTol": 75 }, "golden_retriever": { "exerciseNeed": 85, "companionNeed": 95, "groomingNeed": 80, "apartmentFit": 50, "sizeCat": "large", "heatTol": 60, "coldTol": 70 }, "shiba_inu": { "exerciseNeed": 60, "companionNeed": 40, "groomingNeed": 50, "apartmentFit": 85, "sizeCat": "medium", "heatTol": 65, "coldTol": 75 }, "border_collie": { "exerciseNeed": 100, "companionNeed": 80, "groomingNeed": 70, "apartmentFit": 40, "sizeCat": "medium", "heatTol": 60, "coldTol": 70 }, "siberian_husky": { "exerciseNeed": 95, "companionNeed": 70, "groomingNeed": 75, "apartmentFit": 45, "sizeCat": "medium", "heatTol": 30, "coldTol": 95 }, "labrador": { "exerciseNeed": 85, "companionNeed": 90, "groomingNeed": 50, "apartmentFit": 60, "sizeCat": "large", "heatTol": 55, "coldTol": 80 }, "akita": { "exerciseNeed": 65, "companionNeed": 40, "groomingNeed": 65, "apartmentFit": 50, "sizeCat": "large", "heatTol": 40, "coldTol": 90 }, "saint_bernard": { "exerciseNeed": 60, "companionNeed": 70, "groomingNeed": 80, "apartmentFit": 20, "sizeCat": "giant", "heatTol": 25, "coldTol": 95 }, "eurasier": { "exerciseNeed": 55, "companionNeed": 65, "groomingNeed": 70, "apartmentFit": 75, "sizeCat": "medium", "heatTol": 45, "coldTol": 85 }, "samoyed": { "exerciseNeed": 85, "companionNeed": 90, "groomingNeed": 95, "apartmentFit": 50, "sizeCat": "medium", "heatTol": 15, "coldTol": 100 }, "malamute": { "exerciseNeed": 90, "companionNeed": 75, "groomingNeed": 85, "apartmentFit": 35, "sizeCat": "large", "heatTol": 20, "coldTol": 100 }, "greenland_dog": { "exerciseNeed": 95, "companionNeed": 55, "groomingNeed": 70, "apartmentFit": 25, "sizeCat": "large", "heatTol": 10, "coldTol": 100 }, "canadian_eskimo_dog": { "exerciseNeed": 90, "companionNeed": 50, "groomingNeed": 70, "apartmentFit": 25, "sizeCat": "large", "heatTol": 15, "coldTol": 100 }, "norwegian_elkhound": { "exerciseNeed": 75, "companionNeed": 65, "groomingNeed": 65, "apartmentFit": 60, "sizeCat": "medium", "heatTol": 30, "coldTol": 95 } };
// 仅为网站2中存在的同 ID 犬种补充问卷匹配指标；原始 50 犬种档案和原字段保持不变。
CLIMATE_DATA.forEach(zone => {
    zone.breeds.forEach(breed => {
        if (BREED_MATCH_EXTENSIONS[breed.id])
            breed.ext = BREED_MATCH_EXTENSIONS[breed.id];
    });
});
// ================= 3. Hero 标题组件 =================
function HeroInteractiveTitle({ titleText, lang }) {
    const containerRef = useRef(null);
    const [maskStyle, setMaskStyle] = useState({
        maskImage: 'radial-gradient(circle 0px at 0px 0px, black 0%, transparent 100%)',
        WebkitMaskImage: 'radial-gradient(circle 0px at 0px 0px, black 0%, transparent 100%)'
    });
    const fontClass = lang === 'zh' ? 'font-title-zh' : 'font-title-jp';
    const handleMouseMove = (e) => {
        if (!containerRef.current)
            return;
        const rect = containerRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const radialGradient = `radial-gradient(circle 25px at ${x}px ${y}px, black 0%, rgba(0,0,0,0.85) 60%, transparent 100%)`;
        setMaskStyle({
            maskImage: radialGradient,
            WebkitMaskImage: radialGradient
        });
    };
    const handleMouseLeave = () => {
        const emptyGradient = `radial-gradient(circle 0px at 0px 0px, black 0%, transparent 100%)`;
        setMaskStyle({
            maskImage: emptyGradient,
            WebkitMaskImage: emptyGradient
        });
    };
    return (React.createElement("div", { className: "mb-5 text-center" },
        React.createElement("div", { ref: containerRef, onMouseMove: handleMouseMove, onMouseLeave: handleMouseLeave, className: "hero-flashlight-wrapper" },
            React.createElement("h2", { className: `${fontClass} hero-title-base text-5xl sm:text-6xl md:text-7xl tracking-tight leading-tight` }, titleText),
            React.createElement("h2", { className: `${fontClass} hero-title-overlay text-5xl sm:text-6xl md:text-7xl tracking-tight leading-tight`, style: maskStyle, "aria-hidden": "true" }, titleText))));
}
// Pop 标注地图组件
function InteractiveWorldMap({ lang, onSelectZone }) {
    const [hoveredZoneId, setHoveredZoneId] = useState(null);
    const t = I18N_TEXT[lang];
    const zoneColors = {
        A: '#009B3A',
        B: '#EAE511',
        C: '#2B87FF',
        D: '#4A76C6',
        E: '#15B9F6'
    };
    const handleZoneClick = (zoneId) => {
        const foundZone = CLIMATE_DATA.find(z => z.id === zoneId);
        if (foundZone) {
            onSelectZone(foundZone);
        }
    };
    return (React.createElement("div", { className: "pop-card bg-white p-4 md:p-6 rounded-3xl mb-10 relative overflow-hidden" },
        React.createElement("div", { className: "flex flex-col md:flex-row justify-between md:items-center gap-3 mb-4 cursor-default" },
            React.createElement("div", null,
                React.createElement("div", { className: "flex items-center gap-2 text-slate-900 font-black text-2xl md:text-3xl tracking-tight" },
                    React.createElement("i", { "data-lucide": "globe", className: "w-7 h-7" }),
                    React.createElement("span", { className: "map-section-title" }, t.mapSectionTitle)),
                React.createElement("p", { className: "text-xs font-bold text-slate-500 mt-1" }, t.mapSectionSub)),
            React.createElement("div", { className: "flex flex-wrap items-center gap-2 font-mono font-black text-xs" }, CLIMATE_DATA.map(zone => (React.createElement("button", { key: zone.id, onClick: () => handleZoneClick(zone.id), className: "flex items-center gap-1.5 px-3 py-1 bg-white hover:bg-slate-100 border-2 border-slate-900 rounded-xl transition-all cursor-pointer shadow-[3px_3px_0px_0px_#1A1A1A] active:translate-x-0.5 active:translate-y-0.5" },
                React.createElement("span", { className: "w-3.5 h-3.5 rounded-full border border-slate-900 inline-block shadow-sm", style: { backgroundColor: zone.cardBg } }),
                React.createElement("span", { className: "text-slate-900" },
                    zone.id,
                    " ",
                    lang === 'zh' ? zone.nameZh.slice(0, 2) : zone.nameJp.slice(0, 2))))))),
        React.createElement("div", { className: "relative w-full aspect-[1000/500] bg-slate-50 border-4 border-slate-900 rounded-2xl overflow-hidden shadow-inner flex items-center justify-center p-2" },
            React.createElement("div", { className: "absolute inset-0 bg-halftone opacity-15 pointer-events-none" }),
            React.createElement("svg", { viewBox: "0 0 1000 500", className: "w-full h-full select-none" },
                React.createElement("g", { fill: "#1A1A1A", opacity: "0.3" },
                    React.createElement("circle", { cx: "85", cy: "45", r: "2" }),
                    React.createElement("circle", { cx: "230", cy: "35", r: "1.5" }),
                    React.createElement("circle", { cx: "430", cy: "25", r: "2" }),
                    React.createElement("circle", { cx: "680", cy: "30", r: "1.5" }),
                    React.createElement("circle", { cx: "920", cy: "40", r: "2" }),
                    React.createElement("path", { d: "M 60 410 L 64 414 L 60 418 L 56 414 Z" }),
                    React.createElement("path", { d: "M 940 310 L 944 314 L 940 318 L 936 314 Z" })),
                React.createElement("g", { stroke: "#CBD5E1", strokeWidth: "1", opacity: "0.7" },
                    React.createElement("line", { x1: "0", y1: "80", x2: "1000", y2: "80", strokeDasharray: "3 3" }),
                    React.createElement("line", { x1: "0", y1: "170", x2: "1000", y2: "170", strokeDasharray: "3 3" }),
                    React.createElement("line", { x1: "0", y1: "250", x2: "1000", y2: "250", strokeWidth: "2", stroke: "#64748B" }),
                    React.createElement("line", { x1: "0", y1: "330", x2: "1000", y2: "330", strokeDasharray: "3 3" }),
                    React.createElement("line", { x1: "0", y1: "430", x2: "1000", y2: "430", strokeDasharray: "3 3" })),
                React.createElement("g", { className: "map-climate-path", onMouseEnter: () => setHoveredZoneId('E'), onMouseLeave: () => setHoveredZoneId(null), onClick: () => handleZoneClick('E'), fill: zoneColors.E },
                    React.createElement("path", { d: "M 330,40 L 400,30 L 415,75 L 360,110 L 335,80 Z" }),
                    React.createElement("path", { d: "M 470,25 L 530,20 L 525,45 L 475,40 Z" }),
                    React.createElement("path", { d: "M 720,20 L 840,15 L 860,35 L 740,35 Z" }),
                    React.createElement("path", { d: "M 80,445 C 250,430 450,425 600,430 C 750,435 920,445 950,490 L 50,490 Z" })),
                React.createElement("g", { className: "map-climate-path", onMouseEnter: () => setHoveredZoneId('D'), onMouseLeave: () => setHoveredZoneId(null), onClick: () => handleZoneClick('D'), fill: zoneColors.D },
                    React.createElement("path", { d: "M 70,85 L 140,75 L 200,65 L 290,70 L 305,115 L 240,145 L 170,140 L 130,125 L 90,120 Z" }),
                    React.createElement("path", { d: "M 475,55 L 530,50 L 535,85 L 480,90 Z" }),
                    React.createElement("path", { d: "M 540,45 L 720,38 L 930,35 L 960,80 L 890,125 L 730,120 L 570,105 L 540,75 Z" })),
                React.createElement("g", { className: "map-climate-path", onMouseEnter: () => setHoveredZoneId('C'), onMouseLeave: () => setHoveredZoneId(null), onClick: () => handleZoneClick('C'), fill: zoneColors.C },
                    React.createElement("path", { d: "M 125,130 L 260,125 L 295,140 L 285,190 L 160,205 L 135,175 Z" }),
                    React.createElement("path", { d: "M 445,95 L 545,90 L 565,145 L 475,160 L 435,140 Z" }),
                    React.createElement("path", { d: "M 700,125 L 870,120 L 880,180 L 750,215 L 685,165 Z" }),
                    React.createElement("path", { d: "M 885,135 Q 905,155 890,185 Q 875,165 885,135 Z" }),
                    React.createElement("path", { d: "M 310,310 L 355,300 L 330,410 L 295,390 Z" }),
                    React.createElement("path", { d: "M 830,345 L 880,335 L 875,390 L 825,380 Z" }),
                    React.createElement("path", { d: "M 915,380 L 935,370 L 930,410 L 910,400 Z" })),
                React.createElement("g", { className: "map-climate-path", onMouseEnter: () => setHoveredZoneId('B'), onMouseLeave: () => setHoveredZoneId(null), onClick: () => handleZoneClick('B'), fill: zoneColors.B },
                    React.createElement("path", { d: "M 420,165 L 575,170 L 585,235 L 425,230 Z" }),
                    React.createElement("path", { d: "M 580,160 L 725,165 L 705,235 L 590,225 Z" }),
                    React.createElement("path", { d: "M 755,305 L 865,300 L 850,365 L 745,355 Z" }),
                    React.createElement("path", { d: "M 140,180 L 210,175 L 200,225 L 155,215 Z" })),
                React.createElement("g", { className: "map-climate-path", onMouseEnter: () => setHoveredZoneId('A'), onMouseLeave: () => setHoveredZoneId(null), onClick: () => handleZoneClick('A'), fill: zoneColors.A },
                    React.createElement("path", { d: "M 215,220 L 365,210 L 385,300 L 270,310 Z" }),
                    React.createElement("path", { d: "M 435,235 L 570,240 L 550,345 L 455,335 Z" }),
                    React.createElement("path", { d: "M 660,220 L 830,215 L 845,305 L 695,295 Z" })),
                React.createElement("g", { stroke: "#1A1A1A", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round", opacity: "0.95" },
                    React.createElement("g", { transform: "translate(180, 95)" },
                        React.createElement("path", { d: "M -5,4 L 0,-1 L 5,4 L 4,9 L -4,9 Z M -2,9 L -2,5 L 1,5 L 1,9", fill: "#FFFDF9" })),
                    React.createElement("g", { transform: "translate(300, 255)" },
                        React.createElement("path", { d: "M 0,10 L 0,-2 M -6,2 C -8,-4 0,-8 0,-8 C 0,-8 8,-4 6,2", fill: "#006024" })),
                    React.createElement("g", { transform: "translate(480, 190)" },
                        React.createElement("path", { d: "M 0,8 L 0,-6 M -4,-1 L -4,-3 C -4,-5 0,-5 0,-3 M 4,-1 L 4,-3 C 4,-5 0,-5 0,-3", fill: "none", strokeWidth: "2", stroke: "#3D2314" })),
                    React.createElement("g", { transform: "translate(840, 310)" },
                        React.createElement("path", { d: "M -4,6 L 0,-2 C 2,-4 5,-2 4,1 L 6,4 L 2,6 Z", fill: "#D31127" })),
                    React.createElement("g", { transform: "translate(480, 460)" },
                        React.createElement("path", { d: "M -3,5 C -5,0 0,-4 3,5 Z", fill: "#1A1A1A" }),
                        React.createElement("circle", { cx: "0", cy: "0", r: "1.5", fill: "#FFFDF9" }))),
                React.createElement("g", { fontFamily: "sans-serif", fontWeight: "900", textAnchor: "middle", fill: "#1A1A1A" },
                    React.createElement("text", { x: "180", y: "145", fontSize: "16", fill: "#FFF", stroke: "#1A1A1A", strokeWidth: "3.5", paintOrder: "stroke" }, t.continents.northAmerica),
                    React.createElement("text", { x: "320", y: "290", fontSize: "16", fill: "#FFF", stroke: "#1A1A1A", strokeWidth: "3.5", paintOrder: "stroke" }, t.continents.southAmerica),
                    React.createElement("text", { x: "495", y: "115", fontSize: "15", fill: "#FFF", stroke: "#1A1A1A", strokeWidth: "3.5", paintOrder: "stroke" }, t.continents.europe),
                    React.createElement("text", { x: "500", y: "240", fontSize: "16", fill: "#FFF", stroke: "#1A1A1A", strokeWidth: "3.5", paintOrder: "stroke" }, t.continents.africa),
                    React.createElement("text", { x: "750", y: "115", fontSize: "18", fill: "#FFF", stroke: "#1A1A1A", strokeWidth: "4", paintOrder: "stroke" }, t.continents.asia),
                    React.createElement("text", { x: "825", y: "340", fontSize: "16", fill: "#FFF", stroke: "#1A1A1A", strokeWidth: "3.5", paintOrder: "stroke" }, t.continents.oceania),
                    React.createElement("text", { x: "500", y: "475", fontSize: "16", fill: "#FFF", stroke: "#1A1A1A", strokeWidth: "3.5", paintOrder: "stroke" }, t.continents.antarctica),
                    React.createElement("g", { fontSize: "11", fontFamily: "monospace", opacity: "0.85", fill: "#0F172A", textAnchor: "middle" },
                        React.createElement("text", { x: "360", y: "195" }, t.continents.atlantic),
                        React.createElement("text", { x: "85", y: "260" }, t.continents.pacific),
                        React.createElement("text", { x: "630", y: "315" }, t.continents.indian)),
                    React.createElement("text", { x: "15", y: "244", textAnchor: "start", fill: "#1A1A1A", fontSize: "10", fontFamily: "monospace", fontWeight: "900" }, "EQUATOR / \u8D64\u9053 (0\u00B0)"))),
            hoveredZoneId && (React.createElement("div", { className: "absolute bottom-4 left-4 right-4 sm:left-auto sm:right-4 max-w-md bg-slate-900 text-white p-3.5 rounded-2xl border-2 border-white shadow-2xl animate-fadeIn pointer-events-none z-30" },
                React.createElement("div", { className: "flex items-center gap-2" },
                    React.createElement("span", { className: "w-3.5 h-3.5 rounded-full border border-white shrink-0", style: { backgroundColor: zoneColors[hoveredZoneId] } }),
                    React.createElement("span", { className: "font-mono text-xs font-black text-amber-300" },
                        "ZONE ",
                        hoveredZoneId,
                        " CONTINENTAL CLIMATE")),
                React.createElement("p", { className: "text-xs font-bold leading-relaxed mt-1.5 text-slate-100" }, t.continentTooltips[hoveredZoneId]))))));
}
// Canvas 动态浮动粒子
function FloatingParticles() {
    const canvasRef = useRef(null);
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas)
            return;
        const ctx = canvas.getContext('2d');
        let animationFrameId;
        const colors = ['#009B3A', '#EAE511', '#2B87FF', '#4A76C6', '#15B9F6'];
        const shapes = ['circle', 'square', 'cross'];
        const particleCount = 25;
        let width = (canvas.width = window.innerWidth);
        let height = (canvas.height = window.innerHeight);
        const handleResize = () => {
            if (!canvas)
                return;
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
        };
        window.addEventListener('resize', handleResize);
        const particles = Array.from({ length: particleCount }, () => ({
            x: Math.random() * width,
            y: Math.random() * height,
            size: Math.random() * 8 + 4,
            color: colors[Math.floor(Math.random() * colors.length)],
            shape: shapes[Math.floor(Math.random() * shapes.length)],
            speedY: Math.random() * 0.4 + 0.15,
            speedX: Math.random() * 0.2 - 0.1,
            opacity: Math.random() * 0.4 + 0.3,
            opacitySpeed: Math.random() * 0.01 + 0.005,
            opacityIncreasing: Math.random() > 0.5,
            angle: Math.random() * Math.PI * 2
        }));
        const render = () => {
            ctx.clearRect(0, 0, width, height);
            particles.forEach(p => {
                p.y -= p.speedY;
                p.angle += 0.02;
                p.x += Math.sin(p.angle) * 0.3;
                if (p.opacityIncreasing) {
                    p.opacity += p.opacitySpeed;
                    if (p.opacity >= 0.75)
                        p.opacityIncreasing = false;
                }
                else {
                    p.opacity -= p.opacitySpeed;
                    if (p.opacity <= 0.25)
                        p.opacityIncreasing = true;
                }
                if (p.y < -20) {
                    p.y = height + 20;
                    p.x = Math.random() * width;
                }
                ctx.save();
                ctx.globalAlpha = p.opacity;
                ctx.fillStyle = p.color;
                ctx.strokeStyle = p.color;
                ctx.lineWidth = 2;
                if (p.shape === 'circle') {
                    ctx.beginPath();
                    ctx.arc(p.x, p.y, p.size / 2, 0, Math.PI * 2);
                    ctx.fill();
                }
                else if (p.shape === 'square') {
                    ctx.fillRect(p.x - p.size / 2, p.y - p.size / 2, p.size, p.size);
                }
                else if (p.shape === 'cross') {
                    const len = p.size / 2;
                    ctx.beginPath();
                    ctx.moveTo(p.x - len, p.y);
                    ctx.lineTo(p.x + len, p.y);
                    ctx.moveTo(p.x, p.y - len);
                    ctx.lineTo(p.x, p.y + len);
                    ctx.stroke();
                }
                ctx.restore();
            });
            animationFrameId = requestAnimationFrame(render);
        };
        render();
        return () => {
            window.removeEventListener('resize', handleResize);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);
    return (React.createElement("canvas", { ref: canvasRef, className: "fixed inset-0 pointer-events-none z-0 transition-opacity duration-500" }));
}
function App() {
    const [lang, setLang] = useState('zh');
    const [isArchiveMenuOpen, setIsArchiveMenuOpen] = useState(false);
    useEffect(() => {
        document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'ja';
    }, [lang]);
    const [selectedZone, setSelectedZone] = useState(null);
    const [showPoster, setShowPoster] = useState(false);
    const [isFlipping, setIsFlipping] = useState(false);
    const [showWhiteoutMask, setShowWhiteoutMask] = useState(false);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const posterFlipTimeoutsRef = useRef([]);
    const [selectedDog, setSelectedDog] = useState(null);
    const [showConceptModal, setShowConceptModal] = useState(false);
    // 问卷模块状态：独立于原有气候档案浏览状态，避免覆盖网站1的导航与弹窗逻辑。
    const [surveyPage, setSurveyPage] = useState('HOME'); // HOME | QUESTIONNAIRE | RESULT
    const pendingHomeScrollRef = useRef(null);
    useEffect(() => {
        if (selectedZone || surveyPage !== 'HOME')
            return;
        const revealTargets = document.querySelectorAll('.home-landing .scroll-reveal, .home-landing .scroll-reveal-item');
        if (!('IntersectionObserver' in window)) {
            revealTargets.forEach(target => target.classList.add('is-visible'));
            return;
        }
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                }
                else {
                    entry.target.classList.remove('is-visible');
                }
            });
        }, { threshold: 0.12, rootMargin: '0px 0px -32px 0px' });
        revealTargets.forEach(target => observer.observe(target));
        return () => observer.disconnect();
    }, [selectedZone, surveyPage]);
    useEffect(() => {
        if (selectedZone || surveyPage !== 'HOME' || !pendingHomeScrollRef.current)
            return;
        const targetId = pendingHomeScrollRef.current;
        pendingHomeScrollRef.current = null;
        const frameId = requestAnimationFrame(() => {
            document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
        return () => cancelAnimationFrame(frameId);
    }, [selectedZone, surveyPage]);
    const [answers, setAnswers] = useState(() => {
        try {
            return JSON.parse(localStorage.getItem('DOG_MATCH_ANSWERS') || '{}');
        }
        catch (e) {
            return {};
        }
    });
    // 将问卷答案持久化：此 effect 必须位于拥有 answers 状态的 App 组件内。
    useEffect(() => {
        try {
            localStorage.setItem('DOG_MATCH_ANSWERS', JSON.stringify(answers));
        }
        catch (e) { }
    }, [answers]);
    const [selectedCountry, setSelectedCountry] = useState(() => {
        try {
            const saved = JSON.parse(localStorage.getItem('DOG_MATCH_ANSWERS') || '{}');
            return saved?.[1]?.country || '';
        }
        catch (e) {
            return '';
        }
    });
    const [selectedCnProvince, setSelectedCnProvince] = useState(() => {
        try {
            const saved = JSON.parse(localStorage.getItem('DOG_MATCH_ANSWERS') || '{}');
            const place = saved?.[1];
            if (place?.country !== '中国') return '';
            if (place.admin1) return place.admin1;
            const found = GLOBAL_CITIES_DATABASE.find(c => c.countryZh === '中国' && (c.cityZh === place.city || c.cityJp === place.city));
            return found?.admin1 || '';
        }
        catch (e) {
            return '';
        }
    });
    const [selectedCityObj, setSelectedCityObj] = useState(() => {
        try {
            const saved = JSON.parse(localStorage.getItem('DOG_MATCH_ANSWERS') || '{}');
            const place = saved?.[1];
            const cityName = place?.city;
            if (!cityName) return null;
            if (place.country === '日本') {
                const prefTarget = place.admin1 || cityName;
                const foundPref = JP_PREFECTURES.find(p => p.admin1 === prefTarget || p.cityZh === prefTarget);
                if (foundPref) return foundPref;
            }
            const found = GLOBAL_CITIES_DATABASE.find(c => c.countryZh === place.country && (c.cityZh === cityName || c.cityJp === cityName));
            if (found) return found;
            if (Number.isFinite(place.lat) && Number.isFinite(place.lon)) {
                const zone = place.zone || 'C';
                return { id: place.geonameId ? `om-${place.geonameId}` : 'saved-city', countryZh: place.country, countryJp: place.country, cityZh: cityName, cityJp: cityName, lat: place.lat, lon: place.lon, zone, zoneName: place.zoneName || `${zone}: ${({A:'Tropical Climate',B:'Dry Climate',C:'Temperate Climate',D:'Continental Climate',E:'Polar Climate'})[zone]}`, admin1: place.admin1 || '' };
            }
            return null;
        }
        catch (e) {
            return null;
        }
    });
    const [isCountryDropdownOpen, setIsCountryDropdownOpen] = useState(false);
    const [countrySearchText, setCountrySearchText] = useState('');
    const [isCnProvDropdownOpen, setIsCnProvDropdownOpen] = useState(false);
    const [cnProvSearchText, setCnProvSearchText] = useState('');
    const [isCityDropdownOpen, setIsCityDropdownOpen] = useState(false);
    const [citySearchText, setCitySearchText] = useState('');
    const countryPickerRef = useRef(null);
    const cnProvPickerRef = useRef(null);
    const cityPickerRef = useRef(null);
    const [currentQIndex, setCurrentQIndex] = useState(0);
    const [isCalculatingResult, setIsCalculatingResult] = useState(false);
    const [calcResults, setCalcResults] = useState(null);
    const [sortKey, setSortKey] = useState('size');
    const [sortOrder, setSortOrder] = useState('asc');
    const [isSortDropdownOpen, setIsSortDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);
    const t = I18N_TEXT[lang];
    const fallbackImg = "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&w=600&q=80";
    const defaultSortOrders = {
        size: 'asc',
        hairLoss: 'asc',
        barking: 'asc',
        playfulness: 'desc',
        independence: 'desc',
        trainability: 'desc',
        beginnerFriendly: 'desc'
    };
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsSortDropdownOpen(false);
            }
            if (countryPickerRef.current && !countryPickerRef.current.contains(event.target)) {
                setIsCountryDropdownOpen(false);
            }
            if (cnProvPickerRef.current && !cnProvPickerRef.current.contains(event.target)) {
                setIsCnProvDropdownOpen(false);
            }
            if (cityPickerRef.current && !cityPickerRef.current.contains(event.target)) {
                setIsCityDropdownOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleSelectSortKey = (key) => {
        setSortKey(key);
        setSortOrder(defaultSortOrders[key] || 'asc');
        setIsSortDropdownOpen(false);
    };
    useEffect(() => {
        const imageCache = [];
        CLIMATE_DATA.forEach(zone => {
            if (zone.posterImg) {
                const img = new Image();
                img.src = zone.posterImg;
                imageCache.push(img);
            }
            zone.breeds.forEach(breed => {
                if (breed.pixelImg) {
                    const imgPixel = new Image();
                    imgPixel.src = breed.pixelImg;
                    imageCache.push(imgPixel);
                }
                if (breed.realImg) {
                    const imgReal = new Image();
                    imgReal.src = breed.realImg;
                    imageCache.push(imgReal);
                }
            });
        });
    }, []);
    const handleGoHome = (targetSectionId = null) => {
        if (isTransitioning)
            return;
        const scrollTargetId = typeof targetSectionId === 'string' ? targetSectionId : null;
        setSurveyPage('HOME');
        setSelectedZone(null);
        setShowPoster(false);
        setIsFlipping(false);
        setShowWhiteoutMask(false);
        setSelectedDog(null);
        setShowConceptModal(false);
        setSortKey('size');
        setSortOrder('asc');
        setIsSortDropdownOpen(false);
        if (scrollTargetId) {
            pendingHomeScrollRef.current = scrollTargetId;
        }
        else {
            pendingHomeScrollRef.current = null;
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };
    const scrollToHomeSection = (sectionId) => {
        if (selectedZone || surveyPage !== 'HOME') {
            handleGoHome(sectionId);
            return;
        }
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };
    const handleArchiveZoneSelect = (zone) => {
        if (!selectedZone || zone.id === selectedZone.id)
            return;
        posterFlipTimeoutsRef.current.forEach(clearTimeout);
        posterFlipTimeoutsRef.current = [];
        setSelectedZone(zone);
        setIsFlipping(false);
        setShowWhiteoutMask(false);
        setIsTransitioning(false);
        setSelectedDog(null);
        setSortKey('size');
        setSortOrder('asc');
        setIsSortDropdownOpen(false);
        setIsArchiveMenuOpen(false);
        if (!showPoster) {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };
    const handleBackToPrev = () => {
        if (isTransitioning)
            return;
        if (!showPoster && selectedZone) {
            setShowPoster(true);
            setIsFlipping(false);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
        else {
            handleGoHome('home-archive-section');
        }
    };
    const handleTriggerFlipOpen = () => {
        if (isFlipping || isTransitioning)
            return;
        setIsTransitioning(true);
        setIsFlipping(true);
        posterFlipTimeoutsRef.current = [
            setTimeout(() => { setShowWhiteoutMask(true); }, 650),
            setTimeout(() => { setShowPoster(false); }, 700),
            setTimeout(() => {
                setIsFlipping(false);
                setShowWhiteoutMask(false);
                setIsTransitioning(false);
                posterFlipTimeoutsRef.current = [];
            }, 1400)
        ];
    };
    useEffect(() => {
        if (selectedZone) {
            document.documentElement.setAttribute('data-theme', selectedZone.id);
        }
        else {
            document.documentElement.removeAttribute('data-theme');
        }
    }, [selectedZone]);
    useEffect(() => {
        if (window.lucide && window.lucide.createIcons) {
            window.lucide.createIcons();
        }
    }, [selectedZone, showPoster, selectedDog, showConceptModal, lang, isSortDropdownOpen, sortKey, sortOrder, surveyPage, currentQIndex, calcResults]);
    const handleSwitchToggle = (e) => {
        setLang(e.target.checked ? 'jp' : 'zh');
    };
    const handleEnvelopeClick = (zone) => {
        if (isTransitioning)
            return;
        setSurveyPage('HOME');
        setSelectedZone(zone);
        setShowPoster(true);
        setIsFlipping(false);
        setSortKey('size');
        setSortOrder('asc');
        setIsSortDropdownOpen(false);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    // 问卷答案处理（单选 / 多选），保留在 localStorage 中。
    const handleAnswerOption = (questionId, optionKey, isMulti, optionObj) => {
        setAnswers(prev => {
            const next = { ...prev };
            if (isMulti) {
                let current = Array.isArray(next[questionId]) ? [...next[questionId]] : [];
                if (optionObj.exclusive)
                    current = [optionKey];
                else {
                    current = current.filter(k => k !== 'A');
                    current = current.includes(optionKey) ? current.filter(k => k !== optionKey) : [...current, optionKey];
                }
                next[questionId] = current;
            }
            else
                next[questionId] = optionKey;
            return next;
        });
    };
    const handleSelectCity = (cityObj) => {
        setSelectedCityObj(cityObj);
        setSelectedCountry(cityObj.countryZh);
        if (cityObj.countryZh === '中国') {
            setSelectedCnProvince(cityObj.admin1 || '');
        }
        else {
            setSelectedCnProvince('');
        }
        setAnswers(prev => ({ ...prev, 1: { country: cityObj.countryZh, city: cityObj.cityZh, zone: cityObj.zone, zoneName: cityObj.zoneName, lat: cityObj.lat, lon: cityObj.lon, admin1: cityObj.admin1 || '' } }));
    };
    const getUnfilledQuestionIds = () => {
        const unfilled = [];
        QUESTIONNAIRE_QUESTIONS.forEach(q => {
            if (q.isOptional)
                return;
            const answer = answers[q.id];
            if (!answer || (Array.isArray(answer) && answer.length === 0))
                unfilled.push(q.id);
        });
        return unfilled;
    };
    const goToNextQuestion = () => {
        setCurrentQIndex(prev => {
            return Math.min(QUESTIONNAIRE_QUESTIONS.length - 1, prev + 1);
        });
    };
    const goToPreviousQuestion = () => {
        setCurrentQIndex(prev => Math.max(0, prev - 1));
    };
    // 两个独立评分引擎：适养准备度（责任条件）与犬种匹配度（照护 / 气候 / 偏好）。
    const calculateFinalResults = () => {
        const unfilled = getUnfilledQuestionIds();
        if (unfilled.length) {
            const unfilledNumbers = unfilled.map(id => QUESTIONNAIRE_QUESTIONS.findIndex(q => q.id === id) + 1);
            alert(t.unfilledAlert + unfilledNumbers.join(', '));
            return;
        }
        setIsCalculatingResult(true);
        setTimeout(() => {
            let pauseReason = null;
            let isPending = false;
            const warningList = [];
            const qOpt = (id) => QUESTIONNAIRE_QUESTIONS.find(q => q.id === id)?.options?.find(o => o.key === answers[id]);
            const q2Opt = qOpt(2), q6Opt = qOpt(6), q7Opt = qOpt(7), q8Opt = qOpt(8), q9Opt = qOpt(9), q10Key = answers[10], q11Key = answers[11], q11Opt = qOpt(11), q13Opt = qOpt(13);
            // 明确的硬性暂停项；未确认事项单独列为提醒，不与硬性暂停混为一谈。
            if (q10Key === 'D')
                pauseReason = 'pauseFinance';
            if (q11Key === 'D')
                pauseReason = 'pauseLongterm';
            if (q10Key === 'C') {
                isPending = true;
                warningList.push('pendingFinance');
            }
            if (q11Key === 'C') {
                isPending = true;
                warningList.push('pendingLongterm');
            }
            if (q6Opt?.hours >= 8)
                warningList.push('longAway');
            const dim1Score = Math.round(q2Opt?.val ?? 50);
            const dim2Score = Math.round((q6Opt?.val ?? 50) * 0.25 + (q7Opt?.val ?? 50) * 0.45 + (q8Opt?.val ?? 50) * 0.30);
            const dim3Score = Math.round((q9Opt?.val ?? 50) * 0.60 + (q13Opt?.val ?? 50) * 0.40);
            const dim4Score = q10Key === 'A' ? 100 : q10Key === 'B' ? 65 : q10Key === 'C' ? 30 : 0;
            const dim5Score = Math.round(q11Opt?.val ?? 50);
            const overallReadiness = Math.round(dim1Score * 0.20 + dim2Score * 0.30 + dim3Score * 0.15 + dim4Score * 0.15 + dim5Score * 0.20);
            const dimScores = [dim1Score, dim2Score, dim3Score, dim4Score, dim5Score];
            const isBestDogOwner = overallReadiness >= 95 && dimScores.every(v => v >= 90) && !pauseReason && !isPending;
            const userZone = answers[1]?.zone || 'C';
            const userSize = qOpt(14)?.val;
            const userSheddingTol = qOpt(15)?.val ?? 50;
            const userPlayfulness = qOpt(16)?.val ?? 65;
            const userIndependence = qOpt(17)?.val ?? 55;
            const userBarkingTol = qOpt(18)?.val ?? 60;
            const userTrainability = qOpt(19)?.val ?? 70;
            const userWalkMins = q7Opt?.mins ?? 45;
            const allBreeds = [];
            CLIMATE_DATA.forEach(zone => zone.breeds.forEach(breed => allBreeds.push({ ...breed, parentZoneId: zone.id })));
            const scoredBreeds = allBreeds.map(breed => {
                const stats = breed.stats || {};
                const ext = breed.ext || {};
                let prefScore = 100;
                if (typeof stats.hairLoss === 'number' && stats.hairLoss > userSheddingTol)
                    prefScore -= (stats.hairLoss - userSheddingTol) * 0.6;
                if (typeof stats.barking === 'number' && stats.barking > userBarkingTol)
                    prefScore -= (stats.barking - userBarkingTol) * 0.6;
                if (typeof stats.playfulness === 'number')
                    prefScore -= Math.abs(stats.playfulness - userPlayfulness) * 0.20;
                if (typeof stats.independence === 'number')
                    prefScore -= Math.abs(stats.independence - userIndependence) * 0.18;
                if (typeof stats.trainability === 'number')
                    prefScore -= Math.abs(stats.trainability - userTrainability) * 0.15;
                if (userSize && userSize !== 'any') {
                    const szMap = { '小型犬': 'small', '中型犬': 'medium', '大型犬': 'large', '超大型犬': 'giant' };
                    if (szMap[breed.sizeZh] !== userSize)
                        prefScore -= 20;
                }
                prefScore = Math.max(20, Math.min(100, Math.round(prefScore)));
                let careScore = Object.keys(ext).length > 0 ? 100 : 70;
                const exNeed = ext.exerciseNeed;
                if (typeof exNeed === 'number') {
                    if (exNeed > 75 && userWalkMins < 60)
                        careScore -= 30;
                    if (exNeed > 90 && userWalkMins < 90)
                        careScore -= 20;
                }
                if ((answers[2] === 'A' || answers[2] === 'B') && typeof ext.apartmentFit === 'number' && ext.apartmentFit < 55)
                    careScore -= 25;
                if (q9Opt?.key === 'C' && typeof ext.groomingNeed === 'number' && ext.groomingNeed > 75)
                    careScore -= 15;
                if (q6Opt?.hours >= 8 && typeof ext.companionNeed === 'number' && ext.companionNeed > 75)
                    careScore -= 15;
                careScore = Math.max(20, Math.min(100, Math.round(careScore)));
                let climateScore = 70;
                if (userZone === breed.parentZoneId)
                    climateScore = 100;
                else if ((userZone === 'A' && typeof ext.heatTol === 'number' && ext.heatTol > 80) || (userZone === 'E' && typeof ext.coldTol === 'number' && ext.coldTol > 80))
                    climateScore = 90;
                else if (userZone === 'A' && typeof ext.coldTol === 'number' && ext.coldTol > 90)
                    climateScore = 40;
                const overallMatch = Math.round(careScore * 0.50 + climateScore * 0.20 + prefScore * 0.30);
                return { ...breed, prefMatch: prefScore, careMatch: careScore, climateMatch: climateScore, overallMatch };
            });
            scoredBreeds.sort((a, b) => b.overallMatch - a.overallMatch);
            const top3Breeds = scoredBreeds.slice(0, 3);
            setCalcResults({
                readiness: overallReadiness, dimScores, pauseReason, isPending, warningList, isBestDogOwner,
                topBreeds: top3Breeds, hasStrongMatch: top3Breeds.length > 0 && top3Breeds[0].overallMatch >= 75
            });
            setIsCalculatingResult(false);
            setSurveyPage('RESULT');
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }, 450);
    };
    const filteredCities = selectedCountry === '日本'
        ? JP_PREFECTURES
        : selectedCountry === '中国'
            ? (selectedCnProvince && !CN_DIRECT_ADMIN1.has(selectedCnProvince)
                ? GLOBAL_CITIES_DATABASE.filter(c => c.countryZh === '中国' && c.admin1 === selectedCnProvince)
                : [])
            : selectedCountry
                ? GLOBAL_CITIES_DATABASE.filter(c => c.countryZh === selectedCountry)
                : GLOBAL_CITIES_DATABASE;
    const countriesList = GLOBAL_COUNTRIES_DATABASE;
    const cityOptions = filteredCities;
    const cityKey = (city) => city.id || `${city.countryZh}-${city.cityZh}-${city.admin1 || ''}`;
    const getSortedBreeds = () => {
        if (!selectedZone || !selectedZone.breeds)
            return [];
        const list = [...selectedZone.breeds];
        const sizeWeight = { '小型犬': 1, '中型犬': 2, '大型犬': 3, '超大型犬': 4 };
        list.sort((a, b) => {
            let valA, valB;
            if (sortKey === 'size') {
                valA = sizeWeight[a.sizeZh] || 2;
                valB = sizeWeight[b.sizeZh] || 2;
            }
            else {
                valA = a.stats ? a.stats[sortKey] || 0 : 0;
                valB = b.stats ? b.stats[sortKey] || 0 : 0;
            }
            if (valA < valB)
                return sortOrder === 'asc' ? -1 : 1;
            if (valA > valB)
                return sortOrder === 'asc' ? 1 : -1;
            return 0;
        });
        return list;
    };
    const renderHeaderButton = (label, tooltip, onClick) => React.createElement("button", {
        type: "button",
        onClick,
        "aria-label": tooltip,
        className: "header-nav-button pop-btn bg-slate-900 text-white font-black rounded-xl hover:bg-slate-800 group"
    }, label, React.createElement("span", { className: "header-nav-tooltip group-hover:opacity-100", "aria-hidden": "true" }, tooltip));
    const renderArchiveHeaderButton = () => {
        if (!selectedZone) {
            return renderHeaderButton(t.archiveNav, t.archiveTooltip, () => scrollToHomeSection('home-archive-section'));
        }
        return React.createElement("div", {
            className: "header-archive-menu-wrap",
            onMouseEnter: () => setIsArchiveMenuOpen(true),
            onMouseLeave: () => setIsArchiveMenuOpen(false),
            onFocus: () => setIsArchiveMenuOpen(true),
            onBlur: (event) => {
                if (!event.currentTarget.contains(event.relatedTarget)) {
                    setIsArchiveMenuOpen(false);
                }
            },
            onKeyDown: (event) => {
                if (event.key === 'Escape') {
                    setIsArchiveMenuOpen(false);
                }
            }
        },
            React.createElement("button", {
                type: "button",
                onClick: () => setIsArchiveMenuOpen(isOpen => !isOpen),
                "aria-haspopup": "menu",
                "aria-expanded": isArchiveMenuOpen,
                "aria-controls": "header-archive-zone-menu",
                className: "header-nav-button pop-btn bg-slate-900 text-white font-black rounded-xl hover:bg-slate-800 group"
            }, t.archiveNav),
            React.createElement("div", {
                id: "header-archive-zone-menu",
                className: `header-archive-zone-menu ${isArchiveMenuOpen ? 'is-open' : ''}`,
                role: "menu",
                "aria-label": t.archiveTooltip,
                "aria-hidden": !isArchiveMenuOpen
            }, CLIMATE_DATA.map(zone => {
                const isActive = zone.id === selectedZone.id;
                return React.createElement("button", {
                    key: zone.id,
                    type: "button",
                    role: "menuitemradio",
                    "aria-checked": isActive,
                    disabled: isActive,
                    onClick: () => handleArchiveZoneSelect(zone),
                    className: `header-archive-zone-option ${isActive ? 'is-active' : ''}`
                },
                    React.createElement("span", {
                        className: "header-archive-zone-marker",
                        style: { backgroundColor: zone.cardBg },
                        "aria-hidden": "true"
                    }),
                    React.createElement("span", null, `${zone.id} ${t.archiveZoneNames[zone.id]}`),
                    isActive && React.createElement("span", { className: "header-archive-zone-check", "aria-hidden": "true" }, "✓"));
            })));
    };
    return (React.createElement("div", { className: "min-h-screen flex flex-col pb-12 relative overflow-x-hidden" },
        showWhiteoutMask && (React.createElement("div", { className: "whiteout-mask-overlay" },
            React.createElement("div", { className: "pop-card bg-slate-900 text-white px-6 py-3 rounded-2xl flex items-center gap-3 shadow-2xl" },
                React.createElement("span", { className: "text-2xl spin-paw inline-block" }, "\uD83D\uDC3E"),
                React.createElement("span", { className: "font-mono text-sm font-black tracking-wider" }, t.loadingText)))),
        !selectedZone && surveyPage === 'HOME' && React.createElement(FloatingParticles, null),
        React.createElement("header", { className: "sticky top-0 z-40 bg-white px-4 py-3 shadow-md" },
            React.createElement("div", { className: "site-header-inner max-w-6xl mx-auto flex justify-between items-center" },
                React.createElement("div", { onClick: handleGoHome, className: "site-header-logo flex items-center gap-3 header-logo-btn group select-none", title: "\u8FD4\u56DE\u9996\u9875" },
                    React.createElement("div", { className: "w-10 h-10 bg-white border-3 border-slate-900 rounded-full flex items-center justify-center font-bold text-2xl shadow-sm group-hover:rotate-12 transition-transform" }, "\uD83D\uDC3E"),
                    React.createElement("div", null,
                        React.createElement("h1", { className: "text-xl md:text-2xl font-black tracking-wider uppercase text-slate-900 flex items-center gap-2" },
                            t.title,
                            React.createElement("span", { className: "text-xs bg-slate-900 text-white px-2 py-0.5 rounded-full font-mono" }, "CLIMATE PAWS")))),
                React.createElement("div", { className: "header-controls flex items-center gap-3 md:gap-5" },
                    React.createElement("nav", { className: "header-nav flex items-center gap-1 md:gap-2", "aria-label": lang === 'jp' ? "ページナビゲーション" : "页面导航" },
                        renderArchiveHeaderButton(),
                        renderHeaderButton(t.mapNav, t.mapTooltip, () => scrollToHomeSection('home-map-section')),
                        renderHeaderButton(t.surveyNav, t.surveyTooltip, () => scrollToHomeSection('home-survey-section'))),
                    renderHeaderButton(t.aboutBtn, t.aboutTooltip, () => setShowConceptModal(true)),
                    React.createElement("div", { className: "header-language-switch flex items-center gap-2 font-mono text-xs font-black select-none" },
                        React.createElement("span", { className: lang === 'zh' ? 'text-slate-900 font-extrabold' : 'text-slate-400' }, "ZH"),
                        React.createElement("label", { className: "switch" },
                            React.createElement("input", { className: "toggle", type: "checkbox", checked: lang === 'jp', onChange: handleSwitchToggle }),
                            React.createElement("span", { className: "slider" })),
                        React.createElement("span", { className: lang === 'jp' ? 'text-slate-900 font-extrabold' : 'text-slate-400' }, "JP"))))),
        React.createElement("main", { className: "max-w-6xl mx-auto px-4 mt-8 flex-1 w-full relative z-10" },
            !selectedZone && surveyPage === 'HOME' && (React.createElement("div", { className: "view-fade-in home-landing" },
                React.createElement("section", { className: "home-hero scroll-reveal" },
                    [
                        { src: "images/犬种像素风图片/博美_像素风.png", position: "hero-dog-top-left" },
                        { src: "images/犬种像素风图片/吉娃娃_像素风.png", position: "hero-dog-top-right" },
                        { src: "images/犬种像素风图片/德国牧羊犬_像素风.png", position: "hero-dog-left" },
                        { src: "images/犬种像素风图片/伯恩山犬_像素风.png", position: "hero-dog-bottom" },
                        { src: "images/犬种像素风图片/西伯利亚哈士奇_像素风.png", position: "hero-dog-right" }
                    ].map((dog, index) => React.createElement("div", { key: dog.src, className: `hero-dog ${dog.position}`, "aria-hidden": "true" },
                        React.createElement("img", { src: dog.src, alt: "", className: "pixel-art-img hero-dog-float", style: { animationDelay: `${index * 0.4}s` } }))),
                    React.createElement("div", { className: "home-hero-content" },
                        React.createElement(HeroInteractiveTitle, { titleText: t.title, lang: lang }),
                        React.createElement("p", { className: "text-lg md:text-xl font-bold text-slate-600 tracking-wide" }, t.subtitle)),
                    React.createElement("p", { className: "hero-tagline" }, t.tagline),
                    React.createElement("div", { className: "hero-scroll-prompt" }, t.scrollPrompt)),
                React.createElement("section", { className: "home-exploration-section scroll-reveal" },
                    React.createElement("div", { id: "home-archive-section", className: "mb-12 climate-archive-section" },
                        React.createElement("div", { className: "flex items-center gap-2 mb-6 text-slate-900 cursor-default" },
                            React.createElement("i", { "data-lucide": "folder-archive", className: "w-7 h-7" }),
                            React.createElement("h3", { className: "text-2xl font-black" }, t.climateZones)),
                        React.createElement("div", { className: "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6" },
                            CLIMATE_DATA.map((zone, index) => React.createElement("button", { key: zone.id, type: "button", onClick: () => handleEnvelopeClick(zone), style: { "--reveal-delay": `${index * 85}ms` }, className: "climate-folder-card scroll-reveal-item w-full" },
                                React.createElement("svg", { viewBox: "0 0 100 82", className: "climate-folder-icon", "aria-hidden": "true", focusable: "false" },
                                    React.createElement("path", { className: "climate-folder-tab", d: "M10 28V15a4 4 0 0 1 4-4h19l9 8h42a4 4 0 0 1 4 4v9H10Z", fill: zone.cardBg, stroke: "#1A1A1A", strokeWidth: "2.5", strokeLinejoin: "round" }),
                                    React.createElement("path", { className: "climate-folder-front", d: "M8 29a4 4 0 0 1 4-4h76a4 4 0 0 1 4 4v38a5 5 0 0 1-5 5H13a5 5 0 0 1-5-5V29Z", fill: zone.cardBg, stroke: "#1A1A1A", strokeWidth: "2.5", strokeLinejoin: "round" }),
                                    React.createElement("path", { d: "M17 35h66", fill: "none", stroke: "#FFFFFF", strokeWidth: "2", strokeLinecap: "round", opacity: "0.5" })),
                                React.createElement("span", { className: "climate-folder-name" }, lang === 'zh' ? zone.nameZh : zone.nameJp),
                                React.createElement("span", { className: "climate-folder-code" }, `ENV-${zone.id}`))))),
                    React.createElement("div", { id: "home-map-section" },
                        React.createElement(InteractiveWorldMap, { lang: lang, onSelectZone: handleEnvelopeClick })),
                    React.createElement("button", { type: "button", onClick: () => scrollToHomeSection('home-survey-section'), className: "home-map-scroll-prompt" }, t.mapScrollPrompt)),
                React.createElement("section", { id: "home-survey-section", className: "home-survey-section scroll-reveal" },
                    React.createElement("div", { className: "pop-card bg-amber-300 rounded-3xl p-6 md:p-8 relative overflow-hidden shadow-xl border-4 border-slate-900 w-full max-w-4xl" },
                        React.createElement("div", { className: "absolute top-0 right-0 w-64 h-64 bg-halftone opacity-20 pointer-events-none" }),
                        React.createElement("div", { className: "max-w-3xl mx-auto relative z-10 text-center" },
                            React.createElement("div", { className: "inline-flex items-center gap-2 bg-slate-900 text-white text-xs font-mono font-black px-3 py-1 rounded-md mb-3" },
                                React.createElement("i", { "data-lucide": "sparkles", className: "w-4 h-4 text-amber-300" }),
                                React.createElement("span", null, "NEW FEATURE")),
                            React.createElement("h3", { className: "text-3xl md:text-4xl font-black text-slate-900 tracking-tight leading-tight" }, t.bannerTitle),
                            React.createElement("p", { className: "font-mono text-sm font-bold text-slate-800 mt-1 mb-4" }, t.bannerSub),
                            React.createElement("div", { className: "bg-white/90 backdrop-blur-sm border-2 border-slate-900 rounded-2xl p-4 mb-6 space-y-2 text-sm font-bold text-slate-900 shadow-sm" },
                                React.createElement("p", null, t.bannerDesc1),
                                React.createElement("p", { className: "text-rose-600 font-extrabold" }, t.bannerDesc2)),
                            React.createElement("button", { onClick: () => { setCurrentQIndex(0); setSurveyPage('QUESTIONNAIRE'); window.scrollTo({ top: 0, behavior: 'smooth' }); }, className: "pop-btn bg-slate-900 text-white text-base md:text-lg font-black px-8 py-4 rounded-2xl flex items-center gap-3 justify-center mx-auto hover:bg-slate-800 shadow-2xl active:translate-y-1" },
                                React.createElement("i", { "data-lucide": "clipboard-check", className: "w-6 h-6 text-amber-300" }),
                                React.createElement("span", null, t.bannerBtn),
                                React.createElement("span", { className: "font-mono" }, "\u2794"))))))),
            selectedZone && surveyPage === 'HOME' && (React.createElement("div", { className: "view-fade-in" },
                React.createElement("div", { className: "pop-card bg-white p-4 rounded-2xl flex flex-wrap justify-between items-center gap-4 mb-6" },
                    React.createElement("button", { onClick: handleBackToPrev, disabled: isTransitioning, className: "pop-btn bg-slate-900 text-white px-5 py-2 font-black rounded-xl text-sm flex items-center gap-2 hover:bg-slate-800 disabled:opacity-50" }, t.backToPrev),
                    React.createElement("div", { className: "font-black text-xl text-slate-900 flex items-center gap-2 cursor-default" },
                        React.createElement("span", { className: "w-5 h-5 rounded-full border-2 border-white shadow-sm inline-block", style: { backgroundColor: selectedZone.cardBg } }),
                        lang === 'zh' ? selectedZone.nameZh : selectedZone.nameJp,
                        " (",
                        selectedZone.code,
                        ")")),
                showPoster && (React.createElement("div", { className: "py-6 mb-8 flex flex-col items-center" },
                    React.createElement("div", { className: "text-center mb-8 cursor-default w-full" },
                        React.createElement("div", { className: "pop-card bg-white/95 backdrop-blur-sm p-4 md:p-5 rounded-2xl max-w-xl mx-auto border-3 border-slate-900" },
                            React.createElement("span", { className: "text-xs font-mono bg-slate-900 text-white font-black px-3 py-1 rounded border border-slate-900 tracking-widest uppercase" }, "A3 POSTER SPECIMEN COVER"),
                            React.createElement("h3", { className: "text-2xl md:text-3xl font-black mt-3 text-slate-900 flex items-center justify-center gap-2" },
                                React.createElement("span", null, selectedZone.code)),
                            React.createElement("p", { className: "text-sm font-bold text-slate-800 mt-2 leading-relaxed" }, lang === 'zh' ? selectedZone.descZh : selectedZone.descJp))),
                    React.createElement("div", { className: "folder-3d-viewport" },
                        React.createElement("div", { onClick: handleTriggerFlipOpen, className: `folder-3d-wrapper group ${isFlipping ? 'is-flipping' : ''}`, title: "\u70B9\u51FB\u7FFB\u5F00\u6863\u6848" },
                            React.createElement("div", { className: "folder-inside-sheet" }),
                            React.createElement("div", { className: "folder-cover-3d overflow-hidden flex flex-col justify-between p-3", style: { backgroundColor: selectedZone.cardBg } },
                                React.createElement("div", { className: "folder-tab" },
                                    React.createElement("span", null, "\uD83D\uDCC2"),
                                    React.createElement("span", null, t.clickToOpenTag)),
                                React.createElement("div", { className: "w-full h-full rounded-xl overflow-hidden border-2 border-white relative shadow-inner bg-black/10" },
                                    React.createElement("img", { src: selectedZone.posterImg, alt: "\u6C14\u5019\u4E3B\u9898\u6D77\u62A5", className: "w-full h-full object-cover select-none group-hover:scale-102 transition-transform duration-500 poster-img-gpu", onError: (e) => { e.target.src = fallbackImg; } }))))),
                    React.createElement("div", { className: "mt-6 flex items-center gap-2 text-xs font-mono font-black text-slate-900 bg-white/90 backdrop-blur px-4 py-2 rounded-full border-2 border-slate-900 shadow-sm animate-bounce" },
                        React.createElement("span", null, t.posterFlipHint)))),
                !showPoster && (React.createElement("div", { className: "archive-paper-sheet p-6 md:p-8 my-4 relative view-fade-in" },
                    React.createElement("div", { className: "paper-clip" }),
                    React.createElement("div", { className: "hole-punch-left" }),
                    React.createElement("div", { className: "flex flex-wrap justify-between items-end border-b-4 border-slate-900 pb-4 mb-6" },
                        React.createElement("div", null,
                            React.createElement("div", { className: "flex items-center gap-3" },
                                React.createElement("span", { className: "classified-stamp" }, "TOP SECRET ARCHIVE"),
                                React.createElement("span", { className: "text-xs font-mono font-bold text-slate-500" },
                                    "REF: ",
                                    selectedZone.code)),
                            React.createElement("h3", { className: "text-3xl font-black text-slate-900 mt-2 tracking-tight" }, t.paperTitle)),
                        React.createElement("div", { className: "text-right mt-2 sm:mt-0 font-mono text-xs font-extrabold text-slate-600" },
                            React.createElement("div", null,
                                "ZONE: ",
                                selectedZone.zoneTag),
                            React.createElement("div", null,
                                "TOTAL SPECIMENS: ",
                                selectedZone.breeds.length))),
                    React.createElement("div", { className: "flex flex-wrap items-center justify-between gap-3 mb-6 bg-slate-100 p-3 rounded-2xl border-3 border-slate-900 shadow-sm", ref: dropdownRef },
                        React.createElement("div", { className: "flex items-center gap-2 text-xs font-black text-slate-900" },
                            React.createElement("i", { "data-lucide": "arrow-up-down", className: "w-4 h-4 text-slate-900" }),
                            React.createElement("span", null, t.sortByLabel)),
                        React.createElement("div", { className: "flex items-center gap-2 relative" },
                            React.createElement("div", { className: "relative" },
                                React.createElement("button", { onClick: () => setIsSortDropdownOpen(!isSortDropdownOpen), className: "bg-white text-slate-900 font-bold text-xs border-2 border-slate-900 rounded-xl px-3 py-1.5 shadow-[2px_2px_0px_0px_#1A1A1A] hover:bg-slate-50 transition-all flex items-center gap-2 cursor-pointer active:translate-x-0.5 active:translate-y-0.5" },
                                    React.createElement("span", null, t.sortOptions[sortKey]),
                                    React.createElement("span", { className: "text-[10px] transform transition-transform duration-200 inline-block", style: { transform: isSortDropdownOpen ? 'rotate(180deg)' : 'rotate(0deg)' } }, "\u25BC")),
                                isSortDropdownOpen && (React.createElement("div", { className: "absolute right-0 top-full mt-2 w-48 bg-white border-3 border-slate-900 rounded-2xl shadow-xl z-50 overflow-hidden py-1.5 animate-fadeIn" }, Object.keys(t.sortOptions).map((key) => (React.createElement("button", { key: key, onClick: () => handleSelectSortKey(key), className: `w-full text-left px-4 py-2 text-xs font-bold transition-colors flex items-center justify-between cursor-pointer ${sortKey === key
                                        ? 'bg-slate-900 text-white font-black'
                                        : 'text-slate-800 hover:bg-slate-100'}` },
                                    React.createElement("span", null, t.sortOptions[key]),
                                    sortKey === key && React.createElement("span", { className: "font-mono" }, "\u2713"))))))),
                            React.createElement("button", { onClick: () => setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc'), title: sortOrder === 'asc' ? t.sortAsc : t.sortDesc, className: "bg-white text-slate-900 font-black text-xs border-2 border-slate-900 rounded-xl px-3 py-1.5 shadow-[2px_2px_0px_0px_#1A1A1A] hover:bg-slate-50 transition-all flex items-center gap-1 cursor-pointer active:translate-x-0.5 active:translate-y-0.5" },
                                React.createElement("span", { className: "font-mono font-extrabold text-sm" }, sortOrder === 'asc' ? '↑' : '↓'),
                                React.createElement("span", null, sortOrder === 'asc' ? t.sortAsc : t.sortDesc)))),
                    React.createElement("div", { className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6" }, getSortedBreeds().map(dog => (React.createElement("div", { key: dog.id, onClick: () => setSelectedDog(dog), className: "pop-card pop-card-interactive bg-white rounded-2xl p-5 flex flex-col items-center group text-slate-900 relative" },
                        React.createElement("div", { className: "absolute -top-3 -right-3 bg-slate-900 text-white font-mono text-[10px] font-black px-2.5 py-1 rounded-md border-2 border-white shadow-sm rotate-6" },
                            "SPECIMEN #",
                            dog.id.toUpperCase()),
                        React.createElement("div", { className: "w-full h-44 rounded-xl border-3 border-slate-900 overflow-hidden mb-4 relative shadow-inner bg-slate-50/80 p-3 flex items-center justify-center" },
                            React.createElement("img", { src: dog.pixelImg || dog.realImg, alt: dog.nameZh, className: "w-full h-full object-contain pixel-art-img group-hover:scale-110 transition-transform duration-300 poster-img-gpu", onError: (e) => { e.target.src = fallbackImg; } })),
                        React.createElement("h4", { className: "font-black text-xl text-center mb-1" }, lang === 'zh' ? dog.nameZh : dog.nameJp),
                        React.createElement("p", { className: "text-xs text-slate-500 font-bold mb-4" },
                            lang === 'zh' ? dog.originZh : dog.originJp,
                            " \u2022 ",
                            dog.fci),
                        React.createElement("button", { className: "w-full pop-btn bg-slate-900 text-white text-xs font-black py-2.5 rounded-xl flex items-center justify-center gap-2 group-hover:bg-slate-800" },
                            React.createElement("i", { "data-lucide": "id-card", className: "w-4 h-4" }),
                            lang === 'zh' ? '查阅绝密护照' : 'パスポートを見る'))))))))),
            surveyPage === 'QUESTIONNAIRE' && (React.createElement("div", { className: "view-fade-in max-w-3xl mx-auto py-4" },
                React.createElement("div", { className: "flex justify-between items-center mb-6" },
                    React.createElement("button", { onClick: handleGoHome, className: "pop-btn bg-white text-slate-900 px-4 py-2 font-black rounded-xl text-xs flex items-center gap-1.5 hover:bg-slate-100" },
                        React.createElement("i", { "data-lucide": "arrow-left", className: "w-4 h-4" }),
                        React.createElement("span", null, t.backHome)),
                    React.createElement("span", { className: "font-mono text-xs font-black bg-slate-900 text-white px-3 py-1 rounded-md" },
                        "QUESTION ",
                        String(currentQIndex + 1).padStart(2, '0'),
                        " / ",
                        QUESTIONNAIRE_QUESTIONS.length)),
                React.createElement("div", { className: "pop-card bg-white p-6 rounded-3xl mb-6" },
                    React.createElement("div", { className: "flex justify-between items-center mb-2" },
                        React.createElement("span", { className: "text-xs font-mono font-black text-slate-500 uppercase tracking-widest" }, QUESTIONNAIRE_QUESTIONS[currentQIndex].part === 1 ? t.part1Title : QUESTIONNAIRE_QUESTIONS[currentQIndex].part === 2 ? t.part2Title : t.part3Title),
                        React.createElement("span", { className: "font-mono text-xs font-black text-slate-900" },
                            Math.round(((currentQIndex + 1) / QUESTIONNAIRE_QUESTIONS.length) * 100),
                            "%")),
                    React.createElement("div", { className: "w-full h-3 bg-slate-100 rounded-full border-2 border-slate-900 overflow-hidden mb-4" },
                        React.createElement("div", { className: "h-full bg-slate-900 transition-all duration-300", style: { width: `${((currentQIndex + 1) / QUESTIONNAIRE_QUESTIONS.length) * 100}%` } })),
                    React.createElement("h3", { className: "text-2xl font-black text-slate-900" }, lang === 'zh' ? QUESTIONNAIRE_QUESTIONS[currentQIndex].titleZh : QUESTIONNAIRE_QUESTIONS[currentQIndex].titleJp),
                    QUESTIONNAIRE_QUESTIONS[currentQIndex].helpZh && React.createElement("p", { className: "text-[11px] font-medium text-slate-500 mt-1.5 leading-relaxed" }, lang === 'zh' ? QUESTIONNAIRE_QUESTIONS[currentQIndex].helpZh : QUESTIONNAIRE_QUESTIONS[currentQIndex].helpJp),
                    React.createElement("p", { className: "text-xs font-bold text-slate-500 mt-2" }, QUESTIONNAIRE_QUESTIONS[currentQIndex].part === 1 ? t.qSectionSub1 : QUESTIONNAIRE_QUESTIONS[currentQIndex].part === 2 ? t.qSectionSub2 : t.qSectionSub3)),
                React.createElement("div", { className: "pop-card bg-white p-6 md:p-8 rounded-3xl mb-8" }, QUESTIONNAIRE_QUESTIONS[currentQIndex].type === 'city_picker' ? (React.createElement("div", { className: "space-y-4" },
                    React.createElement("div", { className: "relative", ref: countryPickerRef },
                        React.createElement("label", { className: "block text-xs font-black text-slate-500 mb-1" }, t.optSelectCountry),
                        React.createElement("button", {
                            type: "button",
                            onClick: () => {
                                setIsCountryDropdownOpen(!isCountryDropdownOpen);
                                setIsCnProvDropdownOpen(false);
                                setIsCityDropdownOpen(false);
                                setCountrySearchText('');
                            },
                            className: "w-full bg-slate-50 border-3 border-slate-900 rounded-xl p-3 font-bold text-sm text-slate-900 flex items-center justify-between cursor-pointer hover:bg-slate-100 transition-colors"
                        },
                            React.createElement("span", null, selectedCountry
                                ? (lang === 'zh'
                                    ? selectedCountry
                                    : (countriesList.find(c => c.countryZh === selectedCountry)?.countryJp || selectedCountry))
                                : t.allCountries),
                            React.createElement("span", { className: "text-xs font-mono" }, isCountryDropdownOpen ? "▲" : "▼")),
                        isCountryDropdownOpen && (React.createElement("div", { className: "mt-2 bg-white border-3 border-slate-900 rounded-2xl shadow-2xl overflow-hidden z-30 animate-fadeIn" },
                            React.createElement("div", { className: "p-2.5 bg-slate-100 border-b-2 border-slate-900 sticky top-0 z-10" },
                                React.createElement("input", {
                                    type: "text",
                                    autoFocus: true,
                                    value: countrySearchText,
                                    onChange: (e) => setCountrySearchText(e.target.value),
                                    placeholder: lang === 'zh' ? "搜索国家（如：中国、日本、美国、德国）..." : "国名で検索（例：日本、中国、アメリカ、ドイツ）...",
                                    className: "w-full bg-white border-2 border-slate-900 rounded-lg px-3 py-2 text-xs font-bold text-slate-900 focus:outline-none"
                                })),
                            React.createElement("div", { className: "max-h-60 overflow-y-auto divide-y divide-slate-100" },
                                (() => {
                                    const q = countrySearchText.trim().toLowerCase();
                                    const matchedCountries = countriesList.filter(c => {
                                        if (!q) return true;
                                        return c.countryZh.toLowerCase().includes(q) || c.countryJp.toLowerCase().includes(q) || c.countryCode.toLowerCase().includes(q);
                                    });
                                    if (matchedCountries.length === 0) {
                                        return React.createElement("div", { className: "p-4 text-xs font-bold text-slate-500 text-center" },
                                            lang === 'zh' ? "未找到匹配国家" : "該当する国が見つかりません");
                                    }
                                    return matchedCountries.map(c => React.createElement("button", {
                                        key: c.countryCode,
                                        type: "button",
                                        onClick: () => {
                                            setSelectedCountry(c.countryZh);
                                            setSelectedCnProvince('');
                                            setSelectedCityObj(null);
                                            setCnProvSearchText('');
                                            setCitySearchText('');
                                            setIsCountryDropdownOpen(false);
                                            setIsCnProvDropdownOpen(false);
                                            setIsCityDropdownOpen(false);
                                            setAnswers(prev => { const next = { ...prev }; delete next[1]; return next; });
                                        },
                                        className: `w-full text-left px-4 py-2.5 text-sm font-bold flex items-center justify-between cursor-pointer transition-colors ${selectedCountry === c.countryZh ? 'bg-slate-900 text-white font-black' : 'text-slate-800 hover:bg-slate-100'}`
                                    },
                                        React.createElement("span", null, lang === 'zh' ? c.countryZh : c.countryJp),
                                        selectedCountry === c.countryZh && React.createElement("span", { className: "font-mono text-xs" }, "✓")));
                                })())))),
                    selectedCountry === '中国' ? (React.createElement(React.Fragment, null,
                        React.createElement("div", { className: "relative", ref: cnProvPickerRef },
                            React.createElement("label", { className: "block text-xs font-black text-slate-500 mb-1" },
                                lang === 'zh' ? "请选择省级行政区" : "省・直轄市・特別行政区を選択"),
                            React.createElement("button", {
                                type: "button",
                                onClick: () => {
                                    setIsCnProvDropdownOpen(!isCnProvDropdownOpen);
                                    setIsCountryDropdownOpen(false);
                                    setIsCityDropdownOpen(false);
                                    setCnProvSearchText('');
                                },
                                className: "w-full bg-slate-50 border-3 border-slate-900 rounded-xl p-3 font-bold text-sm text-slate-900 flex items-center justify-between cursor-pointer hover:bg-slate-100 transition-colors"
                            },
                                React.createElement("span", null, selectedCnProvince
                                    ? (lang === 'zh' ? selectedCnProvince : (CN_ADMIN1_JP_MAP[selectedCnProvince] || selectedCnProvince))
                                    : (lang === 'zh' ? "请选择省 / 自治区 / 直辖市 / 特别行政区" : "省・直轄市を選択 / Select Province")),
                                React.createElement("span", { className: "text-xs font-mono" }, isCnProvDropdownOpen ? "▲" : "▼")),
                            isCnProvDropdownOpen && (React.createElement("div", { className: "mt-2 bg-white border-3 border-slate-900 rounded-2xl shadow-2xl overflow-hidden z-30 animate-fadeIn" },
                                React.createElement("div", { className: "p-2.5 bg-slate-100 border-b-2 border-slate-900 sticky top-0 z-10" },
                                    React.createElement("input", {
                                        type: "text",
                                        autoFocus: true,
                                        value: cnProvSearchText,
                                        onChange: (e) => setCnProvSearchText(e.target.value),
                                        placeholder: lang === 'zh' ? "搜索省、自治区、直辖市或特区（如：北京、广东、广西）..." : "省・直轄市名で検索（例：北京、広東、広西）...",
                                        className: "w-full bg-white border-2 border-slate-900 rounded-lg px-3 py-2 text-xs font-bold text-slate-900 focus:outline-none"
                                    })),
                                React.createElement("div", { className: "max-h-60 overflow-y-auto divide-y divide-slate-100" },
                                    (() => {
                                        const q = cnProvSearchText.trim().toLowerCase();
                                        const matchedProvs = CN_PROVINCES.filter(p => {
                                            if (!q) return true;
                                            return p.admin1.toLowerCase().includes(q) || p.admin1Jp.toLowerCase().includes(q);
                                        });
                                        if (matchedProvs.length === 0) {
                                            return React.createElement("div", { className: "p-4 text-xs font-bold text-slate-500 text-center" },
                                                lang === 'zh' ? "未找到匹配的省级行政区" : "該当する地域が見つかりません");
                                        }
                                        return matchedProvs.map(p => React.createElement("button", {
                                            key: p.admin1,
                                            type: "button",
                                            onClick: () => {
                                                setSelectedCnProvince(p.admin1);
                                                setIsCnProvDropdownOpen(false);
                                                setCnProvSearchText('');
                                                setCitySearchText('');
                                                if (p.isDirect) {
                                                    handleSelectCity(p.representativeCity);
                                                    setIsCityDropdownOpen(false);
                                                }
                                                else {
                                                    setSelectedCityObj(null);
                                                    setIsCityDropdownOpen(false);
                                                    setAnswers(prev => { const next = { ...prev }; delete next[1]; return next; });
                                                }
                                            },
                                            className: `w-full text-left px-4 py-2.5 text-sm font-bold flex items-center justify-between cursor-pointer transition-colors ${selectedCnProvince === p.admin1 ? 'bg-slate-900 text-white font-black' : 'text-slate-800 hover:bg-slate-100'}`
                                        },
                                            React.createElement("span", null, lang === 'zh' ? p.admin1 : p.admin1Jp),
                                            React.createElement("span", { className: "font-mono text-[11px] opacity-75" }, p.isDirect ? `Zone ${p.representativeCity.zone}` : (lang === 'zh' ? "选择城市 →" : "都市選択 →"))));
                                    })())))),
                        selectedCnProvince && !CN_DIRECT_ADMIN1.has(selectedCnProvince) && (React.createElement("div", { className: "relative animate-fadeIn", ref: cityPickerRef },
                            React.createElement("label", { className: "block text-xs font-black text-slate-500 mb-1" }, t.optSelectCity),
                            React.createElement("button", {
                                type: "button",
                                onClick: () => {
                                    setIsCityDropdownOpen(!isCityDropdownOpen);
                                    setIsCountryDropdownOpen(false);
                                    setIsCnProvDropdownOpen(false);
                                    setCitySearchText('');
                                },
                                className: "w-full bg-slate-50 border-3 border-slate-900 rounded-xl p-3 font-bold text-sm text-slate-900 flex items-center justify-between cursor-pointer hover:bg-slate-100 transition-colors"
                            },
                                React.createElement("span", null, selectedCityObj
                                    ? (lang === 'zh' ? selectedCityObj.cityZh : selectedCityObj.cityJp)
                                    : t.selectCityPrompt),
                                React.createElement("span", { className: "text-xs font-mono" }, isCityDropdownOpen ? "▲" : "▼")),
                            isCityDropdownOpen && (React.createElement("div", { className: "mt-2 bg-white border-3 border-slate-900 rounded-2xl shadow-2xl overflow-hidden z-30 animate-fadeIn" },
                                React.createElement("div", { className: "p-2.5 bg-slate-100 border-b-2 border-slate-900 sticky top-0 z-10" },
                                    React.createElement("input", {
                                        type: "text",
                                        autoFocus: true,
                                        value: citySearchText,
                                        onChange: (e) => setCitySearchText(e.target.value),
                                        placeholder: lang === 'zh' ? `搜索${selectedCnProvince}下属城市...` : "都市名で検索...",
                                        className: "w-full bg-white border-2 border-slate-900 rounded-lg px-3 py-2 text-xs font-bold text-slate-900 focus:outline-none"
                                    })),
                                React.createElement("div", { className: "max-h-60 overflow-y-auto divide-y divide-slate-100" },
                                    (() => {
                                        const q = citySearchText.trim().toLowerCase();
                                        const matchedCities = cityOptions.filter(c => {
                                            if (!q) return true;
                                            return c.cityZh.toLowerCase().includes(q) || c.cityJp.toLowerCase().includes(q);
                                        });
                                        if (matchedCities.length === 0) {
                                            return React.createElement("div", { className: "p-4 text-xs font-bold text-slate-500 text-center" },
                                                lang === 'zh' ? "未找到匹配城市" : "該当する都市が見つかりません");
                                        }
                                        return matchedCities.map(c => React.createElement("button", {
                                            key: cityKey(c),
                                            type: "button",
                                            onClick: () => {
                                                handleSelectCity(c);
                                                setIsCityDropdownOpen(false);
                                            },
                                            className: `w-full text-left px-4 py-2.5 text-sm font-bold flex items-center justify-between cursor-pointer transition-colors ${selectedCityObj && cityKey(selectedCityObj) === cityKey(c) ? 'bg-slate-900 text-white font-black' : 'text-slate-800 hover:bg-slate-100'}`
                                        },
                                            React.createElement("span", null, lang === 'zh' ? c.cityZh : c.cityJp),
                                            React.createElement("span", { className: "font-mono text-[11px] opacity-75" }, `Zone ${c.zone}`)));
                                    })()))))))) : (React.createElement("div", { className: "relative", ref: cityPickerRef },
                        React.createElement("label", { className: "block text-xs font-black text-slate-500 mb-1" },
                            selectedCountry === '日本'
                                ? (lang === 'zh' ? "请选择都道府县" : "都道府県を選択してください")
                                : t.optSelectCity),
                        React.createElement("button", {
                            type: "button",
                            onClick: () => {
                                setIsCityDropdownOpen(!isCityDropdownOpen);
                                setIsCountryDropdownOpen(false);
                                setIsCnProvDropdownOpen(false);
                                setCitySearchText('');
                            },
                            className: "w-full bg-slate-50 border-3 border-slate-900 rounded-xl p-3 font-bold text-sm text-slate-900 flex items-center justify-between cursor-pointer hover:bg-slate-100 transition-colors"
                        },
                            React.createElement("span", null, selectedCityObj
                                ? (selectedCityObj.cityZh === selectedCityObj.admin1
                                    ? selectedCityObj.admin1
                                    : `${lang === 'zh' ? selectedCityObj.cityZh : selectedCityObj.cityJp}${selectedCityObj.admin1 ? ` · ${selectedCityObj.admin1}` : ''}`)
                                : (selectedCountry === '日本'
                                    ? (lang === 'zh' ? "请选择都道府县 / Select Prefecture" : "都道府県を選択 / Select Prefecture")
                                    : t.selectCityPrompt)),
                            React.createElement("span", { className: "text-xs font-mono" }, isCityDropdownOpen ? "▲" : "▼")),
                        isCityDropdownOpen && (React.createElement("div", { className: "mt-2 bg-white border-3 border-slate-900 rounded-2xl shadow-2xl overflow-hidden z-30 animate-fadeIn" },
                            React.createElement("div", { className: "p-2.5 bg-slate-100 border-b-2 border-slate-900 sticky top-0 z-10" },
                                React.createElement("input", {
                                    type: "text",
                                    autoFocus: true,
                                    value: citySearchText,
                                    onChange: (e) => setCitySearchText(e.target.value),
                                    placeholder: selectedCountry === '日本'
                                        ? (lang === 'zh' ? "搜索都道府县（如：东京都、北海道、京都府、冲绳县）..." : "都道府県名で検索（例：東京都、北海道、京都府、沖縄県）...")
                                        : (lang === 'zh' ? "搜索城市或省/州/县（如：深圳、Boston、München）..." : "都市名・州名で検索..."),
                                    className: "w-full bg-white border-2 border-slate-900 rounded-lg px-3 py-2 text-xs font-bold text-slate-900 focus:outline-none"
                                })),
                            React.createElement("div", { className: "max-h-60 overflow-y-auto divide-y divide-slate-100" },
                                (() => {
                                    const q = citySearchText.trim().toLowerCase();
                                    const matchedCities = cityOptions.filter(c => {
                                        if (!q) return true;
                                        return (
                                            c.cityZh.toLowerCase().includes(q) ||
                                            c.cityJp.toLowerCase().includes(q) ||
                                            (c.prefZh && c.prefZh.toLowerCase().includes(q)) ||
                                            (c.admin1 && c.admin1.toLowerCase().includes(q)) ||
                                            c.countryZh.toLowerCase().includes(q)
                                        );
                                    });
                                    if (matchedCities.length === 0) {
                                        return React.createElement("div", { className: "p-4 text-xs font-bold text-slate-500 text-center" },
                                            selectedCountry === '日本'
                                                ? (lang === 'zh' ? "未找到匹配的都道府县" : "該当する都道府県が見つかりません")
                                                : (lang === 'zh' ? "未找到匹配城市，请尝试其他关键词或先切换国家。" : "該当する都市が見つかりません。"));
                                    }
                                    return matchedCities.map(c => React.createElement("button", {
                                        key: cityKey(c),
                                        type: "button",
                                        onClick: () => {
                                            handleSelectCity(c);
                                            setIsCityDropdownOpen(false);
                                        },
                                        className: `w-full text-left px-4 py-2.5 text-sm font-bold flex items-center justify-between cursor-pointer transition-colors ${selectedCityObj && cityKey(selectedCityObj) === cityKey(c) ? 'bg-slate-900 text-white font-black' : 'text-slate-800 hover:bg-slate-100'}`
                                    },
                                        React.createElement("span", null, c.cityZh === c.admin1
                                            ? c.admin1
                                            : `${lang === 'zh' ? c.cityZh : c.cityJp}${c.admin1 ? ` · ${c.admin1}` : ''}`),
                                        React.createElement("span", { className: "font-mono text-[11px] opacity-75" }, `Zone ${c.zone}`)));
                                })()))))),
                    selectedCityObj && (React.createElement("div", { className: "bg-emerald-100 border-2 border-slate-900 rounded-2xl p-4 flex items-center justify-between text-xs font-black text-slate-900 animate-fadeIn" },
                        React.createElement("span", null,
                            t.cityDetectedZone,
                            " ",
                            selectedCityObj.zoneName),
                        React.createElement("span", { className: "font-mono bg-emerald-400 px-2.5 py-0.5 rounded border border-slate-900" }, "ZONE EST."))))) : (
                /* 标准单选 / 多选卡片 */
                React.createElement("div", { className: "space-y-3" }, QUESTIONNAIRE_QUESTIONS[currentQIndex].options.map(opt => {
                    const qId = QUESTIONNAIRE_QUESTIONS[currentQIndex].id;
                    const isMulti = QUESTIONNAIRE_QUESTIONS[currentQIndex].type === 'multi';
                    let isSelected = false;
                    if (isMulti) {
                        isSelected = Array.isArray(answers[qId]) && answers[qId].includes(opt.key);
                    }
                    else {
                        isSelected = answers[qId] === opt.key;
                    }
                    return (React.createElement("div", { key: opt.key, onClick: () => handleAnswerOption(qId, opt.key, isMulti, opt), className: `p-4 rounded-2xl border-3 border-slate-900 font-bold text-sm flex items-center justify-between cursor-pointer transition-all shadow-[3px_3px_0px_0px_#1A1A1A] active:translate-x-0.5 active:translate-y-0.5 ${isSelected ? 'bg-slate-900 text-white font-black' : 'bg-slate-50 text-slate-900 hover:bg-slate-100'}` },
                        React.createElement("span", null, lang === 'zh' ? opt.labelZh : opt.labelJp),
                        React.createElement("span", { className: "font-mono text-xs" }, isSelected ? '✓' : '')));
                })))),
                React.createElement("div", { className: "flex justify-between items-center" },
                    React.createElement("button", { disabled: currentQIndex === 0, onClick: goToPreviousQuestion, className: "pop-btn bg-white text-slate-900 px-6 py-3 font-black rounded-xl text-sm disabled:opacity-30" }, t.btnPrev),
                    currentQIndex < QUESTIONNAIRE_QUESTIONS.length - 1 ? (React.createElement("button", { onClick: goToNextQuestion, className: "pop-btn bg-slate-900 text-white px-8 py-3 font-black rounded-xl text-sm" }, t.btnNext)) : (React.createElement("button", { disabled: isCalculatingResult, onClick: calculateFinalResults, className: "pop-btn bg-amber-400 text-slate-900 px-8 py-3 font-black rounded-xl text-sm flex items-center gap-2 shadow-xl" },
                        isCalculatingResult && React.createElement("span", { className: "spin-paw" }, "\uD83D\uDC3E"),
                        React.createElement("span", null, isCalculatingResult ? t.calculatingText : t.btnSubmit)))))),
            surveyPage === 'RESULT' && calcResults && (React.createElement("div", { className: "view-fade-in max-w-4xl mx-auto py-4 space-y-8" },
                React.createElement("div", { className: "flex justify-between items-center" },
                    React.createElement("button", { onClick: () => setSurveyPage('QUESTIONNAIRE'), className: "pop-btn bg-white text-slate-900 px-4 py-2 font-black rounded-xl text-xs flex items-center gap-1.5" },
                        React.createElement("i", { "data-lucide": "edit-3", className: "w-4 h-4" }),
                        React.createElement("span", null, t.editAnswers)),
                    React.createElement("button", { onClick: handleGoHome, className: "pop-btn bg-slate-900 text-white px-4 py-2 font-black rounded-xl text-xs" }, t.backHome)),
                calcResults.isBestDogOwner && (React.createElement("div", { className: "pop-card bg-amber-300 rounded-3xl p-6 text-slate-900 text-center border-4 border-slate-900 shadow-xl animate-bounce" },
                    React.createElement("div", { className: "w-16 h-16 bg-slate-900 text-amber-300 rounded-full flex items-center justify-center font-black text-3xl mx-auto mb-2 border-2 border-white shadow-md" }, "\uD83C\uDFC6"),
                    React.createElement("h3", { className: "text-2xl font-black" }, t.badgeBestOwner),
                    React.createElement("p", { className: "text-xs font-bold mt-1" }, t.badgeBestOwnerSub))),
                React.createElement("div", { className: "archive-paper-sheet p-6 md:p-8" },
                    React.createElement("div", { className: "paper-clip" }),
                    React.createElement("div", { className: "border-b-4 border-slate-900 pb-4 mb-6" },
                        React.createElement("span", { className: "classified-stamp" }, "DIAGNOSTIC REPORT"),
                        React.createElement("h3", { className: "text-3xl font-black text-slate-900 mt-2" }, t.resultTitle1),
                        React.createElement("p", { className: "text-xs font-bold text-slate-500" }, t.resultSub1)),
                    React.createElement("div", { className: "flex flex-col md:flex-row items-center gap-6 mb-8 bg-slate-100 p-6 rounded-2xl border-2 border-slate-900" },
                        React.createElement("div", { className: "w-32 h-32 rounded-full border-4 border-slate-900 bg-white flex flex-col items-center justify-center shadow-md shrink-0" },
                            React.createElement("span", { className: "text-3xl font-black text-slate-900 font-mono" },
                                calcResults.readiness,
                                "%"),
                            React.createElement("span", { className: "text-[10px] font-bold text-slate-500 uppercase" }, "READINESS")),
                        React.createElement("div", { className: "flex-1 space-y-2" },
                            React.createElement("h4", { className: "font-black text-lg text-slate-900" }, calcResults.readiness >= 80 ? t.readinessExcellent : calcResults.readiness >= 60 ? t.readinessMedium : t.readinessLow),
                            React.createElement("p", { className: "text-xs font-bold text-slate-600 leading-relaxed" }, t.readinessExplanation))),
                    React.createElement("div", { className: "space-y-4 mb-6" },
                        React.createElement("h4", { className: "text-xs font-black uppercase text-slate-900 tracking-wider" }, t.dimScoreTitle),
                        [t.dim1, t.dim2, t.dim3, t.dim4, t.dim5].map((dimName, idx) => (React.createElement("div", { key: dimName, className: "space-y-1 text-xs font-bold" },
                            React.createElement("div", { className: "flex justify-between text-slate-800" },
                                React.createElement("span", null, dimName),
                                React.createElement("span", { className: "font-mono font-black" },
                                    calcResults.dimScores[idx],
                                    "%")),
                            React.createElement("div", { className: "w-full h-3 bg-white rounded-full border border-slate-900 overflow-hidden" },
                                React.createElement("div", { className: "h-full bg-slate-900 transition-all duration-500", style: { width: `${calcResults.dimScores[idx]}%` } })))))),
                    calcResults.warningList.length > 0 && (React.createElement("div", { className: "bg-rose-100 border-2 border-rose-900 rounded-2xl p-4 text-xs font-bold text-rose-900 space-y-1" },
                        React.createElement("div", { className: "font-black flex items-center gap-1.5" },
                            React.createElement("i", { "data-lucide": "alert-triangle", className: "w-4 h-4" }),
                            React.createElement("span", null, t.warningTitle)),
                        calcResults.warningList.map(w => React.createElement("div", { key: w },
                            "\u2022 ",
                            t[w] || w))))),
                React.createElement("div", { className: "archive-paper-sheet p-6 md:p-8" },
                    React.createElement("div", { className: "paper-clip" }),
                    React.createElement("div", { className: "border-b-4 border-slate-900 pb-4 mb-6" },
                        React.createElement("span", { className: "classified-stamp" }, "MATCHING RECOMMENDATIONS"),
                        React.createElement("h3", { className: "text-3xl font-black text-slate-900 mt-2" }, t.resultTitle2),
                        React.createElement("p", { className: "text-xs font-bold text-slate-500" }, t.resultSub2)),
                    (calcResults.pauseReason || calcResults.readiness < 80) ? (React.createElement("div", { className: "pop-card bg-rose-50 p-6 rounded-2xl border-3 border-rose-900 text-slate-900" },
                        React.createElement("h4", { className: "font-black text-xl text-rose-700 mb-2" }, t.notReadyTitle),
                        React.createElement("p", { className: "text-sm font-bold mb-4" }, calcResults.pauseReason ? t.notReadySub : t.pauseReadiness),
                        React.createElement("div", { className: "bg-white p-4 rounded-xl border border-slate-900 text-xs font-bold text-slate-800 space-y-1" },
                            calcResults.pauseReason && React.createElement("div", null,
                                "\u2022 ",
                                t[calcResults.pauseReason]),
                            !calcResults.pauseReason && React.createElement("div", null,
                                "\u2022 ",
                                t.pauseReadiness)))) : !calcResults.hasStrongMatch ? (
                    /* 状态 B: 暂无高度匹配 */
                    React.createElement("div", { className: "pop-card bg-amber-50 p-6 rounded-2xl border-3 border-amber-900 text-slate-900" },
                        React.createElement("h4", { className: "font-black text-xl text-amber-800 mb-2" }, t.noMatchTitle),
                        React.createElement("p", { className: "text-sm font-bold" }, t.noMatchSub))) : (
                    /* 状态 C: 正常 TOP 3 匹配展示 */
                    React.createElement("div", { className: "space-y-6" }, calcResults.topBreeds.map((dog, idx) => (React.createElement("div", { key: dog.id, className: "pop-card bg-white p-5 rounded-2xl flex flex-col md:flex-row gap-6 items-center" },
                        React.createElement("div", { className: "w-32 h-32 rounded-xl border-2 border-slate-900 bg-slate-50 p-2 shrink-0 flex items-center justify-center" },
                            React.createElement("img", { src: dog.pixelImg || dog.realImg, alt: dog.nameZh, className: "w-full h-full object-contain pixel-art-img", onError: (e) => { e.target.src = fallbackImg; } })),
                        React.createElement("div", { className: "flex-1 space-y-2 text-slate-900" },
                            React.createElement("div", { className: "flex items-center gap-2" },
                                React.createElement("span", { className: "bg-slate-900 text-white font-mono text-xs font-black px-2 py-0.5 rounded" },
                                    "TOP 0",
                                    idx + 1),
                                React.createElement("h4", { className: "font-black text-2xl" }, lang === 'zh' ? dog.nameZh : dog.nameJp)),
                            React.createElement("div", { className: "flex flex-wrap gap-4 text-xs font-mono font-black" },
                                React.createElement("span", { className: "bg-amber-100 border border-slate-900 px-2 py-1 rounded" },
                                    t.matchOverall,
                                    ": ",
                                    dog.overallMatch,
                                    "%"),
                                React.createElement("span", { className: "bg-blue-100 border border-slate-900 px-2 py-1 rounded" },
                                    t.matchPreference,
                                    ": ",
                                    dog.prefMatch,
                                    "%"),
                                React.createElement("span", { className: "bg-emerald-100 border border-slate-900 px-2 py-1 rounded" },
                                    t.matchCare,
                                    ": ",
                                    dog.careMatch,
                                    "%"),
                                React.createElement("span", { className: "bg-sky-100 border border-slate-900 px-2 py-1 rounded" },
                                    t.matchClimate,
                                    ": ",
                                    dog.climateMatch,
                                    "%")),
                            React.createElement("p", { className: "text-xs font-bold text-slate-600" },
                                t.originCountry,
                                "\uFF1A",
                                lang === 'zh' ? dog.originZh : dog.originJp,
                                " \u2022 ",
                                dog.fci,
                                " \u2022 ",
                                t.exerciseNeed,
                                "\uFF1A",
                                typeof dog.ext?.exerciseNeed === 'number' ? `${dog.ext.exerciseNeed}%` : t.notRecorded),
                            React.createElement("button", { onClick: () => {
                                    const foundZone = CLIMATE_DATA.find(z => z.id === dog.parentZoneId);
                                    setSelectedZone(foundZone);
                                    setShowPoster(false);
                                    setSelectedDog(dog);
                                }, className: "pop-btn bg-slate-900 text-white text-xs font-black px-4 py-2 rounded-xl flex items-center gap-1.5 hover:bg-slate-800" },
                                React.createElement("i", { "data-lucide": "id-card", className: "w-4 h-4" }),
                                React.createElement("span", null, t.viewBreedDetails)))))))),
                    React.createElement("div", { className: "mt-8 border-t-2 border-slate-900 pt-4 text-xs font-bold text-slate-600 space-y-1" },
                        React.createElement("div", { className: "font-black text-slate-900" }, t.indivDisclaimerTitle),
                        React.createElement("p", null, t.indivDisclaimerText)),
                    React.createElement("div", { className: "mt-8 border-t-4 border-slate-900 pt-6" },
                        React.createElement("div", { className: "mb-5" },
                            React.createElement("span", { className: "classified-stamp" }, "RESPONSIBLE DOG OWNERSHIP"),
                            React.createElement("h3", { className: "text-xl md:text-2xl font-black text-slate-900 mt-2" }, t.preAdoptionChecklistTitle)),
                        React.createElement("div", { className: "grid gap-3" },
                            ["checklistHousing", "checklistFamily", "checklistCare", "checklistAllergy"].map(item => React.createElement("div", { key: item, className: "pop-card bg-white p-4 rounded-xl border-2 border-slate-900 flex items-start gap-3" },
                                React.createElement("span", { className: "text-xl leading-none font-black" }, "□"),
                                React.createElement("span", { className: "text-xs md:text-sm font-bold text-slate-800 leading-relaxed" }, t[item]))))))))),
        showConceptModal && (React.createElement("div", { className: "fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md animate-fadeIn" },
            React.createElement("div", { className: "pop-card bg-white rounded-3xl max-w-2xl w-full p-6 md:p-8 relative overflow-hidden border-4 border-slate-900 text-slate-900 shadow-2xl cursor-default max-h-[90vh] overflow-y-auto" },
                React.createElement("div", { className: "absolute top-0 left-0 right-0 h-4 bg-stripe-accent" }),
                React.createElement("button", { onClick: () => setShowConceptModal(false), className: "absolute top-6 right-6 w-9 h-9 bg-slate-900 text-white border-2 border-white rounded-full flex items-center justify-center font-black hover:bg-slate-700 transition-colors shadow-md cursor-pointer z-20" }, "\u2715"),
                React.createElement("div", { className: "mt-2 mb-6 border-b-2 border-slate-900 pb-4" },
                    React.createElement("span", { className: "bg-slate-900 text-white text-[10px] font-mono font-bold px-2.5 py-1 rounded border border-slate-900 uppercase" }, "CONCEPT STATEMENT"),
                    React.createElement("h3", { className: "text-2xl font-black text-slate-900 mt-2" }, t.conceptModalTitle)),
                React.createElement("div", { className: "space-y-4 text-sm md:text-base leading-relaxed font-medium text-slate-800 mb-6" },
                    React.createElement("p", null, t.conceptP1),
                    React.createElement("p", null, t.conceptP2),
                    React.createElement("div", { className: "border-l-4 border-slate-900 bg-slate-50 p-4 rounded-r-2xl font-bold text-slate-900 shadow-sm" },
                        React.createElement("p", null, t.conceptP3))),
                React.createElement("button", { onClick: () => setShowConceptModal(false), className: "w-full pop-btn bg-slate-900 text-white py-3 font-black text-center rounded-xl text-sm hover:bg-slate-800" }, t.close)))),
        selectedDog && (React.createElement("div", { className: "fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md animate-fadeIn" },
            React.createElement("div", { className: "pop-card bg-white rounded-3xl max-w-xl w-full p-6 md:p-7 relative overflow-hidden border-4 border-slate-900 text-slate-900 shadow-2xl cursor-default" },
                React.createElement("div", { className: "absolute top-0 left-0 right-0 h-4 bg-stripe-accent" }),
                React.createElement("button", { onClick: () => setSelectedDog(null), className: "absolute top-6 right-6 w-9 h-9 bg-slate-900 text-white border-2 border-white rounded-full flex items-center justify-center font-black hover:bg-slate-700 transition-colors shadow-md cursor-pointer z-20" }, "\u2715"),
                React.createElement("div", { className: "mt-2 mb-3 flex flex-wrap items-center justify-between border-b-2 border-slate-900 pb-2.5 text-xs font-mono font-black text-slate-900 pr-10" },
                    React.createElement("span", { className: "bg-slate-900 text-white px-2.5 py-0.5 rounded border border-slate-900" }, selectedZone ? selectedZone.zoneTag : 'Zone'),
                    React.createElement("span", { className: "bg-slate-100 border border-slate-900 px-2.5 py-0.5 rounded tracking-wide" },
                        "FCI: ",
                        selectedDog.fci)),
                React.createElement("div", { className: "mb-4" },
                    React.createElement("h3", { className: "text-2xl font-black text-slate-900" }, t.passportTitle),
                    React.createElement("p", { className: "text-xs font-bold text-slate-500" }, t.passportSub)),
                React.createElement("div", { className: "grid grid-cols-1 sm:grid-cols-12 gap-4 mb-5 p-3.5 bg-slate-50 rounded-2xl border-2 border-slate-900 shadow-inner items-center" },
                    React.createElement("div", { className: "sm:col-span-5 flex items-center justify-center" },
                        React.createElement("div", { className: "w-full aspect-[3/4] max-h-48 rounded-xl border-3 border-slate-900 overflow-hidden relative shadow-md bg-white p-1.5 flex items-center justify-center" },
                            React.createElement("img", { src: selectedDog.realImg || selectedDog.pixelImg, alt: lang === 'zh' ? selectedDog.nameZh : selectedDog.nameJp, className: "w-full h-full object-contain rounded-lg poster-img-gpu", onError: (e) => { e.target.src = fallbackImg; } }))),
                    React.createElement("div", { className: "sm:col-span-7 flex flex-col justify-center space-y-2 text-xs font-bold" },
                        React.createElement("div", null,
                            React.createElement("span", { className: "text-slate-400 block text-[10px] uppercase tracking-wider" }, t.labelName),
                            React.createElement("span", { className: "text-lg font-black text-slate-900 leading-snug" }, lang === 'zh' ? selectedDog.nameZh : selectedDog.nameJp)),
                        React.createElement("div", null,
                            React.createElement("span", { className: "text-slate-400 block text-[10px] uppercase tracking-wider" }, t.labelOrigin),
                            React.createElement("span", { className: "text-slate-800 font-bold" }, lang === 'zh' ? selectedDog.originZh : selectedDog.originJp)),
                        React.createElement("div", null,
                            React.createElement("span", { className: "text-slate-400 block text-[10px] uppercase tracking-wider" }, t.labelBreedGroup),
                            React.createElement("span", { className: "text-slate-800 font-bold" }, lang === 'zh' ? selectedDog.groupZh : selectedDog.groupJp)),
                        React.createElement("div", { className: "pt-1" },
                            React.createElement("span", { className: "inline-block bg-slate-900 text-white font-black text-[11px] px-3 py-1 rounded-full border border-slate-900 shadow-sm" }, lang === 'zh' ? selectedDog.sizeZh : selectedDog.sizeJp)))),
                React.createElement("div", { className: "bg-slate-100 border-2 border-slate-900 rounded-2xl p-4 mb-4 shadow-sm relative overflow-hidden" },
                    React.createElement("h4", { className: "font-black text-xs uppercase tracking-wider text-slate-900 mb-3 flex items-center justify-between" },
                        React.createElement("span", { className: "flex items-center gap-1.5" },
                            React.createElement("i", { "data-lucide": "bar-chart-3", className: "w-4 h-4 text-slate-900" }),
                            t.metricSectionTitle),
                        React.createElement("span", { className: "font-mono text-[10px] text-slate-500" }, "(0% - 100%)")),
                    React.createElement("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-3 text-xs font-bold" },
                        React.createElement("div", { className: "space-y-3" },
                            React.createElement("div", null,
                                React.createElement("div", { className: "flex justify-between text-[11px] mb-1" },
                                    React.createElement("span", { className: "text-slate-700" }, t.statHairLoss),
                                    React.createElement("span", { className: "font-mono font-black text-slate-900" },
                                        selectedDog.stats.hairLoss,
                                        "%")),
                                React.createElement("div", { className: "w-full h-3 bg-white rounded-full border border-slate-900 overflow-hidden" },
                                    React.createElement("div", { className: "h-full bg-slate-900 transition-all duration-500", style: { width: `${selectedDog.stats.hairLoss}%` } }))),
                            React.createElement("div", null,
                                React.createElement("div", { className: "flex justify-between text-[11px] mb-1" },
                                    React.createElement("span", { className: "text-slate-700" }, t.statPlayfulness),
                                    React.createElement("span", { className: "font-mono font-black text-slate-900" },
                                        selectedDog.stats.playfulness,
                                        "%")),
                                React.createElement("div", { className: "w-full h-3 bg-white rounded-full border border-slate-900 overflow-hidden" },
                                    React.createElement("div", { className: "h-full bg-slate-900 transition-all duration-500", style: { width: `${selectedDog.stats.playfulness}%` } }))),
                            React.createElement("div", null,
                                React.createElement("div", { className: "flex justify-between items-center text-[11px] mb-1" },
                                    React.createElement("span", { className: "text-slate-700 font-extrabold" }, t.statIndependence),
                                    React.createElement("div", { className: "flex items-center gap-1.5 font-mono" },
                                        React.createElement("span", { className: `text-[9px] font-black px-1.5 py-0.2 rounded border border-slate-900 ${selectedDog.stats.independence > 60
                                                ? 'bg-emerald-300 text-slate-900'
                                                : selectedDog.stats.independence < 40
                                                    ? 'bg-rose-300 text-slate-900'
                                                    : 'bg-amber-200 text-slate-900'}` }, selectedDog.stats.independence > 60
                                            ? t.indepHigh
                                            : selectedDog.stats.independence < 40
                                                ? t.indepLow
                                                : t.indepMid),
                                        React.createElement("span", { className: "font-black text-slate-900" },
                                            selectedDog.stats.independence,
                                            "%"))),
                                React.createElement("div", { className: "w-full h-3 bg-white rounded-full border border-slate-900 overflow-hidden" },
                                    React.createElement("div", { className: "h-full bg-slate-900 transition-all duration-500", style: { width: `${selectedDog.stats.independence}%` } })))),
                        React.createElement("div", { className: "space-y-3" },
                            React.createElement("div", null,
                                React.createElement("div", { className: "flex justify-between text-[11px] mb-1" },
                                    React.createElement("span", { className: "text-slate-700" }, t.statBarking),
                                    React.createElement("span", { className: "font-mono font-black text-slate-900" },
                                        selectedDog.stats.barking,
                                        "%")),
                                React.createElement("div", { className: "w-full h-3 bg-white rounded-full border border-slate-900 overflow-hidden" },
                                    React.createElement("div", { className: "h-full bg-slate-900 transition-all duration-500", style: { width: `${selectedDog.stats.barking}%` } }))),
                            React.createElement("div", null,
                                React.createElement("div", { className: "flex justify-between text-[11px] mb-1" },
                                    React.createElement("span", { className: "text-slate-700" }, t.statTrainability),
                                    React.createElement("span", { className: "font-mono font-black text-slate-900" },
                                        selectedDog.stats.trainability,
                                        "%")),
                                React.createElement("div", { className: "w-full h-3 bg-white rounded-full border border-slate-900 overflow-hidden" },
                                    React.createElement("div", { className: "h-full bg-slate-900 transition-all duration-500", style: { width: `${selectedDog.stats.trainability}%` } }))),
                            React.createElement("div", null,
                                React.createElement("div", { className: "flex justify-between text-[11px] mb-1" },
                                    React.createElement("span", { className: "text-slate-700" }, t.statBeginnerFriendly),
                                    React.createElement("span", { className: "font-mono font-black text-slate-900" },
                                        selectedDog.stats.beginnerFriendly,
                                        "%")),
                                React.createElement("div", { className: "w-full h-3 bg-white rounded-full border border-slate-900 overflow-hidden" },
                                    React.createElement("div", { className: "h-full bg-slate-900 transition-all duration-500", style: { width: `${selectedDog.stats.beginnerFriendly}%` } })))))),
                React.createElement("p", { className: "text-[11px] font-black text-slate-800 text-center mb-4" }, t.adoptNotice),
                React.createElement("button", { onClick: () => setSelectedDog(null), className: "w-full pop-btn bg-slate-900 text-white py-3 font-black text-center rounded-xl text-sm hover:bg-slate-800" }, t.close)))),
        React.createElement("footer", { className: "mt-auto text-center font-mono text-xs font-black theme-sub-text py-4 drop-shadow cursor-default z-10" }, "DESIGNED FOR GRADUATION PROJECT \u2022 POP VISUAL DOG ARCHIVE HUB")));
}
const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App, null));


        })();
      } catch (error) {
        console.error('Dog Archive app runtime error:', error);
        showError(error && error.stack ? error.stack : error);
      }
    })
    .catch(function (error) {
      console.error('Dog Archive dependency error:', error);
      showError(error && error.message ? error.message : error);
    });
})();