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
<h2>Schedule and Scores ({{page.year}})</h2>
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
    {% endfor %}
  </tbody>
 </table>