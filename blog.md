---
layout: post
title: "Weblogs網誌"
permalink: /blog/
---

<link rel="stylesheet" href="/style.css">

<h3><strong>My Weblogs</strong></h3>

<h4><strong>吾之網誌／Meine Weblogs／私のウェブログ／Các nhật ký web của tôi 各日記web𧵑碎／Мои веб-журналы／ངའི་ཟིན་བྲིས་རྣམས།</strong></h4>
<a href="/feed.xml" target="_blank">
  <img src="https://cdn.freebiesupply.com/logos/large/2x/rss-logo-png-transparent.png" alt="RSS Subscribe" />
</a>

<ul>
  {% for post in site.posts %}
    <li>
      <a href="{{ post.url }}">{{ post.title }}</a>
      <p>{{ post.date | date: "%Y-%m-%d" }}</p>
    </li>
  {% endfor %}
</ul>