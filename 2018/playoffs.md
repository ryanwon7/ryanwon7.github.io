---
archetype: tournament
type: playoffs
year: 2018
style:  tabs       # defines body main class
script: standsched
layout: default
datatable: true
---
<h2> Playoff Bracket ({{page.year}}) </h2>
<h4> Champions: (2) Mula Gang</h4>

<img src="/resources/{{page.year}}/bracket.png" alt="Championship Bracket">

<br>
<h4> Match Pages </h4>
<p> Playoff Matches were played to 17 points (11 for 3rd place match).</p>
<table class="display3">
  <colgroup>
    <col class="thirty"/>
    <col class="fifteen"/>
    <col class="twenty"/>
    <col class="twenty"/>
    <col class="fifteen"/>
  </colgroup>
  <thead>
    <tr>
      <th>Matchup</th>
      <th>Match Page</th>
      <th>Stage</th>
      <th>Date and Time</th>
      <th>Result</th>
    </tr>
  </thead>
  <tbody>
    {% for game in site.data.seasons.eighteen.games %}
    {% assign match = game[1] %}
    {% if match.stage == "po" %}
    {% assign home = site.data.seasons.eighteen.teams[match.home_team_name] %}
    {% assign away = site.data.seasons.eighteen.teams[match.away_team_name] %}
    <tr>
      <td><b>{{home.name}} vs {{away.name}}</b></td>
      <td><a href="/{{page.year}}/games/game{{match.game_id}}">Match Stats</a></td>
      <td>{{match.type}}</td>
      <td>{{match.short_date}}, {{match.time}}</td>
      <td>{{home.tag}} {{match.home_score}} - {{match.away_score}} {{away.tag}}</td>
    </tr>
    {% endif %}
    {% endfor %}
  </tbody>
 </table>