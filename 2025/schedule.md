---
archetype: tournament
type: schedule
year: 2025
title:  Schedule
style:  tabs       # defines body main class
script: standsched
layout: default
datatable: true
---
<h2> {{page.year}} Schedule and Scores </h2>
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
    {% endfor %}
  </tbody>
 </table>