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
    <col class="twenty"/>
    <col class="fifteen"/>
    <col class="fifteen"/>
  </colgroup>
  <thead>
    <tr>
      <th>Matchup</th>
      <th>Stage</th>
      <th>Date and Time</th>
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
      <td>{{match.type}}</td>
      <td>{{match.short_date}}, {{match.time}}</td>
      {% if match.fin == "yes" %}
      <td>{{home.tag}} {{match.home_score}} - {{match.away_score}} {{away.tag}}</td>
      {% else %}
      <td> TBD </td>
      {% endif %}
    </tr>
    {% endfor %}
  </tbody>
 </table>