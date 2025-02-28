---
archetype: tournament
type: schedule
year: 2019
title:  Schedule
style:  tabs       # defines body main class
script: standsched
layout: default
datatable: true
---
<h2> Schedule and Scores ({{page.year}}) </h2>
<table class="display3">
  <colgroup>
    <col class="forty"/>
    <col class="fifteen"/>
    <col class="twenty"/>
    <col class="fifteen"/>
  </colgroup>
  <thead>
    <tr>
      <th>Matchup</th>
      <th>Match Page</th>
      <th>Stage</th>
      <th>Result</th>
    </tr>
  </thead>
  <tbody>
    {% for game in site.data.seasons.nineteen.games %}
    {% assign match = game[1] %}
	{% assign home = site.data.seasons.nineteen.teams[match.home_team_name] %}
	{% assign away = site.data.seasons.nineteen.teams[match.away_team_name] %}
    <tr>
      <td><b>{{home.name}} vs {{away.name}}</b></td>
      <td><a href="/{{page.year}}/games/game{{match.game_id}}">Match Stats</a></td>
      <td>{{match.type}}</td>
      <td>{{home.tag}} {{match.home_score}} - {{match.away_score}} {{away.tag}}</td>
    </tr>
    {% endfor %}
  </tbody>
 </table>