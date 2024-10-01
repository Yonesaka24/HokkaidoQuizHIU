let point = 0; //クイズ獲得ポイント量
let q_num = 0;
let q_torf = []; //クイズ正解か不正解かをt,fで格納する配列
let quiz = []; //問題内容をコピーするための配列
let q_easy = [
	//難易度イージー
	{
		text: "札幌",
		answer: "さっぽろ",
		src: "image/easy/sapporopin.png",
		info: "北海道人口１位の都市",
	},
	{
		text: "旭川",
		answer: "あさひかわ",
		src: "image/easy/asahikawapin.png",
		info: "北海道人口２位の都市",
	},
	{
		text: "江別",
		answer: "えべつ",
		src: "image/easy/ebetsupin.png",
		info: "世界有数の平地原生林が残る都市",
	},
	{
		text: "函館",
		answer: "はこだて",
		src: "image/easy/hakodatepin.png",
		info: "１００万ドルの夜景と称される景色が一望できる都市",
	},
	{
		text: "北見",
		answer: "きたみ",
		src: "image/easy/kitamipin.png",
		info: "オホーツク地域の商工業・サービス業の中核を担う都市",
	},
	{
		text: "釧路",
		answer: "くしろ",
		src: "image/easy/kushiropin.png",
		info: "釧路湿原をはじめ豊かな自然に囲まれた都市",
	},
	{
		text: "室蘭",
		answer: "むろらん",
		src: "image/easy/muroranpin.png",
		info: "室蘭焼き鳥や室蘭港の夜景などが有名な都市",
	},
	{
		text: "帯広",
		answer: "おびひろ",
		src: "image/easy/obihiropin.png",
		info: "豚丼発祥の地として有名な都市",
	},
	{
		text: "小樽",
		answer: "おたる",
		src: "image/easy/otarupin.png",
		info: "小樽運河や小樽倉庫などをはじめレトロ＆ロマンを感じる都市",
	},
	{
		text: "夕張",
		answer: "ゆうばり",
		src: "image/easy/yubaripin.png",
		info: "夕張メロンが有名な都市",
	},
	{
		text: "別海",
		answer: "べつかい",
		src: "image/easy/betsukaipin.png",
		info: "観光地である野付半島ではオオワシ等の希少な鳥たちの楽園",
	},
	{
		text: "浜中",
		answer: "はまなか",
		src: "image/easy/hamanakapin.png",
		info: "全国屈指の昆布生産の一大産地",
	},
	{
		text: "浦幌",
		answer: "うらほろ",
		src: "image/easy/urahoropin.png",
		info: "森林公園が魅力。オートキャンプ場やバーベキューハウスなど設備も充実",
	},
	{
		text: "中札内",
		answer: "なかさつない",
		src: "image/easy/nakasatunaipin.png",
		info: "六花の森や六花亭アートビレッジなど芸術的な観光スポットにあふれている",
	},
	{
		text: "清水",
		answer: "しみず",
		src: "image/easy/shimizupin.png",
		info: "日勝峠や美蔓パノラマパークの広大な風景が魅力",
	},
	{
		text: "広尾",
		answer: "ひろお",
		src: "image/easy/hiropin.png",
		info: "十勝港ではシシャモの水揚げが日本一",
	},
	{
		text: "池田",
		answer: "いけだ",
		src: "image/easy/ikedapin.png",
		info: "醸造所であるブドウ酒研究所はワイン城と呼ばれ、十勝ワインを製造している",
	},
	{
		text: "本別",
		answer: "ほんべつ",
		src: "image/easy/honbetsupin.png",
		info: "日本一の豆の町と言われており良質な豆産地である",
	},
	{
		text: "上士幌",
		answer: "かみしほろ",
		src: "image/easy/kamishihoropin.png",
		info: "町の約76％が森林であり、豊かな自然環境が特徴",
	},
	{
		text: "大空",
		answer: "おおぞら",
		src: "image/easy/ozorapin.png",
		info: "酪農と乳製品が有名でカマンベールチーズなどが名産品",
	},
	{
		text: "富良野",
		answer: "ふらの",
		src: "image/easy/huranopin.png",
		info: "玉ねぎなどの農業及びラベンダーによる観光業が盛ん",
	},
	{
		text: "北広島",
		answer: "きたひろしま",
		src: "image/easy/kitahiroshimapin.png",
		info: "トマトジュースや荒井養蜂場のはちみつなどが有名な特産品",
	},
	{
		text: "伊達",
		answer: "だて",
		src: "image/easy/datepin.png",
		info: "だて歴史文化ミュージアムや有珠善光寺などが観光スポットとして有名",
	},
	{
		text: "登別",
		answer: "のぼりべつ",
		src: "image/easy/noboribetsupin.png",
		info: "登別温泉とカルルス温泉を抱える北海道有数の観光都市",
	},
	{
		text: "北斗",
		answer: "ほくと",
		src: "image/easy/hokutopin.png",
		info: "ホッキ貝を代表とした魚介類などが特産品な地域",
	},
	{
		text: "松前",
		answer: "まつまえ",
		src: "image/easy/matsumaepin.png",
		info: "郷土料理の松前漬けが有名な名産品",
	},
	{
		text: "ニセコ",
		answer: "にせこ",
		src: "image/easy/nisekopin.png",
		info: "日本有数のリゾート地として有名、夏はラフティング冬はスキーなど楽しめる",
	},
	{
		text: "八雲",
		answer: "やくも",
		src: "image/easy/yakumopin.png",
		info: "北里八雲牛というブランド牛が有名",
	},
	{
		text: "栗山",
		answer: "くりやま",
		src: "image/easy/kuriyamapin.png",
		info: "玉ねぎやお米が特産品の地域",
	},
	{
		text: "岩見沢",
		answer: "いわみざわ",
		src: "image/easy/iwamizawapin.png",
		info: "道内最大級遊園地グリーンランドが存在する都市",
	},
];
let q_normal = [
	//難易度ノーマル
	{
		text: "稚内",
		answer: "わっかない",
		src: "image/normal/wakkanaipin.png",
		info: "日本最北端の市",
	},
	{
		text: "苫小牧",
		answer: "とまこまい",
		src: "image/normal/tomakomaipin.png",
		info: "ホッキ貝の漁獲量日本一を誇る都市",
	},
	{
		text: "留萌",
		answer: "るもい",
		src: "image/normal/rumoipin.png",
		info: "数の子加工生産量日本一の都市",
	},
	{
		text: "木古内",
		answer: "きこない",
		src: "image/normal/kikonaipin.png",
		info: "北海道の最南端、渡島半島に位置する町",
	},
	{
		text: "芦別",
		answer: "あしべつ",
		src: "image/normal/ashibetsupin.png",
		info: "森林が都市の約８９％を占める自然豊かな都市",
	},
	{
		text: "歌志内",
		answer: "うたしない",
		src: "image/normal/utashinaipin.png",
		info: "日本で一番人口が少ない日本一小さな市",
	},
	{
		text: "名寄",
		answer: "なよろ",
		src: "image/normal/nayoropin.png",
		info: "煮込みジンギスカンがソウルフードとして有名な市",
	},
	{
		text: "士別",
		answer: "しべつ",
		src: "image/normal/shibetsupin.png",
		info: "ブランド羊サフォークが有名な市",
	},
	{
		text: "知内",
		answer: "しりうち",
		src: "image/normal/shiriutipin.png",
		info: "農業、漁業が盛んな町で特に知内カキなどが有名な町",
	},
	{
		text: "赤平",
		answer: "あかびら",
		src: "image/normal/akabira.png",
		info: "日本遺産である炭鉄港を有する都市",
	},
	{
		text: "鶴居",
		answer: "つるい",
		src: "image/normal/tsuruipin.png",
		info: "酪農を基幹産業とし、良質な牛乳が名産品",
	},
	{
		text: "大樹",
		answer: "たいき",
		src: "image/normal/taikipin.png",
		info: "日本一の清流歴舟川が流れるまちで、雄大な自然を感じることが出来る",
	},
	{
		text: "鹿追",
		answer: "しかおい",
		src: "image/normal/shikaoipin.png",
		info: "乗馬や乳しぼりなどのんびり農村ライフが楽しめる",
	},
	{
		text: "新得",
		answer: "しんとく",
		src: "image/normal/shintokupin.png",
		info: "新得そばや新得地鶏などが特産品として有名",
	},
	{
		text: "平取",
		answer: "びらとり",
		src: "image/normal/biratoripin.png",
		info: "二風谷コタンや二風谷ファミリーランドなどが有名な観光スポット",
	},
	{
		text: "安平",
		answer: "あびら",
		src: "image/normal/abirapin.png",
		info: "チーズ専門工場発祥の地で全国的にも有名",
	},
	{
		text: "洞爺湖",
		answer: "とうやこ",
		src: "image/normal/touyakopin.png",
		info: "洞爺湖は日本で3番目に大きいカルデラ湖、透明度が高いことが有名",
	},
	{
		text: "白老",
		answer: "しらおい",
		src: "image/normal/shiraoipin.png",
		info: "白老牛が特に有名な名産品で日米首脳会議後の晩餐会で提供されたほど",
	},
	{
		text: "滝上",
		answer: "たきのうえ",
		src: "image/normal/takinouepin.png",
		info: "ニジマスなどが生息する清流で本格的な渓流釣りが楽しめる",
	},
	{
		text: "佐呂間",
		answer: "さろま",
		src: "image/normal/saromapin.png",
		info: "ホタテ養殖発祥の地としてサロマ湖が有名",
	},
	{
		text: "斜里",
		answer: "しゃり",
		src: "image/normal/syaripin.png",
		info: "世界自然遺産知床を中心とした観光産業に力を入れている",
	},
	{
		text: "留寿都",
		answer: "るすつ",
		src: "image/normal/rusutsupin.png",
		info: "ルスツリゾートを始めとした様々な観光スポットに恵まれている",
	},
	{
		text: "今金",
		answer: "いまかね",
		src: "image/normal/imakanepin.png",
		info: "今金男爵といったジャガイモなどが主な特産品",
	},
	{
		text: "天塩",
		answer: "てしお",
		src: "image/normal/teshiopin.png",
		info: "日本最大級のしじみがとれる町として有名",
	},
	{
		text: "枝幸",
		answer: "えさし",
		src: "image/normal/esashipin.png",
		info: "毛ガニやホタテ、秋サケなどの海産物が有名な特産品",
	},
	{
		text: "遠軽",
		answer: "えんがる",
		src: "image/normal/engarupin.png",
		info: "「遠軽にょっきーず」というアスパラやじゃがいもが主な特産品",
	},
	{
		text: "上ノ国",
		answer: "かみのくに",
		src: "image/normal/kaminokunipin.png",
		info: "日本で唯一「ブラックシリカ」という鉱石が採取できる町",
	},
	{
		text: "七飯",
		answer: "ななえ",
		src: "image/normal/nanaepin.png",
		info: "西洋りんご発祥の地として有名な町",
	},
	{
		text: "蘭越",
		answer: "らんこし",
		src: "image/normal/rankoshipin.png",
		info: "「らんこし米」というブランド米が特産品の町",
	},
	{
		text: "由仁",
		answer: "ゆに",
		src: "image/normal/yunipin.png",
		info: "温泉と花の町として「ユン二の湯」などが有名な地域",
	},
];
let q_hard = [
	//難易度ハード
	{
		text: "厚沢部",
		answer: "あっさぶ",
		src: "image/hard/assabupin.png",
		info: "世界一素敵な過疎の町",
	},
	{
		text: "美唄",
		answer: "びばい",
		src: "image/hard/bibaipin.png",
		info: "札幌と旭川の中間に位置する道内流通の要所",
	},
	{
		text: "神恵内",
		answer: "かもえない",
		src: "image/hard/kamoenaipin.png",
		info: "人口約８２０人の道内で２番目に小さい村",
	},
	{
		text: "喜茂別",
		answer: "きもべつ",
		src: "image/hard/kimobetsupin.png",
		info: "環境庁から水の郷として認定を受けている町",
	},
	{
		text: "倶知安",
		answer: "くっちゃん",
		src: "image/hard/kuttyanpin.png",
		info: "羊蹄山を望む自然が豊かな町",
	},
	{
		text: "妹背牛",
		answer: "もせうし",
		src: "image/hard/moseushipin.png",
		info: "総面積４８．６４㎢と北海道で３番目に小さい町",
	},
	{
		text: "長万部",
		answer: "おしゃまんべ",
		src: "image/hard/osyamanbepin.png",
		info: "北海道を代表する駅弁「かにめし」の町",
	},
	{
		text: "寿都",
		answer: "すっつ",
		src: "image/hard/suttsupin.png",
		info: "自然と調和した風力発電の取り組みが進められる町",
	},
	{
		text: "積丹",
		answer: "しゃこたん",
		src: "image/hard/shyakotanpin.png",
		info: "雄大な海に面した絶景の町",
	},
	{
		text: "泊",
		answer: "とまり",
		src: "image/hard/tomaripin.png",
		info: "北海道で唯一原子力発電所がある村",
	},
	{
		text: "幌延",
		answer: "ほろのべ",
		src: "image/hard/horonobepin.png",
		info: "幌延町と言えば、サロベツ合鴨が有名な特産品",
	},
	{
		text: "弟子屈",
		answer: "てしかが",
		src: "image/hard/teshikagapin.png",
		info: "透明度世界一を記録したこともある摩周湖を有する町",
	},
	{
		text: "猿払",
		answer: "さるふつ",
		src: "image/hard/saruhutsupin.png",
		info: "ホタテ漁が盛んな地域で村にはホタテ御殿と呼ばれる立派な家も建っているほど",
	},
	{
		text: "増毛",
		answer: "ましけ",
		src: "image/hard/mashikepin.png",
		info: "水産資源に恵まれた町で特にボタンエビなどが特産品として有名",
	},
	{
		text: "礼文",
		answer: "れぶん",
		src: "image/hard/rebunpin.png",
		info: "澄海岬という澄んだ海の色が特徴的な美しい入り江が有名",
	},
	{
		text: "訓子府",
		answer: "くんねっぷ",
		src: "image/hard/kunneppupin.png",
		info: "くんねっぷメロンなどが有名な特産品の地域",
	},
	{
		text: "置戸",
		answer: "おけと",
		src: "image/hard/oketopin.png",
		info: "「炎の里」と呼ばれる、赤ワインや白ワインが有名な特産品",
	},
	{
		text: "音更",
		answer: "おとふけ",
		src: "image/hard/otohukepin.png",
		info: "ホクシンうどんや黒大豆などが有名な特産品",
	},
	{
		text: "剣淵",
		answer: "けんぶち",
		src: "image/hard/kenbutipin.png",
		info: "屯田三色めん、玄米うどん、オリジナル野菜ジュースなどが有名",
	},
	{
		text: "幌加内",
		answer: "ほろかない",
		src: "image/hard/horokanaipin.png",
		info: "ほろかないそば等、そば関連商品が主な特産品の地域",
	},
	{
		text: "興部",
		answer: "おこっぺ",
		src: "image/hard/okoppepin.png",
		info: "大規模な酪農業や水産資源の豊富な漁業が非常に盛んな町",
	},
	{
		text: "西興部",
		answer: "にしおこっぺ",
		src: "image/hard/nishiokoppepin.png",
		info: "天然の松茸を使った特産焼酎「にしおこっぺ」などが主な特産品",
	},
	{
		text: "白糠",
		answer: "しらぬか",
		src: "image/hard/shiranukapin.png",
		info: "ヤナギダコやししゃも、イタリアンチーズなどが主な特産品",
	},
	{
		text: "標茶",
		answer: "しべちゃ",
		src: "image/hard/shibetyapin.png",
		info: "飼育されている牛の頭数が人口の2倍近くにもなるとされている町",
	},
	{
		text: "厚岸",
		answer: "あっけし",
		src: "image/hard/akkeshipin.png",
		info: "全国有数の牡蠣の名産地として知られる街",
	},
	{
		text: "雄武",
		answer: "おうむ",
		src: "image/hard/oumupin.png",
		info: "毛ガニやホタテ、鮭、うに、いくら等海産物が主な特産品の町",
	},
	{
		text: "比布",
		answer: "ぴっぷ",
		src: "image/hard/pippupin.png",
		info: "スキーとイチゴの町として有名",
	},
	{
		text: "和寒",
		answer: "わっさむ",
		src: "image/hard/wassamupin.png",
		info: "かぼちゃの収穫量・作付面積ともに日本一位の町",
	},
	{
		text: "秩父別",
		answer: "ちっぷべつ",
		src: "image/hard/tippubetsupin.png",
		info: "人口2345人ほどの町で、道内市町村の中で2番目に小さい町",
	},
];
let img = document.querySelector(".placeimg");
function rand_q(arr) {
	for (let i = arr.length - 1; i > 0; i--) {
		let r = Math.floor(Math.random() * (i + 1));
		[arr[i], arr[r]] = [arr[r], arr[i]];
	}
}
window.onload = function () {
	let sel_q = localStorage.saveKey;
	if (sel_q == 1) {
		quiz = q_easy;
		rand_q(quiz);
		img.src = quiz[q_num].src;
		document.querySelector(".q_text").innerHTML = quiz[q_num].text;
		document.querySelector(".smalltext").textContent = "第" + (q_num + 1) + "問";
	} else if (sel_q == 2) {
		quiz = q_normal;
		rand_q(quiz);
		img.src = quiz[q_num].src;
		document.querySelector(".q_text").innerHTML = quiz[q_num].text;
		document.querySelector(".smalltext").textContent = "第" + (q_num + 1) + "問";
	} else {
		quiz = q_hard;
		rand_q(quiz);
		img.src = quiz[q_num].src;
		document.querySelector(".q_text").innerHTML = quiz[q_num].text;
		document.querySelector(".smalltext").textContent = "第" + (q_num + 1) + "問";
	}
};

//クイズシステムメイン
document.querySelector(".q_inp").addEventListener("keydown", ans);
let u_ans = document.querySelector(".q_inp");
function ans(event) {
	if (event.key === "Enter") {
		let hiragana = /^[ぁ-ん]+$/u;
		if (hiragana.test(u_ans.value)) {
			if (quiz[q_num].answer == u_ans.value) {
				u_ans.value = "";
				u_ans.disabled = true;
				point++;
				q_torf[q_num] = "t";
				trueans();
				console.log(q_torf[q_num]);
			} else {
				u_ans.value = "";
				u_ans.disabled = true;
				q_torf[q_num] = "f";
				console.log(q_torf[q_num]);
				falseans();
			}
		} else {
			alert("ひらがなで入力してください");
			u_ans.value = "";
			document.querySelector(".q_inp").focus();
		}
	}
}
//正誤判定
function trueans() {
	document.querySelector(".inputtext").classList.add("hide");
	document.querySelector(".ans").textContent = quiz[q_num].answer;
	document.querySelector(".mb").textContent = "○";
	document.querySelector(".smalltext").textContent = "正解";
	document.querySelector(".qinfo").textContent = quiz[q_num].info;
	document.querySelector(".qinfo").classList.add("active");
	document.querySelector(".ans").classList.add("active");
	document.querySelector(".mb").classList.add("active", "maru");
	document.querySelector(".push").classList.remove("hide");
	document.querySelector(".tap").classList.remove("hide");

	setTimeout(() => {
		window.addEventListener("keydown", nextq);
		window.addEventListener("touchstart", nextqmb);
	}, 100);
}
function falseans() {
	document.querySelector(".inputtext").classList.add("hide");
	document.querySelector(".ans").textContent = quiz[q_num].answer;
	document.querySelector(".mb").textContent = "×";
	document.querySelector(".smalltext").textContent = "不正解";
	document.querySelector(".qinfo").textContent = quiz[q_num].info;
	document.querySelector(".qinfo").classList.add("active");
	document.querySelector(".ans").classList.add("active");
	document.querySelector(".mb").classList.add("active", "batu");
	document.querySelector(".push").classList.remove("hide");
	document.querySelector(".tap").classList.remove("hide");

	u_ans.disabled = false;
	setTimeout(() => {
		window.addEventListener("keydown", nextq);
		window.addEventListener("touchstart", nextqmb);
	}, 100);
}
//次の問題かクイズ終了

function nextq(event) {
	if (event.key === "Enter") {
		document.querySelector(".inputtext").classList.remove("hide");
		document.querySelector(".qinfo").classList.remove("active");
		document.querySelector(".q_text").classList.remove("active");
		document.querySelector(".ans").classList.remove("active");
		document.querySelector(".mb").classList.remove("active", "batu");
		document.querySelector(".push").classList.add("hide");
		document.querySelector(".tap").classList.add("hide");
		u_ans.disabled = false;
		q_num++;
		window.removeEventListener("keydown", nextq);
		window.removeEventListener("touchstart", nextq);
		if (q_num < 10) {
			img.src = quiz[q_num].src;
			document.querySelector(".q_text").innerHTML = quiz[q_num].text;
			document.querySelector(".smalltext").textContent = "第" + (q_num + 1) + "問";
			document.querySelector(".q_inp").focus();
		} else {
			q_num = 0;
			resultread();
		}
	}
}
function nextqmb() {
	document.querySelector(".inputtext").classList.remove("hide");
	document.querySelector(".qinfo").classList.remove("active");
	document.querySelector(".q_text").classList.remove("active");
	document.querySelector(".mb").classList.remove("active", "batu");
	document.querySelector(".push").classList.add("hide");
	document.querySelector(".tap").classList.add("hide");
	u_ans.disabled = false;
	q_num++;
	window.removeEventListener("keydown", nextq);
	window.removeEventListener("touchstart", nextqmb);
	if (q_num < 10) {
		img.src = quiz[q_num].src;
		document.querySelector(".q_text").innerHTML = "<ruby>" + quiz[q_num].text + "<rt>" + quiz[q_num].answer + "</rt><ruby>";
		document.querySelector(".smalltext").textContent = "第" + (q_num + 1) + "問";
		document.querySelector(".q_inp").focus();
	} else {
		q_num = 0;
		resultread();
	}
}

function resultread() {
	document.querySelector(".backmb").classList.add("hide");
	document.querySelector(".quiz").classList.add("hide");
	document.querySelector(".after_q").classList.remove("hide");
	document.querySelector(".point").textContent = point * 10 + "点/100点";

	let result = document.querySelector(".resultkanji");
	for (let i = 0; i < 10; i++) {
		result.insertAdjacentHTML("beforeend", '<div class="resultnum">第' + (i + 1) + "問</div>");
		if (q_torf[i] == "t") {
			result.insertAdjacentHTML("beforeend", '<div class="resulttext"><div class="maru">〇</div><ruby class="rquiztext">' + quiz[i].text + "<rt>" + quiz[i].answer + "</rt></ruby></div>");
		} else {
			result.insertAdjacentHTML("beforeend", '<div class="resulttext"><div class="batu">×</div><ruby class="rquiztext">' + quiz[i].text + "<rt>" + quiz[i].answer + "</rt></ruby></div>");
		}
		result.insertAdjacentHTML("beforeend", '<p class="rinfo">' + quiz[i].info + "</p>");
	}
}
