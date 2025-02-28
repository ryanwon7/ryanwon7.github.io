---
gamenum: game14
archetype: tournament
year: 2019
type: schedule
style: tabs       # defines body main class
script: tables
layout: default
datatable: true
---
{% assign game = site.data.seasons.nineteen.games[page.gamenum] %}
{% assign home = site.data.seasons.nineteen.teams[game.home_team_name] %}
{% assign away = site.data.seasons.nineteen.teams[game.away_team_name] %}

<h4 style="text-align: center;"> {{game.type}}: {{game.long_date}} at {{game.time}} </h4>
<br>
<h1 style="text-align: center;"> {{home.name}} vs {{away.name}}</h1>
<h3 style="text-align: center;"> {{home.tag}} {{game.home_score}} - {{game.away_score}} {{away.tag}} </h3>
{% if game.stage == "reg" %}
<h2> {{home.name}} ({{home.wins}}-{{home.losses}})</h2>
{% else %}
<h2> ({{home.seed}}) {{home.name}} </h2>
{% endif %}
{% if game.stage == "reg" %}
<h2> {{away.name}} ({{away.wins}}-{{away.losses}})</h2>
{% else %}
<h2> ({{away.seed}}) {{away.name}} </h2>
{% endif %}


<p> Note: The stats for the finals were never recorded.</p>
<br>
<div style="display: flex; justify-content: center; align-items: center;">
  <button type="button" onclick="window.history.back()">Go Back</button>
</div>