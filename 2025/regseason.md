---
archetype: tournament
type: reg
year: 2025
title:  Regular Season Standings
style:  tabs       # defines body main class
script: standsched
layout: default
datatable: true
---
<h2> {{page.year}} Regular Season Standings </h2>
This year, the top three teams qualify for playoffs. 4th place will be eliminated. The 1st place regular season team gets a bye to the finals.
<table class="display">
  <caption style="text-align: center;"> <b>PF</b> = Points For/Scored, <b>PA</b> = Points Against, <b>+/-</b> = Point Differential<br><b>Tiebreakers</b>: 1.  Head to Head Record  2. Point Differential  3. Points  For </caption>
  <colgroup>
          <col class="twenty"/>
          <col class="ten"/>
          <col class="ten"/>
          <col class="ten"/>
          <col class="ten"/>
          <col class="ten"/>
          <col class="ten"/>
      </colgroup>
  <thead>
    <tr>
      <th>Team</th>
      <th>Tag</th>
      <th>Wins</th>
      <th>Loss</th>
      <th>PF</th>
      <th>PA</th>
      <th>+/-</th>
    </tr>
  </thead>
  <tbody>
   {% for team_hash in site.data.seasons.twentyfive.teams %}
   {% assign team = team_hash[1] %}

   {% assign pf = 0 %}
   {% assign pa = 0 %}
   {% for game_hash in site.data.seasons.twentyfive.games %}
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
   	<td>{{team.tag}}</td>
   	<td>{{team.wins}}</td>
   	<td>{{team.losses}}</td>
   	<td>{{pf}}</td>
   	<td>{{pa}}</td>
   	<td>{{pf| minus: pa}}</td>
   </tr>
   {% endfor %}
  </tbody>
</table>