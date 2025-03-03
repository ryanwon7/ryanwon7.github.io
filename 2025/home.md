---
archetype: tournament
type: home
year: 2025
title:  Home
style:  tabs       # defines body main class
script: standsched
layout: default
datatable: true
---
<h2>15th Jesuwon Basketball Tournament ({{page.year}})</h2>

<p> Welcome to the home page for the 15th Jesuwon Tournament! View the standings, schedule, and more using the links above. </p>

<h3> Recent Results </h3>
<table class="display3">
  <colgroup>
    <col class="fifty"/>
    <col class="thirty"/>
    <col class="twenty"/>
  </colgroup>
  <thead>
    <tr>
      <th>Matchup</th>
      <th>Date</th>
      <th>Result</th>
    </tr>
  </thead>
  <tbody>
    {% for game in site.data.seasons.twentyfive.games %}
    {% assign match = game[1] %}
    {% if match.game_id == 7 or match.game_id == 8 %}
    {% assign home = site.data.seasons.twentyfive.teams[match.home_team_name] %}
    {% assign away = site.data.seasons.twentyfive.teams[match.away_team_name] %}
      <tr>
        {% if match.fin == "no" %}
        <td>{{home.name}} <b>vs</b> {{away.name}}</td>
        <td>{{match.type}}, {{match.short_date}}</td>
        <td> TBD </td>
        {% else %}
        {% if match.home_score > match.away_score %}
        <td><u>{{home.name}}</u> <b>vs</b> {{away.name}}</td>
        <td>{{match.type}}, {{match .short_date}}</td>
        <td><u><b>{{match.home_score}}</b></u>-{{match.away_score}} {{match.ot}}</td>
        {% else %}
        <td>{{home.name}} <b>vs</b> <u>{{away.name}}</u></td>
        <td>{{match.type}}, {{match.short_date}}</td>
        <td>{{match.home_score}}-<u><b>{{match.away_score}}</b></u> {{match.ot}}</td>
        {% endif %}
        {% endif %}
      </tr>
      {% endif %}
      {% endfor %}
  </tbody>
 </table>

 <br>

 <h3> Current Standings </h3>
 The top three teams qualify for playoffs.
<table class="display6">
  <colgroup>
          <col class="forty"/>
          <col class="twenty"/>
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
      <th>+/-</th>
    </tr>
  </thead>
  <tbody>
   {% for team_hash in site.data.seasons.twentyfive.teams %}
   {% assign team = team_hash[1] %}
   {% if team.team_id != 0 %}

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
    <td>{{team.captain}}</td>
    <td>{{team.wins}}</td>
    <td>{{team.losses}}</td>
    <td>{{pf| minus: pa}}</td>
   </tr>
   {% endif %}
   {% endfor %}
  </tbody>
</table>