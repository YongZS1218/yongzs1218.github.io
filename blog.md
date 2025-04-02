---
layout: post
title: "Weblogs網誌"
permalink: /blog/
---

<link rel="stylesheet" href="/style.css">

<h3><strong>My Weblogs</strong></h3>

<h4><strong>吾之網誌／Meine Weblogs／私のウェブログ／<ruby>各<rt>Các</rt></ruby>&nbsp;<ruby>日<rt>nhật</rt></ruby>&nbsp;<ruby>記<rt>ký</rt></ruby>web<ruby>𧵑<rt>của</rt></ruby>&nbsp;<ruby>碎<rt>tôi</rt></ruby>／Мои веб-журналы／ངའི་ཟིན་བྲིས་རྣམས།</strong>
</h4><a href="/feed.xml" target="_blank">
  <img src="https://cdn.freebiesupply.com/logos/large/2x/rss-logo-png-transparent.png" alt="RSS Subscribe" width="25" height="25"/>
</a>

<ul>
  {% for post in site.posts %}
    <li>
      <a href="{{ post.url }}">{{ post.title }}</a>
      <p>{{ post.date | date: "%Y-%m-%d" }}</p>
    </li>
  {% endfor %}
</ul>
