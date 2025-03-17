---
layout: home
title: "Home主頁"
---

<link rel="stylesheet" href="style.css">

**Hello**／您好／Hallo／こんにちは／吀嘲 Xin Chào／Привет／ས་ཁམས་བཟང་།👋🏼

- **Welcome to my weblog.**
- 歡迎訪問吾之網誌。
- Willkommen auf meinem Weblog. 
- 私のウェブログへようこそ。
- Добро пожаловать в мой веб-журнал.
- Chào mừng đến với nhật ký web của tôi. 嘲𢜠𦤾貝日記web𧵑碎。
- ངའི་ཟིན་བྲིས་ལ་ཕེབས་པར་དགའ་བསུ་ཞུ།

## **Introdoction**
### **介紹／Einleitung／紹介／Giới thiệu 介紹／Введение／ངོ་སྤྲོད**

- **📍Chinese Mainland, Han Chinese**

    **Music production enthusiast, travelling & photography lover, I’ll post my daily life here.**
- 📍中國大陸，漢族

    音樂製作愛好者，旅行與攝影愛好者，我會將我的日常生活發布至此。
- 📍Chinesische Festland, Han-Ethnie
    
    Musikproduktions-Enthusiast, Reise- und Fotografie-Liebhaber, ich werde hier mein tägliches Leben posten.
- 📍中国大陸、漢民族

    音楽制作愛好家、旅行と写真愛好家、ここで私の日常生活を投稿します。
- 📍Trung Quốc đại lục, người Hán 中國大陸，𠊛漢

    Người đam mê sản xuất âm nhạc, người yêu thích du lịch và nhiếp ảnh, tôi sẽ đăng tải cuộc sống hàng ngày của mình tại đây.

    𠊛耽迷產出音樂，𠊛㤇倜遊歷吧攝影，碎䐭登載局𤯩降𣈜𧵑𨉟在𩂠。
- 📍Китайская часть материка, Ханьцзу́

  Любитель музыкального производства, любитель путешествий и фотографии, я буду публиковать здесь свою повседневную жизнь.
- 📍རྒྱ་ནང་ས་, ཧན་མི་རིགས།

  རོལ་དབྱངས་བཟོ་སྐྲུན་ལ་དགའ་མཁན་དང་། འགྲུལ་བཞུད་དང་པར་ལེན་ལ་དགའ་མཁན། ངས་འདི་གར་ངའི་ཉིན་རེའི་འཚོ་བ་སྤེལ་རྒྱུ་ཡིན།

## **Hyperlinks**

### **超連結／ハイパーリンク／Siêu liên kết 超連結／Гиперссылки／སདྲ་འབྲེལ་མཐུད**

**[bio.site](https://bio.site/yongzs1218)**

**SNS**
[Tumblr](https://yongzs1218.tumblr.con)｜[Mastodon](https://mastodon.ktachibana.party/@yongzs1218)｜[Instagram](https://www.instagram.com/yongzs1218)｜[Facebook](https://www.facebook.com/yongzs1218)｜[小红书/REDnote](https://www.xiaohongshu.com/user/profile/63d4cc150000000026006370)｜[豆瓣/Douban](https://www.douban.com/people/YongZS1218/?_i=9475653ibAOHuR,9523077ibAOHuR)｜[新浪微博/Sina Weibo](https://weibo.com/u/7451755760)｜[Twitter/X](https://x.com/yongzs1218)｜[VKontakte/ВКонтакте](https://vk.com/yongzs1218)

**Music**
[SoundCloud](https://soundcloud.com/yongzs1218)｜[Bandcamp](https://yongzs1218.bandcamp.com/)｜[BandLab](https://www.bandlab.com/yongzs1218)｜[StreetVoice/街聲](https://streetvoice.com/YongZS1218/)｜[QQ音乐/QQ Music](https://y.qq.com/n/ryqq/singer/004TlJLl0fnqwh)｜[网易云音乐/NetEase Cloud Music](https://music.163.com/#/artist?id=50000746)｜[酷狗音乐/Kugou Music](https://www.kugou.com/singer/info/6JJVAKDE99F64E/)｜[酷我音乐/Kuwo Music](https://kuwo.cn/singer_detail/8241275)

**Video**
[YouTube](https://www.youtube.com/@yongzs1218)｜[Odysee](https://odysee.com/@yongzs1218)｜[TikTok](https://www.tiktok.com/@yongzs1218)｜[bilibili/哔哩哔哩](https://space.bilibili.com/618957997)｜[AcFun](https://www.acfun.cn/u/51064405)｜[抖音/Douyin](https://www.douyin.com/user/MS4wLjABAAAA6XGuIBDNrQ3rRy7KAczB8CFrBn2CLEFbaUPE5x4k7So)｜[快手/Kuaishou](https://www.kuaishou.com/profile/3xw8cp8hu54y85s)｜[Niconico/ニコニコ](https://www.nicovideo.jp/user/131152965)｜[Kwai](https://m.kwai.com/old/user/@yongzs1218)

{% for post in site.posts %}
  {% unless post.categories contains "Blog" %}
    <li>
      <a href="{{ post.url }}">{{ post.title }}</a>
    </li>
  {% endunless %}
{% endfor %}