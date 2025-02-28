---
archetype: tournament
type: reg
year: 2019
title:  Regular Season Standings
style:  tabs       # defines body main class
script: standsched
layout: default
datatable: true
---
<h2>Regular Season Standings ({{page.year}})</h2>
This year, the top three teams qualify for semifinals. 4th place and 5th place play in the quarterfinals.
<table class="display">
  <caption style="text-align: center;"> <b>PF</b> = Points For, <b>PA</b> = Points Against, <b>+/-</b> = Point Differential<br><b>Tiebreakers</b>: 1.  Head to Head Record  2. Point Differential  3. Points  For </caption>
  <colgroup>
          <col class="twenty"/>
          <col class="twenty"/>
          <col class="ten"/>
          <col class="ten"/>
          <col class="ten"/>
          <col class="ten"/>
          <col class="ten"/>
      </colgroup>
  <thead>
    <tr>
      <th>Team</th>
      <th>Captain</th>
      <th>W</th>
      <th>L</th>
      <th>PF</th>
      <th>PA</th>
      <th>+/-</th>
    </tr>
  </thead>
  <tbody>
   {% for team_hash in site.data.seasons.nineteen.teams %}
   {% assign team = team_hash[1] %}
   {% if team.team_id != 0 %}

   {% assign pf = 0 %}
   {% assign pa = 0 %}
   {% for game_hash in site.data.seasons.nineteen.games %}
   {% assign game = game_hash[1] %}
   {% if game.stage == "reg" %}
   {% if game.home_team_id == team.team_id %}
   		{% assign pf = pf | plus: game.home_score %}
   		{% assign pa = pa | plus: game.away_score %}
   {% elsif game.away_team_id == team.team_id %}
   		{% assign pf = pf | plus: game.away_score %}
   		{% assign pa = pa | plus: game.home_score %}
   {% endif %}
   {% endif %}
   {% endfor %}
   <tr>
   	<td><a href="/{{page.year}}/teams/team{{team.team_id}}">{{team.name}}</a></td>
   	<td>{{team.captain}}</td>
   	<td>{{team.wins}}</td>
   	<td>{{team.losses}}</td>
   	<td>{{pf}}</td>
   	<td>{{pa}}</td>
   	<td>{{pf| minus: pa}}</td>
   </tr>
   {% endif %}
   {% endfor %}
  </tbody>
</table>