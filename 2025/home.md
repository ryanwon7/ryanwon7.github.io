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
<h2> {{page.year}} - 15th Jesuwon Basketball Tournament </h2>

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
    {% if match.game_id == 5 or match.game_id == 6 %}
	{% assign home = site.data.seasons.twentyfive.teams[match.home_team_name] %}
	{% assign away = site.data.seasons.twentyfive.teams[match.away_team_name] %}
    <tr>
      <td><b>{{home.name}} vs {{away.name}}</b></td>
      <td>{{match.type}}, {{match.short_date}}</td>
      {% if match.fin == "yes" %}
      {% if match.home_score > match.away_score %}
      <td>{{home.tag}} Win, {{match.home_score}}-{{match.away_score}} {{match.ot}}</td>
      {% else %}
      <td>{{away.tag}} Win, {{match.away_score}}-{{match.home_score}} {{match.ot}}</td>
      {% endif %}
      {% else %}
      <td> TBD </td>
      {% endif %}
    </tr>
     {% endif %}
    {% endfor %}
  </tbody>
 </table>